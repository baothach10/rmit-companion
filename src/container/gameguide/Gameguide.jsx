import React from 'react'
import './gameguide.css'

function Gameguide() {
  return (
    <div className='rise__gameguide section__padding '>
      <div className='rise__gameguide_header'>
        GAME GUIDE
      </div>
      <div className='rise__gameguide_video'>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/Rom94rHuWh4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
    </div>
  )
}

export default Gameguide
