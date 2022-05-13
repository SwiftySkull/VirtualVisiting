// ACTIONS TYPES

export const SELECTED_PAINTING_ID = 'SELECTED_PAINTING_ID';
export const UNSELECT_PAINTING = 'UNSELECT_PAINTING';
export const SAVE_PAINTING = 'SAVE_PAINTING';

// ACTIONS CREATORS

export const selectedPaintingId = (id) => ({
  type: SELECTED_PAINTING_ID,
  id,
});

export const unselectPainting = () => ({
  type: UNSELECT_PAINTING,
});

export const savePainting = (painting) => ({
  type: SAVE_PAINTING,
  painting,
});
