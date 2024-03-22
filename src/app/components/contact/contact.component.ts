import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
contactForm!:FormGroup
submitted:boolean=false
categorie:any[]=[]
constructor(private contactService:ContactService,private toastr:ToastrService){}

ngOnInit(): void {
this.contactForm=new FormGroup({
  nome:new FormControl('',Validators.required),
  cognome:new FormControl('',Validators.required),
  eta:new FormControl('',[Validators.required,Validators.min(18)]),
  email:new FormControl('',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
  professione:new FormControl('',Validators.required),
  link:new FormControl('',Validators.required),
  categoria:new FormControl('',Validators.required)
})
this.contactService.getAllCategories().subscribe({
  next:(categories:any)=>{
  if(categories){
    this.categorie=categories
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


richiediCodice(){
this.submitted=true
}

}
