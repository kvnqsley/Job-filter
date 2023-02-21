import React from "react";

const Job=(props)=>{
    const data=props.list
   
   return(
    <>
      <img 
      className='container__img' 
      src={data.logo} 
      alt='icon'/>
    <div 
    className='container__item__wrapper1'>
    <div 
    className='container__item__wrapper1__header'>
  
    <p 
    className='container__item__wrapper1__header__text'>
      {data.company}
      </p>
   {data.new==true &&  
   <p 
   className='container__item__wrapper1__header__text'>
     NEW!
     </p>}
    
    
   {data.featured==true &&
     <p 
     className='container__item__wrapper1__header__text'>FEATURED</p>}
    </div>
    <p 
    className='container__item__wrapper1__subtext'>
      {data.position}</p>
    
     <div 
     id='container'>
     <p 
     className='container__item__wrapper1__list'>{data.postedAt}</p>
      <p 
      className='container__item__wrapper1__list container__item__wrapper1__list--marker '>{data.contract}</p>
      <p 
      className='container__item__wrapper1__list container__item__wrapper1__list--marker'>{data.location}</p>
     </div>
     </div> 
  
    </>
   )
  };

  export default Job;
  
  