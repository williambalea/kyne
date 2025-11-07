import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tarifs',
  templateUrl: './tarifs.component.html',
  styleUrls: ['./tarifs.component.scss']
})
export class TarifsComponent implements OnInit {
  pricesMasso = [
    {service: "30 min", price: 60},
    {service: "60 min", price: 100},
    {service: "90 min", price: 125},
    {service: "120 min", price: 150},
    {service: "Pour enfant", price: 30},
  ];

  pricesOthers = [
    {service: "Massage aux pierres chaudes", price: 130},
    {service: "Drainage Lymphatique", price: 100},
  ];

  
  constructor() { }

  ngOnInit(): void {
  }

}
