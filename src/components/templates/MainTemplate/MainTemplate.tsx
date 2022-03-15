import React from 'react';
import Navigation from "../../Navigation/Navigation";
import SideBar from "../../molecues/SideBar/SideBar";

interface Props {
  children: React.ReactNode;
}

const MainTemplate:React.FC<Props> = ({children}) => {
  return(
      <>
          <Navigation />
          <SideBar />
          {children}
      </>
  );
};

export default MainTemplate;
