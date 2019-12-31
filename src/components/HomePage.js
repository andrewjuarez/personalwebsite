import React from 'react';
import headshot from './headshot-cropped.jpg';
import NameCard from './NameCard';
import IntroCard from './IntroCard';
import ExperienceCard from './ExperienceCard';
import ContactCard from './ContactCard';
import HackathonsList from './HackathonsList';
import Footer from './Footer';

class HomePage extends React.Component {
    render() {
        return (
            <div className='ui container' style={{marginTop: '10px'}}>
                
                <div>
                    <NameCard />
                </div>

                <div className="ui mobile reversed two column stackable grid">
                    
                    
                    <div className="column">
                        
                            <IntroCard />
                            <ExperienceCard />
                            <ContactCard />
                    </div>

                    <div className="column">
                        <img className="centered headshot ui medium circular image" src={headshot} alt='Andrew' />
                    </div>
                    
                </div>

                <HackathonsList />
                <Footer />
            </div>
        )
    }
}

export default HomePage;