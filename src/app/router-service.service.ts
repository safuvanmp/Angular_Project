import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RouterServiceService {

  constructor(private routserve : Router) {}

    routeToListView() {
      this.routserve.navigate(['view/listview'])
    }
    routeToDashboard() {
      this.routserve.navigate(['view/gridview'])
    }
    routeToHome() {
      this.routserve.navigate(['home'])
    }

}
