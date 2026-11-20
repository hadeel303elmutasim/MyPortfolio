import { EMAIL } from '../utils/e-contact';

const SUBJECT = "Hadeel Portfolio Contact";
const BODY = "Hello! Please share your Name, your contact information , your project idea and select the service you need:\n"
+"• Business Website (Multi-page)\n"
+"• One-Page Website\n"
+"• Landing Page\n"
+"• E-Commerce Store\n"
+"• Web-Based System";

export const openEmail = (e) => {
  e.preventDefault();

  const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

  const mailto = `mailto:${EMAIL}?subject=${encodeURIComponent(SUBJECT)}&body=${encodeURIComponent(BODY)}`;
  const gmail = `https://mail.google.com/mail/?view=cm&to=${EMAIL}&su=${encodeURIComponent(SUBJECT)}&body=${encodeURIComponent(BODY)}`;

  if (isMobile) {
    window.location.href = mailto;       
  } else {
    window.open(gmail, "_blank", "noopener,noreferrer"); 
  }
};