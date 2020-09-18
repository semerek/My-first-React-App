import shortid from 'shortid';

// wybieranie cards z danej kolumny
export const getCardsForList = ({cards}, cardId) => cards.filter(card => card.listId == cardId);

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
