import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mail-Service';
  emailTo='vinodkatta3@gmail.com';
  replyEmail='vinodkatta706517@gmail.com';
  ccEmail='vinodkatta309@gmail.com';
  subject='Mail Service-vinod task';
  body='Hi,%0AThis message is from outlook app.reply-to attribute is not set.';
  
}
export class showEmailDiv{
  showdiv=true;
}
