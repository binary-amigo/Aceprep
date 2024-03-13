import React from 'react';
import Lottie from 'react-lottie'
import animationData from '../../../assets/lotties/practiceAnimation.json'
import animationData2 from '../../../assets/lotties/practiceArrow.json'

// Import your image here

const ImageBox = () => {

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  const defaultOptions2 = {
    loop: true,
    autoplay: true,
    animationData: animationData2,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <div className="" >
      <div className="bg-red   rounded-lg overflow-hidden">
      <Lottie 
	    options={defaultOptions}
        height={600}
        width={600}
      />
      <Lottie 
	    options={defaultOptions2}
        height={100}
        width={100}
      />
      </div>
    </div>
  );
};

export default ImageBox;
