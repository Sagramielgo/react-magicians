import '../stylesheets/_footer.scss';

import footerLogo from '../images/brown-tree-logo.svg';

function Footer() {
  return (
    <footer className="footer">
      <small className="footer__small">React Magicians @2021</small>
      <img className="footer__img" src={footerLogo} alt="logo adalad" />
    </footer>
  );
}
export default Footer;
