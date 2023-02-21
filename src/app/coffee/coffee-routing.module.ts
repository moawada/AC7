import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoffeeDetailsComponent } from './coffee-list/coffee-details/coffee-details.component';
import { CoffeeListComponent } from './coffee-list/coffee-list.component';
import { CoffeeComponent } from './coffee.component';

const routes: Routes = [
  {
    path: '',
    component: CoffeeListComponent,
    children: [
      {
        path: ':id',
        component: CoffeeDetailsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoffeeRoutingModule { }
