import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaInstagram, FaTelegram, FaYoutube } from "react-icons/fa";
import {
  Container,
  FormSection,
  InputGroup,
  InfoSection,
  InfoItem,
  SocialIcons,
  IconLink
} from './Contact.style'

const Contact = () => {
  return (
    <main>
      <div className="max-width">

      <Container>
        <FormSection>
          <h2>Let's work together</h2>
          <p>
           If you have any questions, contact us.
          </p>
          <form>
            <InputGroup>
              <input type="text" placeholder="First name" required/>
              <input type="text" placeholder="Last name" required />
            </InputGroup>
            <InputGroup>
              <input type="date"  required/>
              <input type="text" placeholder="Phone number" required />
            </InputGroup>
            <textarea placeholder="Type your message here." required></textarea>
            <button type="submit">Send message</button>
          </form>
        </FormSection>

        <InfoSection>
          <InfoItem>
            <FaPhoneAlt />
            <div>
              <h4>Phone</h4>
              <a href="tel:+998947238850">+998(94)-723-88-50</a>
              <br />
              <a href="tel:+998979359707">+998(97)-935-97-07</a>
            </div>
          </InfoItem>

          <InfoItem>
            <FaEnvelope />
            <div>
              <h4>Email</h4>
              <p>youremail@email.com</p>
            </div>
          </InfoItem>

          <InfoItem>
            <FaMapMarkerAlt />
            <div>
              <h4>Address</h4>
              <p>Samarqand, O`zbekiston</p>
            </div>
          </InfoItem>

          <SocialIcons>
            <IconLink href="https://www.instagram.com/" aria-label="Instagram">
              <FaInstagram />
            </IconLink>
            <IconLink href="https://web.telegram.org/k/" aria-label="Telegram">
              <FaTelegram />
            </IconLink>
            <IconLink href="https://www.youtube.com/" aria-label="YouTube">
              <FaYoutube />
            </IconLink>
          </SocialIcons>
        </InfoSection>
      </Container>
      </div>
    </main>
  );
};

export default Contact;