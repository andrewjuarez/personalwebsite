import React from 'react';
import Hackathon from './Hackathon';
import './HackathonsList.css'

// This Component generates Hackathon Components and lists them in a nice segment.
class HackathonsList extends React.Component {
    state = {
        count: 0,
        hackathons: [
            {
                id: 0,
                name: "Hack UCI 2019",
                description: `Given 36 hours we wanted to build an IDE that helps
                professors and TA's easily administer coding assignments. Instructors generate a unique
                session key that is shared with students. The students use the session key to enter
                a code editor where the code is written and submitted to the instructor for review.
                I worked primarily on the back-end and assisted on the front-end.`,
                github: "https://github.com/andrewjuarez/codetutor",
                devpost: "https://devpost.com/software/code-tutor"
            },
            {
                id: 1,
                name: "SB Hacks 2019",
                description: `Ever notice that everytime you log onto Facebook to look
                something up you get distracted and before you know it you just wasted
                an hour and a half looking at memes and notifications from your aunt Sally?
                We aimed at creating an event platform for college students to elimate the
                distractions. Events are sorted and displayed by relevance such as 'professional networking'
                'parties', 'free food', etc. How I contributed? I designed and implemented the back-end
                utilizing Node.js, Express, MongoDB, and Google APIs to convert addresses to coordinates.`,
                github: "https://github.com/andrewjuarez/sbhacksv-server",
                devpost: "https://devpost.com/software/youni"
            },
            {
                id: 2,
                name: "LA Hacks 2018",
                description: `Since this was my second hackathon I was determined to build a working application. 
                I was excited to form a team with students from Oregon State University and USC. 
                We built a chat bot web application using Google Diagflow with the intention
                of educating millenials on financial literacy. I developed the back-end using Flask and a simple
                HTML, CSS, Bootstrap front-end. I had fun collaborating with students from other schools.`,
                github: "https://github.com/jeanietwo/botbucks"
            },
            {
                id: 3,
                name: "Hack UCI 2018",
                description: `This was my first hackathon. I've heard so much about them and I was excited to
                finally attend one. I formed a team with other UCI students. Our idea was to create a mobile app that
                authenticates users with the Facebook API. We then wanted to pull their friends list from
                Facebook showing which ones are in the immediate area and available to grab lunch or coffee.
                This app is ideal for someone who is visiting another town for a doctor appointment and has
                free time available for catching up with old friends or colleagues. We don't have a demo
                available but it was the experience that made it count!`
            }
        ]
    };
    
    renderList = () => {
        return this.state.hackathons.map((hackathon) => {
            return (
                <Hackathon key={hackathon.id}
                    name={hackathon.name}
                    description={hackathon.description}
                    github={hackathon.github}
                    devpost={hackathon.devpost}
                />
            )
        });
    } 

    render() {
        return (
            <div className="ui segment hackathons-list">
                <h4 className='hackathonListHeader'>{this.state.hackathons.length} hackathons attended</h4>
                {this.renderList()}
            </div>
        );
    }
};

export default HackathonsList;