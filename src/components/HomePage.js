import React from 'react';
import headshot from './headshot-cropped.jpg';
import NameCard from './NameCard';
import IntroCard from './IntroCard';
import ContactCard from './ContactCard';
import HackathonsList from './HackathonsList';

class HomePage extends React.Component {
    render() {
        return (
            <div className='ui container' style={{marginTop: '10px'}}>
                

                <div className="ui grid">
                    <div className="row">
                        <NameCard />
                    </div>
                    
                    <div className="row">
                        <div className="column eight wide"> 
                            <IntroCard />
                            <ContactCard />
                        </div>

                        <div className="column eight wide">
                            <img className="headshot ui medium circular image" src={headshot} alt='Andrew' />
                        </div>
                    </div>

                    <HackathonsList />
                </div>
                

                

            </div>
        )
    }
}

export default HomePage;