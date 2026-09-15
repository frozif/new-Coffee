// ---------------------------

import { useContext, useState } from "react";
import { MyContext } from "../app/context/MyContext";

// ---------------------------

function NavPanels(){

  const [burgerMenuOpen, setBurgerMenuOpen] = useState(false)
const {line, logoNav}= useContext(MyContext)

// ---------------------------

  function scroll(where){
        let reserve = document.querySelector(".panel_Reserve");
      let blog = document.querySelector("footer");
      let home = document.querySelector('header');
      let page = document.querySelector('.panel_info')

let scrollArr = [reserve, blog, home, page]

  scrollArr[where].scrollIntoView({
    behavior: 'smooth'
  })
}

// ---------------------------


function  burgerBtn (setBurgerMenuOpen, type){
  return (
      <button className={`burger_btn ${type} ${burgerMenuOpen ? "open" : ""}`}
  onClick={()=>setBurgerMenuOpen(!burgerMenuOpen)}
  type="button">
    <span className='burger_bar burger_bar_top'></span>
    <span className='burger_bar burger_bar_mid'></span>
    <span className='burger_bar burger_bar_bot'></span>

  </button>
  )
}


return (
   <>
        <div className='nav_up'></div>
          <nav className="nav">
            <div className="container">
  <div className="nav_Main">
  <div className="burger_menu">
   {burgerBtn(setBurgerMenuOpen, '')}
         <div
          className={`burger_overlay  ${burgerMenuOpen ? "open" : ""}`}
          onClick={() => setBurgerMenuOpen(false)}
        ></div>
  
                <div className={`nav_burger_panel ${burgerMenuOpen ? 'open' : ''}`}>
        {burgerBtn(setBurgerMenuOpen, 'burger_btn_panel')}
                              <div className="nav_Panel_left">
                <div className="nav_info">
                  <button type='button'  onClick={()=>{scroll(2)}}>Home</button>
                  <img src={line} alt="стиль для nav_info" />
                </div>
                <div className="nav_info">
                  <button type='button' onClick={()=>{scroll(3)}}  >Pages</button>
                  <img src={line} alt="стиль для nav_info" />
                </div>
                <div className="nav_info">
                  <button type='button'  onClick={()=>{scroll(0)}}>Reserve</button>
                  <img src={line} alt="стиль для nav_info" />
                </div>
                <div className="nav_info">
                  <button type='button'  onClick={(event)=>{
                        event.preventDefault();
                    scroll(1)}}>Blog</button>
                  <img src={line} alt="стиль для nav_info" />
                </div>
              </div>
              <div className="nav_Panel_Center">
                <img src={logoNav} alt="логотип nav" />
              </div>
  </div>
  </div>
  </div>
            </div>
  
          </nav>
          </>
)
}

export default NavPanels