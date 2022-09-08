import React from 'react'

const LanguageContext = React.createContext({
  activeLanguage: 'TM',
  changeLanguage: () => {},
})

export default LanguageContext
