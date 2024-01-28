import {React, useState} from 'react'
import {FaAngleDoubleDown, FaAngleDoubleUp} from "react-icons/fa";
import './display.css'
import { Modal } from 'react-bootstrap';

import building1 from '../../components/images/building1.png';
import building2 from '../../components/images/building2.png';

import modal1 from '../../components/images/modal1.png';
import modal2 from '../../components/images/modal2.png';

import f1_1 from '../../components/building_images/floor1_1.jpg';
import f1_2 from '../../components/building_images/floor1_2.jpg';
import f1_3 from '../../components/building_images/floor1_3.jpg';
import f1_4 from '../../components/building_images/floor1_4.jpg';
import f1_5 from '../../components/building_images/floor1_5.jpg';
import f1_6 from '../../components/building_images/floor1_6.jpg';
import f1_7 from '../../components/building_images/floor1_7.jpg';
import f1_8 from '../../components/building_images/floor1_8.jpg';
import f1_9 from '../../components/building_images/floor1_9.jpg';

import f2_1 from '../../components/building_images/floor2_1.jpg';
import f2_2 from '../../components/building_images/floor2_2.jpg';
import f2_3 from '../../components/building_images/floor2_3.jpg';
import f2_4 from '../../components/building_images/floor2_4.jpg';
import f2_5 from '../../components/building_images/floor2_5.jpg';
import f2_6 from '../../components/building_images/floor2_6.jpg';
import f2_7 from '../../components/building_images/floor2_7.jpg';
import f2_8 from '../../components/building_images/floor2_8.jpg';
import f2_9 from '../../components/building_images/floor2_9.jpg';

