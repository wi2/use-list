# @wi2/use-list
Hooks to manage list

**Motivation**
- very light && performant (use smart hook from @wi2/hooks-plus)
- use generic list
- extends reducer with mixins method
- easy to use

## Install

```
npm install @wi2/use-list --save
```


## How to use it?

```jsx
import useList from '@wi2/use-list'

function MyComponent() {
  const initValue = []
  const options = {
    // smart: lodash.debounce,
  }
  const [state, add, remove, update] = useList(initValue, options) // custom list reducder
  // const [state, add, remove, update] = useList() // same in this example

  const input = useRef(null) // ref for add input text
  useEffect(() => {
    input.current.focus()
  }, [state.length])

  const onSubmit = e => {
    e.preventDefault()
    add({ task: input.current.value, done: false })
    input.current.value = ''
  }

  return (
    <>
      <h1>Todo List</h1>
      <ul>
        {state.map(({ _id, task, done }, index) => (
          <li key={_id}>
            <input type="checkbox" defaultChecked={done} onClick={() => update({ id: _id, done: !done })} />
            <input
              type="text"
              defaultValue={task} 
              onChange={e => update({ task: e.target.value, id: _id })} />
            <button onClick={() => remove(_id)}>X</button>
          </li>
        ))}
      </ul>
      <form onSubmit={onSubmit}>
        <input type="text" ref={input} />
        <input type="submit" value="Add" />
      </form>
    </>
}

```
