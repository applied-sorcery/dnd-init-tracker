import uuid from 'react-native-uuid';

//Action Type
export const ADD_1 = 'ADD_1';
export const REMOVE_MONSTER = 'REMOVE_MONSTER';
export const LOAD_MONSTERS = 'LOAD_MONSTERS';

//Action Creator
export const addMonster = (monsterId) => ({type: ADD_1, payload: monsterId});

export const loadMonsters = (monsterList) => ({
  type: LOAD_MONSTERS,
  payload: monsterList,
});

export const removeMonster = (monsterId) => ({
  type: REMOVE_MONSTER,
  payload: monsterId,
});
//Initial State
const initialState = {allMonsters: [], combatants: []};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_1:
      console.log('ADD_1', state.allMonsters[0]);
      let newMonsters = state.allMonsters.map((monster) =>
        monster.id == action.payload
          ? {...monster, quantity: (monster.quantity += 1)}
          : monster,
      );

      let newCombatants = newMonsters.filter((monster) => monster.quantity > 0);

      return {
        ...state,
        allMonsters: newMonsters,
        combatants: newCombatants,
      };

    case LOAD_MONSTERS:
      console.log('LOAD_MONSTERS');
      return {
        ...state,
        allMonsters: action.payload.map((monster) => ({
          ...monster,
          id: uuid.v4(),
          quantity: 0,
        })),
      };

    case REMOVE_MONSTER:
      return {
        ...state,
        allMonsters: state.allMonsters.map((monster) =>
          monster.id == action.payload
            ? {...monster, quantity: (monster.quantity -= 1)}
            : monster,
        ),

        combatants: state.allMonsters.filter((monster) => monster.quantity > 0),
      };

    default:
      return state;
  }
};

export default rootReducer;
