import { Component } from '@angular/core';

@Component({
  selector: 'app-resume-comp',
  templateUrl: './resume-comp.component.html',
  styleUrls: ['./resume-comp.component.css']
})
export class ResumeCompComponent {
  public FullName:string="Троценкова Анастасія Валеріївна";
  public Phone:string="065-454-45-45";
  public E_Mail:string="ans@gmail.com";
  public City:string="Хмельницький";
  public birthday:string="02.03.04";

}
