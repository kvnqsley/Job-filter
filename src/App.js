import logo from './logo.svg';
import './App.scss';
import React from 'react';
import defaultdata from './data.json';
import JobDetails from './Job-details';
import Job from './Job';
import Filter from './Filter';
import Header from './Header';
import {useRef} from 'react';
import { useEffect} from 'react';

function App() {
const listref=useRef('')
const [data, setdata]=React.useState(defaultdata)

  const [filterbarstatus,setfilterbarstatus]=React.useState(false);
  const [filterRole,setFilterRole]= React.useState(null);
  const [filterLanguage,setFilterLanguage]= React.useState(null);
  const [filterTool,setFilterTool]= React.useState(null);
  
  const [filterLevel,setFilterLevel]= React.useState(null);
 /*

---------------------ALL HANDLERS-----------------

 */
  const selectedRoleHandler=(e)=>{
    setfilterbarstatus(true);
   const filteredContent=e.target.textContent;
   setFilterRole(
    <li 
    className='filterbox__list__item'>
     {filteredContent}
      
      <div key='btn1'
      className='filterbox__list__item__close'
      onClick={clearRoleHandler}
    ><img src='./images/icon-remove.svg'/>
      </div>
  
      </li>
   );
   switch (e.target.textContent) {
     case 'Frontend':
      setdata(data.filter(item=>item.role=='Frontend'))
       break;
     case 'Backend':
      setdata(data.filter(item=>item.role=='Backend'))
       break;
     case 'Fullstack':
      setdata(data.filter(item=>item.role=='Fullstack'))
       break;
   
     
   }
  

   };

  const selectedLevelHandler=(e)=>{
    setfilterbarstatus(true);
const filteredContent=e.target.textContent;
   setFilterLevel( <li
    className='filterbox__list__item'>
     {filteredContent}
      
      <div key='btn1'
      className='filterbox__list__item__close'
      onClick={clearLevelHandler}
    ><img src='./images/icon-remove.svg'/>
      </div>
  
      </li>);
         switch (e.target.textContent) {
          case 'Senior':
           setdata(data.filter(item=>item.level=='Senior'))
            break;
          case 'Midweight':
           setdata(data.filter(item=>item.level=='Midweight'))
            break;
          case 'Junior':
           setdata(data.filter(item=>item.level=='Junior'))
            break;
        
          
        }
  };

  const selectedLanguageHandler=(e)=>{
    setfilterbarstatus(true);
   const filteredContent=e.target.textContent;
   setFilterLanguage(
    <li 
    className='filterbox__list__item'>
     {filteredContent}
      
      <div
      className='filterbox__list__item__close'
      onClick={clearLanguageHandler}
    ><img src='./images/icon-remove.svg'/>
      </div>
  
      </li>
   );
   switch (e.target.textContent) {
     
     case 'HTML':
       setdata(data.filter(item=>item.languages.includes('HTML')))
       break;
     case 'CSS':
      setdata(data.filter(item=>item.languages.includes('CSS')))
       break;
     case 'JavaScript':
      setdata(data.filter(item=>item.languages.includes('JavaScript')))
       break;
   
     
   }
  

   };
  
   const selectedToolHandler=(e)=>{
    setfilterbarstatus(true);
   const filteredContent=e.target.textContent;
   setFilterTool(
    <li 
    className='filterbox__list__item'>
     {filteredContent}
      
      <div
      className='filterbox__list__item__close'
      onClick={clearToolHandler}
    ><img src='./images/icon-remove.svg'/>
      </div>
  
      </li>
   );
   switch (e.target.textContent) {
     
     case 'React':
       setdata(data.filter(item=>item.tools.includes('React')))
       break;
     case 'Sass':
      setdata(data.filter(item=>item.tools.includes('Sass')))
       break;
     case 'Ruby':
      setdata(data.filter(item=>item.tools.includes('Ruby')))
       break;
     case 'RoR':
      setdata(data.filter(item=>item.tools.includes('RoR')))
       break;
     case 'Vue':
      setdata(data.filter(item=>item.tools.includes('Vue')))
       break;
     case 'Django':
      setdata(data.filter(item=>item.tools.includes('Django')))
       break;
   
     
   }
  

   };

  const clearHandler=()=>{
  setfilterbarstatus(false);
 setFilterRole(null);
 setdata(defaultdata)
  setFilterLevel(null);
  setFilterLanguage(null);
  setFilterTool(null);
  
  }
  

  const clearRoleHandler=()=>{
   setFilterRole(null);
   setdata(defaultdata)
    }
 const clearLevelHandler=()=>{
      setFilterLevel(null);
    
      }
  const clearLanguageHandler=()=>{
    setFilterLanguage(null);
    setdata(defaultdata)
    }

    const clearToolHandler=()=>{
      setFilterTool(null);
      setdata(defaultdata);
      }
/**----------------  END OF HANDLERS---------- */


  return<>
     < div 
    className='app'>
    <Header/>
    <Filter clearHandler={clearHandler}
     filterbarstatus={filterbarstatus} 
     filterRole={filterRole}
      filterLevel={filterLevel}
      filterLanguage={filterLanguage}
      filterTool={filterTool}
      clearLevelHandler={clearLevelHandler}
      clearRoleHandler={clearRoleHandler} />
    
  <ul 
  className='container'>
       {data.map(el=>
         <li 
         key={el.id} 
         className={`container__item ${filterRole=='Frontend' ?'container__item--'+el.role:null}` }>
           <Job
           list={el}
            filterRole={filterRole}
            filtebarstatus={filterbarstatus}/>
           <JobDetails 
           selectedRoleHandler={selectedRoleHandler}
           selectedLevelHandler={selectedLevelHandler}
           selectedLanguageHandler={selectedLanguageHandler}
           selectedToolHandler={selectedToolHandler}
           
           list={el} />
        </li>)}
         </ul>
         </div>
         </>
  
  
}
export default App;
