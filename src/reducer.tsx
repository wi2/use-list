import guid from './guid'
import { CLEAN, REMOVE, UPDATE } from './constants'
import { StateList, ActionList } from './interfaces'

function reducer(state: StateList, { type, ids, id, ...action }: ActionList): StateList {
  const currentDate = new Date()
  switch (type) {
    case CLEAN: return []
    case REMOVE: return ids ? state.filter(item => !ids.includes(item._id)) : state
    case UPDATE:
      const index = state.findIndex(item => item._id === id)
      if (index < 0) {
        return state
      }
      return [
        ...state.slice(0, index),
        { ...state[index], ...action, updatedAt: currentDate },
        ...state.slice(index + 1)
      ]
    default:
      return [
        ...state,
        {
          _id: guid(),
          createdAt: currentDate,
          updatedAt: currentDate,
          ...action,
        }]
  }
}

export default reducer
