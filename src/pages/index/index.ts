import { ITransitionData, IViewData } from '@barba/core/dist/core/src/defs';
import Spoiler from '@/components/ui/spoiler/spoiler';
import { getComponent, getComponents } from '@/helpers/helpers';
import SliderPageContent from '@/components/sections/sliderPageContent/sliderPageContent';

let spoilers: Spoiler[] = []
let sliderPage: SliderPageContent[] = []


export default {
    namespace: 'common',
    async beforeEnter({ next }: ITransitionData) {
        try {
            if (getComponent('spoiler', next.container).component) {
                spoilers = getComponents('spoiler', next.container).map((item) => new Spoiler(item));
            }
            if (getComponent('sliderPageContent', next.container).component) {
                sliderPage = getComponents('sliderPageContent', next.container).map((item) => new SliderPageContent(item));
            }
            
        } catch (e) {
            console.error(e);
        }
    },
    beforeLeave({ current }: ITransitionData) {
        try {
            if (getComponent('spoiler', current.container).component) {
                spoilers.forEach(elem=> elem.destroy())
                spoilers = []
            }
            if (getComponent('sliderPageContent', current.container).component) {
                sliderPage.forEach(elem=> elem.destroy())
                sliderPage = []
            }
            
        } catch (e) {
            console.error(e);
        }
    },

    afterLeave() {
    },
};
