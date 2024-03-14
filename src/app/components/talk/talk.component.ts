import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-talk',
  templateUrl: './talk.component.html',
  styleUrls: ['./talk.component.scss']
})
export class TalkComponent implements OnInit{
filtriForm!:FormGroup
categories:any[]=['Fitness','Business','Career','Work','Travels','Health']
ngOnInit(): void {
}

}
