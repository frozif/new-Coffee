// ---------------------------
// import

import PanelQuote from '@/widgets/PanelQuote'
import PanelFoodMenu from '@/widgets/PanelFoodMenu'
import PanelCoffeSlider from '@/widgets/PanelCoffeSlider'
import PanelReserve from '@/features/PanelReserve'
import Footer from '@/widgets/footer'
import NavPanels from '@/widgets/NavPanel'
import HeaderPanel from '@/widgets/HeaderPanel'
import PanelInfo from '@/widgets/PanelInfo'
import PanelReviews from '@/widgets/PanelReviews'
import PanelCoffeeMenu from '@/widgets/PanelCoffeeMenu'


function CoffeProjectMain(){


return (
     <div className="coffe_Project">
<NavPanels>

</NavPanels>
  <main>
      <HeaderPanel>

      </HeaderPanel>
      <PanelInfo>

      </PanelInfo>
   <PanelQuote>

   </PanelQuote>
      <PanelReviews>
        
      </PanelReviews>
<PanelFoodMenu>

</PanelFoodMenu>
<PanelCoffeSlider>

</PanelCoffeSlider>
<PanelCoffeeMenu>

</PanelCoffeeMenu>
<PanelReserve>
</PanelReserve>

  </main>
<Footer>
  
</Footer>
    </div>
)
}



export default  CoffeProjectMain