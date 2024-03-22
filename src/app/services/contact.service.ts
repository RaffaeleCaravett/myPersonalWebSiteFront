import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})


export class ContactService{

private auth:string='/auth'
private categoria:string='/categoria'

constructor(private http:HttpClient){}


}
