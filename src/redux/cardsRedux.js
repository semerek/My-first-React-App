import shortid from 'shortid';

// wybieranie cards z danej kolumny
export const getCardsForColumn = ({cards}, columnId) => cards.filter(card => card.columnId == columnId);
export const getCardsForSearchResult =({cards}, searchString) => cards.filter(card => new RegExp(searchString, 'i').test(card.title));

// tworzenie nazw akcji
const reducerName = 'cards';
const createActionName = name => `app/${reducerName}/${name}`;

// definiowanie akcji
export const ADD_CARD = createActionName('ADD_CARD');

// funkcja tworząca akcję (type, payload)
export const createActionAddCard = payload => ({ payload: { ...payload, id: shortid.generate() }, type: ADD_CARD });

// reducer
export default function reducer(state = [], action = {}) {
  switch (action.type) {
    case ADD_CARD:
      return [...state, action.payload];
    default:
      return state;
  }
}
