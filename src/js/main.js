import "./slider";
import modal from "./modules/modal";
import tabs from "./modules/tabs";
import form from "./modules/form";
import changeModalState from "./modules/changeModalState";

window.addEventListener('DOMContentLoaded', function () {

  let modalState = {};

  changeModalState(modalState);
  
  modal();
  tabs('.glazing_slider', '.glazing_block', '.glazing_content', 'active');
  tabs('.decoration_slider', '.no_click', '.decoration_content > div > div', 'after_click');
  form();
  tabs('.balcon_icons', '.balcon_icons_img', '.big_img > img', 'do_image_more', 'inline-block');
  form(modalState);
});