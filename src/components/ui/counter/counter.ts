import Component, { ComponentProps } from '@/base/component';

export default class Counter extends Component {

    incrementBtn: HTMLButtonElement;
    decrementBtn: HTMLButtonElement;
    value: number
    valueEl: HTMLSpanElement

    constructor(element: ComponentProps) {
        super(element);
        
        this.incrementBtn = this.getElement('button--plus')!
        this.decrementBtn = this.getElement('button--minus')!
        this.value = 0
        this.valueEl = this.getElement('value')!
        this.valueEl.textContent = `${this.value}`
        this.incrementBtn.addEventListener('click', this.increment)
        this.decrementBtn.addEventListener('click', this.decrement)
    }

    increment = ()=> {
        this.value++
        this.valueEl.textContent = `${this.value}`
    }

    decrement = ()=> {
        this.value = Math.max(0, --this.value)
        this.valueEl.textContent = `${this.value}`
    }

    destroy = () => {
        this.incrementBtn.removeEventListener('click', this.increment)
        this.decrementBtn.removeEventListener('click', this.decrement)
    }
}
