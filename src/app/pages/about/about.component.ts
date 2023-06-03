import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  id!: any;
  drink: any;
  ingredients: { measure: String; name: String; }[] = [];

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    // this.id = this.route.snapshot.params['id'];

    this.route.params.subscribe((params: Params) => {
      this.id = params['id']
      this.getData();
    })
  }

  getData() {
    this.http.get('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=' + this.id).subscribe((data: any) => {
      this.drink = data.drinks[0];
      this.checkIngr();
    })
  }

  checkIngr() {
    let i = 1;
    this.ingredients = [];

    while (this.drink['strIngredient' + i]) {
      this.ingredients.push({ measure: this.drink['strMeasure' + i], name: this.drink['strIngredient' + i] })
      i++;
    }
  }
}
