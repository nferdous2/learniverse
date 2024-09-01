import React from 'react';
import faq from "../assets/img/faq.jpg"

const FrequentlyAsk = () => {
    return (
        <div className="text-center mb-12">
                    <h2 className="text-4xl">
                        What <span className="text-teal-500 font-bold">People</span> Ask.
                    </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6 lg:p-20">
            <div className="flex justify-center items-center">
                <img src={faq} alt="Course Image" className="rounded-lg shadow-lg max-w-full h-auto" />
            </div>

            <div>
                <div className="collapse collapse-arrow bg-base-200 mb-4">
                    <input type="radio" name="accordion" defaultChecked />
                    <div className="collapse-title text-xl font-medium">What is the course duration?</div>
                    <div className="collapse-content">
                        <p>The course duration varies depending on the content, but most courses take around 6-8 weeks to complete.</p>
                    </div>
                </div>

                <div className="collapse collapse-arrow bg-base-200 mb-4">
                    <input type="radio" name="accordion" />
                    <div className="collapse-title text-xl font-medium">Are there any prerequisites?</div>
                    <div className="collapse-content">
                        <p>Some courses require prior knowledge or experience, while others are suitable for beginners. Please check the course description for specific requirements.</p>
                    </div>
                </div>

                <div className="collapse collapse-arrow bg-base-200 mb-4">
                    <input type="radio" name="accordion" />
                    <div className="collapse-title text-xl font-medium">Is there a certificate provided?</div>
                    <div className="collapse-content">
                        <p>Yes, a certificate of completion is provided for all courses once you meet the required criteria.</p>
                    </div>
                </div>

                <div className="collapse collapse-arrow bg-base-200 mb-4">
                    <input type="radio" name="accordion" />
                    <div className="collapse-title text-xl font-medium">How much do the courses cost?</div>
                    <div className="collapse-content">
                        <p>The cost varies by course. Some are free, while others may require a one-time fee or subscription. Please refer to the course page for pricing details.</p>
                    </div>
                </div>

                <div className="collapse collapse-arrow bg-base-200 mb-4">
                    <input type="radio" name="accordion" />
                    <div className="collapse-title text-xl font-medium">Can I access the course materials after completion?</div>
                    <div className="collapse-content">
                        <p>Yes, you will have lifetime access to the course materials after completion, so you can revisit the content anytime.</p>
                    </div>
                </div>

                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="accordion" />
                    <div className="collapse-title text-xl font-medium">Is there support available during the course?</div>
                    <div className="collapse-content">
                        <p>Yes, our instructors and support team are available to help you with any questions or issues during the course.</p>
                    </div>
                </div>

            </div>
        </div>
</div>
    );
};

export default FrequentlyAsk;