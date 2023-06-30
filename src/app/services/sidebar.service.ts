import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  isSidebarOpen= new BehaviorSubject<boolean>(false)
  
  
  getSidebarOpen() {
  return  this.isSidebarOpen.asObservable()
  }
}
