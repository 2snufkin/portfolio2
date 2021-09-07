import {Component, OnInit} from '@angular/core';
import {SaveService} from '../services/save.service';
import {User} from '../Class/user';

@Component({
  selector: 'app-about-you',
  templateUrl: './about-you.component.html',
  styleUrls: ['./about-you.component.css']
})
export class AboutYouComponent implements OnInit {

  sex = '';
  name = '';
  age = '';
  pro = '';
  src = '';

  show = true;

  constructor(private saveService: SaveService) {
  }

  ngOnInit(): void {
    const userBackup = this.saveService.getData();
    if (userBackup === null) {
      this.show = true;
    } else {
      this.name = userBackup.name;
      this.age = userBackup.age;
      this.pro = userBackup.pro;
      this.sex = userBackup.sex;
      this.show = false;
    }

  }

  onSave(): void {
    // create a user object
    const user = new User(this.name, this.age, this.pro, this.sex);
    // if (this.sex !== null) {
    //   this.sex = (this.sex === 'male') ? 'assets/man.png' : 'assets/woman.png';
    // }
    this.saveService.persistData(user);
    this.show = false;
  }

  onReset(): void {
    this.saveService.clear();
    this.name = '';
    this.age = '';
    this.pro = '';
    this.sex = '';
    this.show = true;
  }
}
