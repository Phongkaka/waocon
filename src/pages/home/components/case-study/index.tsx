import React from "react";
import "./style.css";
import Item from "./item";

function CaseStudy() {
  return (
    <div className="case-study">
      <h2>Case study</h2>
      <p>実績とお客様の声</p>
      <div className="main-case-study">
        <div className="text-slider">
          <span>
            株式会社WAOCONは業界トップシェアと豊富なノウハウをもとに顧客満足度の向上を第一義とし、
          </span>
          <span>最高のサービスと最適な製品の提供を行っています。</span>
          <span>
            340組合様以上のシステム導入実績があり、たくさんのお客様の選ばれています。
          </span>
        </div>
        <div className="slider">
          <Item />
        </div>
        <button className="btn-action">導入実績</button>
      </div>
    </div>
  );
}

export default CaseStudy;
