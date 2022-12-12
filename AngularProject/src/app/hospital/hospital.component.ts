import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Hospital } from '../Models/hospitalmodel';
import { ApiService } from '../Service/ApiService';

@Component({
  selector: 'app-hospital',
  templateUrl: './hospital.component.html',
  styleUrls: ['./hospital.component.css']
})
export class HospitalComponent   implements OnInit{
  formvalues!:FormGroup;
  hospitalmodelobject:Hospital =new Hospital();
  hospitaldata!:any;

constructor(private formbuilder:FormBuilder,
 private api:ApiService){}
 
 ngOnInit(): void {
  this.formvalues=this.formbuilder.group({
   hospitalname  :[''],
   
    hospitaladress:[''],
  })
  this.getAllHospital();
  }
  postHospitalDetay()
  {
  this.hospitalmodelobject.hospitalname=this.formvalues.value.hospitalname;
  this.hospitalmodelobject.hospitaladress=this.formvalues.value.hospitaladress;
  
  this.api.postHospital(this.hospitalmodelobject).
  subscribe(res=>{
    console.log(res);
    alert("hastane eklendi");
    
   this.formvalues.reset();
   this.getAllHospital();
  })
  }
  getAllHospital()
  {
  this.api.getHospital()
  .subscribe(res=>{
   this.hospitaldata=res; 
  })
}
}

