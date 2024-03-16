import Navbar from "./Main/Navbar"
import Main1 from "./Main/Main1"
import Main2 from "./Main/Main2"
import Footer from "./Main/Footer"


function Main() {
  return (

<div className='flex flex-col h-screen scroll-smooth'>
<div className=' fixed top-0 left-0 w-full text-black z-10'>
  <Navbar/>
</div>

<div className='pt-12 flex-1 overflow-auto'>
<Main1 />
      <Main2 />
      <Footer />
</div>
</div>
  )
}

export default Main