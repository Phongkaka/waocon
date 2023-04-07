import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../../assets/images/logo.png";
import "./style.scss";

function Footer() {
  return (
    <footer>
      <div className="top-footer">
        <div className="main-footer">
          <Link className="logo" to="/">
            <img src={logo} alt="logo" />
          </Link>
          <div className="right-footer">
            <div className="same-content-footer">
              <h2 className="same-title-footer">WAOCONについて</h2>
              <span className="same-text-footer">WAOCONとは</span>
              <span className="same-text-footer">会社概要</span>
              <span className="same-text-footer">メッセージ</span>
              <span className="same-text-footer">アクセス</span>
              <span className="same-text-footer">WAOCON経営理念</span>
              <span className="same-text-footer">
                WAOCON健保システムユーザ会
              </span>
            </div>
            <div className="same-content-footer">
              <h2 className="same-title-footer">ソリューション</h2>
              <span className="same-text-footer">システムソリューション</span>
              <span className="same-text-footer">
                健保基幹業務システム：KenpoWave21
              </span>
              <span className="same-text-footer">
                レセプト管理・分析システム：RezeptSerch21
              </span>
              <span className="same-text-footer">
                ワークフローシステム：KW21-DWF
              </span>
              <span className="same-text-footer">
                健康情報管理システム：HealthyWave21+
              </span>
              <span className="same-text-footer">
                保健指導管理システム：HealthyManager
              </span>
              <span className="same-text-footer">
                データヘルスICT連携基盤：KW21-Connect
              </span>
              <span className="same-text-footer">
                経営支援システム：KW21-MSS
              </span>
              <span className="same-text-footer">データ分析支援ツール</span>
            </div>
            <div className="same-content-footer not-title">
              <span className="same-text-footer">システムソリューション</span>
              <span className="same-text-footer">
                健保基幹業務システム：KenpoWave21
              </span>
              <span className="same-text-footer">
                レセプト管理・分析システム：RezeptSerch21
              </span>
              <span className="same-text-footer">
                ワークフローシステム：KW21-DWF
              </span>
              <span className="same-text-footer">
                健康情報管理システム：HealthyWave21+
              </span>
              <span className="same-text-footer">
                保健指導管理システム：HealthyManager
              </span>
              <span className="same-text-footer">
                データヘルスICT連携基盤：KW21-Connect
              </span>
              <span className="same-text-footer">
                経営支援システム：KW21-MSS
              </span>
              <span className="same-text-footer">データ分析支援ツール</span>
            </div>
            <div className="same-content-footer only">
              <span className="same-title-footer">サポート</span>
              <span className="same-title-footer">導入事例</span>
              <span className="same-title-footer">トピックス</span>
              <span className="same-title-footer">採用情報</span>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <nav className="link-footer">
          <ul>
            <li>
              <Link to="/">個人情報保護方針</Link>
            </li>
            <li>
              <Link to="/">特定個人情報保健方針</Link>
            </li>
            <li>
              <Link to="/">利用規約</Link>
            </li>
            <li>
              <Link to="/">会社概要</Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
