import logo from './logo.svg';
// import listAImage from './images/photosnap.svg';
// import listBImage from './images/manage.svg'
import './App.scss';
import React from 'react';
import { filter } from 'lodash';





function App() {
  /*
  -------setting states for certain click events below-------
  
  */
  const [isVisible,setisVisible]  = React.useState(false);
  const [role,updaterole]  = React.useState('');
const filterRole=(e)=>{
updaterole(<li className='filterbox__list__item'>{e.target.textContent}<div className='filterbox__list__item__close' onClick={clearRoleHandler}>X</div></li>)
setisVisible(true)
};

const clearHandler=()=>{
  setisVisible(false);
  updaterole();
  updatelevel()
  }

  const clearRoleHandler=()=>{
    updaterole();
    }
    const clearLevelHandler=()=>{
      updatelevel();
      }

const [level,updatelevel]  = React.useState('');
const filterLevel=(e)=>{
updatelevel(<li className='filterbox__list__item' >{e.target.textContent}<div className='filterbox__list__item__close' onClick={clearLevelHandler}>X</div></li>)

};

/*

------Fetching JSON----

*/
const [state,setState]  = React.useState([]);
  const fetchingData=()=>{
  fetch('data.json').then(response =>{
    if (response.ok===true){
  return response.json();
       } 
     })
   .then(result=>{
  setState(result)
   })
  
  }
  
React.useEffect(  ()=>  fetchingData(),[])
 
  return (
    < div className='app'>
      <div className='app__banner'>
   </div>
 <Filter role={role} level={level} isVisible={isVisible} clearHandler={clearHandler} />
 
 <ul className='container'>
      {state.map(el=>
        <li key={el.id} className='container__item'><ListA list={el}/><ListB list={el} filterRole={filterRole} filterLevel={filterLevel}/>
       </li>)}
        </ul>
 </div>
  )

};
 

const ListA=(props)=>{
  const data=props.list
 
 return(
  <>
    <img className='container__img' src={data.logo} alt='icon'/>
  <div className='container__item__wrapper1'>
  <div className='container__item__wrapper1__header'>

  <p className='container__item__wrapper1__header__text'>{data.company}</p>
 {data.new==true &&  <p className='container__item__wrapper1__header__text'>NEW!</p>}
  
  
 {data.featured==true &&  <p className='container__item__wrapper1__header__text'>FEATURED</p>}
  </div>
  <p className='container__item__wrapper1__subtext'>{data.position}</p>
  
   <div id='container'>
   <p className='container__item__wrapper1__list'>{data.postedAt}</p>
    <p className='container__item__wrapper1__list container__item__wrapper1__list--marker '>{data.contract}</p>
    <p className='container__item__wrapper1__list container__item__wrapper1__list--marker'>{data.location}</p>
   </div>
   </div> 

  </>
 )
};


const ListB =(props)=>{
const data=props.list;
return(
 <>
  <ul  className='container__item__wrapper2'>
<li className='container__item__wrapper2__item'onClick={props.filterRole}  >{data.role}</li>
<li className='container__item__wrapper2__item' onClick={props.filterLevel}>{data.level}</li>
{data.languages.map(language=><li key={data.languages.id} className='container__item__wrapper2__item'>{language}</li>)}
{data.tools.map(tool=><li  key={data.tools.id} className='container__item__wrapper2__item'>{tool}</li>)}
</ul>
 </>
  )
} ;

const Filter=(props)=>{
  const clearHandler=props.clearHandler
const className=props.isVisible;
  const filteredRole=props.role;
  const filteredLevel=props.level;
 
  return( <div className='filterbox'>
  <ul className={`filterbox__list  ${className ? null : 'filterbox__list--active'}`} >
    {filteredRole}
    {filteredLevel}
    <p className='filterbox__list__text ' onClick={clearHandler}>Clear</p>
  </ul>
  </div>)
  }


export default App;
