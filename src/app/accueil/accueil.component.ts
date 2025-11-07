import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {
  team = [
    {photo: 'url(/assets/team/lumy.jpg)', name: 'Luminita Gheorghe', title: 'Orthothérapeute'},
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
