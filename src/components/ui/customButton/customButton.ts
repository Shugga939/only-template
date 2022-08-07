import Component, { ComponentProps } from '@/base/component';

export default class CustomButton extends Component {
    
    button: HTMLButtonElement;

    constructor(element: ComponentProps) {
        super(element);
        this.button = this.getElement('button')!
    }

    addEL = (func:Function)=> {
        this.button.addEventListener('click', ()=> func()) 
    }

    destroy = () => {
        // Destroy functions
    }
}
