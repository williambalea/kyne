import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tarifs',
  templateUrl: './tarifs.component.html',
  styleUrls: ['./tarifs.component.scss']
})
export class TarifsComponent implements OnInit {
  services = [
    { photo: 'url(/assets/tarifs/dos.jpg)', title: 'Kinésithérapie • Orthothérapie • Massothérapie • Ostéopathie', 
      desc: "Consiste à un ensemble de techniques (mobilisation passive, active, trigger point, massage) \
      dans le but d’augmenter la mobilité et diminuer les tensions musculaires."
    },
    { photo: 'url(/assets/tarifs/epaule.jpg)', title: 'Massage suédois', desc: "Procure une détente musculaire, \
      diminution de l’hormone de stress, diminution des raideurs musculaires et favorise le retour veineux."
    },
    { photo: '', title: 'Massage thérapeutique', desc: "Massage en profondeur, il diminue les tensions \
      musculaires et les points de fatigue. Il agit sur les articulations, la respiration et le système \
      nerveux. Il améliore les problèmes d'insomnie en apportant un sommeil plus profond et récupérateur, \
      diminue les maux de tête, les problèmes d'arthrite et d’arthrose, soulage la sciatalgie et la lombalgie."
    },
    { photo: '', title: 'Massage sportif', desc: "Le massage sportif combine une variété de techniques \
      incluant le massage profond, l’étirement myofascial, les ‘trigger points’, etc. Il est recommandé \
      lorsqu’on veut se préparer à une performance ou retrouver une forme athlétique. Il prévient les \
      blessures, élimine les crampes musculaires, élimine les douleurs dues aux tensions musculaires, \
      réduit les spasmes et les courbatures, redonne la souplesse musculaire et l’amplitude articulaire \
      maximale et permet une récupération plus rapide après une compétition."
    },
    { photo: '', title: '', desc: ""},
    { photo: '', title: '', desc: ""},
    { photo: '', title: '', desc: ""},
    { photo: '', title: '', desc: ""},
    { photo: '', title: '', desc: ""},
    { photo: '', title: '', desc: ""},
    { photo: '', title: '', desc: ""},
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
