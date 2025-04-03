declare module 'hamburger-react' {
  import React from 'react';
  
  interface HamburgerProps {
    toggled: boolean;
    toggle: (toggled: boolean) => void;
    color?: string;
    size?: number;
    duration?: number;
    distance?: string;
    easing?: string;
    rounded?: boolean;
    label?: string;
    hideOutline?: boolean;
    className?: string;
  }

  const Hamburger: React.FC<HamburgerProps>;
  export default Hamburger;
}