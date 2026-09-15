// ---------------------------
// import

import { useContext, useState } from "react"
import { MyContext } from "@/app/context/MyContext"
// ---------------------------
// function  

function PanelReviews(){
const [reviewsChoice, setReviewsChoice] = useState(1)
const {ArabicaCoffee} = useContext(MyContext)

const checkReviews = (number, txt)=>{
    return    reviewsChoice === number ?      <h2   key={reviewsChoice} className="panel_reviews_title_title">
                    {txt}
                    </h2> : ''
}


const commentator = (commentatorNumber, name)=>{
return                   reviewsChoice === commentatorNumber ? <p className="panel_reviews_commentator">
                     {name}
                    </p> : ''
}
// ---------------------------


return (
        <section className="panel_reviews">
            <div className="container">
              <div className="panel_reviews_main">
               <div className="panel_reviews_txt">
                
                    <div className="panel_reviews_left">
                  <div className="panel_reviews_left_up"> 
                    {checkReviews(1, 'Really good arabica coffee. Smooth taste, nice aroma, not bitter. Easy to brew and tastes great every morning. Highly recommend!' )}
           {checkReviews(2, 'Great coffee! Smooth, tasty, and smells really good. I drink it every morning.')}
           {checkReviews(3, 'Really nice coffee. Good taste, nice aroma, and not too bitter. Perfect for every day.')}
           {checkReviews(4, 'Tastes really good! Smooth and light with a nice smell. I would definitely buy it again.')}
                  </div>
                  <div className="panel_reviews_left_down">
                   {commentator(1, 'James')}
                   {commentator(2, 'Bob')} 
                   {commentator(3, 'Mark')} 
                   {commentator(4, 'Vlad')}  
                    <div className="panel_reviews_choice">
                      <input type="radio"
                       checked={reviewsChoice === 1}
                       onChange={()=>{
                        setReviewsChoice(1)
                       }}
                       />
                      <input type="radio"
                      checked={reviewsChoice ===2}
                       onChange={()=>{
                        setReviewsChoice(2)
                       }}
                       />
                      <input type="radio"
                            checked={reviewsChoice ===3 }
                       onChange={()=>{
                           setReviewsChoice(3)
                       }}
                       />
                      <input type="radio"
                           checked={reviewsChoice ===4}
                       onChange={()=>{
                         setReviewsChoice(4)
                       }}
                       />
                    </div>
                  </div>
                </div>
                <div className="panel_reviews_right">
                  <img src={ArabicaCoffee} alt="фото  коффе отзыва" />
                </div>
               </div>
              </div>
            </div>
          </section>
)
}


export default PanelReviews
















// return (
//         <section className="panel_reviews">
//             <div className="container">
//               <div className="panel_reviews_main">
//                <div className="panel_reviews_txt">
                
//                     <div className="panel_reviews_left">
//                   <div className="panel_reviews_left_up"> 
//                {reviewsChoice === 1 ?      <h2   key={reviewsChoice} className="panel_reviews_title_title">
//                       Really good arabica coffee. Smooth taste, nice aroma, not bitter. Easy to brew and tastes great every morning. Highly recommend!
//                     </h2> : ''}
//                {reviewsChoice === 2 ?      <h2  key={reviewsChoice} className="panel_reviews_title_title">
//                 Great coffee! Smooth, tasty, and smells really good. I drink it every morning.
//                     </h2> : ''}
//                            {reviewsChoice === 3 ?      <h2  key={reviewsChoice} className="panel_reviews_title_title">
//                     Really nice coffee. Good taste, nice aroma, and not too bitter. Perfect for every day.
//                     </h2> : ''}
//                             {reviewsChoice === 4 ?      <h2   key={reviewsChoice} className="panel_reviews_title_title">
//                      Tastes really good! Smooth and light with a nice smell. I would definitely buy it again.
//                     </h2> : ''}
                   
//                   </div>
//                   <div className="panel_reviews_left_down">
//                   {reviewsChoice === 1 ? <p className="panel_reviews_commentator">
//                       James
//                     </p> : ''}  
//                     {reviewsChoice === 2 ? <p className="panel_reviews_commentator">
//                       Bob
//                     </p> : ''}  
//                   {reviewsChoice === 3 ? <p className="panel_reviews_commentator">
//                       Mark
//                     </p> : ''}     
//                      {reviewsChoice === 4 ? <p className="panel_reviews_commentator">
//                       Vlad
//                     </p> : ''}  
//                     <div className="panel_reviews_choice">
//                       <input type="radio"
//                        checked={reviewsChoice === 1}
//                        onChange={()=>{
//                         setReviewsChoice(1)
//                        }}
//                        />
//                       <input type="radio"
//                       checked={reviewsChoice ===2}
//                        onChange={()=>{
//                         setReviewsChoice(2)
//                        }}
//                        />
//                       <input type="radio"
//                             checked={reviewsChoice ===3 }
//                        onChange={()=>{
//                            setReviewsChoice(3)
//                        }}
//                        />
//                       <input type="radio"
//                            checked={reviewsChoice ===4}
//                        onChange={()=>{
//                          setReviewsChoice(4)
//                        }}
//                        />
//                     </div>
//                   </div>
//                 </div>
//                 <div className="panel_reviews_right">
//                   <img src={ArabicaCoffee} alt="фото  коффе отзыва" />
//                 </div>
//                </div>
//               </div>
//             </div>
//           </section>
// )
// }


// export default PanelReviews