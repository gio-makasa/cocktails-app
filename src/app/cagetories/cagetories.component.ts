import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cagetories',
  templateUrl: './cagetories.component.html',
  styleUrls: ['./cagetories.component.scss']
})
export class CagetoriesComponent {
  @Input() title!: String;
  drinks: any = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.http.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${this.title}`).subscribe(
      (data: any) => {
        this.drinks = data.drinks.slice(0, 10);
      }
    )
  }
}
