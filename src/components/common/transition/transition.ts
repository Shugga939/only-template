import Component, { ComponentProps } from '@/base/component';
import anime from 'animejs'

export default class Transition extends Component {

    preloader: HTMLDivElement;
    preloaderLine: HTMLDivElement;
    static loadingTime: number = 600;
    static delay: number = 500;
    static animationDuration: number = 900;


    constructor(element: ComponentProps) {
        super(element);
        this.preloader = this.getElement('preloader')!
        this.preloaderLine = this.getElement('preloader--line')!
    }

    once() {
        anime({
            targets: this.preloader,
            height: [
                { value: '100%', duration: 0, },
                { value: '100%', duration: Transition.loadingTime, },
                { value: '100%', duration: Transition.delay, },
                { value: 0, duration: Transition.animationDuration, },
            ],
            easing: 'cubicBezier(0.25, 0.1, 0.25, 1)'
        })
        anime({
            targets: this.preloaderLine,
            width: [
                { value: '0%', duration: 0, },
                { value: '100%', duration: Transition.loadingTime, },
            ],
            backgroundColor:[
                { value: '#ffffff', duration: 0, },
                { value: '#ffffff', duration: Transition.loadingTime, },
                { value: '#ffffff', duration: Transition.delay, },
                { value: '#1e1e24', duration: 0, },
            ], 
            easing: 'linear'
        })
    }

    leave(container: HTMLElement) {
        const preloader = container.querySelector('.transition__preloader')
        
        return new Promise ((res=> {
            anime({
                targets: preloader,
                height: [
                    { value: 0, duration: 0, },
                    { value: '100%', duration: Transition.animationDuration, },
                ],
                easing: 'cubicBezier(0.25, 0.1, 0.25, 1)'
            })
            setTimeout(()=>{
                res('End')
            },Transition.animationDuration)
        })) 
    }

    enter(container: HTMLElement) {
        const inside = container.querySelector('.transition__inside')!
        const insideTop = container.querySelector('.transition__inside--top')!
        const insideBottom = container.querySelector('.transition__inside--bottom')!
        inside.classList.add('transition__inside--visible')
        
        anime({
            targets: insideTop,
            height: [
                { value: '50%', duration: 0, },
                { value: 0 , duration: Transition.animationDuration, },
            ],
            easing: 'easeOutQuad'
        })
        anime({
            targets: insideBottom,
            height: [
                { value: '50%', duration: 0, },
                { value: 0 , duration: Transition.animationDuration, },
            ],
            easing: 'easeOutQuad'
        })
        anime({
            targets: inside,
            translateY: [
                { value: 0, duration: Transition.animationDuration, },
                { value: '100%' , duration: 0, },
            ],
            easing: 'linear'
        })
    }

    destroy = () => {
        // Destroy functions
    }
}
