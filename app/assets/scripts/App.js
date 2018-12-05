import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import StickyHeader from './modules/StickyHeader';
import $ from 'jquery';
import Modal from './modules/Modal'

var mobileMenu = new MobileMenu();
var revealOnScroll1 = new RevealOnScroll($(".feature-item"), "85%");
var revealOnScroll2 = new RevealOnScroll($(".testimonial"), "60%");
var stickyHeader = new StickyHeader();
var modal = new Modal();
