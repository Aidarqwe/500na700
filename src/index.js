import "./sass/main.scss";
import logo from "./assets/logo.svg";
import vkIcon from "./assets/vkIcon.svg";
import facebookIcon from "./assets/facebookIcon.svg";
import tiktokIcon from "./assets/tiktokIcon.svg";
import youtubeIcon from "./assets/youtubeIcon.svg";
import swiperImg from "./assets/sliderItemImg.png";
import swiperBtnNext from "./assets/swiperBtnNext.svg";
import swiperBtnPrev from "./assets/swiperBtnPrev.svg";
import postImg1 from "./assets/postImg1.png"
import postImg2 from "./assets/postImg2.png"
import postImg3 from "./assets/postImg3.png"
import postImg4 from "./assets/postImg4.png"
import postImg5 from "./assets/postImg5.png"
import postImg6 from "./assets/postImg6.png"

// img
const Logo = document.getElementById("logoImg");
const VkIcon = document.getElementById("vkIcon");
const FacebookIcon = document.getElementById("facebookIcon");
const TiktokIcon = document.getElementById("tiktokIcon");
const YoutubeIcon = document.getElementById("youtubeIcon");
const SwiperImg1 = document.getElementById("swiper-img1");
const SwiperImg2 = document.getElementById("swiper-img2");
const SwiperImg3 = document.getElementById("swiper-img3");
const SwiperImg4 = document.getElementById("swiper-img4");
const SwiperBtnNext = document.getElementById("swiper-btn-next")
const SwiperBtnPrev = document.getElementById("swiper-btn-prev")
const PostImg1 = document.getElementById("postImg1")
const PostImg2 = document.getElementById("postImg2")
const PostImg3 = document.getElementById("postImg3")
const PostImg4 = document.getElementById("postImg4")
const PostImg5 = document.getElementById("postImg5")
const PostImg6 = document.getElementById("postImg6")

Logo.src = logo;
VkIcon.src = vkIcon;
FacebookIcon.src = facebookIcon;
TiktokIcon.src = tiktokIcon;
YoutubeIcon.src = youtubeIcon;
SwiperImg1.src = swiperImg;
SwiperImg2.src = swiperImg;
SwiperImg3.src = swiperImg;
SwiperImg4.src = swiperImg;
SwiperBtnNext.src = swiperBtnNext;
SwiperBtnPrev.src = swiperBtnPrev;
PostImg1.src = postImg1;
PostImg2.src = postImg2;
PostImg3.src = postImg3;
PostImg4.src = postImg4;
PostImg5.src = postImg5;
PostImg6.src = postImg6;


// js-file
const preloader = require("./js/preloader")
const burger = require('./js/burger');
const swiper = require("./js/swiper");
const accordion = require("./js/accordion");
const phoneMask = require("./js/phoneMask");
const postSwiper = require("./js/postSwiper");