function Display() {

  const [collapse,setCollapse] = useState(false)
  const [collapse1,setCollapse1] = useState(false)
  const [collapse2,setCollapse2] = useState(false)
  const [collapse3,setCollapse3] = useState(false)
  const [collapse4,setCollapse4] = useState(false)
  const [collapse5,setCollapse5] = useState(false)

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);  
  const handleShow = () => setShow(true);

  const [show2, setShow2] = useState(false);
  
  const handleClose2 = () => setShow2(false);  
  const handleShow2 = () => setShow2(true);
  
  const handleReset = () =>{
    setCollapse(false)
    setCollapse1(false)
    setCollapse2(false)
    setCollapse3(false)
    setCollapse4(false)
    setCollapse5(false)
  }
  return (
    <div className='rise__display'>
      <div className='rise__display_buildings'>
          <div className='rise__display_building'>
            <div className='rise_display_building_img '>
            <img src={building1}></img>
            </div>
              <div className='rise__display_modal1 building__1'>
                <img src={modal1}></img>
              </div>
              <div className='rise__display_buildinginfo building1st'>
                <h3>Beanland Building</h3>
                <div className='building_number'><h3>Building 1</h3></div>
                <div className='space_between'>
                  <button type="button" id='seebtn' onClick={handleShow}>See more</button>
                </div>
                
                <Modal className='modalBackground' show={show} onHide={handleClose}>
                  <div className='modalContainer'>
                  <div className='modal__btn_section'>
                    <button id='modal_btn_close' onClick={() => {
                      handleReset();
                      handleClose();
                    }}><span>X</span></button>                      
                  </div>
                  <Modal.Header>
                    <Modal.Title className='title'>BEANLAND BUILDING</Modal.Title>
                  </Modal.Header>
                  <Modal.Body className='modal_body'>
                    <h3>Introduction</h3>
                    <p>This is a multifunctional building in RMIT University and it can be considered one of the main buildings since its capacity is the highest and many university’s departments are located here. Moreover, this building has 5 levels and there are two staircases to each level: one staircase is next to the elevator inside the building and one more is situated outside the building</p>
                    <div className='more_less_section'>
                      <button id='more_less_btn' onClick={() => setCollapse(!collapse)}>
                      {collapse ? <FaAngleDoubleUp/>: <FaAngleDoubleDown/>}
                      </button>
                      {collapse && 
                        
                        <div className='more_less_section'>
                          <h3>Building 1 introduction video</h3>
                          <iframe width="600" height="400" src="https://www.youtube.com/embed/NGWKQuU_b8k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>}                   
                    </div>
                    
                    <h3>Detail:</h3>
                    <ul>
                      <li><span className='bold_word'><h4>First floor:</h4></span> The first floor consists of the core departments in RMIT University such as RMIT Connect, Job Shop, Student Council, Offices, etc and other facilities like Media Studio, Bowen Theatre, Data Centre, Stationary Shop, Computer Lab, Canteen, etc. Students can contact most of the university’s offices on this level and there are classes organized in the theaters or rooms here as well. Students can also enjoy their lunch break at the canteen, which offers many choices since there are three restaurants here</li>
                      <div className='more_less_section'>
                        <button id='more_less_btn' onClick={() => setCollapse1(!collapse1)}>
                        {collapse1 ? <FaAngleDoubleUp/>: <FaAngleDoubleDown/>}
                        </button>
                        {collapse1 &&                           
                          
                          <div className='more_less_section'>
                            <img width={600} height={400} src={f1_1}></img> 
                            <img width={600} height={400} src={f1_2}></img>                         
                          </div>}                   
                      
                      </div>
                      
                      <li><span className='bold_word'><h4>Second floor:</h4></span> The second floor of this building mainly consists of classrooms and computer labs in the area behind the elevator. Classes usually take place in this area and students can use the map to navigate. Facing the elevator is the gallery displaying students’ art works, and the Melbourne Theatre also located in that area together with a cafeteria and some rooms for meetings. Moreover, Melbourne Theatre is a two-floor theatre, so it can hold up to a hundred students.</li>
                      <div className='more_less_section'>
                        <button id='more_less_btn' onClick={() => setCollapse2(!collapse2)}>
                        {collapse2 ? <FaAngleDoubleUp/>: <FaAngleDoubleDown/>}
                        </button>
                        {collapse2 &&                           
                          <div className='more_less_section'>
                            <img width={600} height={400} src={f1_3}></img>                           
                          </div>}                   
                      </div>
                      
                      <li><span className='bold_word'><h4>Third floor:</h4></span> The third floor has a relatively identical layout as the second floor. The area behind the elevators are the classrooms but the facing area is the Beanland Library. In the library, there are some rooms for group meetings, so students can book a place here to have team meetings and group discussions. The Melbourne Theatre is also located on this level because it uses two floors. Most students access this floor for the Beanland library and for searching books since it has more book shelves or they go to classes.</li>
                      <div className='more_less_section'>
                        <button id='more_less_btn' onClick={() => setCollapse3(!collapse3)}>
                        {collapse3 ? <FaAngleDoubleUp/>: <FaAngleDoubleDown/>}
                        </button>
                        {collapse3 &&                           
                          <div className='more_less_section'>
                            <img width={600} height={400} src={f1_4}></img>
                            <img width={600} height={400} src={f1_5}></img>                           
                          </div>}                   
                      </div>
                      
                      <li><span className='bold_word'><h4>Fourth floor:</h4></span> The fourth floor has the exact same structure and layout as the third one. The classrooms are on one side and the Beanland library is located on the other side since the Beanland library is a two-storey building. Most of the time, students go to this floor for studying as there are computer labs here or they are here for group meetings in the library since there are more tables and chairs on this second floor of the library and there are more private rooms in addition.</li>
                      <div className='more_less_section'>
                        <button id='more_less_btn' onClick={() => setCollapse4(!collapse4)}>
                        {collapse4 ? <FaAngleDoubleUp/>: <FaAngleDoubleDown/>}
                        </button>
                        {collapse4 &&                           
                          <div className='more_less_section'>
                            <img width={600} height={400} src={f1_6}></img>
                            <img width={600} height={400} src={f1_7}></img>                               
                          </div>}                   
                      </div>
                      
                      <li><span className='bold_word'><h4>Fifth floor:</h4></span> The fifth floor only contains classrooms since it is exclusively for the School of English & University Pathways (SEUP) of RMIT University. The head office is the area facing the elevator, and the remaining area is for classrooms.</li>
                      <div className='more_less_section'>
                        <button id='more_less_btn' onClick={() => setCollapse5(!collapse5)}>
                        {collapse5 ? <FaAngleDoubleUp/>: <FaAngleDoubleDown/>}
                        </button>
                        {collapse5 &&                           
                          <div className='more_less_section'>
                            <img width={600} height={400} src={f1_8}></img>                          
                            <img width={600} height={400} src={f1_9}></img>                                                                             
                          </div>}                   
                      </div>    
                    </ul>

                  </Modal.Body>
                  <Modal.Footer className='modal_footer'>  
                    <button id='seebtn'
                    onClick={() => {
                      handleReset();
                      handleClose();
                    }}>Close</button>
                  </Modal.Footer>
                  </div>
                </Modal>
              </div>
          </div>
      </div>
      
      <div className='rise__display_buildings'>
          <div className='rise__display_building'>
            <div className='rise_display_building_img'>
            <img src={building2}></img>
            </div>
              <div className='rise__display_modal1 building2nd'>
                <img src={modal2}></img>
              </div>
              <div className='rise__display_buildinginfo building1st'>
                <h3>Academic Building 2</h3>
                <div className='building_number'><h3>Building 2</h3></div>
                <div className='space_between'>
                  <button type="button" id='seebtn' onClick={handleShow2}>See more</button> 
                </div>
                
                <Modal className='modalBackground' show={show2} onHide={handleClose2}>
                  <div className='modalContainer '>
                  <div className='modal__btn_section'>
                    <button id='modal_btn_close' onClick={() => {
                      handleReset();
                      handleClose2();
                    }}><span>X</span></button>                      
                  </div>
                  <Modal.Header>
                    <Modal.Title className='title'>ACADEMIC BUILDING 2</Modal.Title>
                  </Modal.Header>
                  <Modal.Body className='modal_body'>
                    <h3>Introduction</h3>
                    <p>This building is also considered the most crucial department in RMIT University because students from all schools study here and there are also offices for each school here. Furthermore, this building has five floors in total and each specific floor is built for a specific school. There are four schools in RMIT University: School of Business & Management (SBM), School of Communication & Design (SCD), School of Science, Engineering & Technology (SSET) and School of English & University Pathways (SEUP). Three former schools have their head office in this building and SEUP has their head office in building 1. In addition, there is a basement for parking under this building and there is one elevator in this building that can bring people to the basement.</p>
                    <div className='more_less_section'>
                      <button id='more_less_btn' onClick={() => setCollapse(!collapse)}>
                      {collapse ? <FaAngleDoubleUp/>: <FaAngleDoubleDown/>}
                      </button>
                      {collapse && 
                        
                        <div className='more_less_section'>
                          <h3>Building 2 introduction</h3>
                          <iframe width="600" height="400" src="https://www.youtube.com/embed/TgJFo8xXm4s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>}                   
                    </div>
                    <h3>Detail:</h3>
                    <ul>
                      <li><span className='bold_word'><h4>First floor:</h4></span> The first floor of this building has a lot of university’s offices like the cashier, data center, etc. There are two Auditorium Theatres near the entrance and the elevator, and there are merged classrooms facing them. Besides that, there is a lot of space for working at this level next to the well-known Red Stair of RMIT University. In addition, there is a canopy next to this building with a lot of chairs and tables for people to take a break.</li>
                      <div className='more_less_section'>
                        <button id='more_less_btn' onClick={() => setCollapse1(!collapse1)}>
                        {collapse1 ? <FaAngleDoubleUp/>: <FaAngleDoubleDown/>}
                        </button>
                        {collapse1 &&                           
                          <div className='more_less_section'>
                            <img width={600} height={400} src={f2_1}></img>
                            <img width={600} height={400} src={f2_2}></img>                           
                          </div>}                   
                      </div>
                      
                      <li><span className='bold_word'><h4>Second floor:</h4></span> The second floor of this building is for the School of Business & Management (SBM). On this floor, there are two offices for SBM staff on the two sides and the space for students is in the center area of the floor. There are classrooms with the projector, lab rooms and two trading rooms for educational and professional purposes. There are also tables and chairs in the corridor so that students can take a break or study there.</li>
                      <div className='more_less_section'>
                        <button id='more_less_btn' onClick={() => setCollapse2(!collapse2)}>
                        {collapse2 ? <FaAngleDoubleUp/>: <FaAngleDoubleDown/>}
                        </button>
                        
                        {collapse2 &&                           
                          <div className='more_less_section'>
                            <img width={600} height={400} src={f2_3}></img>
                            <img width={600} height={400} src={f2_4}></img>                           
                          </div>}                   
                      </div>
                      
                      <li><span className='bold_word'><h4>Third floor:</h4></span> The third floor is also for the School of Business & Management (SBM) since this school has the largest number of students. The layout of this floor is the same as the second floor but there are no trading labs and there are more classrooms instead. In the corridor, there are tables and chairs for students to study and take a short break.</li>
                      <div className='more_less_section'>
                        <button id='more_less_btn' onClick={() => setCollapse3(!collapse3)}>
                        {collapse3 ? <FaAngleDoubleUp/>: <FaAngleDoubleDown/>}
                        </button>
                        {collapse3 &&                           
                          <div className='more_less_section'>
                            <img width={600} height={400} src={f2_5}></img>
                                                     
                          </div>}                   
                      </div>
                      
                      <li><span className='bold_word'><h4>Fourth floor:</h4></span>: The fourth floor is for students from the School of Science, Engineering & Technology (SSET). The layout of this level is quite different from the lower ones since the head office of SSET only located on the one side of the floor. The other side is for Electrical, Engineering and Comms Lab, Engineering Science Lab and Machinery Lab. The center area consists of classrooms and computer labs. There are also tables and chairs in the corridor so that students can take a break or study there.</li>
                      <div className='more_less_section'>
                        <button id='more_less_btn' onClick={() => setCollapse4(!collapse4)}>
                        {collapse4 ? <FaAngleDoubleUp/>: <FaAngleDoubleDown/>}
                        </button>
                        {collapse4 &&                           
                          <div className='more_less_section'>
                            <img width={600} height={400} src={f2_6}></img>  
                            <img width={600} height={400} src={f2_7}></img>
                                                       
                          </div>}                   
                      </div>
                      
                      <li><span className='bold_word'><h4>Fifth floor:</h4></span> The fifth floor of this building has the same layout to the second and third floors as its head offices are located on the two sides of the level. This floor is exclusively for students from School of Communication & Design (SCD). In the remaining area of the floor, half of it is computer labs and the other half is for classrooms. There are also tables, chairs and some computers in the corridor so that students can study there.</li>
                      <div className='more_less_section'>
                        <button id='more_less_btn' onClick={() => setCollapse5(!collapse5)}>
                        {collapse5 ? <FaAngleDoubleUp/>: <FaAngleDoubleDown/>}
                        </button>
                        {collapse5 &&                           
                          <div className='more_less_section'>
                            <img width={600} height={400} src={f2_9}></img>
                            <img width={600} height={400} src={f2_8}></img>                         
                          </div>}                   
                      </div>    
                    
                    </ul>
                  </Modal.Body>
                  <Modal.Footer className='modal_footer'>
                    <button id='seebtn' onClick={() => {
                      handleReset();
                      handleClose2();
                    }}> Close </button>           
                  </Modal.Footer>
                  </div>
                </Modal>
              </div>
          </div>
      </div>  
    </div>
  )
}

export default Display