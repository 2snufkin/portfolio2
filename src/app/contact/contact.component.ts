import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Mail} from '../Class/Mail';
import {FirebaseService} from '../services/firebase.service';
import {SaveService} from '../services/save.service';
import {MatDialog} from '@angular/material/dialog';
import {DialogComponent} from '../dialog/dialog.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  name = '';

  constructor(private fire: FirebaseService, private saveService: SaveService,
              public dialog: MatDialog, private route: Router) {
  }

  ngOnInit(): void {
    const userBackup = this.saveService.getData();
    this.name = userBackup?.name;
  }

  onsubmit(form: NgForm): void {
    const email = form.value.email;
    const message = form.value.message;
    const subject = form.value.subject;
    const send = new Mail(this.name, email, subject, message);
    const mailSend = JSON.parse(JSON.stringify(send));
    this.fire.sendMail(mailSend)
      .then((response: any) => {
          this.dialog.open(DialogComponent);
           setTimeout(() => {
             this.dialog.closeAll();
               this.route.navigateByUrl('about');
             }
      , 3000);

  }).catch( (error: any) => console.log("something isnt right with the sending of the email"))
}


}


