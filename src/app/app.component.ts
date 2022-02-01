import { Component, ViewChild } from '@angular/core';
import { logo } from '../assets/logo/hotstones-logo'

enum CONSTANT {
  COLLAPSABLE_MARGIN = 32,
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'kyne';
  logo = logo;

  // icon: '' if i want to insert icons in the future
  destinations = [
    { label: 'Accueil', icon: '', link: 'accueil', activated: true },
    { label: 'Services', link: 'services', activated: false },
    { label: 'Tarifs', link: 'tarifs', activated: false },
    { label: 'Nous contacter', link: 'contacts', activated: false }
  ];

  phone = "514-513-2856";

  collapse(target : EventTarget | null) {
    const targetHTML = (target as HTMLInputElement);
    const hiddenInfo = targetHTML.nextElementSibling as HTMLElement;
    if (hiddenInfo.style.maxHeight) {
      hiddenInfo.style.maxHeight = "";
    } else {
      hiddenInfo.style.maxHeight = hiddenInfo.scrollHeight + CONSTANT.COLLAPSABLE_MARGIN + "px";
    }
  }

  handleDestinationActivated(target: EventTarget | null, topbarList: HTMLDivElement) {
    const a = target as HTMLAnchorElement;
    const position = Number(a.id.replace("mdc-list-item-", ""));
    this.destinations.forEach(dest => dest.activated = false)
    this.destinations[position].activated = true;

    topbarList.style.display = 'none';
  }

  handleNavButton(target: HTMLDivElement) {
    if (target.style.display === 'block')
      target.style.display = 'none';
    else
      target.style.display = 'block';
  }

  handleShadowClass(topbarList: HTMLDivElement) {
    if (topbarList.style.display === 'block')
      return 'show-shadow'
    else return '';
  }
}
