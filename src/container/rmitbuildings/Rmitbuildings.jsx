import {React,useEffect} from 'react'
import RMITlogo from '../../components/images/RMITlogo.png';
import './rmitbuildings.css'
import Aos from 'aos';

function Rmitbuildings() {
  useEffect(()=>{
      Aos.init({duration:1000})
  },[])
  return (  
      <div id='ABOUTCAMPUS' className='rise__rmitbuildings'>
        <div className='rise__rmitbuildings-content'>
          <div className='rise__rmitbuildings_header' data-aos="fade-right">
            <h1>RMIT SGS CAMPUS</h1>
            <hr/>  
          </div>                
            <p>The Saigon South campus of RMIT university consists of 5 main buildings: Beanland Building, Academic Building 2, Building 8, Residential Building - Building 9 and Recreation and Events Complex - Building 10. In addition, it also has parking lots and a huge sports field. In detail, Beanland Building and Academic Building 2 have 5 floors, Building 8 and Building 9 have 6 floors and Building 10 has 2 levels. In each level of each building, there are many rooms used for various purposes such as classrooms, laboratories, library, office, etc. </p>                  
             
        </div>
        <div className='rise__rmitbuildings-image' data-aos="fade-left">
            <img src = {RMITlogo}/>
        </div>
      </div>
  )
}

export default Rmitbuildings