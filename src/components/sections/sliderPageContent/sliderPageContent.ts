import Component, { ComponentProps } from '@/base/component';
import CustomButton from '@/components/ui/customButton/customButton';
import { getComponent } from '@/helpers/helpers';
import SliderModal from '../sliderModal/sliderModal';

export default class SliderPageContent extends Component {

    modal: SliderModal;
    openModalBtn: CustomButton;
    count: number | 'Слайдов нет'
    counterEl: HTMLElement

    constructor(element: ComponentProps) {
        super(element);
        this.counterEl = this.getElement('counter')!
        this.count = 0
        this.counterEl.textContent = `${this.count}`
        this.openModalBtn = new CustomButton(getComponent('customButton', this.nRoot), this.openModal)
        this.modal = new SliderModal(getComponent('sliderModal', this.nRoot),this.setCount)
    }

    openModal = ()=> {
        this.modal.onOpen()
    }

    setCount = (count:number | 'Слайдов нет')=> {
        this.count = count
        this.counterEl.textContent = `${this.count}`
    }

    destroy = () => {
        this.openModalBtn.destroy()
        this.modal.destroy()
    }
}
