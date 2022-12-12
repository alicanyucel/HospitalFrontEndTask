import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DoctorModel } from '../Models/doctormodel';
import { ApiService } from '../Service/ApiService';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {

  formvalues!:FormGroup;
  personmodelobject:DoctorModel =new DoctorModel();
  doctordata!:any;

constructor(private formbuilder:FormBuilder,
 private api:ApiService){}
 
 ngOnInit(): void {
  this.formvalues=this.formbuilder.group({
    doctortc :[''],
    doctorad: [''],
    doktorsoyad:[''],
  })
  this.getAllPerson();
  }
  postPersonDetay()
  {
  this.personmodelobject.doktortc=this.formvalues.value.firstname;
  this.personmodelobject.doktorad=this.formvalues.value.lastname;
  this.personmodelobject.doktorsoyad=this.formvalues.value.email;
  this.api.postDoctor(this.personmodelobject).
  subscribe(res=>{
    console.log(res);
    alert("doktor eklendi");
    
   this.formvalues.reset();
   this.getAllPerson();
  })
  }
  getAllPerson()
  {
  this.api.getDoctor()
  .subscribe(res=>{
   this.doctordata=res; 
  })
}
}
  
  
   
   