import React from 'react'

export const Footer = () => {
    return (
        <footer className="main-footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <div className="logo">
                            <h6 className="text-white">ONG TEAM</h6>
                        </div>
                        <div className="contact-details">
                            <p>53 Broadway, Broklyn, NY 11249</p>
                            <p>Phone: (020) 123 456 789</p>
                            <p>Email: Info@Company.com</p>
                            <ul className="social-menu">
                                <li className="list-inline-item"><a href="#"><i className="fab fa-facebook"></i></a></li>
                                <li className="list-inline-item"><a href="#"><i className="fab fa-twitter"></i></a></li>
                                <li className="list-inline-item"><a href="#"><i className="fab fa-instagram"></i></a></li>
                                <li className="list-inline-item"><a href="#"><i className="fab fa-behance"></i></a></li>
                                <li className="list-inline-item"><a href="#"><i className="fab fa-pinterest"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="menus d-flex">
                            <ul className="list-unstyled">
                                <li><a href="#">Blog</a></li>
                                <li><a href="#">Volunteers</a></li>
                                <li><a href="#">Subscribers</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyrights">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <p>&copy; 2017. All rights reserved. Your great site.</p>
                        </div>
                        <div className="col-md-6 text-right">
                            <p>Template By <a href="https://bootstrapious.com/p/bootstrap-carousel" className="text-white">Bootstrapious</a>
                                {/* <!-- Please do not remove the backlink to Bootstrap Temple unless you purchase an attribution-free license @ Bootstrap Temple or support us at http://bootstrapious.com/donate. It is part of the license conditions. Thanks for understanding :)                         --> */}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
