import timer from "./modules/timer";
import menu from "./modules/menu";
import modal from "./modules/modal";
import click from "./modules/click";
import calc from "./modules/calc";
import inputBan from "./modules/inputBan";
import tabs from "./modules/tabs";
import slider from "./modules/slider";
import sliderCarousel from "./modules/sliderCarousel";
import sendForm from "./modules/sendForm";

timer('27 december 2024');
menu();
modal();
click();
calc(100);
inputBan();
tabs();
slider();
sliderCarousel();
sendForm({
    formId: 'form1',
    someElem: [{
        type: 'block',
        id: 'total'
    }]
});
sendForm({
    formId: 'form2'
});
sendForm({
    formId: 'form3'
});