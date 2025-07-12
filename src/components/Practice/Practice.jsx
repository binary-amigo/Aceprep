import React from 'react'
import ImageBox from './components/Imagebox'
import CardSection from './components/Card'
import SheetCard from './components/SheetCards'
import FooterImage from './components/Footer'
import Navbar from "../Main/Navbar"

function Practice() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-16"> {/* Add padding-top to account for fixed navbar */}
        <ImageBox />
        <CardSection />
        <SheetCard />
        <FooterImage />
      </div>
    </div>
  )
}

export default Practice
