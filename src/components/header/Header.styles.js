import styled from "styled-components";
import { IoSearch, IoCloudUpload } from "react-icons/io5";
export const device = {
  mobile: "480px",
  tablet: "768px",
  notebook: "1024px",
  desktop: "1200px",
};


export const BackgroundHeader = styled.div`
  background-color: #ffffff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
`;


export const MaxWidth = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 24px;
`;

export const HeaderWrapper = styled.header`
  height: 70px;
  position: absolute;
  left: 250px;
  right: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1280px;
  margin: auto;

  @media (max-width: ${device.mobile}) {
    left: 0;
    right: 0;
    padding: 0 12px;
  }

  @media (max-width: ${device.tablet}) {
    left: 0;
    right: 0;
    padding: 0 16px;
  }

  @media (max-width: ${device.notebook}) {
    left: 100px;
    right: 20px;
  }
`;


export const InputContainer = styled.li`
  display: flex;
  align-items: center;
  background-color: #f6f6f6;
  border-radius: 20px;
  padding: 10px 15px;
  position: absolute;
  top: 10px;
  left: 55px;
  width: 520px;
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.05);

  &:focus-within {
    box-shadow: 0 0 0 1px #8b5cf6;
    background-color: #ffffff;
  }

  input {
    border: none;
    background: transparent;
    outline: none;
    font-size: 16px;
    color: #333;
    width: 100%;
  }

  @media (max-width: ${device.mobile}) {
    width: 100%;
    padding: 8px 12px;
  }

  @media (max-width: ${device.tablet}) {
    width: 300px;
  }

  @media (max-width: ${device.notebook}) {
    width: 400px;
  }
`;



export const SearchIcon = styled(IoSearch)`
  color: #a0a0a0;
  font-size: 1.2rem;
  margin-right: 10px;
`;




export const RightSection = styled.ul`
  display: flex;
  align-items: center;

  li:not(:last-child) {
    margin-right: 15px;
  }

  @media (max-width: ${device.mobile}) {
    li:not(:last-child) {
      margin-right: 8px;
    }
  }
`;

export const UploadBtn = styled.button`
  background-color: #7b43f9;
  color: white;
  border: none;
  border-radius: 25px;
  padding: 8px 18px;
  font-weight: 600;
  font-size: 15px;
  cursor: pointer;
  display: flex;
  align-items: center;
  box-shadow: 0 6px 15px rgba(123, 67, 249, 0.4);
  transition: all 0.2s ease;

  &:hover {
    background-color: #6a34e0;
    box-shadow: 0 6px 15px rgba(123, 67, 249, 0.4);
  }

  @media (max-width: ${device.mobile}) {
    padding: 6px 12px;
    font-size: 13px;
  }

  @media (max-width: ${device.tablet}) {
    padding: 7px 15px;
    font-size: 14px;
  }
`;


export const UploadIcon = styled(IoCloudUpload)`
  font-size: 1.1rem;
  margin-right: 6px;

  @media (max-width: ${device.mobile}) {
    font-size: 1rem;
  }
`;


export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;



export const UserName = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: #333;

  @media (max-width: ${device.mobile}) {
    font-size: 14px;
  }
`;