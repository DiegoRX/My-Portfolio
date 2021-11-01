import React from 'react';

const BannerImg
 = () => {
    return (
        <section className="visual">
            <div className="visual-inner visual-banner-main image-bg dark-overlay">
                <div className="centered">
                    <div className="container">
                        <div className="visual-text visual-center">
                            <h1 className="visual-title visual-sub-title">Full Stack & Blockchain Developer</h1>
                            <div className="breadcrumb-block">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="index.html"> JS, Angular, React </a></li>
                                    <li className="breadcrumb-item"><a href="index.html"> Node, Nest </a></li>
                                    <li className="breadcrumb-item active"> Solidity, Ethereum </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default BannerImg
;
