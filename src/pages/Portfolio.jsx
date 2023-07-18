import React from "react";
import vocabvaultimage from "../assets/vocabvaultimage.png";

const Portfolio = () => {
    return (
        <section>
            <div className="container vocab-box-container"> 
                <p className="vocab-box">
                    <a
                        href="https://vocab-vault-0523.herokuapp.com/"
                        target="_blank"
                        rel="noreferrer">
                        <img
                            className="vocab-vault"
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
          
        </section>

    );
};

export default Portfolio;