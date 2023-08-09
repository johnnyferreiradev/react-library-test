import './style.css'

import { ITestComp2 } from './types'

export const TestComp2 = ({ text }: ITestComp2) => {
  return (
    <div className="a-especific-name font-bold text-3xl border border-red-500">
      This is test text: {text}!
    </div>
  )
}
