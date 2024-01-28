import {React, useState} from 'react'
import { Modal } from 'react-bootstrap';
import { FaArrowRight, FaArrowLeft} from "react-icons/fa";
import {FaAngleDoubleDown, FaAngleDoubleUp} from "react-icons/fa";

import './display2.css'

import building89 from '../../components/images/building89.png';
import building10 from '../../components/images/building10.png';
import modal3 from '../../components/images/modal3.png';
import modal4 from '../../components/images/modal4.png';

import f3_1 from '../../components/building_images/floor3_1.jpg';
import f4_1 from '../../components/building_images/floor4_1.jpg';
import f5_1 from '../../components/building_images/floor5_1.jpg';
import f5_2 from '../../components/building_images/floor5_2.jpg';
import f5_3 from '../../components/building_images/floor5_3.jpg';

function Display2() {

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

  const [show3, setShow3] = useState(false);
  const handleClose3 = () => setShow3(false);  
  const handleShow3 = () => setShow3(true); 
  
  const handleChange = () =>{
    setShow(false);
    setShow3(true); 
  }

  const handleReset = () =>{
    setCollapse(false)
    setCollapse1(false)
    setCollapse2(false)
    setCollapse3(false)
    setCollapse4(false)
    setCollapse5(false)
  }

  return (
    <div className='rise__display '>
      <div className='rise__display_buildings'>
          <div className='rise__display_building'>
            <div className='rise_display_building_img'>
            <img src={building89}></img>
            </div>
              <div className='rise__display_modal1 building89'>
                <img src={modal3}></img>
              </div>
              <div className='rise__display_buildinginfo building2nd'>
                <h3>SSET Technical and Residential Building</h3>
                <div className='building_number'><h3>Building 8 & Building 9</h3></div>
                
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
                      <Modal.Title className='title'>SSET Technical Building</Modal.Title>
                    </Modal.Header>
                    
                    <Modal.Body className='modal_body'>
                      <h3>Introduction</h3>
                      <p>The technical rooms for SST are located in Building 8. Here is where SSET students go to study. For the benefit of SSET students, it has numerous sophisticated machines. There are a total of six floors in this building.The classroom from the 2nd floor onward is mostly used for English class but if the room is available students can use it for self study.</p>
                      
                      <div className='more_less_section'>
                        <button id='more_less_btn' onClick={() => setCollapse(!collapse)}>
                        {collapse ? <FaAngleDoubleUp/>: <FaAngleDoubleDown/>}
                        </button>
                        {collapse &&                        
                        <div className='more_less_section'>
                          <h3>Building 8 introduction video</h3>
                          <iframe width="600" height="400" src="https://www.youtube.com/embed/GZ9Cbr2mHeU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>}                   
                      </div>
                      
                      <h3>Detail:</h3>
                      <ul>
                          <li><span className='bold_word'><h4>First floor:</h4></span> The first floor consists of two main rooms which are electrical, electronic engineering lab and mechatronics, robotics  engineering lab. There is also a toilet next to Lab-robotics.</li>
                          <div className='more_less_section'>
                            <button id='more_less_btn' onClick={() => setCollapse1(!collapse1)}>
                            {collapse1 ? <FaAngleDoubleUp/>: <FaAngleDoubleDown/>}
                            </button>
                            {collapse1 &&                        
                            <div className='more_less_section'>
                              <img width={600} height={400} src={f3_1}></img> 
                            </div>}                   
                          </div>  
                          
                          <li><span className='bold_word'><h4>Second floor:</h4></span> On the second floor there are some classrooms.  The SCD studio is the room on this floor that draws the most attention, this is also the place that store a lot of student’s works. There are two workshops for SCD class participants. Also, the space forbids any club activities. A student meeting room and office are located just next to the elevator.</li>
                          <div className='more_less_section'>
                            <button id='more_less_btn' onClick={() => setCollapse2(!collapse2)}>
                            {collapse2 ? <FaAngleDoubleUp/>: <FaAngleDoubleDown/>}
                            </button>
                            {collapse2 &&                        
                            <div className='more_less_section'>
                              <h3>Building 1 introduction video</h3>
                            </div>}                   
                          </div>
                          
                          <li><span className='bold_word'><h4>Third floor:</h4></span> The third floor consists of mainly English classroom. There are also some staff room on this floor.</li>
                          <div className='more_less_section'>
                            <button id='more_less_btn' onClick={() => setCollapse3(!collapse3)}>
                            {collapse3 ? <FaAngleDoubleUp/>: <FaAngleDoubleDown/>}
                            </button>
                            {collapse3 &&                        
                            <div className='more_less_section'>
                              <h3>Building 1 introduction video</h3>
                            </div>}                   
                          </div>
                          
                          <li><span className='bold_word'><h4>Fourth floor:</h4></span> Besides the classroom on the fourth floor, there are 2 storage rooms next to each other. One of the stores is student services while the other one is design. There are also two offices for staff next to the elevator.</li>
                          <div className='more_less_section'>
                            <button id='more_less_btn' onClick={() => setCollapse4(!collapse4)}>
                            {collapse4 ? <FaAngleDoubleUp/>: <FaAngleDoubleDown/>}
                            </button>
                            {collapse4 &&                        
                            <div className='more_less_section'>
                              <h3>Building 1 introduction video</h3>
                            </div>}                   
                          </div>
                          
                          <li><span className='bold_word'><h4>Fifth floor and Sixth floor</h4></span> These floors are the staff only floor. Students are not allowed to enter this area.</li>                         
                      </ul>
                      <button id='B9_btn' onClick={() => {
                      handleReset();
                      handleChange();
                    }}>Building 9  <span><FaArrowRight/></span></button>
                    </Modal.Body>
                    
                    <Modal.Footer className='modal_footer'>
                      <button id='seebtn' onClick={() => {
                      handleReset();
                      handleClose();
                    }}> Close </button>
                    </Modal.Footer>               
                  </div>
                </Modal>
                
                <Modal className='modalBackground' show={show3} onHide={handleClose3}>
                  <div className='modalContainer'>
                  <div className='modal__btn_section'>
                    <button id='modal_btn_close' onClick={() => {
                      handleReset();
                      handleClose3();
                    }}><span>X</span></button>                      
                  </div>                                    
                    <Modal.Header>                    
                      <Modal.Title className='title'>Residential Building</Modal.Title>                
                    </Modal.Header>
                    
                    <Modal.Body className='modal_body'>
                      <h3>Introduction</h3>
                      <p>First-year students could stay in an RMIT residential facility for a few semesters before locating another place to live. There are six levels in this building.</p>
                      <div className='more_less_section'>
                            <button id='more_less_btn' onClick={() => setCollapse(!collapse)}>
                            {collapse ? <FaAngleDoubleUp/>: <FaAngleDoubleDown/>}
                            </button>
                            {collapse &&                        
                            <div className='more_less_section'>
                              <h3>Building 9 introduction video</h3>
                              <iframe width="600" height="400" src="https://www.youtube.com/embed/z7V9DZzDnmI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            </div>}                   
                      </div>
                      <h3>Detail:</h3>
                      <ul>
                          <li><span className='bold_word'><h4>First floor:</h4></span> The first floor is the one that is the busiest. The first floor of this structure is where Nine Restaurant is located. It is highly advised for students who want to eat some cuisine to do so here. The other section is reserved for residents only, save from Nine restaurants. The amusement room, where students can play some pool and other table games, is on your right as you enter the building. The office and two conference rooms are on the left. Moreover, this floor includes a laundry facility.</li>
                          <div className='more_less_section'>
                            <button id='more_less_btn' onClick={() => setCollapse1(!collapse1)}>
                            {collapse1 ? <FaAngleDoubleUp/>: <FaAngleDoubleDown/>}
                            </button>
                            {collapse1 &&                        
                            <div className='more_less_section'>
                              <img width={600} height={400} src={f4_1}></img> 
                            </div>}                   
                          </div>
                          
                          <li> <span className='bold_word'><h4>Second floor, third floor, fourth floor, fifth floor and sixth floor:</h4></span> all of these floor are filled with dorm rooms. On level 2 and 3 there are 20 beds on these floor while on level 4, 5 and 6 there are 21 beds on each floor.</li>
                          <div className='more_less_section'>
                            <button id='more_less_btn' onClick={() => setCollapse2(!collapse2)}>
                            {collapse2 ? <FaAngleDoubleUp/>: <FaAngleDoubleDown/>}
                            </button>
                            {collapse2 &&                        
                            <div className='more_less_section'>
                              <h3>Building 1 introduction video</h3>
                            </div>}                   
                          </div>
                      </ul>
                      <button id='B8_btn'
                        onClick={() => {
                          handleClose3();
                          handleShow()
                          handleReset();
                        }}><span><FaArrowLeft/></span>Building 8</button>                    
                    </Modal.Body>
                    
                    <Modal.Footer className='modal_footer'>
                      <button id='seebtn' onClick={() => {
                      handleReset();
                      handleClose3();
                    }}> Close </button>
                    </Modal.Footer>
                  
                  </div>
                </Modal>
              </div>
          </div>
      </div>
      
      <div className='rise__display_buildings building__bottom'>
          <div className='rise__display_building'>
            
            <div className='rise_display_building_img'>
              <img src={building10}></img>
            </div>
              
            <div className='rise__display_modal1 modal_build_10'>
              <img src={modal4}></img>
            </div>
              
              <div className='rise__display_buildinginfo building2nd'>
                
                <h3>Recreation and Events Complex</h3>
                <div className='building_number'><h3>Building 10</h3></div>
                <div className='space_between'>
                  <button type="button" id='seebtn' onClick={handleShow2}>See more</button>
                </div>
                
                
                <Modal className='modalBackground' show={show2} onHide={handleClose2}>
                  <div className='modalContainer'>
                  <div className='modal__btn_section'>
                    <button id='modal_btn_close' onClick={handleClose2}><span>X</span></button>                      
                  </div>
                    <Modal.Header>
                      <Modal.Title className='title'>Recreation and Events Complex</Modal.Title>
                    </Modal.Header>
                    
                    <Modal.Body className='modal_body'>
                      <h3>Introduction</h3>
                      <p>This building is known as the school's REC. Upon entrance, you will be able to access a very large sporthall used for basketball and other variety of sports. It is a place filled with an energetic and healthy environment which will keep you fit while you are studying, along with promoting social connectivity and multi-cultural immersion. This is also the place where the student council’s members usually gather and hold events.</p>
                      
                      <div className='more_less_section'>
                          <button id='more_less_btn' onClick={() => setCollapse(!collapse)}>
                          {collapse ? <FaAngleDoubleUp/>: <FaAngleDoubleDown/>}
                          </button>
                          {collapse &&                        
                          <div className='more_less_section'>
                            <h3>Building 10 introduction video</h3>
                            <iframe width="600" height="400" src="https://www.youtube.com/embed/rnMyObKYzAI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                          </div>}                   
                      </div>
                      
                      <h3>Detail:</h3>
                        <ul>
                          <li><span className='bold_word'><h4>First floor:</h4></span> The first floor of this building is versatile. In the lobby, there is a mattress area in a corner for exercising and there are some ping pong tables on the other side, which can be used for organizing events. The largest area in REC is the sports hall which is a combined court of basketball, badminton and futsal. This is also one of the most well-known places for students that love sports. Besides that, there is a gym next to a sports hall for people to work out. In addition, there is a clinic on this floor for people with injuries or physical issues.</li>
                          <div className='more_less_section'>
                            <button id='more_less_btn' onClick={() => setCollapse1(!collapse1)}>
                            {collapse1 ? <FaAngleDoubleUp/>: <FaAngleDoubleDown/>}
                            </button>
                            {collapse1 &&                        
                            <div className='more_less_section'>
                              <img width={600} height={400} src={f5_1}></img> 
                            </div>}                   
                          </div>
                          
                          <li><span className='bold_word'><h4>Second floor:</h4></span> The second floor has some functional rooms and offices such as Student Life’s office. There are two rooms called Flemington, which have mirrors, musical instruments for musical activities. In addition, there is a bar and restaurant here, connecting to the grandstand of the sports field.</li>
                          <div className='more_less_section'>
                            <button id='more_less_btn' onClick={() => setCollapse2(!collapse2)}>
                            {collapse2 ? <FaAngleDoubleUp/>: <FaAngleDoubleDown/>}
                            </button>
                            {collapse2 &&                        
                            <div className='more_less_section'>
                              <img width={600} height={400} src={f5_2}></img>
                              <img width={600} height={400} src={f5_3}></img> 
                            </div>}                   
                          </div>
                        
                        </ul>
                    </Modal.Body>
                    
                    <Modal.Footer className='modal_footer'>
                    <button id='seebtn'
                    onClick={() => {
                      handleReset();
                      handleClose2();
                    }}>Close</button>                   
                    </Modal.Footer>
                  
                  </div>
                </Modal>
              
              </div>
          </div>
      </div>  
    </div>
  )
}

export default Display2