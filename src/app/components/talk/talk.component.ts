import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { TalkService } from 'src/app/services/talk.service';

@Component({
  selector: 'app-talk',
  templateUrl: './talk.component.html',
  styleUrls: ['./talk.component.scss']
})
export class TalkComponent implements OnInit{
filtriForm!:FormGroup
categories:any[]=[]

constructor(private talkService:TalkService,private toastr:ToastrService){}

ngOnInit(): void {
  this.filtriForm= new FormGroup({
    categoria: new FormControl('',Validators.required),
    titolo: new FormControl('',Validators.required),
    autore: new FormControl('',Validators.required),
    data: new FormControl('',Validators.required)
  })

  this.talkService.getAllCategories().subscribe({
    next:(categorie:any)=>{
    if(categorie){
      this.categories=categorie
    }else{
  this.toastr.show("Problema nel reperire le categorie.")
  }
    },
  error:(err:any)=>{
    this.toastr.show(err.error.messsage||"Problema nel reperire le categorie.")

  },
  complete:()=>{}
  })
}


searchTalks(){
  console.log(
    this.filtriForm.value
  )
}

}
