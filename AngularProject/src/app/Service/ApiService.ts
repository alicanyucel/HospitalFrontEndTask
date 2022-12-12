import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import { DoctorModel } from '../Models/doctormodel';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  postPerson(personmodelobject: DoctorModel) {
    throw new Error('Method not implemented.');
  }
 // person dediğini doktor olarak alıyoruz
  constructor(private http:HttpClient) { }
  postDoctor(data:any){
  return this.http.post<any>("https://localhost:7069/api/doctor/",data)
  .pipe(map((res:any)=>{
    return res;
  }))
  }
  postHospital(data:any){
    return this.http.post<any>("https://localhost:7069/api/hospital/",data)
    .pipe(map((res:any)=>{
      return res;
    }))
}
  getHospital(){
    return this.http.get<any>("https://localhost:7069/api/hospital/")
    .pipe(map((res:any)=>{
      return res;
    }))
}
getDoctor(){
  return this.http.get<any>("https://localhost:7069/api/doctor/")
  .pipe(map((res:any)=>{
    return res;
  }))
  
}
DoctorByTc(data:string){
    return this.http.get<any>("https://localhost:7069/api/DoctorHospitalControler/"+ data)
    .pipe(map((res:any)=>{
      return res;
    }))
}
PersonById(data:number){
return this.http.get<any>("https://localhost:7069/api/doctor/"+data)
.pipe(map((res:any)=>{
  return res;
}))
}
}