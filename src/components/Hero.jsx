import React from 'react';
import image from '../images/imgCaja1.png';

const Hero = () => {
    return (
        <section id='hero'>
            <div class="grid grid-cols-2 gap-2 bg-yellow-300">
                <div className="bg-blue-200 flex justify-center">
                    <div className="h-96">
                        <img src={image} alt="Curso Timbal" className="h-full"/>
                    </div>
                </div>
                <div className="bg-red-300">
                    <h1 className="text-6xl">Curso Timbal 2021</h1>
                </div>
            </div>            
        </section>
    );
};

export default Hero;