import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LayoutModule} from '@angular/cdk/layout';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {AboutComponent} from './about/about.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {AboutYouComponent} from './about-you/about-you.component';
import {SkillsComponent} from './skills/skills.component';
import {ContactComponent} from './contact/contact.component';
import {MatRadioModule} from '@angular/material/radio';
import {environment} from '../environments/environment';
import {MatDialogModule} from '@angular/material/dialog';
import {DialogComponent} from './dialog/dialog.component';
import {VideoSingleComponent} from './channel/video-single/video-single.component';
import {VideoListComponent} from './channel/video-list/video-list.component';
import {SkillsListComponent} from './skills/skills-list/skills-list.component';
import {PortfolioComponent} from './portfolio/portfolio.component';
import {HomeComponent} from './nav-bar/home.component';
import {TitleComponent} from './nav-bar/title/title.component';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {PortfolioSingleComponent} from './portfolio/portfolio-single/portfolio-single.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TitleComponent,
    AboutComponent,
    AboutYouComponent,
    SkillsComponent,
    ContactComponent,
    DialogComponent,
    VideoSingleComponent,
    VideoListComponent,
    SkillsListComponent,
    PortfolioComponent,
    PortfolioSingleComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatFormFieldModule,
    FormsModule,
    MatCardModule,
    MatInputModule,
    MatRadioModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    MatDialogModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
