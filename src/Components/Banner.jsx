import React from 'react';
import banner from "../assets/img/b1.jpg";
import s1 from "../assets/img/s1.png";
import s2 from "../assets/img/s2.png";
import s3 from "../assets/img/s3.png";
import s4 from "../assets/img/s4.png";


const Banner = () => {
    return (
        <>


            <div
                className="mb-5 relative h-[80vh] flex flex-col justify-center items-center text-center bg-cover bg-center bg-no-repeat sm:bg-none"
                style={{ backgroundImage: `url(${banner})` }}
            >
                <p className="lg:text-5xl font-bold mb-5 text-2xl">
                    The Best Program to <br /> Enroll for Exchange
                </p>
                <p className="lg:text-2xl mb-5 text-xl">
                    Learn, Network, and Succeed Worldwide
                </p>
                <button className="btn btn-active bg-teal-500 text-white mt-5 lg:w-52">Explore</button>
            </div>
            {/* service section */}
            <div className="text-center mb-12">
                <h2 className="text-4xl">
                    <span className="text-gray-400 text-2xl ">Services</span><br />
                    Online <span className="text-teal-500 font-bold">Classes</span> For Remote Learning.
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mx-8 lg:p-20">
                    {/* Online Degree Programs */}
                    <div className=" text-gray-500 bg-green-50 p-8 rounded-lg text-center hover:bg-teal-500 hover:text-white">
                        <img src={s1} className="bg-green-100 rounded-full p-4 mb-4 inline-block" style={{ width: "30%" }} />
                        <h3 className="text-xl font-semibold mb-2">Online Degree Programs</h3>
                        <p className="mb-4">
                            Explore a wide range of accredited online degrees from top institutions.
                        </p>
                        <span className="bg-teal-100 text-teal-600 px-4 py-2 rounded-full">15 Courses</span>
                    </div>

                    <div className=" text-gray-500 bg-red-50 p-8 rounded-lg text-center hover:bg-red-400 hover:text-white">
                        <img src={s3} className="bg-red-100 rounded-full p-4 mb-4 inline-block" style={{ width: "30%" }} />
                        <h3 className="text-xl font-semibold mb-2">Non-Degree Programs</h3>
                        <p className="mb-4">
                            Boost your skills with short-term professional and personal development courses.
                        </p>
                        <span className="bg-red-100 text-red-600 px-4 py-2 rounded-full">8 Courses</span>
                    </div>

                    <div className=" text-gray-500 bg-blue-50 p-8 rounded-lg text-center hover:bg-blue-600 hover:text-white">
                        <img src={s2} className="bg-blue-100 rounded-full p-4 mb-4 inline-block" style={{ width: "30%" }} />
                        <h3 className="text-xl font-semibold mb-2">Off-Campus Programs</h3>
                        <p className="mb-4">
                            Gain hands-on experience with our practical off-campus learning programs.
                        </p>
                        <span className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full">9 Courses</span>
                    </div>

                    <div className=" text-gray-500 bg-yellow-50 p-8 rounded-lg text-center hover:bg-orange-400 hover:text-white">
                        <img src={s4} className="bg-yellow-100 rounded-full p-4 mb-4 inline-block" style={{ width: "30%" }} />
                        <h3 className="text-xl font-semibold mb-2">Hybrid Distance Programs</h3>
                        <p className="mb-4">
                            Enjoy the flexibility of both online and in-person learning with our hybrid programs.
                        </p>
                        <span className="bg-yellow-100 text-yellow-600 px-4 py-2 rounded-full">8 Courses</span>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Banner;
