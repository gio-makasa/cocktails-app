import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  drink: any;
  ingredients: { measure: String; name: String; }[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    this.http.get('https://www.thecocktaildb.com/api/json/v1/1/random.php').subscribe(
      (data: any) => {
        this.drink = data.drinks[0];
        this.checkIngr();
      })
  }

  checkIngr() {
    console.log(this.drink);
    let i = 1;

    while (this.drink['strIngredient' + i]) {
      this.ingredients.push({ measure: this.drink['strMeasure' + i], name: this.drink['strIngredient' + i] })
      i++;
    }
  }
}
