import { Injectable } from '@angular/core';
import {HttpClient} from  '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  baseUrl:string = "'http://18.223.119.112:8085/cue"

  constructor(private http: HttpClient) { }

  get_AllEvents(){
    return this.http.get(this.baseUrl+'/api');
  }
}
