import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CanComponentLeave } from 'src/app/guards/unsaved-changes.guard';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements CanComponentLeave {
 userName:FormControl=new FormControl();

  canLeave(): boolean{
    if(this.userName.dirty){
    return window.confirm('You have unsaved changes.Save it before you leaving');
    }
    else{
      return true;
    }
  };


}
