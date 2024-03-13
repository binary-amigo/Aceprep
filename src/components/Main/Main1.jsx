import image from '../../assets/images/Main1.jpg'

function Main1() {
    return (
        <div className="flex justify-center items-center h-screen bg-cover" style={{ backgroundImage: `url(${image})` }}>
            <div>
                <h1 className='text-white text-8xl'>Land your dream job with AcePrep</h1>
                <p className='text-white px-2 py-4'>Prepare for interviews, practice with experts, and get hired at top companies</p>
            </div>
        </div>
    )
}

export default Main1