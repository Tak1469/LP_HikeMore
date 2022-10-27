// import 文を使って app.js ファイルを読み込む。
import '@fortawesome/fontawesome-free/css/all.min.css';
import "../scss/style.scss";

import { loading } from "./module/_loading";
import { hamburger } from "./module/_hamburger";
import { scrollNav } from "./module/_scrollNav";
import { parallax } from "./module/_parallax";
import { headerCover } from "./module/_headerCover";

loading();
hamburger();
scrollNav();
parallax();
headerCover();


console.log('indexはokです');