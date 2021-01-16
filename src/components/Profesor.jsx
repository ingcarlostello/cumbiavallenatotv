import React from 'react';

const Profesor = () => {
    return (
        <section id="profesor">
            <h1>El Profesor</h1>
            <div className="grid grid-cols-2 gap-2 bg-yellow-300">
                <div>
                    <p>
                        A Few Words About the Book
                        the
                        My personal experience in the harsh world of business started long time ago. And though I don’t look 50, I’ve been a businessman for 32 years.

                        Thanks to that kind of a prolonged experience I feel like I am able to help others. Basically, all the things that I’ve ever written about in any of my 12 books, is what’s been tested by me practically. The main idea behind my books is a compassionate business.
                        John Jackson
                   </p>
                </div>
                <div className="bg-red-300">
                    <img
                        width="400"
                        height="400"
                        src="https://ld-wp73.template-help.com/woocommerce/prod_2197/v1/wp-content/uploads/2016/10/dude-home.png"
                        sizes="(max-width: 556px) 100vw, 556px"
                        alt="Ferney Toloza"
                    />
                </div>
            </div>
        </section>
    );
};

export default Profesor;