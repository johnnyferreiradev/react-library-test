import './style.css'

import { useTranslation } from 'react-i18next'

import { ITestComp } from './types'

export const TestComp = ({ text }: ITestComp) => {
  const { t } = useTranslation()

  return (
    <div className="a-especific-name font-bold text-3xl border border-red-500">
      This is test text: {text}!{t('Hello world')}
    </div>
  )
}
