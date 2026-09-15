// ---------------------------
// import


import { useContext } from "react"
import { MyContext } from "../app/context/MyContext"; 
function HeaderPanel(){
// ---------------------------

const {headerRightImg} = useContext(MyContext)

// ---------------------------

return (
            <header className='header'>
            <div className="container">
              <div className="header_Main">
                <div className="header_left">
  
                </div>
                            <div className="header_Right">
                 <div className="header_right_Main">
                     <h1 className="header_Right_title">LIVE IN THE MOMENT</h1>
                  <img src={headerRightImg} alt="header Right Subtitle" />
                 </div>
                </div>
              </div>
            </div>
          </header>
)
}


export default HeaderPanel