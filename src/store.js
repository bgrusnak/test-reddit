import { combineReducers, createStore } from 'redux';

import layout from './layout.json';

const defaultState = { scores: [0, 0], layout, hits: [], misses: [] };

// actions
export const fire = (x, y) => ({
  type: 'GAME_FIRE',
  x,
  y
});

export const resetGame = () => ({
  type: 'GAME_RESET'
});

const checkFired = (layout, x, y) => {
  return layout.layout.find((ship) => {
    return ship.positions.find(([posX, posY]) => {
      if (posX === x && posY === y) return true;
    });
  });
};

// reducers
export const game = (state = defaultState, action) => {
  switch (action.type) {
    case 'GAME_FIRE':
      const checkedShip = checkFired(state.layout, action.x, action.y);
      if (!!checkedShip) {
        const checked = checkedShip.ship;
        const shipTypes = { ...state.layout.shipTypes };
        const scores = [...state.scores];
        scores[0] += 1;
        shipTypes[checked] = {
          ...state.layout.shipTypes[checked],
          hits: state.layout.shipTypes[checked].hits + 1 || 1
        };
        return {
          ...state,
          scores,
          hits: [...state.hits, [action.x, action.y]],
          layout: {
            ...layout,
            shipTypes
          }
        };
      } else {
        return { ...state, misses: [...state.misses, [action.x, action.y]] };
      }
    case 'GAME_RESET':
      return defaultState;
    default:
      return state;
  }
};

export const reducers = combineReducers({
  game
});

// store.js
export function configureStore(initialState = {}) {
  const store = createStore(reducers, initialState);
  return store;
}

export const store = configureStore();
