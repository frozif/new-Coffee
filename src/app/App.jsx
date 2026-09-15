import { useEffect, useState } from 'react'
// ------------------------
// ------------------------
// img 


// ------------------------
// ------------------------
// стили
// style 

import './style/navPanel.css' 
import './style/burgerMenu.css' 
import './style/header.css' 
import './style/panelInfo.css' 
import './style/panelQuote.css' 
import './style/panelReviews.css' 
import './style/menuPanel.css' 
import './style/panelCoffeSlider.css' 
import './style/panelReserve.css' 
import './style/footer.css' 
// ------------------------
// ------------------------
// jsx import
// import store from './reducer'  
// ------------------------
// ------------------------
// main css 
import '@/App.css'
// ------------------------
import  MyProvider from './context/MyContext'
import CoffeProjectMain from '@/pages/CoffeProjectMain'
function App() {
// ------------------------
// хуки 
// hooks

// ------------------------
// ------------------------
// функции 
// function



  return (
<MyProvider>
   <CoffeProjectMain>

   </CoffeProjectMain>
</MyProvider>
  )
}

export default App
