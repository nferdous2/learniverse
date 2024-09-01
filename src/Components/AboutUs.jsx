import React from 'react';
import about from "../assets/img/about-03.webp"
import t1 from "../assets/img/t.png"
import course from "../assets/img/course.png"

const AboutUs = () => {
    return (
        <>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-8 py-12 lg:p-20">
                <div class="relative">
                    <img src={about} alt="Person" class="rounded-lg shadow-lg w-full" />
                    <div class="w-4/12 absolute bottom-0 left-0 transform translate-x-4 translate-y-4 bg-white p-4 rounded-lg shadow-lg">
                        <div class="flex items-center space-x-2 ">
                            <img class="bg-red-50 p-3 rounded-full " src={course} style={{ width: "30%", }} />

                            <div>
                                <h3 class="text-xl font-semibold text-gray-800">20K+</h3>
                                <p class="text-gray-500 text-sm">Enrolled Learners</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div class="mb-6">
                        <h3 class="text-sm text-gray-500 font-bold uppercase mb-2">About Us</h3>
                        <h2 class="text-4xl font-bold text-gray-900">
                            Over 10 Years in <span class="text-pink-500">Distant learning</span> for Skill Development
                        </h2>
                    </div>
                    <p class="text-gray-500 mb-6">
                    With our online courses, students can access high-quality education from the comfort of their own homes, while our offline courses provide in-person learning experiences. Whether you need help with assignments, want to learn new subjects, or have questions, our experts are always there to support you on your educational journey.                    </p>
                    <ul class="space-y-4">
                        <li class="flex items-center">
                            <img src={t1} style={{ width: "5%" }} />

                            <span class="text-gray-700 font-semibold">Expert Trainers</span>
                        </li>
                        <li class="flex items-center">
                            <img src={t1} style={{ width: "5%" }} />

                            <span class="text-gray-700 font-semibold">Online Remote Learning</span>
                        </li>
                        <li class="flex items-center">
                            <img src={t1} style={{ width: "5%" }} />

                            <span class="text-gray-700 font-semibold">Lifetime Access</span>
                        </li>
                    </ul>
                </div>
            </div>

        </>
    );
};

export default AboutUs;