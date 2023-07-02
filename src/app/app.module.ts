import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ResumeCompComponent } from './resume-comp/resume-comp.component';
import { ExperienceCompComponent } from './experience-comp/experience-comp.component';
import { SkillsCompComponent } from './skills-comp/skills-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    ResumeCompComponent,
    ExperienceCompComponent,
    SkillsCompComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
