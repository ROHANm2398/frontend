import React from 'react'
import { Link } from 'react-router-dom';
import ReactStars from 'react-rating-stars-component';
import Home from "./Home"

const  options={
    edit :false,
    color:"rgba(20,20,20,0.1)",
    activeColor: "tomato",
    size : window.innerWidth <600 ? 20:25,
    value:2.5,
    ishalf :true,
};

const Designer = ({designer}) => {
    
  return (
      <Link classname="designerCard" to={designer.name}>
          <img src={designer.image[0].url} alt={designer.name} />
        <p>{designer.name}</p>
        <p>Qualification:-{designer.qualification}</p>
        <p>Experience:-{designer.experience}</p>
        <p>Specialization:-{designer.specialization}</p>
        
        <div>
            <ReactStars {...options} /> <span >(25 reviews)</span>
        </div>
        {/* <span>{designer.experience}</span> */}

      </Link>
  )

  
};

export default Designer