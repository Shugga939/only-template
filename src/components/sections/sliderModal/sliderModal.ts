import Component, { ComponentProps } from '@/base/component';
import Counter from '@/components/ui/counter/counter';
import CustomButton from '@/components/ui/customButton/customButton';
import { getComponent, getComponents } from '@/helpers/helpers';
import Swiper from 'swiper';
import { Navigation } from "swiper";

export default class SliderModal extends Component {

    swiper: any;
    closeModalBtn: CustomButton;
    counters: Counter[] 
    currentSlide: number | null
    parrentsCount: Function

    constructor(element: ComponentProps, setCount: Function) {
        super(element);

        this.parrentsCount = setCount
        this.closeModalBtn = new CustomButton(getComponent('customButton',this.nRoot))
        this.closeModalBtn.addEL(this.onClose)
        this.currentSlide = null
        this.counters = []

        if (getComponent('counter', this.nRoot).component) {
            this.currentSlide = 0
            this.counters = getComponents('counter', this.nRoot).map((comp)=> {
                return new Counter(comp)
            })
        } else {
            this.parrentsCount('Слайдов нет')
        }
        
        this.swiper = new Swiper(".swiper", {
            modules: [Navigation],
            direction: "horizontal",
            slidesPerView: 1,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            autoHeight: true,
        });

        this.swiper.on('slideChange', ()=> {
            this.currentSlide = this.swiper.realIndex
        })
    }

    onOpen= ()=> {
        this.nRoot.classList.toggle('sliderModal--active')
    }
    
    onClose= ()=> {
        this.nRoot.classList.toggle('sliderModal--active')
        if (this.currentSlide != null) {
            this.parrentsCount(this.counters[this.currentSlide].value)
        }
    }


    destroy = () => {
        // Destroy functions
    }
}
