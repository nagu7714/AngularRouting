import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.activatedRoute.snapshot.data);
  }

  users:any[] = [
    {id:101 ,name:'nagaraj',dep:'IT'},
    {id:102 ,name:'david',dep:'accounts'},
    {id:103 ,name:'chrish',dep:'admin'},
  ]

}
