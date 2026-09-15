// import 

import { useContext } from "react"
import { MyContext } from "@/app/context/MyContext"
// ---------------------------

function PanelInfo(){

const {
  panel_info_left_Vector,
   btnArrow,
   ArabicaCoffee, 
  RobustaCoffee} = useContext(MyContext)

return (
  <>
          <div className="panel"></div>
        <section className='panel_info'>
          <div className="container">
            <div className="panel_info_main">
              <div className="panel_info_left">
             <div className="panel_info_left_Up">
  
              <h2 className='panel_info_left_Up_title'>Our blends deliver on the promise of balance and consistency, roasted to maximize sweetness.</h2>
              <p className='panel_info_left_Up_subtitle'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <img className='panel_info_left_Up_design'  src={panel_info_left_Vector} alt="дизайн для панели" />
             </div>
<div className="panel_info_left_down">
  <p>View More</p>
  <button type="button"><img src={btnArrow} alt="кнопка указатель" /></button>
</div>
              </div>
              <div className="panel_info_Right">
               <div className="panel_info_Right_Cards">
                <div className="panel_info_Right_Card">
                  <img  className='panel_info_Right_Card_img' src={ArabicaCoffee} alt="картинка карточки" />
                  <div className="panel_info_Right_Card_txt">
                    <p className="panel_info_Right_Card_title">
Arabica Espresso
                    </p>
                    <p className="panel_info_Right_Card_price">
 <span className='panel_info_Right_Card_price_span'>$</span>44.00
                    </p>
                  </div>
                </div>
                          <div className="panel_info_Right_Card">
                  <img  className='panel_info_Right_Card_img' src={RobustaCoffee} alt="картинка карточки" />
                  <div className="panel_info_Right_Card_txt">
                    <p className="panel_info_Right_Card_title">
Robusta Espresso
                    </p>
                    <p className="panel_info_Right_Card_price">
 <span className='panel_info_Right_Card_price_span'>$</span>35.00
                    </p>
                  </div>
                </div>
               </div>
              
              </div>
            </div>
          </div>
        </section>
        </>
)
}


export default PanelInfo