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
isHuman:boolean=false
randomNumbers:number[]=[]
verificaNumbersForm!:FormGroup
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

this.verificaNumbersForm=new FormGroup ({
numero1 : new FormControl('',Validators.required),
numero2 : new FormControl('',Validators.required),
numero3 : new FormControl('',Validators.required),
numero4 : new FormControl('',Validators.required),
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
let array:number[]=[]
  for(let i=0 ;i<=3;i++){
array.push(Math.round(Math.random()*99))
this.randomNumbers=array
}
}

verificaCodice(){
  if(this.randomNumbers.length>0){
if(this.randomNumbers[0]==this.verificaNumbersForm.controls['numero1'].value&&
this.randomNumbers[1]==this.verificaNumbersForm.controls['numero2'].value&&
this.randomNumbers[2]==this.verificaNumbersForm.controls['numero3'].value&&
this.randomNumbers[3]==this.verificaNumbersForm.controls['numero4'].value){
  this.isHuman=true
  this.inviaRihiestaTalk()
}else{
  this.toastr.show("I codici non coincidono, riprova o richiedi un nuovo codice")
}
  }
}

inviaRihiestaTalk(){
  this.submitted=true
  if(this.contactForm.valid&&this.isHuman){
    console.log('ok')
    this.contactService.postRichiestaTalk({})
  }else{
    this.toastr.show("Sembra che il form sia invalido")
  }
}
}
