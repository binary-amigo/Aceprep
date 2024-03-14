import image from '../../assets/images/Main1.jpg' // imp

function Image() {
return (
    <div className="w-screen h-screen">
            <img src={image} alt="background image" className="w-full h-full" />
    </div>
)
}

export default Image