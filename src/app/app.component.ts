import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tender-cuts';

  check:boolean = false
  openCart(){
    this.check = true;
  }
}
