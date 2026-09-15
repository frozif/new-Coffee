import { createContext } from "react";


import headerLeftImg from '@/shared/assets/img/header_info_left.png'
import headerRightImg from '@/shared/assets/img/header_info_Right_Text.svg'
import panel_info_left_Vector from '@/shared/assets/img/designVector.svg'
import btnArrow from '@/shared/assets/img/button_arrow.svg'
import ArabicaCoffee from '@/shared/assets/img/CoffeImgArabica.png'
import RobustaCoffee from '@/shared/assets/img/RobustaCoffeImg.png'
import ArabicaCoffeeDecaf from '@/shared/assets/img/ArabicaCoffeeDecaf.png'
import RobustaCoffeeDecaf from '@/shared/assets/img/RobustaCoffeDecaf.png'
import logofooter from '@/shared/assets/img/coffee_logo_footer.svg'
import line from '@/shared/assets/img/line.svg'
import logoNav from '@/shared/assets/img/coffee_logo_nav.svg'

// ---------------------------


const MyContext = createContext(null)

export  { MyContext }

export default function MyProvider({ children }) {
    return (
        <MyContext.Provider value={{
             headerLeftImg,
              headerRightImg,
             panel_info_left_Vector,
             btnArrow,
             ArabicaCoffee,
             RobustaCoffee,
             ArabicaCoffeeDecaf,
             RobustaCoffeeDecaf,
             logofooter,
             line,
             logoNav
             }}>
            {children}
        </MyContext.Provider>
    );
}
