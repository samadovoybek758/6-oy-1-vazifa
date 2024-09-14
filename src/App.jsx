
import './App.css';
import logo_1 from './images/logo1.svg';
import logo_2 from './images/logo2.svg';
import main_img from './images/main_img.png';
import main_logo1 from './images/main_logo1.svg';
import main_logo2 from './images/main_logo2.svg';



function App() {

  return (
    <>
      <div>
        <header>
          <div className="navbar">
          <div className='navbar_left'>
            <img src={logo_1} alt="Example" />
            <span className='RouteX'>RouteX</span>
          </div>
          <ul>
            <li><a className='li_1' href="http://#">Home</a></li>
            <li><a href="http://#">ABOUT_US</a></li>
            <li><a href="http://#">SERVICES</a></li>
            <li><a href="http://#">PROJECTS</a></li>
            <li><a href="http://#">BLOG</a></li>
          </ul>   
          <div className='navbar_right'>
            <img src={logo_2} alt="" />
            <div class="call">
              <p>Need help?</p>
              <span>(307) 555-0133</span>
            </div>
          </div>
          </div>
        </header>

        <div class="hero">
            <h1>Journey with Confidence <span className='migrate'>Migrate</span> with Us</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet rcus nunc. Duis egestas ac ante sed tincidunt.</p>
            <button className='btn'>Learn More</button>
        </div>

        <div className="main">
            <img className='main_left' src={main_img} alt="" />
            <div className='main_right'>
              <div className="about"> 
                  <span className='about2'>About Us</span>
                  <img src={main_logo1} alt="" />
              </div>
              <h2>Unknown Wanderlust <span className='journey'>Your Journey into</span></h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet rcus nunc. Duis egestas ac ante sed tincidunt.</p>

              <div className='main_2'>

                <div>
                  <div className='safety'>
                    <img src={main_logo2} alt="" />
                    <h5>Safety Guides</h5>
                  </div>
                  <p>Lorem ipsum dolor sit amet, cons ectetur adipiscing elit</p>
                </div>

                <div>
                  <div className='safety'>
                     <img src={main_logo2} alt="" />
                     <h5>Passport Assistance</h5>
                  </div>
                  <p>Lorem ipsum dolor sit amet, conse ctetur adipiscing elit</p>
                </div>

              </div>

              <button className='btn'>Read More</button>

            </div>
        </div>
      </div>
    </>
  )
}

export default App
