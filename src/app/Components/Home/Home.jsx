import React from 'react';
import "./Home.css";
import Image from 'next/image';

const Main = () => {
    return (
        <>
            <div>
                <div className="videoContainer">
                    <video className="video"  autoPlay loop muted>
                        <source src="/home_page/Homevideo.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>  
            </div>
        </>
    );
}

export default Main;
