import React from 'react';
import './Hackathon.css'

class Hackathon extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            name: props.name,
            description: props.description,
            github: props.github,
            devpost: props.devpost
        };
    }

    renderGitLink = () => {
        if(!this.state.github || this.state.github === "") {
            return;
        }
        else {
            return (
                <div className="item">
                    <i className="github icon" />
                    <div className="content">
                        <a href={this.state.github}>&nbsp;Github</a>
                    </div>
                </div>
            );
        }
    }

    renderDevpostLink = () => {
        if(!this.state.devpost || this.state.devpost === ""){
            return;
        } else {
            return (
                <div className="item">
                    <i className="code icon" />
                    <div className="content">
                        <a href={this.state.devpost}>Devpost</a>
                    </div>
                    
                </div>
            );
        }
    }

    renderLinks = () => {
        return (
            <div className="links-list ui list">
                {this.renderDevpostLink()}
                {this.renderGitLink()}
            </div>
        )
    }
    
    render() {
        return (
            <div className="hackathon ui card fluid">
                <div className="content">
                    <div className="header">
                        {this.state.name}
                    </div>
                    <div className="description">
                        {this.state.description}
                        {this.renderLinks()}
                    </div>
                </div>
            </div>
        );
    }
};

export default Hackathon;