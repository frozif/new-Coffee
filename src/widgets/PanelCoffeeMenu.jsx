

function PanelCoffeeMenu (){
  
const coffeeMenu = (coffeeName, coffeePrice) =>{

return (
    <li>
      <span className="item_name">{coffeeName}</span>
      <span className="dots"></span>
      <span className="price">{coffeePrice}</span>
    </li>
)
}


return (
                <section className='panel_Food_menu'>
          <div className="container">
            <div className="panel_Food_menu_main  panel_Coffee_menu_main">
<div className="panel_Food_menu_left panel_Coffee_menu_left">
  <ul className="panel_Food_menu_list panel_Coffee_menu_list">
    {coffeeMenu('Espresso', '3.00$')}
    {coffeeMenu('Americano', '4.00$')}
    {coffeeMenu('Cappuccino', '2.00$')}
    {coffeeMenu('Latte', '4.00$')}
    {coffeeMenu('Raf', '2.00$')}
    {coffeeMenu('Macchiato', '5.00$')}
  </ul>
</div>
 <div className="panel_Food_menu_right panel_Coffee_menu_right">
 </div>
            </div>
          </div>
        </section>
)
}

export default PanelCoffeeMenu

