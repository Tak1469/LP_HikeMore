// import 文を使って app.js ファイルを読み込む。
import '@fortawesome/fontawesome-free/css/all.min.css';
import "../scss/style.scss";

import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';

import { loading } from "./module/_loading";
import { hamburger } from "./module/_hamburger";
import { scrollNav } from "./module/_scrollNav";
import { parallax } from "./module/_parallax";
import { headerCover } from "./module/_headerCover";
import { scrollTop } from './module/_scrollTop';
import { fadeInItem } from './module/_fadeInItem';
import { slideInItem } from './module/_slideIn';
import{topSlider} from './module/_topSlider';

loading();
hamburger();
scrollNav();
parallax();
headerCover();
scrollTop();
fadeInItem();
slideInItem();
topSlider();
