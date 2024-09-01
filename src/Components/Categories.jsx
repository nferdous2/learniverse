import React from 'react';
import web from "../assets/img/web.png"
import digital from "../assets/img/digital.png"
import data from "../assets/img/data.png"
import software from "../assets/img/software.png"
import graphic from "../assets/img/graphic.png"
import network from "../assets/img/network.png"
const Categories = () => {
    return (
        <>
            <div className="container mx-auto px-6 py-10">
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-4xl text-center flex-1">
                        <span className="text-gray-400 text-2xl">Categories</span><br />
                        Our <span className="text-teal-500 font-bold">Top</span> Courses.
                    </h2>
                    <button className="bg-black text-white px-6 py-3 rounded-lg flex items-center space-x-2 hover:bg-gray-800">
                        <span>View All Categories</span>
                    </button>

                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                    <div className="bg-pink-100 p-6 rounded-lg text-center">
                        <img src={web} alt="Web Design" className="mx-auto mb-4 w-20" />
                        <h3 className="text-xl font-semibold">Web Design</h3>
                        <p className="text-gray-600">78 Courses</p>
                    </div>
                    <div className="bg-green-100 p-6 rounded-lg text-center">
                        <img src={digital} alt="Digital Marketing" className="mx-auto mb-4 w-20" />
                        <h3 className="text-xl font-semibold">Digital Marketing</h3>
                        <p className="text-gray-600">58 Courses</p>
                    </div>
                    <div className="bg-pink-100 p-6 rounded-lg text-center">
                        <img src={data} alt="Data Science" className="mx-auto mb-4 w-20" />
                        <h3 className="text-xl font-semibold">Data Science</h3>
                        <p className="text-gray-600">24 Courses</p>
                    </div>
                    <div className="bg-green-100 p-6 rounded-lg text-center">
                        <img src={software} alt="Software Development" className="mx-auto mb-4 w-20" />
                        <h3 className="text-xl font-semibold">Software Development</h3>
                        <p className="text-gray-600">48 Courses</p>
                    </div>
                    <div className="bg-pink-100 p-6 rounded-lg text-center">
                        <img src={graphic} alt="Graphic Design" className="mx-auto mb-4 w-20" />
                        <h3 className="text-xl font-semibold">Graphic Design</h3>
                        <p className="text-gray-600">18 Courses</p>
                    </div>
                    <div className="bg-green-100 p-6 rounded-lg text-center">
                        <img src={network} alt="Network Administration" className="mx-auto mb-4 w-20" />
                        <h3 className="text-xl font-semibold">Network Administration</h3>
                        <p className="text-gray-600">48 Courses</p>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Categories;