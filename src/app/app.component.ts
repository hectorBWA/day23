import { Component } from '@angular/core';
import { Invention } from './shared/invention.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  // @Import class Invention;

  public model: Invention;

  // public : Invention;

  constructor(){
    this.model = new Invention();
    this.model.invention = 'new';
    this.model.name = 'old';
    this.model.year = 2005 ;
  }

  inputValue(){
    
  }
}
