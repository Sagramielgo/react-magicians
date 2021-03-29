import '../stylesheets/_header.scss';
import headerLogo from '../images/brown-tree-logo-text.svg';

function Header() {
  return (
    <header className="header central-column">
      <img className="header__logo" src={headerLogo} alt="logo awesome cards" />
    </header>
  );
}
export default Header;
