import React from 'react';

const ExperienceCard = () => {
    return (
        <div className='ui card fluid'>
            <div className="content">
                <div className="header">Experience</div>
                <div className="description">
                    <strong style={{textDecoration: 'underline'}}>Lead Engineer (Feb 2020 - Present)</strong>
                    <br />
                    I transitioned into the role of lead engineer at <a href="finityone.com">FinityOne</a>. I lead interns on internal and customer projects.

                    <br />
                    <br />
                    <strong style={{textDecoration: 'underline'}}>Software Engineer Intern (July 2019 - Feb 2020)</strong>
                    <br />
                    I interned as a <strong>full-stack</strong> software engineer for <a href="finityone.com">FinityOne</a> utilizing React, Redux, Node.js, and MySQL. I am capabable of building
                    and deploying projects on AWS. I was recongized as <a href='https://www.linkedin.com/posts/finityone_finityone-internofthemonth-july2019-activity-6564983047542886400-lKf-'>intern of the month for July</a>.
                </div>
            </div>
        </div>
    );
};

export default ExperienceCard;