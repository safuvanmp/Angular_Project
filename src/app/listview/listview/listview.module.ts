import { ListviewComponent } from './../listview.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';

const listRoute=[
  {
    path : 'view/listview',
  component: ListviewComponent

  }
]
@NgModule({
  declarations: [
    ListviewComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(listRoute),
    MatToolbarModule,
  ]
})
export class ListviewModule { }
