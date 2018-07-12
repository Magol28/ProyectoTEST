import { Component } from '@angular/core';

import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  values;
  constructor(private router: Router){}
  onKey(event: any) { // without type info
    let profesor=event.target.value;

    this.router.navigate(['/Teacher', profesor]);
    
  }
}
