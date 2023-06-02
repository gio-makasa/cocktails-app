import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  drinks: any = [];

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.http.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?${this.route.snapshot.params['filter']}=${this.route.snapshot.params['filterValue']}`).subscribe(
      (data: any) => {
        if (data) {
          this.drinks = data.drinks;
        }
      }
    )
  }
}
