import { pipe } from "fp-ts/lib/function";
import { makeAtom } from "molecule/dist/atom";
import { makeAtomReducer } from "molecule/dist/atom-reducer";
import { match } from 'ts-adt'


type ClickAction = 
  | { _type: 'set', value: number}
  | { _type: 'increment' }
  | { _type: 'decrement' }

const [clickCount_, dispatch] = makeAtomReducer(0)<ClickAction>((a, s) => 
{
  console.log('got action:', a, s)
  return pipe(a, match({
    decrement: () => {
      console.log()
      return s - 1
    },
    increment: () => {
      console.log('incrementing?')
      return s + 1}
      ,
    set: ({value}) => value
  }))
})

export const clickCount = clickCount_
export const incrementClickCount = dispatch({ _type: 'increment' })
export const decrementClickCount = dispatch({ _type: 'decrement' })
export const setClickCount = (value: number) => dispatch({ _type: 'set', value })