import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-talk',
  templateUrl: './talk.component.html',
  styleUrls: ['./talk.component.scss']
})
export class TalkComponent implements OnInit{
filtriForm!:FormGroup
categories:any[]=['Fitness','Business','Career','Work','Travels','Health']
ngOnInit(): void {
  this.filtriForm= new FormGroup({
    categoria: new FormControl('',Validators.required),
    titolo: new FormControl('',Validators.required),
    autore: new FormControl('',Validators.required),
    data: new FormControl('',Validators.required)
  })
}


searchTalks(){
  console.log(
    this.filtriForm.value
  )
}

}
