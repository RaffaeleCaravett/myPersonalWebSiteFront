import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit{

list:any[]=[]


ngOnInit(): void {
this.list=[
  'Home',
  'Talks',
  'Channels',
  'Mission',
  'About the author',
  'Contact'
]
}
}
