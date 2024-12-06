import React from 'react';
import { Link } from 'react-router-dom';

const SettingsTab = () => {
    const list = [
        "Organization Profile",
        // "Switch Organization",
        // "Usage Stats",
        "Users",
        "Preferences",
        "Taxes",
        // "Pdf Templates",
        // "Online Payment Gateways",
        // "Opening Screen - Default",
        // "Image Upload Resolution",
        "Privacy & Security",
        "border-bottom",
        "Feedback",
        "Share",
        "Rate App",
        "About"
    ]
    return (
        <div className="tab-navBar vh-100">
            <nav>
                <ul className="list-unstyled mx-4 my-0 font-size">
                    {list.map((text, index) => (
                        <li className="pt-4" key={index}>
                            <Link to="/organizationSetupForm" className="text-decoration-none text-dark">
                                <span>{text}</span>
                            </Link>
                        </li>))}

                </ul>
            </nav>
        </div>
    );
};

export default SettingsTab;
