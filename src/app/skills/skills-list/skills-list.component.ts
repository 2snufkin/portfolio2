import { Component, OnInit } from '@angular/core';
import {SkillsService} from '../../services/skills.service';

@Component({
  selector: 'app-skills-list',
  templateUrl: './skills-list.component.html',
  styleUrls: ['./skills-list.component.css']
})
export class SkillsListComponent implements OnInit {
  skills: any = [];
  constructor(private skillsService: SkillsService) {
  }

  ngOnInit(): void {
    this.skills = this.skillsService.skills;
    console.log(this.skills);
  }

}
