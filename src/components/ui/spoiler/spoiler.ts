import Component, { ComponentProps } from '@/base/component';

export default class Spoiler extends Component {
    constructor(element: ComponentProps) {
        super(element);
        this.nRoot.addEventListener('click', this.clickHandler)
    }

    clickHandler = (e:Event)=> {
        let currentItem = (e.target as HTMLElement).closest('.spoiler__head')
        
        if (currentItem) {
            const title = currentItem.querySelector('.spoiler__title')
            const spoiler  = currentItem.nextSibling as HTMLDivElement
            const state_open = currentItem.querySelector('.spoiler__state--open')
            const state_close = currentItem.querySelector('.spoiler__state--close')

            if (spoiler!.classList.contains('.spoiler--active')) {
                spoiler!.style.height = `${0}px`
                spoiler!.style.margin = `0px`
            } else {
                spoiler!.style.height = `${spoiler?.scrollHeight}px`
                spoiler!.style.margin  = `0px 0px 40px 0px`
            }
            
            title!.classList.toggle('spoiler__title--open')
            spoiler!.classList.toggle('.spoiler--active')
            state_open!.classList.toggle('hide')
            state_close!.classList.toggle('hide')
            }
    }

    destroy = () => {
        this.nRoot.removeEventListener('click', this.clickHandler)
    }
}
