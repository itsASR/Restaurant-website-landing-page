import React from 'react'
import './App.css'
import family from './bg/family-pic.jpg'
import faqimg from './bg/faq-image.png'
import tableprice from './bg/tableprice.png'
import Header from './Header'
import whatsapp from './bg/whatsapp.png'

function App() {
  return (
    <>
      <Header></Header>
      <img src= {whatsapp} className='whatsapp'></img>
      <div className="slide1div">
        <div className='slide1div-left'>
          <p>Dinner By The Bay</p>
        </div>
        <div className='slide1div-right'>
          <p>Have the night of a lifetime</p>
          <p>25 May 2030 (Saturday)  |  7 p.m. to 10 p.m.</p>
          <button>Reserve</button>
        </div>
      </div>


      <div className="slide2div">
        <div className='slide2div-left'>
          <p>A full-course dinner that will delight your senses</p>
        </div>
        <div className='slide2div-right'>
          <img src={family}></img>
          <p>You might want to highlight some of your signature dishes or most important services with a quick write-up about them. Don’t make it too wordy. Simply discuss the benefits and unique or interesting facts that set your service apart from others. </p>
          <p>Dishes prepared by:</p>
          <p>Francisco Andrade, Executive Chef</p>
        </div>
      </div>


      <div className='slide3'>
        <div className='slide3left'>
          <p>FAQs</p>
        </div>

        <div className='slide3right'>
          <div>
            <p><b>Do you have alternatives for people with dietary restrictions?</b></p>
            <p>Yes. Kindly inform us of any dining requests if you have food allergies or special dietary requirements.</p>
          </div>
          <div>
            <p><b>Do you have alternatives for people with dietary restrictions?</b></p>
            <p>Yes. Kindly inform us of any dining requests if you have food allergies or special dietary requirements.</p>
          </div>
          <div>
            <p><b>Do you have alternatives for people with dietary restrictions?</b></p>
            <p>Yes. Kindly inform us of any dining requests if you have food allergies or special dietary requirements.</p>
          </div>
          <div>
            <p><b>Do you have alternatives for people with dietary restrictions?</b></p>
            <p>Yes. Kindly inform us of any dining requests if you have food allergies or special dietary requirements.</p>
          </div>

        </div>
      </div>

      {/* **************slide 4************ */}

      <div className='slide3'>
        <div className='slide3left'>

        </div>

        <div className='slide3right'>
          <div>
            <p><b>Do you have alternatives for people with dietary restrictions?</b></p>
            <p>Yes. Kindly inform us of any dining requests if you have food allergies or special dietary requirements.</p>
          </div>
          <div>
            <p><b>Do you have alternatives for people with dietary restrictions?</b></p>
            <p>Yes. Kindly inform us of any dining requests if you have food allergies or special dietary requirements.</p>
          </div>
          <div>
            <p><b>Do you have alternatives for people with dietary restrictions?</b></p>
            <p>Yes. Kindly inform us of any dining requests if you have food allergies or special dietary requirements.</p>
          </div>
          <div>
            <img src={faqimg}></img>
          </div>

        </div>
      </div>

      {/* **************slide 5******* */}
      <div className="slide5">
        <div className='slide5left'>
          <div><span className='slide5leftprice'>Prices</span></div>
          <div className='rates-div'>
            <div>
              <p>Birthday Party</p>
              <p>100/head</p>
            </div>
            <div>
              <button>Know More</button>
            </div>
          </div>

          <div className='rates-div'>
            <div>
              <p>Wedding Party</p>
              <p>150/head</p>
            </div>
            <div>
              <button>Know More</button>
            </div>
          </div>

          <div className='rates-div'>
            <div>
              <p>Small Party</p>
              <p>120/head</p>
            </div>
            <div>
              <button>Know More</button>
            </div>
          </div>


        </div>
        <div className="slide5right">
          <div className='priceheaddiv'>
            <img src={tableprice}></img>
          </div>
        </div>
      </div>

      {/* ***************slide 6******* */}
      <div className="slide6">
        <div className="slide6left">
          <div>
            <p>Demo Restaurant</p>
            {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.083216803036!2d75.83745507414898!3d26.900853960602433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db6c2975ee171%3A0x61b8d04c79d0d5c7!2sCMHO%20OFFICE%20RAJAPARK%20jaipur!5e0!3m2!1sen!2sin!4v1711966063102!5m2!1sen!2sin" ></iframe> */}
          </div>
        </div>
        <div className="slide6right">
          <span>Book a table</span>
          <div className='form-div'>
            <form>
              <input type='text' placeholder='Enter Name'></input><br></br>
              <input type='number' placeholder='Enter Number'></input><br></br>
              <input type='number' placeholder='Number of Guest'></input><br></br>
              <input type='datetime-local' ></input>
              <input type='submit' className='submitbtn'></input>
            </form>
          </div>

        </div>
      </div>



    </>
  )
}

export default App