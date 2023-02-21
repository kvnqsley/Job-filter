import React from "react";
const Filter=(props)=>{
    const clearHandler=props.clearHandler
  const className=props.isVisible;
    const selectedRole=props.selectedRole;
    const filterRole = props.filterRole
    const filterLevel = props.filterLevel
   const filterbarstatus=props.filterbarstatus
    return( <div className='filterbox'>
    <ul className={`filterbox__list  ${filterbarstatus ? null : 'filterbox__list--active'}`} >
      {filterRole}
      {filterLevel}
     
      <p className='filterbox__list__text ' onClick={clearHandler}>Clear</p>
    </ul>
    </div>)
    }
export default Filter;