import React from "react";
const Filter=({clearHandler,
  filterPosition,
  filterRole,
  filterLevel,
  filterbarstatus,
  filterLanguage,
  filterTool,
}
)=>{
    return( <div className='filterbox'>
    <ul className={`filterbox__list  ${filterbarstatus ? null : 'filterbox__list--active'}`} >
       {filterPosition}
       {filterRole} 
      {filterLevel}
      {filterLanguage}
     {filterTool}
      <p className='filterbox__list__text ' onClick={clearHandler}>Clear</p>
    </ul>
    </div>)
    }
export default Filter;