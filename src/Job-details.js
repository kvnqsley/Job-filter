import React from "react";

const JobDetails =({list ,selectedRoleHandler,selectedLevelHandler,selectRole,selectLevel})=>{


    return(
     <>
      <ul  
      className='container__item__wrapper2'>
    <li 
    className='container__item__wrapper2__item'
    onClick={selectedRoleHandler}  >
      {list.role}
      </li>
    <li 
    className='container__item__wrapper2__item'
     onClick={selectedLevelHandler}>
       {list.level}
       </li>
    {list.languages.map(language=><li key={list.languages.id} 
    className='container__item__wrapper2__item'>
      {language}
      </li>)}
    {list.tools.map(tool=>
    <li  key={list.tools.id}
     className='container__item__wrapper2__item'>
       {tool}
       </li>)}
    </ul>
     </>
      )
    } ;
    export default JobDetails;