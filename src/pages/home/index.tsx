import React from "react";
import Header from "./components/header";
import Topics from "./components/topics";
import Contact from "./components/contact";

import Footer from "./components/footer";
import CaseStudy from "./components/case-study";

import "./style.scss";

function Home() {
  return (
    <div className="home-page container-fluid">
      <div className="dashboard-page">
        <Header />

        <div className="main-content">
          <div className="same-item">
            <div className="left-bg same-bg bg-system">
              <div className="box-content">
                <h2>System</h2>
                <p>
                  複雑化・拡大化する健康保健関連業務をお客
                  様のニーズに合わせた対応力のあるシステム
                  でお客様を支援します。
                </p>
              </div>
            </div>
          </div>

          <div className="same-item right-item">
            <div className="right-bg same-bg bg-security">
              <div className="box-content">
                <h2>Security</h2>
                <p>
                  複雑化・拡大化する健康保健関連業務をお客
                  様のニーズに合わせた対応力のあるシステム
                  でお客様を支援します。
                </p>
              </div>
            </div>
          </div>

          <div className="same-item">
            <div className="left-bg same-bg bg-support">
              <div className="box-content">
                <h2>Support</h2>
                <p>
                  複雑化・拡大化する健康保健関連業務をお客
                  様のニーズに合わせた対応力のあるシステム
                  でお客様を支援します。
                </p>
              </div>
            </div>
          </div>

          {/* case study */}
          <CaseStudy />
          {/* topics */}
          <Topics />
          {/* contact */}
          <Contact />
        </div>
        {/* footer */}
        <Footer />
      </div>
    </div>
  );
}

export default Home;
