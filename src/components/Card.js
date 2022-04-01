import React from 'react';
import Carditem from './Carditem';
import './Card.css'

function Card() {
  return (
    <div className='cards'>

      <h1> Check out these EPIC Destinations! </h1> 
      <div className='cards__container'> 
       <div className='cards__wrapper'>

      <ul className='cards__items'>

    <Carditem src="https://github.com/briancodex/react-website-v1/blob/master/public/images/img-9.jpg?raw=true" text="Explore the hidden waterfall deep inside the Amazon jungle" label="adventure" path="/services" />

     
    <Carditem src="https://github.com/briancodex/react-website-v1/blob/master/public/images/img-2.jpg?raw=true" text="Travel through the Island of Bali in a Private Cruise" label=" Luxury" path="/services" />

      </ul>


      <ul className='cards__items'>

<Carditem src="https://github.com/briancodex/react-website-v1/blob/master/public/images/img-3.jpg?raw=true" text="Set sail in the Atlantic Ocean visiting Uncharted Waters" label="mystery" path="/services" />

 
<Carditem src="https://github.com/briancodex/react-website-v1/blob/master/public/images/img-4.jpg?raw=true" text="Experience Football on Top of the Himalayan Mountains" label=" Adventure" path="/products" />



<Carditem src="https://github.com/briancodex/react-website-v1/blob/master/public/images/img-8.jpg?raw=true" text="Ride through the Sahara Desert on a guided camel tour" label=" Adraline" path="/sign-up" />

  </ul>

       </div>
      </div>

    </div>
  )
}

export default Card
