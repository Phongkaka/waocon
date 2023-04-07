import React from "react";
import { Link } from "react-router-dom";

import "./style.scss";

function Topics() {
  return (
    <div className="topics">
      <div className="left-topics">
        <h2>Topics</h2>
        <span>トピックス</span>
      </div>
      <div className="right-topics">
        <ul>
          <li>
            <div className="topic-item">
              <span className="date-topic">2023.02.16</span>
              <button>お知らせ</button>
              <p>新型コロナウイルス感染者 (本社プロパー社員)の発生について</p>
            </div>
          </li>
          <li>
            <div className="topic-item">
              <span className="date-topic">2023.02.16</span>
              <button>お知らせ</button>
              <p>弊社おける新型コロナウイルス感染者状況について</p>
            </div>
          </li>
          <li>
            <div className="topic-item">
              <span className="date-topic">2022.12.23</span>
              <button>お知らせ</button>
              <p>WAOCON健保システムユーザー会新年講習会開催のお知らせ</p>
            </div>
          </li>
          <li>
            <div className="topic-item">
              <span className="date-topic">2023.12.23</span>
              <button>お知らせ</button>
              <p>新型コロナウイルス感染者(本社協力会社社員)の発生について</p>
            </div>
          </li>
          <li>
            <div className="topic-item">
              <span className="date-topic">2022.11.07</span>
              <button>お知らせ</button>
              <p>
                新商品:【業界初】健康保険組合向けに設計開発したワークフローシステムリリースのお知らせ
              </p>
            </div>
          </li>
        </ul>
        <Link className="load-more" to="/">
          一覧を見る
        </Link>
      </div>
    </div>
  );
}

export default Topics;
