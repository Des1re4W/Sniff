import React from "react";
import "./css/Home.css";

function Home() {
    return (
        <section className="home" id="home">
            <div className="home-content">
                <h1>Shine & Drive: Premium Car Wash Experience</h1>
                <p>
                    We specialize in exterior polishing, interior detailing, and full car care
                    to make your ride look brand new.
                </p>
                <div className="btn-group">
                    <button
                        className="cta-btn"
                        onClick={() => document.getElementById("services").scrollIntoView({ behavior: "smooth" })}
                    >
                        View Services
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Home;
