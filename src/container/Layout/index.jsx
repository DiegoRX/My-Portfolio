import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import Announcement from '../Announcement'

const Layout = ({ children }) => (
  <section className='Layout'>
    <>
      <Announcement />
    </>
    <>
      <Header />
    </>
    <main>
      {children}
    </main>
    <>
      <Footer />
    </>
  </section>
);

export default Layout;
