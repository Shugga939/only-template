import Component, { ComponentProps } from '@/base/component';

export default class CustomButton extends Component {
    
    button: HTMLButtonElement;
    cb: Function;

    constructor(element: ComponentProps, cb:Function) {
        super(element);
        this.button = this.getElement('button')!
        this.cb = cb;
        this.button.addEventListener('click', ()=> this.cb()) 
    }

    destroy = () => {
        this.button.removeEventListener('click', ()=> this.cb()) 
    }
}
