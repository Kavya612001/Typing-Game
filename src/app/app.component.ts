import { Component } from '@angular/core';
import { lorem } from 'faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  randomSentence: string = "";
  userInput: string = "";
  correctCharacter:boolean = false;

  constructor() {
    this.randomSentence = lorem.sentence();
  }

  onChangeInput(event: Event) {
    this.userInput = ((event.target as HTMLInputElement).value);
  }

  compareText(randomLetter: string, userLetter: string): string {
    if(!userLetter) {
      return 'pending';
    }
    return randomLetter === userLetter ? 'correct' : 'incorrect';
  }
}
