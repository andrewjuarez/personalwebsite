import React from 'react';
import './NameCard.css'

const NameCard = () => {
    return (
        <div className="name-card">
            <h1>Andrew Juarez</h1>
            <div className="ui breadcrumb">
            <a className="section" href="https://www.linkedin.com/in/andrewjuarezca/"><i className="linkedin icon"></i></a>
                <div className="divider">|</div>
                <a className="section" href="https://github.com/andrewjuarez"><i className="github square icon"></i></a>
            </div>
            <hr />
        </div>
    );
}

export default NameCard;