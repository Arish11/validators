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
  invalidRecords = false
  recordsExceded = false

  wordCounter(){
    var records = this.text ? this.text.split(/\s+/) : 0;
    if(records.length !== 0){
      for (let i = 0; i<records.length; i++ ){
        if(records[i].length === 4 || records[i].length === 13){
            this.validRecordsArr.push(records[i])
        }else{
          this.inValidRecordsArr.push(records[i])
        }
      }
      if((this.inValidRecordsArr.length+this.validRecordsArr.length) > 10){
        this.recordsExceded = true
      }else if(this.inValidRecordsArr.length !== 0){
        this.invalidRecords = true
      }else{
        console.log("I got into the else to change flag status")
        this.recordsExceded = false
        this.invalidRecords = false
      }
    }
    console.log("this event is triggered and valid inputs are " + this.validRecordsArr)
    console.log("this event is triggered and invalid inputs are " + this.inValidRecordsArr)
    records = null
    this.validRecordsArr = []
    this.inValidRecordsArr = []
  }



  ngOnInit(): void {

  }
}
