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
    { label: 'Accueil', icon: '', link: 'accueil', activated: true },
    { label: 'Services', link: 'services', activated: false },
    { label: 'Tarifs', link: 'tarifs', activated: false },
    { label: 'Nous contacter', link: 'contacts', activated: false }
  ];

  phone = "514-513-2856";
}
