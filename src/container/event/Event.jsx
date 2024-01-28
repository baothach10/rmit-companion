import React from 'react'
import './event.css'
function Event() {
  return (
    <div id="EVENT" className='rise__event section__padding'>
        <div className='rise__event_head'>
          <h1>EVENT</h1>
          <hr/>
          <p>This section contain all of the important dates through out the year of 2023.</p>
        </div>
        <div className='rise__event_container'>
          <div className='rise__event_card'>
              <div className='rise__event_header'>
                  <h2>Semester A</h2>                
              </div>
              <div className='rise_event_info'>
                <p><span className='rise_bolddate'>Orientation Week &ensp;</span>27 Feb - 5 Mar</p>
                <p><span className='rise_bolddate'>Lock changing OES Courses &ensp;</span>17 Mar</p>
                <p><span className='rise_bolddate'>Deadline payment &ensp;</span>24 Mar</p>
                <p><span className='rise_bolddate'>Census date &ensp;</span>31 Mar</p>
                <p><span className='rise_bolddate'>Development Week &ensp;</span>17 Apr - 22 Apr</p>
                <p><span className='rise_bolddate'>Graduation Day &ensp;</span> 17, 18, 21 Apr</p>
                <p><span className='rise_bolddate'>Reunification Day&ensp;</span>29 Apr - 3 May</p>
                <p><span className='rise_bolddate'>Marking, Moderation <br></br> of Semester A &ensp;</span>29 Mar - 10 Jun</p>
                <p><span className='rise_bolddate'>Result released &ensp;</span>19 Jun</p>
                <p><span className='rise_bolddate'>Timetable open &ensp;</span>22 Jun</p>            
              </div>
          </div>

          <div className='rise__event_card'>
              <div className='rise__event_header'>
                  <h2>Semester B</h2>                
              </div>
              <div className='rise_event_info'>
                <p><span className='rise_bolddate'>Orientation Week &ensp;</span>26 Jun - 1 Jul</p>
                <p><span className='rise_bolddate'>Lock changing OES Courses &ensp;</span>14 Jul</p>
                <p><span className='rise_bolddate'>Deadline payment &ensp;</span>21 Jul</p>
                <p><span className='rise_bolddate'>Census date &ensp;</span>28 Jul</p>
                <p><span className='rise_bolddate'>Development Week &ensp;</span>14 Aug - 19 Aug</p>
                <p><span className='rise_bolddate'>Independence Day &ensp;</span>1 Sep - 4 Sep</p>
                <p><span className='rise_bolddate'>Marking, Moderation <br></br>  of Semester B &ensp;</span>25 Sep - 7 Oct</p>
                <p><span className='rise_bolddate'>Result released &ensp;</span>16 Oct</p>
                <p><span className='rise_bolddate'>Timetable open &ensp;</span>19 Oct</p>            
              </div>
          </div>

          <div className='rise__event_card'>
              <div className='rise__event_header'>
                  <h2>Semester C</h2>                
              </div>
              <div className='rise_event_info'>
                <p><span className='rise_bolddate'>Orientation Week &ensp;</span>23 Oct - 28 Oct</p>
                <p><span className='rise_bolddate'>Lock changing OES Courses &ensp;</span>10 Nov</p>
                <p><span className='rise_bolddate'>Deadline payment &ensp;</span>17 Nov</p>
                <p><span className='rise_bolddate'>Census date &ensp;</span>24 Nov</p>
                <p><span className='rise_bolddate'>Christmas Holiday &ensp;</span>25 Dec - 30 Dec</p>
                <p><span className='rise_bolddate'>New Year Holiday &ensp;</span>1 Jan</p>  
                <p><span className='rise_bolddate'>Marking, Moderation <br></br> of Semester C &ensp;</span>22 Jan - 3 Feb</p>
                <p><span className='rise_bolddate'>Tet Holiday &ensp;</span>9 Feb - 15 Feb</p>
                <p><span className='rise_bolddate'>Result released &ensp;</span>19 Feb</p>
                <p><span className='rise_bolddate'>Timetable open &ensp;</span>22 Feb</p>            
              </div>
          </div>
        </div>
    </div>
  )
}

export default Event