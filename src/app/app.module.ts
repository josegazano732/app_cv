import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { EducationComponent } from './components/education/education.component';
import { SkillsComponent } from './components/skills/skills.component';
import { FooterComponent } from './components/footer/footer.component';
import { DownloadButtonComponent } from './components/download-button/download-button.component';
import { LucideAngularModule, Github, Linkedin, Mail, MapPin, Phone, Download } from 'lucide-angular';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProfileComponent,
    ExperienceComponent,
    EducationComponent,
    SkillsComponent,
    FooterComponent,
    DownloadButtonComponent
  ],
  imports: [
    BrowserModule,
    LucideAngularModule.pick({ Github, Linkedin, Mail, MapPin, Phone, Download })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }