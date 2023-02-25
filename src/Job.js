import React from "react";
import data from './data.json'
import { useRef } from 'react'
import { useEffect } from "react";
const Job=({list,positionHandler})=>{
  
     return<>  <img 
       className='container__img' 
       src={list.logo} 
       alt='icon'/>
     <div
     className= {`container__item__wrapper1` } >
     <div 
     className='container__item__wrapper1__header'>
   
     <p 
     className='container__item__wrapper1__header__text'>
       {list.company}
       </p>
    {list.new==true &&  
    <p 
    className='container__item__wrapper1__header__text'>
      NEW!
      </p>}
     
     
    {list.featured==true &&
      <p 
      className='container__item__wrapper1__header__text'>FEATURED</p>}
     </div>
     <p onClick={positionHandler}
     className='container__item__wrapper1__subtext'>
       {list.position}</p>
     
      <div 
      className='containerdiv'>
      <p 
      className='container__item__wrapper1__list'>{list.postedAt}</p>
       <p 
       className='container__item__wrapper1__list container__item__wrapper1__list--marker '>{list.contract}</p>
       <p 
       className='container__item__wrapper1__list container__item__wrapper1__list--marker'>{list.location}</p>
      </div>
      </div>
      </>
   
 
  };

  export default Job;
  
  