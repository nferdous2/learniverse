import { useLoaderData } from "react-router-dom";

const Details = () => {
    const course = useLoaderData();
    const {
        name,
        thumbnail,
        instructor,
        description,

        enrollmentStatus,
        duration,
        schedule,
        location,
        prerequisites = [],
        syllabus = [],
        dueDate,
    } = course;


    const enrollInCourse = async () => {
        try {
            const response = await fetch("https://learniverse-server.vercel.app/enrolled", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(course),
            });

            if (response.ok) {
                alert("Course enrolled successfully!");
                window.location.href = "/";
            } else {
                alert("Failed to enroll in the course");
            }
        } catch (error) {
            alert("Error enrolling in the course");
        }
    }

    return (
        <div className="container mx-auto p-4">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden grid lg:grid-cols-2 gap-6">
                <div className="flex flex-col">
                    <img src={thumbnail} className="w-full h-84 object-cover" alt={name} />
                    <div className="p-6">
                        <h5 className="text-2xl font-semibold mb-2">{name}</h5>
                        <p className="text-gray-600"><strong>Instructor:</strong> {instructor}</p>
                        <p className="text-gray-600"><strong>Description:</strong> {description}</p>

                    </div>
                </div>

                {/* Right Section: Course Info */}
                <div className="p-6 flex flex-col justify-between">
                    <ul className="space-y-4">
                        <li><strong>Enrollment Status:</strong> {enrollmentStatus}</li>
                        <li><strong>Duration:</strong> {duration}</li>
                        <li><strong>Schedule:</strong> {schedule}</li>
                        <li><strong>Location:</strong> {location}</li>
                        <li><strong>Due:</strong> {dueDate}</li>
                        <li><strong>Prerequisites:</strong> {prerequisites.join(', ')}</li>

                        <details className="dropdown">
                            <summary className="btn m-1">Syllabus</summary>
                            <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-96 p-2 shadow">
                                {syllabus.map((item) => (
                                    <li key={item.week}>
                                        <div className="flex justify-between items-center">
                                            <strong className="mr-2">Week {item.week}:</strong>
                                            <span className="flex-grow text-left">{item.topic}</span>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </details>

                    </ul>

                    {/* Enroll Button */}
                    <button
                        type="button"
                        onClick={enrollInCourse}
                        className="mt-28 bg-teal-500 text-white font-bold py-2 px-4 rounded "
                    >
                        Enroll
                    </button>
                </div>
            </div>
        </div>


    );
};

export default Details;