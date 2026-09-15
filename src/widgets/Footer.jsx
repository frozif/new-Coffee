// ---------------------------
// import

import { useContext } from "react"
import { MyContext } from "../app/context/MyContext"
function Footer(){
// ---------------------------


const {logofooter} =  useContext(MyContext)

// ---------------------------

return (
   <footer className='footer_panel'>
    <div className="container">
      <div className="footer_panel_main">
        <div className="footer_panel_left">
          <img src={logofooter} alt="лого footer " />
          <div className="footer_panel_left_txt">
     <p>Address:</p>
    <p>Email:</p>
    <p>Phone:</p>
          </div>
        </div>
        <div className="footer_panel_right">
         <a href="#">Facebook</a>
                <a href="#">Twitter</a>
         <a href="#">Instagram</a>
        </div>
      </div>
    </div>
   </footer>
)
}

export default Footer