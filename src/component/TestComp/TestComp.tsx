import React from 'react'
export interface ITestComp {
  text: string
}
export const TestComp = ({ text }: ITestComp) => {
  return (
    <div className="a-especific-name font-bold text-3xl border border-red-500">
      This is test text: {text}!
    </div>
  )
}
