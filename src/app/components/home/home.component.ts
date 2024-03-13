import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

windowWidth:number=0

ngOnInit(): void {
  this.windowWidth=window.innerWidth
}

@HostListener('window:resize', ['$event'])
onResize(event:any) {
this.windowWidth=window.innerWidth
}
}
