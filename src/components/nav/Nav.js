const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-white">
            <div className="container">
                <a className="navbar-brand" href="index.html">
                    <img src="img/logo.png" alt="Logo" />
                </a>
                <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#main-nav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="main-nav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="index.html">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="about-us.html">About Us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="services.html">Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="pricing.html">Pricing</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="gallery.html">Gallery</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="blog.html">Blog</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="contact-us.html">Contact Us</a>
                        </li>
                        <li className="nav-item btn-appointment">
                            <a className="nav-link" href="#" data-toggle="modal" data-target="#appointment">Appointment</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Nav