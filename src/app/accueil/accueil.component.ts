import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {
  team = [
    {photo: 'url(/assets/team/lumy.jpg)', name: 'Luminita Gheorghe', title: 'Orthothérapeute'},
    {photo: 'url(/assets/team/caro.jpg)', name: 'Caroline Otis', title: 'Kinésithérapeute'},
    {photo: 'url(/assets/team/david.jpg)', name: 'David Desrochers', title: 'Orthothérapeute'},
    // {photo: 'url(/assets/team/carl.jpg)', name: 'Carl O\'Reilly', title: 'Orthothérapeute'},
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
