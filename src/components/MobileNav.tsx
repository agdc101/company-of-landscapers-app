import React from 'react';
import Hamburger from 'hamburger-react';

interface MobileNavProps {
    isOpen: boolean;
    setOpen: (isOpen: boolean) => void;
}

const mobileNav = ( {isOpen, setOpen }: MobileNavProps ) => {
  return (
      <div className="md:hidden relative z-50 flex justify-end m-2 ml-auto">
          <Hamburger className="bg-red" toggled={isOpen} toggle={setOpen} color={isOpen ? 'black' : 'white'}/>
      </div>
  )
}

export default mobileNav;