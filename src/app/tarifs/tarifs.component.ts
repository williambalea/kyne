import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tarifs',
  templateUrl: './tarifs.component.html',
  styleUrls: ['./tarifs.component.scss']
})
export class TarifsComponent implements OnInit {
  pricesMasso = [
    {service: "30 min", price: 40},
    {service: "60 min", price: 70},
    {service: "90 min", price: 95},
    {service: "120 min", price: 120},
    {service: "Pour enfant", price: 30},
  ];

  pricesOthers = [
    {service: "Massage aux pierres chaudes", price: 130},
    {service: "Massage aux quatres mains", price: 120},
    {service: "Drainage Lymphatique", price: 70},
    {service: "Réflexologie", price: 70},
    {service: "Ostéopathie", price: 80},
  ];

  
  constructor() { }

  ngOnInit(): void {
  }

}
