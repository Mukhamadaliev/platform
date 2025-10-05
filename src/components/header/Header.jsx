import React from 'react'
import {
  BackgroundHeader,
  MaxWidth, 
  HeaderWrapper,
  InputContainer,
  SearchIcon,
  RightSection,
  UploadBtn,
  UploadIcon,
  UserInfo,
  UserName,
} from './Header.styles'

const Header = () => {
  return (
    <BackgroundHeader>
      <MaxWidth>
        <HeaderWrapper>
          <ul>
            <InputContainer>
              <SearchIcon />
              <input type="text" placeholder="Search" />
            </InputContainer>
          </ul>

          <RightSection>
            <li>
              <UploadBtn>
                <UploadIcon />
                Upload
              </UploadBtn>
            </li>
            <li>
              <UserInfo>
                <UserName>Mitchel</UserName>
              </UserInfo>
            </li>
          </RightSection>
        </HeaderWrapper>
      </MaxWidth> 
    </BackgroundHeader>
  );
};

export default Header;
