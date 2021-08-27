import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  title = 'Message sent';
  body = 'Your message has been sent successfully, you will redirected to the main page';
  constructor() { }

  ngOnInit(): void {
  }

}
