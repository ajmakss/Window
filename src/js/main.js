import "./slider";
import modal from "./modules/modal";
import tabs from "./modules/tabs";
import form from "./modules/form";
import changeModalState from "./modules/changeModalState";
import timer from "./modules/timer";
import images from "./modules/images"

window.addEventListener('DOMContentLoaded', function () {

  let modalState = {};
  let deadline = '2021-08-15';

  changeModalState(modalState);
  
  modal();
  tabs('.glazing_slider', '.glazing_block', '.glazing_content', 'active');
  tabs('.decoration_slider', '.no_click', '.decoration_content > div > div', 'after_click');
  tabs('.balcon_icons', '.balcon_icons_img', '.big_img > img', 'do_image_more', 'inline-block');
  form(modalState);
  timer('.container1',deadline);
  images();
});