/** URL to get the images */
export const imageUrl = 'https://back.denise-margoni.fr/';

/** Array of the URLs type */
export const placeURL = {
  Bretagne: 'Bretagne', // 1
  Bureau: 'Bureau', // 2
  Couloir_gauche: 'Couloir_gauche', // 3
  Couloir_gauche_2: 'Couloir_gauche_2', // 4
  Entree: 'Entree', // 5
  Fernand: 'Fernand', // 6
  Machines: 'Machines', // 7
  Mannequin: 'Mannequin', // 8
  Mannequin_avant: 'Mannequin_avant', // 9
  Milieu: 'Milieu', // 10
  Orchestre: 'Orchestre', // 11
  Orchestre_milieu: 'Orchestre_milieu', // 12
  Orchestre_oppose: 'Orchestre_oppose', // 13
  Parfum: 'Parfum', // 14
  Portrait: 'Portrait', // 15
  Table: 'Table', // 16
  Table_entree: 'Table_entree', // 17
  Table_opposee: 'Table_opposee', // 18
  Vaches: 'Vaches', // 19
  Video: 'Video', // 20
};

/** Array of the orientations URLs */
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

/** Array for other elements URLs */
export const autresURL = {
  Affiches: 'Affiches',
  peinture: 'peinture',
  lecture: 'lecture',
  dessins_table: 'dessins-table',
};

/**
 * Convert a string into HTML code
 *
 * @param {string} text The text to translate into HTML
 * @returns The text in HTML format
 */
export function createMarkup(text) {
  return { __html: text };
}
