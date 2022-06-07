import { placeURL, directionURL, autresURL } from 'src/utils';

import photos from 'src/utils/photos';

export const truc = 'truc';

export const all = {
  Affiches: {
    Bretagne: {
      id: 211,
      image: photos.Bretagne,
      leftTurn: {
        id: 17,
        link: `/${placeURL.Bretagne}/${directionURL.O}`,
      },
      rightTurn: {
        id: 11,
        link: `/${placeURL.Bretagne}/${directionURL.N}`,
      },
      actions: [
        {
          style: {
            height: 300,
            width: 250,
            left: 170,
            top: 200,
          },
          painting: `/${autresURL.lecture}/Bretagne`,
        },
      ],
      mouvement: true,
      mouvementLink: 'Back',
    },
    Livre: {
      id: 212,
      image: photos.Livre,
      leftTurn: {
        id: 161,
        link: `/${placeURL.Table}/1`,
      },
      rightTurn: {
        id: 167,
        link: `/${placeURL.Table}/7`,
      },
      actions: [
        {
          style: {
            height: 250,
            width: 250,
            right: 0,
            top: 240,
          },
          painting: `/${autresURL.dessins_table}/4160`,
        },
      ],
      mouvement: true,
      mouvementLink: 'Back',
    },
    Fauve: {
      id: 213,
      image: photos.Fauve,
      leftTurn: {
        id: 111,
        link: `/${placeURL.Orchestre}/${directionURL.N}`,
      },
      rightTurn: {
        id: 113,
        link: `/${placeURL.Orchestre}/${directionURL.E}`,
      },
      actions: [
        {
          style: {
            height: 300,
            width: 300,
            left: 150,
            top: 300,
          },
          painting: `/${autresURL.lecture}/Fauve`,
        },
      ],
      mouvement: true,
      mouvementLink: 'Back',
    },
    Muret: {
      id: 214,
      image: photos.Muret,
      leftTurn: {
        id: false,
        link: '#',
      },
      rightTurn: {
        id: false,
        link: '#',
      },
      actions: [
        {
          style: {
            height: 90,
            width: 150,
            left: 235,
            top: 95,
          },
          painting: `/${autresURL.peinture}/245`,
        },
        {
          style: {
            height: 350,
            width: 270,
            left: 180,
            top: 265,
          },
          painting: `/${autresURL.peinture}/269`,
        },
      ],
      mouvement: true,
      mouvementLink: 'Back',
    },
    Portraits: {
      id: 215,
      image: photos.Portraits,
      leftTurn: {
        id: false,
        link: '#',
      },
      rightTurn: {
        id: false,
        link: '#',
      },
      actions: [],
      mouvement: true,
      mouvementLink: 'Back',
    },
    Eugenio: {
      id: 216,
      image: photos.Eugenio,
      leftTurn: {
        id: false,
      },
      rightTurn: {
        id: false,
      },
      actions: [
        {
          style: {
            height: 200,
            width: 200,
            right: 200,
            top: 300,
          },
          painting: `/${autresURL.lecture}/Eugenio`,
        },
      ],
      mouvement: true,
      mouvementLink: 'Back',
    },
    Mannequin: {
      id: 217,
      image: photos.Mannequin,
      leftTurn: {
        id: true,
        link: `/${placeURL.Mannequin}/${directionURL.S}`,
      },
      rightTurn: {
        id: true,
        link: `/${placeURL.Mannequin}/${directionURL.O}`,
      },
      actions: [],
      mouvement: true,
      mouvementLink: 'Back',
    },
    Entree: {
      id: 218,
      image: photos.Entree,
      leftTurn: {
        id: true,
        link: `/${placeURL.Entree}/${directionURL.NO}`,
      },
      rightTurn: {
        id: true,
        link: `/${placeURL.Entree}/${directionURL.NE}`,
      },
      actions: [
        {
          style: {
            height: 200,
            width: 200,
            right: 50,
            top: 300,
          },
          painting: `/${autresURL.lecture}/Retrospective`,
        },
      ],
      mouvement: true,
      mouvementLink: 'Back',
    },
    Remerciements: {
      id: 219,
      image: photos.Remerciements,
      leftTurn: {
        id: true,
        link: `/${placeURL.Entree}/${directionURL.S}`,
      },
      rightTurn: {
        id: true,
        link: `/${placeURL.Entree}/${directionURL.O}`,
      },
      actions: [
        {
          style: {
            height: 300,
            width: 300,
            left: 110,
            top: 220,
          },
          painting: `/${autresURL.lecture}/Remerciements`,
        },
      ],
      mouvement: true,
      mouvementLink: 'Back',
    },
    Predilection: {
      id: 220,
      image: photos.Predilection,
      leftTurn: {
        id: true,
        link: `/${placeURL.Entree}/${directionURL.S}`,
      },
      rightTurn: {
        id: true,
        link: `/${placeURL.Entree}/${directionURL.O}`,
      },
      actions: [
        {
          style: {
            height: 300,
            width: 300,
            left: 160,
            top: 220,
          },
          painting: `/${autresURL.lecture}/Predilection`,
        },
      ],
      mouvement: true,
      mouvementLink: 'Back',
    },
    'Alain-Margoni': {
      id: 220,
      image: photos.Alain,
      leftTurn: {
        id: true,
        link: `/${placeURL.Entree}/${directionURL.S}`,
      },
      rightTurn: {
        id: true,
        link: `/${placeURL.Entree}/${directionURL.O}`,
      },
      actions: [
        {
          style: {
            height: 300,
            width: 300,
            left: 160,
            top: 220,
          },
          painting: `/${autresURL.lecture}/Alain-Margoni`,
        },
      ],
      mouvement: true,
      mouvementLink: 'Back',
    },
    Parfum: {
      id: 221,
      image: photos.Parfum,
      leftTurn: {
        id: true,
        link: `/${placeURL.Parfum}/${directionURL.SE}`,
      },
      rightTurn: {
        id: true,
        link: `/${placeURL.Parfum}/${directionURL.S}`,
      },
      actions: [
        {
          style: {
            height: 200,
            width: 200,
            right: 225,
            top: 30,
          },
          painting: `/${autresURL.Affiches}/Foulard1`,
        },
        {
          style: {
            height: 200,
            width: 200,
            right: 230,
            top: 270,
          },
          painting: `/${autresURL.Affiches}/Foulard2`,
        },
        {
          style: {
            height: 160,
            width: 180,
            right: 230,
            bottom: 200,
          },
          painting: `/${autresURL.Affiches}/Foulard3`,
        },
        {
          style: {
            height: 130,
            width: 180,
            right: 230,
            bottom: 20,
          },
          painting: `/${autresURL.Affiches}/Foulard4`,
        },
      ],
      mouvement: true,
      mouvementLink: 'Back',
    },
    Foulard1: {
      id: 222,
      image: photos.Foulard1,
      leftTurn: {
        id: false,
        link: '#',
      },
      rightTurn: {
        id: false,
        link: '#',
      },
      actions: [],
      mouvement: true,
      mouvementLink: 'Back',
    },
    Foulard2: {
      id: 223,
      image: photos.Foulard2,
      leftTurn: {
        id: false,
        link: '#',
      },
      rightTurn: {
        id: false,
        link: '#',
      },
      actions: [],
      mouvement: true,
      mouvementLink: 'Back',
    },
    Foulard3: {
      id: 224,
      image: photos.Foulard3,
      leftTurn: {
        id: false,
        link: '#',
      },
      rightTurn: {
        id: false,
        link: '#',
      },
      actions: [],
      mouvement: true,
      mouvementLink: 'Back',
    },
    Foulard4: {
      id: 225,
      image: photos.Foulard4,
      leftTurn: {
        id: false,
        link: '#',
      },
      rightTurn: {
        id: false,
        link: '#',
      },
      actions: [],
      mouvement: true,
      mouvementLink: 'Back',
    },
  },
  Bretagne: {
    N: {
      id: 11,
      image: photos.BreN,
      leftTurn: {
        id: 18,
        link: `/${placeURL.Bretagne}/${directionURL.NO}`,
      },
      rightTurn: {
        id: 12,
        link: `/${placeURL.Bretagne}/${directionURL.NE}`,
      },
      actions: [
        {
          style: {
            height: 160,
            width: 190,
            left: 140,
          },
          painting: `/${autresURL.peinture}/205`,
        },
        {
          style: {
            height: 140,
            width: 150,
            right: 70,
          },
          painting: `/${autresURL.peinture}/210`,
        },
      ],
      mouvement: false,
      mouvementLink: '#',
    },
    NE: {
      id: 12,
      image: photos.BreNE,
      leftTurn: {
        id: 11,
        link: `/${placeURL.Bretagne}/${directionURL.N}`,
      },
      rightTurn: {
        id: 13,
        link: `/${placeURL.Bretagne}/${directionURL.E}`,
      },
      actions: [
        {
          style: {
            height: 160,
            width: 170,
            left: 170,
            top: 280,
          },
          painting: `/${autresURL.peinture}/210`,
        },
        {
          style: {
            height: 60,
            width: 60,
            right: 200,
            top: 328,
          },
          painting: `/${autresURL.peinture}/208`,
        },
      ],
      mouvement: false,
      mouvementLink: '#',
    },
    E: {
      id: 13,
      image: photos.BreE,
      leftTurn: {
        id: 12,
        link: `/${placeURL.Bretagne}/${directionURL.NE}`,
      },
      rightTurn: {
        id: 14,
        link: `/${placeURL.Bretagne}/${directionURL.SE}`,
      },
      actions: [],
      mouvement: true,
      mouvementLink: `/${placeURL.Table_opposee}/${directionURL.E}`,
    },
    SE: {
      id: 14,
      image: photos.BreSE,
      leftTurn: {
        id: 13,
        link: `/${placeURL.Bretagne}/${directionURL.E}`,
      },
      rightTurn: {
        id: 15,
        link: `/${placeURL.Bretagne}/${directionURL.S}`,
      },
      actions: [
        {
          style: {
            height: 80,
            width: 80,
            left: 230,
            bottom: 250,
          },
          painting: `/${placeURL.Table}/5`,
        },
      ],
      mouvement: false,
      mouvementLink: '#',
    },
    S: {
      id: 15,
      image: photos.BreS,
      leftTurn: {
        id: 14,
        link: `/${placeURL.Bretagne}/${directionURL.SE}`,
      },
      rightTurn: {
        id: 16,
        link: `/${placeURL.Bretagne}/${directionURL.SO}`,
      },
      actions: [],
      mouvement: true,
      mouvementLink: `/${placeURL.Bureau}/${directionURL.S}`,
    },
    SO: {
      id: 16,
      image: photos.BreSO,
      leftTurn: {
        id: 15,
        link: `/${placeURL.Bretagne}/${directionURL.S}`,
      },
      rightTurn: {
        id: 17,
        link: `/${placeURL.Bretagne}/${directionURL.O}`,
      },
      actions: [
        {
          style: {
            height: 180,
            width: 150,
            left: 140,
            top: 135,
          },
          painting: `/${autresURL.peinture}/8`,
        },
        {
          style: {
            height: 180,
            width: 170,
            left: 120,
            bottom: 280,
          },
          painting: `/${autresURL.peinture}/438`,
        },
      ],
      mouvement: false,
      mouvementLink: '#',
    },
    O: {
      id: 17,
      image: photos.BreO,
      leftTurn: {
        id: 16,
        link: `/${placeURL.Bretagne}/${directionURL.SO}`,
      },
      rightTurn: {
        id: 18,
        link: `/${placeURL.Bretagne}/${directionURL.NO}`,
      },
      actions: [],
      mouvement: true,
      mouvementLink: `/${placeURL.Portrait}/${directionURL.O}`,
    },
    NO: {
      id: 18,
      image: photos.BreNO,
      leftTurn: {
        id: 17,
        link: `/${placeURL.Bretagne}/${directionURL.O}`,
      },
      rightTurn: {
        id: 11,
        link: `/${placeURL.Bretagne}/${directionURL.N}`,
      },
      actions: [
        {
          style: {
            height: 250,
            width: 180,
            left: 220,
            top: 280,
          },
          painting: `/${autresURL.Affiches}/Bretagne`,
        },
      ],
      mouvement: false,
      mouvementLink: '#',
    },
  },
  Bureau: {
    N: {
      id: 21,
      image: photos.BurN,
      leftTurn: {
        id: 28,
        link: `/${placeURL.Bureau}/${directionURL.NO}`,
      },
      rightTurn: {
        id: 22,
        link: `/${placeURL.Bureau}/${directionURL.NE}`,
      },
      actions: [
        {
          style: {
            height: 160,
            width: 80,
            left: 70,
            top: 200,
          },
          painting: `/${autresURL.peinture}/8`,
        },
        {
          style: {
            height: 140,
            width: 80,
            left: 70,
            top: 400,
          },
          painting: `/${autresURL.peinture}/438`,
        },
      ],
      mouvement: true,
      mouvementLink: `/${placeURL.Bretagne}/${directionURL.N}`,
    },
    NE: {
      id: 22,
      image: photos.BurNE,
      leftTurn: {
        id: 21,
        link: `/${placeURL.Bureau}/${directionURL.N}`,
      },
      rightTurn: {
        id: 23,
        link: `/${placeURL.Bureau}/${directionURL.E}`,
      },
      actions: [
        {
          style: {
            height: 80,
            width: 80,
            right: 180,
            bottom: 200,
          },
          painting: `/${placeURL.Table}/4`,
        },
      ],
      mouvement: false,
      mouvementLink: '#',
    },
    E: {
      id: 23,
      image: photos.BurE,
      leftTurn: {
        id: 22,
        link: `/${placeURL.Bureau}/${directionURL.NE}`,
      },
      rightTurn: {
        id: 24,
        link: `/${placeURL.Bureau}/${directionURL.SE}`,
      },
      actions: [],
      mouvement: true,
      mouvementLink: `/${placeURL.Table_entree}/${directionURL.E}`,
    },
    SE: {
      id: 24,
      image: photos.BurSE,
      leftTurn: {
        id: 23,
        link: `/${placeURL.Bureau}/${directionURL.E}`,
      },
      rightTurn: {
        id: 25,
        link: `/${placeURL.Bureau}/${directionURL.S}`,
      },
      actions: [
        {
          style: {
            height: 60,
            width: 50,
            left: 235,
            top: 345,
          },
          painting: `/${autresURL.peinture}/518`,
        },
        {
          style: {
            height: 60,
            width: 70,
            right: 215,
            top: 295,
          },
          painting: `/${autresURL.peinture}/217`,
        },
        {
          style: {
            height: 60,
            width: 80,
            right: 210,
            top: 397,
          },
          painting: `/${autresURL.peinture}/454`,
        },
        {
          style: {
            height: 100,
            width: 110,
            right: 10,
            top: 275,
          },
          painting: `/${autresURL.peinture}/216`,
        },
        {
          style: {
            height: 100,
            width: 110,
            right: 10,
            top: 405,
          },
          painting: `/${autresURL.peinture}/458`,
        },
      ],
      mouvement: false,
      mouvementLink: '#',
    },
    S: {
      id: 25,
      image: photos.BurS,
      leftTurn: {
        id: 24,
        link: `/${placeURL.Bureau}/${directionURL.SE}`,
      },
      rightTurn: {
        id: 26,
        link: `/${placeURL.Bureau}/${directionURL.SO}`,
      },
      actions: [
        {
          style: {
            height: 100,
            width: 130,
            left: 130,
            top: 260,
          },
          painting: `/${autresURL.peinture}/216`,
        },
        {
          style: {
            height: 90,
            width: 130,
            left: 130,
            top: 390,
          },
          painting: `/${autresURL.peinture}/458`,
        },
        {
          style: {
            height: 180,
            width: 80,
            left: 285,
            top: 300,
          },
          painting: `/${autresURL.Affiches}/Muret`,
        },
      ],
      mouvement: false,
      mouvementLink: '#',
    },
    SO: {
      id: 26,
      image: photos.BurSO,
      leftTurn: {
        id: 25,
        link: `/${placeURL.Bureau}/${directionURL.S}`,
      },
      rightTurn: {
        id: 27,
        link: `/${placeURL.Bureau}/${directionURL.O}`,
      },
      actions: [],
      mouvement: false,
    },
    O: {
      id: 27,
      image: photos.BurO,
      leftTurn: {
        id: 26,
        link: `/${placeURL.Bureau}/${directionURL.SO}`,
      },
      rightTurn: {
        id: 28,
        link: `/${placeURL.Bureau}/${directionURL.NO}`,
      },
      actions: [
        {
          style: {
            height: 200,
            width: 130,
            right: 30,
            top: 305,
          },
          painting: `/${autresURL.peinture}/211`,
        },
      ],
      mouvement: true,
      mouvementLink: `/${placeURL.Entree}/${directionURL.O}`,
    },
    NO: {
      id: 28,
      image: photos.BurNO,
      leftTurn: {
        id: 27,
        link: `/${placeURL.Bureau}/${directionURL.O}`,
      },
      rightTurn: {
        id: 21,
        link: `/${placeURL.Bureau}/${directionURL.N}`,
      },
      actions: [
        {
          style: {
            height: 185,
            width: 100,
            left: 110,
            top: 310,
          },
          painting: `/${autresURL.peinture}/211`,
        },
        {
          style: {
            height: 160,
            width: 90,
            right: 200,
            top: 200,
          },
          painting: `/${autresURL.peinture}/8`,
        },
        {
          style: {
            height: 140,
            width: 90,
            right: 200,
            bottom: 300,
          },
          painting: `/${autresURL.peinture}/438`,
        },
      ],
      mouvement: false,
      mouvementLink: '#',
    },
  },
  Couloir_gauche: {
    N: {
      id: 31,
      image: photos.CoulN,
      leftTurn: {
        id: 38,
        link: `/${placeURL.Couloir_gauche}/${directionURL.NO}`,
      },
      rightTurn: {
        id: 32,
        link: `/${placeURL.Couloir_gauche}/${directionURL.NE}`,
      },
      actions: [
        {
          style: {
            height: 100,
            width: 60,
            left: 33,
            top: 345,
          },
          painting: `/${autresURL.peinture}/178`,
        },
        {
          style: {
            height: 35,
            width: 45,
            left: 110,
            top: 340,
          },
          painting: `/${autresURL.peinture}/77`,
        },
        {
          style: {
            height: 35,
            width: 45,
            left: 112,
            top: 385,
          },
          painting: `/${autresURL.peinture}/76`,
        },
        {
          style: {
            height: 43,
            width: 58,
            left: 175,
            top: 334,
          },
          painting: `/${autresURL.peinture}/94`,
        },
        {
          style: {
            height: 45,
            width: 57,
            left: 177,
            top: 383,
          },
          painting: `/${autresURL.peinture}/84`,
        },
        {
          style: {
            height: 67,
            width: 57,
            left: 257,
            top: 348,
          },
          painting: `/${autresURL.peinture}/69`,
        },
        {
          style: {
            height: 48,
            width: 57,
            right: 235,
            top: 330,
          },
          painting: `/${autresURL.peinture}/82`,
        },
        {
          style: {
            height: 48,
            width: 57,
            right: 235,
            top: 385,
          },
          painting: `/${autresURL.peinture}/319`,
        },
        {
          style: {
            height: 58,
            width: 80,
            right: 115,
            top: 377,
          },
          painting: `/${autresURL.peinture}/275`,
        },
      ],
      mouvement: true,
      mouvementLink: `/${placeURL.Milieu}/${directionURL.N}`,
    },
    NE: {
      id: 32,
      image: photos.CoulNE,
      leftTurn: {
        id: 31,
        link: `/${placeURL.Couloir_gauche}/${directionURL.N}`,
      },
      rightTurn: {
        id: 33,
        link: `/${placeURL.Couloir_gauche}/${directionURL.E}`,
      },
      actions: [
        {
          style: {
            height: 65,
            width: 85,
            left: 130,
            top: 355,
          },
          painting: `/${autresURL.peinture}/275`,
        },
        {
          style: {
            height: 120,
            width: 130,
            right: 120,
            top: 330,
          },
          painting: `/${autresURL.peinture}/557`,
        },
      ],
      mouvement: false,
      mouvementLink: '#',
    },
    E: {
      id: 33,
      image: photos.CoulE,
      leftTurn: {
        id: 32,
        link: `/${placeURL.Couloir_gauche}/${directionURL.NE}`,
      },
      rightTurn: {
        id: 34,
        link: `/${placeURL.Couloir_gauche}/${directionURL.SE}`,
      },
      actions: [
        {
          style: {
            height: 125,
            width: 115,
            left: 45,
            top: 350,
          },
          painting: `/${autresURL.peinture}/557`,
        },
        {
          style: {
            height: 110,
            width: 90,
            right: 250,
            top: 350,
          },
          painting: `/${autresURL.peinture}/750`,
        },
        {
          style: {
            height: 150,
            width: 90,
            right: 95,
            top: 330,
          },
          painting: `/${autresURL.peinture}/384`,
        },
      ],
      mouvement: false,
      mouvementLink: '#',
    },
    SE: {
      id: 34,
      image: photos.CoulSE,
      leftTurn: {
        id: 33,
        link: `/${placeURL.Couloir_gauche}/${directionURL.E}`,
      },
      rightTurn: {
        id: 35,
        link: `/${placeURL.Couloir_gauche}/${directionURL.S}`,
      },
      actions: [
        {
          style: {
            height: 120,
            width: 175,
            right: 60,
            top: 315,
          },
          painting: `/${autresURL.peinture}/223`,
        },
      ],
      mouvement: true,
      mouvementLink: `/${placeURL.Entree}/${directionURL.E}`,
    },
    S: {
      id: 35,
      image: photos.CoulS,
      leftTurn: {
        id: 34,
        link: `/${placeURL.Couloir_gauche}/${directionURL.SE}`,
      },
      rightTurn: {
        id: 36,
        link: `/${placeURL.Couloir_gauche}/${directionURL.SO}`,
      },
      actions: [
        {
          style: {
            height: 107,
            width: 125,
            left: 10,
            top: 328,
          },
          painting: `/${autresURL.peinture}/223`,
        },
        {
          style: {
            height: 155,
            width: 190,
            left: 170,
            top: 305,
          },
          painting: `/${autresURL.peinture}/220`,
        },
        {
          style: {
            height: 170,
            width: 100,
            right: 125,
            top: 300,
          },
          painting: `/${autresURL.peinture}/221`,
        },
      ],
      mouvement: false,
      mouvementLink: '#',
    },
    SO: {
      id: 36,
      image: photos.CoulSO,
      leftTurn: {
        id: 35,
        link: `/${placeURL.Couloir_gauche}/${directionURL.S}`,
      },
      rightTurn: {
        id: 37,
        link: `/${placeURL.Couloir_gauche}/${directionURL.O}`,
      },
      actions: [
        {
          style: {
            height: 180,
            width: 95,
            left: 15,
            top: 305,
          },
          painting: `/${autresURL.peinture}/221`,
        },
        {
          style: {
            height: 80,
            width: 90,
            left: 145,
            top: 275,
          },
          painting: `/${autresURL.peinture}/233`,
        },
        {
          style: {
            height: 68,
            width: 80,
            left: 145,
            top: 370,
          },
          painting: `/${autresURL.peinture}/230`,
        },
        {
          style: {
            height: 60,
            width: 50,
            left: 245,
            top: 300,
          },
          painting: `/${autresURL.peinture}/440`,
        },
        {
          style: {
            height: 45,
            width: 44,
            left: 250,
            top: 375,
          },
          painting: `/${autresURL.peinture}/191`,
        },
        {
          style: {
            height: 95,
            width: 38,
            left: 313,
            top: 345,
          },
          painting: `/${autresURL.peinture}/228`,
        },
      ],
      mouvement: false,
      mouvementLink: '#',
    },
    O: {
      id: 37,
      image: photos.CoulO,
      leftTurn: {
        id: 36,
        link: `/${placeURL.Couloir_gauche}/${directionURL.SO}`,
      },
      rightTurn: {
        id: 38,
        link: `/${placeURL.Couloir_gauche}/${directionURL.NO}`,
      },
      actions: [
        {
          style: {
            height: 255,
            width: 134,
            right: 10,
            top: 265,
          },
          painting: `/${autresURL.peinture}/179`,
        },
      ],
      mouvement: true,
      mouvementLink: `/${placeURL.Machines}/${directionURL.O}`,
    },
    NO: {
      id: 38,
      image: photos.CoulNO,
      leftTurn: {
        id: 37,
        link: `/${placeURL.Couloir_gauche}/${directionURL.O}`,
      },
      rightTurn: {
        id: 31,
        link: `/${placeURL.Couloir_gauche}/${directionURL.N}`,
      },
      actions: [
        {
          style: {
            height: 275,
            width: 195,
            left: 83,
            top: 250,
          },
          painting: `/${autresURL.peinture}/179`,
        },
        {
          style: {
            height: 103,
            width: 65,
            right: 203,
            top: 330,
          },
          painting: `/${autresURL.peinture}/178`,
        },
      ],
      mouvement: false,
      mouvementLink: '#',
    },
  },
  Couloir_gauche_2: {
    N: {
      id: 41,
      image: photos.Coul2N,
      leftTurn: {
        id: 48,
        link: `/${placeURL.Couloir_gauche_2}/${directionURL.NO}`,
      },
      rightTurn: {
        id: 42,
        link: `/${placeURL.Couloir_gauche_2}/${directionURL.NE}`,
      },
      actions: [
        {
          style: {
            height: 140,
            width: 50,
            right: 150,
            top: 340,
          },
          painting: `/${autresURL.peinture}/428`,
        },
        {
          style: {
            height: 170,
            width: 65,
            right: 18,
            top: 335,
          },
          painting: `/${autresURL.peinture}/675`,
        },
      ],
      mouvement: true,
      mouvementLink: `/${placeURL.Video}/${directionURL.N}`,
    },
    NE: {
      id: 42,
      image: photos.Coul2NE,
      leftTurn: {
        id: 41,
        link: `/${placeURL.Couloir_gauche_2}/${directionURL.N}`,
      },
      rightTurn: {
        id: 43,
        link: `/${placeURL.Couloir_gauche_2}/${directionURL.E}`,
      },
      actions: [
        {
          style: {
            height: 180,
            width: 85,
            left: 200,
            top: 305,
          },
          painting: `/${autresURL.peinture}/675`,
        },
        {
          style: {
            height: 40,
            width: 50,
            right: 135,
            top: 300,
          },
          painting: `/${autresURL.peinture}/190`,
        },
        {
          style: {
            height: 40,
            width: 50,
            right: 135,
            top: 340,
          },
          painting: `/${autresURL.peinture}/451`,
        },
        {
          style: {
            height: 65,
            width: 80,
            right: 120,
            top: 387,
          },
          painting: `/${autresURL.peinture}/200`,
        },
      ],
      mouvement: false,
      mouvementLink: '#',
    },
    E: {
      id: 43,
      image: photos.Coul2E,
      leftTurn: {
        id: 42,
        link: `/${placeURL.Couloir_gauche_2}/${directionURL.NE}`,
      },
      rightTurn: {
        id: 44,
        link: `/${placeURL.Couloir_gauche_2}/${directionURL.SE}`,
      },
      actions: [
        {
          style: {
            height: 40,
            width: 45,
            left: 135,
            top: 291,
          },
          painting: `/${autresURL.peinture}/190`,
        },
        {
          style: {
            height: 40,
            width: 45,
            left: 135,
            top: 335,
          },
          painting: `/${autresURL.peinture}/451`,
        },
        {
          style: {
            height: 65,
            width: 75,
            left: 120,
            top: 380,
          },
          painting: `/${autresURL.peinture}/200`,
        },
        {
          style: {
            height: 150,
            width: 60,
            right: 40,
            top: 340,
          },
          painting: `/${autresURL.peinture}/228`,
        },
      ],
      mouvement: true,
      mouvementLink: `/${placeURL.Machines}/${directionURL.E}`,
    },
    SE: {
      id: 44,
      image: photos.Coul2SE,
      leftTurn: {
        id: 43,
        link: `/${placeURL.Couloir_gauche_2}/${directionURL.E}`,
      },
      rightTurn: {
        id: 45,
        link: `/${placeURL.Couloir_gauche_2}/${directionURL.S}`,
      },
      actions: [
        {
          style: {
            height: 140,
            width: 45,
            left: 70,
            top: 320,
          },
          painting: `/${autresURL.peinture}/228`,
        },
        {
          style: {
            height: 175,
            width: 100,
            left: 135,
            top: 310,
          },
          painting: `/${autresURL.peinture}/222`,
        },
        {
          style: {
            height: 160,
            width: 220,
            right: 135,
            top: 330,
          },
          painting: `/${autresURL.peinture}/227`,
        },
      ],
      mouvement: false,
      mouvementLink: '#',
    },
    S: {
      id: 45,
      image: photos.Coul2S,
      leftTurn: {
        id: 44,
        link: `/${placeURL.Couloir_gauche_2}/${directionURL.SE}`,
      },
      rightTurn: {
        id: 46,
        link: `/${placeURL.Couloir_gauche_2}/${directionURL.SO}`,
      },
      actions: [
        {
          style: {
            height: 160,
            width: 130,
            left: 10,
            top: 320,
          },
          painting: `/${autresURL.peinture}/227`,
        },
        {
          style: {
            height: 250,
            width: 200,
            right: 110,
            top: 320,
          },
          painting: `/${autresURL.Affiches}/Predilection`,
        },
      ],
      mouvement: false,
      mouvementLink: '#',
    },
    SO: {
      id: 46,
      image: photos.Coul2SO,
      leftTurn: {
        id: 45,
        link: `/${placeURL.Couloir_gauche_2}/${directionURL.S}`,
      },
      rightTurn: {
        id: 47,
        link: `/${placeURL.Couloir_gauche_2}/${directionURL.O}`,
      },
      actions: [
        {
          style: {
            height: 250,
            width: 100,
            left: 30,
            top: 340,
          },
          painting: `/${autresURL.Affiches}/Predilection`,
        },
        {
          style: {
            height: 250,
            width: 100,
            left: 200,
            top: 390,
          },
          painting: `/${autresURL.Affiches}/Parfum`,
        },
        {
          style: {
            height: 70,
            width: 70,
            left: 285,
            top: 273,
          },
          painting: `/${autresURL.peinture}/699`,
        },
        {
          style: {
            height: 110,
            width: 40,
            left: 300,
            top: 380,
          },
          painting: `/${autresURL.peinture}/1042`,
        },
        {
          style: {
            height: 100,
            width: 70,
            right: 160,
            top: 330,
          },
          painting: `/${autresURL.peinture}/679`,
        },
        {
          style: {
            height: 115,
            width: 75,
            right: 30,
            top: 330,
          },
          painting: `/${autresURL.peinture}/678`,
        },
      ],
      mouvement: false,
      mouvementLink: '#',
    },
    O: {
      id: 47,
      image: photos.Coul2O,
      leftTurn: {
        id: 46,
        link: `/${placeURL.Couloir_gauche_2}/${directionURL.SO}`,
      },
      rightTurn: {
        id: 48,
        link: `/${placeURL.Couloir_gauche_2}/${directionURL.NO}`,
      },
      actions: [
        {
          style: {
            height: 100,
            width: 70,
            left: 145,
            top: 340,
          },
          painting: `/${autresURL.peinture}/679`,
        },
        {
          style: {
            height: 100,
            width: 80,
            left: 270,
            top: 340,
          },
          painting: `/${autresURL.peinture}/678`,
        },
      ],
      mouvement: true,
      mouvementLink: `/${placeURL.Parfum}/${directionURL.O}`,
    },
    NO: {
      id: 48,
      image: photos.Coul2NO,
      leftTurn: {
        id: 47,
        link: `/${placeURL.Couloir_gauche_2}/${directionURL.O}`,
      },
      rightTurn: {
        id: 41,
        link: `/${placeURL.Couloir_gauche_2}/${directionURL.N}`,
      },
      actions: [],
      mouvement: false,
      mouvementLink: '#',
    },
  },
  Entree: {
    N: {
      id: 51,
      image: photos.EntN,
      leftTurn: {
        id: 58,
        link: `/${placeURL.Entree}/${directionURL.NO}`,
      },
      rightTurn: {
        id: 52,
        link: `/${placeURL.Entree}/${directionURL.NE}`,
      },
      actions: [
        {
          style: {
            height: 200,
            width: 300,
            right: 100,
            top: 300,
          },
          painting: `/${autresURL.Affiches}/Entree`,
        },
      ],
      mouvement: false,
      mouvementLink: '#',
    },
    NE: {
      id: 52,
      image: photos.EntNE,
      leftTurn: {
        id: 51,
        link: `/${placeURL.Entree}/${directionURL.N}`,
      },
      rightTurn: {
        id: 53,
        link: `/${placeURL.Entree}/${directionURL.E}`,
      },
      actions: [
        {
          style: {
            height: 100,
            width: 95,
            left: 240,
            top: 342,
          },
          painting: `/${autresURL.peinture}/211`,
        },
      ],
      mouvement: true,
      mouvementLink: `/${placeURL.Bureau}/${directionURL.NE}`,
    },
    E: {
      id: 53,
      image: photos.EntE,
      leftTurn: {
        id: 52,
        link: `/${placeURL.Entree}/${directionURL.NE}`,
      },
      rightTurn: {
        id: 54,
        link: `/${placeURL.Entree}/${directionURL.SE}`,
      },
      actions: [
        {
          style: {
            height: 120,
            width: 70,
            right: 115,
            top: 350,
          },
          painting: `/${autresURL.Affiches}/Muret`,
        },
      ],
      mouvement: true,
      mouvementLink: 'Margoni',
    },
    SE: {
      id: 54,
      image: photos.EntSE,
      leftTurn: {
        id: 53,
        link: `/${placeURL.Entree}/${directionURL.E}`,
      },
      rightTurn: {
        id: 55,
        link: `/${placeURL.Entree}/${directionURL.S}`,
      },
      actions: [
        {
          style: {
            height: 120,
            width: 70,
            left: 165,
            top: 347,
          },
          painting: `/${autresURL.Affiches}/Muret`,
        },
      ],
      mouvement: false,
      mouvementLink: '#',
    },
    S: {
      id: 55,
      image: photos.EntS,
      leftTurn: {
        id: 54,
        link: `/${placeURL.Entree}/${directionURL.SE}`,
      },
      rightTurn: {
        id: 56,
        link: `/${placeURL.Entree}/${directionURL.SO}`,
      },
      actions: [],
      mouvement: true,
      mouvementLink: '/',
    },
    SO: {
      id: 56,
      image: photos.EntSO,
      leftTurn: {
        id: 55,
        link: `/${placeURL.Entree}/${directionURL.S}`,
      },
      rightTurn: {
        id: 57,
        link: `/${placeURL.Entree}/${directionURL.O}`,
      },
      actions: [
        {
          style: {
            height: 120,
            width: 70,
            left: 193,
            top: 325,
          },
          painting: `/${autresURL.Affiches}/Remerciements`,
        },
        {
          style: {
            height: 200,
            width: 100,
            right: 40,
            top: 282,
          },
          painting: `/${autresURL.peinture}/448`,
        },
      ],
      mouvement: true,
      mouvementLink: `/${placeURL.Couloir_gauche}/${directionURL.O}`,
    },
    O: {
      id: 57,
      image: photos.EntO,
      leftTurn: {
        id: 56,
        link: `/${placeURL.Entree}/${directionURL.SO}`,
      },
      rightTurn: {
        id: 58,
        link: `/${placeURL.Entree}/${directionURL.NO}`,
      },
      actions: [
        {
          style: {
            height: 190,
            width: 110,
            left: 120,
            top: 296,
          },
          painting: `/${autresURL.peinture}/448`,
        },
        {
          style: {
            height: 175,
            width: 150,
            right: 215,
            top: 308,
          },
          painting: `/${autresURL.peinture}/266`,
        },
        {
          style: {
            height: 60,
            width: 45,
            right: 230,
            bottom: 270,
          },
          painting: `/${autresURL.Affiches}/Alain-Margoni`,
        },
        {
          style: {
            height: 145,
            width: 85,
            right: 105,
            top: 330,
          },
          painting: `/${autresURL.peinture}/260`,
        },
      ],
      mouvement: false,
      mouvementLink: '#',
    },
    NO: {
      id: 58,
      image: photos.EntNO,
      leftTurn: {
        id: 57,
        link: `/${placeURL.Entree}/${directionURL.O}`,
      },
      rightTurn: {
        id: 51,
        link: `/${placeURL.Entree}/${directionURL.N}`,
      },
      actions: [
        {
          style: {
            height: 160,
            width: 115,
            left: 35,
            bottom: 360,
          },
          painting: `/${autresURL.peinture}/266`,
        },
        {
          style: {
            height: 60,
            width: 35,
            left: 117,
            bottom: 275,
          },
          painting: `/${autresURL.Affiches}/Alain-Margoni`,
        },
        {
          style: {
            height: 125,
            width: 70,
            left: 175,
            top: 338,
          },
          painting: `/${autresURL.peinture}/260`,
        },
        {
          style: {
            height: 95,
            width: 105,
            right: 237,
            top: 255,
          },
          painting: `/${autresURL.peinture}/271`,
        },
        {
          style: {
            height: 80,
            width: 88,
            right: 245,
            top: 370,
          },
          painting: `/${autresURL.peinture}/396`,
        },
        {
          style: {
            height: 65,
            width: 50,
            right: 265,
            bottom: 297,
          },
          painting: `/${autresURL.peinture}/389`,
        },
        {
          style: {
            height: 230,
            width: 150,
            right: 10,
            bottom: 297,
          },
          painting: `/${autresURL.Affiches}/Entree`,
        },
      ],
      mouvement: false,
      mouvementLink: '#',
    },
  },
  Fernand: {
    N: {
      id: 61,
      image: photos.FerN,
      leftTurn: {
        id: 68,
        link: `/${placeURL.Fernand}/${directionURL.NO}`,
      },
      rightTurn: {
        id: 62,
        link: `/${placeURL.Fernand}/${directionURL.NE}`,
      },
      actions: [
        {
          style: {
            height: 200,
            width: 320,
            right: 165,
            top: 360,
          },
          painting: `/${autresURL.peinture}/275`,
        },
      ],
      mouvement: false,
      mouvementLink: '#',
    },
    NE: {
      id: 62,
      image: photos.FerNE,
      leftTurn: {
        id: 61,
        link: `/${placeURL.Fernand}/${directionURL.N}`,
      },
      rightTurn: {
        id: 63,
        link: `/${placeURL.Fernand}/${directionURL.E}`,
      },
      actions: [
        {
          style: {
            height: 200,
            width: 280,
            left: 150,
            top: 360,
          },
          painting: `/${autresURL.Affiches}/Portraits`,
        },
      ],
      mouvement: false,
      mouvementLink: '#',
    },
    E: {
      id: 63,
      image: photos.FerE,
      leftTurn: {
        id: 62,
        link: `/${placeURL.Fernand}/${directionURL.NE}`,
      },
      rightTurn: {
        id: 64,
        link: `/${placeURL.Fernand}/${directionURL.SE}`,
      },
      actions: [],
      mouvement: true,
      mouvementLink: `/${placeURL.Portrait}/${directionURL.E}`,
    },
    SE: {
      id: 64,
      image: photos.FerSE,
      leftTurn: {
        id: 63,
        link: `/${placeURL.Fernand}/${directionURL.E}`,
      },
      rightTurn: {
        id: 65,
        link: `/${placeURL.Fernand}/${directionURL.S}`,
      },
      actions: [
        {
          style: {
            height: 200,
            width: 115,
            right: 270,
            top: 300,
          },
          painting: `/${autresURL.peinture}/289`,
        },
        {
          style: {
            height: 300,
            width: 180,
            right: 20,
            top: 260,
          },
          painting: `/${autresURL.peinture}/288`,
        },
      ],
      mouvement: false,
      mouvementLink: '#',
    },
    S: {
      id: 65,
      image: photos.FerS,
      leftTurn: {
        id: 64,
        link: `/${placeURL.Fernand}/${directionURL.SE}`,
      },
      rightTurn: {
        id: 66,
        link: `/${placeURL.Fernand}/${directionURL.SO}`,
      },
      actions: [
        {
          style: {
            height: 295,
            width: 275,
            left: 75,
            top: 245,
          },
          painting: `/${autresURL.peinture}/288`,
        },
      ],
      mouvement: false,
      mouvementLink: '#',
    },
    SO: {
      id: 66,
      image: photos.FerSO,
      leftTurn: {
        id: 65,
        link: `/${placeURL.Fernand}/${directionURL.S}`,
      },
      rightTurn: {
        id: 67,
        link: `/${placeURL.Fernand}/${directionURL.O}`,
      },
      actions: [
        {
          style: {
            height: 92,
            width: 65,
            right: 262,
            top: 333,
          },
          painting: `/${autresURL.peinture}/179`,
        },
        {
          style: {
            height: 70,
            width: 75,
            right: 135,
            top: 346,
          },
          painting: `/${autresURL.peinture}/178`,
        },
      ],
      mouvement: true,
      mouvementLink: `/${placeURL.Couloir_gauche}/${directionURL.SO}`,
    },
    O: {
      id: 67,
      image: photos.FerO,
      leftTurn: {
        id: 66,
        link: `/${placeURL.Fernand}/${directionURL.SO}`,
      },
      rightTurn: {
        id: 68,
        link: `/${placeURL.Fernand}/${directionURL.NO}`,
      },
      actions: [
        {
          style: {
            height: 90,
            width: 45,
            left: 25,
            top: 335,
          },
          painting: `/${autresURL.peinture}/179`,
        },
        {
          style: {
            height: 70,
            width: 73,
            left: 115,
            top: 340,
          },
          painting: `/${autresURL.peinture}/178`,
        },
        {
          style: {
            height: 55,
            width: 43,
            right: 100,
            top: 310,
          },
          painting: `/${autresURL.peinture}/94`,
        },
        {
          style: {
            height: 70,
            width: 40,
            right: 100,
            top: 375,
          },
          painting: `/${autresURL.peinture}/84`,
        },
        {
          style: {
            height: 120,
            width: 60,
            right: 15,
            top: 320,
          },
          painting: `/${autresURL.peinture}/69`,
        },
      ],
      mouvement: true,
      mouvementLink: `/${placeURL.Milieu}/${directionURL.O}`,
    },
    NO: {
      id: 68,
      image: photos.FerNO,
      leftTurn: {
        id: 67,
        link: `/${placeURL.Fernand}/${directionURL.O}`,
      },
      rightTurn: {
        id: 61,
        link: `/${placeURL.Fernand}/${directionURL.N}`,
      },
      actions: [
        {
          style: {
            height: 60,
            width: 43,
            left: 175,
            top: 310,
          },
          painting: `/${autresURL.peinture}/94`,
        },
        {
          style: {
            height: 60,
            width: 43,
            left: 175,
            top: 380,
          },
          painting: `/${autresURL.peinture}/84`,
        },
        {
          style: {
            height: 115,
            width: 68,
            left: 240,
            top: 323,
          },
          painting: `/${autresURL.peinture}/69`,
        },
        {
          style: {
            height: 100,
            width: 110,
            right: 172,
            top: 270,
          },
          painting: `/${autresURL.peinture}/82`,
        },
        {
          style: {
            height: 105,
            width: 110,
            right: 172,
            bottom: 340,
          },
          painting: `/${autresURL.peinture}/319`,
        },
        {
          style: {
            height: 200,
            width: 150,
            right: 10,
            bottom: 270,
          },
          painting: `/${autresURL.peinture}/275`,
        },
      ],
      mouvement: false,
      mouvementLink: '#',
    },
  },
  Machines: {
    N: {
      id: 71,
      image: photos.MacN,
      leftTurn: {
        id: 78,
        link: `/${placeURL.Machines}/${directionURL.NO}`,
      },
      rightTurn: {
        id: 72,
        link: `/${placeURL.Machines}/${directionURL.NE}`,
      },
      actions: [
        {
          style: {
            height: 263,
            width: 360,
            left: 135,
            bottom: 280,
          },
          painting: `/${autresURL.peinture}/452`,
        },
      ],
      mouvement: false,
      mouvementLink: '#',
    },
    NE: {
      id: 72,
      image: photos.MacNE,
      leftTurn: {
        id: 71,
        link: `/${placeURL.Machines}/${directionURL.N}`,
      },
      rightTurn: {
        id: 73,
        link: `/${placeURL.Machines}/${directionURL.E}`,
      },
      actions: [
        {
          style: {
            height: 70,
            width: 105,
            left: 230,
            top: 185,
          },
          painting: `/${autresURL.peinture}/190`,
        },
        {
          style: {
            height: 100,
            width: 105,
            left: 230,
            top: 280,
          },
          painting: `/${autresURL.peinture}/451`,
        },
        {
          style: {
            height: 165,
            width: 185,
            left: 200,
            bottom: 265,
          },
          painting: `/${autresURL.peinture}/200`,
        },
      ],
      mouvement: false,
      mouvementLink: '#',
    },
    E: {
      id: 73,
      image: photos.MacE,
      leftTurn: {
        id: 72,
        link: `/${placeURL.Machines}/${directionURL.NE}`,
      },
      rightTurn: {
        id: 74,
        link: `/${placeURL.Machines}/${directionURL.SE}`,
      },
      actions: [
        {
          style: {
            height: 50,
            width: 55,
            left: 125,
            top: 358,
          },
          painting: `/${autresURL.peinture}/557`,
        },
        {
          style: {
            height: 50,
            width: 43,
            left: 220,
            top: 359,
          },
          painting: `/${autresURL.peinture}/750`,
        },
        {
          style: {
            height: 60,
            width: 43,
            left: 280,
            top: 355,
          },
          painting: `/${autresURL.peinture}/384`,
        },
        {
          style: {
            height: 55,
            width: 40,
            right: 142,
            top: 365,
          },
          painting: `/${autresURL.peinture}/223`,
        },
        {
          style: {
            height: 90,
            width: 60,
            right: 75,
            top: 355,
          },
          painting: `/${autresURL.peinture}/220`,
        },
        {
          style: {
            height: 138,
            width: 50,
            right: 10,
            top: 340,
          },
          painting: `/${autresURL.peinture}/221`,
        },
      ],
      mouvement: true,
      mouvementLink: `/${placeURL.Couloir_gauche}/${directionURL.E}`,
    },
    SE: {
      id: 74,
      image: photos.MacSE,
      leftTurn: {
        id: 73,
        link: `/${placeURL.Machines}/${directionURL.E}`,
      },
      rightTurn: {
        id: 75,
        link: `/${placeURL.Machines}/${directionURL.S}`,
      },
      actions: [
        {
          style: {
            height: 50,
            width: 33,
            left: 120,
            top: 370,
          },
          painting: `/${autresURL.peinture}/223`,
        },
        {
          style: {
            height: 90,
            width: 55,
            left: 160,
            top: 355,
          },
          painting: `/${autresURL.peinture}/220`,
        },
        {
          style: {
            height: 126,
            width: 60,
            left: 230,
            top: 343,
          },
          painting: `/${autresURL.peinture}/221`,
        },
        {
          style: {
            height: 98,
            width: 120,
            right: 180,
            top: 280,
          },
          painting: `/${autresURL.peinture}/233`,
        },
        {
          style: {
            height: 72,
            width: 102,
            right: 200,
            top: 395,
          },
          painting: `/${autresURL.peinture}/230`,
        },
        {
          style: {
            height: 90,
            width: 100,
            right: 45,
            top: 280,
          },
          painting: `/${autresURL.peinture}/440`,
        },
        {
          style: {
            height: 75,
            width: 105,
            right: 45,
            top: 405,
          },
          painting: `/${autresURL.peinture}/191`,
        },
      ],
      mouvement: false,
      mouvementLink: '#',
    },
    S: {
      id: 75,
      image: photos.MacS,
      leftTurn: {
        id: 74,
        link: `/${placeURL.Machines}/${directionURL.SE}`,
      },
      rightTurn: {
        id: 76,
        link: `/${placeURL.Machines}/${directionURL.SO}`,
      },
      actions: [
        {
          style: {
            height: 90,
            width: 80,
            left: 30,
            top: 288,
          },
          painting: `/${autresURL.peinture}/233`,
        },
        {
          style: {
            height: 73,
            width: 67,
            left: 30,
            top: 392,
          },
          painting: `/${autresURL.peinture}/230`,
        },
        {
          style: {
            height: 75,
            width: 100,
            left: 140,
            top: 280,
          },
          painting: `/${autresURL.peinture}/440`,
        },
        {
          style: {
            height: 71,
            width: 103,
            left: 135,
            top: 392,
          },
          painting: `/${autresURL.peinture}/191`,
        },
        {
          style: {
            height: 195,
            width: 145,
            right: 175,
            top: 320,
          },
          painting: `/${autresURL.peinture}/228`,
        },
        {
          style: {
            height: 158,
            width: 95,
            right: 42,
            top: 338,
          },
          painting: `/${autresURL.peinture}/222`,
        },
      ],
      mouvement: false,
      mouvementLink: '#',
    },
    SO: {
      id: 76,
      image: photos.MacSO,
      leftTurn: {
        id: 75,
        link: `/${placeURL.Machines}/${directionURL.S}`,
      },
      rightTurn: {
        id: 77,
        link: `/${placeURL.Machines}/${directionURL.O}`,
      },
      actions: [
        {
          style: {
            height: 210,
            width: 150,
            left: 80,
            top: 305,
          },
          painting: `/${autresURL.peinture}/222`,
        },
        {
          style: {
            height: 110,
            width: 90,
            left: 260,
            top: 345,
          },
          painting: `/${autresURL.peinture}/227`,
        },
        {
          style: {
            height: 200,
            width: 45,
            right: 205,
            bottom: 320,
          },
          painting: `/${autresURL.Affiches}/Predilection`,
        },
      ],
      mouvement: false,
      mouvementLink: '#',
    },
    O: {
      id: 77,
      image: photos.MacO,
      leftTurn: {
        id: 76,
        link: `/${placeURL.Machines}/${directionURL.SO}`,
      },
      rightTurn: {
        id: 78,
        link: `/${placeURL.Machines}/${directionURL.NO}`,
      },
      actions: [
        {
          style: {
            height: 150,
            width: 50,
            left: 97,
            top: 377,
          },
          painting: `/${autresURL.Affiches}/Predilection`,
        },
        {
          style: {
            height: 60,
            width: 50,
            left: 195,
            top: 370,
          },
          painting: `/${autresURL.peinture}/679`,
        },
        {
          style: {
            height: 60,
            width: 50,
            left: 272,
            top: 370,
          },
          painting: `/${autresURL.peinture}/678`,
        },
      ],
      mouvement: true,
      mouvementLink: `/${placeURL.Couloir_gauche_2}/${directionURL.O}`,
    },
    NO: {
      id: 78,
      image: photos.MacNO,
      leftTurn: {
        id: 77,
        link: `/${placeURL.Machines}/${directionURL.O}`,
      },
      rightTurn: {
        id: 71,
        link: `/${placeURL.Machines}/${directionURL.N}`,
      },
      actions: [
        {
          style: {
            height: 77,
            width: 105,
            left: 153,
            top: 188,
          },
          painting: `/${autresURL.peinture}/189`,
        },
        {
          style: {
            height: 80,
            width: 92,
            left: 155,
            top: 286,
          },
          painting: `/${autresURL.peinture}/450`,
        },
        {
          style: {
            height: 168,
            width: 105,
            left: 145,
            bottom: 273,
          },
          painting: `/${autresURL.peinture}/194`,
        },
        {
          style: {
            height: 50,
            width: 48,
            left: 295,
            top: 235,
          },
          painting: `/${autresURL.peinture}/183`,
        },
        {
          style: {
            height: 68,
            width: 68,
            left: 283,
            top: 305,
          },
          painting: `/${autresURL.peinture}/188`,
        },
        {
          style: {
            height: 75,
            width: 65,
            left: 280,
            bottom: 365,
          },
          painting: `/${autresURL.peinture}/193`,
        },
      ],
      mouvement: false,
      mouvementLink: '#',
    },
  },
  Mannequin: {
    N: {
      id: 81,
      image: photos.ManN,
      leftTurn: {
        id: 88,
        link: `/${placeURL.Mannequin}/${directionURL.NO}`,
      },
      rightTurn: {
        id: 82,
        link: `/${placeURL.Mannequin}/${directionURL.NE}`,
      },
      actions: [
        {
          style: {
            height: 245,
            width: 187,
            left: 35,
            top: 260,
          },
          painting: `/${autresURL.peinture}/1058`,
        },
        {
          style: {
            height: 147,
            width: 162,
            right: 94,
            top: 263,
          },
          painting: `/${autresURL.peinture}/316`,
        },
        {
          style: {
            height: 135,
            width: 162,
            right: 100,
            bottom: 275,
          },
          painting: `/${autresURL.peinture}/108`,
        },
      ],
      mouvement: false,
      mouvementLink: '#',
    },
    NE: {
      id: 82,
      image: photos.ManNE,
      leftTurn: {
        id: 81,
        link: `/${placeURL.Mannequin}/${directionURL.N}`,
      },
      rightTurn: {
        id: 83,
        link: `/${placeURL.Mannequin}/${directionURL.E}`,
      },
      actions: [
        {
          style: {
            height: 160,
            width: 100,
            left: 10,
            top: 220,
          },
          painting: `/${autresURL.peinture}/316`,
        },
        {
          style: {
            height: 160,
            width: 100,
            left: 10,
            bottom: 270,
          },
          painting: `/${autresURL.peinture}/108`,
        },
        {
          style: {
            height: 110,
            width: 120,
            left: 175,
            top: 355,
          },
          painting: `/${autresURL.peinture}/71`,
        },
        {
          style: {
            height: 110,
            width: 90,
            right: 210,
            top: 260,
          },
          painting: `/${autresURL.peinture}/79`,
        },
        {
          style: {
            height: 95,
            width: 75,
            right: 215,
            top: 390,
          },
          painting: `/${autresURL.peinture}/81`,
        },
      ],
      mouvement: false,
      mouvementLink: '#',
    },
    E: {
      id: 83,
      image: photos.ManE,
      leftTurn: {
        id: 82,
        link: `/${placeURL.Mannequin}/${directionURL.NE}`,
      },
      rightTurn: {
        id: 84,
        link: `/${placeURL.Mannequin}/${directionURL.SE}`,
      },
      actions: [],
      mouvement: true,
      mouvementLink: `/${placeURL.Mannequin_avant}/${directionURL.E}`,
    },
    SE: {
      id: 84,
      image: photos.ManSE,
      leftTurn: {
        id: 83,
        link: `/${placeURL.Mannequin}/${directionURL.E}`,
      },
      rightTurn: {
        id: 85,
        link: `/${placeURL.Mannequin}/${directionURL.S}`,
      },
      actions: [
        {
          style: {
            height: 95,
            width: 53,
            left: 205,
            top: 335,
          },
          painting: `/${autresURL.peinture}/428`,
        },
        {
          style: {
            height: 75,
            width: 45,
            right: 273,
            top: 340,
          },
          painting: `/${autresURL.peinture}/675`,
        },
      ],
      mouvement: true,
      mouvementLink: `/${placeURL.Video}/${directionURL.SE}`,
    },
    S: {
      id: 85,
      image: photos.ManS,
      leftTurn: {
        id: 84,
        link: `/${placeURL.Mannequin}/${directionURL.SE}`,
      },
      rightTurn: {
        id: 86,
        link: `/${placeURL.Mannequin}/${directionURL.SO}`,
      },
      actions: [],
      mouvement: false,
      mouvementLink: '#',
    },
    SO: {
      id: 86,
      image: photos.ManSO,
      leftTurn: {
        id: 85,
        link: `/${placeURL.Mannequin}/${directionURL.S}`,
      },
      rightTurn: {
        id: 87,
        link: `/${placeURL.Mannequin}/${directionURL.O}`,
      },
      actions: [
        {
          style: {
            height: 60,
            width: 60,
            right: 145,
            top: 93,
          },
          painting: `/${autresURL.peinture}/918`,
        },
        {
          style: {
            height: 100,
            width: 80,
            right: 113,
            top: 180,
          },
          painting: `/${autresURL.peinture}/922`,
        },
        {
          style: {
            height: 130,
            width: 90,
            right: 107,
            top: 315,
          },
          painting: `/${autresURL.peinture}/9999999999`,
        },
        {
          style: {
            height: 300,
            width: 230,
            left: 180,
            bottom: 150,
          },
          painting: `/${autresURL.Affiches}/Mannequin`,
        },
      ],
      mouvement: false,
      mouvementLink: '#',
    },
    O: {
      id: 87,
      image: photos.ManO,
      leftTurn: {
        id: 86,
        link: `/${placeURL.Mannequin}/${directionURL.SO}`,
      },
      rightTurn: {
        id: 88,
        link: `/${placeURL.Mannequin}/${directionURL.NO}`,
      },
      actions: [
        {
          style: {
            height: 90,
            width: 70,
            left: 190,
            top: 155,
          },
          painting: `/${autresURL.peinture}/918`,
        },
        {
          style: {
            height: 120,
            width: 90,
            left: 165,
            top: 280,
          },
          painting: `/${autresURL.peinture}/922`,
        },
        {
          style: {
            height: 130,
            width: 100,
            left: 155,
            bottom: 260,
          },
          painting: `/${autresURL.peinture}/9999999999`,
        },
        {
          style: {
            height: 90,
            width: 70,
            right: 203,
            top: 160,
          },
          painting: `/${autresURL.peinture}/964`,
        },
        {
          style: {
            height: 130,
            width: 90,
            right: 188,
            top: 280,
          },
          painting: `/${autresURL.peinture}/963`,
        },
        {
          style: {
            height: 130,
            width: 95,
            right: 190,
            bottom: 260,
          },
          painting: `/${autresURL.peinture}/9999999999`,
        },
      ],
      mouvement: false,
      mouvementLink: '#',
    },
    NO: {
      id: 88,
      image: photos.ManNO,
      leftTurn: {
        id: 87,
        link: `/${placeURL.Mannequin}/${directionURL.O}`,
      },
      rightTurn: {
        id: 81,
        link: `/${placeURL.Mannequin}/${directionURL.N}`,
      },
      actions: [
        {
          style: {
            height: 90,
            width: 70,
            left: 100,
            top: 130,
          },
          painting: `/${autresURL.peinture}/964`,
        },
        {
          style: {
            height: 130,
            width: 80,
            left: 55,
            top: 240,
          },
          painting: `/${autresURL.peinture}/963`,
        },
        {
          style: {
            height: 135,
            width: 80,
            left: 48,
            bottom: 295,
          },
          painting: `/${autresURL.peinture}/9999999999`,
        },
        {
          style: {
            height: 280,
            width: 210,
            right: 120,
            top: 260,
          },
          painting: `/${autresURL.peinture}/1058`,
        },
      ],
      mouvement: false,
      mouvementLink: '#',
    },
  },
  Mannequin_avant: {
    N: {
      id: 91,
      image: photos.ManAN,
      leftTurn: {
        id: 98,
        link: `/${placeURL.Mannequin_avant}/${directionURL.NO}`,
      },
      rightTurn: {
        id: 92,
        link: `/${placeURL.Mannequin_avant}/${directionURL.NE}`,
      },
      actions: [
        {
          style: {
            height: 128,
            width: 88,
            left: 10,
            top: 282,
          },
          painting: `/${autresURL.peinture}/316`,
        },
        {
          style: {
            height: 124,
            width: 88,
            left: 10,
            bottom: 290,
          },
          painting: `/${autresURL.peinture}/108`,
        },
        {
          style: {
            height: 115,
            width: 140,
            left: 136,
            bottom: 333,
          },
          painting: `/${autresURL.peinture}/71`,
        },
        {
          style: {
            height: 160,
            width: 185,
            right: 108,
            top: 245,
          },
          painting: `/${autresURL.peinture}/79`,
        },
        {
          style: {
            height: 134,
            width: 160,
            right: 115,
            bottom: 270,
          },
          painting: `/${autresURL.peinture}/81`,
        },
      ],
      mouvement: false,
      mouvementLink: '#',
    },
    NE: {
      id: 92,
      image: photos.ManANE,
      leftTurn: {
        id: 91,
        link: `/${placeURL.Mannequin_avant}/${directionURL.N}`,
      },
      rightTurn: {
        id: 93,
        link: `/${placeURL.Mannequin_avant}/${directionURL.E}`,
      },
      actions: [
        {
          style: {
            height: 150,
            width: 100,
            left: 10,
            top: 200,
          },
          painting: `/${autresURL.peinture}/79`,
        },
        {
          style: {
            height: 143,
            width: 90,
            left: 10,
            bottom: 315,
          },
          painting: `/${autresURL.peinture}/81`,
        },
        {
          style: {
            height: 113,
            width: 105,
            left: 190,
            top: 310,
          },
          painting: `/${autresURL.peinture}/310`,
        },
        {
          style: {
            height: 66,
            width: 50,
            right: 240,
            top: 277,
          },
          painting: `/${autresURL.peinture}/77`,
        },
        {
          style: {
            height: 66,
            width: 48,
            right: 240,
            top: 366,
          },
          painting: `/${autresURL.peinture}/76`,
        },
        {
          style: {
            height: 62,
            width: 30,
            right: 190,
            top: 366,
          },
          painting: `/${autresURL.peinture}/84`,
        },
        {
          style: {
            height: 60,
            width: 33,
            right: 187,
            top: 295,
          },
          painting: `/${autresURL.peinture}/94`,
        },
      ],
      mouvement: false,
      mouvementLink: '#',
    },
    E: {
      id: 93,
      image: photos.ManAE,
      leftTurn: {
        id: 92,
        link: `/${placeURL.Mannequin_avant}/${directionURL.NE}`,
      },
      rightTurn: {
        id: 94,
        link: `/${placeURL.Mannequin_avant}/${directionURL.SE}`,
      },
      actions: [
        {
          style: {
            height: 40,
            width: 64,
            right: 148,
            top: 295,
          },
          painting: `/${autresURL.peinture}/116`,
        },
        {
          style: {
            height: 40,
            width: 64,
            right: 148,
            top: 354,
          },
          painting: `/${autresURL.peinture}/118`,
        },
        {
          style: {
            height: 40,
            width: 64,
            right: 150,
            bottom: 384,
          },
          painting: `/${autresURL.peinture}/117`,
        },
      ],
      mouvement: true,
      mouvementLink: `/${placeURL.Vaches}/${directionURL.E}`,
    },
    SE: {
      id: 94,
      image: photos.ManASE,
      leftTurn: {
        id: 93,
        link: `/${placeURL.Mannequin_avant}/${directionURL.E}`,
      },
      rightTurn: {
        id: 95,
        link: `/${placeURL.Mannequin_avant}/${directionURL.S}`,
      },
      actions: [
        {
          style: {
            height: 40,
            width: 64,
            left: 115,
            top: 297,
          },
          painting: `/${autresURL.peinture}/116`,
        },
        {
          style: {
            height: 40,
            width: 64,
            left: 113,
            top: 355,
          },
          painting: `/${autresURL.peinture}/118`,
        },
        {
          style: {
            height: 40,
            width: 64,
            left: 114,
            bottom: 385,
          },
          painting: `/${autresURL.peinture}/117`,
        },
        {
          style: {
            height: 175,
            width: 64,
            right: 220,
            top: 290,
          },
          painting: `/${autresURL.peinture}/428`,
        },
      ],
      mouvement: false,
      mouvementLink: '#',
    },
    S: {
      id: 95,
      image: photos.ManAS,
      leftTurn: {
        id: 94,
        link: `/${placeURL.Mannequin_avant}/${directionURL.SE}`,
      },
      rightTurn: {
        id: 96,
        link: `/${placeURL.Mannequin_avant}/${directionURL.SO}`,
      },
      actions: [
        {
          style: {
            height: 190,
            width: 66,
            left: 40,
            top: 294,
          },
          painting: `/${autresURL.peinture}/428`,
        },
        {
          style: {
            height: 105,
            width: 38,
            left: 160,
            top: 325,
          },
          painting: `/${autresURL.peinture}/675`,
        },
      ],
      mouvement: true,
      mouvementLink: `/${placeURL.Video}/${directionURL.S}`,
    },
    SO: {
      id: 96,
      image: photos.ManASO,
      leftTurn: {
        id: 95,
        link: `/${placeURL.Mannequin_avant}/${directionURL.S}`,
      },
      rightTurn: {
        id: 97,
        link: `/${placeURL.Mannequin_avant}/${directionURL.O}`,
      },
      actions: [
        {
          style: {
            height: 55,
            width: 42,
            right: 145,
            top: 255,
          },
          painting: `/${autresURL.peinture}/918`,
        },
        {
          style: {
            height: 62,
            width: 45,
            right: 140,
            top: 325,
          },
          painting: `/${autresURL.peinture}/922`,
        },
        {
          style: {
            height: 55,
            width: 42,
            right: 141,
            top: 403,
          },
          painting: `/${autresURL.peinture}/9999999999`,
        },
        {
          style: {
            height: 58,
            width: 40,
            right: 72,
            top: 255,
          },
          painting: `/${autresURL.peinture}/964`,
        },
        {
          style: {
            height: 58,
            width: 40,
            right: 65,
            top: 328,
          },
          painting: `/${autresURL.peinture}/963`,
        },
        {
          style: {
            height: 62,
            width: 40,
            right: 65,
            top: 405,
          },
          painting: `/${autresURL.peinture}/9999999999`,
        },
        {
          style: {
            height: 200,
            width: 100,
            right: 190,
            bottom: 190,
          },
          painting: `/${autresURL.Affiches}/Mannequin`,
        },
      ],
      mouvement: false,
      mouvementLink: '#',
    },
    O: {
      id: 97,
      image: photos.ManAO,
      leftTurn: {
        id: 96,
        link: `/${placeURL.Mannequin_avant}/${directionURL.SO}`,
      },
      rightTurn: {
        id: 98,
        link: `/${placeURL.Mannequin_avant}/${directionURL.NO}`,
      },
      actions: [
        {
          style: {
            height: 58,
            width: 45,
            left: 209,
            top: 240,
          },
          painting: `/${autresURL.peinture}/918`,
        },
        {
          style: {
            height: 60,
            width: 45,
            left: 205,
            top: 312,
          },
          painting: `/${autresURL.peinture}/922`,
        },
        {
          style: {
            height: 60,
            width: 45,
            left: 202,
            top: 388,
          },
          painting: `/${autresURL.peinture}/9999999999`,
        },
        {
          style: {
            height: 60,
            width: 45,
            left: 290,
            top: 240,
          },
          painting: `/${autresURL.peinture}/964`,
        },
        {
          style: {
            height: 60,
            width: 45,
            left: 288,
            top: 313,
          },
          painting: `/${autresURL.peinture}/963`,
        },
        {
          style: {
            height: 60,
            width: 45,
            left: 286,
            top: 389,
          },
          painting: `/${autresURL.peinture}/9999999999`,
        },
        {
          style: {
            height: 230,
            width: 110,
            left: 100,
            bottom: 190,
          },
          painting: `/${autresURL.Affiches}/Mannequin`,
        },
        {
          style: {
            height: 137,
            width: 60,
            right: 152,
            top: 315,
          },
          painting: `/${autresURL.peinture}/1058`,
        },
      ],
      mouvement: true,
      mouvementLink: `/${placeURL.Mannequin}/${directionURL.O}`,
    },
    NO: {
      id: 98,
      image: photos.ManANO,
      leftTurn: {
        id: 97,
        link: `/${placeURL.Mannequin_avant}/${directionURL.O}`,
      },
      rightTurn: {
        id: 91,
        link: `/${placeURL.Mannequin_avant}/${directionURL.N}`,
      },
      actions: [
        {
          style: {
            height: 130,
            width: 50,
            left: 125,
            top: 315,
          },
          painting: `/${autresURL.peinture}/1058`,
        },
        {
          style: {
            height: 130,
            width: 130,
            right: 225,
            top: 265,
          },
          painting: `/${autresURL.peinture}/316`,
        },
        {
          style: {
            height: 127,
            width: 128,
            right: 228,
            bottom: 300,
          },
          painting: `/${autresURL.peinture}/108`,
        },
        {
          style: {
            height: 127,
            width: 128,
            right: 50,
            bottom: 333,
          },
          painting: `/${autresURL.peinture}/71`,
        },
      ],
      mouvement: false,
      mouvementLink: '#',
    },
  },
  Milieu: {
    N: {
      id: 101,
      image: photos.MilN,
      leftTurn: {
        id: 108,
        link: `/${placeURL.Milieu}/${directionURL.NO}`,
      },
      rightTurn: {
        id: 102,
        link: `/${placeURL.Milieu}/${directionURL.NE}`,
      },
      actions: [
        {
          style: {
            height: 90,
            width: 80,
            left: 25,
            top: 290,
          },
          painting: `/${autresURL.peinture}/94`,
        },
        {
          style: {
            height: 100,
            width: 80,
            left: 28,
            bottom: 340,
          },
          painting: `/${autresURL.peinture}/84`,
        },
        {
          style: {
            height: 175,
            width: 143,
            left: 155,
            bottom: 360,
          },
          painting: `/${autresURL.peinture}/69`,
        },
        {
          style: {
            height: 120,
            width: 135,
            right: 130,
            top: 255,
          },
          painting: `/${autresURL.peinture}/82`,
        },
        {
          style: {
            height: 120,
            width: 135,
            right: 130,
            bottom: 315,
          },
          painting: `/${autresURL.peinture}/319`,
        },
      ],
      mouvement: false,
      mouvementLink: '#',
    },
    NE: {
      id: 102,
      image: photos.MilNE,
      leftTurn: {
        id: 101,
        link: `/${placeURL.Milieu}/${directionURL.N}`,
      },
      rightTurn: {
        id: 103,
        link: `/${placeURL.Milieu}/${directionURL.E}`,
      },
      actions: [
        {
          style: {
            height: 110,
            width: 105,
            left: 15,
            top: 235,
          },
          painting: `/${autresURL.peinture}/82`,
        },
        {
          style: {
            height: 116,
            width: 110,
            left: 11,
            top: 370,
          },
          painting: `/${autresURL.peinture}/319`,
        },
        {
          style: {
            height: 135,
            width: 130,
            left: 245,
            top: 338,
          },
          painting: `/${autresURL.peinture}/275`,
        },
      ],
      mouvement: false,
      mouvementLink: '#',
    },
    E: {
      id: 103,
      image: photos.MilE,
      leftTurn: {
        id: 102,
        link: `/${placeURL.Milieu}/${directionURL.NE}`,
      },
      rightTurn: {
        id: 104,
        link: `/${placeURL.Milieu}/${directionURL.SE}`,
      },
      actions: [
        {
          style: {
            height: 185,
            width: 80,
            right: 95,
            top: 290,
          },
          painting: `/${autresURL.peinture}/288`,
        },
      ],
      mouvement: true,
      mouvementLink: `/${placeURL.Fernand}/${directionURL.E}`,
    },
    SE: {
      id: 104,
      image: photos.MilSE,
      leftTurn: {
        id: 103,
        link: `/${placeURL.Milieu}/${directionURL.E}`,
      },
      rightTurn: {
        id: 105,
        link: `/${placeURL.Milieu}/${directionURL.S}`,
      },
      actions: [
        {
          style: {
            height: 180,
            width: 68,
            left: 95,
            top: 285,
          },
          painting: `/${autresURL.peinture}/288`,
        },
        {
          style: {
            height: 90,
            width: 68,
            left: 260,
            top: 330,
          },
          painting: `/${autresURL.peinture}/557`,
        },
        {
          style: {
            height: 60,
            width: 30,
            right: 238,
            top: 340,
          },
          painting: `/${autresURL.peinture}/750`,
        },
        {
          style: {
            height: 60,
            width: 20,
            right: 210,
            top: 340,
          },
          painting: `/${autresURL.peinture}/384`,
        },
      ],
      mouvement: false,
      mouvementLink: '#',
    },
    S: {
      id: 105,
      image: photos.MilS,
      leftTurn: {
        id: 104,
        link: `/${placeURL.Milieu}/${directionURL.SE}`,
      },
      rightTurn: {
        id: 106,
        link: `/${placeURL.Milieu}/${directionURL.SO}`,
      },
      actions: [],
      mouvement: true,
      mouvementLink: `/${placeURL.Couloir_gauche}/${directionURL.S}`,
    },
    SO: {
      id: 106,
      image: photos.MilSO,
      leftTurn: {
        id: 105,
        link: `/${placeURL.Milieu}/${directionURL.S}`,
      },
      rightTurn: {
        id: 107,
        link: `/${placeURL.Milieu}/${directionURL.O}`,
      },
      actions: [
        {
          style: {
            height: 135,
            width: 40,
            left: 90,
            top: 305,
          },
          painting: `/${autresURL.peinture}/179`,
        },
        {
          style: {
            height: 143,
            width: 100,
            left: 174,
            top: 300,
          },
          painting: `/${autresURL.peinture}/178`,
        },
      ],
      mouvement: false,
      mouvementLink: '#',
    },
    O: {
      id: 107,
      image: photos.MilO,
      leftTurn: {
        id: 106,
        link: `/${placeURL.Milieu}/${directionURL.SO}`,
      },
      rightTurn: {
        id: 108,
        link: `/${placeURL.Milieu}/${directionURL.NO}`,
      },
      actions: [],
      mouvement: true,
      mouvementLink: `/${placeURL.Vaches}/${directionURL.O}`,
    },
    NO: {
      id: 108,
      image: photos.MilNO,
      leftTurn: {
        id: 107,
        link: `/${placeURL.Milieu}/${directionURL.O}`,
      },
      rightTurn: {
        id: 101,
        link: `/${placeURL.Milieu}/${directionURL.N}`,
      },
      actions: [
        {
          style: {
            height: 58,
            width: 55,
            left: 195,
            top: 308,
          },
          painting: `/${autresURL.peinture}/77`,
        },
        {
          style: {
            height: 58,
            width: 55,
            left: 195,
            top: 390,
          },
          painting: `/${autresURL.peinture}/76`,
        },
        {
          style: {
            height: 92,
            width: 110,
            left: 285,
            top: 275,
          },
          painting: `/${autresURL.peinture}/94`,
        },
        {
          style: {
            height: 102,
            width: 110,
            left: 288,
            top: 387,
          },
          painting: `/${autresURL.peinture}/84`,
        },
        {
          style: {
            height: 185,
            width: 135,
            right: 35,
            top: 298,
          },
          painting: `/${autresURL.peinture}/69`,
        },
      ],
      mouvement: false,
      mouvementLink: '#',
    },
  },
  Orchestre: {
    N: {
      id: 111,
      image: photos.OrcN,
      leftTurn: {
        id: 118,
        link: `/${placeURL.Orchestre}/${directionURL.NO}`,
      },
      rightTurn: {
        id: 112,
        link: `/${placeURL.Orchestre}/${directionURL.NE}`,
      },
      actions: [
        {
          style: {
            height: 120,
            width: 100,
            left: 10,
            top: 330,
          },
          painting: `/${autresURL.peinture}/10`,
        },
        {
          style: {
            height: 150,
            width: 180,
            left: 160,
            top: 310,
          },
          painting: `/${autresURL.peinture}/213`,
        },
      ],
      mouvement: false,
      mouvementLink: '#',
    },
    NE: {
      id: 112,
      image: photos.OrcNE,
      leftTurn: {
        id: 111,
        link: `/${placeURL.Orchestre}/${directionURL.N}`,
      },
      rightTurn: {
        id: 113,
        link: `/${placeURL.Orchestre}/${directionURL.E}`,
      },
      actions: [
        {
          style: {
            height: 250,
            width: 200,
            left: 200,
            top: 250,
          },
          painting: `/${autresURL.Affiches}/Fauve`,
        },
      ],
      mouvement: false,
      mouvementLink: '#',
    },
    E: {
      id: 113,
      image: photos.OrcE,
      leftTurn: {
        id: 112,
        link: `/${placeURL.Orchestre}/${directionURL.NE}`,
      },
      rightTurn: {
        id: 114,
        link: `/${placeURL.Orchestre}/${directionURL.SE}`,
      },
      actions: [
        {
          style: {
            height: 250,
            width: 100,
            left: 10,
            top: 300,
          },
          painting: `/${autresURL.Affiches}/Fauve`,
        },
        {
          style: {
            height: 130,
            width: 130,
            right: 40,
            top: 300,
          },
          painting: `/${autresURL.peinture}/520`,
        },
      ],
      mouvement: false,
      mouvementLink: '#',
    },
    SE: {
      id: 114,
      image: photos.OrcSE,
      leftTurn: {
        id: 113,
        link: `/${placeURL.Orchestre}/${directionURL.E}`,
      },
      rightTurn: {
        id: 115,
        link: `/${placeURL.Orchestre}/${directionURL.S}`,
      },
      actions: [
        {
          style: {
            height: 130,
            width: 130,
            left: 160,
            top: 285,
          },
          painting: `/${autresURL.peinture}/520`,
        },
        {
          style: {
            height: 60,
            width: 60,
            left: 330,
            top: 320,
          },
          painting: `/${autresURL.peinture}/519`,
        },
        // {
        //   style: {
        //     height: 70,
        //     width: 40,
        //     right: 180,
        //     top: 320,
        //   },
        //   painting: `/${autresURL.peinture}/7`,
        // },
        // {
        //   style: {
        //     height: 40,
        //     width: 60,
        //     right: 90,
        //     top: 310,
        //   },
        //   painting: `/${autresURL.peinture}/453`,
        // },
        // {
        //   style: {
        //     height: 40,
        //     width: 60,
        //     right: 90,
        //     top: 375,
        //   },
        //   painting: `/${autresURL.peinture}/455`,
        // },
      ],
      mouvement: false,
      mouvementLink: '#',
    },
    S: {
      id: 115,
      image: photos.OrcS,
      leftTurn: {
        id: 114,
        link: `/${placeURL.Orchestre}/${directionURL.SE}`,
      },
      rightTurn: {
        id: 116,
        link: `/${placeURL.Orchestre}/${directionURL.SO}`,
      },
      actions: [],
      mouvement: true,
      mouvementLink: `/${placeURL.Orchestre_milieu}/${directionURL.S}`,
    },
    SO: {
      id: 116,
      image: photos.OrcSO,
      leftTurn: {
        id: 115,
        link: `/${placeURL.Orchestre}/${directionURL.S}`,
      },
      rightTurn: {
        id: 117,
        link: `/${placeURL.Orchestre}/${directionURL.O}`,
      },
      actions: [
        {
          style: {
            height: 100,
            width: 100,
            left: 150,
            bottom: 175,
          },
          painting: `/${placeURL.Table}/8`,
        },
      ],
      mouvement: false,
      mouvementLink: '#',
    },
    O: {
      id: 117,
      image: photos.OrcO,
      leftTurn: {
        id: 116,
        link: `/${placeURL.Orchestre}/${directionURL.SO}`,
      },
      rightTurn: {
        id: 118,
        link: `/${placeURL.Orchestre}/${directionURL.NO}`,
      },
      actions: [],
      mouvement: true,
      mouvementLink: `/${placeURL.Table_opposee}/${directionURL.O}`,
    },
    NO: {
      id: 118,
      image: photos.OrcNO,
      leftTurn: {
        id: 117,
        link: `/${placeURL.Orchestre}/${directionURL.O}`,
      },
      rightTurn: {
        id: 111,
        link: `/${placeURL.Orchestre}/${directionURL.N}`,
      },
      actions: [
        {
          style: {
            height: 70,
            width: 50,
            left: 180,
            top: 325,
          },
          painting: `/${autresURL.peinture}/210`,
        },
        {
          style: {
            height: 55,
            width: 60,
            left: 250,
            top: 333,
          },
          painting: `/${autresURL.peinture}/208`,
        },
        {
          style: {
            height: 130,
            width: 135,
            right: 150,
            top: 300,
          },
          painting: `/${autresURL.peinture}/10`,
        },
      ],
      mouvement: false,
      mouvementLink: '#',
    },
  },
  Orchestre_milieu: {
    N: {
      id: 121,
      image: photos.OrcMN,
      leftTurn: {
        id: 128,
        link: `/${placeURL.Orchestre_milieu}/${directionURL.NO}`,
      },
      rightTurn: {
        id: 122,
        link: `/${placeURL.Orchestre_milieu}/${directionURL.NE}`,
      },
      actions: [
        {
          style: {
            height: 90,
            width: 80,
            left: 50,
            top: 330,
          },
          painting: `/${autresURL.peinture}/10`,
        },
        {
          style: {
            height: 100,
            width: 120,
            left: 155,
            top: 315,
          },
          painting: `/${autresURL.peinture}/213`,
        },
        {
          style: {
            height: 200,
            width: 120,
            right: 80,
            top: 315,
          },
          painting: `/${autresURL.Affiches}/Fauve`,
        },
      ],
      mouvement: true,
      mouvementLink: `/${placeURL.Orchestre}/${directionURL.N}`,
    },
    NE: {
      id: 122,
      image: photos.OrcMNE,
      leftTurn: {
        id: 121,
        link: `/${placeURL.Orchestre_milieu}/${directionURL.N}`,
      },
      rightTurn: {
        id: 123,
        link: `/${placeURL.Orchestre_milieu}/${directionURL.E}`,
      },
      actions: [
        {
          style: {
            height: 200,
            width: 120,
            left: 180,
            top: 315,
          },
          painting: `/${autresURL.Affiches}/Fauve`,
        },
      ],
      mouvement: false,
      mouvementLink: '#',
    },
    E: {
      id: 123,
      image: photos.OrcME,
      leftTurn: {
        id: 122,
        link: `/${placeURL.Orchestre_milieu}/${directionURL.NE}`,
      },
      rightTurn: {
        id: 124,
        link: `/${placeURL.Orchestre_milieu}/${directionURL.SE}`,
      },
      actions: [
        {
          style: {
            height: 160,
            width: 190,
            left: 210,
            top: 290,
          },
          painting: `/${autresURL.peinture}/520`,
        },
        {
          style: {
            height: 80,
            width: 80,
            right: 55,
            top: 340,
          },
          painting: `/${autresURL.peinture}/519`,
        },
      ],
      mouvement: false,
      mouvementLink: '#',
    },
    SE: {
      id: 124,
      image: photos.OrcMSE,
      leftTurn: {
        id: 123,
        link: `/${placeURL.Orchestre_milieu}/${directionURL.E}`,
      },
      rightTurn: {
        id: 125,
        link: `/${placeURL.Orchestre_milieu}/${directionURL.S}`,
      },
      actions: [
        {
          style: {
            height: 90,
            width: 95,
            left: 160,
            top: 315,
          },
          painting: `/${autresURL.peinture}/519`,
        },
        {
          style: {
            height: 90,
            width: 60,
            left: 300,
            top: 315,
          },
          painting: `/${autresURL.peinture}/7`,
        },
        {
          style: {
            height: 60,
            width: 80,
            right: 140,
            top: 295,
          },
          painting: `/${autresURL.peinture}/453`,
        },
        {
          style: {
            height: 60,
            width: 90,
            right: 140,
            top: 380,
          },
          painting: `/${autresURL.peinture}/455`,
        },
      ],
      mouvement: false,
      mouvementLink: '#',
    },
    S: {
      id: 125,
      image: photos.OrcMS,
      leftTurn: {
        id: 124,
        link: `/${placeURL.Orchestre_milieu}/${directionURL.SE}`,
      },
      rightTurn: {
        id: 126,
        link: `/${placeURL.Orchestre_milieu}/${directionURL.SO}`,
      },
      actions: [
        {
          style: {
            height: 60,
            width: 70,
            left: 115,
            top: 290,
          },
          painting: `/${autresURL.peinture}/453`,
        },
        {
          style: {
            height: 60,
            width: 90,
            left: 110,
            top: 370,
          },
          painting: `/${autresURL.peinture}/455`,
        },
        {
          style: {
            height: 60,
            width: 90,
            left: 245,
            top: 285,
          },
          painting: `/${autresURL.peinture}/456`,
        },
        {
          style: {
            height: 60,
            width: 90,
            left: 245,
            top: 370,
          },
          painting: `/${autresURL.peinture}/457`,
        },
        {
          style: {
            height: 60,
            width: 60,
            right: 170,
            top: 330,
          },
          painting: `/${autresURL.peinture}/518`,
        },
      ],
      mouvement: true,
      mouvementLink: `/${placeURL.Orchestre_oppose}/${directionURL.S}`,
    },
    SO: {
      id: 126,
      image: photos.OrcMSO,
      leftTurn: {
        id: 125,
        link: `/${placeURL.Orchestre_milieu}/${directionURL.S}`,
      },
      rightTurn: {
        id: 127,
        link: `/${placeURL.Orchestre_milieu}/${directionURL.O}`,
      },
      actions: [
        {
          style: {
            height: 100,
            width: 100,
            right: 170,
            bottom: 130,
          },
          painting: `/${placeURL.Table}/1`,
        },
      ],
      mouvement: false,
      mouvementLink: '#',
    },
    O: {
      id: 127,
      image: photos.OrcMO,
      leftTurn: {
        id: 126,
        link: `/${placeURL.Orchestre_milieu}/${directionURL.SO}`,
      },
      rightTurn: {
        id: 128,
        link: `/${placeURL.Orchestre_milieu}/${directionURL.NO}`,
      },
      actions: [
        {
          style: {
            height: 100,
            width: 100,
            left: 120,
            bottom: 120,
          },
          painting: `/${placeURL.Table}/1`,
        },
        {
          style: {
            height: 100,
            width: 100,
            right: 250,
            bottom: 100,
          },
          painting: `/${placeURL.Table}/8`,
        },
      ],
      mouvement: false,
      mouvementLink: '#',
    },
    NO: {
      id: 128,
      image: photos.OrcMNO,
      leftTurn: {
        id: 127,
        link: `/${placeURL.Orchestre_milieu}/${directionURL.O}`,
      },
      rightTurn: {
        id: 121,
        link: `/${placeURL.Orchestre_milieu}/${directionURL.N}`,
      },
      actions: [
        {
          style: {
            height: 90,
            width: 95,
            right: 170,
            top: 330,
          },
          painting: `/${autresURL.peinture}/10`,
        },
        {
          style: {
            height: 105,
            width: 110,
            right: 35,
            top: 330,
          },
          painting: `/${autresURL.peinture}/213`,
        },
      ],
      mouvement: true,
      mouvementLink: `/${placeURL.Table_opposee}/${directionURL.NO}`,
    },
  },
  Orchestre_oppose: {
    N: {
      id: 131,
      image: photos.OrcON,
      leftTurn: {
        id: 138,
        link: `/${placeURL.Orchestre_oppose}/${directionURL.NO}`,
      },
      rightTurn: {
        id: 132,
        link: `/${placeURL.Orchestre_oppose}/${directionURL.NE}`,
      },
      actions: [],
      mouvement: true,
      mouvementLink: `/${placeURL.Orchestre_milieu}/${directionURL.N}`,
    },
    NE: {
      id: 132,
      image: photos.OrcONE,
      leftTurn: {
        id: 131,
        link: `/${placeURL.Orchestre_oppose}/${directionURL.N}`,
      },
      rightTurn: {
        id: 133,
        link: `/${placeURL.Orchestre_oppose}/${directionURL.E}`,
      },
      actions: [
        {
          style: {
            height: 130,
            width: 135,
            right: 275,
            top: 315,
          },
          painting: `/${autresURL.peinture}/520`,
        },
        {
          style: {
            height: 110,
            width: 150,
            right: 15,
            top: 335,
          },
          painting: `/${autresURL.peinture}/519`,
        },
      ],
      mouvement: false,
      mouvementLink: '#',
    },
    E: {
      id: 133,
      image: photos.OrcOE,
      leftTurn: {
        id: 132,
        link: `/${placeURL.Orchestre_oppose}/${directionURL.NE}`,
      },
      rightTurn: {
        id: 134,
        link: `/${placeURL.Orchestre_oppose}/${directionURL.SE}`,
      },
      actions: [
        {
          style: {
            height: 120,
            width: 180,
            left: 110,
            top: 320,
          },
          painting: `/${autresURL.peinture}/519`,
        },
        {
          style: {
            height: 189,
            width: 180,
            right: 45,
            top: 295,
          },
          painting: `/${autresURL.peinture}/7`,
        },
      ],
      mouvement: false,
      mouvementLink: '#',
    },
    SE: {
      id: 134,
      image: photos.OrcOSE,
      leftTurn: {
        id: 133,
        link: `/${placeURL.Orchestre_oppose}/${directionURL.E}`,
      },
      rightTurn: {
        id: 135,
        link: `/${placeURL.Orchestre_oppose}/${directionURL.S}`,
      },
      actions: [
        {
          style: {
            height: 190,
            width: 185,
            left: 50,
            top: 285,
          },
          painting: `/${autresURL.peinture}/7`,
        },
        {
          style: {
            height: 110,
            width: 145,
            right: 165,
            top: 255,
          },
          painting: `/${autresURL.peinture}/453`,
        },
        {
          style: {
            height: 90,
            width: 145,
            right: 165,
            bottom: 320,
          },
          painting: `/${autresURL.peinture}/455`,
        },
      ],
      mouvement: false,
      mouvementLink: '#',
    },
    S: {
      id: 135,
      image: photos.OrcOS,
      leftTurn: {
        id: 134,
        link: `/${placeURL.Orchestre_oppose}/${directionURL.SE}`,
      },
      rightTurn: {
        id: 136,
        link: `/${placeURL.Orchestre_oppose}/${directionURL.SO}`,
      },
      actions: [
        {
          style: {
            height: 100,
            width: 110,
            left: 30,
            top: 255,
          },
          painting: `/${autresURL.peinture}/453`,
        },
        {
          style: {
            height: 100,
            width: 110,
            left: 30,
            bottom: 325,
          },
          painting: `/${autresURL.peinture}/455`,
        },
        {
          style: {
            height: 120,
            width: 190,
            right: 170,
            top: 230,
          },
          painting: `/${autresURL.peinture}/456`,
        },
        {
          style: {
            height: 115,
            width: 190,
            right: 170,
            bottom: 310,
          },
          painting: `/${autresURL.peinture}/457`,
        },
        {
          style: {
            height: 90,
            width: 55,
            right: 15,
            top: 350,
          },
          painting: `/${autresURL.peinture}/518`,
        },
      ],
      mouvement: false,
      mouvementLink: '#',
    },
    SO: {
      id: 136,
      image: photos.OrcOSO,
      leftTurn: {
        id: 135,
        link: `/${placeURL.Orchestre_oppose}/${directionURL.S}`,
      },
      rightTurn: {
        id: 137,
        link: `/${placeURL.Orchestre_oppose}/${directionURL.O}`,
      },
      actions: [
        {
          style: {
            height: 90,
            width: 80,
            left: 165,
            top: 324,
          },
          painting: `/${autresURL.peinture}/518`,
        },
        {
          style: {
            height: 55,
            width: 40,
            right: 270,
            top: 295,
          },
          painting: `/${autresURL.peinture}/217`,
        },
        {
          style: {
            height: 55,
            width: 50,
            right: 265,
            top: 380,
          },
          painting: `/${autresURL.peinture}/454`,
        },
      ],
      mouvement: false,
      mouvementLink: '#',
    },
    O: {
      id: 137,
      image: photos.OrcOO,
      leftTurn: {
        id: 136,
        link: `/${placeURL.Orchestre_oppose}/${directionURL.SO}`,
      },
      rightTurn: {
        id: 138,
        link: `/${placeURL.Orchestre_oppose}/${directionURL.NO}`,
      },
      actions: [],
      mouvement: true,
      mouvementLink: `/${placeURL.Table_entree}/${directionURL.O}`,
    },
    NO: {
      id: 138,
      image: photos.OrcONO,
      leftTurn: {
        id: 137,
        link: `/${placeURL.Orchestre_oppose}/${directionURL.O}`,
      },
      rightTurn: {
        id: 131,
        link: `/${placeURL.Orchestre_oppose}/${directionURL.N}`,
      },
      actions: [
        {
          style: {
            height: 60,
            width: 80,
            left: 200,
            bottom: 260,
          },
          painting: `/${placeURL.Table}/1`,
        },
      ],
      mouvement: false,
      mouvementLink: '#',
    },
  },
  Parfum: {
    N: {
      id: 141,
      image: photos.ParN,
      leftTurn: {
        id: 148,
        link: `/${placeURL.Parfum}/${directionURL.NO}`,
      },
      rightTurn: {
        id: 142,
        link: `/${placeURL.Parfum}/${directionURL.NE}`,
      },
      actions: [],
      mouvement: false,
      mouvementLink: '#',
    },
    NE: {
      id: 142,
      image: photos.ParNE,
      leftTurn: {
        id: 141,
        link: `/${placeURL.Parfum}/${directionURL.N}`,
      },
      rightTurn: {
        id: 143,
        link: `/${placeURL.Parfum}/${directionURL.E}`,
      },
      actions: [
        {
          style: {
            height: 80,
            width: 60,
            right: 172,
            top: 330,
          },
          painting: `/${autresURL.peinture}/675`,
        },
      ],
      mouvement: false,
      mouvementLink: '#',
    },
    E: {
      id: 143,
      image: photos.ParE,
      leftTurn: {
        id: 142,
        link: `/${placeURL.Parfum}/${directionURL.NE}`,
      },
      rightTurn: {
        id: 144,
        link: `/${placeURL.Parfum}/${directionURL.SE}`,
      },
      actions: [
        {
          style: {
            height: 80,
            width: 55,
            left: 95,
            top: 315,
          },
          painting: `/${autresURL.peinture}/675`,
        },
        {
          style: {
            height: 80,
            width: 45,
            right: 130,
            top: 330,
          },
          painting: `/${autresURL.peinture}/227`,
        },
        {
          style: {
            height: 230,
            width: 80,
            right: 20,
            top: 330,
          },
          painting: `/${autresURL.Affiches}/Predilection`,
        },
      ],
      mouvement: true,
      mouvementLink: `/${placeURL.Couloir_gauche_2}/${directionURL.E}`,
    },
    SE: {
      id: 144,
      image: photos.ParSE,
      leftTurn: {
        id: 143,
        link: `/${placeURL.Parfum}/${directionURL.E}`,
      },
      rightTurn: {
        id: 145,
        link: `/${placeURL.Parfum}/${directionURL.S}`,
      },
      actions: [
        {
          style: {
            height: 80,
            width: 40,
            left: 150,
            top: 330,
          },
          painting: `/${autresURL.peinture}/227`,
        },
        {
          style: {
            height: 200,
            width: 110,
            left: 240,
            top: 330,
          },
          painting: `/${autresURL.Affiches}/Predilection`,
        },
        {
          style: {
            height: 260,
            width: 110,
            right: 80,
            top: 370,
          },
          painting: `/${autresURL.Affiches}/Parfum`,
        },
      ],
      mouvement: false,
      mouvementLink: '#',
    },
    S: {
      id: 145,
      image: photos.ParS,
      leftTurn: {
        id: 144,
        link: `/${placeURL.Parfum}/${directionURL.SE}`,
      },
      rightTurn: {
        id: 146,
        link: `/${placeURL.Parfum}/${directionURL.SO}`,
      },
      actions: [
        {
          style: {
            height: 220,
            width: 130,
            left: 50,
            bottom: 180,
          },
          painting: `/${autresURL.Affiches}/Parfum`,
        },
        {
          style: {
            height: 130,
            width: 200,
            right: 100,
            top: 225,
          },
          painting: `/${autresURL.peinture}/699`,
        },
        {
          style: {
            height: 180,
            width: 150,
            right: 125,
            bottom: 220,
          },
          painting: `/${autresURL.peinture}/1042`,
        },
      ],
      mouvement: false,
      mouvementLink: '#',
    },
    SO: {
      id: 146,
      image: photos.ParSO,
      leftTurn: {
        id: 145,
        link: `/${placeURL.Parfum}/${directionURL.S}`,
      },
      rightTurn: {
        id: 147,
        link: `/${placeURL.Parfum}/${directionURL.O}`,
      },
      actions: [
        {
          style: {
            height: 140,
            width: 220,
            left: 38,
            top: 205,
          },
          painting: `/${autresURL.peinture}/699`,
        },
        {
          style: {
            height: 210,
            width: 160,
            left: 60,
            top: 430,
          },
          painting: `/${autresURL.peinture}/1042`,
        },
        {
          style: {
            height: 245,
            width: 175,
            right: 100,
            top: 310,
          },
          painting: `/${autresURL.peinture}/679`,
        },
      ],
      mouvement: false,
      mouvementLink: '#',
    },
    O: {
      id: 147,
      image: photos.ParO,
      leftTurn: {
        id: 146,
        link: `/${placeURL.Parfum}/${directionURL.SO}`,
      },
      rightTurn: {
        id: 148,
        link: `/${placeURL.Parfum}/${directionURL.NO}`,
      },
      actions: [
        {
          style: {
            height: 240,
            width: 175,
            left: 30,
            top: 300,
          },
          painting: `/${autresURL.peinture}/679`,
        },
        {
          style: {
            height: 240,
            width: 175,
            right: 90,
            top: 300,
          },
          painting: `/${autresURL.peinture}/678`,
        },
      ],
      mouvement: false,
      mouvementLink: '#',
    },
    NO: {
      id: 148,
      image: photos.ParNO,
      leftTurn: {
        id: 147,
        link: `/${placeURL.Parfum}/${directionURL.O}`,
      },
      rightTurn: {
        id: 141,
        link: `/${placeURL.Parfum}/${directionURL.N}`,
      },
      actions: [
        {
          style: {
            height: 270,
            width: 195,
            left: 53,
            top: 300,
          },
          painting: `/${autresURL.peinture}/678`,
        },
      ],
      mouvement: false,
      mouvementLink: '#',
    },
  },
  Portrait: {
    N: {
      id: 151,
      image: photos.PorN,
      leftTurn: {
        id: 158,
        link: `/${placeURL.Portrait}/${directionURL.NO}`,
      },
      rightTurn: {
        id: 152,
        link: `/${placeURL.Portrait}/${directionURL.NE}`,
      },
      actions: [
        {
          style: {
            height: 200,
            width: 200,
            left: 200,
            top: 300,
          },
          painting: `/${autresURL.Affiches}/Portraits`,
        },
      ],
      mouvement: false,
      mouvementLink: '#',
    },
    NE: {
      id: 152,
      image: photos.PorNE,
      leftTurn: {
        id: 151,
        link: `/${placeURL.Portrait}/${directionURL.N}`,
      },
      rightTurn: {
        id: 153,
        link: `/${placeURL.Portrait}/${directionURL.E}`,
      },
      actions: [
        {
          style: {
            height: 200,
            width: 60,
            right: 180,
            top: 300,
          },
          painting: `/${autresURL.Affiches}/Bretagne`,
        },
      ],
      mouvement: false,
      mouvementLink: '#',
    },
    E: {
      id: 153,
      image: photos.PorE,
      leftTurn: {
        id: 152,
        link: `/${placeURL.Portrait}/${directionURL.NE}`,
      },
      rightTurn: {
        id: 154,
        link: `/${placeURL.Portrait}/${directionURL.SE}`,
      },
      actions: [
        {
          style: {
            height: 120,
            width: 60,
            left: 70,
            top: 350,
          },
          painting: `/${autresURL.Affiches}/Bretagne`,
        },
        {
          style: {
            height: 50,
            width: 35,
            right: 190,
            top: 370,
          },
          painting: `/${autresURL.Affiches}/Eugenio`,
        },
        {
          style: {
            height: 55,
            width: 80,
            right: 105,
            top: 275,
          },
          painting: `/${autresURL.peinture}/9999999999`,
        },
        {
          style: {
            height: 35,
            width: 40,
            right: 120,
            top: 350,
          },
          painting: `/${autresURL.peinture}/9999999999`,
        },
        {
          style: {
            height: 100,
            width: 55,
            right: 120,
            top: 400,
          },
          painting: `/${autresURL.peinture}/9999999999`,
        },
      ],
      mouvement: true,
      mouvementLink: `/${placeURL.Bretagne}/${directionURL.E}`,
    },
    SE: {
      id: 154,
      image: photos.PorSE,
      leftTurn: {
        id: 153,
        link: `/${placeURL.Portrait}/${directionURL.E}`,
      },
      rightTurn: {
        id: 155,
        link: `/${placeURL.Portrait}/${directionURL.S}`,
      },
      actions: [
        {
          style: {
            height: 70,
            width: 45,
            left: 90,
            top: 360,
          },
          painting: `/${autresURL.Affiches}/Eugenio`,
        },
        {
          style: {
            height: 58,
            width: 85,
            left: 140,
            top: 270,
          },
          painting: `/${autresURL.peinture}/9999999999`,
        },
        {
          style: {
            height: 30,
            width: 40,
            left: 160,
            top: 350,
          },
          painting: `/${autresURL.peinture}/9999999999`,
        },
        {
          style: {
            height: 105,
            width: 60,
            left: 150,
            top: 395,
          },
          painting: `/${autresURL.peinture}/9999999999`,
        },
        {
          style: {
            height: 140,
            width: 135,
            right: 220,
            top: 300,
          },
          painting: `/${autresURL.peinture}/287`,
        },
      ],
      mouvement: false,
      mouvementLink: '#',
    },
    S: {
      id: 155,
      image: photos.PorS,
      leftTurn: {
        id: 154,
        link: `/${placeURL.Portrait}/${directionURL.SE}`,
      },
      rightTurn: {
        id: 156,
        link: `/${placeURL.Portrait}/${directionURL.SO}`,
      },
      actions: [
        {
          style: {
            height: 300,
            width: 280,
            left: 60,
            top: 240,
          },
          painting: `/${autresURL.peinture}/289`,
        },
        {
          style: {
            height: 255,
            width: 180,
            right: 10,
            top: 273,
          },
          painting: `/${autresURL.peinture}/288`,
        },
      ],
      mouvement: false,
      mouvementLink: '#',
    },
    SO: {
      id: 156,
      image: photos.PorSO,
      leftTurn: {
        id: 155,
        link: `/${placeURL.Portrait}/${directionURL.S}`,
      },
      rightTurn: {
        id: 157,
        link: `/${placeURL.Portrait}/${directionURL.O}`,
      },
      actions: [
        {
          style: {
            height: 265,
            width: 205,
            left: 85,
            top: 240,
          },
          painting: `/${autresURL.peinture}/288`,
        },
      ],
      mouvement: false,
      mouvementLink: '#',
    },
    O: {
      id: 157,
      image: photos.PorO,
      leftTurn: {
        id: 156,
        link: `/${placeURL.Portrait}/${directionURL.SO}`,
      },
      rightTurn: {
        id: 158,
        link: `/${placeURL.Portrait}/${directionURL.NO}`,
      },
      actions: [],
      mouvement: true,
      mouvementLink: `/${placeURL.Fernand}/${directionURL.O}`,
    },
    NO: {
      id: 158,
      image: photos.PorNO,
      leftTurn: {
        id: 157,
        link: `/${placeURL.Portrait}/${directionURL.O}`,
      },
      rightTurn: {
        id: 151,
        link: `/${placeURL.Portrait}/${directionURL.N}`,
      },
      actions: [
        {
          style: {
            height: 135,
            width: 105,
            left: 215,
            top: 330,
          },
          painting: `/${autresURL.peinture}/275`,
        },
        {
          style: {
            height: 180,
            width: 200,
            right: 10,
            top: 330,
          },
          painting: `/${autresURL.Affiches}/Portraits`,
        },
      ],
      mouvement: false,
      mouvementLink: '#',
    },
  },
  Table: {
    1: {
      id: 161,
      image: photos.Tab1,
      leftTurn: {
        id: 162,
        link: `/${placeURL.Table}/2`,
      },
      rightTurn: {
        id: 168,
        link: `/${placeURL.Table}/8`,
      },
      actions: [
        {
          style: {
            height: 80,
            width: 100,
            left: 170,
            top: 230,
          },
          painting: `/${autresURL.dessins_table}/4161`,
        },
        {
          style: {
            height: 80,
            width: 100,
            left: 140,
            top: 330,
          },
          painting: `/${autresURL.dessins_table}/9999999999`,
        },
        {
          style: {
            height: 180,
            width: 150,
            right: 155,
            top: 235,
          },
          painting: `/${autresURL.Affiches}/Livre`,
        },
        {
          style: {
            height: 150,
            width: 210,
            left: 43,
            bottom: 255,
          },
          painting: `/${autresURL.dessins_table}/4157`,
        },
        {
          style: {
            height: 130,
            width: 180,
            right: 170,
            bottom: 230,
          },
          painting: `/${autresURL.dessins_table}/4158`,
        },
      ],
      mouvement: 'Back',
      mouvementLink: `/${placeURL.Orchestre_oppose}/${directionURL.NO}`,
    },
    2: {
      id: 162,
      image: photos.Tab2,
      leftTurn: {
        id: 163,
        link: `/${placeURL.Table}/3`,
      },
      rightTurn: {
        id: 161,
        link: `/${placeURL.Table}/1`,
      },
      actions: [
        {
          style: {
            height: 80,
            width: 100,
            left: 150,
            top: 225,
          },
          painting: `/${autresURL.dessins_table}/4153`,
        },
        {
          style: {
            height: 80,
            width: 130,
            right: 150,
            top: 213,
          },
          painting: `/${autresURL.dessins_table}/4161`,
        },
        {
          style: {
            height: 80,
            width: 120,
            right: 170,
            top: 310,
          },
          painting: `/${autresURL.dessins_table}/9999999999`,
        },
        {
          style: {
            height: 150,
            width: 200,
            right: 180,
            bottom: 260,
          },
          painting: `/${autresURL.dessins_table}/4157`,
        },
      ],
      mouvement: 'Back',
      mouvementLink: `/${placeURL.Table_entree}/${directionURL.N}`,
    },
    3: {
      id: 163,
      image: photos.Tab3,
      leftTurn: {
        id: 164,
        link: `/${placeURL.Table}/4`,
      },
      rightTurn: {
        id: 162,
        link: `/${placeURL.Table}/2`,
      },
      actions: [
        {
          style: {
            height: 80,
            width: 100,
            left: 130,
            top: 220,
          },
          painting: `/${autresURL.dessins_table}/4142`,
        },
        {
          style: {
            height: 80,
            width: 120,
            left: 255,
            top: 204,
          },
          painting: `/${autresURL.dessins_table}/4152`,
        },
        {
          style: {
            height: 70,
            width: 100,
            right: 110,
            top: 204,
          },
          painting: `/${autresURL.dessins_table}/4153`,
        },
        {
          style: {
            height: 120,
            width: 140,
            right: 155,
            top: 315,
          },
          painting: `/${autresURL.dessins_table}/4155`,
        },
        {
          style: {
            height: 120,
            width: 150,
            right: 180,
            bottom: 265,
          },
          painting: `/${autresURL.dessins_table}/4156`,
        },
      ],
      mouvement: 'Back',
      mouvementLink: `/${placeURL.Table_entree}/${directionURL.N}`,
    },
    4: {
      id: 164,
      image: photos.Tab4,
      leftTurn: {
        id: 165,
        link: `/${placeURL.Table}/5`,
      },
      rightTurn: {
        id: 163,
        link: `/${placeURL.Table}/3`,
      },
      actions: [
        {
          style: {
            height: 80,
            width: 130,
            left: 205,
            top: 195,
          },
          painting: `/${autresURL.dessins_table}/4141`,
        },
        {
          style: {
            height: 75,
            width: 130,
            right: 154,
            top: 195,
          },
          painting: `/${autresURL.dessins_table}/4142`,
        },
        {
          style: {
            height: 200,
            width: 280,
            right: 140,
            bottom: 280,
          },
          painting: `/${autresURL.dessins_table}/4154`,
        },
      ],
      mouvement: 'Back',
      mouvementLink: `/${placeURL.Table_entree}/${directionURL.N}`,
    },
    5: {
      id: 165,
      image: photos.Tab5,
      leftTurn: {
        id: 166,
        link: `/${placeURL.Table}/6`,
      },
      rightTurn: {
        id: 164,
        link: `/${placeURL.Table}/4`,
      },
      actions: [
        {
          style: {
            height: 100,
            width: 100,
            right: 150,
            bottom: 395,
          },
          painting: `/${autresURL.dessins_table}/4141`,
        },
        {
          style: {
            height: 100,
            width: 180,
            left: 170,
            bottom: 395,
          },
          painting: `/${autresURL.dessins_table}/4142`,
        },
        {
          style: {
            height: 100,
            width: 100,
            left: 50,
            bottom: 395,
          },
          painting: `/${autresURL.dessins_table}/4152`,
        },
        {
          style: {
            height: 100,
            width: 200,
            left: 240,
            top: 150,
          },
          painting: `/${autresURL.dessins_table}/4154`,
        },
      ],
      mouvement: 'Back',
      mouvementLink: `/${placeURL.Table_opposee}/${directionURL.S}`,
    },
    6: {
      id: 166,
      image: photos.Tab6,
      leftTurn: {
        id: 167,
        link: `/${placeURL.Table}/7`,
      },
      rightTurn: {
        id: 165,
        link: `/${placeURL.Table}/5`,
      },
      actions: [
        {
          style: {
            height: 100,
            width: 150,
            left: 90,
            bottom: 380,
          },
          painting: `/${autresURL.dessins_table}/4153`,
        },
        {
          style: {
            height: 100,
            width: 140,
            left: 300,
            bottom: 380,
          },
          painting: `/${autresURL.dessins_table}/4152`,
        },
        {
          style: {
            height: 100,
            width: 110,
            right: 60,
            bottom: 380,
          },
          painting: `/${autresURL.dessins_table}/4142`,
        },
        {
          style: {
            height: 90,
            width: 130,
            left: 230,
            top: 200,
          },
          painting: `/${autresURL.dessins_table}/4155`,
        },
        {
          style: {
            height: 60,
            width: 130,
            left: 270,
            top: 135,
          },
          painting: `/${autresURL.dessins_table}/4156`,
        },
      ],
      mouvement: 'Back',
      mouvementLink: `/${placeURL.Table_opposee}/${directionURL.S}`,
    },
    7: {
      id: 167,
      image: photos.Tab7,
      leftTurn: {
        id: 168,
        link: `/${placeURL.Table}/8`,
      },
      rightTurn: {
        id: 166,
        link: `/${placeURL.Table}/6`,
      },
      actions: [
        {
          style: {
            height: 90,
            width: 200,
            left: 220,
            top: 135,
          },
          painting: `/${autresURL.dessins_table}/4157`,
        },
        {
          style: {
            height: 80,
            width: 140,
            left: 180,
            top: 235,
          },
          painting: `/${autresURL.dessins_table}/9999999999`,
        },
        {
          style: {
            height: 140,
            width: 160,
            left: 140,
            top: 330,
          },
          painting: `/${autresURL.dessins_table}/4161`,
        },
        {
          style: {
            height: 120,
            width: 130,
            right: 95,
            top: 355,
          },
          painting: `/${autresURL.dessins_table}/4153`,
        },
      ],
      mouvement: 'Back',
      mouvementLink: `/${placeURL.Table_opposee}/${directionURL.S}`,
    },
    8: {
      id: 168,
      image: photos.Tab8,
      leftTurn: {
        id: 161,
        link: `/${placeURL.Table}/1`,
      },
      rightTurn: {
        id: 167,
        link: `/${placeURL.Table}/7`,
      },
      actions: [
        {
          style: {
            height: 100,
            width: 100,
            right: 70,
            bottom: 330,
          },
          painting: `/${autresURL.dessins_table}/4161`,
        },
        {
          style: {
            height: 80,
            width: 80,
            right: 80,
            top: 305,
          },
          painting: `/${autresURL.dessins_table}/9999999999`,
        },
        {
          style: {
            height: 250,
            width: 200,
            left: 190,
            bottom: 330,
          },
          painting: `/${autresURL.Affiches}/Livre`,
        },
        {
          style: {
            height: 80,
            width: 160,
            left: 260,
            top: 140,
          },
          painting: `/${autresURL.dessins_table}/4158`,
        },
      ],
      mouvement: 'Back',
      mouvementLink: `/${placeURL.Orchestre}/${directionURL.SO}`,
    },
  },
  Table_entree: {
    N: {
      id: 171,
      image: photos.TabEN,
      leftTurn: {
        id: 178,
        link: `/${placeURL.Table_entree}/${directionURL.NO}`,
      },
      rightTurn: {
        id: 172,
        link: `/${placeURL.Table_entree}/${directionURL.NE}`,
      },
      actions: [
        {
          style: {
            height: 60,
            width: 80,
            left: 70,
            bottom: 200,
          },
          painting: `/${placeURL.Table}/4`,
        },
        {
          style: {
            height: 60,
            width: 80,
            left: 200,
            bottom: 180,
          },
          painting: `/${placeURL.Table}/3`,
        },
        {
          style: {
            height: 60,
            width: 80,
            right: 200,
            bottom: 180,
          },
          painting: `/${placeURL.Table}/2`,
        },
        {
          style: {
            height: 60,
            width: 80,
            right: 70,
            bottom: 200,
          },
          painting: `/${placeURL.Table}/1`,
        },
      ],
      mouvement: false,
      mouvementLink: '#',
    },
    NE: {
      id: 172,
      image: photos.TabENE,
      leftTurn: {
        id: 171,
        link: `/${placeURL.Table_entree}/${directionURL.N}`,
      },
      rightTurn: {
        id: 173,
        link: `/${placeURL.Table_entree}/${directionURL.E}`,
      },
      actions: [
        {
          style: {
            height: 60,
            width: 80,
            left: 90,
            bottom: 220,
          },
          painting: `/${placeURL.Table}/2`,
        },
        {
          style: {
            height: 60,
            width: 80,
            left: 210,
            bottom: 240,
          },
          painting: `/${placeURL.Table}/1`,
        },
      ],
      mouvement: false,
      mouvementLink: '#',
    },
    E: {
      id: 173,
      image: photos.TabEE,
      leftTurn: {
        id: 172,
        link: `/${placeURL.Table_entree}/${directionURL.NE}`,
      },
      rightTurn: {
        id: 174,
        link: `/${placeURL.Table_entree}/${directionURL.SE}`,
      },
      actions: [
        {
          style: {
            height: 60,
            width: 70,
            left: 100,
            top: 350,
          },
          painting: `/${autresURL.peinture}/520`,
        },
        {
          style: {
            height: 50,
            width: 70,
            left: 220,
            top: 355,
          },
          painting: `/${autresURL.peinture}/519`,
        },
        {
          style: {
            height: 80,
            width: 95,
            right: 200,
            top: 345,
          },
          painting: `/${autresURL.peinture}/7`,
        },
        {
          style: {
            height: 60,
            width: 40,
            right: 120,
            top: 320,
          },
          painting: `/${autresURL.peinture}/453`,
        },
        {
          style: {
            height: 55,
            width: 45,
            right: 120,
            top: 410,
          },
          painting: `/${autresURL.peinture}/455`,
        },
        {
          style: {
            height: 90,
            width: 60,
            right: 20,
            top: 290,
          },
          painting: `/${autresURL.peinture}/456`,
        },
        {
          style: {
            height: 90,
            width: 60,
            right: 20,
            top: 415,
          },
          painting: `/${autresURL.peinture}/457`,
        },
      ],
      mouvement: true,
      mouvementLink: `/${placeURL.Orchestre_oppose}/${directionURL.E}`,
    },
    SE: {
      id: 174,
      image: photos.TabESE,
      leftTurn: {
        id: 173,
        link: `/${placeURL.Table_entree}/${directionURL.E}`,
      },
      rightTurn: {
        id: 175,
        link: `/${placeURL.Table_entree}/${directionURL.S}`,
      },
      actions: [
        {
          style: {
            height: 60,
            width: 40,
            left: 175,
            top: 315,
          },
          painting: `/${autresURL.peinture}/453`,
        },
        {
          style: {
            height: 55,
            width: 40,
            left: 175,
            bottom: 380,
          },
          painting: `/${autresURL.peinture}/455`,
        },
        {
          style: {
            height: 80,
            width: 90,
            left: 253,
            top: 285,
          },
          painting: `/${autresURL.peinture}/456`,
        },
        {
          style: {
            height: 80,
            width: 95,
            left: 250,
            bottom: 350,
          },
          painting: `/${autresURL.peinture}/457`,
        },
        {
          style: {
            height: 120,
            width: 125,
            right: 40,
            top: 340,
          },
          painting: `/${autresURL.peinture}/518`,
        },
      ],
      mouvement: false,
      mouvementLink: '#',
    },
    S: {
      id: 175,
      image: photos.TabES,
      leftTurn: {
        id: 174,
        link: `/${placeURL.Table_entree}/${directionURL.SE}`,
      },
      rightTurn: {
        id: 176,
        link: `/${placeURL.Table_entree}/${directionURL.SO}`,
      },
      actions: [
        {
          style: {
            height: 110,
            width: 110,
            left: 50,
            top: 340,
          },
          painting: `/${autresURL.peinture}/518`,
        },
        {
          style: {
            height: 100,
            width: 135,
            right: 155,
            top: 260,
          },
          painting: `/${autresURL.peinture}/217`,
        },
        {
          style: {
            height: 95,
            width: 155,
            right: 150,
            bottom: 315,
          },
          painting: `/${autresURL.peinture}/454`,
        },
      ],
      mouvement: false,
      mouvementLink: '#',
    },
    SO: {
      id: 176,
      image: photos.TabESO,
      leftTurn: {
        id: 175,
        link: `/${placeURL.Table_entree}/${directionURL.S}`,
      },
      rightTurn: {
        id: 177,
        link: `/${placeURL.Table_entree}/${directionURL.O}`,
      },
      actions: [
        {
          style: {
            height: 100,
            width: 105,
            left: 155,
            top: 275,
          },
          painting: `/${autresURL.peinture}/216`,
        },
        {
          style: {
            height: 85,
            width: 100,
            left: 160,
            top: 403,
          },
          painting: `/${autresURL.peinture}/458`,
        },
      ],
      mouvement: false,
      mouvementLink: '#',
    },
    O: {
      id: 177,
      image: photos.TabEO,
      leftTurn: {
        id: 176,
        link: `/${placeURL.Table_entree}/${directionURL.SO}`,
      },
      rightTurn: {
        id: 178,
        link: `/${placeURL.Table_entree}/${directionURL.NO}`,
      },
      actions: [],
      mouvement: true,
      mouvementLink: `/${placeURL.Bureau}/${directionURL.O}`,
    },
    NO: {
      id: 178,
      image: photos.TabENO,
      leftTurn: {
        id: 177,
        link: `/${placeURL.Table_entree}/${directionURL.O}`,
      },
      rightTurn: {
        id: 171,
        link: `/${placeURL.Table_entree}/${directionURL.N}`,
      },
      actions: [
        {
          style: {
            height: 85,
            width: 100,
            right: 220,
            bottom: 200,
          },
          painting: `/${placeURL.Table}/4`,
        },
        {
          style: {
            height: 85,
            width: 100,
            right: 70,
            bottom: 170,
          },
          painting: `/${placeURL.Table}/3`,
        },
      ],
      mouvement: false,
      mouvementLink: '#',
    },
  },
  Table_opposee: {
    N: {
      id: 181,
      image: photos.TabON,
      leftTurn: {
        id: 188,
        link: `/${placeURL.Table_opposee}/${directionURL.NO}`,
      },
      rightTurn: {
        id: 182,
        link: `/${placeURL.Table_opposee}/${directionURL.NE}`,
      },
      actions: [
        {
          style: {
            height: 130,
            width: 130,
            left: 25,
            top: 355,
          },
          painting: `/${autresURL.peinture}/210`,
        },
        {
          style: {
            height: 100,
            width: 130,
            left: 220,
            top: 370,
          },
          painting: `/${autresURL.peinture}/208`,
        },
        {
          style: {
            height: 150,
            width: 150,
            right: 65,
            top: 345,
          },
          painting: `/${autresURL.peinture}/10`,
        },
      ],
      mouvement: false,
      mouvementLink: '#',
    },
    NE: {
      id: 182,
      image: photos.TabONE,
      leftTurn: {
        id: 181,
        link: `/${placeURL.Table_opposee}/${directionURL.N}`,
      },
      rightTurn: {
        id: 183,
        link: `/${placeURL.Table_opposee}/${directionURL.E}`,
      },
      actions: [
        {
          style: {
            height: 150,
            width: 150,
            left: 40,
            top: 270,
          },
          painting: `/${autresURL.peinture}/10`,
        },
        {
          style: {
            height: 120,
            width: 110,
            left: 240,
            top: 275,
          },
          painting: `/${autresURL.peinture}/213`,
        },
      ],
      mouvement: false,
      mouvementLink: '#',
    },
    E: {
      id: 183,
      image: photos.TabOE,
      leftTurn: {
        id: 182,
        link: `/${placeURL.Table_opposee}/${directionURL.NE}`,
      },
      rightTurn: {
        id: 184,
        link: `/${placeURL.Table_opposee}/${directionURL.SE}`,
      },
      actions: [
        {
          style: {
            height: 120,
            width: 110,
            left: 180,
            top: 300,
          },
          painting: `/${autresURL.Affiches}/Fauve`,
        },
      ],
      mouvement: true,
      mouvementLink: `/${placeURL.Orchestre}/${directionURL.E}`,
    },
    SE: {
      id: 184,
      image: photos.TabOSE,
      leftTurn: {
        id: 183,
        link: `/${placeURL.Table_opposee}/${directionURL.E}`,
      },
      rightTurn: {
        id: 185,
        link: `/${placeURL.Table_opposee}/${directionURL.S}`,
      },
      actions: [
        {
          style: {
            height: 100,
            width: 100,
            left: 250,
            bottom: 200,
          },
          painting: `/${placeURL.Table}/8`,
        },
      ],
      mouvement: false,
      mouvementLink: '#',
    },
    S: {
      id: 185,
      image: photos.TabOS,
      leftTurn: {
        id: 184,
        link: `/${placeURL.Table_opposee}/${directionURL.SE}`,
      },
      rightTurn: {
        id: 186,
        link: `/${placeURL.Table_opposee}/${directionURL.SO}`,
      },
      actions: [
        {
          style: {
            height: 100,
            width: 100,
            left: 100,
            bottom: 150,
          },
          painting: `/${placeURL.Table}/7`,
        },
        {
          style: {
            height: 100,
            width: 100,
            left: 260,
            bottom: 150,
          },
          painting: `/${placeURL.Table}/6`,
        },
        {
          style: {
            height: 100,
            width: 100,
            right: 100,
            bottom: 150,
          },
          painting: `/${placeURL.Table}/5`,
        },
      ],
      mouvement: false,
      mouvementLink: '#',
    },
    SO: {
      id: 186,
      image: photos.TabOSO,
      leftTurn: {
        id: 185,
        link: `/${placeURL.Table_opposee}/${directionURL.S}`,
      },
      rightTurn: {
        id: 187,
        link: `/${placeURL.Table_opposee}/${directionURL.O}`,
      },
      actions: [
        {
          style: {
            height: 100,
            width: 100,
            left: 150,
            bottom: 130,
          },
          painting: `/${placeURL.Table}/5`,
        },
        {
          style: {
            height: 80,
            width: 80,
            right: 100,
            top: 250,
          },
          painting: `/${autresURL.peinture}/8`,
        },
        {
          style: {
            height: 80,
            width: 80,
            right: 100,
            top: 365,
          },
          painting: `/${autresURL.peinture}/438`,
        },
      ],
      mouvement: false,
      mouvementLink: '#',
    },
    O: {
      id: 187,
      image: photos.TabOO,
      leftTurn: {
        id: 186,
        link: `/${placeURL.Table_opposee}/${directionURL.SO}`,
      },
      rightTurn: {
        id: 188,
        link: `/${placeURL.Table_opposee}/${directionURL.NO}`,
      },
      actions: [
        {
          style: {
            height: 80,
            width: 80,
            left: 120,
            top: 260,
          },
          painting: `/${autresURL.peinture}/8`,
        },
        {
          style: {
            height: 80,
            width: 80,
            left: 120,
            top: 365,
          },
          painting: `/${autresURL.peinture}/438`,
        },
      ],
      mouvement: true,
      mouvementLink: `/${placeURL.Bretagne}/${directionURL.O}`,
    },
    NO: {
      id: 188,
      image: photos.TabONO,
      leftTurn: {
        id: 187,
        link: `/${placeURL.Table_opposee}/${directionURL.O}`,
      },
      rightTurn: {
        id: 181,
        link: `/${placeURL.Table_opposee}/${directionURL.N}`,
      },
      actions: [
        {
          style: {
            height: 80,
            width: 80,
            left: 250,
            top: 340,
          },
          painting: `/${autresURL.peinture}/205`,
        },
        {
          style: {
            height: 130,
            width: 160,
            right: 110,
            top: 330,
          },
          painting: `/${autresURL.peinture}/210`,
        },
      ],
      mouvement: false,
      mouvementLink: '#',
    },
  },
  Vaches: {
    N: {
      id: 191,
      image: photos.VacN,
      leftTurn: {
        id: 198,
        link: `/${placeURL.Vaches}/${directionURL.NO}`,
      },
      rightTurn: {
        id: 192,
        link: `/${placeURL.Vaches}/${directionURL.NE}`,
      },
      actions: [
        {
          style: {
            height: 125,
            width: 125,
            left: 63,
            top: 340,
          },
          painting: `/${autresURL.peinture}/310`,
        },
        {
          style: {
            height: 115,
            width: 168,
            right: 165,
            top: 240,
          },
          painting: `/${autresURL.peinture}/77`,
        },
        {
          style: {
            height: 115,
            width: 165,
            right: 165,
            top: 403,
          },
          painting: `/${autresURL.peinture}/76`,
        },
        {
          style: {
            height: 110,
            width: 92,
            right: 7,
            top: 265,
          },
          painting: `/${autresURL.peinture}/94`,
        },
        {
          style: {
            height: 110,
            width: 86,
            right: 7,
            top: 400,
          },
          painting: `/${autresURL.peinture}/84`,
        },
      ],
      mouvement: false,
      mouvementLink: '#',
    },
    NE: {
      id: 192,
      image: photos.VacNE,
      leftTurn: {
        id: 191,
        link: `/${placeURL.Vaches}/${directionURL.N}`,
      },
      rightTurn: {
        id: 193,
        link: `/${placeURL.Vaches}/${directionURL.E}`,
      },
      actions: [
        {
          style: {
            height: 110,
            width: 140,
            left: 138,
            top: 240,
          },
          painting: `/${autresURL.peinture}/94`,
        },
        {
          style: {
            height: 114,
            width: 130,
            left: 143,
            top: 373,
          },
          painting: `/${autresURL.peinture}/84`,
        },
        {
          style: {
            height: 125,
            width: 65,
            left: 318,
            top: 310,
          },
          painting: `/${autresURL.peinture}/69`,
        },
        {
          style: {
            height: 65,
            width: 38,
            right: 188,
            top: 300,
          },
          painting: `/${autresURL.peinture}/82`,
        },
        {
          style: {
            height: 65,
            width: 38,
            right: 190,
            top: 380,
          },
          painting: `/${autresURL.peinture}/319`,
        },
      ],
      mouvement: false,
      mouvementLink: '#',
    },
    E: {
      id: 193,
      image: photos.VacE,
      leftTurn: {
        id: 192,
        link: `/${placeURL.Vaches}/${directionURL.NE}`,
      },
      rightTurn: {
        id: 194,
        link: `/${placeURL.Vaches}/${directionURL.SE}`,
      },
      actions: [],
      mouvement: true,
      mouvementLink: `/${placeURL.Milieu}/${directionURL.E}`,
    },
    SE: {
      id: 194,
      image: photos.VacSE,
      leftTurn: {
        id: 193,
        link: `/${placeURL.Vaches}/${directionURL.E}`,
      },
      rightTurn: {
        id: 195,
        link: `/${placeURL.Vaches}/${directionURL.S}`,
      },
      actions: [
        {
          style: {
            height: 90,
            width: 130,
            right: 225,
            top: 215,
          },
          painting: `/${autresURL.peinture}/116`,
        },
        {
          style: {
            height: 105,
            width: 130,
            right: 227,
            top: 345,
          },
          painting: `/${autresURL.peinture}/118`,
        },
        {
          style: {
            height: 75,
            width: 114,
            right: 240,
            bottom: 271,
          },
          painting: `/${autresURL.peinture}/117`,
        },
      ],
      mouvement: false,
      mouvementLink: '#',
    },
    S: {
      id: 195,
      image: photos.VacS,
      leftTurn: {
        id: 194,
        link: `/${placeURL.Vaches}/${directionURL.SE}`,
      },
      rightTurn: {
        id: 196,
        link: `/${placeURL.Vaches}/${directionURL.SO}`,
      },
      actions: [
        {
          style: {
            height: 240,
            width: 240,
            right: 240,
            top: 270,
          },
          painting: `/${autresURL.peinture}/122`,
        },
      ],
      mouvement: false,
      mouvementLink: '#',
    },
    SO: {
      id: 196,
      image: photos.VacSO,
      leftTurn: {
        id: 195,
        link: `/${placeURL.Vaches}/${directionURL.S}`,
      },
      rightTurn: {
        id: 197,
        link: `/${placeURL.Vaches}/${directionURL.O}`,
      },
      actions: [
        {
          style: {
            height: 180,
            width: 100,
            left: 180,
            top: 300,
          },
          painting: `/${autresURL.peinture}/666`,
        },
      ],
      mouvement: false,
      mouvementLink: '#',
    },
    O: {
      id: 197,
      image: photos.VacO,
      leftTurn: {
        id: 196,
        link: `/${placeURL.Vaches}/${directionURL.SO}`,
      },
      rightTurn: {
        id: 198,
        link: `/${placeURL.Vaches}/${directionURL.NO}`,
      },
      actions: [
        {
          style: {
            height: 73,
            width: 40,
            right: 155,
            top: 305,
          },
          painting: `/${autresURL.peinture}/316`,
        },
        {
          style: {
            height: 73,
            width: 40,
            right: 157,
            top: 382,
          },
          painting: `/${autresURL.peinture}/108`,
        },
        {
          style: {
            height: 65,
            width: 38,
            right: 110,
            top: 365,
          },
          painting: `/${autresURL.peinture}/71`,
        },
        {
          style: {
            height: 115,
            width: 80,
            right: 7,
            top: 265,
          },
          painting: `/${autresURL.peinture}/79`,
        },
        {
          style: {
            height: 100,
            width: 75,
            right: 10,
            top: 400,
          },
          painting: `/${autresURL.peinture}/81`,
        },
      ],
      mouvement: true,
      mouvementLink: `/${placeURL.Mannequin_avant}/${directionURL.O}`,
    },
    NO: {
      id: 198,
      image: photos.VacNO,
      leftTurn: {
        id: 197,
        link: `/${placeURL.Vaches}/${directionURL.O}`,
      },
      rightTurn: {
        id: 191,
        link: `/${placeURL.Vaches}/${directionURL.N}`,
      },
      actions: [
        {
          style: {
            height: 68,
            width: 35,
            left: 136,
            top: 305,
          },
          painting: `/${autresURL.peinture}/316`,
        },
        {
          style: {
            height: 68,
            width: 35,
            left: 136,
            top: 375,
          },
          painting: `/${autresURL.peinture}/108`,
        },
        {
          style: {
            height: 58,
            width: 37,
            left: 176,
            top: 360,
          },
          painting: `/${autresURL.peinture}/71`,
        },
        {
          style: {
            height: 105,
            width: 90,
            left: 233,
            top: 260,
          },
          painting: `/${autresURL.peinture}/79`,
        },
        {
          style: {
            height: 90,
            width: 80,
            left: 235,
            top: 382,
          },
          painting: `/${autresURL.peinture}/81`,
        },
        {
          style: {
            height: 130,
            width: 147,
            right: 102,
            top: 327,
          },
          painting: `/${autresURL.peinture}/310`,
        },
      ],
      mouvement: false,
      mouvementLink: '#',
    },
  },
  Video: {
    N: {
      id: 201,
      image: photos.VidN,
      leftTurn: {
        id: 208,
        link: `/${placeURL.Video}/${directionURL.NO}`,
      },
      rightTurn: {
        id: 202,
        link: `/${placeURL.Video}/${directionURL.NE}`,
      },
      actions: [
        {
          style: {
            height: 70,
            width: 76,
            left: 129,
            top: 315,
          },
          painting: `/${autresURL.peinture}/316`,
        },
        {
          style: {
            height: 70,
            width: 79,
            left: 129,
            top: 392,
          },
          painting: `/${autresURL.peinture}/108`,
        },
        {
          style: {
            height: 50,
            width: 65,
            left: 228,
            top: 375,
          },
          painting: `/${autresURL.peinture}/71`,
        },
        {
          style: {
            height: 70,
            width: 86,
            right: 225,
            top: 310,
          },
          painting: `/${autresURL.peinture}/79`,
        },
        {
          style: {
            height: 65,
            width: 75,
            right: 228,
            top: 390,
          },
          painting: `/${autresURL.peinture}/81`,
        },
        {
          style: {
            height: 60,
            width: 60,
            right: 125,
            top: 360,
          },
          painting: `/${autresURL.peinture}/310`,
        },
      ],
      mouvement: true,
      mouvementLink: `/${placeURL.Mannequin_avant}/${directionURL.N}`,
    },
    NE: {
      id: 202,
      image: photos.VidNE,
      leftTurn: {
        id: 201,
        link: `/${placeURL.Video}/${directionURL.N}`,
      },
      rightTurn: {
        id: 203,
        link: `/${placeURL.Video}/${directionURL.E}`,
      },
      actions: [
        {
          style: {
            height: 60,
            width: 65,
            left: 110,
            top: 335,
          },
          painting: `/${autresURL.peinture}/310`,
        },
        {
          style: {
            height: 45,
            width: 55,
            left: 200,
            top: 305,
          },
          painting: `/${autresURL.peinture}/77`,
        },
        {
          style: {
            height: 45,
            width: 53,
            left: 200,
            top: 363,
          },
          painting: `/${autresURL.peinture}/76`,
        },
        {
          style: {
            height: 45,
            width: 43,
            left: 268,
            top: 363,
          },
          painting: `/${autresURL.peinture}/84`,
        },
        {
          style: {
            height: 45,
            width: 43,
            left: 270,
            top: 312,
          },
          painting: `/${autresURL.peinture}/94`,
        },
        {
          style: {
            height: 260,
            width: 155,
            right: 68,
            top: 270,
          },
          painting: `/${autresURL.peinture}/428`,
        },
      ],
      mouvement: true,
      mouvementLink: `/${placeURL.Vaches}/${directionURL.NE}`,
    },
    E: {
      id: 203,
      image: photos.VidE,
      leftTurn: {
        id: 202,
        link: `/${placeURL.Video}/${directionURL.NE}`,
      },
      rightTurn: {
        id: 204,
        link: `/${placeURL.Video}/${directionURL.SE}`,
      },
      actions: [
        {
          style: {
            height: 205,
            width: 118,
            left: 85,
            top: 285,
          },
          painting: `/${autresURL.peinture}/428`,
        },
        {
          style: {
            height: 150,
            width: 93,
            right: 125,
            top: 328,
          },
          painting: `/${autresURL.peinture}/675`,
        },
      ],
      mouvement: false,
      mouvementLink: '#',
    },
    SE: {
      id: 204,
      image: photos.VidSE,
      leftTurn: {
        id: 203,
        link: `/${placeURL.Video}/${directionURL.E}`,
      },
      rightTurn: {
        id: 205,
        link: `/${placeURL.Video}/${directionURL.S}`,
      },
      actions: [
        {
          style: {
            height: 200,
            width: 125,
            left: 55,
            top: 288,
          },
          painting: `/${autresURL.peinture}/675`,
        },
        {
          style: {
            height: 80,
            width: 50,
            right: 250,
            top: 347,
          },
          painting: `/${autresURL.peinture}/228`,
        },
        {
          style: {
            height: 83,
            width: 65,
            right: 170,
            top: 353,
          },
          painting: `/${autresURL.peinture}/222`,
        },
        {
          style: {
            height: 70,
            width: 80,
            right: 75,
            top: 367,
          },
          painting: `/${autresURL.peinture}/227`,
        },
      ],
      mouvement: false,
      mouvementLink: '#',
    },
    S: {
      id: 205,
      image: photos.VidS,
      leftTurn: {
        id: 204,
        link: `/${placeURL.Video}/${directionURL.SE}`,
      },
      rightTurn: {
        id: 206,
        link: `/${placeURL.Video}/${directionURL.SO}`,
      },
      actions: [
        {
          style: {
            height: 65,
            width: 88,
            left: 160,
            top: 353,
          },
          painting: `/${autresURL.peinture}/227`,
        },
        {
          style: {
            height: 150,
            width: 95,
            left: 300,
            top: 353,
          },
          painting: `/${autresURL.Affiches}/Predilection`,
        },
      ],
      mouvement: true,
      mouvementLink: `/${placeURL.Couloir_gauche_2}/${directionURL.S}`,
    },
    SO: {
      id: 206,
      image: photos.VidSO,
      leftTurn: {
        id: 205,
        link: `/${placeURL.Video}/${directionURL.S}`,
      },
      rightTurn: {
        id: 207,
        link: `/${placeURL.Video}/${directionURL.O}`,
      },
      actions: [],
      mouvement: false,
      mouvementLink: '#',
    },
    O: {
      id: 207,
      image: photos.VidO,
      leftTurn: {
        id: 206,
        link: `/${placeURL.Video}/${directionURL.SO}`,
      },
      rightTurn: {
        id: 208,
        link: `/${placeURL.Video}/${directionURL.NO}`,
      },
      actions: [],
      mouvement: false,
      mouvementLink: '#',
    },
    NO: {
      id: 208,
      image: photos.VidNO,
      leftTurn: {
        id: 207,
        link: `/${placeURL.Video}/${directionURL.O}`,
      },
      rightTurn: {
        id: 201,
        link: `/${placeURL.Video}/${directionURL.N}`,
      },
      actions: [],
      mouvement: false,
      mouvementLink: '#',
    },
  },
};
