import image from '../../assets/images/Main1.jpg'


function Main2() {
  return (
    <div className='my-20'>
        <div>
            <h1 className='text-4xl px-2 py-4 text-center'>Our features</h1>
            <p className='text-center '>We offer a range of features to help you prepare for interviews. <br /> Whether you are just getting started or you are ready to take your skills to the next level. We have evrything you need to succeed</p>
        </div>
        <div className='flex justify-center my-10 py-10 '>
            <button className='bg-blue-600 text-white px-5 py-3 mx-3 rounded-lg flex hover:bg-blue-800'>Learn more</button>

        </div>
        <div className='grid grid-cols-4 px-4 py-4 mx-2 gap-8 my-10'>                    
            <div className='bg-white rounded-lg shadow-lg p-4 hover:drop-shadow-xl'>
                        <img src={image} alt='Card Image' className='w-full h-auto rounded-2xl' />
                        <h2 className='text-xl font-bold mt-4'>Card Heading</h2>
                        <p className='mt-2'>Card Description</p>
            </div>
            <div className='bg-white rounded-lg shadow-lg p-4 hover:drop-shadow-xl'>
                        <img src={image} alt='Card Image' className='w-full h-auto rounded-2xl' />
                        <h2 className='text-xl font-bold mt-4'>Card Heading</h2>
                        <p className='mt-2'>Card Description</p>
            </div>
            <div className='bg-white rounded-lg shadow-lg p-4 hover:drop-shadow-xl'>
                        <img src={image} alt='Card Image' className='w-full h-auto rounded-2xl' />
                        <h2 className='text-xl font-bold mt-4'>Card Heading</h2>
                        <p className='mt-2'>Card Description</p>
            </div>
            <div className='bg-white rounded-lg shadow-lg p-4 hover:drop-shadow-xl'>
                        <img src={image} alt='Card Image' className='w-full h-auto rounded-2xl' />
                        <h2 className='text-xl font-bold mt-4'>Card Heading</h2>
                        <p className='mt-2'>Card Description</p>
            </div>
        </div>
        <div className='grid grid-cols-3 px-4 py-8 gap-12 mx-2 '>
                <div className='bg-white rounded-lg shadow-lg p-4 py-10 hover:drop-shadow-xl'>
                    <h1 className='text-xl font-bold'>Total Students</h1>
                    <p>1000+</p>
                </div>
                <div className='bg-white rounded-lg shadow-lg p-4 py-10 hover:drop-shadow-xl'>
                    <h1 className='text-xl font-bold'>Total Students</h1>
                    <p>1000+</p>
                </div>
                <div className='bg-white rounded-lg shadow-lg p-4 py-10 hover:drop-shadow-xl'>
                    <h1 className='text-xl font-bold'>Total Students</h1>
                    <p>1000+</p>
                </div>
        </div>
        <div className='grid grid-cols-5 px-4 py-4 mx-2 gap-4 my-10'>
            <div className='bg-white rounded-2xl shadow-lg p-4 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg '>
                <img src={image} alt='Card Image' className='w-full h-auto rounded-2xl' />
            </div>
            <div className='bg-white rounded-2xl shadow-lg p-4 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg '>
                <img src={image} alt='Card Image' className='w-full h-auto rounded-2xl' />
            </div>
            <div className='bg-white rounded-2xl shadow-lg p-4 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg '>
                <img src={image} alt='Card Image' className='w-full h-auto rounded-2xl' />
            </div>
            <div className='bg-white rounded-2xl shadow-lg p-4 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg '>
                <img src={image} alt='Card Image' className='w-full h-auto rounded-2xl' />
            </div>
            <div className='bg-white rounded-2xl shadow-lg p-4 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg '>
                <img src={image} alt='Card Image' className='w-full h-auto' />
            </div>
        </div>
        
    </div>
  )
}


export default Main2