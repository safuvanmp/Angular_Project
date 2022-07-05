import { RouterServiceService } from './../router-service.service';
import { data, delta, lastUpdated, covidTotal } from './../data';
import { Component, OnInit } from '@angular/core';
import { DataAccessService } from '../data-access.service';
import { CsvDataService } from '../csv-data.service';
@Component({
  selector: 'app-gridview',
  templateUrl: './gridview.component.html',
  styleUrls: ['./gridview.component.css']
})
export class GridviewComponent implements OnInit {

  datas:Array<data>;
  datas2:Array<data>=[];
  dat : Array<String> =[];
  deltas:Array<delta>;
  deltas2:Array<delta>=[];
  csvd: string;
  csvd2:string;
  hospob : number;
  homeobv: number;
  hosptodaysum: number;
  last:Array<delta>;
  hospob1 : number;
  homeobv1: number;
  hosptodaysum1: number;
  totSum = new covidTotal();
  totSum1 = new covidTotal();

    headerOfCell={
      "confirmed":"",
      "recovered":"",
      "active":"",
      "deceased":"",
      "total observation": "",
      "hospital observation": "",
      "home observation": "",
      "hospital today": "",
      "state":""
      }
  constructor(private myserve: DataAccessService, private myroute :RouterServiceService, private csvdata :CsvDataService) {
   this.datas = [];
   this.deltas =[];
   this.last =[];
   this.csvd ="";
   this.csvd2 ="";
  this.hospob = 0;
   this.homeobv = 0;
   this.hosptodaysum = 0;
   this.hospob1 = 0;
   this.homeobv1 = 0;
   this.hosptodaysum1= 0;

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

  export(){
    this.csvdata.csvHeaderMaker(this.headerOfCell);
      this.hospob=0;
        this.homeobv =0;
        this.hosptodaysum =0;

for (let i = 0; i < this.datas2.length; i++) {
        this.csvd = this.csvdata.csvmaker(this.datas2[i]);

        this.hospob = this.hospob + this.datas2[i].hospital_obs;
        this.homeobv = this.homeobv + this.datas2[i].home_obs;
        this.hosptodaysum= this.hosptodaysum + this.datas2[i].hospital_today;
        console.log(this.homeobv);
}

  this.csvd = this.csvdata.csvmaker(this.headerOfCell);
this.totSum.confirmed="";
this.totSum.recovered ="";
this.totSum.active ="";
this.totSum.deceased ="";
this.totSum['total observation']="Total";
this.totSum['hospital observation']=this.hospob;
this.totSum['home observation']=this.homeobv;
this.totSum['hospital today']=this.hosptodaysum;
this.csvd = this.csvdata.csvmaker(this.totSum);

this.csvdata.download(this.csvd);
  }
  deltaData(){

    this.csvdata.csvHeaderMaker(this.headerOfCell);
      this.hospob1=0;
        this.homeobv1 =0;
        this.hosptodaysum1 =0;

for (let i = 0; i < this.deltas2.length; i++) {
        this.csvd2 = this.csvdata.csvmaker(this.deltas[i]);

        this.hospob1 = this.hospob1 + this.deltas2[i].hospital_obs;
        this.homeobv1 = this.homeobv1 + this.deltas2[i].home_obs;
        this.hosptodaysum1= this.hosptodaysum1 + this.deltas2[i].hospital_today;
        console.log(this.homeobv);
}
  this.csvd2 = this.csvdata.csvmaker(this.headerOfCell);
  this.totSum1.confirmed="";
  this.totSum1.recovered ="";
  this.totSum1.active ="";
  this.totSum1.deceased ="";
  this.totSum1['total observation']="Total";
  this.totSum1['hospital observation']=this.hospob1;
  this.totSum1['home observation']=this.homeobv1;
  this.totSum1['hospital today']=this.hosptodaysum1;
this.csvd2 = this.csvdata.csvmaker(this.totSum1);

this.csvdata.download(this.csvd2);
  }

    login(){

      this.myroute.routeToListView();
    }
    home(){
      this.myroute.routeToHome();
    }
  }
