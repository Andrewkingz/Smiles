import React from 'react';
import Post from './images/greenMan.jpg';
import Post1 from './images/yellow.png';
import './Feature6.css';
import Post2 from './images/purple.jpg';
import Post3 from './images/couple.jpg';


const Feature6 = () => {
    return(
        <div className='mainGallerys'>
            <h1>We aspire to be one of the most loved companies in the world</h1>
            <div className='mainGallery'>
              
            <div className='Gallery'>
              
                <img src={Post} className='masHall'/>
                <h2>Culture</h2>
                <p>
                    A culture that supports high- <br/> quality work,
                    joy and pride in that <br/> work, speed to execution,
                    and<br/>intense customer focus.
                </p>
            </div>
            <div className='Gallery2'>
                <img src={Post1} className='masHall1'/>
                <h2>Diversity</h2>
                <p> Full-spectrum diversity,equity,<br/>
                and inclusiion are key priorities for <br/> us.
                </p>
            </div>
            <div className='Gallery3'>
                <img src={Post2} className='masHall2'/>
                <h2>Experience</h2>
                <p>Focus on enhancing the team <br/> experience by 
                strengthening our <br/> managers leadership capabilities.</p>
            </div>
            <div className='Gallery4'>
                <img src={Post3} className='masHall3'/>
                <h2>Team </h2>
                <p>4,000 employees and growing in <br/>offices across india, us
                Europe <br/> and Australia.</p>
            </div>

          

            </div>

          <p>SEE LIFE AT FRESHWORKS</p>
        </div>
    );
}
export default Feature6