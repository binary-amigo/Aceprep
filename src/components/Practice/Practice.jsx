import React from 'react'
import ImageBox from './components/Imagebox'
import CardSection from './components/Card'
import SheetCard from './components/SheetCards'
import FooterImage from './components/Footer'
import Navbar from './components/Navbar'

function Practice() {
  return (
    <div>
      <Navbar/>
      <ImageBox />
      <CardSection />
      <SheetCard />
      <FooterImage />
    </div>
  )
}

export default Practice
