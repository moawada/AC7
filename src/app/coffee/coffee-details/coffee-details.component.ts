import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { ICoffeeInfo } from 'src/app/models/coffee.models';
import * as coffeeSelectors from 'src/app/store/selectors/selector';


@Component({
  selector: 'app-coffee-details',
  templateUrl: './coffee-details.component.html',
  styleUrls: ['./coffee-details.component.scss']
})


export class CoffeeDetailsComponent implements OnInit {

  public columnsToDisplay = ['id', 'uid', 'blend_name', 'origin', 'variety', 'notes', 'intensifier'];
  public showFiller = false;

  @Input() selectedCoffee : ICoffeeInfo;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<coffeeSelectors.AppState>
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe( paramMap => {
      let id = parseInt(paramMap.get("id") || "");
      this.store.select(coffeeSelectors.getItemById(id))
        .subscribe((item) => {
          console.log("item: ",item);
          if (item) {
            this.selectedCoffee = item;
          }
          else {
            this.router.navigate(["404"]);
          }
        });
    });
  }
}