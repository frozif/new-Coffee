function PanelFoodMenu(){
// ---------------------------
// PanelFoodMenu function

const foodMenu = (foodName, foodPrice) =>{

return (
    <li>
      <span className="item_name">{foodName}</span>
      <span className="dots"></span>
      <span className="price">{foodPrice}</span>
    </li>
)
}


// ---------------------------

return (
          <section className="panel_Food_menu">
          <div className="container">
            <div className="panel_Food_menu_main">
<div className="panel_Food_menu_left">
  <ul className="panel_Food_menu_list">
    {foodMenu('cake', '12.00$')}
    {foodMenu('cheesecake', '10.00$')}
    {foodMenu('pie', '9.00$')}
    {foodMenu('pudding', '6.00$')}
    {foodMenu('croissant', '7.00$')}
    {foodMenu('muffins', '4.00$')}
  </ul>
</div>
 <div className="panel_Food_menu_right">
 </div>
            </div>
          </div>
        </section>
)
}


export default PanelFoodMenu

