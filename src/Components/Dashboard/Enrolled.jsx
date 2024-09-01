import React, { useEffect, useState } from "react";

const Enrolled = () => {
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  useEffect(() => {
    // Fetch the enrolled courses 
    fetch("https://learniverse-server.vercel.app/enrollcourse")
      .then((res) => res.json())
      .then((data) => setEnrolledCourses(data))
      .catch((error) => console.error("Error fetching courses:", error));
  }, []);

  //course status update
  const handleCompleteCourse = (courseId) => {
    fetch(`https://learniverse-server.vercel.app/enrollcourse/${courseId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status: "completed" }),
    })
      .then((res) => res.json())
      .then((updatedCourse) => {
        setEnrolledCourses((prevCourses) =>
          prevCourses.map((course) =>
            course._id === updatedCourse._id ? updatedCourse : course
          )
        );
        window.location.href = "/dashboard";

        alert(`Course "${updatedCourse.name}" has been completed!`);
      })
      .catch((error) => console.error("Error updating course:", error));
  };
  return (
    <div className="container mx-auto p-4 mb-10">
      <h1 className="text-2xl font-bold mb-6 text-center">Enrolled Courses</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {enrolledCourses.map((course) => (
          <div className="bg-white shadow-md rounded-lg p-4" key={course._id}>
            <img
              src={course.thumbnail}
              alt={course.name}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <h2 className="text-xl font-semibold mt-4">{course.name}</h2>
            <p className="text-gray-600">Instructor: {course.instructor}</p>
            <p className="text-gray-600">Status: {course.status}</p>
            <button
              className={`mt-4 px-4 py-2 text-white rounded ${course.status === "completed"
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-blue-500 hover:bg-blue-600"
                }`}
              disabled={course.status === "completed"}
              onClick={() => handleCompleteCourse(course._id)}
            >
              Complete
            </button>
          </div>
        ))}
      </div>
    </div>

  );
};

export default Enrolled;