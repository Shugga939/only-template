import { ITransitionData } from '@barba/core/dist/core/src/defs';
import Spoiler from '@/components/ui/spoiler/spoiler';
import { getComponent, getComponents } from '@/helpers/helpers';
import SliderPageContent from '@/components/sections/sliderPageContent/sliderPageContent';

export default {
    namespace: 'common',
    async beforeEnter({ next }: ITransitionData) {
        try {
            if (getComponent('spoiler', next.container).component) {
                getComponents('spoiler', next.container).map((item) => new Spoiler(item));
            }
            if (getComponent('sliderPageContent', next.container).component) {
                getComponents('sliderPageContent', next.container).map((item) => new SliderPageContent(item));
            }
        } catch (e) {
            console.error(e);
        }
    },
    beforeLeave() {

    },

    afterLeave() {},
};
