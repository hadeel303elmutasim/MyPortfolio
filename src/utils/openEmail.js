const EMAIL = "hadeelelmutasim303@gmail.com"; 
const SUBJECT = "Hadeel Prortfolio Contact";
const BODY = "Hi Hadeel,";

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