import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  drink: any;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    this.http.get('https://www.thecocktaildb.com/api/json/v1/1/random.php').subscribe(
      (data: any) => {
        this.drink = data.drinks[0];
        console.log(this.drink)
      })
  }

  checkIngr(item: any) {
    if (item.value && item.key.includes('strIngredient')) {
      return true;
    } else {
      return false;
    }
  }
}
