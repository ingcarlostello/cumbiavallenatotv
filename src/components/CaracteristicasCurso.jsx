import React from 'react';

const CaracteristicasCurso = () => {
    return (
        <section id="caracteristicas" className="bg-yellow-300">
            <div className="grid grid-cols-3 gap-2 place-content-around h-80 ">
                <div className="grid justify-items-stretch">
                    <i className="fas fa-book text-8xl justify-self-center"></i> 
                    <p className="font-sans text-4xl justify-self-center">X Lecciones</p>
                </div>
                <div className="grid justify-items-stretch">
                    <i className="far fa-clock text-8xl justify-self-center"></i>
                    <p className="font-sans text-4xl justify-self-center">4 Horas</p>
                </div>
                <div className="grid justify-items-stretch">
                    <i className="fas fa-layer-group text-8xl justify-self-center"></i>
                    <p className="font-sans text-4xl justify-self-center">Nivel Basico</p>
                </div>
            </div>                
        </section>
    );
};

export default CaracteristicasCurso;