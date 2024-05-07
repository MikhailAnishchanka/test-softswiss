import "./App.scss";
import Logo from "./assets/svg/logo.svg";
import MenuOpen from "./assets/svg/menu-open.svg";
import RocketIcon from "./assets/png/rocket.png";
import { ReactComponent as CartIcon } from "./assets/svg/cart.svg";
import MenuClose from "./assets/svg/menu-close.svg";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <header className="Header">
        <img src={Logo} alt="Logo" />

        <input
          className="Header_burgerCheckbox"
          type="checkbox"
          id="burger-menu"
        />
        <label tabIndex={0} htmlFor="burger-menu">
          <img
            className="Header_burgerMenuIcon___open"
            src={MenuOpen}
            alt="Open navigation menu"
          />
          <img
            className="Header_burgerMenuIcon___close"
            src={MenuClose}
            alt="Close navigation menu"
          />
        </label>

        <nav className="Header_navigation">
          <div className="Header_navLinkContainer">
            <a className="Header_navLink" href="/">
              Home
            </a>
          </div>
          <div className="Header_navLinkContainer">
            <a className="Header_navLink" href="/">
              Products
            </a>
          </div>
          <div className="Header_navLinkContainer">
            <a className="Header_navLink" href="/">
              <CartIcon className="Header_navLinkIcon" />
            </a>
          </div>
        </nav>
      </header>
      <div className="App_wrapper">
        <section className="Discover">
          <h1 className="Discover_heading">
            Discover the vast
            <br />
            expanses of <span className="Discover_heading___pink">space</span>
          </h1>
          <h4 className="Discover_subheading">
            Where the possibilities are{" "}
            <span className="Discover_subheading___yellow">endless!</span>
          </h4>
          <button className="Discover_button">Learn more</button>
        </section>
        <section className="Offers">
          <h2 className="Offers_title">Offers</h2>

          <div className="Offers_card Offers_card___bgSpace2">
            <h3 className="Offers_cardHeading">Move the borders of reality!</h3>
            <h4 className="Offers_cardSubheading">Go on a space adventure</h4>
            <button className="Offers_learnButton">Learn more</button>
          </div>

          <div className="Offers_card Offers_card___bgSpace3">
            <h3 className="Offers_cardHeading">
              Space is not just stars and planets
            </h3>
            <h4 className="Offers_cardSubheading">
              it is a majestic journey to
            </h4>
            <button className="Offers_learnButton">Learn more</button>
          </div>

          <div className="Offers_card Offers_card___bgSpace4">
            <h3 className="Offers_cardHeading">For those who dream of stars</h3>
            <h4 className="Offers_cardSubheading">
              Our offer: make your dream come true
            </h4>
            <button className="Offers_learnButton">Learn more</button>
          </div>

          <div className="Offers_card Offers_card___bgSpace5">
            <h3 className="Offers_cardHeading">
              Fulfill your fantastic dreams
            </h3>
            <h4 className="Offers_cardSubheading">
              Space has never been so close
            </h4>
            <button className="Offers_learnButton">Learn more</button>
          </div>
        </section>

        <section className="Summary">
          <h2 className="Summary_heading">Embark on a space journey</h2>
          <input
            className="Summary_readMoreCheckbox"
            type="checkbox"
            id="readMore"
          />
          <p className="Summary_content">
            Traveling into space is one of the most exciting and unforgettable
            adventures that can change your life forever. And if you have ever
            dreamed of exploring stars, planets and galaxies, then our company
            is ready to help you realize this dream. We offer a unique
            experience that will allow you to go on a space journey and see all
            the secrets of the universe. We guarantee that every moment in space
            will be filled with incredible impressions, excitement and new
            discoveries. Our team of professionals takes care of your safety and
            comfort so that you can fully enjoy your adventure in space. We
            offer various options for space excursions.
            <span className="Summary_extendedContent">
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              lectus orci, faucibus vel egestas sed, aliquam vel neque. Praesent
              pharetra augue justo, at imperdiet nibh interdum quis. Donec at
              imperdiet
            </span>
          </p>
          <label
            tabIndex={0}
            htmlFor="readMore"
            className="Summary_readMoreText"
          />
        </section>
        <footer className="Footer">
          <img className="Footer_rocket" src={RocketIcon} alt="Rocket" />
          <h2 className="Footer_text">Exciting space adventure!</h2>
        </footer>
      </div>
    </div>
  );
}

export default App;
