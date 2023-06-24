import React, { useState } from "react"
import './AboutEz.css'


const AboutEz = () => {


    return (
        <div className="mainpage-right-side-container">
            <div className='app-info-container'>
                <div className="app-info-title">About Ez Connex</div>
                <div className="app-info">
                    Ez Connex is a professional social network used to find work or make connections to help your work life improve!
                </div>
            </div>
            <div className="languages-used-container">
                <div className="languages-row">
                    <span className="language">Ruby</span>
                    <span className="language">Rails</span>
                </div>
                <div className="languages-row">
                    <span className="language">React</span>
                    <span className="language">Redux</span>
                    <span className="language">NPM</span>
                    <span className="language">Javascript</span>
                </div>
                <div className="languages-row">
                    <span className="language">HTML</span>
                    <span className="language">CSS</span>
                </div>
                <div className="languages-row">Hosted using Render</div>
                <div className="text-logo-container">
                    <span className="ezconnex-year">Ez Connex Corporation © 2023</span>
                </div>
            </div>
        </div>
    )
}

export default AboutEz;