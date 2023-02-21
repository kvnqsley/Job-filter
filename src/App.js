import logo from './logo.svg';
import './App.scss';
import React from 'react';
import data from './data.json';
import JobDetails from './Job-details';
import Job from './Job';
import Filter from './Filter';
import Header from './Header';

function App() {

  const [filterbarstatus,setfilterbarstatus]=React.useState(false);
  const [filterRole,setFilterRole]= React.useState();
  const [filterLevel,setFilterLevel]= React.useState()
  const selectedRoleHandler=(e)=>{
    setfilterbarstatus(true);
   const filteredContent=e.target.textContent;
   
   setFilterRole( <li 
    className='filterbox__list__item'>
     {filteredContent}
      
      <div 
      className='filterbox__list__item__close'
    ><img src='./images/icon-remove.svg'/>
      </div>
  
      </li>);
  };

  const selectedLevelHandler=(e)=>{
    setfilterbarstatus(true);
   const filteredContent=e.target.textContent;
   
   setFilterLevel( <li 
    className='filterbox__list__item'>
     {filteredContent}
      
      <div 
      className='filterbox__list__item__close'
    ><img src='./images/icon-remove.svg'/>
      </div>
  
      </li>);
  };


  return(
    <>
     < div 
    className='app'>
    <Header/>
    <Filter filterbarstatus={filterbarstatus} filterRole={filterRole} filterLevel={filterLevel} />
    
  <ul 
  className='container'>
       {data.map(el=>
         <li 
         key={el.id} 
         className='container__item'>
           <Job
           list={el}/>
           <JobDetails 
           selectedRoleHandler={selectedRoleHandler}
           selectedLevelHandler={selectedLevelHandler}
           list={el} />
        </li>)}
         </ul>
         </div>
         </>
  )
  
  /*
  -------setting states for certain click events below-------
  
  */
//  const [roleData,setroleData] = React.useState([])
//   const [isVisible,setisVisible]  = React.useState(false);
//   const [role,updaterole]  = React.useState('');

  
// const filterRole=(e)=>{
// updaterole()
//     setisVisible(true);
//     const roleData=data.filter(item=>{
//       return item.role==e.target.textContent
//     })
//   setroleData(roleData)
//   };

// const clearHandler=()=>{
//   setisVisible(false);
//   updaterole();
//   updatelevel()
//   }

//   const clearRoleHandler=()=>{
//     updaterole();
//     }
//     const clearLevelHandler=()=>{
//       updatelevel();
//       }

//   const [level,updatelevel]  = React.useState('');
//   const filterLevel=(e)=>{
//   updatelevel(<li 
//   className='filterbox__list__item' >
//     {e.target.textContent}
//     <div 
//     className='filterbox__list__item__close' 
//     onClick={clearLevelHandler}>
//       <img src='./images/icon-remove.svg'/>
//     </div>
//     </li>)
//   setisVisible(true);
//   }
}
export default App;
