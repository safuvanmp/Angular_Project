import { RouterServiceService } from './../router-service.service';
import { data, delta, lastUpdated } from './../data';
import { Component, OnInit } from '@angular/core';
import { DataAccessService } from '../data-access.service';
import { ngxCsv } from 'ngx-csv/ngx-csv';
@Component({
  selector: 'app-gridview',
  templateUrl: './gridview.component.html',
  styleUrls: ['./gridview.component.css']
})
export class GridviewComponent implements OnInit {

  datas:Array<data>;
  datas2:Array<data>=[];
  deltas:Array<delta>;
  deltas2:Array<delta>=[];

  last:Array<delta>;
  constructor(private myserve: DataAccessService, private myroute :RouterServiceService) {
   this.datas = [];
   this.deltas =[];
   this.last =[];
  }

  ngOnInit(): void {
   this.myserve.getmyacct().subscribe(
    res => {

      this.datas.push(res.summary.Thiruvananthapuram);
      this.datas.push(res.summary.Kollam);
      this.datas.push(res.summary.Pathanamthitta);
      this.datas.push(res.summary.Alappuzha);
      this.datas.push(res.summary.Kottayam);
      this.datas.push(res.summary.Idukki);
      this.datas.push(res.summary.Ernakulam);
      this.datas.push(res.summary.Thrissur);
      this.datas.push(res.summary.Palakkad);
      this.datas.push(res.summary.Malappuram);
      this.datas.push(res.summary.Kozhikode);
      this.datas.push(res.summary.Wayanad);
      this.datas.push(res.summary.Kannur);
      this.datas.push(res.summary.Kasaragod);

      this.deltas.push(res.delta.Thiruvananthapuram);
      this.deltas.push(res.delta.Kollam);
      this.deltas.push(res.delta.Pathanamthitta);
      this.deltas.push(res.delta.Alappuzha);
      this.deltas.push(res.delta.Kottayam);
      this.deltas.push(res.delta.Idukki);
      this.deltas.push(res.delta.Ernakulam);
      this.deltas.push(res.delta.Thrissur);
      this.deltas.push(res.delta.Palakkad);
      this.deltas.push(res.delta.Malappuram);
      this.deltas.push(res.delta.Kozhikode);
      this.deltas.push(res.delta.Wayanad);
      this.deltas.push(res.delta.Kannur);
      this.deltas.push(res.delta.Kasaragod);

      this.last.push(res.last_updated);

       this.datas2 =this.datas;
       this.deltas2 = this.deltas;

      this.datas2[0].state="Thiruvananthapuram";
      this.datas2[1].state="Kollam";
      this.datas2[2].state="Pathanamthitta";
      this.datas2[3].state="Alappuzha";
      this.datas2[4].state="Kottayam";
      this.datas2[5].state="Idukki";
      this.datas2[6].state="Ernakulam";
      this.datas2[7].state="Thrissur";
      this.datas2[8].state="Palakkad";
      this.datas2[9].state="Malappuram";
      this.datas2[10].state="Kozhikode";
      this.datas2[11].state="Wayanad";
      this.datas2[12].state="Kannur";
      this.datas2[13].state="Kasaragod";

      this.deltas2[0].state="Thiruvananthapuram";
      this.deltas2[1].state="Kollam";
      this.deltas2[2].state="Pathanamthitta";
      this.deltas2[3].state="Alappuzha";
      this.deltas2[4].state="Kottayam";
      this.deltas2[5].state="Idukki";
      this.deltas2[6].state="Ernakulam";
      this.deltas2[7].state="Thrissur";
      this.deltas2[8].state="Palakkad";
      this.deltas2[9].state="Malappuram";
      this.deltas2[10].state="Kozhikode";
      this.deltas2[11].state="Wayanad";
      this.deltas2[12].state="Kannur";
      this.deltas2[13].state="Kasaragod";

      console.log(this.datas2[0].active)

    console.log(this.datas);

      console.log(typeof this.datas2);
      console.log(typeof this.datas);



    }
, err => {

}
   );
  }
  downloadFile(){
      var options = {
        fieldSeparator: ',',
        quoteStrings: '"',
        decimalseparator: '.',
        showLabels: true,
        showTitle: true,
        title: 'Report data',
        useBom: true,
        headers: ["confirmed", "recovered", "active","deceased","total observation","hospital observation","home observation","hospital today","state"]
      };

     new ngxCsv(this.datas2, "Report", options);
    }

    fileDownloadDelta(){
      var options = {
        fieldSeparator: ',',
        quoteStrings: '"',
        decimalseparator: '.',
        showLabels: true,
        showTitle: true,
        title: 'Report data',
        useBom: true,
        headers: ["confirmed", "recovered", "active","deceased","total observation","hospital observation","home observation","hospital today","state"]
      };

     new ngxCsv(this.deltas2, "Delta-Report", options);
    }

    login(){

      this.myroute.routeToListView();
    }
    home(){
      this.myroute.routeToHome();
    }
  }

