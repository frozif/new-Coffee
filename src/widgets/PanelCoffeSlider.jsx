// ---------------------------

import { useContext } from "react"
import { MyContext } from "../app/context/MyContext"
// ---------------------------

function PanelCoffeSlider(){
const {
  ArabicaCoffee,
   ArabicaCoffeeDecaf,
   RobustaCoffeeDecaf,
   RobustaCoffee} = useContext(MyContext)
// ---------------------------
// card function

const card = (srcType, coffeeType, price)=>{
  
return (
                  <div className="panel_info_Right_Card panel_Coffe_slider_Card">
                  <img  className='panel_info_Right_Card_img panel_Coffe_slider_Card_img' src={srcType} alt="картинка карточки" />
                  <div className="panel_info_Right_Card_txt panel_Coffe_slider_Card_txt">
                    <p className="panel_info_Right_Card_title panel_Coffe_slider_Card_title">
{coffeeType}
                    </p>
                    <p className="panel_info_Right_Card_price panel_Coffe_slider_Card_price">
 <span className='panel_info_Right_Card_price_span panel_Coffe_slider_Card_span'>$</span>{price}
                    </p>
                  </div>
                </div>
)
}
// ---------------------------

return (
  <>
              <div className="panel_Coffe_slider_main_title">
<h2>Find the Coffee for You</h2>
    </div>
        <section className="panel_Coffe_slider">
          <div className="container">
   <div className="panel_Coffe_slider_main">
    <div className="panel_Coffe_slider_Cards">
      {card(ArabicaCoffee, 'Arabica Espresso', '44.00')}
      {card(ArabicaCoffeeDecaf, 'Arabica  decaf', '35.00')}
      {card(RobustaCoffee, 'Robusta Espresso', '35.00')}
      {card(RobustaCoffeeDecaf, 'Robusta Decaf', '44.00')}
    </div>
    </div>            
          </div>
        </section>
  </>
)
}

export default PanelCoffeSlider
