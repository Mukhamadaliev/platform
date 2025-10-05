import styled from "styled-components";
import { Link } from "react-router-dom";

export const SidebarContainer = styled.div`
  position: fixed;
  top: 0;
  left: ${({ isOpen, isMobile }) => 
    isMobile ? (isOpen ? '0' : '-100%') : '0'};
  width: ${({ isOpen }) => isOpen ? '280px' : '80px'};
  height: 100vh;
  background: linear-gradient(180deg, #fff 0%, #f8f9ff 100%);
  border-radius: 0 20px 20px 0;
  padding: 25px 20px;
  display: flex;
  flex-direction: column;
  box-shadow: 4px 0 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  z-index: 1000;
  overflow-y: auto;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  &::-webkit-scrollbar-thumb {
    background: #5b6dff;
    border-radius: 10px;
  }

  @media (max-width: 767px) {
    width: ${({ isOpen }) => isOpen ? '280px' : '0'};
    padding: ${({ isOpen }) => isOpen ? '25px 20px' : '25px 0'};
  }
`;

export const SidebarOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

export const ToggleButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  font-size: 1.5rem;
  color: #5b6dff;
  cursor: pointer;
  padding: 5px;
  border-radius: 50%;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: #5b6dff;
    color: white;
    transform: scale(1.1);
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

export const Logo = styled.h2`
  width: ${({ isOpen }) => isOpen ? '120px' : '40px'};
  height: ${({ isOpen }) => isOpen ? '120px' : '40px'};
  margin: ${({ isOpen }) => isOpen ? '0 auto 40px auto' : '0 auto 30px auto'};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    display: block;
  }
`;

export const Menu = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  flex: 1;
`;

export const MenuItem = styled.li`
  margin-bottom: 8px;
  position: relative;
`;

export const MenuLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 12px 15px;
  border-radius: 35px;
  text-decoration: none;
  color: #555;
  font-weight: 500;
  transition: all 0.3s ease-in-out;
  position: relative;
  overflow: hidden;

  &:hover {
    background: linear-gradient(135deg, #5b6dff 0%, #3a4bcc 100%);
    color: #fff;
    transform: translateX(8px);
    box-shadow: 0 4px 15px rgba(91, 109, 255, 0.4);
    border-radius: 35px;
  }

  &.active {
    background: linear-gradient(135deg, #5b6dff 0%, #3a4bcc 100%);
    color: #fff;
    box-shadow: 0 4px 15px rgba(91, 109, 255, 0.4);
    transform: translateX(8px);
    border-radius: 35px;

    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      width: 4px;
      background: #fff;
      border-radius: 0 2px 2px 0;
    }
  }
`;

export const Icon = styled.span`
  font-size: 1.3rem;
  transition: all 0.3s ease;
  min-width: 24px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;

  ${MenuLink}:hover &,
  ${MenuLink}.active & {
    transform: scale(1.1);
  }
`;

export const Text = styled.span`
  transition: all 0.3s ease;
  white-space: nowrap;
  overflow: hidden;
  flex: 1;
`;

export const LogoutButton = styled.button`
  display: flex;
  align-items: center;
  gap: 14px;
  margin-top: auto;
  padding: 12px 15px;
  background: transparent;
  border: 2px solid #ff6b6b;
  border-radius: 35px;
  color: #ff6b6b;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;

  ${({ isOpen }) => !isOpen && `
    justify-content: center;
    padding: 12px;
  `}

  &:hover {
    background: linear-gradient(135deg, #ff6b6b 0%, #ee5a52 100%);
    color: white;
    transform: translateX(8px);
    box-shadow: 0 4px 15px rgba(255, 107, 107, 0.4);
    border-radius: 35px;
  }
`;

export const LogoutIcon = styled.span`
  font-size: 1.3rem;
  transition: all 0.3s ease;
  min-width: 24px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;

  ${LogoutButton}:hover & {
    transform: scale(1.1);
  }
`;