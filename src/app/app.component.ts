import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'validators';
  text :any
  validRecordsArr:any = []
  inValidRecordsArr:any = []

  wordCounter(){
    var record = this.text ? this.text.split(/\s+/) : 0;
    if(record.length !== 0){
      for (let i = 0; i<record.length; i++ ){
        if(record[i].length === 4 || record[i].length === 13){
            this.validRecordsArr.push(record[i])
        }else{
          this.inValidRecordsArr.push(record[i])
        }
      }
      if((this.inValidRecordsArr.length+this.validRecordsArr.length) > 10){
        alert("The records have exceded limit")
      }
    }
    console.log("this event is triggered and valid inputs are " + this.validRecordsArr)
    console.log("this event is triggered and invalid inputs are " + this.inValidRecordsArr)
  }

// 1234
// 1231
// 424
// 234345
// 234256554
// 23434667675
// 234345234235
// 1234566543211


  ngOnInit(): void {

  }
}
