import { Component, OnInit } from '@angular/core';

enum CONSTANT {
  COLLAPSABLE_MARGIN = 32,
}

@Component({
  selector: 'app-services-offered',
  templateUrl: './services-offered.component.html',
  styleUrls: ['./services-offered.component.scss']
})
export class ServicesOfferedComponent implements OnInit {
  services = [
    { photo: 'url(/assets/tarifs/dos.jpg)', 
      title: 'Kinésithérapie • Orthothérapie • Massothérapie', 
      desc: "Consiste à un ensemble de techniques (mobilisation passive, active, trigger point, massage) \
      dans le but d’augmenter la mobilité et diminuer les tensions musculaires."
    },
    { photo: 'url(/assets/tarifs/epaule.jpg)', 
      title: 'Massage suédois', 
      desc: "Procure une détente musculaire, \
      diminution de l’hormone de stress, diminution des raideurs musculaires et favorise le retour veineux."
    },
    { photo: 'url(/assets/tarifs/dos.jpg)', 
      title: 'Massage thérapeutique', 
      desc: "Massage en profondeur, il diminue les tensions \
      musculaires et les points de fatigue. Il agit sur les articulations, la respiration et le système \
      nerveux. Il améliore les problèmes d'insomnie en apportant un sommeil plus profond et récupérateur, \
      diminue les maux de tête, les problèmes d'arthrite et d’arthrose, soulage la sciatalgie et la lombalgie."
    },
    { photo: 'url(/assets/tarifs/dos.jpg)', 
      title: 'Massage sportif',
      desc: "Le massage sportif combine une variété de techniques \
      incluant le massage profond, l’étirement myofascial, les ‘trigger points’, etc. Il est recommandé \
      lorsqu’on veut se préparer à une performance ou retrouver une forme athlétique. Il prévient les \
      blessures, élimine les crampes musculaires, élimine les douleurs dues aux tensions musculaires, \
      réduit les spasmes et les courbatures, redonne la souplesse musculaire et l’amplitude articulaire \
      maximale et permet une récupération plus rapide après une compétition."
    },
    { photo: 'url(/assets/tarifs/pierres_chaudes.jpg)',
      title: 'Massage aux pierres chaudes',
      desc: ""
    },
    { photo: 'url(/assets/tarifs/drainage_lymph.jpg)',
      title: 'Drainage lymphatique', 
      desc: ""
    },
    { photo: 'url(/assets/tarifs/dos.jpg)',
      title: 'Massage du crâne', 
      desc: "Ce massage est de plus en plus utilisé pour réguler notre santé pendant les transitions \
      saisonnières et pour relâcher les tensions de la vie moderne. Il a un effet apaisant et relaxant, \
      il favorise la micro-circulation sanguine, dégage les sinus et la sphère ORL, soulage les maux de \
      tête, diminue les douleurs ophtalmiques et améliore le sommeil."
    },
    { photo: 'url(/assets/tarifs/dos.jpg)',
      title: 'Massage femme enceinte', 
      desc: "La femme enceinte sera installée principalement sut le côté ou sur le dos et peut recevoir \
      un massage des jambes, dos, nuque, bras et abdomen."
    },
    { photo: 'url(/assets/tarifs/dos.jpg)', 
      title: 'Mobilisations isométriques', 
      desc: ""
    },
    { photo: 'url(/assets/tarifs/k-taping.jpg)',
      title: 'K-taping', 
      desc: ""
    },
    { photo: 'url(/assets/tarifs/dos.jpg)', 
      title: 'Ostéopathie',
      desc: ""
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

  collapse(target : EventTarget | null) {
    const targetHTML = (target as HTMLInputElement);
    const hiddenInfo = targetHTML.nextElementSibling as HTMLElement;
    if (hiddenInfo.style.maxHeight) {
      hiddenInfo.style.maxHeight = "";
    } else {
      hiddenInfo.style.maxHeight = hiddenInfo.scrollHeight + CONSTANT.COLLAPSABLE_MARGIN + "px";
    }
  }

}
