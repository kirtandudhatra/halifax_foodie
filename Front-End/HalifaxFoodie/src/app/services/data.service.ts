import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  selectedRest: string = ""
  selectedRestCode: any 
  
  constructor() { }
}
