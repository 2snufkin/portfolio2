import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AboutComponent} from './about/about.component';
import {ContactComponent} from './contact/contact.component';
import {VideoListComponent} from './channel/video-list/video-list.component';
import {SkillsListComponent} from './skills/skills-list/skills-list.component';
import {PortfolioComponent} from './portfolio/portfolio.component';
import {AboutYouComponent} from './about-you/about-you.component';

const routes: Routes = [
  {path: 'about', component: AboutComponent, data: {animation: 'AboutPage'}},
  {path: 'about you', component: AboutYouComponent, data: {animation: 'HomePage'}},
  {path: 'skills', component: SkillsListComponent, data: {animation: 'AboutPage'}},
  {path: 'portfolio', component: PortfolioComponent,  data: {animation: 'FilterPage'}},
  {path: 'contact', component: ContactComponent, data: {animation: 'AboutPage'}},
  {path: 'channel', component: VideoListComponent, data: {animation: 'HomePage'} },
  {path: '', component: AboutComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
