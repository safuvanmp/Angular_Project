import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { GridviewComponent } from './../gridview.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

const gridRoute=[
  {
    path : 'view/gridview',
  component: GridviewComponent

  },
]

@NgModule({
  declarations: [
    GridviewComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(gridRoute),
    MatCardModule,
    MatToolbarModule
  ]
})
export class GridviewModule { }
