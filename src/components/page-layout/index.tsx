import React from 'react';
import Footer from '../footer';
import Header from '../header';

function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='page-layout'>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default PageLayout;
