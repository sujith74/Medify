import { useState } from 'react'

import './Home.css'
import Nav from '../Nav/Nav'
import Specialists from '../Specialists/Specialists'
import Patient from '../Patient/Patient'
import Blog from '../Blog/Blog'
import Fam from '../Fam/Fam'
import Faq from '../Faq/Faq'
import Download from '../Download/Download'
import Footer from '../Footer/Footer'
import App from '../App'
import SearchHospital from '../SearchHospital/SearchHospital'
import Specialization from '../Specialization/Specialization'
// import SearchBar from '../SearchBar/SearchBar'
// import HeroSlider from './HeroSlider/HeroSlider'

function Home() {
  const [count, setCount] = useState(0)

  return (
    <>
    <section className='top'>
      <Nav/>
      <div className="hero">
<div className ="hero-section">
      <h2 className='h1'>Skip the travel! Find Online</h2>
      <h1 className='h2'>Medical <span className='h2-span'>Centers</span></h1>
      <p className='np'>Connect instantly with a 24x7 specialist or choose to video visit a particular doctor.</p>
      <button className='find-centers'>Find centers</button>
</div>
<img src="https://s3-alpha-sig.figma.com/img/7804/e5f2/776e41d6b125a1ff07effac37d6ff11b?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ickdjzJLjDZ6myH-w0dSOGxzmxva6iVHr58DzKZzmKmcpyKSimIo-iu0a7DZWFdXodg5JRF9yh-DysChtdKnrD8vEDTrL8rV5W5IxuLhVmsz927SbI-fVOSjdapnOYxc5toAdFBgEho6hM10Dyu6EM5Zl6-YTI6P5yKLxsCOTkJWNVKkI3Ioi4PaLKhfUdvwk2G4K~JI0HmZbDCHUab8D1YlveHc7luIkH3ehStkJwpIUZUhzt70mnxUWcJPs9pEnj37eSUH49KtuJ~wCNkWzFNI4IAW1mw7B1oj8PrNhLu-Q566XMusHcJPI4xm5RzPcKCIol1r6ryIB6AC8MJCfg__" className="hero-image" alt="img"/>
</div>


      </section>
      <SearchHospital/>


      <h1> Popular Specialisations</h1>
 
      {/* <section className='specialisation'>

        <h2 className='spec-title'>Find by specialisation</h2>
        <div className="allcards">
        <div className="card">
          <div className="card-content">
            <div className="react-icon">Icon</div>
            <div className='card-title'> Dentistry</div>
          </div>
        </div>

        <div className="card">
          <div className="card-content">
            <div className="react-icon">Icon</div>
            <div className='card-title'> Dentistry</div>
          </div>
        </div>
        <div className="card">
          <div className="card-content">
            <div className="react-icon">Icon</div>
            <div className='card-title'> Dentistry</div>
          </div>
        </div>
        <div className="card">
          <div className="card-content">
            <div className="react-icon">Icon</div>
            <div className='card-title'> Dentistry</div>
          </div>
        </div>
        <div className="card">
          <div className="card-content">
            <div className="react-icon">Icon</div>
            <div className='card-title'> Dentistry</div>
          </div>
        </div>

        <div className="card">
          <div className="card-content">
            <div className="react-icon">Icon</div>
            <div className='card-title'> Dentistry</div>
          </div>
        </div>
        

        <div className="card">
          <div className="card-content">
            <div className="react-icon">Icon</div>
            <div className='card-title'> Dentistry</div>
          </div>
        </div>

        <div className="card">
          <div className="card-content">
            <div className="react-icon">Icon</div>
            <div className='card-title'> Dentistry</div>
          </div>
        </div>
        </div>
        <button className='view-all'>View all</button>
      </section> */}
<Specialization/>

      <Specialists />
    

<Patient/>
<Blog/>
<Fam/>
<Faq/>

    </>
  )
}

export default Home