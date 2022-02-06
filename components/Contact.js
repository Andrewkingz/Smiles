import React from 'react';
import Imagef from './images/facebook.blue.png';
import Imagef2 from './images/facebook-re.png';
import Imagey from './images/youtube.red.png';
import Imagey2 from './images/youtube-r.png';
import Imaget from './images/twit.blue.jpg';
import Imaget2 from './images/twit-r.png';
import Imagel from './images/LinkedIn-logo.png';
import Imagel2 from './images/linkd-r.png';
import Imageg from './images/glass.green.png';
import Imagep from './images/fresh.jpg';
import Imaged from './images/glaszdo.png';
import Imagem from './images/msgm.png';
import './Contact.css'


const Contact = () => {
    return(
        <div className='footerContact'>
            <div className='Contacts'>
            <div  className='contactNav'>
                <ul>
                    <div className='Fresh'>
                   <img src={Imagep} className='freshW'/>
                   <p>freshworks</p>
                   </div>
                  <li><a className='freshNav' href='#'> Freshdesk</a></li>
                  <li><a className='freshNav' href='#'> Freshsales</a></li>
                  <li><a className='freshNav' href='#'> Freshmarketer</a></li>
                  <li><a className='freshNav' href='#'> Freshservices</a></li>
                  <li><a className='freshNav' href='#'> Freshteam</a></li>
                  
               </ul>
         </div>     

                <div className='Company'>
                    <p>COMPANY</p>
                    <a className='companyNavs' href='#'>About</a>
                    <a className='companyNavs' href='#'>leadership</a>
                    <a className='companyNavs' href='#'>Board of directors</a>
                    <a className='companyNavs' href='#'>Investors</a>
                    <a className='companyNavs' href='#'>Customers</a>
                    <a className='companyNavs' href='#'>Affiliates</a>
                    <a className='companyNavs' href='#'>Partners</a>
                    <a className='companyNavs' href='#'>Philanthrophy</a>
                    <a className='companyNavs' href='#'>Careers</a>
                    <a className='companyNavs' href='#'>News room</a>
                    <a className='companyNavs' href='#'>GDPR</a>
                    <a className='companyNavs' href='#'>Tax FAQs</a>
                    <a className='companyNavs' href='#'>Contacts us</a>
                    
                    
               </div>
                      <div className='mainIconContainer'>
                      <p>CONNECT WITH US</p>
                    <div className='iconsContainer'>
                    
                        <div className='Icons'>
                           
                             <a href='#'>
                             <img src={Imagef2} className='face'/>
                             <img src={Imagef} className='Overlay'/>
                             </a>
                            
                        </div>
                        <div className='Icons2'>
                            
                            <a href='#'>
                             <img src={Imaget2} className='Tweet'/>
                             <img src={Imaget} className='Overlay2'/>
                            </a>
                            
                        </div>
                            <div className='Icons3'>
                            
                                
                                    <a href='#'>
                                        <img src={Imagey2} className='Tube'/>
                                        <img src={Imagey} className='Overlay3'/>
                                    </a>
                                
                            </div>
                        
                    </div>
                    <div className='iconsContainer2'>
                        
                        <div className='Icons4'>
                            <a href='#'>
                               <img src={Imagel2} className='Link'/>
                               <img src={Imagel} className='Overlay4'/>
                            </a>
                        </div>
                        <div className='Icons5'>
                            <a href='#'>
                                <img src={Imaged} className='Glass'/>
                                <img src={Imageg} className='Overlay5'/>
                            </a>
                        </div>
                    </div>
                    </div>
                    </div>
                    <div className='msgContact'>
                        <img src={Imagem} className='Msg'/>
                        <p>CONTACT SALES</p>
                    </div>

                </div>


    );
}
export default Contact