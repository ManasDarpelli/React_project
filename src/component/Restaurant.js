import React, { useState } from "react";
// import Menucard from './Menucard'
import "./Style.css";
import TinderCard from "react-tinder-card";


const Restaurant = ({items}) => {

  const swiped = (direction, nameToDelete) => {
    console.log("removing: " + nameToDelete);
    // setLastDirection(direction);
}
const outOfFrame = (name) => {
    console.log(name + " left the screen");
    // setLastOutOfFrame(nameToDelete);
}
const onSwipe = (direction) => {
  console.log('You swiped: ' + direction)
}

const onCardLeftScreen = (myIdentifier) => {
  console.log(myIdentifier + ' left the screen')
}
  return(
    <div className="card-container">
      {
        items.map((item) =>{
          return(
            
          <>
            <TinderCard className="swipe"
            key={item.name}
            preventSwipe={['up', 'down']}
            onSwipe={(dir) => swiped(dir, item.name)}
            onCardLeftScreen={() => outOfFrame(item.name)}>
                   <div className="card" style={{backgroundImage: `url(${item.image})`}}>
                   <h1 style={{textAlign:"center"}}>{item.name}</h1>
                   <p style={{}}>{item.description}</p>
                  </div>
          </TinderCard>
          
          </>
          
          
          
            
          )
        })
      }
    </div> 
  )
  
}

export default Restaurant;

{/* <div className="card">
          <span className="card-no">1</span>
          <span className="card-author">Breakfast</span>
          <h2 className="card-title">Maggi</h2>
          <span className="card-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
            nesciunt asperiores possimus iste harum quas nihil, tempora delectus
            odit ratione odio minus. Consectetur dolore eos deserunt nobis
            sapiente consequatur veritatis.
          </span>
          <span className="card-read"></span>
          <img src="./image.jpg" alt="human error" className="card-media" />
          <span className="card-tag">Order Now</span>
        </div> */}

        // {
        //   items.map((item) =>{
        //     return (
  
        //       <TinderCard
        //         className="swipe"
        //         key={item.name}
        //         preventSwipe={['up', 'down']}
        //         onSwipe={(dir) => swiped(dir, item.name)}
        //         onCardLeftScreen={() => outOfFrame(item.name)}
        //         >
        //         <div className="card" style={{backgroundImage: `url(${item.image})`}}>
        //           <h1 style={{textAlign:"center"}}>{item.name}</h1>
        //           <p style={{}}>{item.description}</p>
        //           </div>
              
        //    </TinderCard>
        //   )
        //   })
        // }