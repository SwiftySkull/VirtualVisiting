import { placeURL, directionURL, autresURL } from 'src/utils';

import photos from 'src/utils/photos';

export const truc = 'truc';

export const all = {
  Affiches: {
    Bretagne: {
      id: 211,
      image: photos.Bretagne,
      left: {
        id: 17,
        link: `/${placeURL.Bretagne}/${directionURL.O}`,
      },
      right: {
        id: 11,
        link: `/${placeURL.Bretagne}/${directionURL.N}`,
      },
      actions: [
        // {
        //   style: {
        //     height: '70px',
        //     width: '70px',
        //     right: 'calc(((100% - 627px) / 2) + 180px)',
        //     borderRadius: '100%',
        //     top: '225px',
        //   },
        //   painting: `/${autresURL.peinture}/757`,
        // },
        // {
        //   style: {
        //     height: '80px',
        //     width: '120px',
        //     left: 'calc(((100% - 627px) / 2) + 120px)',
        //     borderRadius: '100%',
        //     top: '340px',
        //   },
        //   painting: `/${autresURL.peinture}/217`,
        // },
        // {
        //   style: {
        //     height: '140px',
        //     width: '200px',
        //     left: 'calc(((100% - 627px) / 2) + 200px)',
        //     borderRadius: '100%',
        //     bottom: '220px',
        //   },
        //   painting: `/${autresURL.peinture}/208`,
        // },
        // {
        //   style: {
        //     height: '140px',
        //     width: '250px',
        //     right: 'calc(((100% - 627px) / 2) + 140px)',
        //     borderRadius: '100%',
        //     top: '300px',
        //   },
        //   painting: `/${autresURL.lecture}/Bretagne`,
        // },
        // {
        //   style: {
        //     height: '100px',
        //     width: '250px',
        //     left: 'calc(((100% - 627px) / 2) + 110px)',
        //     borderRadius: '100%',
        //     top: '170px',
        //   },
        //   painting: `/${autresURL.lecture}/Bretagne`,
        // },
        {
          style: {
            height: '100px',
            width: '300px',
            left: 'calc(((100% - 627px) / 2) + 110px)',
            borderRadius: '100%',
            top: '40px',
          },
          painting: `/${autresURL.lecture}/Bretagne`,
        },
      ],
      mouvement: true,
      mouvementLink: `/${placeURL.Bretagne}/${directionURL.NO}`,
    },
    Livre: {
      id: 212,
      image: photos.Livre,
      left: {
        id: 161,
        link: `/${placeURL.Table}/1`,
      },
      right: {
        id: 167,
        link: `/${placeURL.Table}/7`,
      },
      actions: [
        {
          style: {
            height: '250px',
            width: '250px',
            right: 'calc(((100% - 627px) / 2) + 0px)',
            borderRadius: '100%',
            top: '240px',
          },
          painting: `/${autresURL.dessins_table}/4160`,
        },
      ],
      mouvement: true,
      mouvementLink: `/${placeURL.Table}/8`,
    },
    Fauve: {
      id: 213,
      image: photos.Fauve,
      left: {
        id: 111,
        link: `/${placeURL.Orchestre}/${directionURL.N}`,
      },
      right: {
        id: 113,
        link: `/${placeURL.Orchestre}/${directionURL.E}`,
      },
      actions: [
        {
          style: {
            height: '300px',
            width: '300px',
            left: 'calc(((100% - 627px) / 2) + 150px)',
            borderRadius: '100%',
            top: '300px',
          },
          painting: `/${autresURL.lecture}/Fauve`,
        },
      ],
      mouvement: true,
      mouvementLink: `/${placeURL.Orchestre}/${directionURL.NE}`,
    },
    Muret: {
      id: 214,
      image: photos.Muret,
      left: {
        id: false,
        link: '#',
      },
      right: {
        id: false,
        link: '#',
      },
      actions: [
        {
          style: {
            height: '90px',
            width: '150px',
            left: 'calc(((100% - 627px) / 2) + 235px)',
            borderRadius: '100%',
            top: '95px',
          },
          painting: `/${autresURL.peinture}/245`,
        },
        {
          style: {
            height: '350px',
            width: '270px',
            left: 'calc(((100% - 627px) / 2) + 180px)',
            borderRadius: '100%',
            top: '265px',
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
      left: {
        id: false,
        link: '#',
      },
      right: {
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
      left: {
        id: false,
      },
      right: {
        id: false,
      },
      actions: [
        {
          style: {
            height: '200px',
            width: '200px',
            right: 'calc(((100% - 627px) / 2) + 200px)',
            borderRadius: '100%',
            top: '300px',
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
      left: {
        id: true,
        link: `/${placeURL.Mannequin}/${directionURL.S}`,
      },
      right: {
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
      left: {
        id: true,
        link: `/${placeURL.Entree}/${directionURL.NO}`,
      },
      right: {
        id: true,
        link: `/${placeURL.Entree}/${directionURL.NE}`,
      },
      actions: [
        {
          style: {
            height: '200px',
            width: '200px',
            right: 'calc(((100% - 627px) / 2) + 0px)',
            borderRadius: '100%',
            top: '300px',
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
      left: {
        id: true,
        link: `/${placeURL.Entree}/${directionURL.S}`,
      },
      right: {
        id: true,
        link: `/${placeURL.Entree}/${directionURL.O}`,
      },
      actions: [
        {
          style: {
            height: '300px',
            width: '300px',
            left: 'calc(((100% - 627px) / 2) + 110px)',
            borderRadius: '100%',
            top: '220px',
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
      left: {
        id: true,
        link: `/${placeURL.Entree}/${directionURL.S}`,
      },
      right: {
        id: true,
        link: `/${placeURL.Entree}/${directionURL.O}`,
      },
      actions: [
        {
          style: {
            height: '300px',
            width: '300px',
            left: 'calc(((100% - 627px) / 2) + 160px)',
            borderRadius: '100%',
            top: '220px',
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
      left: {
        id: true,
        link: `/${placeURL.Entree}/${directionURL.S}`,
      },
      right: {
        id: true,
        link: `/${placeURL.Entree}/${directionURL.O}`,
      },
      actions: [
        {
          style: {
            height: '300px',
            width: '300px',
            left: 'calc(((100% - 627px) / 2) + 160px)',
            borderRadius: '100%',
            top: '220px',
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
      left: {
        id: true,
        link: `/${placeURL.Parfum}/${directionURL.SE}`,
      },
      right: {
        id: true,
        link: `/${placeURL.Parfum}/${directionURL.S}`,
      },
      actions: [
        {
          style: {
            height: '200px',
            width: '200px',
            right: 'calc(((100% - 627px) / 2) + 225px)',
            borderRadius: '100%',
            top: '30px',
          },
          painting: `/${autresURL.Affiches}/Foulard1`,
        },
        {
          style: {
            height: '200px',
            width: '200px',
            right: 'calc(((100% - 627px) / 2) + 230px)',
            borderRadius: '100%',
            top: '270px',
          },
          painting: `/${autresURL.Affiches}/Foulard2`,
        },
        {
          style: {
            height: '160px',
            width: '180px',
            right: 'calc(((100% - 627px) / 2) + 230px)',
            borderRadius: '100%',
            bottom: '200px',
          },
          painting: `/${autresURL.Affiches}/Foulard3`,
        },
        {
          style: {
            height: '130px',
            width: '180px',
            right: 'calc(((100% - 627px) / 2) + 230px)',
            borderRadius: '100%',
            bottom: '20px',
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
      left: {
        id: false,
        link: '#',
      },
      right: {
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
      left: {
        id: false,
        link: '#',
      },
      right: {
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
      left: {
        id: false,
        link: '#',
      },
      right: {
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
      left: {
        id: false,
        link: '#',
      },
      right: {
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
      left: {
        id: 18,
        link: `/${placeURL.Bretagne}/${directionURL.NO}`,
      },
      right: {
        id: 12,
        link: `/${placeURL.Bretagne}/${directionURL.NE}`,
      },
      actions: [
        {
          style: {
            height: '160px',
            width: '190px',
            left: 'calc(((100% - 627px) / 2) + 140px)',
            borderRadius: '100%',
          },
          painting: `/${autresURL.peinture}/205`,
        },
        {
          style: {
            height: '140px',
            width: '150px',
            right: 'calc(((100% - 627px) / 2) + 70px)',
            borderRadius: '100%',
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
      left: {
        id: 11,
        link: `/${placeURL.Bretagne}/${directionURL.N}`,
      },
      right: {
        id: 13,
        link: `/${placeURL.Bretagne}/${directionURL.E}`,
      },
      actions: [
        {
          style: {
            height: '160px',
            width: '170px',
            left: 'calc(((100% - 627px) / 2) + 170px)',
            borderRadius: '100%',
            top: '280px',
          },
          painting: `/${autresURL.peinture}/210`,
        },
        {
          style: {
            height: '60px',
            width: '60px',
            right: 'calc(((100% - 627px) / 2) + 200px)',
            borderRadius: '100%',
            top: '328px',
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
      left: {
        id: 12,
        link: `/${placeURL.Bretagne}/${directionURL.NE}`,
      },
      right: {
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
      left: {
        id: 13,
        link: `/${placeURL.Bretagne}/${directionURL.E}`,
      },
      right: {
        id: 15,
        link: `/${placeURL.Bretagne}/${directionURL.S}`,
      },
      actions: [
        {
          style: {
            height: '80px',
            width: '80px',
            left: 'calc(((100% - 627px) / 2) + 230px)',
            borderRadius: '100%',
            bottom: '250px',
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
      left: {
        id: 14,
        link: `/${placeURL.Bretagne}/${directionURL.SE}`,
      },
      right: {
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
      left: {
        id: 15,
        link: `/${placeURL.Bretagne}/${directionURL.S}`,
      },
      right: {
        id: 17,
        link: `/${placeURL.Bretagne}/${directionURL.O}`,
      },
      actions: [
        {
          style: {
            height: '180px',
            width: '150px',
            left: 'calc(((100% - 627px) / 2) + 140px)',
            borderRadius: '100%',
            top: '135px',
          },
          painting: `/${autresURL.peinture}/8`,
        },
        {
          style: {
            height: '180px',
            width: '170px',
            left: 'calc(((100% - 627px) / 2) + 120px)',
            borderRadius: '100%',
            bottom: '280px',
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
      left: {
        id: 16,
        link: `/${placeURL.Bretagne}/${directionURL.SO}`,
      },
      right: {
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
      left: {
        id: 17,
        link: `/${placeURL.Bretagne}/${directionURL.O}`,
      },
      right: {
        id: 11,
        link: `/${placeURL.Bretagne}/${directionURL.N}`,
      },
      actions: [
        {
          style: {
            height: '250px',
            width: '180px',
            left: 'calc(((100% - 627px) / 2) + 220px)',
            borderRadius: '100%',
            top: '280px',
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
      left: {
        id: 28,
        link: `/${placeURL.Bureau}/${directionURL.NO}`,
      },
      right: {
        id: 22,
        link: `/${placeURL.Bureau}/${directionURL.NE}`,
      },
      actions: [
        {
          style: {
            height: '160px',
            width: '80px',
            left: 'calc(((100% - 627px) / 2) + 70px)',
            borderRadius: '100%',
            top: '200px',
          },
          painting: `/${autresURL.peinture}/8`,
        },
        {
          style: {
            height: '140px',
            width: '80px',
            left: 'calc(((100% - 627px) / 2) + 70px)',
            borderRadius: '100%',
            top: '400px',
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
      left: {
        id: 21,
        link: `/${placeURL.Bureau}/${directionURL.N}`,
      },
      right: {
        id: 23,
        link: `/${placeURL.Bureau}/${directionURL.E}`,
      },
      actions: [
        {
          style: {
            height: '80px',
            width: '80px',
            right: 'calc(((100% - 627px) / 2) + 180px)',
            borderRadius: '100%',
            bottom: '200px',
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
      left: {
        id: 22,
        link: `/${placeURL.Bureau}/${directionURL.NE}`,
      },
      right: {
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
      left: {
        id: 23,
        link: `/${placeURL.Bureau}/${directionURL.E}`,
      },
      right: {
        id: 25,
        link: `/${placeURL.Bureau}/${directionURL.S}`,
      },
      actions: [
        {
          style: {
            height: '60px',
            width: '50px',
            left: 'calc(((100% - 627px) / 2) + 235px)',
            borderRadius: '100%',
            top: '345px',
          },
          painting: `/${autresURL.peinture}/518`,
        },
        {
          style: {
            height: '60px',
            width: '70px',
            right: 'calc(((100% - 627px) / 2) + 215px)',
            borderRadius: '100%',
            top: '295px',
          },
          painting: `/${autresURL.peinture}/217`,
        },
        {
          style: {
            height: '60px',
            width: '80px',
            right: 'calc(((100% - 627px) / 2) + 210px)',
            borderRadius: '100%',
            top: '397px',
          },
          painting: `/${autresURL.peinture}/454`,
        },
        {
          style: {
            height: '100px',
            width: '110px',
            right: 'calc(((100% - 627px) / 2) + 10px)',
            borderRadius: '100%',
            top: '275px',
          },
          painting: `/${autresURL.peinture}/216`,
        },
        {
          style: {
            height: '100px',
            width: '110px',
            right: 'calc(((100% - 627px) / 2) + 10px)',
            borderRadius: '100%',
            top: '405px',
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
      left: {
        id: 24,
        link: `/${placeURL.Bureau}/${directionURL.SE}`,
      },
      right: {
        id: 26,
        link: `/${placeURL.Bureau}/${directionURL.SO}`,
      },
      actions: [
        {
          style: {
            height: '100px',
            width: '130px',
            left: 'calc(((100% - 627px) / 2) + 130px)',
            borderRadius: '100%',
            top: '260px',
          },
          painting: `/${autresURL.peinture}/216`,
        },
        {
          style: {
            height: '90px',
            width: '130px',
            left: 'calc(((100% - 627px) / 2) + 130px)',
            borderRadius: '100%',
            top: '390px',
          },
          painting: `/${autresURL.peinture}/458`,
        },
        {
          style: {
            height: '180px',
            width: '80px',
            left: 'calc(((100% - 627px) / 2) + 285px)',
            borderRadius: '100%',
            top: '300px',
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
      left: {
        id: 25,
        link: `/${placeURL.Bureau}/${directionURL.S}`,
      },
      right: {
        id: 27,
        link: `/${placeURL.Bureau}/${directionURL.O}`,
      },
      actions: [],
      mouvement: false,
    },
    O: {
      id: 27,
      image: photos.BurO,
      left: {
        id: 26,
        link: `/${placeURL.Bureau}/${directionURL.SO}`,
      },
      right: {
        id: 28,
        link: `/${placeURL.Bureau}/${directionURL.NO}`,
      },
      actions: [
        {
          style: {
            height: '200px',
            width: '130px',
            right: 'calc(((100% - 627px) / 2) + 30px)',
            borderRadius: '100%',
            top: '305px',
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
      left: {
        id: 27,
        link: `/${placeURL.Bureau}/${directionURL.O}`,
      },
      right: {
        id: 21,
        link: `/${placeURL.Bureau}/${directionURL.N}`,
      },
      actions: [
        {
          style: {
            height: '185px',
            width: '100px',
            left: 'calc(((100% - 627px) / 2) + 110px)',
            borderRadius: '100%',
            top: '310px',
          },
          painting: `/${autresURL.peinture}/211`,
        },
        {
          style: {
            height: '160px',
            width: '90px',
            right: 'calc(((100% - 627px) / 2) + 200px)',
            borderRadius: '100%',
            top: '200px',
          },
          painting: `/${autresURL.peinture}/8`,
        },
        {
          style: {
            height: '140px',
            width: '90px',
            right: 'calc(((100% - 627px) / 2) + 200px)',
            borderRadius: '100%',
            bottom: '300px',
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
      left: {
        id: 38,
        link: `/${placeURL.Couloir_gauche}/${directionURL.NO}`,
      },
      right: {
        id: 32,
        link: `/${placeURL.Couloir_gauche}/${directionURL.NE}`,
      },
      actions: [
        {
          style: {
            height: '100px',
            width: '60px',
            left: 'calc(((100% - 627px) / 2) + 33px)',
            borderRadius: '100%',
            top: '345px',
          },
          painting: `/${autresURL.peinture}/178`,
        },
        {
          style: {
            height: '35px',
            width: '45px',
            left: 'calc(((100% - 627px) / 2) + 110px)',
            borderRadius: '100%',
            top: '340px',
          },
          painting: `/${autresURL.peinture}/77`,
        },
        {
          style: {
            height: '35px',
            width: '45px',
            left: 'calc(((100% - 627px) / 2) + 112px)',
            borderRadius: '100%',
            top: '385px',
          },
          painting: `/${autresURL.peinture}/76`,
        },
        {
          style: {
            height: '43px',
            width: '58px',
            left: 'calc(((100% - 627px) / 2) + 175px)',
            borderRadius: '100%',
            top: '334px',
          },
          painting: `/${autresURL.peinture}/94`,
        },
        {
          style: {
            height: '45px',
            width: '57px',
            left: 'calc(((100% - 627px) / 2) + 177px)',
            borderRadius: '100%',
            top: '383px',
          },
          painting: `/${autresURL.peinture}/84`,
        },
        {
          style: {
            height: '67px',
            width: '57px',
            left: 'calc(((100% - 627px) / 2) + 257px)',
            borderRadius: '100%',
            top: '348px',
          },
          painting: `/${autresURL.peinture}/69`,
        },
        {
          style: {
            height: '48px',
            width: '57px',
            right: 'calc(((100% - 627px) / 2) + 235px)',
            borderRadius: '100%',
            top: '330px',
          },
          painting: `/${autresURL.peinture}/82`,
        },
        {
          style: {
            height: '48px',
            width: '57px',
            right: 'calc(((100% - 627px) / 2) + 235px)',
            borderRadius: '100%',
            top: '385px',
          },
          painting: `/${autresURL.peinture}/319`,
        },
        {
          style: {
            height: '58px',
            width: '80px',
            right: 'calc(((100% - 627px) / 2) + 115px)',
            borderRadius: '100%',
            top: '377px',
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
      left: {
        id: 31,
        link: `/${placeURL.Couloir_gauche}/${directionURL.N}`,
      },
      right: {
        id: 33,
        link: `/${placeURL.Couloir_gauche}/${directionURL.E}`,
      },
      actions: [
        {
          style: {
            height: '65px',
            width: '85px',
            left: 'calc(((100% - 627px) / 2) + 130px)',
            borderRadius: '100%',
            top: '355px',
          },
          painting: `/${autresURL.peinture}/275`,
        },
        {
          style: {
            height: '120px',
            width: '130px',
            right: 'calc(((100% - 627px) / 2) + 120px)',
            borderRadius: '100%',
            top: '330px',
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
      left: {
        id: 32,
        link: `/${placeURL.Couloir_gauche}/${directionURL.NE}`,
      },
      right: {
        id: 34,
        link: `/${placeURL.Couloir_gauche}/${directionURL.SE}`,
      },
      actions: [
        {
          style: {
            height: '125px',
            width: '115px',
            left: 'calc(((100% - 627px) / 2) + 45px)',
            borderRadius: '100%',
            top: '350px',
          },
          painting: `/${autresURL.peinture}/557`,
        },
        {
          style: {
            height: '110px',
            width: '90px',
            right: 'calc(((100% - 627px) / 2) + 250px)',
            borderRadius: '100%',
            top: '350px',
          },
          painting: `/${autresURL.peinture}/750`,
        },
        {
          style: {
            height: '150px',
            width: '90px',
            right: 'calc(((100% - 627px) / 2) + 95px)',
            borderRadius: '100%',
            top: '330px',
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
      left: {
        id: 33,
        link: `/${placeURL.Couloir_gauche}/${directionURL.E}`,
      },
      right: {
        id: 35,
        link: `/${placeURL.Couloir_gauche}/${directionURL.S}`,
      },
      actions: [
        {
          style: {
            height: '120px',
            width: '175px',
            right: 'calc(((100% - 627px) / 2) + 60px)',
            borderRadius: '100%',
            top: '315px',
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
      left: {
        id: 34,
        link: `/${placeURL.Couloir_gauche}/${directionURL.SE}`,
      },
      right: {
        id: 36,
        link: `/${placeURL.Couloir_gauche}/${directionURL.SO}`,
      },
      actions: [
        {
          style: {
            height: '107px',
            width: '125px',
            left: 'calc(((100% - 627px) / 2) + 10px)',
            borderRadius: '100%',
            top: '328px',
          },
          painting: `/${autresURL.peinture}/223`,
        },
        {
          style: {
            height: '155px',
            width: '190px',
            left: 'calc(((100% - 627px) / 2) + 170px)',
            borderRadius: '100%',
            top: '305px',
          },
          painting: `/${autresURL.peinture}/220`,
        },
        {
          style: {
            height: '170px',
            width: '100px',
            right: 'calc(((100% - 627px) / 2) + 125px)',
            borderRadius: '100%',
            top: '300px',
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
      left: {
        id: 35,
        link: `/${placeURL.Couloir_gauche}/${directionURL.S}`,
      },
      right: {
        id: 37,
        link: `/${placeURL.Couloir_gauche}/${directionURL.O}`,
      },
      actions: [
        {
          style: {
            height: '180px',
            width: '95px',
            left: 'calc(((100% - 627px) / 2) + 15px)',
            borderRadius: '100%',
            top: '305px',
          },
          painting: `/${autresURL.peinture}/221`,
        },
        {
          style: {
            height: '80px',
            width: '90px',
            left: 'calc(((100% - 627px) / 2) + 145px)',
            borderRadius: '100%',
            top: '275px',
          },
          painting: `/${autresURL.peinture}/233`,
        },
        {
          style: {
            height: '68px',
            width: '80px',
            left: 'calc(((100% - 627px) / 2) + 145px)',
            borderRadius: '100%',
            top: '370px',
          },
          painting: `/${autresURL.peinture}/230`,
        },
        {
          style: {
            height: '60px',
            width: '50px',
            left: 'calc(((100% - 627px) / 2) + 245px)',
            borderRadius: '100%',
            top: '300px',
          },
          painting: `/${autresURL.peinture}/440`,
        },
        {
          style: {
            height: '45px',
            width: '44px',
            left: 'calc(((100% - 627px) / 2) + 250px)',
            borderRadius: '100%',
            top: '375px',
          },
          painting: `/${autresURL.peinture}/191`,
        },
        {
          style: {
            height: '95px',
            width: '38px',
            left: 'calc(((100% - 627px) / 2) + 313px)',
            borderRadius: '100%',
            top: '345px',
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
      left: {
        id: 36,
        link: `/${placeURL.Couloir_gauche}/${directionURL.SO}`,
      },
      right: {
        id: 38,
        link: `/${placeURL.Couloir_gauche}/${directionURL.NO}`,
      },
      actions: [
        {
          style: {
            height: '255px',
            width: '134px',
            right: 'calc(((100% - 627px) / 2) + 10px)',
            borderRadius: '100%',
            top: '265px',
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
      left: {
        id: 37,
        link: `/${placeURL.Couloir_gauche}/${directionURL.O}`,
      },
      right: {
        id: 31,
        link: `/${placeURL.Couloir_gauche}/${directionURL.N}`,
      },
      actions: [
        {
          style: {
            height: '275px',
            width: '195px',
            left: 'calc(((100% - 627px) / 2) + 83px)',
            borderRadius: '100%',
            top: '250px',
          },
          painting: `/${autresURL.peinture}/179`,
        },
        {
          style: {
            height: '103px',
            width: '65px',
            right: 'calc(((100% - 627px) / 2) + 203px)',
            borderRadius: '100%',
            top: '330px',
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
      left: {
        id: 48,
        link: `/${placeURL.Couloir_gauche_2}/${directionURL.NO}`,
      },
      right: {
        id: 42,
        link: `/${placeURL.Couloir_gauche_2}/${directionURL.NE}`,
      },
      actions: [
        {
          style: {
            height: '140px',
            width: '50px',
            right: 'calc(((100% - 627px) / 2) + 150px)',
            borderRadius: '100%',
            top: '340px',
          },
          painting: `/${autresURL.peinture}/428`,
        },
        {
          style: {
            height: '170px',
            width: '65px',
            right: 'calc(((100% - 627px) / 2) + 18px)',
            borderRadius: '100%',
            top: '335px',
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
      left: {
        id: 41,
        link: `/${placeURL.Couloir_gauche_2}/${directionURL.N}`,
      },
      right: {
        id: 43,
        link: `/${placeURL.Couloir_gauche_2}/${directionURL.E}`,
      },
      actions: [
        {
          style: {
            height: '180px',
            width: '85px',
            left: 'calc(((100% - 627px) / 2) + 200px)',
            borderRadius: '100%',
            top: '305px',
          },
          painting: `/${autresURL.peinture}/675`,
        },
        {
          style: {
            height: '40px',
            width: '50px',
            right: 'calc(((100% - 627px) / 2) + 135px)',
            borderRadius: '100%',
            top: '300px',
          },
          painting: `/${autresURL.peinture}/190`,
        },
        {
          style: {
            height: '40px',
            width: '50px',
            right: 'calc(((100% - 627px) / 2) + 135px)',
            borderRadius: '100%',
            top: '340px',
          },
          painting: `/${autresURL.peinture}/451`,
        },
        {
          style: {
            height: '65px',
            width: '80px',
            right: 'calc(((100% - 627px) / 2) + 120px)',
            borderRadius: '100%',
            top: '387px',
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
      left: {
        id: 42,
        link: `/${placeURL.Couloir_gauche_2}/${directionURL.NE}`,
      },
      right: {
        id: 44,
        link: `/${placeURL.Couloir_gauche_2}/${directionURL.SE}`,
      },
      actions: [
        {
          style: {
            height: '40px',
            width: '45px',
            left: 'calc(((100% - 627px) / 2) + 135px)',
            borderRadius: '100%',
            top: '291px',
          },
          painting: `/${autresURL.peinture}/190`,
        },
        {
          style: {
            height: '40px',
            width: '45px',
            left: 'calc(((100% - 627px) / 2) + 135px)',
            borderRadius: '100%',
            top: '335px',
          },
          painting: `/${autresURL.peinture}/451`,
        },
        {
          style: {
            height: '65px',
            width: '75px',
            left: 'calc(((100% - 627px) / 2) + 120px)',
            borderRadius: '100%',
            top: '380px',
          },
          painting: `/${autresURL.peinture}/200`,
        },
        {
          style: {
            height: '150px',
            width: '60px',
            right: 'calc(((100% - 627px) / 2) + 40px)',
            borderRadius: '100%',
            top: '340px',
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
      left: {
        id: 43,
        link: `/${placeURL.Couloir_gauche_2}/${directionURL.E}`,
      },
      right: {
        id: 45,
        link: `/${placeURL.Couloir_gauche_2}/${directionURL.S}`,
      },
      actions: [
        {
          style: {
            height: '140px',
            width: '45px',
            left: 'calc(((100% - 627px) / 2) + 70px)',
            borderRadius: '100%',
            top: '320px',
          },
          painting: `/${autresURL.peinture}/228`,
        },
        {
          style: {
            height: '175px',
            width: '100px',
            left: 'calc(((100% - 627px) / 2) + 135px)',
            borderRadius: '100%',
            top: '310px',
          },
          painting: `/${autresURL.peinture}/222`,
        },
        {
          style: {
            height: '160px',
            width: '220px',
            right: 'calc(((100% - 627px) / 2) + 135px)',
            borderRadius: '100%',
            top: '330px',
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
      left: {
        id: 44,
        link: `/${placeURL.Couloir_gauche_2}/${directionURL.SE}`,
      },
      right: {
        id: 46,
        link: `/${placeURL.Couloir_gauche_2}/${directionURL.SO}`,
      },
      actions: [
        {
          style: {
            height: '160px',
            width: '130px',
            left: 'calc(((100% - 627px) / 2) + 10px)',
            borderRadius: '100%',
            top: '320px',
          },
          painting: `/${autresURL.peinture}/227`,
        },
        {
          style: {
            height: '250px',
            width: '200px',
            right: 'calc(((100% - 627px) / 2) + 110px)',
            borderRadius: '100%',
            top: '320px',
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
      left: {
        id: 45,
        link: `/${placeURL.Couloir_gauche_2}/${directionURL.S}`,
      },
      right: {
        id: 47,
        link: `/${placeURL.Couloir_gauche_2}/${directionURL.O}`,
      },
      actions: [
        {
          style: {
            height: '250px',
            width: '100px',
            left: 'calc(((100% - 627px) / 2) + 30px)',
            borderRadius: '100%',
            top: '340px',
          },
          painting: `/${autresURL.Affiches}/Predilection`,
        },
        {
          style: {
            height: '250px',
            width: '100px',
            left: 'calc(((100% - 627px) / 2) + 200px)',
            borderRadius: '100%',
            top: '390px',
          },
          painting: `/${autresURL.Affiches}/Parfum`,
        },
        {
          style: {
            height: '70px',
            width: '70px',
            left: 'calc(((100% - 627px) / 2) + 285px)',
            borderRadius: '100%',
            top: '273px',
          },
          painting: `/${autresURL.peinture}/699`,
        },
        {
          style: {
            height: '110px',
            width: '40px',
            left: 'calc(((100% - 627px) / 2) + 300px)',
            borderRadius: '100%',
            top: '380px',
          },
          painting: `/${autresURL.peinture}/1042`,
        },
        {
          style: {
            height: '100px',
            width: '70px',
            right: 'calc(((100% - 627px) / 2) + 160px)',
            borderRadius: '100%',
            top: '330px',
          },
          painting: `/${autresURL.peinture}/679`,
        },
        {
          style: {
            height: '115px',
            width: '75px',
            right: 'calc(((100% - 627px) / 2) + 30px)',
            borderRadius: '100%',
            top: '330px',
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
      left: {
        id: 46,
        link: `/${placeURL.Couloir_gauche_2}/${directionURL.SO}`,
      },
      right: {
        id: 48,
        link: `/${placeURL.Couloir_gauche_2}/${directionURL.NO}`,
      },
      actions: [
        {
          style: {
            height: '100px',
            width: '70px',
            left: 'calc(((100% - 627px) / 2) + 145px)',
            borderRadius: '100%',
            top: '340px',
          },
          painting: `/${autresURL.peinture}/679`,
        },
        {
          style: {
            height: '100px',
            width: '80px',
            left: 'calc(((100% - 627px) / 2) + 270px)',
            borderRadius: '100%',
            top: '340px',
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
      left: {
        id: 47,
        link: `/${placeURL.Couloir_gauche_2}/${directionURL.O}`,
      },
      right: {
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
      left: {
        id: 58,
        link: `/${placeURL.Entree}/${directionURL.NO}`,
      },
      right: {
        id: 52,
        link: `/${placeURL.Entree}/${directionURL.NE}`,
      },
      actions: [
        {
          style: {
            height: '200px',
            width: '300px',
            right: 'calc(((100% - 627px) / 2) + 100px)',
            borderRadius: '100%',
            top: '300px',
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
      left: {
        id: 51,
        link: `/${placeURL.Entree}/${directionURL.N}`,
      },
      right: {
        id: 53,
        link: `/${placeURL.Entree}/${directionURL.E}`,
      },
      actions: [
        {
          style: {
            height: '100px',
            width: '95px',
            left: 'calc(((100% - 627px) / 2) + 240px)',
            borderRadius: '100%',
            top: '342px',
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
      left: {
        id: 52,
        link: `/${placeURL.Entree}/${directionURL.NE}`,
      },
      right: {
        id: 54,
        link: `/${placeURL.Entree}/${directionURL.SE}`,
      },
      actions: [
        {
          style: {
            height: '120px',
            width: '70px',
            right: 'calc(((100% - 627px) / 2) + 115px)',
            borderRadius: '100%',
            top: '350px',
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
      left: {
        id: 53,
        link: `/${placeURL.Entree}/${directionURL.E}`,
      },
      right: {
        id: 55,
        link: `/${placeURL.Entree}/${directionURL.S}`,
      },
      actions: [
        {
          style: {
            height: '120px',
            width: '70px',
            left: 'calc(((100% - 627px) / 2) + 165px)',
            borderRadius: '100%',
            top: '347px',
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
      left: {
        id: 54,
        link: `/${placeURL.Entree}/${directionURL.SE}`,
      },
      right: {
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
      left: {
        id: 55,
        link: `/${placeURL.Entree}/${directionURL.S}`,
      },
      right: {
        id: 57,
        link: `/${placeURL.Entree}/${directionURL.O}`,
      },
      actions: [
        {
          style: {
            height: '120px',
            width: '70px',
            left: 'calc(((100% - 627px) / 2) + 193px)',
            borderRadius: '100%',
            top: '325px',
          },
          painting: `/${autresURL.Affiches}/Remerciements`,
        },
        {
          style: {
            height: '200px',
            width: '100px',
            right: 'calc(((100% - 627px) / 2) + 40px)',
            borderRadius: '100%',
            top: '282px',
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
      left: {
        id: 56,
        link: `/${placeURL.Entree}/${directionURL.SO}`,
      },
      right: {
        id: 58,
        link: `/${placeURL.Entree}/${directionURL.NO}`,
      },
      actions: [
        {
          style: {
            height: '190px',
            width: '110px',
            left: 'calc(((100% - 627px) / 2) + 120px)',
            borderRadius: '100%',
            top: '296px',
          },
          painting: `/${autresURL.peinture}/448`,
        },
        {
          style: {
            height: '175px',
            width: '150px',
            right: 'calc(((100% - 627px) / 2) + 215px)',
            borderRadius: '100%',
            top: '308px',
          },
          painting: `/${autresURL.peinture}/266`,
        },
        {
          style: {
            height: '60px',
            width: '45px',
            right: 'calc(((100% - 627px) / 2) + 230px)',
            borderRadius: '100%',
            bottom: '270px',
          },
          painting: `/${autresURL.Affiches}/Alain-Margoni`,
        },
        {
          style: {
            height: '145px',
            width: '85px',
            right: 'calc(((100% - 627px) / 2) + 105px)',
            borderRadius: '100%',
            top: '330px',
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
      left: {
        id: 57,
        link: `/${placeURL.Entree}/${directionURL.O}`,
      },
      right: {
        id: 51,
        link: `/${placeURL.Entree}/${directionURL.N}`,
      },
      actions: [
        {
          style: {
            height: '160px',
            width: '115px',
            left: 'calc(((100% - 627px) / 2) + 35px)',
            borderRadius: '100%',
            bottom: '360px',
          },
          painting: `/${autresURL.peinture}/266`,
        },
        {
          style: {
            height: '60px',
            width: '35px',
            left: 'calc(((100% - 627px) / 2) + 117px)',
            borderRadius: '100%',
            bottom: '275px',
          },
          painting: `/${autresURL.Affiches}/Alain-Margoni`,
        },
        {
          style: {
            height: '125px',
            width: '70px',
            left: 'calc(((100% - 627px) / 2) + 175px)',
            borderRadius: '100%',
            top: '338px',
          },
          painting: `/${autresURL.peinture}/260`,
        },
        {
          style: {
            height: '95px',
            width: '105px',
            right: 'calc(((100% - 627px) / 2) + 237px)',
            borderRadius: '100%',
            top: '255px',
          },
          painting: `/${autresURL.peinture}/271`,
        },
        {
          style: {
            height: '80px',
            width: '88px',
            right: 'calc(((100% - 627px) / 2) + 245px)',
            borderRadius: '100%',
            top: '370px',
          },
          painting: `/${autresURL.peinture}/396`,
        },
        {
          style: {
            height: '65px',
            width: '50px',
            right: 'calc(((100% - 627px) / 2) + 265px)',
            borderRadius: '100%',
            bottom: '297px',
          },
          painting: `/${autresURL.peinture}/389`,
        },
        {
          style: {
            height: '230px',
            width: '150px',
            right: 'calc(((100% - 627px) / 2) + 10px)',
            borderRadius: '100%',
            bottom: '297px',
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
      left: {
        id: 68,
        link: `/${placeURL.Fernand}/${directionURL.NO}`,
      },
      right: {
        id: 62,
        link: `/${placeURL.Fernand}/${directionURL.NE}`,
      },
      actions: [
        {
          style: {
            height: '200px',
            width: '320px',
            right: 'calc(((100% - 627px) / 2) + 165px)',
            borderRadius: '100%',
            top: '360px',
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
      left: {
        id: 61,
        link: `/${placeURL.Fernand}/${directionURL.N}`,
      },
      right: {
        id: 63,
        link: `/${placeURL.Fernand}/${directionURL.E}`,
      },
      actions: [
        {
          style: {
            height: '200px',
            width: '280px',
            left: 'calc(((100% - 627px) / 2) + 150px)',
            borderRadius: '100%',
            top: '360px',
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
      left: {
        id: 62,
        link: `/${placeURL.Fernand}/${directionURL.NE}`,
      },
      right: {
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
      left: {
        id: 63,
        link: `/${placeURL.Fernand}/${directionURL.E}`,
      },
      right: {
        id: 65,
        link: `/${placeURL.Fernand}/${directionURL.S}`,
      },
      actions: [
        {
          style: {
            height: '200px',
            width: '115px',
            right: 'calc(((100% - 627px) / 2) + 270px)',
            borderRadius: '100%',
            top: '300px',
          },
          painting: `/${autresURL.peinture}/289`,
        },
        {
          style: {
            height: '300px',
            width: '180px',
            right: 'calc(((100% - 627px) / 2) + 20px)',
            borderRadius: '100%',
            top: '260px',
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
      left: {
        id: 64,
        link: `/${placeURL.Fernand}/${directionURL.SE}`,
      },
      right: {
        id: 66,
        link: `/${placeURL.Fernand}/${directionURL.SO}`,
      },
      actions: [
        {
          style: {
            height: '295px',
            width: '275px',
            left: 'calc(((100% - 627px) / 2) + 75px)',
            borderRadius: '100%',
            top: '245px',
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
      left: {
        id: 65,
        link: `/${placeURL.Fernand}/${directionURL.S}`,
      },
      right: {
        id: 67,
        link: `/${placeURL.Fernand}/${directionURL.O}`,
      },
      actions: [
        {
          style: {
            height: '92px',
            width: '65px',
            right: 'calc(((100% - 627px) / 2) + 262px)',
            borderRadius: '100%',
            top: '333px',
          },
          painting: `/${autresURL.peinture}/179`,
        },
        {
          style: {
            height: '70px',
            width: '75px',
            right: 'calc(((100% - 627px) / 2) + 135px)',
            borderRadius: '100%',
            top: '346px',
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
      left: {
        id: 66,
        link: `/${placeURL.Fernand}/${directionURL.SO}`,
      },
      right: {
        id: 68,
        link: `/${placeURL.Fernand}/${directionURL.NO}`,
      },
      actions: [
        {
          style: {
            height: '90px',
            width: '45px',
            left: 'calc(((100% - 627px) / 2) + 25px)',
            borderRadius: '100%',
            top: '335px',
          },
          painting: `/${autresURL.peinture}/179`,
        },
        {
          style: {
            height: '70px',
            width: '73px',
            left: 'calc(((100% - 627px) / 2) + 115px)',
            borderRadius: '100%',
            top: '340px',
          },
          painting: `/${autresURL.peinture}/178`,
        },
        {
          style: {
            height: '55px',
            width: '43px',
            right: 'calc(((100% - 627px) / 2) + 100px)',
            borderRadius: '100%',
            top: '310px',
          },
          painting: `/${autresURL.peinture}/94`,
        },
        {
          style: {
            height: '70px',
            width: '40px',
            right: 'calc(((100% - 627px) / 2) + 100px)',
            borderRadius: '100%',
            top: '375px',
          },
          painting: `/${autresURL.peinture}/84`,
        },
        {
          style: {
            height: '120px',
            width: '60px',
            right: 'calc(((100% - 627px) / 2) + 15px)',
            borderRadius: '100%',
            top: '320px',
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
      left: {
        id: 67,
        link: `/${placeURL.Fernand}/${directionURL.O}`,
      },
      right: {
        id: 61,
        link: `/${placeURL.Fernand}/${directionURL.N}`,
      },
      actions: [
        {
          style: {
            height: '60px',
            width: '43px',
            left: 'calc(((100% - 627px) / 2) + 175px)',
            borderRadius: '100%',
            top: '310px',
          },
          painting: `/${autresURL.peinture}/94`,
        },
        {
          style: {
            height: '60px',
            width: '43px',
            left: 'calc(((100% - 627px) / 2) + 175px)',
            borderRadius: '100%',
            top: '380px',
          },
          painting: `/${autresURL.peinture}/84`,
        },
        {
          style: {
            height: '115px',
            width: '68px',
            left: 'calc(((100% - 627px) / 2) + 240px)',
            borderRadius: '100%',
            top: '323px',
          },
          painting: `/${autresURL.peinture}/69`,
        },
        {
          style: {
            height: '100px',
            width: '110px',
            right: 'calc(((100% - 627px) / 2) + 172px)',
            borderRadius: '100%',
            top: '270px',
          },
          painting: `/${autresURL.peinture}/82`,
        },
        {
          style: {
            height: '105px',
            width: '110px',
            right: 'calc(((100% - 627px) / 2) + 172px)',
            borderRadius: '100%',
            bottom: '340px',
          },
          painting: `/${autresURL.peinture}/319`,
        },
        {
          style: {
            height: '200px',
            width: '150px',
            right: 'calc(((100% - 627px) / 2) + 10px)',
            borderRadius: '100%',
            bottom: '270px',
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
      left: {
        id: 78,
        link: `/${placeURL.Machines}/${directionURL.NO}`,
      },
      right: {
        id: 72,
        link: `/${placeURL.Machines}/${directionURL.NE}`,
      },
      actions: [
        {
          style: {
            height: '263px',
            width: '360px',
            left: 'calc(((100% - 627px) / 2) + 135px)',
            borderRadius: '100%',
            bottom: '280px',
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
      left: {
        id: 71,
        link: `/${placeURL.Machines}/${directionURL.N}`,
      },
      right: {
        id: 73,
        link: `/${placeURL.Machines}/${directionURL.E}`,
      },
      actions: [
        {
          style: {
            height: '70px',
            width: '105px',
            left: 'calc(((100% - 627px) / 2) + 230px)',
            borderRadius: '100%',
            top: '185px',
          },
          painting: `/${autresURL.peinture}/190`,
        },
        {
          style: {
            height: '100px',
            width: '105px',
            left: 'calc(((100% - 627px) / 2) + 230px)',
            borderRadius: '100%',
            top: '280px',
          },
          painting: `/${autresURL.peinture}/451`,
        },
        {
          style: {
            height: '165px',
            width: '185px',
            left: 'calc(((100% - 627px) / 2) + 200px)',
            borderRadius: '100%',
            bottom: '265px',
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
      left: {
        id: 72,
        link: `/${placeURL.Machines}/${directionURL.NE}`,
      },
      right: {
        id: 74,
        link: `/${placeURL.Machines}/${directionURL.SE}`,
      },
      actions: [
        {
          style: {
            height: '50px',
            width: '55px',
            left: 'calc(((100% - 627px) / 2) + 125px)',
            borderRadius: '100%',
            top: '358px',
          },
          painting: `/${autresURL.peinture}/557`,
        },
        {
          style: {
            height: '50px',
            width: '43px',
            left: 'calc(((100% - 627px) / 2) + 220px)',
            borderRadius: '100%',
            top: '359px',
          },
          painting: `/${autresURL.peinture}/750`,
        },
        {
          style: {
            height: '60px',
            width: '43px',
            left: 'calc(((100% - 627px) / 2) + 280px)',
            borderRadius: '100%',
            top: '355px',
          },
          painting: `/${autresURL.peinture}/384`,
        },
        {
          style: {
            height: '55px',
            width: '40px',
            right: 'calc(((100% - 627px) / 2) + 142px)',
            borderRadius: '100%',
            top: '365px',
          },
          painting: `/${autresURL.peinture}/223`,
        },
        {
          style: {
            height: '90px',
            width: '60px',
            right: 'calc(((100% - 627px) / 2) + 75px)',
            borderRadius: '100%',
            top: '355px',
          },
          painting: `/${autresURL.peinture}/220`,
        },
        {
          style: {
            height: '138px',
            width: '50px',
            right: 'calc(((100% - 627px) / 2) + 10px)',
            borderRadius: '100%',
            top: '340px',
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
      left: {
        id: 73,
        link: `/${placeURL.Machines}/${directionURL.E}`,
      },
      right: {
        id: 75,
        link: `/${placeURL.Machines}/${directionURL.S}`,
      },
      actions: [
        {
          style: {
            height: '50px',
            width: '33px',
            left: 'calc(((100% - 627px) / 2) + 120px)',
            borderRadius: '100%',
            top: '370px',
          },
          painting: `/${autresURL.peinture}/223`,
        },
        {
          style: {
            height: '90px',
            width: '55px',
            left: 'calc(((100% - 627px) / 2) + 160px)',
            borderRadius: '100%',
            top: '355px',
          },
          painting: `/${autresURL.peinture}/220`,
        },
        {
          style: {
            height: '126px',
            width: '60px',
            left: 'calc(((100% - 627px) / 2) + 230px)',
            borderRadius: '100%',
            top: '343px',
          },
          painting: `/${autresURL.peinture}/221`,
        },
        {
          style: {
            height: '98px',
            width: '120px',
            right: 'calc(((100% - 627px) / 2) + 180px)',
            borderRadius: '100%',
            top: '280px',
          },
          painting: `/${autresURL.peinture}/233`,
        },
        {
          style: {
            height: '72px',
            width: '102px',
            right: 'calc(((100% - 627px) / 2) + 200px)',
            borderRadius: '100%',
            top: '395px',
          },
          painting: `/${autresURL.peinture}/230`,
        },
        {
          style: {
            height: '90px',
            width: '100px',
            right: 'calc(((100% - 627px) / 2) + 45px)',
            borderRadius: '100%',
            top: '280px',
          },
          painting: `/${autresURL.peinture}/440`,
        },
        {
          style: {
            height: '75px',
            width: '105px',
            right: 'calc(((100% - 627px) / 2) + 45px)',
            borderRadius: '100%',
            top: '405px',
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
      left: {
        id: 74,
        link: `/${placeURL.Machines}/${directionURL.SE}`,
      },
      right: {
        id: 76,
        link: `/${placeURL.Machines}/${directionURL.SO}`,
      },
      actions: [
        {
          style: {
            height: '90px',
            width: '80px',
            left: 'calc(((100% - 627px) / 2) + 30px)',
            borderRadius: '100%',
            top: '288px',
          },
          painting: `/${autresURL.peinture}/233`,
        },
        {
          style: {
            height: '73px',
            width: '67px',
            left: 'calc(((100% - 627px) / 2) + 30px)',
            borderRadius: '100%',
            top: '392px',
          },
          painting: `/${autresURL.peinture}/230`,
        },
        {
          style: {
            height: '75px',
            width: '100px',
            left: 'calc(((100% - 627px) / 2) + 140px)',
            borderRadius: '100%',
            top: '280px',
          },
          painting: `/${autresURL.peinture}/440`,
        },
        {
          style: {
            height: '71px',
            width: '103px',
            left: 'calc(((100% - 627px) / 2) + 135px)',
            borderRadius: '100%',
            top: '392px',
          },
          painting: `/${autresURL.peinture}/191`,
        },
        {
          style: {
            height: '195px',
            width: '145px',
            right: 'calc(((100% - 627px) / 2) + 175px)',
            borderRadius: '100%',
            top: '320px',
          },
          painting: `/${autresURL.peinture}/228`,
        },
        {
          style: {
            height: '158px',
            width: '95px',
            right: 'calc(((100% - 627px) / 2) + 42px)',
            borderRadius: '100%',
            top: '338px',
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
      left: {
        id: 75,
        link: `/${placeURL.Machines}/${directionURL.S}`,
      },
      right: {
        id: 77,
        link: `/${placeURL.Machines}/${directionURL.O}`,
      },
      actions: [
        {
          style: {
            height: '210px',
            width: '150px',
            left: 'calc(((100% - 627px) / 2) + 80px)',
            borderRadius: '100%',
            top: '305px',
          },
          painting: `/${autresURL.peinture}/222`,
        },
        {
          style: {
            height: '110px',
            width: '90px',
            left: 'calc(((100% - 627px) / 2) + 260px)',
            borderRadius: '100%',
            top: '345px',
          },
          painting: `/${autresURL.peinture}/227`,
        },
        {
          style: {
            height: '200px',
            width: '45px',
            right: 'calc(((100% - 627px) / 2) + 205px)',
            borderRadius: '100%',
            bottom: '320px',
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
      left: {
        id: 76,
        link: `/${placeURL.Machines}/${directionURL.SO}`,
      },
      right: {
        id: 78,
        link: `/${placeURL.Machines}/${directionURL.NO}`,
      },
      actions: [
        {
          style: {
            height: '150px',
            width: '50px',
            left: 'calc(((100% - 627px) / 2) + 97px)',
            borderRadius: '100%',
            top: '377px',
          },
          painting: `/${autresURL.Affiches}/Predilection`,
        },
        {
          style: {
            height: '60px',
            width: '50px',
            left: 'calc(((100% - 627px) / 2) + 195px)',
            borderRadius: '100%',
            top: '370px',
          },
          painting: `/${autresURL.peinture}/679`,
        },
        {
          style: {
            height: '60px',
            width: '50px',
            left: 'calc(((100% - 627px) / 2) + 272px)',
            borderRadius: '100%',
            top: '370px',
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
      left: {
        id: 77,
        link: `/${placeURL.Machines}/${directionURL.O}`,
      },
      right: {
        id: 71,
        link: `/${placeURL.Machines}/${directionURL.N}`,
      },
      actions: [
        {
          style: {
            height: '77px',
            width: '105px',
            left: 'calc(((100% - 627px) / 2) + 153px)',
            borderRadius: '100%',
            top: '188px',
          },
          painting: `/${autresURL.peinture}/189`,
        },
        {
          style: {
            height: '80px',
            width: '92px',
            left: 'calc(((100% - 627px) / 2) + 155px)',
            borderRadius: '100%',
            top: '286px',
          },
          painting: `/${autresURL.peinture}/450`,
        },
        {
          style: {
            height: '168px',
            width: '105px',
            left: 'calc(((100% - 627px) / 2) + 145px)',
            borderRadius: '100%',
            bottom: '273px',
          },
          painting: `/${autresURL.peinture}/194`,
        },
        {
          style: {
            height: '50px',
            width: '48px',
            left: 'calc(((100% - 627px) / 2) + 295px)',
            borderRadius: '100%',
            top: '235px',
          },
          painting: `/${autresURL.peinture}/183`,
        },
        {
          style: {
            height: '68px',
            width: '68px',
            left: 'calc(((100% - 627px) / 2) + 283px)',
            borderRadius: '100%',
            top: '305px',
          },
          painting: `/${autresURL.peinture}/188`,
        },
        {
          style: {
            height: '75px',
            width: '65px',
            left: 'calc(((100% - 627px) / 2) + 280px)',
            borderRadius: '100%',
            bottom: '365px',
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
      left: {
        id: 88,
        link: `/${placeURL.Mannequin}/${directionURL.NO}`,
      },
      right: {
        id: 82,
        link: `/${placeURL.Mannequin}/${directionURL.NE}`,
      },
      actions: [
        {
          style: {
            height: '245px',
            width: '187px',
            left: 'calc(((100% - 627px) / 2) + 35px)',
            borderRadius: '100%',
            top: '260px',
          },
          painting: `/${autresURL.peinture}/1058`,
        },
        {
          style: {
            height: '147px',
            width: '162px',
            right: 'calc(((100% - 627px) / 2) + 94px)',
            borderRadius: '100%',
            top: '263px',
          },
          painting: `/${autresURL.peinture}/316`,
        },
        {
          style: {
            height: '135px',
            width: '162px',
            right: 'calc(((100% - 627px) / 2) + 100px)',
            borderRadius: '100%',
            bottom: '275px',
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
      left: {
        id: 81,
        link: `/${placeURL.Mannequin}/${directionURL.N}`,
      },
      right: {
        id: 83,
        link: `/${placeURL.Mannequin}/${directionURL.E}`,
      },
      actions: [
        {
          style: {
            height: '160px',
            width: '100px',
            left: 'calc(((100% - 627px) / 2) + 10px)',
            borderRadius: '100%',
            top: '220px',
          },
          painting: `/${autresURL.peinture}/316`,
        },
        {
          style: {
            height: '160px',
            width: '100px',
            left: 'calc(((100% - 627px) / 2) + 10px)',
            borderRadius: '100%',
            bottom: '270px',
          },
          painting: `/${autresURL.peinture}/108`,
        },
        {
          style: {
            height: '110px',
            width: '120px',
            left: 'calc(((100% - 627px) / 2) + 175px)',
            borderRadius: '100%',
            top: '355px',
          },
          painting: `/${autresURL.peinture}/71`,
        },
        {
          style: {
            height: '110px',
            width: '90px',
            right: 'calc(((100% - 627px) / 2) + 210px)',
            borderRadius: '100%',
            top: '260px',
          },
          painting: `/${autresURL.peinture}/79`,
        },
        {
          style: {
            height: '95px',
            width: '75px',
            right: 'calc(((100% - 627px) / 2) + 215px)',
            borderRadius: '100%',
            top: '390px',
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
      left: {
        id: 82,
        link: `/${placeURL.Mannequin}/${directionURL.NE}`,
      },
      right: {
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
      left: {
        id: 83,
        link: `/${placeURL.Mannequin}/${directionURL.E}`,
      },
      right: {
        id: 85,
        link: `/${placeURL.Mannequin}/${directionURL.S}`,
      },
      actions: [
        {
          style: {
            height: '95px',
            width: '53px',
            left: 'calc(((100% - 627px) / 2) + 205px)',
            borderRadius: '100%',
            top: '335px',
          },
          painting: `/${autresURL.peinture}/428`,
        },
        {
          style: {
            height: '75px',
            width: '45px',
            right: 'calc(((100% - 627px) / 2) + 273px)',
            borderRadius: '100%',
            top: '340px',
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
      left: {
        id: 84,
        link: `/${placeURL.Mannequin}/${directionURL.SE}`,
      },
      right: {
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
      left: {
        id: 85,
        link: `/${placeURL.Mannequin}/${directionURL.S}`,
      },
      right: {
        id: 87,
        link: `/${placeURL.Mannequin}/${directionURL.O}`,
      },
      actions: [
        {
          style: {
            height: '60px',
            width: '60px',
            right: 'calc(((100% - 627px) / 2) + 145px)',
            borderRadius: '100%',
            top: '93px',
          },
          painting: `/${autresURL.peinture}/918`,
        },
        {
          style: {
            height: '100px',
            width: '80px',
            right: 'calc(((100% - 627px) / 2) + 113px)',
            borderRadius: '100%',
            top: '180px',
          },
          painting: `/${autresURL.peinture}/922`,
        },
        {
          style: {
            height: '130px',
            width: '90px',
            right: 'calc(((100% - 627px) / 2) + 107px)',
            borderRadius: '100%',
            top: '315px',
          },
          painting: `/${autresURL.peinture}/9999999999`,
        },
        {
          style: {
            height: '300px',
            width: '230px',
            left: 'calc(((100% - 627px) / 2) + 180px)',
            borderRadius: '100%',
            bottom: '150px',
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
      left: {
        id: 86,
        link: `/${placeURL.Mannequin}/${directionURL.SO}`,
      },
      right: {
        id: 88,
        link: `/${placeURL.Mannequin}/${directionURL.NO}`,
      },
      actions: [
        {
          style: {
            height: '90px',
            width: '70px',
            left: 'calc(((100% - 627px) / 2) + 190px)',
            borderRadius: '100%',
            top: '155px',
          },
          painting: `/${autresURL.peinture}/918`,
        },
        {
          style: {
            height: '120px',
            width: '90px',
            left: 'calc(((100% - 627px) / 2) + 165px)',
            borderRadius: '100%',
            top: '280px',
          },
          painting: `/${autresURL.peinture}/922`,
        },
        {
          style: {
            height: '130px',
            width: '100px',
            left: 'calc(((100% - 627px) / 2) + 155px)',
            borderRadius: '100%',
            bottom: '260px',
          },
          painting: `/${autresURL.peinture}/9999999999`,
        },
        {
          style: {
            height: '90px',
            width: '70px',
            right: 'calc(((100% - 627px) / 2) + 203px)',
            borderRadius: '100%',
            top: '160px',
          },
          painting: `/${autresURL.peinture}/964`,
        },
        {
          style: {
            height: '130px',
            width: '90px',
            right: 'calc(((100% - 627px) / 2) + 188px)',
            borderRadius: '100%',
            top: '280px',
          },
          painting: `/${autresURL.peinture}/963`,
        },
        {
          style: {
            height: '130px',
            width: '95px',
            right: 'calc(((100% - 627px) / 2) + 190px)',
            borderRadius: '100%',
            bottom: '260px',
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
      left: {
        id: 87,
        link: `/${placeURL.Mannequin}/${directionURL.O}`,
      },
      right: {
        id: 81,
        link: `/${placeURL.Mannequin}/${directionURL.N}`,
      },
      actions: [
        {
          style: {
            height: '90px',
            width: '70px',
            left: 'calc(((100% - 627px) / 2) + 100px)',
            borderRadius: '100%',
            top: '130px',
          },
          painting: `/${autresURL.peinture}/964`,
        },
        {
          style: {
            height: '130px',
            width: '80px',
            left: 'calc(((100% - 627px) / 2) + 55px)',
            borderRadius: '100%',
            top: '240px',
          },
          painting: `/${autresURL.peinture}/963`,
        },
        {
          style: {
            height: '135px',
            width: '80px',
            left: 'calc(((100% - 627px) / 2) + 48px)',
            borderRadius: '100%',
            bottom: '295px',
          },
          painting: `/${autresURL.peinture}/9999999999`,
        },
        {
          style: {
            height: '280px',
            width: '210px',
            right: 'calc(((100% - 627px) / 2) + 120px)',
            borderRadius: '100%',
            top: '260px',
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
      left: {
        id: 98,
        link: `/${placeURL.Mannequin_avant}/${directionURL.NO}`,
      },
      right: {
        id: 92,
        link: `/${placeURL.Mannequin_avant}/${directionURL.NE}`,
      },
      actions: [
        {
          style: {
            height: '128px',
            width: '88px',
            left: 'calc(((100% - 627px) / 2) + 10px)',
            borderRadius: '100%',
            top: '282px',
          },
          painting: `/${autresURL.peinture}/316`,
        },
        {
          style: {
            height: '124px',
            width: '88px',
            left: 'calc(((100% - 627px) / 2) + 10px)',
            borderRadius: '100%',
            bottom: '290px',
          },
          painting: `/${autresURL.peinture}/108`,
        },
        {
          style: {
            height: '115px',
            width: '140px',
            left: 'calc(((100% - 627px) / 2) + 136px)',
            borderRadius: '100%',
            bottom: '333px',
          },
          painting: `/${autresURL.peinture}/71`,
        },
        {
          style: {
            height: '160px',
            width: '185px',
            right: 'calc(((100% - 627px) / 2) + 108px)',
            borderRadius: '100%',
            top: '245px',
          },
          painting: `/${autresURL.peinture}/79`,
        },
        {
          style: {
            height: '134px',
            width: '160px',
            right: 'calc(((100% - 627px) / 2) + 115px)',
            borderRadius: '100%',
            bottom: '270px',
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
      left: {
        id: 91,
        link: `/${placeURL.Mannequin_avant}/${directionURL.N}`,
      },
      right: {
        id: 93,
        link: `/${placeURL.Mannequin_avant}/${directionURL.E}`,
      },
      actions: [
        {
          style: {
            height: '150px',
            width: '100px',
            left: 'calc(((100% - 627px) / 2) + 10px)',
            borderRadius: '100%',
            top: '200px',
          },
          painting: `/${autresURL.peinture}/79`,
        },
        {
          style: {
            height: '143px',
            width: '90px',
            left: 'calc(((100% - 627px) / 2) + 10px)',
            borderRadius: '100%',
            bottom: '315px',
          },
          painting: `/${autresURL.peinture}/81`,
        },
        {
          style: {
            height: '113px',
            width: '105px',
            left: 'calc(((100% - 627px) / 2) + 190px)',
            borderRadius: '100%',
            top: '310px',
          },
          painting: `/${autresURL.peinture}/310`,
        },
        {
          style: {
            height: '66px',
            width: '50px',
            right: 'calc(((100% - 627px) / 2) + 240px)',
            borderRadius: '100%',
            top: '277px',
          },
          painting: `/${autresURL.peinture}/77`,
        },
        {
          style: {
            height: '66px',
            width: '48px',
            right: 'calc(((100% - 627px) / 2) + 240px)',
            borderRadius: '100%',
            top: '366px',
          },
          painting: `/${autresURL.peinture}/76`,
        },
        {
          style: {
            height: '62px',
            width: '30px',
            right: 'calc(((100% - 627px) / 2) + 190px)',
            borderRadius: '100%',
            top: '366px',
          },
          painting: `/${autresURL.peinture}/84`,
        },
        {
          style: {
            height: '60px',
            width: '33px',
            right: 'calc(((100% - 627px) / 2) + 187px)',
            borderRadius: '100%',
            top: '295px',
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
      left: {
        id: 92,
        link: `/${placeURL.Mannequin_avant}/${directionURL.NE}`,
      },
      right: {
        id: 94,
        link: `/${placeURL.Mannequin_avant}/${directionURL.SE}`,
      },
      actions: [
        {
          style: {
            height: '40px',
            width: '64px',
            right: 'calc(((100% - 627px) / 2) + 148px)',
            borderRadius: '100%',
            top: '295px',
          },
          painting: `/${autresURL.peinture}/116`,
        },
        {
          style: {
            height: '40px',
            width: '64px',
            right: 'calc(((100% - 627px) / 2) + 148px)',
            borderRadius: '100%',
            top: '354px',
          },
          painting: `/${autresURL.peinture}/118`,
        },
        {
          style: {
            height: '40px',
            width: '64px',
            right: 'calc(((100% - 627px) / 2) + 150px)',
            borderRadius: '100%',
            bottom: '384px',
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
      left: {
        id: 93,
        link: `/${placeURL.Mannequin_avant}/${directionURL.E}`,
      },
      right: {
        id: 95,
        link: `/${placeURL.Mannequin_avant}/${directionURL.S}`,
      },
      actions: [
        {
          style: {
            height: '40px',
            width: '64px',
            left: 'calc(((100% - 627px) / 2) + 115px)',
            borderRadius: '100%',
            top: '297px',
          },
          painting: `/${autresURL.peinture}/116`,
        },
        {
          style: {
            height: '40px',
            width: '64px',
            left: 'calc(((100% - 627px) / 2) + 113px)',
            borderRadius: '100%',
            top: '355px',
          },
          painting: `/${autresURL.peinture}/118`,
        },
        {
          style: {
            height: '40px',
            width: '64px',
            left: 'calc(((100% - 627px) / 2) + 114px)',
            borderRadius: '100%',
            bottom: '385px',
          },
          painting: `/${autresURL.peinture}/117`,
        },
        {
          style: {
            height: '175px',
            width: '64px',
            right: 'calc(((100% - 627px) / 2) + 220px)',
            borderRadius: '100%',
            top: '290px',
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
      left: {
        id: 94,
        link: `/${placeURL.Mannequin_avant}/${directionURL.SE}`,
      },
      right: {
        id: 96,
        link: `/${placeURL.Mannequin_avant}/${directionURL.SO}`,
      },
      actions: [
        {
          style: {
            height: '190px',
            width: '66px',
            left: 'calc(((100% - 627px) / 2) + 40px)',
            borderRadius: '100%',
            top: '294px',
          },
          painting: `/${autresURL.peinture}/428`,
        },
        {
          style: {
            height: '105px',
            width: '38px',
            left: 'calc(((100% - 627px) / 2) + 160px)',
            borderRadius: '100%',
            top: '325px',
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
      left: {
        id: 95,
        link: `/${placeURL.Mannequin_avant}/${directionURL.S}`,
      },
      right: {
        id: 97,
        link: `/${placeURL.Mannequin_avant}/${directionURL.O}`,
      },
      actions: [
        {
          style: {
            height: '55px',
            width: '42px',
            right: 'calc(((100% - 627px) / 2) + 145px)',
            borderRadius: '100%',
            top: '255px',
          },
          painting: `/${autresURL.peinture}/918`,
        },
        {
          style: {
            height: '62px',
            width: '45px',
            right: 'calc(((100% - 627px) / 2) + 140px)',
            borderRadius: '100%',
            top: '325px',
          },
          painting: `/${autresURL.peinture}/922`,
        },
        {
          style: {
            height: '55px',
            width: '42px',
            right: 'calc(((100% - 627px) / 2) + 141px)',
            borderRadius: '100%',
            top: '403px',
          },
          painting: `/${autresURL.peinture}/9999999999`,
        },
        {
          style: {
            height: '58px',
            width: '40px',
            right: 'calc(((100% - 627px) / 2) + 72px)',
            borderRadius: '100%',
            top: '255px',
          },
          painting: `/${autresURL.peinture}/964`,
        },
        {
          style: {
            height: '58px',
            width: '40px',
            right: 'calc(((100% - 627px) / 2) + 65px)',
            borderRadius: '100%',
            top: '328px',
          },
          painting: `/${autresURL.peinture}/963`,
        },
        {
          style: {
            height: '62px',
            width: '40px',
            right: 'calc(((100% - 627px) / 2) + 65px)',
            borderRadius: '100%',
            top: '405px',
          },
          painting: `/${autresURL.peinture}/9999999999`,
        },
        {
          style: {
            height: '200px',
            width: '100px',
            right: 'calc(((100% - 627px) / 2) + 190px)',
            borderRadius: '100%',
            bottom: '190px',
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
      left: {
        id: 96,
        link: `/${placeURL.Mannequin_avant}/${directionURL.SO}`,
      },
      right: {
        id: 98,
        link: `/${placeURL.Mannequin_avant}/${directionURL.NO}`,
      },
      actions: [
        {
          style: {
            height: '58px',
            width: '45px',
            left: 'calc(((100% - 627px) / 2) + 209px)',
            borderRadius: '100%',
            top: '240px',
          },
          painting: `/${autresURL.peinture}/918`,
        },
        {
          style: {
            height: '60px',
            width: '45px',
            left: 'calc(((100% - 627px) / 2) + 205px)',
            borderRadius: '100%',
            top: '312px',
          },
          painting: `/${autresURL.peinture}/922`,
        },
        {
          style: {
            height: '60px',
            width: '45px',
            left: 'calc(((100% - 627px) / 2) + 202px)',
            borderRadius: '100%',
            top: '388px',
          },
          painting: `/${autresURL.peinture}/9999999999`,
        },
        {
          style: {
            height: '60px',
            width: '45px',
            left: 'calc(((100% - 627px) / 2) + 290px)',
            borderRadius: '100%',
            top: '240px',
          },
          painting: `/${autresURL.peinture}/964`,
        },
        {
          style: {
            height: '60px',
            width: '45px',
            left: 'calc(((100% - 627px) / 2) + 288px)',
            borderRadius: '100%',
            top: '313px',
          },
          painting: `/${autresURL.peinture}/963`,
        },
        {
          style: {
            height: '60px',
            width: '45px',
            left: 'calc(((100% - 627px) / 2) + 286px)',
            borderRadius: '100%',
            top: '389px',
          },
          painting: `/${autresURL.peinture}/9999999999`,
        },
        {
          style: {
            height: '230px',
            width: '110px',
            left: 'calc(((100% - 627px) / 2) + 100px)',
            borderRadius: '100%',
            bottom: '190px',
          },
          painting: `/${autresURL.Affiches}/Mannequin`,
        },
        {
          style: {
            height: '137px',
            width: '60px',
            right: 'calc(((100% - 627px) / 2) + 152px)',
            borderRadius: '100%',
            top: '315px',
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
      left: {
        id: 97,
        link: `/${placeURL.Mannequin_avant}/${directionURL.O}`,
      },
      right: {
        id: 91,
        link: `/${placeURL.Mannequin_avant}/${directionURL.N}`,
      },
      actions: [
        {
          style: {
            height: '130px',
            width: '50px',
            left: 'calc(((100% - 627px) / 2) + 125px)',
            borderRadius: '100%',
            top: '315px',
          },
          painting: `/${autresURL.peinture}/1058`,
        },
        {
          style: {
            height: '130px',
            width: '130px',
            right: 'calc(((100% - 627px) / 2) + 225px)',
            borderRadius: '100%',
            top: '265px',
          },
          painting: `/${autresURL.peinture}/316`,
        },
        {
          style: {
            height: '127px',
            width: '128px',
            right: 'calc(((100% - 627px) / 2) + 228px)',
            borderRadius: '100%',
            bottom: '300px',
          },
          painting: `/${autresURL.peinture}/108`,
        },
        {
          style: {
            height: '127px',
            width: '128px',
            right: 'calc(((100% - 627px) / 2) + 50px)',
            borderRadius: '100%',
            bottom: '333px',
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
      left: {
        id: 108,
        link: `/${placeURL.Milieu}/${directionURL.NO}`,
      },
      right: {
        id: 102,
        link: `/${placeURL.Milieu}/${directionURL.NE}`,
      },
      actions: [
        {
          style: {
            height: '90px',
            width: '80px',
            left: 'calc(((100% - 627px) / 2) + 25px)',
            borderRadius: '100%',
            top: '290px',
          },
          painting: `/${autresURL.peinture}/94`,
        },
        {
          style: {
            height: '100px',
            width: '80px',
            left: 'calc(((100% - 627px) / 2) + 28px)',
            borderRadius: '100%',
            bottom: '340px',
          },
          painting: `/${autresURL.peinture}/84`,
        },
        {
          style: {
            height: '175px',
            width: '143px',
            left: 'calc(((100% - 627px) / 2) + 155px)',
            borderRadius: '100%',
            bottom: '360px',
          },
          painting: `/${autresURL.peinture}/69`,
        },
        {
          style: {
            height: '120px',
            width: '135px',
            right: 'calc(((100% - 627px) / 2) + 130px)',
            borderRadius: '100%',
            top: '255px',
          },
          painting: `/${autresURL.peinture}/82`,
        },
        {
          style: {
            height: '120px',
            width: '135px',
            right: 'calc(((100% - 627px) / 2) + 130px)',
            borderRadius: '100%',
            bottom: '315px',
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
      left: {
        id: 101,
        link: `/${placeURL.Milieu}/${directionURL.N}`,
      },
      right: {
        id: 103,
        link: `/${placeURL.Milieu}/${directionURL.E}`,
      },
      actions: [
        {
          style: {
            height: '110px',
            width: '105px',
            left: 'calc(((100% - 627px) / 2) + 15px)',
            borderRadius: '100%',
            top: '235px',
          },
          painting: `/${autresURL.peinture}/82`,
        },
        {
          style: {
            height: '116px',
            width: '110px',
            left: 'calc(((100% - 627px) / 2) + 11px)',
            borderRadius: '100%',
            top: '370px',
          },
          painting: `/${autresURL.peinture}/319`,
        },
        {
          style: {
            height: '135px',
            width: '130px',
            left: 'calc(((100% - 627px) / 2) + 245px)',
            borderRadius: '100%',
            top: '338px',
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
      left: {
        id: 102,
        link: `/${placeURL.Milieu}/${directionURL.NE}`,
      },
      right: {
        id: 104,
        link: `/${placeURL.Milieu}/${directionURL.SE}`,
      },
      actions: [
        {
          style: {
            height: '185px',
            width: '80px',
            right: 'calc(((100% - 627px) / 2) + 95px)',
            borderRadius: '100%',
            top: '290px',
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
      left: {
        id: 103,
        link: `/${placeURL.Milieu}/${directionURL.E}`,
      },
      right: {
        id: 105,
        link: `/${placeURL.Milieu}/${directionURL.S}`,
      },
      actions: [
        {
          style: {
            height: '180px',
            width: '68px',
            left: 'calc(((100% - 627px) / 2) + 95px)',
            borderRadius: '100%',
            top: '285px',
          },
          painting: `/${autresURL.peinture}/288`,
        },
        {
          style: {
            height: '90px',
            width: '68px',
            left: 'calc(((100% - 627px) / 2) + 260px)',
            borderRadius: '100%',
            top: '330px',
          },
          painting: `/${autresURL.peinture}/557`,
        },
        {
          style: {
            height: '60px',
            width: '30px',
            right: 'calc(((100% - 627px) / 2) + 238px)',
            borderRadius: '100%',
            top: '340px',
          },
          painting: `/${autresURL.peinture}/750`,
        },
        {
          style: {
            height: '60px',
            width: '20px',
            right: 'calc(((100% - 627px) / 2) + 210px)',
            borderRadius: '100%',
            top: '340px',
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
      left: {
        id: 104,
        link: `/${placeURL.Milieu}/${directionURL.SE}`,
      },
      right: {
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
      left: {
        id: 105,
        link: `/${placeURL.Milieu}/${directionURL.S}`,
      },
      right: {
        id: 107,
        link: `/${placeURL.Milieu}/${directionURL.O}`,
      },
      actions: [
        {
          style: {
            height: '135px',
            width: '40px',
            left: 'calc(((100% - 627px) / 2) + 90px)',
            borderRadius: '100%',
            top: '305px',
          },
          painting: `/${autresURL.peinture}/179`,
        },
        {
          style: {
            height: '143px',
            width: '100px',
            left: 'calc(((100% - 627px) / 2) + 174px)',
            borderRadius: '100%',
            top: '300px',
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
      left: {
        id: 106,
        link: `/${placeURL.Milieu}/${directionURL.SO}`,
      },
      right: {
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
      left: {
        id: 107,
        link: `/${placeURL.Milieu}/${directionURL.O}`,
      },
      right: {
        id: 101,
        link: `/${placeURL.Milieu}/${directionURL.N}`,
      },
      actions: [
        {
          style: {
            height: '58px',
            width: '55px',
            left: 'calc(((100% - 627px) / 2) + 195px)',
            borderRadius: '100%',
            top: '308px',
          },
          painting: `/${autresURL.peinture}/77`,
        },
        {
          style: {
            height: '58px',
            width: '55px',
            left: 'calc(((100% - 627px) / 2) + 195px)',
            borderRadius: '100%',
            top: '390px',
          },
          painting: `/${autresURL.peinture}/76`,
        },
        {
          style: {
            height: '92px',
            width: '110px',
            left: 'calc(((100% - 627px) / 2) + 285px)',
            borderRadius: '100%',
            top: '275px',
          },
          painting: `/${autresURL.peinture}/94`,
        },
        {
          style: {
            height: '102px',
            width: '110px',
            left: 'calc(((100% - 627px) / 2) + 288px)',
            borderRadius: '100%',
            top: '387px',
          },
          painting: `/${autresURL.peinture}/84`,
        },
        {
          style: {
            height: '185px',
            width: '135px',
            right: 'calc(((100% - 627px) / 2) + 35px)',
            borderRadius: '100%',
            top: '298px',
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
      left: {
        id: 118,
        link: `/${placeURL.Orchestre}/${directionURL.NO}`,
      },
      right: {
        id: 112,
        link: `/${placeURL.Orchestre}/${directionURL.NE}`,
      },
      actions: [
        {
          style: {
            height: '120px',
            width: '100px',
            left: 'calc(((100% - 627px) / 2) + 10px)',
            borderRadius: '100%',
            top: '330px',
          },
          painting: `/${autresURL.peinture}/10`,
        },
        {
          style: {
            height: '150px',
            width: '180px',
            left: 'calc(((100% - 627px) / 2) + 160px)',
            borderRadius: '100%',
            top: '310px',
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
      left: {
        id: 111,
        link: `/${placeURL.Orchestre}/${directionURL.N}`,
      },
      right: {
        id: 113,
        link: `/${placeURL.Orchestre}/${directionURL.E}`,
      },
      actions: [
        {
          style: {
            height: '250px',
            width: '200px',
            left: 'calc(((100% - 627px) / 2) + 200px)',
            borderRadius: '100%',
            top: '250px',
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
      left: {
        id: 112,
        link: `/${placeURL.Orchestre}/${directionURL.NE}`,
      },
      right: {
        id: 114,
        link: `/${placeURL.Orchestre}/${directionURL.SE}`,
      },
      actions: [
        {
          style: {
            height: '250px',
            width: '100px',
            left: 'calc(((100% - 627px) / 2) + 10px)',
            borderRadius: '100%',
            top: '300px',
          },
          painting: `/${autresURL.Affiches}/Fauve`,
        },
        {
          style: {
            height: '130px',
            width: '130px',
            right: 'calc(((100% - 627px) / 2) + 40px)',
            borderRadius: '100%',
            top: '300px',
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
      left: {
        id: 113,
        link: `/${placeURL.Orchestre}/${directionURL.E}`,
      },
      right: {
        id: 115,
        link: `/${placeURL.Orchestre}/${directionURL.S}`,
      },
      actions: [
        {
          style: {
            height: '130px',
            width: '130px',
            left: 'calc(((100% - 627px) / 2) + 160px)',
            borderRadius: '100%',
            top: '285px',
          },
          painting: `/${autresURL.peinture}/520`,
        },
        {
          style: {
            height: '60px',
            width: '60px',
            left: 'calc(((100% - 627px) / 2) + 330px)',
            borderRadius: '100%',
            top: '320px',
          },
          painting: `/${autresURL.peinture}/519`,
        },
        // {
        //   style: {
        //     height: '70px',
        //     width: '40px',
        //     right: 'calc(((100% - 627px) / 2) + 180px)',
        //     borderRadius: '100%',
        //     top: '320px',
        //   },
        //   painting: `/${autresURL.peinture}/7`,
        // },
        // {
        //   style: {
        //     height: '40px',
        //     width: '60px',
        //     right: 'calc(((100% - 627px) / 2) + 90px)',
        //     borderRadius: '100%',
        //     top: '310px',
        //   },
        //   painting: `/${autresURL.peinture}/453`,
        // },
        // {
        //   style: {
        //     height: '40px',
        //     width: '60px',
        //     right: 'calc(((100% - 627px) / 2) + 90px)',
        //     borderRadius: '100%',
        //     top: '375px',
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
      left: {
        id: 114,
        link: `/${placeURL.Orchestre}/${directionURL.SE}`,
      },
      right: {
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
      left: {
        id: 115,
        link: `/${placeURL.Orchestre}/${directionURL.S}`,
      },
      right: {
        id: 117,
        link: `/${placeURL.Orchestre}/${directionURL.O}`,
      },
      actions: [
        {
          style: {
            height: '100px',
            width: '100px',
            left: 'calc(((100% - 627px) / 2) + 150px)',
            borderRadius: '100%',
            bottom: '175px',
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
      left: {
        id: 116,
        link: `/${placeURL.Orchestre}/${directionURL.SO}`,
      },
      right: {
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
      left: {
        id: 117,
        link: `/${placeURL.Orchestre}/${directionURL.O}`,
      },
      right: {
        id: 111,
        link: `/${placeURL.Orchestre}/${directionURL.N}`,
      },
      actions: [
        {
          style: {
            height: '70px',
            width: '50px',
            left: 'calc(((100% - 627px) / 2) + 180px)',
            borderRadius: '100%',
            top: '325px',
          },
          painting: `/${autresURL.peinture}/210`,
        },
        {
          style: {
            height: '55px',
            width: '60px',
            left: 'calc(((100% - 627px) / 2) + 250px)',
            borderRadius: '100%',
            top: '333px',
          },
          painting: `/${autresURL.peinture}/208`,
        },
        {
          style: {
            height: '130px',
            width: '135px',
            right: 'calc(((100% - 627px) / 2) + 150px)',
            borderRadius: '100%',
            top: '300px',
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
      left: {
        id: 128,
        link: `/${placeURL.Orchestre_milieu}/${directionURL.NO}`,
      },
      right: {
        id: 122,
        link: `/${placeURL.Orchestre_milieu}/${directionURL.NE}`,
      },
      actions: [
        {
          style: {
            height: '90px',
            width: '80px',
            left: 'calc(((100% - 627px) / 2) + 50px)',
            borderRadius: '100%',
            top: '330px',
          },
          painting: `/${autresURL.peinture}/10`,
        },
        {
          style: {
            height: '100px',
            width: '120px',
            left: 'calc(((100% - 627px) / 2) + 155px)',
            borderRadius: '100%',
            top: '315px',
          },
          painting: `/${autresURL.peinture}/213`,
        },
        {
          style: {
            height: '200px',
            width: '120px',
            right: 'calc(((100% - 627px) / 2) + 80px)',
            borderRadius: '100%',
            top: '315px',
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
      left: {
        id: 121,
        link: `/${placeURL.Orchestre_milieu}/${directionURL.N}`,
      },
      right: {
        id: 123,
        link: `/${placeURL.Orchestre_milieu}/${directionURL.E}`,
      },
      actions: [
        {
          style: {
            height: '200px',
            width: '120px',
            left: 'calc(((100% - 627px) / 2) + 180px)',
            borderRadius: '100%',
            top: '315px',
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
      left: {
        id: 122,
        link: `/${placeURL.Orchestre_milieu}/${directionURL.NE}`,
      },
      right: {
        id: 124,
        link: `/${placeURL.Orchestre_milieu}/${directionURL.SE}`,
      },
      actions: [
        {
          style: {
            height: '160px',
            width: '190px',
            left: 'calc(((100% - 627px) / 2) + 210px)',
            borderRadius: '100%',
            top: '290px',
          },
          painting: `/${autresURL.peinture}/520`,
        },
        {
          style: {
            height: '80px',
            width: '80px',
            right: 'calc(((100% - 627px) / 2) + 55px)',
            borderRadius: '100%',
            top: '340px',
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
      left: {
        id: 123,
        link: `/${placeURL.Orchestre_milieu}/${directionURL.E}`,
      },
      right: {
        id: 125,
        link: `/${placeURL.Orchestre_milieu}/${directionURL.S}`,
      },
      actions: [
        {
          style: {
            height: '90px',
            width: '95px',
            left: 'calc(((100% - 627px) / 2) + 160px)',
            borderRadius: '100%',
            top: '315px',
          },
          painting: `/${autresURL.peinture}/519`,
        },
        {
          style: {
            height: '90px',
            width: '60px',
            left: 'calc(((100% - 627px) / 2) + 300px)',
            borderRadius: '100%',
            top: '315px',
          },
          painting: `/${autresURL.peinture}/7`,
        },
        {
          style: {
            height: '60px',
            width: '80px',
            right: 'calc(((100% - 627px) / 2) + 140px)',
            borderRadius: '100%',
            top: '295px',
          },
          painting: `/${autresURL.peinture}/453`,
        },
        {
          style: {
            height: '60px',
            width: '90px',
            right: 'calc(((100% - 627px) / 2) + 140px)',
            borderRadius: '100%',
            top: '380px',
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
      left: {
        id: 124,
        link: `/${placeURL.Orchestre_milieu}/${directionURL.SE}`,
      },
      right: {
        id: 126,
        link: `/${placeURL.Orchestre_milieu}/${directionURL.SO}`,
      },
      actions: [
        {
          style: {
            height: '60px',
            width: '70px',
            left: 'calc(((100% - 627px) / 2) + 115px)',
            borderRadius: '100%',
            top: '290px',
          },
          painting: `/${autresURL.peinture}/453`,
        },
        {
          style: {
            height: '60px',
            width: '90px',
            left: 'calc(((100% - 627px) / 2) + 110px)',
            borderRadius: '100%',
            top: '370px',
          },
          painting: `/${autresURL.peinture}/455`,
        },
        {
          style: {
            height: '60px',
            width: '90px',
            left: 'calc(((100% - 627px) / 2) + 245px)',
            borderRadius: '100%',
            top: '285px',
          },
          painting: `/${autresURL.peinture}/456`,
        },
        {
          style: {
            height: '60px',
            width: '90px',
            left: 'calc(((100% - 627px) / 2) + 245px)',
            borderRadius: '100%',
            top: '370px',
          },
          painting: `/${autresURL.peinture}/457`,
        },
        {
          style: {
            height: '60px',
            width: '60px',
            right: 'calc(((100% - 627px) / 2) + 170px)',
            borderRadius: '100%',
            top: '330px',
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
      left: {
        id: 125,
        link: `/${placeURL.Orchestre_milieu}/${directionURL.S}`,
      },
      right: {
        id: 127,
        link: `/${placeURL.Orchestre_milieu}/${directionURL.O}`,
      },
      actions: [
        {
          style: {
            height: '100px',
            width: '100px',
            right: 'calc(((100% - 627px) / 2) + 170px)',
            borderRadius: '100%',
            bottom: '130px',
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
      left: {
        id: 126,
        link: `/${placeURL.Orchestre_milieu}/${directionURL.SO}`,
      },
      right: {
        id: 128,
        link: `/${placeURL.Orchestre_milieu}/${directionURL.NO}`,
      },
      actions: [
        {
          style: {
            height: '100px',
            width: '100px',
            left: 'calc(((100% - 627px) / 2) + 120px)',
            borderRadius: '100%',
            bottom: '120px',
          },
          painting: `/${placeURL.Table}/1`,
        },
        {
          style: {
            height: '100px',
            width: '100px',
            right: 'calc(((100% - 627px) / 2) + 250px)',
            borderRadius: '100%',
            bottom: '100px',
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
      left: {
        id: 127,
        link: `/${placeURL.Orchestre_milieu}/${directionURL.O}`,
      },
      right: {
        id: 121,
        link: `/${placeURL.Orchestre_milieu}/${directionURL.N}`,
      },
      actions: [
        {
          style: {
            height: '90px',
            width: '95px',
            right: 'calc(((100% - 627px) / 2) + 170px)',
            borderRadius: '100%',
            top: '330px',
          },
          painting: `/${autresURL.peinture}/10`,
        },
        {
          style: {
            height: '105px',
            width: '110px',
            right: 'calc(((100% - 627px) / 2) + 35px)',
            borderRadius: '100%',
            top: '330px',
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
      left: {
        id: 138,
        link: `/${placeURL.Orchestre_oppose}/${directionURL.NO}`,
      },
      right: {
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
      left: {
        id: 131,
        link: `/${placeURL.Orchestre_oppose}/${directionURL.N}`,
      },
      right: {
        id: 133,
        link: `/${placeURL.Orchestre_oppose}/${directionURL.E}`,
      },
      actions: [
        {
          style: {
            height: '130px',
            width: '135px',
            right: 'calc(((100% - 627px) / 2) + 275px)',
            borderRadius: '100%',
            top: '315px',
          },
          painting: `/${autresURL.peinture}/520`,
        },
        {
          style: {
            height: '110px',
            width: '150px',
            right: 'calc(((100% - 627px) / 2) + 15px)',
            borderRadius: '100%',
            top: '335px',
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
      left: {
        id: 132,
        link: `/${placeURL.Orchestre_oppose}/${directionURL.NE}`,
      },
      right: {
        id: 134,
        link: `/${placeURL.Orchestre_oppose}/${directionURL.SE}`,
      },
      actions: [
        {
          style: {
            height: '120px',
            width: '180px',
            left: 'calc(((100% - 627px) / 2) + 110px)',
            borderRadius: '100%',
            top: '320px',
          },
          painting: `/${autresURL.peinture}/519`,
        },
        {
          style: {
            height: '189px',
            width: '180px',
            right: 'calc(((100% - 627px) / 2) + 45px)',
            borderRadius: '100%',
            top: '295px',
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
      left: {
        id: 133,
        link: `/${placeURL.Orchestre_oppose}/${directionURL.E}`,
      },
      right: {
        id: 135,
        link: `/${placeURL.Orchestre_oppose}/${directionURL.S}`,
      },
      actions: [
        {
          style: {
            height: '190px',
            width: '185px',
            left: 'calc(((100% - 627px) / 2) + 50px)',
            borderRadius: '100%',
            top: '285px',
          },
          painting: `/${autresURL.peinture}/7`,
        },
        {
          style: {
            height: '110px',
            width: '145px',
            right: 'calc(((100% - 627px) / 2) + 165px)',
            borderRadius: '100%',
            top: '255px',
          },
          painting: `/${autresURL.peinture}/453`,
        },
        {
          style: {
            height: '90px',
            width: '145px',
            right: 'calc(((100% - 627px) / 2) + 165px)',
            borderRadius: '100%',
            bottom: '320px',
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
      left: {
        id: 134,
        link: `/${placeURL.Orchestre_oppose}/${directionURL.SE}`,
      },
      right: {
        id: 136,
        link: `/${placeURL.Orchestre_oppose}/${directionURL.SO}`,
      },
      actions: [
        {
          style: {
            height: '100px',
            width: '110px',
            left: 'calc(((100% - 627px) / 2) + 30px)',
            borderRadius: '100%',
            top: '255px',
          },
          painting: `/${autresURL.peinture}/453`,
        },
        {
          style: {
            height: '100px',
            width: '110px',
            left: 'calc(((100% - 627px) / 2) + 30px)',
            borderRadius: '100%',
            bottom: '325px',
          },
          painting: `/${autresURL.peinture}/455`,
        },
        {
          style: {
            height: '120px',
            width: '190px',
            right: 'calc(((100% - 627px) / 2) + 170px)',
            borderRadius: '100%',
            top: '230px',
          },
          painting: `/${autresURL.peinture}/456`,
        },
        {
          style: {
            height: '115px',
            width: '190px',
            right: 'calc(((100% - 627px) / 2) + 170px)',
            borderRadius: '100%',
            bottom: '310px',
          },
          painting: `/${autresURL.peinture}/457`,
        },
        {
          style: {
            height: '90px',
            width: '55px',
            right: 'calc(((100% - 627px) / 2) + 15px)',
            borderRadius: '100%',
            top: '350px',
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
      left: {
        id: 135,
        link: `/${placeURL.Orchestre_oppose}/${directionURL.S}`,
      },
      right: {
        id: 137,
        link: `/${placeURL.Orchestre_oppose}/${directionURL.O}`,
      },
      actions: [
        {
          style: {
            height: '90px',
            width: '80px',
            left: 'calc(((100% - 627px) / 2) + 165px)',
            borderRadius: '100%',
            top: '324px',
          },
          painting: `/${autresURL.peinture}/518`,
        },
        {
          style: {
            height: '55px',
            width: '40px',
            right: 'calc(((100% - 627px) / 2) + 270px)',
            borderRadius: '100%',
            top: '295px',
          },
          painting: `/${autresURL.peinture}/217`,
        },
        {
          style: {
            height: '55px',
            width: '50px',
            right: 'calc(((100% - 627px) / 2) + 265px)',
            borderRadius: '100%',
            top: '380px',
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
      left: {
        id: 136,
        link: `/${placeURL.Orchestre_oppose}/${directionURL.SO}`,
      },
      right: {
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
      left: {
        id: 137,
        link: `/${placeURL.Orchestre_oppose}/${directionURL.O}`,
      },
      right: {
        id: 131,
        link: `/${placeURL.Orchestre_oppose}/${directionURL.N}`,
      },
      actions: [
        {
          style: {
            height: '60px',
            width: '80px',
            left: 'calc(((100% - 627px) / 2) + 200px)',
            borderRadius: '100%',
            bottom: '260px',
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
      left: {
        id: 148,
        link: `/${placeURL.Parfum}/${directionURL.NO}`,
      },
      right: {
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
      left: {
        id: 141,
        link: `/${placeURL.Parfum}/${directionURL.N}`,
      },
      right: {
        id: 143,
        link: `/${placeURL.Parfum}/${directionURL.E}`,
      },
      actions: [
        {
          style: {
            height: '80px',
            width: '60px',
            right: 'calc(((100% - 627px) / 2) + 172px)',
            borderRadius: '100%',
            top: '330px',
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
      left: {
        id: 142,
        link: `/${placeURL.Parfum}/${directionURL.NE}`,
      },
      right: {
        id: 144,
        link: `/${placeURL.Parfum}/${directionURL.SE}`,
      },
      actions: [
        {
          style: {
            height: '80px',
            width: '55px',
            left: 'calc(((100% - 627px) / 2) + 95px)',
            borderRadius: '100%',
            top: '315px',
          },
          painting: `/${autresURL.peinture}/675`,
        },
        {
          style: {
            height: '80px',
            width: '45px',
            right: 'calc(((100% - 627px) / 2) + 130px)',
            borderRadius: '100%',
            top: '330px',
          },
          painting: `/${autresURL.peinture}/227`,
        },
        {
          style: {
            height: '230px',
            width: '80px',
            right: 'calc(((100% - 627px) / 2) + 20px)',
            borderRadius: '100%',
            top: '330px',
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
      left: {
        id: 143,
        link: `/${placeURL.Parfum}/${directionURL.E}`,
      },
      right: {
        id: 145,
        link: `/${placeURL.Parfum}/${directionURL.S}`,
      },
      actions: [
        {
          style: {
            height: '80px',
            width: '40px',
            left: 'calc(((100% - 627px) / 2) + 150px)',
            borderRadius: '100%',
            top: '330px',
          },
          painting: `/${autresURL.peinture}/227`,
        },
        {
          style: {
            height: '200px',
            width: '110px',
            left: 'calc(((100% - 627px) / 2) + 240px)',
            borderRadius: '100%',
            top: '330px',
          },
          painting: `/${autresURL.Affiches}/Predilection`,
        },
        {
          style: {
            height: '260px',
            width: '110px',
            right: 'calc(((100% - 627px) / 2) + 80px)',
            borderRadius: '100%',
            top: '370px',
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
      left: {
        id: 144,
        link: `/${placeURL.Parfum}/${directionURL.SE}`,
      },
      right: {
        id: 146,
        link: `/${placeURL.Parfum}/${directionURL.SO}`,
      },
      actions: [
        {
          style: {
            height: '220px',
            width: '130px',
            left: 'calc(((100% - 627px) / 2) + 50px)',
            borderRadius: '100%',
            bottom: '180px',
          },
          painting: `/${autresURL.Affiches}/Parfum`,
        },
        {
          style: {
            height: '130px',
            width: '200px',
            right: 'calc(((100% - 627px) / 2) + 100px)',
            borderRadius: '100%',
            top: '225px',
          },
          painting: `/${autresURL.peinture}/699`,
        },
        {
          style: {
            height: '180px',
            width: '150px',
            right: 'calc(((100% - 627px) / 2) + 125px)',
            borderRadius: '100%',
            bottom: '220px',
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
      left: {
        id: 145,
        link: `/${placeURL.Parfum}/${directionURL.S}`,
      },
      right: {
        id: 147,
        link: `/${placeURL.Parfum}/${directionURL.O}`,
      },
      actions: [
        {
          style: {
            height: '140px',
            width: '220px',
            left: 'calc(((100% - 627px) / 2) + 38px)',
            borderRadius: '100%',
            top: '205px',
          },
          painting: `/${autresURL.peinture}/699`,
        },
        {
          style: {
            height: '210px',
            width: '160px',
            left: 'calc(((100% - 627px) / 2) + 60px)',
            borderRadius: '100%',
            top: '430px',
          },
          painting: `/${autresURL.peinture}/1042`,
        },
        {
          style: {
            height: '245px',
            width: '175px',
            right: 'calc(((100% - 627px) / 2) + 100px)',
            borderRadius: '100%',
            top: '310px',
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
      left: {
        id: 146,
        link: `/${placeURL.Parfum}/${directionURL.SO}`,
      },
      right: {
        id: 148,
        link: `/${placeURL.Parfum}/${directionURL.NO}`,
      },
      actions: [
        {
          style: {
            height: '240px',
            width: '175px',
            left: 'calc(((100% - 627px) / 2) + 30px)',
            borderRadius: '100%',
            top: '300px',
          },
          painting: `/${autresURL.peinture}/679`,
        },
        {
          style: {
            height: '240px',
            width: '175px',
            right: 'calc(((100% - 627px) / 2) + 90px)',
            borderRadius: '100%',
            top: '300px',
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
      left: {
        id: 147,
        link: `/${placeURL.Parfum}/${directionURL.O}`,
      },
      right: {
        id: 141,
        link: `/${placeURL.Parfum}/${directionURL.N}`,
      },
      actions: [
        {
          style: {
            height: '270px',
            width: '195px',
            left: 'calc(((100% - 627px) / 2) + 53px)',
            borderRadius: '100%',
            top: '300px',
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
      left: {
        id: 158,
        link: `/${placeURL.Portrait}/${directionURL.NO}`,
      },
      right: {
        id: 152,
        link: `/${placeURL.Portrait}/${directionURL.NE}`,
      },
      actions: [
        {
          style: {
            height: '200px',
            width: '200px',
            left: 'calc(((100% - 627px) / 2) + 200px)',
            borderRadius: '100%',
            top: '300px',
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
      left: {
        id: 151,
        link: `/${placeURL.Portrait}/${directionURL.N}`,
      },
      right: {
        id: 153,
        link: `/${placeURL.Portrait}/${directionURL.E}`,
      },
      actions: [
        {
          style: {
            height: '200px',
            width: '60px',
            right: 'calc(((100% - 627px) / 2) + 180px)',
            borderRadius: '100%',
            top: '300px',
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
      left: {
        id: 152,
        link: `/${placeURL.Portrait}/${directionURL.NE}`,
      },
      right: {
        id: 154,
        link: `/${placeURL.Portrait}/${directionURL.SE}`,
      },
      actions: [
        {
          style: {
            height: '120px',
            width: '60px',
            left: 'calc(((100% - 627px) / 2) + 70px)',
            borderRadius: '100%',
            top: '350px',
          },
          painting: `/${autresURL.Affiches}/Bretagne`,
        },
        {
          style: {
            height: '50px',
            width: '35px',
            right: 'calc(((100% - 627px) / 2) + 190px)',
            borderRadius: '100%',
            top: '370px',
          },
          painting: `/${autresURL.Affiches}/Eugenio`,
        },
        {
          style: {
            height: '55px',
            width: '80px',
            right: 'calc(((100% - 627px) / 2) + 105px)',
            borderRadius: '100%',
            top: '275px',
          },
          painting: `/${autresURL.peinture}/9999999999`,
        },
        {
          style: {
            height: '35px',
            width: '40px',
            right: 'calc(((100% - 627px) / 2) + 120px)',
            borderRadius: '100%',
            top: '350px',
          },
          painting: `/${autresURL.peinture}/9999999999`,
        },
        {
          style: {
            height: '100px',
            width: '55px',
            right: 'calc(((100% - 627px) / 2) + 120px)',
            borderRadius: '100%',
            top: '400px',
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
      left: {
        id: 153,
        link: `/${placeURL.Portrait}/${directionURL.E}`,
      },
      right: {
        id: 155,
        link: `/${placeURL.Portrait}/${directionURL.S}`,
      },
      actions: [
        {
          style: {
            height: '70px',
            width: '45px',
            left: 'calc(((100% - 627px) / 2) + 90px)',
            borderRadius: '100%',
            top: '360px',
          },
          painting: `/${autresURL.Affiches}/Eugenio`,
        },
        {
          style: {
            height: '58px',
            width: '85px',
            left: 'calc(((100% - 627px) / 2) + 140px)',
            borderRadius: '100%',
            top: '270px',
          },
          painting: `/${autresURL.peinture}/9999999999`,
        },
        {
          style: {
            height: '30px',
            width: '40px',
            left: 'calc(((100% - 627px) / 2) + 160px)',
            borderRadius: '100%',
            top: '350px',
          },
          painting: `/${autresURL.peinture}/9999999999`,
        },
        {
          style: {
            height: '105px',
            width: '60px',
            left: 'calc(((100% - 627px) / 2) + 150px)',
            borderRadius: '100%',
            top: '395px',
          },
          painting: `/${autresURL.peinture}/9999999999`,
        },
        {
          style: {
            height: '140px',
            width: '135px',
            right: 'calc(((100% - 627px) / 2) + 220px)',
            borderRadius: '100%',
            top: '300px',
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
      left: {
        id: 154,
        link: `/${placeURL.Portrait}/${directionURL.SE}`,
      },
      right: {
        id: 156,
        link: `/${placeURL.Portrait}/${directionURL.SO}`,
      },
      actions: [
        {
          style: {
            height: '300px',
            width: '280px',
            left: 'calc(((100% - 627px) / 2) + 60px)',
            borderRadius: '100%',
            top: '240px',
          },
          painting: `/${autresURL.peinture}/289`,
        },
        {
          style: {
            height: '255px',
            width: '180px',
            right: 'calc(((100% - 627px) / 2) + 10px)',
            borderRadius: '100%',
            top: '273px',
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
      left: {
        id: 155,
        link: `/${placeURL.Portrait}/${directionURL.S}`,
      },
      right: {
        id: 157,
        link: `/${placeURL.Portrait}/${directionURL.O}`,
      },
      actions: [
        {
          style: {
            height: '265px',
            width: '205px',
            left: 'calc(((100% - 627px) / 2) + 85px)',
            borderRadius: '100%',
            top: '240px',
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
      left: {
        id: 156,
        link: `/${placeURL.Portrait}/${directionURL.SO}`,
      },
      right: {
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
      left: {
        id: 157,
        link: `/${placeURL.Portrait}/${directionURL.O}`,
      },
      right: {
        id: 151,
        link: `/${placeURL.Portrait}/${directionURL.N}`,
      },
      actions: [
        {
          style: {
            height: '135px',
            width: '105px',
            left: 'calc(((100% - 627px) / 2) + 215px)',
            borderRadius: '100%',
            top: '330px',
          },
          painting: `/${autresURL.peinture}/275`,
        },
        {
          style: {
            height: '180px',
            width: '200px',
            right: 'calc(((100% - 627px) / 2) + 10px)',
            borderRadius: '100%',
            top: '330px',
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
      left: {
        id: 162,
        link: `/${placeURL.Table}/2`,
      },
      right: {
        id: 168,
        link: `/${placeURL.Table}/8`,
      },
      actions: [
        {
          style: {
            height: '80px',
            width: '100px',
            left: 'calc(((100% - 627px) / 2) + 170px)',
            borderRadius: '100%',
            top: '230px',
          },
          painting: `/${autresURL.dessins_table}/4161`,
        },
        {
          style: {
            height: '80px',
            width: '100px',
            left: 'calc(((100% - 627px) / 2) + 140px)',
            borderRadius: '100%',
            top: '330px',
          },
          painting: `/${autresURL.dessins_table}/9999999999`,
        },
        {
          style: {
            height: '180px',
            width: '150px',
            right: 'calc(((100% - 627px) / 2) + 155px)',
            borderRadius: '100%',
            top: '235px',
          },
          painting: `/${autresURL.Affiches}/Livre`,
        },
        {
          style: {
            height: '150px',
            width: '210px',
            left: 'calc(((100% - 627px) / 2) + 43px)',
            borderRadius: '100%',
            bottom: '255px',
          },
          painting: `/${autresURL.dessins_table}/4157`,
        },
        {
          style: {
            height: '130px',
            width: '180px',
            right: 'calc(((100% - 627px) / 2) + 170px)',
            borderRadius: '100%',
            bottom: '230px',
          },
          painting: `/${autresURL.dessins_table}/4158`,
        },
      ],
      mouvement: true,
      mouvementLink: `/${placeURL.Orchestre_oppose}/${directionURL.NO}`,
    },
    2: {
      id: 162,
      image: photos.Tab2,
      left: {
        id: 163,
        link: `/${placeURL.Table}/3`,
      },
      right: {
        id: 161,
        link: `/${placeURL.Table}/1`,
      },
      actions: [
        {
          style: {
            height: '80px',
            width: '100px',
            left: 'calc(((100% - 627px) / 2) + 150px)',
            borderRadius: '100%',
            top: '225px',
          },
          painting: `/${autresURL.dessins_table}/4153`,
        },
        {
          style: {
            height: '80px',
            width: '130px',
            right: 'calc(((100% - 627px) / 2) + 150px)',
            borderRadius: '100%',
            top: '213px',
          },
          painting: `/${autresURL.dessins_table}/4161`,
        },
        {
          style: {
            height: '80px',
            width: '120px',
            right: 'calc(((100% - 627px) / 2) + 170px)',
            borderRadius: '100%',
            top: '310px',
          },
          painting: `/${autresURL.dessins_table}/9999999999`,
        },
        {
          style: {
            height: '150px',
            width: '200px',
            right: 'calc(((100% - 627px) / 2) + 180px)',
            borderRadius: '100%',
            bottom: '260px',
          },
          painting: `/${autresURL.dessins_table}/4157`,
        },
      ],
      mouvement: true,
      mouvementLink: `/${placeURL.Table_entree}/${directionURL.N}`,
    },
    3: {
      id: 163,
      image: photos.Tab3,
      left: {
        id: 164,
        link: `/${placeURL.Table}/4`,
      },
      right: {
        id: 162,
        link: `/${placeURL.Table}/2`,
      },
      actions: [
        {
          style: {
            height: '80px',
            width: '100px',
            left: 'calc(((100% - 627px) / 2) + 130px)',
            borderRadius: '100%',
            top: '220px',
          },
          painting: `/${autresURL.dessins_table}/4142`,
        },
        {
          style: {
            height: '80px',
            width: '120px',
            left: 'calc(((100% - 627px) / 2) + 255px)',
            borderRadius: '100%',
            top: '204px',
          },
          painting: `/${autresURL.dessins_table}/4152`,
        },
        {
          style: {
            height: '70px',
            width: '100px',
            right: 'calc(((100% - 627px) / 2) + 110px)',
            borderRadius: '100%',
            top: '204px',
          },
          painting: `/${autresURL.dessins_table}/4153`,
        },
        {
          style: {
            height: '120px',
            width: '140px',
            right: 'calc(((100% - 627px) / 2) + 155px)',
            borderRadius: '100%',
            top: '315px',
          },
          painting: `/${autresURL.dessins_table}/4155`,
        },
        {
          style: {
            height: '120px',
            width: '150px',
            right: 'calc(((100% - 627px) / 2) + 180px)',
            borderRadius: '100%',
            bottom: '265px',
          },
          painting: `/${autresURL.dessins_table}/4156`,
        },
      ],
      mouvement: true,
      mouvementLink: `/${placeURL.Table_entree}/${directionURL.N}`,
    },
    4: {
      id: 164,
      image: photos.Tab4,
      left: {
        id: 165,
        link: `/${placeURL.Table}/5`,
      },
      right: {
        id: 163,
        link: `/${placeURL.Table}/3`,
      },
      actions: [
        {
          style: {
            height: '80px',
            width: '130px',
            left: 'calc(((100% - 627px) / 2) + 205px)',
            borderRadius: '100%',
            top: '195px',
          },
          painting: `/${autresURL.dessins_table}/4141`,
        },
        {
          style: {
            height: '75px',
            width: '130px',
            right: 'calc(((100% - 627px) / 2) + 154px)',
            borderRadius: '100%',
            top: '195px',
          },
          painting: `/${autresURL.dessins_table}/4142`,
        },
        {
          style: {
            height: '200px',
            width: '280px',
            right: 'calc(((100% - 627px) / 2) + 140px)',
            borderRadius: '100%',
            bottom: '280px',
          },
          painting: `/${autresURL.dessins_table}/4154`,
        },
      ],
      mouvement: true,
      mouvementLink: `/${placeURL.Table_entree}/${directionURL.N}`,
    },
    5: {
      id: 165,
      image: photos.Tab5,
      left: {
        id: 166,
        link: `/${placeURL.Table}/6`,
      },
      right: {
        id: 164,
        link: `/${placeURL.Table}/4`,
      },
      actions: [
        {
          style: {
            height: '100px',
            width: '100px',
            right: 'calc(((100% - 627px) / 2) + 150px)',
            borderRadius: '100%',
            bottom: '395px',
          },
          painting: `/${autresURL.dessins_table}/4141`,
        },
        {
          style: {
            height: '100px',
            width: '180px',
            left: 'calc(((100% - 627px) / 2) + 170px)',
            borderRadius: '100%',
            bottom: '395px',
          },
          painting: `/${autresURL.dessins_table}/4142`,
        },
        {
          style: {
            height: '100px',
            width: '100px',
            left: 'calc(((100% - 627px) / 2) + 50px)',
            borderRadius: '100%',
            bottom: '395px',
          },
          painting: `/${autresURL.dessins_table}/4152`,
        },
        {
          style: {
            height: '100px',
            width: '200px',
            left: 'calc(((100% - 627px) / 2) + 240px)',
            borderRadius: '100%',
            top: '150px',
          },
          painting: `/${autresURL.dessins_table}/4154`,
        },
      ],
      mouvement: true,
      mouvementLink: `/${placeURL.Table_opposee}/${directionURL.S}`,
    },
    6: {
      id: 166,
      image: photos.Tab6,
      left: {
        id: 167,
        link: `/${placeURL.Table}/7`,
      },
      right: {
        id: 165,
        link: `/${placeURL.Table}/5`,
      },
      actions: [
        {
          style: {
            height: '100px',
            width: '150px',
            left: 'calc(((100% - 627px) / 2) + 90px)',
            borderRadius: '100%',
            bottom: '380px',
          },
          painting: `/${autresURL.dessins_table}/4153`,
        },
        {
          style: {
            height: '100px',
            width: '140px',
            left: 'calc(((100% - 627px) / 2) + 300px)',
            borderRadius: '100%',
            bottom: '380px',
          },
          painting: `/${autresURL.dessins_table}/4152`,
        },
        {
          style: {
            height: '100px',
            width: '110px',
            right: 'calc(((100% - 627px) / 2) + 60px)',
            borderRadius: '100%',
            bottom: '380px',
          },
          painting: `/${autresURL.dessins_table}/4142`,
        },
        {
          style: {
            height: '90px',
            width: '130px',
            left: 'calc(((100% - 627px) / 2) + 230px)',
            borderRadius: '100%',
            top: '200px',
          },
          painting: `/${autresURL.dessins_table}/4155`,
        },
        {
          style: {
            height: '60px',
            width: '130px',
            left: 'calc(((100% - 627px) / 2) + 270px)',
            borderRadius: '100%',
            top: '135px',
          },
          painting: `/${autresURL.dessins_table}/4156`,
        },
      ],
      mouvement: true,
      mouvementLink: `/${placeURL.Table_opposee}/${directionURL.S}`,
    },
    7: {
      id: 167,
      image: photos.Tab7,
      left: {
        id: 168,
        link: `/${placeURL.Table}/8`,
      },
      right: {
        id: 166,
        link: `/${placeURL.Table}/6`,
      },
      actions: [
        {
          style: {
            height: '90px',
            width: '200px',
            left: 'calc(((100% - 627px) / 2) + 220px)',
            borderRadius: '100%',
            top: '135px',
          },
          painting: `/${autresURL.dessins_table}/4157`,
        },
        {
          style: {
            height: '80px',
            width: '140px',
            left: 'calc(((100% - 627px) / 2) + 180px)',
            borderRadius: '100%',
            top: '235px',
          },
          painting: `/${autresURL.dessins_table}/9999999999`,
        },
        {
          style: {
            height: '140px',
            width: '160px',
            left: 'calc(((100% - 627px) / 2) + 140px)',
            borderRadius: '100%',
            top: '330px',
          },
          painting: `/${autresURL.dessins_table}/4161`,
        },
        {
          style: {
            height: '120px',
            width: '130px',
            right: 'calc(((100% - 627px) / 2) + 95px)',
            borderRadius: '100%',
            top: '355px',
          },
          painting: `/${autresURL.dessins_table}/4153`,
        },
      ],
      mouvement: true,
      mouvementLink: `/${placeURL.Table_opposee}/${directionURL.S}`,
    },
    8: {
      id: 168,
      image: photos.Tab8,
      left: {
        id: 161,
        link: `/${placeURL.Table}/1`,
      },
      right: {
        id: 167,
        link: `/${placeURL.Table}/7`,
      },
      actions: [
        {
          style: {
            height: '100px',
            width: '100px',
            right: 'calc(((100% - 627px) / 2) + 70px)',
            borderRadius: '100%',
            bottom: '330px',
          },
          painting: `/${autresURL.dessins_table}/4161`,
        },
        {
          style: {
            height: '80px',
            width: '80px',
            right: 'calc(((100% - 627px) / 2) + 80px)',
            borderRadius: '100%',
            top: '305px',
          },
          painting: `/${autresURL.dessins_table}/9999999999`,
        },
        {
          style: {
            height: '250px',
            width: '200px',
            left: 'calc(((100% - 627px) / 2) + 190px)',
            borderRadius: '100%',
            bottom: '330px',
          },
          painting: `/${autresURL.Affiches}/Livre`,
        },
        {
          style: {
            height: '80px',
            width: '160px',
            left: 'calc(((100% - 627px) / 2) + 260px)',
            borderRadius: '100%',
            top: '140px',
          },
          painting: `/${autresURL.dessins_table}/4158`,
        },
      ],
      mouvement: true,
      mouvementLink: `/${placeURL.Orchestre}/${directionURL.SO}`,
    },
  },
  Table_entree: {
    N: {
      id: 171,
      image: photos.TabEN,
      left: {
        id: 178,
        link: `/${placeURL.Table_entree}/${directionURL.NO}`,
      },
      right: {
        id: 172,
        link: `/${placeURL.Table_entree}/${directionURL.NE}`,
      },
      actions: [
        {
          style: {
            height: '60px',
            width: '80px',
            left: 'calc(((100% - 627px) / 2) + 70px)',
            borderRadius: '100%',
            bottom: '200px',
          },
          painting: `/${placeURL.Table}/4`,
        },
        {
          style: {
            height: '60px',
            width: '80px',
            left: 'calc(((100% - 627px) / 2) + 200px)',
            borderRadius: '100%',
            bottom: '180px',
          },
          painting: `/${placeURL.Table}/3`,
        },
        {
          style: {
            height: '60px',
            width: '80px',
            right: 'calc(((100% - 627px) / 2) + 200px)',
            borderRadius: '100%',
            bottom: '180px',
          },
          painting: `/${placeURL.Table}/2`,
        },
        {
          style: {
            height: '60px',
            width: '80px',
            right: 'calc(((100% - 627px) / 2) + 70px)',
            borderRadius: '100%',
            bottom: '200px',
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
      left: {
        id: 171,
        link: `/${placeURL.Table_entree}/${directionURL.N}`,
      },
      right: {
        id: 173,
        link: `/${placeURL.Table_entree}/${directionURL.E}`,
      },
      actions: [
        {
          style: {
            height: '60px',
            width: '80px',
            left: 'calc(((100% - 627px) / 2) + 90px)',
            borderRadius: '100%',
            bottom: '220px',
          },
          painting: `/${placeURL.Table}/2`,
        },
        {
          style: {
            height: '60px',
            width: '80px',
            left: 'calc(((100% - 627px) / 2) + 210px)',
            borderRadius: '100%',
            bottom: '240px',
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
      left: {
        id: 172,
        link: `/${placeURL.Table_entree}/${directionURL.NE}`,
      },
      right: {
        id: 174,
        link: `/${placeURL.Table_entree}/${directionURL.SE}`,
      },
      actions: [
        {
          style: {
            height: '60px',
            width: '70px',
            left: 'calc(((100% - 627px) / 2) + 100px)',
            borderRadius: '100%',
            top: '350px',
          },
          painting: `/${autresURL.peinture}/520`,
        },
        {
          style: {
            height: '50px',
            width: '70px',
            left: 'calc(((100% - 627px) / 2) + 220px)',
            borderRadius: '100%',
            top: '355px',
          },
          painting: `/${autresURL.peinture}/519`,
        },
        {
          style: {
            height: '80px',
            width: '95px',
            right: 'calc(((100% - 627px) / 2) + 200px)',
            borderRadius: '100%',
            top: '345px',
          },
          painting: `/${autresURL.peinture}/7`,
        },
        {
          style: {
            height: '60px',
            width: '40px',
            right: 'calc(((100% - 627px) / 2) + 120px)',
            borderRadius: '100%',
            top: '320px',
          },
          painting: `/${autresURL.peinture}/453`,
        },
        {
          style: {
            height: '55px',
            width: '45px',
            right: 'calc(((100% - 627px) / 2) + 120px)',
            borderRadius: '100%',
            top: '410px',
          },
          painting: `/${autresURL.peinture}/455`,
        },
        {
          style: {
            height: '90px',
            width: '60px',
            right: 'calc(((100% - 627px) / 2) + 20px)',
            borderRadius: '100%',
            top: '290px',
          },
          painting: `/${autresURL.peinture}/456`,
        },
        {
          style: {
            height: '90px',
            width: '60px',
            right: 'calc(((100% - 627px) / 2) + 20px)',
            borderRadius: '100%',
            top: '415px',
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
      left: {
        id: 173,
        link: `/${placeURL.Table_entree}/${directionURL.E}`,
      },
      right: {
        id: 175,
        link: `/${placeURL.Table_entree}/${directionURL.S}`,
      },
      actions: [
        {
          style: {
            height: '60px',
            width: '40px',
            left: 'calc(((100% - 627px) / 2) + 175px)',
            borderRadius: '100%',
            top: '315px',
          },
          painting: `/${autresURL.peinture}/453`,
        },
        {
          style: {
            height: '55px',
            width: '40px',
            left: 'calc(((100% - 627px) / 2) + 175px)',
            borderRadius: '100%',
            bottom: '380px',
          },
          painting: `/${autresURL.peinture}/455`,
        },
        {
          style: {
            height: '80px',
            width: '90px',
            left: 'calc(((100% - 627px) / 2) + 253px)',
            borderRadius: '100%',
            top: '285px',
          },
          painting: `/${autresURL.peinture}/456`,
        },
        {
          style: {
            height: '80px',
            width: '95px',
            left: 'calc(((100% - 627px) / 2) + 250px)',
            borderRadius: '100%',
            bottom: '350px',
          },
          painting: `/${autresURL.peinture}/457`,
        },
        {
          style: {
            height: '120px',
            width: '125px',
            right: 'calc(((100% - 627px) / 2) + 40px)',
            borderRadius: '100%',
            top: '340px',
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
      left: {
        id: 174,
        link: `/${placeURL.Table_entree}/${directionURL.SE}`,
      },
      right: {
        id: 176,
        link: `/${placeURL.Table_entree}/${directionURL.SO}`,
      },
      actions: [
        {
          style: {
            height: '110px',
            width: '110px',
            left: 'calc(((100% - 627px) / 2) + 50px)',
            borderRadius: '100%',
            top: '340px',
          },
          painting: `/${autresURL.peinture}/518`,
        },
        {
          style: {
            height: '100px',
            width: '135px',
            right: 'calc(((100% - 627px) / 2) + 155px)',
            borderRadius: '100%',
            top: '260px',
          },
          painting: `/${autresURL.peinture}/217`,
        },
        {
          style: {
            height: '95px',
            width: '155px',
            right: 'calc(((100% - 627px) / 2) + 150px)',
            borderRadius: '100%',
            bottom: '315px',
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
      left: {
        id: 175,
        link: `/${placeURL.Table_entree}/${directionURL.S}`,
      },
      right: {
        id: 177,
        link: `/${placeURL.Table_entree}/${directionURL.O}`,
      },
      actions: [
        {
          style: {
            height: '100px',
            width: '105px',
            left: 'calc(((100% - 627px) / 2) + 155px)',
            borderRadius: '100%',
            top: '275px',
          },
          painting: `/${autresURL.peinture}/216`,
        },
        {
          style: {
            height: '85px',
            width: '100px',
            left: 'calc(((100% - 627px) / 2) + 160px)',
            borderRadius: '100%',
            top: '403px',
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
      left: {
        id: 176,
        link: `/${placeURL.Table_entree}/${directionURL.SO}`,
      },
      right: {
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
      left: {
        id: 177,
        link: `/${placeURL.Table_entree}/${directionURL.O}`,
      },
      right: {
        id: 171,
        link: `/${placeURL.Table_entree}/${directionURL.N}`,
      },
      actions: [
        {
          style: {
            height: '85px',
            width: '100px',
            right: 'calc(((100% - 627px) / 2) + 220px)',
            borderRadius: '100%',
            bottom: '200px',
          },
          painting: `/${placeURL.Table}/4`,
        },
        {
          style: {
            height: '85px',
            width: '100px',
            right: 'calc(((100% - 627px) / 2) + 70px)',
            borderRadius: '100%',
            bottom: '170px',
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
      left: {
        id: 188,
        link: `/${placeURL.Table_opposee}/${directionURL.NO}`,
      },
      right: {
        id: 182,
        link: `/${placeURL.Table_opposee}/${directionURL.NE}`,
      },
      actions: [
        {
          style: {
            height: '130px',
            width: '130px',
            left: 'calc(((100% - 627px) / 2) + 25px)',
            borderRadius: '100%',
            top: '355px',
          },
          painting: `/${autresURL.peinture}/210`,
        },
        {
          style: {
            height: '100px',
            width: '130px',
            left: 'calc(((100% - 627px) / 2) + 220px)',
            borderRadius: '100%',
            top: '370px',
          },
          painting: `/${autresURL.peinture}/208`,
        },
        {
          style: {
            height: '150px',
            width: '150px',
            right: 'calc(((100% - 627px) / 2) + 65px)',
            borderRadius: '100%',
            top: '345px',
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
      left: {
        id: 181,
        link: `/${placeURL.Table_opposee}/${directionURL.N}`,
      },
      right: {
        id: 183,
        link: `/${placeURL.Table_opposee}/${directionURL.E}`,
      },
      actions: [
        {
          style: {
            height: '150px',
            width: '150px',
            left: 'calc(((100% - 627px) / 2) + 40px)',
            borderRadius: '100%',
            top: '270px',
          },
          painting: `/${autresURL.peinture}/10`,
        },
        {
          style: {
            height: '120px',
            width: '110px',
            left: 'calc(((100% - 627px) / 2) + 240px)',
            borderRadius: '100%',
            top: '275px',
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
      left: {
        id: 182,
        link: `/${placeURL.Table_opposee}/${directionURL.NE}`,
      },
      right: {
        id: 184,
        link: `/${placeURL.Table_opposee}/${directionURL.SE}`,
      },
      actions: [
        {
          style: {
            height: '120px',
            width: '110px',
            left: 'calc(((100% - 627px) / 2) + 180px)',
            borderRadius: '100%',
            top: '300px',
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
      left: {
        id: 183,
        link: `/${placeURL.Table_opposee}/${directionURL.E}`,
      },
      right: {
        id: 185,
        link: `/${placeURL.Table_opposee}/${directionURL.S}`,
      },
      actions: [
        {
          style: {
            height: '100px',
            width: '100px',
            left: 'calc(((100% - 627px) / 2) + 250px)',
            borderRadius: '100%',
            bottom: '200px',
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
      left: {
        id: 184,
        link: `/${placeURL.Table_opposee}/${directionURL.SE}`,
      },
      right: {
        id: 186,
        link: `/${placeURL.Table_opposee}/${directionURL.SO}`,
      },
      actions: [
        {
          style: {
            height: '100px',
            width: '100px',
            left: 'calc(((100% - 627px) / 2) + 100px)',
            borderRadius: '100%',
            bottom: '150px',
          },
          painting: `/${placeURL.Table}/7`,
        },
        {
          style: {
            height: '100px',
            width: '100px',
            left: 'calc(((100% - 627px) / 2) + 260px)',
            borderRadius: '100%',
            bottom: '150px',
          },
          painting: `/${placeURL.Table}/6`,
        },
        {
          style: {
            height: '100px',
            width: '100px',
            right: 'calc(((100% - 627px) / 2) + 100px)',
            borderRadius: '100%',
            bottom: '150px',
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
      left: {
        id: 185,
        link: `/${placeURL.Table_opposee}/${directionURL.S}`,
      },
      right: {
        id: 187,
        link: `/${placeURL.Table_opposee}/${directionURL.O}`,
      },
      actions: [
        {
          style: {
            height: '100px',
            width: '100px',
            left: 'calc(((100% - 627px) / 2) + 150px)',
            borderRadius: '100%',
            bottom: '130px',
          },
          painting: `/${placeURL.Table}/5`,
        },
        {
          style: {
            height: '80px',
            width: '80px',
            right: 'calc(((100% - 627px) / 2) + 100px)',
            borderRadius: '100%',
            top: '250px',
          },
          painting: `/${autresURL.peinture}/8`,
        },
        {
          style: {
            height: '80px',
            width: '80px',
            right: 'calc(((100% - 627px) / 2) + 100px)',
            borderRadius: '100%',
            top: '365px',
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
      left: {
        id: 186,
        link: `/${placeURL.Table_opposee}/${directionURL.SO}`,
      },
      right: {
        id: 188,
        link: `/${placeURL.Table_opposee}/${directionURL.NO}`,
      },
      actions: [
        {
          style: {
            height: '80px',
            width: '80px',
            left: 'calc(((100% - 627px) / 2) + 120px)',
            borderRadius: '100%',
            top: '260px',
          },
          painting: `/${autresURL.peinture}/8`,
        },
        {
          style: {
            height: '80px',
            width: '80px',
            left: 'calc(((100% - 627px) / 2) + 120px)',
            borderRadius: '100%',
            top: '365px',
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
      left: {
        id: 187,
        link: `/${placeURL.Table_opposee}/${directionURL.O}`,
      },
      right: {
        id: 181,
        link: `/${placeURL.Table_opposee}/${directionURL.N}`,
      },
      actions: [
        {
          style: {
            height: '80px',
            width: '80px',
            left: 'calc(((100% - 627px) / 2) + 250px)',
            borderRadius: '100%',
            top: '340px',
          },
          painting: `/${autresURL.peinture}/205`,
        },
        {
          style: {
            height: '130px',
            width: '160px',
            right: 'calc(((100% - 627px) / 2) + 110px)',
            borderRadius: '100%',
            top: '330px',
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
      left: {
        id: 198,
        link: `/${placeURL.Vaches}/${directionURL.NO}`,
      },
      right: {
        id: 192,
        link: `/${placeURL.Vaches}/${directionURL.NE}`,
      },
      actions: [
        {
          style: {
            height: '125px',
            width: '125px',
            left: 'calc(((100% - 627px) / 2) + 63px)',
            borderRadius: '100%',
            top: '340px',
          },
          painting: `/${autresURL.peinture}/310`,
        },
        {
          style: {
            height: '115px',
            width: '168px',
            right: 'calc(((100% - 627px) / 2) + 165px)',
            borderRadius: '100%',
            top: '240px',
          },
          painting: `/${autresURL.peinture}/77`,
        },
        {
          style: {
            height: '115px',
            width: '165px',
            right: 'calc(((100% - 627px) / 2) + 165px)',
            borderRadius: '100%',
            top: '403px',
          },
          painting: `/${autresURL.peinture}/76`,
        },
        {
          style: {
            height: '110px',
            width: '92px',
            right: 'calc(((100% - 627px) / 2) + 7px)',
            borderRadius: '100%',
            top: '265px',
          },
          painting: `/${autresURL.peinture}/94`,
        },
        {
          style: {
            height: '110px',
            width: '86px',
            right: 'calc(((100% - 627px) / 2) + 7px)',
            borderRadius: '100%',
            top: '400px',
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
      left: {
        id: 191,
        link: `/${placeURL.Vaches}/${directionURL.N}`,
      },
      right: {
        id: 193,
        link: `/${placeURL.Vaches}/${directionURL.E}`,
      },
      actions: [
        {
          style: {
            height: '110px',
            width: '140px',
            left: 'calc(((100% - 627px) / 2) + 138px)',
            borderRadius: '100%',
            top: '240px',
          },
          painting: `/${autresURL.peinture}/94`,
        },
        {
          style: {
            height: '114px',
            width: '130px',
            left: 'calc(((100% - 627px) / 2) + 143px)',
            borderRadius: '100%',
            top: '373px',
          },
          painting: `/${autresURL.peinture}/84`,
        },
        {
          style: {
            height: '125px',
            width: '65px',
            left: 'calc(((100% - 627px) / 2) + 318px)',
            borderRadius: '100%',
            top: '310px',
          },
          painting: `/${autresURL.peinture}/69`,
        },
        {
          style: {
            height: '65px',
            width: '38px',
            right: 'calc(((100% - 627px) / 2) + 188px)',
            borderRadius: '100%',
            top: '300px',
          },
          painting: `/${autresURL.peinture}/82`,
        },
        {
          style: {
            height: '65px',
            width: '38px',
            right: 'calc(((100% - 627px) / 2) + 190px)',
            borderRadius: '100%',
            top: '380px',
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
      left: {
        id: 192,
        link: `/${placeURL.Vaches}/${directionURL.NE}`,
      },
      right: {
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
      left: {
        id: 193,
        link: `/${placeURL.Vaches}/${directionURL.E}`,
      },
      right: {
        id: 195,
        link: `/${placeURL.Vaches}/${directionURL.S}`,
      },
      actions: [
        {
          style: {
            height: '90px',
            width: '130px',
            right: 'calc(((100% - 627px) / 2) + 225px)',
            borderRadius: '100%',
            top: '215px',
          },
          painting: `/${autresURL.peinture}/116`,
        },
        {
          style: {
            height: '105px',
            width: '130px',
            right: 'calc(((100% - 627px) / 2) + 227px)',
            borderRadius: '100%',
            top: '345px',
          },
          painting: `/${autresURL.peinture}/118`,
        },
        {
          style: {
            height: '75px',
            width: '114px',
            right: 'calc(((100% - 627px) / 2) + 240px)',
            borderRadius: '100%',
            bottom: '271px',
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
      left: {
        id: 194,
        link: `/${placeURL.Vaches}/${directionURL.SE}`,
      },
      right: {
        id: 196,
        link: `/${placeURL.Vaches}/${directionURL.SO}`,
      },
      actions: [
        {
          style: {
            height: '240px',
            width: '240px',
            right: 'calc(((100% - 627px) / 2) + 240px)',
            borderRadius: '100%',
            top: '270px',
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
      left: {
        id: 195,
        link: `/${placeURL.Vaches}/${directionURL.S}`,
      },
      right: {
        id: 197,
        link: `/${placeURL.Vaches}/${directionURL.O}`,
      },
      actions: [
        {
          style: {
            height: '180px',
            width: '100px',
            left: 'calc(((100% - 627px) / 2) + 180px)',
            borderRadius: '100%',
            top: '300px',
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
      left: {
        id: 196,
        link: `/${placeURL.Vaches}/${directionURL.SO}`,
      },
      right: {
        id: 198,
        link: `/${placeURL.Vaches}/${directionURL.NO}`,
      },
      actions: [
        {
          style: {
            height: '73px',
            width: '40px',
            right: 'calc(((100% - 627px) / 2) + 155px)',
            borderRadius: '100%',
            top: '305px',
          },
          painting: `/${autresURL.peinture}/316`,
        },
        {
          style: {
            height: '73px',
            width: '40px',
            right: 'calc(((100% - 627px) / 2) + 157px)',
            borderRadius: '100%',
            top: '382px',
          },
          painting: `/${autresURL.peinture}/108`,
        },
        {
          style: {
            height: '65px',
            width: '38px',
            right: 'calc(((100% - 627px) / 2) + 110px)',
            borderRadius: '100%',
            top: '365px',
          },
          painting: `/${autresURL.peinture}/71`,
        },
        {
          style: {
            height: '115px',
            width: '80px',
            right: 'calc(((100% - 627px) / 2) + 7px)',
            borderRadius: '100%',
            top: '265px',
          },
          painting: `/${autresURL.peinture}/79`,
        },
        {
          style: {
            height: '100px',
            width: '75px',
            right: 'calc(((100% - 627px) / 2) + 10px)',
            borderRadius: '100%',
            top: '400px',
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
      left: {
        id: 197,
        link: `/${placeURL.Vaches}/${directionURL.O}`,
      },
      right: {
        id: 191,
        link: `/${placeURL.Vaches}/${directionURL.N}`,
      },
      actions: [
        {
          style: {
            height: '68px',
            width: '35px',
            left: 'calc(((100% - 627px) / 2) + 136px)',
            borderRadius: '100%',
            top: '305px',
          },
          painting: `/${autresURL.peinture}/316`,
        },
        {
          style: {
            height: '68px',
            width: '35px',
            left: 'calc(((100% - 627px) / 2) + 136px)',
            borderRadius: '100%',
            top: '375px',
          },
          painting: `/${autresURL.peinture}/108`,
        },
        {
          style: {
            height: '58px',
            width: '37px',
            left: 'calc(((100% - 627px) / 2) + 176px)',
            borderRadius: '100%',
            top: '360px',
          },
          painting: `/${autresURL.peinture}/71`,
        },
        {
          style: {
            height: '105px',
            width: '90px',
            left: 'calc(((100% - 627px) / 2) + 233px)',
            borderRadius: '100%',
            top: '260px',
          },
          painting: `/${autresURL.peinture}/79`,
        },
        {
          style: {
            height: '90px',
            width: '80px',
            left: 'calc(((100% - 627px) / 2) + 235px)',
            borderRadius: '100%',
            top: '382px',
          },
          painting: `/${autresURL.peinture}/81`,
        },
        {
          style: {
            height: '130px',
            width: '147px',
            right: 'calc(((100% - 627px) / 2) + 102px)',
            borderRadius: '100%',
            top: '327px',
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
      left: {
        id: 208,
        link: `/${placeURL.Video}/${directionURL.NO}`,
      },
      right: {
        id: 202,
        link: `/${placeURL.Video}/${directionURL.NE}`,
      },
      actions: [
        {
          style: {
            height: '70px',
            width: '76px',
            left: 'calc(((100% - 627px) / 2) + 129px)',
            borderRadius: '100%',
            top: '315px',
          },
          painting: `/${autresURL.peinture}/316`,
        },
        {
          style: {
            height: '70px',
            width: '79px',
            left: 'calc(((100% - 627px) / 2) + 129px)',
            borderRadius: '100%',
            top: '392px',
          },
          painting: `/${autresURL.peinture}/108`,
        },
        {
          style: {
            height: '50px',
            width: '65px',
            left: 'calc(((100% - 627px) / 2) + 228px)',
            borderRadius: '100%',
            top: '375px',
          },
          painting: `/${autresURL.peinture}/71`,
        },
        {
          style: {
            height: '70px',
            width: '86px',
            right: 'calc(((100% - 627px) / 2) + 225px)',
            borderRadius: '100%',
            top: '310px',
          },
          painting: `/${autresURL.peinture}/79`,
        },
        {
          style: {
            height: '65px',
            width: '75px',
            right: 'calc(((100% - 627px) / 2) + 228px)',
            borderRadius: '100%',
            top: '390px',
          },
          painting: `/${autresURL.peinture}/81`,
        },
        {
          style: {
            height: '60px',
            width: '60px',
            right: 'calc(((100% - 627px) / 2) + 125px)',
            borderRadius: '100%',
            top: '360px',
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
      left: {
        id: 201,
        link: `/${placeURL.Video}/${directionURL.N}`,
      },
      right: {
        id: 203,
        link: `/${placeURL.Video}/${directionURL.E}`,
      },
      actions: [
        {
          style: {
            height: '60px',
            width: '65px',
            left: 'calc(((100% - 627px) / 2) + 110px)',
            borderRadius: '100%',
            top: '335px',
          },
          painting: `/${autresURL.peinture}/310`,
        },
        {
          style: {
            height: '45px',
            width: '55px',
            left: 'calc(((100% - 627px) / 2) + 200px)',
            borderRadius: '100%',
            top: '305px',
          },
          painting: `/${autresURL.peinture}/77`,
        },
        {
          style: {
            height: '45px',
            width: '53px',
            left: 'calc(((100% - 627px) / 2) + 200px)',
            borderRadius: '100%',
            top: '363px',
          },
          painting: `/${autresURL.peinture}/76`,
        },
        {
          style: {
            height: '45px',
            width: '43px',
            left: 'calc(((100% - 627px) / 2) + 268px)',
            borderRadius: '100%',
            top: '363px',
          },
          painting: `/${autresURL.peinture}/84`,
        },
        {
          style: {
            height: '45px',
            width: '43px',
            left: 'calc(((100% - 627px) / 2) + 270px)',
            borderRadius: '100%',
            top: '312px',
          },
          painting: `/${autresURL.peinture}/94`,
        },
        {
          style: {
            height: '260px',
            width: '155px',
            right: 'calc(((100% - 627px) / 2) + 68px)',
            borderRadius: '100%',
            top: '270px',
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
      left: {
        id: 202,
        link: `/${placeURL.Video}/${directionURL.NE}`,
      },
      right: {
        id: 204,
        link: `/${placeURL.Video}/${directionURL.SE}`,
      },
      actions: [
        {
          style: {
            height: '205px',
            width: '118px',
            left: 'calc(((100% - 627px) / 2) + 85px)',
            borderRadius: '100%',
            top: '285px',
          },
          painting: `/${autresURL.peinture}/428`,
        },
        {
          style: {
            height: '150px',
            width: '93px',
            right: 'calc(((100% - 627px) / 2) + 125px)',
            borderRadius: '100%',
            top: '328px',
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
      left: {
        id: 203,
        link: `/${placeURL.Video}/${directionURL.E}`,
      },
      right: {
        id: 205,
        link: `/${placeURL.Video}/${directionURL.S}`,
      },
      actions: [
        {
          style: {
            height: '200px',
            width: '125px',
            left: 'calc(((100% - 627px) / 2) + 55px)',
            borderRadius: '100%',
            top: '288px',
          },
          painting: `/${autresURL.peinture}/675`,
        },
        {
          style: {
            height: '80px',
            width: '50px',
            right: 'calc(((100% - 627px) / 2) + 250px)',
            borderRadius: '100%',
            top: '347px',
          },
          painting: `/${autresURL.peinture}/228`,
        },
        {
          style: {
            height: '83px',
            width: '65px',
            right: 'calc(((100% - 627px) / 2) + 170px)',
            borderRadius: '100%',
            top: '353px',
          },
          painting: `/${autresURL.peinture}/222`,
        },
        {
          style: {
            height: '70px',
            width: '80px',
            right: 'calc(((100% - 627px) / 2) + 75px)',
            borderRadius: '100%',
            top: '367px',
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
      left: {
        id: 204,
        link: `/${placeURL.Video}/${directionURL.SE}`,
      },
      right: {
        id: 206,
        link: `/${placeURL.Video}/${directionURL.SO}`,
      },
      actions: [
        {
          style: {
            height: '65px',
            width: '88px',
            left: 'calc(((100% - 627px) / 2) + 160px)',
            borderRadius: '100%',
            top: '353px',
          },
          painting: `/${autresURL.peinture}/227`,
        },
        {
          style: {
            height: '150px',
            width: '95px',
            left: 'calc(((100% - 627px) / 2) + 300px)',
            borderRadius: '100%',
            top: '353px',
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
      left: {
        id: 205,
        link: `/${placeURL.Video}/${directionURL.S}`,
      },
      right: {
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
      left: {
        id: 206,
        link: `/${placeURL.Video}/${directionURL.SO}`,
      },
      right: {
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
      left: {
        id: 207,
        link: `/${placeURL.Video}/${directionURL.O}`,
      },
      right: {
        id: 201,
        link: `/${placeURL.Video}/${directionURL.N}`,
      },
      actions: [],
      mouvement: false,
      mouvementLink: '#',
    },
  },
};
