import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  openHours = [
    {day: 'Lundi', hours: '9h00 - 19h00'},
    {day: 'Mardi', hours: '9h00 - 19h00'},
    {day: 'Mercredi', hours: '9h00 - 19h00'},
    {day: 'Jeudi', hours: '9h00 - 19h00'},
    {day: 'Vendredi', hours: '9h00 - 19h00'},
    {day: 'Samedi', hours: '9h00 - 13h00'},
    {day: 'Dimanche', hours: 'Fermé'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

  openMaps() {
    window.open('https://g.page/kynesiolux?share');
  }
}
