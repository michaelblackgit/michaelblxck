import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-art',
  templateUrl: './art.component.html',
  styleUrls: ['./art.component.css']
})
export class ArtComponent implements OnInit {

  art: any[];

  constructor() {
    this.art = this.getArt();
  }

  ngOnInit() {
  }

  getArt(): any[] {
    return [
      { name: 'The Star', ref: '../../assets/the_star.jpg' },
      { name: 'Two of Hearts', ref: '../../assets/two_of_hearts.jpg' },
      { name: 'Ace of Hearts', ref: '../../assets/ace_of_hearts.jpg' },
      { name: 'Jack of Spades', ref: '../../assets/jack_of_spades.jpg' }
    ];
  }

}
