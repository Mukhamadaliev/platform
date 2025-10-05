import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import imgLogo from "./assets/logo.png";

import {
  IoHomeSharp,
  IoChatbubbleOutline,
  IoMenu,
  IoClose,
  IoDocumentText,
} from "react-icons/io5";
import {
  FaLaptopCode,
  FaBullhorn,
  FaUserTie,
} from "react-icons/fa";
import { MdContactMail, MdWork } from "react-icons/md";
import { HiUserGroup } from "react-icons/hi";

import {
  SidebarContainer,
  SidebarOverlay,
  Logo,
  Menu,
  MenuItem,
  MenuLink,
  Icon,
  Text,
  ToggleButton,
} from "./Sidebar.styles";

const SideBar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  React.useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (!mobile) {
        setIsOpen(true);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const links = [
    { icon: <IoHomeSharp />, label: "Home", path: "/" },
    { icon: <FaLaptopCode />, label: "Web Project", path: "/projects" },
    { icon: <FaUserTie />, label: "Mentors", path: "/mentors" },
    { icon: <FaBullhorn />, label: "Reklamalar", path: "/reklamalar" },
    { icon: <IoChatbubbleOutline />, label: "Chat", path: "/chat" },
    { icon: <IoDocumentText />, label: "Taklif Va Murojatlar", path: "/taklifvamurojatlar" },
    { icon: <HiUserGroup />, label: "Join Us", path: "/joinus" },
    { icon: <HiUserGroup />, label: "Texnologiya", path: "/texnologiya" },
    { icon: <MdContactMail />, label: "Contact", path: "/contact" },
    { icon: <MdWork />, label: "Frilace", path: "/frilace" },
  ];

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {isMobile && isOpen && (
        <SidebarOverlay onClick={toggleSidebar} />
      )}

      <SidebarContainer isOpen={isOpen} isMobile={isMobile}>
        <ToggleButton onClick={toggleSidebar}>
          {isOpen ? <IoClose /> : <IoMenu />}
        </ToggleButton>

        <Logo isOpen={isOpen}>
          <img src={imgLogo} alt="Logo" />
        </Logo>

        <Menu>
          {links.map(({ icon, label, path }) => (
            <MenuItem key={label}>
              <MenuLink
                to={path}
                className={location.pathname === path ? "active" : ""}
                onClick={() => isMobile && setIsOpen(false)}
              >
                <Icon>{icon}</Icon>
                {isOpen && <Text>{label}</Text>}
              </MenuLink>
            </MenuItem>
          ))}
        </Menu>
      </SidebarContainer>
    </>
  );
};

export default SideBar;