// selectors
export const getSearchString = ({searchString}) => searchString;
export const countVisibleCards = ({searchString,cards}) => cards.filter(card => new RegExp(searchString, 'i').test(card.title)).lenght;
export const countAllCards = ({cards}) => cards.lenght;



// action name creator

// actions types

// action creators

// reducer
export default function reducer(statePart = '', action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}

