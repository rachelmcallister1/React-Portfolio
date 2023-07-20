import React from "react";
import vocabvaultimage from "../assets/vocabvaultimage.png";
import vacashinimage from "../assets/vacashinimage.png";
import netminderimage from "../assets/netminderimage.png";
import webapiquizimage from "../assets/webapiquizimage.png";
import techblogimage from "../assets/techblogimage.png";
import pwaimage from "../assets/pwaimage.png";
import weatherimage from "../assets/weatherimage.png";

const Portfolio = () => {
    return (
        <section>
            <h1 className="header">View My Projects
            </h1>
            <div className="container vocab-box-container">
                <div className="row">
                    <div className="col-md-4">
                        <p className="vocab-box">
                            <a
                                href="https://vocab-vault-0523.herokuapp.com/"
                                target="_blank"
                                rel="noreferrer">
                                {/* <img src="image1.jpg" class="img-fluid" alt="Responsive image"></img> */}
                                <img
                                    className="img-fluid"
                                    src={vocabvaultimage}
                                    alt="Link to Vocab Vault App" ></img>
                            </a>
                            <a
                                href="https://github.com/The-word-warriors/vocab-vault"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Visit Vocab Vault Repository
                            </a>
                        </p>
                    </div>
                </div>
            </div>
            <div className="container vocab-box-container">
                <div className="row">
                    <div className="col-md-4">
                        <p className="vocab-box">
                            <a
                                href="https://tech-blog-mcv-app-ce9ea3c55266.herokuapp.com/"
                                target="_blank"
                                rel="noreferrer">
                                {/* <img src="image1.jpg" class="img-fluid" alt="Responsive image"></img> */}
                                <img
                                    className="img-fluid"
                                    src={techblogimage}
                                    alt="Link to Tech Blog App" ></img>
                            </a>
                            <a
                                href="https://github.com/rachelmcallister1/Model-View-Controller-Tech-Blog"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Visit Tech Blog Repository
                            </a>
                        </p>
                    </div>
                </div>
            </div>
            <div className="container vocab-box-container">
                <div className="row">
                    <div className="col">
                        <p className="vacashin-box">
                            <a
                                href="https://the-ghrk-group.github.io/VaCASHin/"
                                target="_blank"
                                rel="noreferrer">
                                <img
                                    className="img-fluid"
                                    src={vacashinimage}
                                    alt="Link to VaCashin App" ></img>
                            </a>
                            <a
                                href="https://github.com/The-GHRK-Group/VaCASHin"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Visit VaCashin Repository
                            </a>
                        </p>
                    </div>
                </div>
            </div>
            <div className="container vocab-box-container">
                <div className="row">
                    <div className="col">
                        <p className="pwa-box">
                            <a
                                href="https://still-forest-89921-3e62b760f4e1.herokuapp.com/"
                                target="_blank"
                                rel="noreferrer">
                                <img
                                    className="img-fluid"
                                    src={pwaimage}
                                    alt="Link to Progressive Web App" ></img>
                            </a>
                            <a
                                href="https://github.com/rachelmcallister1/PWA-19-Homework"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Progressive Web App Repository
                            </a>
                        </p>
                    </div>
                </div>
            </div>
            <div className="container vocab-box-container">
                <p className="netminder-box">
                    <a
                        href="https://netminder-frontend-c2d1f8e64193.herokuapp.com/"
                        target="_blank"
                        rel="noreferrer">
                        <img
                            className="img-fluid"
                            src={netminderimage}
                            alt="Link to Netminder App" ></img>
                    </a>
                    <a
                        href="https://github.com/React-Rangers"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Visit React Rangers Repository
                    </a>
                </p>
            </div>
            <div className="container vocab-box-container">
                <div className="row">
                    <div className="col">
                        <p className="webapiquiz-box">
                            <a
                                href="https://rachelmcallister1.github.io/Web-APIs-Code-Quiz/"
                                target="_blank"
                                rel="noreferrer">
                                <img
                                    className="img-fluid"
                                    src={webapiquizimage}
                                    alt="Link to JavaScript Quiz" ></img>
                            </a>
                            <a
                                href="https://github.com/rachelmcallister1/Web-APIs-Code-Quiz"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Visit Web API Repository
                            </a>
                        </p>
                    </div>
                </div>
            </div>
            <div className="container vocab-box-container">
                <div className="row">
                    <div className="col">
                        <p className="weather-box">
                            <a
                                href="https://rachelmcallister1.github.io/Server-Side-API-Weather-Dashboard/"
                                target="_blank"
                                rel="noreferrer">
                                <img
                                    className="img-fluid"
                                    src={weatherimage}
                                    alt="Link to Server Side API Weather Dashboard Quiz" ></img>
                            </a>
                            <a
                                href="https://github.com/rachelmcallister1/Server-Side-API-Weather-Dashboard"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Visit Weather Dashboard Repository
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Portfolio;