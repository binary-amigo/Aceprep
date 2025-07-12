import React from 'react'
import Image from './Mock/Image'
import Text from './Mock/Text'
import ImageCards from './Mock/ImageCards'
import Navbar from './Main/Navbar'

function Mock() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-16"> {/* Add padding-top to account for fixed navbar */}
        <Image/>
        <Text/>
        <ImageCards/>
      </div>
    </div>
  )
}

export default Mock