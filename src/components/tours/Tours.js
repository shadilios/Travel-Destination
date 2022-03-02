import React from "react";

function Tours(props){
  return(
    <>
    {
      props.tours.map(oneTour =>{
        return(
          <div>
            
            
            <h3>Name: {oneTour.name}</h3>
            
            <img width={"275px"} src={oneTour.image} alt=""/>
            
            <hr />
          </div>
        )
        
      })
    }
    </>
  )
}

export default Tours;