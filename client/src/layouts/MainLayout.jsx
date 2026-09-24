import { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Button from "../components/Button";

const MainLayout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const openSideBar = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

  return (
    <div>
      <Navbar />

      <div className="flex ">
        {isOpen   && <Sidebar isOpen = {isOpen}/>}
        
        <Button onClick={openSideBar} > sidebar</Button>

        <main className="flex-1 p-10">{children}</main>
      </div>
    </div>
  );
};

export default MainLayout;
