export const imageUrl = 'https://back.denise-margoni.fr/';

export const placeURL = {
  Bretagne: 'Bretagne', // 1                      OK
  Bureau: 'Bureau', // 2                          OK
  Couloir_gauche: 'Couloir_gauche', // 3          OK
  Couloir_gauche_2: 'Couloir_gauche_2', // 4      OK
  Entree: 'Entree', // 5                          OK
  Fernand: 'Fernand', // 6                        OK
  Machines: 'Machines', // 7                      OK
  Mannequin: 'Mannequin', // 8                    OK
  Mannequin_avant: 'Mannequin_avant', // 9        OK
  Milieu: 'Milieu', // 10                         OK
  Orchestre: 'Orchestre', // 11                   OK
  Orchestre_milieu: 'Orchestre_milieu', // 12     OK
  Orchestre_oppose: 'Orchestre_oppose', // 13     OK
  Parfum: 'Parfum', // 14                         OK
  Portrait: 'Portrait', // 15                     OK
  Table: 'Table', // 16                           OK
  Table_entree: 'Table_entree', // 17             OK
  Table_opposee: 'Table_opposee', // 18           OK
  Vaches: 'Vaches', // 19                         OK
  Video: 'Video', // 20                           OK
};

export const directionURL = {
  N: 'N',
  NE: 'NE',
  E: 'E',
  SE: 'SE',
  S: 'S',
  SO: 'SO',
  O: 'O',
  NO: 'NO',
};

export const autresURL = {
  Affiches: 'Affiches',
  peinture: 'peinture',
  lecture: 'lecture',
  dessins_table: 'dessins-table',
};

export function createMarkup(text) {
  return { __html: text };
}
