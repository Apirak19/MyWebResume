import React from 'react'

const Experience = () => {
return (
<section id="resume" className="resume" >
        <div
        className="bg-cover bg-center h-64 md:bg-contain md:bg-right"
        style={{
        backgroundImage: `url('/assets/images/dsdw.jpg')`
        }}
        // data-aos="fade-up"
        >
                <div className="section-title">
                <h2>Experience</h2>
                </div>

                <div className="flex">
                        <div className="w-1/2">
                                <h3 className="resume-title">Professional Experience</h3>

                                <div className="resume-item">
                                        <h4>Senior graphic design specialist</h4>
                                        <h5>2019 - Present</h5>
                                        <p><em>Experion, New York, NY </em></p>
                                        <ul>
                                                <li>Lead in the design, development, and implementation of the graphic, layout, and production communication materials</li>
                                                <li>Delegate tasks to the 7 members of the design team and provide counsel on all aspects of the project. </li>
                                                <li>Supervise the assessment of all graphic materials in order to ensure quality and accuracy of the design</li>
                                                <li>Oversee the efficient use of production project budgets ranging from $2,000 - $25,000</li>
                                        </ul>
                                </div>
                        </div>
                </div>
        </div>
</section >
)
}

export default Experience
