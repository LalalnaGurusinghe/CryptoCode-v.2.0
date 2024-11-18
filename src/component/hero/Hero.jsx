import React from 'react';
import "./Hero.scss";
import Mob from "../../assets/Mob.png";


const Hero = () => {
    return (
        <section className="hero">
            <div className="hero__container wrapper">
                <div className="hero__left">
                    <img src={Mob} alt="hero" />
                </div>

                <div className="hero__right">
                    <h1>Make Easier Your Crypto Transactions.</h1>
                    <p>
                        Simplify your crypto journey with a secure and user-friendly platform. 
                         Manage your assets, track transactions, and stay updated with the latest trends, 
                         all in one place.
                    </p>
                    <a href="#" className='btn'>Get Started</a>
                </div>
            </div>
        </section>
    )
}

export default Hero;