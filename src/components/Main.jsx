import Navbar from "./Main/Navbar"
import Main1 from "./Main/Main1"
import Main2 from "./Main/Main2"
import Footer from "./Main/Footer"

function Main() {
  return (
    <div className='scroll-smooth'>
      <Navbar />
      <div className="pt-16"> {/* Add padding-top to account for fixed navbar */}
        <Main1 />
        <Main2 />
        {/* <Footer /> */}
      </div>
    </div>
  )
}

export default Main