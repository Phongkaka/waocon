import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Item from "./item";
import "swiper/css";
import "swiper/css/pagination";
import "./style.scss";

import { Pagination } from "swiper";

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
          <Swiper
            slidesPerView={2}
            spaceBetween={30}
            centeredSlides={true}
            pagination={{
              clickable: true,
            }}
            loop={true}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <Item />
            </SwiperSlide>
            <SwiperSlide>
              <Item />
            </SwiperSlide>
            <SwiperSlide>
              <Item />
            </SwiperSlide>
            <SwiperSlide>
              <Item />
            </SwiperSlide>
            <SwiperSlide>
              <Item />
            </SwiperSlide>
          </Swiper>
        </div>
        <button className="btn-action">導入実績</button>
      </div>
    </div>
  );
}

export default CaseStudy;
