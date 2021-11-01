import React from 'react';
import BannerImg from '../../components/BannerImg';

const Home = () => {
  return (
    <>
            <BannerImg />
      <div className="content-wrapper">
                    <section className="content-block">
                        <div className="container">
                            <div className="row multiple-row v-align-row">
                                <div className="col-lg-4 col-md-6">
                                    <div className="col-wrap">
                                        <div className="block-heading">
                                            <h3 className="block-top-heading">WHAT WE DO</h3>
                                            <h2 className="block-main-heading">EXPERTS</h2>
                                            <span className="block-sub-heading">We build digital solutions.</span>
                                            <div className="divider"><img src="img/divider.png" alt="images description"/></div>
                                            <span className="block-sub-heading">My developer stack:</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="col-wrap">
                                        <div className="ico-box bg-gray-light has-radius-medium">
                                            <div className="icon">
                                                <img src="img/angular.png" alt="" className="fa-icon-big"/>
                                                <img src="img/react.png" alt="" className="fa-icon-big"/>
                                            </div>
                                            <h4 className="content-title"><a href="#">Frontend Stack</a></h4>
                                            <div className="des">
                                                <p>Experience and knowledge in the two of the most important fronted frameworks in the industry</p>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="col-wrap">
                                        <div className="ico-box bg-gray-light has-radius-medium">
                                            <div className="icon">
                                            <img src="img/node.png" alt="" className="fa-icon-big"/>
                                            <img src="img/nestjs.png" alt="" className="fa-icon-big"/>
                                            </div>
                                            <h4 className="content-title"><a href="#">Backend Stack</a></h4>
                                            <div className="des">
                                                <p>Experience developing backend apps with Node and Nest Js</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="col-wrap">
                                        <div className="ico-box bg-gray-light has-radius-medium">
                                            <div className="icon">
                                            <img src="img/eth.png" alt="" className="fa-icon-big"/>
                                            <img src="img/solidity.png" alt="" className="fa-icon-big"/>
                                            </div>
                                            <h4 className="content-title"><a href="#">Blockchain</a></h4>
                                            <div className="des">
                                                <p>Experience connecting blockchain technologies to the web applications</p>
                                            </div>
                                            {/* <div className="link-holder">
                                                <a className="link-more" href="#">LEARN MORE</a>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="col-wrap">
                                        <div className="ico-box bg-gray-light has-radius-medium">
                                            <div className="icon">
                                                <img src="img/metamask.png" alt="" className="fa-icon-big"/>
                                                <img src="https://www.trufflesuite.com/img/truffle-logo-dark.svg" alt="" className="fa-icon-big"/>
                                            </div>
                                            <h4 className="content-title"><a href="#">DAPP DEVELOPMENT</a></h4>
                                            <div className="des">
                                                <p>I combine my knowledge in JavaScript with the blockchain technologies to develop Descentraliced Applications</p>
                                            </div>
                                            {/* <div className="link-holder">
                                                <a className="link-more" href="#">LEARN MORE</a>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="col-wrap">
                                        <div className="ico-box bg-gray-light has-radius-medium">
                                            <div className="icon">
                                                <h2>SCRUM</h2>
                                            </div>
                                            <h4 className="content-title"><a href="#">Agile Framework</a></h4>
                                            <div className="des">
                                                <p>I belive that excellent quality software can be delivered working with the apropiated project management framework</p>
                                            </div>
                                            {/* <div className="link-holder">
                                                <a className="link-more" href="#">LEARN MORE</a>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="content-block quotation-block black-overlay-6 parallax" data-stellar-background-ratio="0.55">
                        <div className="container">
                            <div className="inner-wrapper">
                                {/* <h3 className="block-top-heading text-white">BEST EVER DESIGN</h3> */}
                                <h2 className="text-white">Lets work together!</h2>
                                <div className="btn-container">
                                    <a href="mailto:diegotechnodev@gmail.com" className="btn btn-primary has-radius-small">Email Me</a>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="content-block portfolio-block" id="container">
                        <div className="bottom-space text-center text-uppercase" id={'portfolio'}>
                            <h2>The Work</h2>
                        </div>
                        <ul className="filter-nav text-center button-group filter-button-group">
                            <li>
                                <button data-filter="*">ALL</button>
                            </li>
                            <li>
                                <button data-filter=".blockchain">BLOCKCHAIN</button>
                            </li>
                            <li>
                                <button data-filter=".frontend">FRONTEND</button>
                            </li>
                            <li>
                                <button data-filter=".trainer">TRAINER</button>
                            </li>
                        </ul>
                        <div className="row grid">
                            <div className="gallery-item col-lg-4 col-md-6 blockchain">
                                <figure className="picture-item img-block shine-effect image-zoom port-v2">
                                    <img src="img/Bundx.png" alt="images description"/>
                                    <figcaption>
                                        <div className="link-box">
                                            <h3>DAPP developed for BUNDERWEAR</h3>
                                            <p>Using React, web3.js, Metamask & Ethereum</p>
                                            <a href="https://github.com/DiegoRX/BunderwearReact">
                                                <img src='https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png' className='fa-icon'/>  
                                            </a>
                                            <a href="https://bunderwear.club">
                                                <span className="icon-link"><span className="sr-only">&amp;</span></span>
                                            </a>
                                        </div>
                                    </figcaption>
                                </figure>
                            </div>
                            <div className="gallery-item col-lg-4 col-md-6 frontend">
                                <figure className="picture-item img-block shine-effect image-zoom port-v2">
                                    <img src="img/Simpledashboard.png" alt="images description"/>
                                    <figcaption>
                                    <div className="link-box">
                                            <h3>Frontend developed for Simple</h3>
                                            <p>Using React, React Hooks & Axios</p>
                                            <a href="https://github.com/DiegoRX/Simple-Dashboard-Frontend">
                                                <img src='https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png' className='fa-icon'/>  
                                            </a>
                                            <a href="https://simple-vd.web.app/">
                                                <span className="icon-link"><span className="sr-only">&amp;</span></span>
                                            </a>
                                        </div>
                                    </figcaption>
                                </figure>
                            </div>
                            <div className="gallery-item col-lg-4 col-md-6 trainer">
                                <figure className="picture-item img-block shine-effect image-zoom port-v2">
                                    <img src="img/programate.png" alt="images description"/>
                                    <figcaption>
                                    <div className="link-box">
                                            <h3>Prográmate Trainer</h3>
                                            <p>My experience as a full stack trainer at a Colombian Bootcamp</p>
                                            <a href="#">
                                                <span className="icon-link"><span className="sr-only">&amp;</span></span>
                                            </a>
                                        </div>
                                    </figcaption>
                                </figure>
                            </div>
                        </div>
                    </section>
                    <section className="content-block pt-0" id={'about'}>
                        <div className="container">
                            <div className="block-heading bottom-space">
                                <h3 className="block-top-heading">ABOUT ME</h3>
                                <h2 className="block-main-heading">DIEGO ANDRÉS ROMERO MORENO</h2>
                                <span className="block-sub-heading">Full Stack & Blockchain Developer</span>
                                <div className="divider"><img src="img/divider.png" alt="images description"/></div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="bottom-space-small-only">
                                        <p>I started my career at technology industry as a digital market consultant, understanding the industry and the business models that may apply in it. I realized that I needed to understand the software that we use today in our world to make a real impact. That's when I jumped into programming.</p>
                                        <p>As a Web Developer I started my carreer deloping frontend applications, then I learned the bases of the backend tecnologies. At that point I started teaching programming to my peers, and that's when I started working at <a href="http://programate.educamas.com.co/">Prográmate</a> Bootcamp as a trainer in Full Stack technologies.</p>
                                        <p>I have been developing DAPPs for the last year and I really enjoy the blockchain ecosystem.</p>
                                        {/* <div className="btn-container top-m-space">
                                            <a href="#" className="btn btn-black has-radius-small">VIEW PROJECTS</a>
                                        </div> */}
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="bottom-s-space">
                                        <p>I am a professional developer with really good soft skills. I like to take leadership seriously, that's why it is one of my favorite academic topics. I am constanly evolving and improving on the personal field.</p>
                                        <p>Researching and being an autonomous learner are my personal skils that have bringed me the most efficient resoults in my profesional carreer. I am allways open to improve in the technologies that I work with or learning new stacks if needed. </p>
                                    </div>
                                    <div className="row">
                                        {/* <div className="col-sm-6">
                                            <ul className="content-links">
                                                <li><a href="#"> WEB & INTERACTIVE DESIGN</a></li>
                                                <li><a href="#">CONTENT MANAGEMENT</a></li>
                                                <li><a href="#">WEB APPLICATIONS</a></li>
                                                <li><a href="#">SOFTWARE DEVELOPMENT</a></li>
                                                <li><a href="#">ECOMMERCE SOLUTIONS</a></li>
                                            </ul>
                                        </div> */}
                                        {/* <div className="col-sm-6">
                                            <ul className="content-links">
                                                <li><a href="#">DATABASE DESIGN</a></li>
                                                <li><a href="#">TECHNICAL DOCUMENTATION</a></li>
                                                <li><a href="#">SOFTWARE ARCHITECTURE</a></li>
                                                <li><a href="#">SEARCH OPTIMIZATION</a></li>
                                                <li><a href="#">WEB PROMOTIONS</a></li>
                                            </ul>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    
            
                </div>
    </>
  );
};

export default Home;
