import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',
  template :'<h1>asslema{{title}} dans Angular',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ODDO BHF';
}
