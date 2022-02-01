import * as React from "react"
import Link from "../components/Link";

const Header = ({page}) => {
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header__body">
            <Link to="/" className="header__image">
              <img src={page.bitcoinWhiteTrader.investInBitcoinTopLogo.sourceUrl}
                   alt={page.bitcoinWhiteTrader.investInBitcoinTopLogo.altText}
                   height="45"/>
            </Link>
            <nav className="header__nav">
              <a href="#" className="header__nav-item show-modal">
                {page.bitcoinWhiteTrader.investInBitcoinSignUp}
              </a>
            </nav>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
