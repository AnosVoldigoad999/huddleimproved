import './App.css';
import {BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import {PiTwitterLogoThin, PiInstagramLogoThin, PiFacebookLogoThin} from 'react-icons/pi'

export default function App(){
  const [log, setLog]= useState(false)
  function login(){
    setLog(!log);
  }
  return<>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/newsletter" element={<Newsletter />} />
    </Routes>
  </BrowserRouter>
  </>
}



function Home (){
  return<>
  <nav>
    <Link to="/">
    <img className='logo' alt='logo' />
    </Link>
  <div className='login'>
    <Link to="/login">
    <button className='a'>
    <h2>Login</h2>
    </button>
    </Link>
  </div>
  </nav>
 <div className="container"> 
  <img className='image' alt='image'  />
  <div className='everything'>
    <h1>Build the community your fans will love</h1>
    <p>Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion.</p>
    <Link to="signup">
    <button>Register</button>
    </Link>
  </div>
  </div> 
  <footer>
    <div className='icons'>
    <PiFacebookLogoThin className='icon' />
    <PiTwitterLogoThin className='icon' />
    <PiInstagramLogoThin className='icon' />
    </div>
    </footer>
  </>
}

function Login(){
  return<>
  <nav>
  <Link to="/">
    <img className='logo' alt='logo' />
    </Link>
  </nav>
  <form onSubmit={(e)=>e.preventDefault()}>
   <label htmlFor='email'><h2>Email</h2></label>
    <input id='email' type='email' />
    <label htmlFor='password'><h2>Password</h2></label>
    <input id='password' type='password' />
    <button className='loginbutt'>Login</button>
    <br />
    <Link to="/signup" className='folink'>Don't have an account? Signup</Link>
  </form> 
  <footer>
    <div className='icons'>
    <PiFacebookLogoThin className='icon' />
    <PiTwitterLogoThin className='icon' />
    <PiInstagramLogoThin className='icon' />
    </div>
    </footer>
  </>
}


function Signup(){
  return<>
  <nav>
  <Link to="/">
    <img className='logo' alt='logo' />
    </Link>
  </nav>
  <form onSubmit={(e)=>e.preventDefault()} className='signform'>
   <label htmlFor='name' className='signlabel'><h2>Full Name</h2></label>
    <input id='name' type='text' className='sign' />
    <label htmlFor='email' className='signlabel'><h2>Email</h2></label>
    <input id='email' type='email' className='sign' />
    <label htmlFor='password' className='signlabel'><h2>Password</h2></label>
    <input id='password' type='password' className='sign' />
    <button className='signbutt'>Sign Up</button>
    <br />
    <Link to="/login" className='folink'>Already have an account? Login</Link>
    <Link to="/newsletter" className='folink'>Interested in our newsletter? Subscribe here!</Link>
  </form> 
  <footer>
    <div className='icons'>
    <PiFacebookLogoThin className='icon' />
    <PiTwitterLogoThin className='icon' />
    <PiInstagramLogoThin className='icon' />
    </div>
    </footer>
  </>
}

function Newsletter (){
  return <>
  <nav>
  <Link to="/">
    <img className='logo' alt='logo' />
    </Link>
  </nav>
  <form className='news' onSubmit={(e)=>e.preventDefault()}>
  <div className='newsletter'>
    <label htmlFor='newsletteremail'><h2>Subscribe to our newsletter</h2></label>
    <input type='email' id='newsletteremail' className='newsletterinput' />
    <button className='sub'>Subscribe</button>
  </div>
  </form>
  <footer>
    <div className='icons'>
    <PiFacebookLogoThin className='icon' />
    <PiTwitterLogoThin className='icon' />
    <PiInstagramLogoThin className='icon' />
    </div>
    </footer>
  </>
}