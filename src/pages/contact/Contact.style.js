import styled from "styled-components";

const vars = {
  bg: "#FFFFFF",
  accent: "#0B63FF",
  text: "#031E44",
  muted: "#6B7280",
  inputBg: "#F8FAFC",
  border: "#E6E9EE",
  radius: "14px",
  sidebarWidth: "260px",
  shadow: "0 8px 28px rgba(9, 30, 66, 0.07)",
};

const device = {
  desktop: "1440px",
  notebook: "1200px",
  tablet: "900px",
  phone: "600px",
};

export const Container = styled.div`
  max-width: 1280px;
  margin: auto;
  margin-left: calc(${vars.sidebarWidth} + 40px);
  padding: 40px;
  display: grid;
  grid-template-columns: 1fr 380px;
  gap: 48px;
  color: ${vars.text};
  transition: all 0.3s ease;

  @media (max-width: ${device.desktop}) {
    gap: 36px;
    padding: 32px;
  }

  @media (max-width: ${device.notebook}) {
    margin-left: calc(${vars.sidebarWidth} + 20px);
    grid-template-columns: 1fr 320px;
  }

  @media (max-width: ${device.tablet}) {
    margin-left: 0;
    grid-template-columns: 1fr;
    gap: 32px;
    max-width: 90%;
  }

  @media (max-width: ${device.phone}) {
    padding: 18px;
    gap: 24px;
  }
`;

export const FormSection = styled.section`
  background: ${vars.bg};
  border-radius: ${vars.radius};
  padding: 36px;
  box-shadow: ${vars.shadow};
  transition: box-shadow 0.25s ease, transform 0.25s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 36px rgba(9, 30, 66, 0.09);
  }

  h2 {
    font-size: 28px;
    font-weight: 700;
    margin-bottom: 10px;
  }

  p {
    color: ${vars.muted};
    margin-bottom: 24px;
    font-size: 15px;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 16px;

    input,
    textarea {
      width: 100%;
      padding: 14px 16px;
      border-radius: 10px;
      border: 1px solid ${vars.border};
      background: ${vars.inputBg};
      font-size: 15px;
      color: ${vars.text};
      outline: none;
      transition: all 0.2s ease;

      &:focus {
        border-color: ${vars.accent};
        box-shadow: 0 0 0 4px rgba(11, 99, 255, 0.1);
      }
    }

    textarea {
      min-height: 140px;
      resize: vertical;
    }

    button[type="submit"] {
      align-self: flex-start;
      padding: 12px 26px;
      border: none;
      border-radius: 10px;
      background: ${vars.accent};
      color: #fff;
      font-weight: 600;
      font-size: 15px;
      cursor: pointer;
      box-shadow: 0 6px 18px rgba(11, 99, 255, 0.25);
      transition: all 0.2s ease;

      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 10px 28px rgba(11, 99, 255, 0.28);
      }

      &:active {
        transform: translateY(0);
        box-shadow: 0 4px 12px rgba(11, 99, 255, 0.22);
      }
    }
  }

  @media (max-width: ${device.tablet}) {
    padding: 28px;
  }

  @media (max-width: ${device.phone}) {
    padding: 20px;
    h2 {
      font-size: 22px;
    }
    p {
      font-size: 13px;
    }
  }
`;

// 🧩 Input Group (2 ustun)
export const InputGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;

  @media (max-width: ${device.tablet}) {
    grid-template-columns: 1fr;
  }
`;

export const InfoSection = styled.aside`
  background: ${vars.bg};
  border-radius: ${vars.radius};
  padding: 32px;
  box-shadow: ${vars.shadow};
  display: flex;
  flex-direction: column;
  gap: 22px;
  transition: box-shadow 0.25s ease;

  &:hover {
    box-shadow: 0 10px 30px rgba(9, 30, 66, 0.09);
  }

  h4 {
    margin: 0;
    font-size: 16px;
    font-weight: 600;
    color: ${vars.text};
  }

  p,
  a {
    margin: 0;
    font-size: 14px;
    color: ${vars.muted};
  }

  a {
    text-decoration: none;
    color: ${vars.accent};
    font-weight: 600;

    &:hover {
      text-decoration: underline;
    }
  }

  @media (max-width: ${device.phone}) {
    padding: 22px;
  }
`;

export const InfoItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 14px;

  svg {
    width: 40px;
    height: 40px;
    padding: 8px;
    border-radius: 10px;
    background: rgba(11, 99, 255, 0.08);
    color: ${vars.accent};
  }

  @media (max-width: ${device.phone}) {
    svg {
      width: 32px;
      height: 32px;
    }
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 8px;
`;

export const IconLink = styled.a`
  width: 42px;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background: ${vars.inputBg};
  border: 1px solid ${vars.border};
  color: ${vars.accent};
  font-size: 18px;
  text-decoration: none;
  transition: all 0.18s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 18px rgba(3, 30, 68, 0.1);
  }

  @media (max-width: ${device.phone}) {
    width: 36px;
    height: 36px;
    font-size: 16px;
  }
`;
