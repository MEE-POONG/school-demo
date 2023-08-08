// Layout.tsx
import React, { useState } from 'react';
import TheNavBar from './TheNavBar';
import Dashborad from './dashborad';


interface LayoutProps {
  children: React.ReactNode;
}

const Backendlayout: React.FC<LayoutProps> = ({ children }) => {
  const [show, setShow] = useState(true);

  const handleToggleShow = () => setShow(!show);

  const mainStyle = show
    ? { width: 'calc(100% - 175px)', marginLeft: '175px' }
    : { width: 'calc(100% - 0px)', marginLeft: '0px' };

  return (

    <main >
      <TheNavBar/>
      <Dashborad/>
      
      {/* <TheOffcanvas show={show} onToggleShow={handleToggleShow} />
      <TheNavBar onToggleShow={handleToggleShow} show={show} /> */}
      <div className='bg-whilt paper' style={mainStyle} >
        {children}
        {/* <Footer /> */}
      </div>
    </main>
  );
};

export default Backendlayout;
