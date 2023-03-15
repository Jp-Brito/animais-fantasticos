import ScrollSuave from "./modules/scroll-suave.js";
import initAnimaScroll from "./modules/scroll-animacao.js";
import Accordion from "./modules/accordion.js";
import initTabNav from "./modules/tabnav.js";
import initModal from "./modules/modal.js";
import initTooltip from "./modules/tooltip.js";
import initDropdownMenu from "./modules/dropdown.js";
import iniMenuMobile from "./modules/menu-mobile.js";
import initFuncionamento from "./modules/funcionamento.js";
import iniFetchAnimais from "./modules/fetch-animais.js";
import iniFetchBitcoin from "./modules/fetch-bitcoin.js";

const scrollsuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollsuave.ini();

const accordion = new Accordion("[data-anime='accordion'] dt");
accordion.ini();

initAnimaScroll();
initTabNav();
initModal();
initTooltip();
initDropdownMenu();
iniMenuMobile();
initFuncionamento();
iniFetchAnimais();
iniFetchBitcoin();
