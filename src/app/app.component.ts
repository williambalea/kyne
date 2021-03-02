import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'kyne';

  // icon: '' if i want to insert icons in the future
  destinations = [
    { label: 'Accueil', icon: '', activated: true },
    { label: 'Tarifs', activated: false },
    { label: 'Notre équipe', activated: false },
    { label: 'Nous contacter', activated: false }
  ];
}
