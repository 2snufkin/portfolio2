import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AboutComponent} from './about/about.component';
import {ContactComponent} from './contact/contact.component';
import {VideoListComponent} from './channel/video-list/video-list.component';
import {SkillsListComponent} from './skills/skills-list/skills-list.component';
import {PortfolioComponent} from './portfolio/portfolio.component';
import {AboutYouComponent} from './about-you/about-you.component';
import {HobbiesComponent} from './hobbies/hobbies.component';
import {TestComponent} from './test/test.component';

const routes: Routes = [
  {path: 'about', component: AboutComponent, data: {animation: 'pini'}},
  {path: 'about you', component: AboutYouComponent, data: {animation: 'HomePage'}},
  {path: 'skills', component: SkillsListComponent, data: {animation: 'AboutPage'}},
  {path: 'portfolio', component: PortfolioComponent,  data: {animation: 'FilterPage'}},
  {path: 'contact', component: ContactComponent, data: {animation: 'AboutPage'}},
  {path: 'hobbies', component: HobbiesComponent, data: {animation: 'HomePage'} },
  {path: 'test', component: TestComponent },
  {path: '', component: AboutComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
