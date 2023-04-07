import React from "react";
import "./style.scss";

import customerImg from "../../../../../assets/images/customer.png";

function Item() {
  return (
    <div className="item-slider">
      <img src={customerImg} alt="customer" />
      <div className="right-item-slider">
        <span className="text-lg">BCP対策と</span>
        <span className="text-lg">働き方改革は表裏一体。</span>
        <span className="text-lg">健保こそ率先して</span>
        <span className="text-lg">推進が必要</span>
        <span className="text-sm">〇〇健康保健組合</span>
        <span className="text-sm">常務理事 〇〇 〇〇 様</span>
      </div>
    </div>
  );
}

export default Item;
