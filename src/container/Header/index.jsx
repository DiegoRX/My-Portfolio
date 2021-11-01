import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
            <header className="fixed-top main-header header-light" id="waituk-main-header">
                <div id="nav-section">
                    <div className="mega-menus top-header">
                        <nav className="mini-menu p-static hidden-md-down">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 hidden-xs float-left text-center-sm no-float-sm no-padding">
                                        <ul className="i-list i-list-i-block i-list-i-block-sm i-list-i-block-no-hover pad-0-sm margin-bottom-0 float-left text-center">
                                            <li>
                                                <div className="dropdown mini-nav">
                                                    <a href="tel:(+57)3177943542" className="nav-link"><span className="custom-icon-phone-ring"></span> (+57)3177943542</a>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="dropdown mini-nav mini-nav-no-bg-hover">
                                                    <a href="mailto:diegotechnodev@gmail.com" className="nav-link"><span className="custom-icon-email1"></span>diegotechnodev@gmail.com</a>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 float-right hidden-xs pad-right-0">
                                        <ul className="i-list i-list-i-block i-list-i-block-sm i-list-i-block-no-hover pad-0-sm margin-bottom-0 float-right">
                                            <li>
                                                <div className="dropdown mini-nav mini-nav-no-bg-hover">
                                                    <a href="https://github.com/DiegoRX"> <img src='https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png' className='fa-icon'/></a>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="dropdown mini-nav mini-nav-no-bg-hover">
                                                <a href="https://linkedin.com/in/DiegoRX"> <img src='https://cdn-icons-png.flaticon.com/512/174/174857.png' className='fa-icon'/></a>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                    <div className="bottom-header container-fluid mega-menus" id="mega-menus">
                        <nav className="navbar navbar-toggleable-md no-border-radius no-margin mega-menu-multiple" id="navbar-inner-container">
                            <form action="mega-menu-5.html" id="top-search" className="no-margin top-search">
                                <div className="form-group no-margin">
                                    <input className="form-control no-border" id="search_term" name="search_term" placeholder="Type & Press Enter" type="text"/>
                                </div>
                            </form>
                            <button type="button" className="navbar-toggler navbar-toggler-left" data-toggle="collapse" data-target="#mega-menu">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <a className="navbar-brand mr-auto m-sm-auto" href="/"> Diego Romero </a>
                            <div className="collapse navbar-collapse flex-row-reverse" id="mega-menu">
                                <ul className="nav navbar-nav">
                                    <li className="dropdown" data-animation="fadeIn">
                                        <a href='/'> Home </a>
                                    </li>
                                    <li className="dropdown" data-animation="fadeIn">
                                        <a href="/#portfolio" > Portfolio </a>
                                        {/* <ul className="dropdown-menu no-border-radius">
                                            <li className="dropdown dropdown-left dropdown-parent">
                                                <a className="sub-marker" href="#"> No Sidebar <i className="icon-ios-more icn-right"></i></a>
                                                <ul className="dropdown-menu dropdown-menu-indent-sm no-border-radius">
                                                    <li><a href="portfolio-no-sidebar-2-col.html"> 2 Column </a></li>
                                                    <li><a href="portfolio-no-sidebar-3-col.html"> 3 Column </a></li>
                                                    <li><a href="portfolio-no-sidebar-4-col.html"> 4 Column </a></li>
                                                    <li><a href="portfolio-no-sidebar-6-col.html"> 6 Column </a></li>
                                                </ul>
                                            </li>
                                            <li className="dropdown dropdown-left dropdown-parent">
                                                <a className="sub-marker" href="#"> Left Sidebar <i className="icon-ios-more icn-right"></i></a>
                                                <ul className="dropdown-menu dropdown-menu-indent-sm no-border-radius">
                                                    <li><a href="portfolio-left-sidebar-2-col.html"> 2 Column </a></li>
                                                    <li><a href="portfolio-left-sidebar-3-col.html"> 3 Column </a></li>
                                                    <li><a href="portfolio-left-sidebar-4-col.html"> 4 Column </a></li>
                                                </ul>
                                            </li>
                                            <li className="dropdown dropdown-left dropdown-parent">
                                                <a className="sub-marker" href="#"> Right Sidebar <i className="icon-ios-more icn-right"></i></a>
                                                <ul className="dropdown-menu dropdown-menu-indent-sm no-border-radius">
                                                    <li><a href="portfolio-right-sidebar-2-col.html"> 2 Column </a></li>
                                                    <li><a href="portfolio-right-sidebar-3-col.html"> 3 Column </a></li>
                                                    <li><a href="portfolio-right-sidebar-4-col.html"> 4 Column </a></li>
                                                </ul>
                                            </li>
                                            <li><a href="portfolio-masonary.html"> Masonary </a></li>
                                            <li><a href="portfolio-full-width.html">  Full Width </a></li>
                                            <li><a href="portfolio-full-width-spaced.html">  Full Spaced</a></li>
                                            <li><a href="portfolio-3-col.html"> Boxed </a></li>
                                            <li><a href="portfolio-single.html"> Single V1 </a></li>
                                            <li><a href="portfolio-single-v2.html">  Single V2 </a></li>
                                            <li><a href="portfolio-single-v3.html"> Single V3 </a></li>
                                        </ul> */}
                                    </li>                                
                                    <li>
                                        <a href='/#about'> About </a>
                                    </li>
                                    {/* <li className="dropdown right-dropdown" data-animation="fadeIn">
                                        <a className="dropdown-toggle" data-toggle="dropdown" href="index.html" data-title="Home"> Blog </a>
                                        <ul className="dropdown-menu no-border-radius">
                                        	<li><a href="blog-one-col.html"> Blog One Column </a></li>
                                            <li><a href="blog-two-col.html"> Blog Two Column </a></li>
                                            <li><a href="blog-three-col.html"> Blog Three Column </a></li>
                                            <li><a href="blog-left-sidebar.html"> Blog Left Sidebar </a></li>
                                            <li><a href="blog-right-sidebar.html"> Blog Right Sidebar </a></li>
                                            <li><a href="blog-masonary.html"> Masonary </a></li>
                                            <li><a href="blog-full-width.html"> Full Width </a></li>
                                            <li><a href="blog-single.html"> Blog Single </a></li>
                                        </ul>
                                    </li> */}
                                    {/* <li>
                                        <Link to='/contact'> Contact </Link>
                                    </li> */}
                                </ul>
                            </div>

                        </nav>
                    </div>
                </div>
            </header>


  );
};

export default Header;
