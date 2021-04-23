import React from 'react'
import { Subscription } from './Subscription'
import SliderImage from "./SliderImage";

export const Home = () => {
    return (
        <div>
            {/* Hero Section */}
            <SliderImage />
            {/* Intro Section */}
            <section className="intro">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <h2 className="h3">Some great intro here</h2>
                            <p className="text-big">Place a nice <strong>introduction</strong> here <strong>to catch reader's attention</strong>. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderi.</p>
                        </div>
                    </div>
                </div>
            </section>
            {/* Divider Section */}
            <section style={{backgroundImage: "url(https://images.unsplash.com/photo-1543196614-e046c7d3d82e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=898&q=80)",
             backgroundSize: 'cover', backgroundPosition: 'center bottom'}} className="divider">
                <div className="container">
                    <div className="row">
                        <div className="col-md-7">
                            <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</h2><a href="/volunteers/create" className="hero-link">Voluntariado</a>
                        </div>
                    </div>
                </div>
            </section>
            <br/>
            <Subscription/>
        </div>
    )
}
