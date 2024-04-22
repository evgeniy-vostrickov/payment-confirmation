import React, { createContext, useCallback } from 'react'
import './App.css'
import Payment from './components/page/Payment'

export const CorrectCodeContext = createContext<string>('')

const App: React.FC = () => {
  const successfulConfirmation = useCallback(() => {
    console.log('Успех!')
  }, [])
  
  return (
    <CorrectCodeContext.Provider value="5432">
      <Payment successfulConfirmation={successfulConfirmation} timeOnTimer={10} />
    </CorrectCodeContext.Provider>
  )
}

export default App
