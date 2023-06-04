import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  searchWord: String = '';
  drinks: any = null;
  alcoholics: { strAlcoholic: String }[] = [];

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    this.http.get('https://www.thecocktaildb.com/api/json/v1/1/list.php?a=list').subscribe(
      (data: any) => {
        this.alcoholics = data.drinks
      });
  }

  Search(e: any) {
    if (e.value.length > 0) {
      this.http.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + e.value).subscribe(
        (data: any) => {
          this.drinks = data.drinks
        })
    } else {
      this.drinks = null;
    }
  }

  toAbout(id: number) {
    this.drinks = null;
    this.searchWord = '';
    this.router.navigate(['/about', id]);
  }

  alcoholic(e: any) {
    this.router.navigate(['/list', 'a', e.value]);
  }
}
