import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Course = () => {
  const [service, setService] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);

  useEffect(() => {
    fetch('https://learniverse-server.vercel.app/course')
      .then(res => res.json())
      .then(data => {
        setService(data);
        setFilteredCourses(data);
      });
  }, []);

  return (
    <>
      <h2 className="text-3xl text-center flex-1">
      Pick A   <span className="text-teal-500 font-bold">Course</span>  To Get Started
      </h2>


      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:p-20">
        {filteredCourses.map((pd) => (
          <div className="col" key={pd._id}>
            <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col h-full">
              <div className="relative h-48">
                <img src={pd.thumbnail} className="object-cover w-full h-full" alt='' />
                <small
                  className="absolute top-2 left-2 bg-orange-500 text-white rounded py-1 px-3 text-sm"
                >
                  New Course
                </small>
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <h5 className="text-lg font-semibold mb-2">{pd.name}</h5>
                <p className="text-gray-600 mb-4">{pd.description}</p>
                <p className="text-sm text-gray-700"><strong>Instructor:</strong> {pd.instructor}</p>
                <div className="mt-auto flex justify-between items-center">
                  <Link
                    to={`/details/${pd._id}`}
                    className="bg-teal-500 text-white py-2 px-4 rounded-lg text-sm mt-5"
                  >
                    View Detail
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Course;
