// import

import { useState } from "react";
import api from "@/shared/api";

// ---------------------------

function  PanelReserve (){
// ---------------------------
// ---------------------------
// state 
  const [reserveInfoMain, setReserveInfoMain] = useState([])
  const [reserveInfo, setReserveInfo] = useState({
    date: '',
  time: '',
  person: 1
})

const [showError, setShowError] = useState(false)
// ---------------------------
// function 




function reserve (type, value){
setReserveInfo(prev=> ({...prev, [type]: value}))
}

return (
   <section className='panel_Reserve'>
  <div className="container">
    <div className="panel_Reserve_main">
      <h2>Reserve Your Table</h2>
    <div className="panel_Reserve_form_panel">
    <div className='panel_Reserve_form_panel_date'>
       <input 
       name='date' 
       value={reserveInfo.date}
     min={new Date().toISOString().split('T')[0]}
       type="date" 
             onChange={(event)=> reserve('date', event.target.value)}
     />
          { showError && !reserveInfo.date.trim() &&    <p className='panel_Reserve_form_panel_date_txt'>Please fill this field</p> }
    </div>
        <select 
        name='person'
        value={reserveInfo.person}
        onChange={(event)=> reserve('person', Number(event.target.value))}
        >
        <option value="1">
        1 person
       </option>
             <option value="2">
        2 person
       </option>
            <option value="3">
        3 person
       </option>
             <option value="4">
        4 person
       </option>
     </select>
    <div className='panel_Reserve_form_panel_date'>
       <input
     value={reserveInfo.time}
      type="time" 
              name='time'
        onChange={(event)=> reserve('time', event.target.value)}
      /> 
       { showError == true && !reserveInfo.time.trim() &&    <p className='panel_Reserve_form_panel_date_txt'>Please fill this field</p>}
    </div>
               
     <button type='button'
     onClick={()=>{
        if (!reserveInfo.date.trim() || !reserveInfo.time.trim() ) {
    setShowError(true);
    return;
  }
  setShowError(false);

api.addReserve(reserveInfo)

.then(response =>  setReserveInfoMain(prev => [...prev, response.reserveInfo]))
}}
     >BOOK A TABLE</button>
    </div>
    </div>
  </div>
 </section>
)


}


export default PanelReserve