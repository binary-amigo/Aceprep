import image from '../../assets/images/Main1.jpg' // imp


function ImageCards() {
    return (
        <div className="grid grid-cols-3 gap-8  h-screen p-8">
            <div className="bg-gray-200 p-4 rounded-lg">
                <img src={image} alt="Image 1" className="w-full h-auto" />
            </div>
            <div className="bg-gray-200 p-4 rounded-lg">
                <img src={image} alt="Image 2" className="w-full h-auto" />
            </div>
            <div className="bg-gray-200 p-4 rounded-lg">
                <img src={image} alt="Image 3" className="w-full h-auto" />
            </div>
            <div className="bg-gray-200 p-4 rounded-lg">
                <img src={image} alt="Image 1" className="w-full h-auto" />
            </div>
            <div className="bg-gray-200 p-4 rounded-lg">
                <img src={image} alt="Image 2" className="w-full h-auto" />
            </div>
            <div className="bg-gray-200 p-4 rounded-lg">
                <img src={image} alt="Image 3" className="w-full h-auto" />
            </div>
        </div>
    )
}

export default ImageCards