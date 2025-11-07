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
      dans le but d'augmenter la mobilité et diminuer les tensions musculaires."
    },
    { photo: 'url(/assets/tarifs/epaule.jpg)', 
      title: 'Massage suédois', 
      desc: "Procure une détente musculaire, \
      diminution de l'hormone de stress, diminution des raideurs musculaires et favorise le retour veineux."
    },
    { photo: 'url(/assets/tarifs/massage_therap.jfif)', 
      title: 'Massage thérapeutique', 
      desc: "Massage en profondeur, il diminue les tensions \
      musculaires et les points de fatigue. Il agit sur les articulations, la respiration et le système \
      nerveux. Il améliore les problèmes d'insomnie en apportant un sommeil plus profond et récupérateur, \
      diminue les maux de tête, les problèmes d'arthrite et d'arthrose, soulage la sciatalgie et la lombalgie."
    },
    { photo: 'url(/assets/tarifs/massage_sport.jfif)', 
      title: 'Massage sportif',
      desc: "Le massage sportif combine une variété de techniques \
      incluant le massage profond, l'étirement myofascial, les ‘trigger points', etc. Il est recommandé \
      lorsqu'on veut se préparer à une performance ou retrouver une forme athlétique. Il prévient les \
      blessures, élimine les crampes musculaires, élimine les douleurs dues aux tensions musculaires, \
      réduit les spasmes et les courbatures, redonne la souplesse musculaire et l'amplitude articulaire \
      maximale et permet une récupération plus rapide après une compétition."
    },
    { photo: 'url(/assets/tarifs/pierres_chaudes.jpg)',
      title: 'Massage aux pierres chaudes',
      desc: "Les pierres volcaniques, faites de basalte, sont parfaitement polies et arrondies afin de \
      glisser sur la peau. Différentes grosseurs sont utilisées pour différentes parties du corps. Ces \
      galets sont maintenus à une température d'environ 50 à 60 degrés Celsius avant le massage, et \
      conservent leur chaleur assez longtemps pour permettre d'atteindre une profondeur musculaire et un \
      bon relâchement des tensions.",
      source : "https://www.zestedetente.com/demystifions-le-massage-avec-pierres-chaudes/"
    },
    { photo: 'url(/assets/tarifs/drainage_lymph.jpg)',
      title: 'Drainage lymphatique', 
      desc: "Le drainage lymphatique manuel est une technique de massage doux destinée à stimuler la \
      circulation de la lymphe et à détoxiquer l'organisme, tout en renforçant le système immunitaire. \
      Il s'effectue avec les doigts et la paume des mains sur l'ensemble du corps, en suivant le sens \
      de la circulation lymphatique et en variant la pression.",
      source : "https://www.passeportsante.net/fr/Therapies/Guide/Fiche.aspx?doc=drainage_lymphatique_th"
    },
    { photo: 'url(/assets/tarifs/massage_crane.jpeg)',
      title: 'Massage du crâne', 
      desc: "Ce massage est de plus en plus utilisé pour réguler notre santé pendant les transitions \
      saisonnières et pour relâcher les tensions de la vie moderne. Il a un effet apaisant et relaxant, \
      il favorise la micro-circulation sanguine, dégage les sinus et la sphère ORL, soulage les maux de \
      tête, diminue les douleurs ophtalmiques et améliore le sommeil."
    },
    { photo: 'url(/assets/tarifs/enceinte.jfif)',
      title: 'Massage femme enceinte', 
      desc: "La femme enceinte sera installée principalement sut le côté ou sur le dos et peut recevoir \
      un massage des jambes, dos, nuque, bras et abdomen."
    },
    { photo: 'url(/assets/tarifs/mob_iso.jfif)', 
      title: 'Mobilisations isométriques', 
      desc: "Les mobilisations visent à relâcher la musculature afin de rétablir ou augmenter l'amplitude. \
      Comme tout mouvement, la mobilisation agit sur le système circulatoire. L'alternance \
      de compression-décompression effectue un excellent pompage liquidien. Additionnellement, le \
      mouvement entraîne une décongestion des adhérences tissulaires, des fibroses et des grippages.",
      source: "https://www.academiedemassage.com/blogue/mobilisation-muscles-massotherapie/"
    },
    { photo: 'url(/assets/tarifs/k-taping.jpg)',
      title: 'K-taping', 
      desc: "Le K taping ou le bandage adhésif thérapeutique est une méthode issue de la kinésiologie \
      Permet de traiter les douleurs musculo-articulaires légères sans limiter les mouvements du corps \
      humain, ainsi il empêche le blocage d'une articulation afin de faciliter la pratique d'une activité \
      sportive. Ensuite, cette bande élastique très résistante collée à la peau peut stimuler ou calmer \
      les muscles douloureux.",
      source: "https://www.toomed.com/blog/le-k-taping-a-quoi-sert-il/?cn-reloaded=1"
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
