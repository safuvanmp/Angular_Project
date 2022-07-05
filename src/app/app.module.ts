import { GridviewModule } from './gridview/gridview/gridview.module';
import { RouterServiceService } from './router-service.service';
import { RouterModule, Routes } from '@angular/router';
import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { DataAccessService } from './data-access.service';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import { HomeComponent } from './home/home.component';
import { ListviewModule } from './listview/listview/listview.module';
import { FooterComponent } from './footer/footer.component';
import { CsvDataService } from './csv-data.service';
const routes : Routes =[
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
  path:'view/gridview', loadChildren: './gridview/gridview/gridview.module#GridviewModule'
  },
  {
    path:'view/listview', loadChildren: './listview/listview/listview.module#ListviewModule'
    }

  ];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
   RouterModule.forRoot(routes),
    MatToolbarModule,
    HttpClientModule,
    MatCardModule,
    MatTableModule,
    GridviewModule,
    ListviewModule,

  ],
  providers: [
    RouterServiceService,
    DataAccessService,
    CsvDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
