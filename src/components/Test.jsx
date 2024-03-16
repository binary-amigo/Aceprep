import React from 'react'
import ImageBox from './Practice/components/Imagebox'
import CardSection from './Practice/components/Card'
import SheetCard from './Practice/components/SheetCards'
import FooterImage from './Practice/components/Footer'
import Navbar from './Practice/components/Navbar'

function test() {
  return (
    <div className='flex flex-col h-screen'>
      <div className=' fixed top-0 left-0 w-full text-black z-10'>
        <Navbar/>
      </div>
      
      <div className='pt-12 flex-1 overflow-auto'>
      <ImageBox />
      <CardSection />
      <SheetCard />
      <FooterImage />
      </div>
    </div>
  )
}

export default test
