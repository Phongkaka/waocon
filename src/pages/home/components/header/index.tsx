import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../../assets/images/logo.png";
import "./style.scss";

function Header() {
  return (
    <div className="home-page container-fluid">
      <div className="dashboard-page">
        <div className="dashboard-top">
          <header>
            <Link to="/" className="logo">
              <img src={logo} alt="logo" />
            </Link>
            <nav className="link-to-page">
              <ul>
                <li>
                  <Link to="/">セWAOCONについて</Link>
                </li>
                <li>
                  <Link to="/">ソリューション</Link>
                </li>
                <li>
                  <Link to="/">サポート</Link>
                </li>
                <li>
                  <Link to="/">導入事例</Link>
                </li>
                <li>
                  <Link to="/">トピックス</Link>
                </li>
                <li>
                  <Link to="/">採用情報</Link>
                </li>
                <li>
                  <Link to="/">セミナー受付</Link>
                </li>
              </ul>
            </nav>
            <button className="btn-check">お問い合わせ</button>
          </header>
          <div className="title-banner">
            <h1 className="big-title">For Your Well-Being</h1>
            <span className="small-title">常識に革新を、未来に価値を</span>
            <span className="xs-small-text">WAOCONについて</span>
          </div>
          <div className="bottom-banner">
            <h2>Solution</h2>
            <p>
              ｢システム｣｢セキュリティ｣｢サポート｣の3つを連携したトータルソリューションで、
              お客様の様々な問題を解決致します。
            </p>
            <div className="main-title-page">
              <span className="same-title first">system</span>
              <span className="same-title">security</span>
              <span className="same-title thirst">support</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
