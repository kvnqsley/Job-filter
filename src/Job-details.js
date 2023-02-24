import React from "react";
import { useRef } from "react";


const JobDetails =({list,
  selectedRoleHandler,
  selectedLevelHandler,
  selectedLanguageHandler,
  selectedToolHandler

})=>{
 const btnref =useRef()

 
    return(
     <>
     
      <ul  
      className='container__item__wrapper2'>
    <li ref={btnref}
    className='container__item__wrapper2__item'
    onClick={selectedRoleHandler}  >
      {list.role}
      </li>
    <li 
    className='container__item__wrapper2__item'
     onClick={selectedLevelHandler}>
       {list.level}
       </li>
    {list.languages.map(language=><li key={language.id} 
    onClick={selectedLanguageHandler}
    className='container__item__wrapper2__item'>
      {language}
      </li>)}
    {list.tools.map(tool=>
    <li  key={tool.id}
    onClick={selectedToolHandler}
     className='container__item__wrapper2__item'>
       {tool}
       </li>)}
    </ul>
     </>
      )
    } ;
    export default JobDetails;