import { Injectable } from '@angular/core';

import { LoremIpsum } from "lorem-ipsum";

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 10,
    min: 2
  },
  wordsPerSentence: {
    max: 20,
    min: 5
  }
});

@Injectable({
  providedIn: 'root'
})
export class GeneratetextService {

  generateRandomText(): string{
    return lorem.generateWords(this.calculateWords());
  }

  calculateWords():number{
    return Math.floor(50 * Math.random());
  }

}
