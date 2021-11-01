import React from 'react';

const Footer = () => {
  return (
    <footer class="footer footer-v1">
    <div class="content-block footer-main">
        <div class="container">
            <div class="row">
                <div class="col-lg-4">
                    <div class="footer-logo">
<h2>Techno Dev</h2>
                    </div>
                    <div class="my-4">
                        <p>Diego Andrés Romero Moreno</p>
                    </div>
                </div>
                <div class="col-lg-4">
                    <h4>Follow me on:</h4>
                    <ul class="social-network round-icon">
                        <li><a href="https://github.com/DiegoRX"> <img src='https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png' className='fa-icon'/></a></li>
                        <li><a href="https://linkedin.com/in/DiegoRX"> <img src='https://cdn-icons-png.flaticon.com/512/174/174857.png' className='fa-icon'/></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div class="footer-bottom">
        <div class="container">
            <div class="divider-border-dark mt-0"><span class="sr-only">&nbsp;</span></div>
            <p>Copyright 2021 - Techno Dev - Diego Andrés Romero Moreno Portfolio </p>
        </div>
    </div>
</footer>
  );
};

export default Footer;
