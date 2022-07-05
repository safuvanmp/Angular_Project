import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class CsvDataService {
 csvRows: Array<any> = [];
  constructor() {

    }

 download (data: any) {

  const blob = new Blob([data], { type: 'text/csv' });
  const url = window.URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.setAttribute('href', url)
  a.setAttribute('download', 'Report.csv');
  a.click()

this.csvRows =[]
}

csvHeaderMaker(data:any){
    const headers = Object.keys(data);
console.log(headers)
 this.csvRows.push(headers.join(','));
}

 csvmaker (data:any) {
  const values = Object.values(data).join(',');
  this.csvRows.push(values);
  return this.csvRows.join('\n')
}
}
