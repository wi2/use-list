import guid from './guid'
import { CLEAN, REMOVE, UPDATE } from './constants'
import { StateList, ActionList } from './interfaces'

function getDefaultProps() {
  const currentDate = new Date()
  return {
    _id: guid(),
    _createdAt: currentDate,
    _updatedAt: currentDate,
  }
}

export function initReducer(initial: any) {
  return Object.keys(initial).reduce((p, c) => ({
    ...p,
    [c]: {
      ...getDefaultProps(),
      ...initial[c],
    },
  }), {})
}

function reducer(state: StateList, { type, ids, id, atIndex, ...action }: ActionList): StateList {
  switch (type) {
    case CLEAN: return []
    case REMOVE: return ids ? state.filter(item => !ids.includes(item._id)) : state
    case UPDATE:
      const index = state.findIndex(item => item._id === id)
      if (index < 0) {
        return state
      }
      const currentDate = new Date()
      return [
        ...state.slice(0, index),
        { ...state[index], ...action, _updatedAt: currentDate },
        ...state.slice(index + 1)
      ]
    // ADD
    default:
      const item = { ...getDefaultProps(), ...action }
      if (atIndex) {
        return [
          ...state.slice(0, atIndex),
          item,
          ...state.slice(atIndex)
        ]
      }
      return [...state, item]
  }
}

export default reducer
