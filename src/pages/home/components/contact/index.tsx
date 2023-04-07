import React from "react";
import "./style.scss";

function Contact() {
  return (
    <div className="contact">
      <div className="left-contact">
        <h2>まずはお気軽にご相談ください</h2>
        <p>
          導入に関する質問やご相談、サポートに関することなど、
          まずはお気軽にご相談ください
        </p>
        <span className="phone-number">03-6867-8460</span>
      </div>
      <div className="right-contact">
        <div className="main-right-contact">
          <p>Contact Us</p>
          <button className="btn-contact">お問い合わせフォーム</button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
