import { useReducer } from '@wi2/hooks-plus'
import reducer, { initReducer } from './reducer'
import { StateList } from './interfaces'

// declare helper methods
const addTolist = (_: StateList, dispatch: any, [action]: any[]) => {
  dispatch(action)
}

const removeTolist = (_: StateList, dispatch: any, ids: string[]) => {
  dispatch({ type: 'REMOVE', ids })
}

const updateTolist = (_: StateList, dispatch: any, [action]: any[]) => {
  dispatch({ type: 'UPDATE', ...action })
}


// the custom hooks
export function useListDefault(initialForm: StateList = [], config: any, methods: any[] = []): any[] {
  return useReducer(reducer, initialForm, config, methods, initReducer)
}

function useList(initState = [], config: any, helpers = []): any[] {
  const hook = useListDefault(initState, config, [addTolist, removeTolist, updateTolist, ...helpers])
  hook.splice(1, 1) // remove dispatch
  return hook
}

export default useList
