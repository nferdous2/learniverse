import React from 'react';
import img1 from "../assets/img/i1.jpg"
import img2 from "../assets/img/i2.jpg"
import img3 from "../assets/img/i3.jpg"
import img4 from "../assets/img/i4.jpg"
import fb from "../assets/img/facebook.png"
import insta from "../assets/img/instagram.png"
import x from "../assets/img/twitter.png"
const Instructors = () => {
    return (
        <section className="p-8">
            <h2 className="text-4xl text-center">
                <span className="text-gray-400 text-2xl ">Instructors</span><br />
                Course<span className="text-teal-500 font-bold"> Instructors</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

                <div className="card bg-base-100 shadow-xl">
                    <figure className="px-6 pt-6">
                        <img
                            src={img1}
                            alt="Jane Seymour" className="rounded-full w-40 h-40 mx-auto" />
                    </figure>
                    <div className="card-body text-center">
                        <h3 className='font-bold text-xl'>Jane Seymour</h3>
                        <p className="text-gray-500">UI Designer</p>
                    </div>
                    <div className="flex justify-center items-center space-x-4 mb-4">
                        <img src={fb} className="w-10" />
                        <img src={insta} className="w-10" />
                        <img src={x} className="w-10" />
                    </div>

                </div>

                <div className="card bg-base-100 shadow-xl">
                    <figure className="px-6 pt-6">
                        <img
                            src={img2}
                            alt="Edward Norton" className="rounded-full w-40 h-40 mx-auto" />
                    </figure>
                    <div className="card-body text-center">
                        <h3 className='font-bold text-xl'>Edward Norton</h3>
                        <p className="text-gray-500">Web Developer</p>

                    </div>
                    <div className="flex justify-center items-center space-x-4 mb-4">
                        <img src={fb} className="w-10" />
                        <img src={insta} className="w-10" />
                        <img src={x} className="w-10" />
                    </div>

                </div>

                <div className="card bg-base-100 shadow-xl">
                    <figure className="px-6 pt-6">
                        <img
                            src={img3}
                            alt="Penelope Cruz" className="rounded-full w-40 h-40 mx-auto" />
                    </figure>
                    <div className="card-body text-center">
                        <h3 className='font-bold text-xl'>Penelope Cruz</h3>
                        <p className="text-gray-500">Digital Marketer</p>

                    </div>
                    <div className="flex justify-center items-center space-x-4 mb-4">
                        <img src={fb} className="w-10" />
                        <img src={insta} className="w-10" />
                        <img src={x} className="w-10" />
                    </div>

                </div>

                <div className="card bg-base-100 shadow-xl">
                    <figure className="px-6 pt-6">
                        <img
                            src={img4}
                            alt="John Travolta" className="rounded-full w-40 h-40 mx-auto" />
                    </figure>
                    <div className="card-body text-center">
                        <h3 className='font-bold text-xl'>John Travolta</h3>
                        <p className="text-gray-500">WordPress Expert</p>

                    </div>
                    <div className="flex justify-center items-center space-x-4 mb-4">
                        <img src={fb} className="w-10" />
                        <img src={insta} className="w-10" />
                        <img src={x} className="w-10" />
                    </div>

                </div>

            </div>
        </section>

    );
};

export default Instructors;