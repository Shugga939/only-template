import 'core-js/stable';
import '../scss/common.scss';
import barba from '@barba/core';
import barbaPrefetch from '@barba/prefetch';
import common from '@/pages/index/index';
import {getComponent, resize, setVhCssVariable} from '@/helpers/helpers';
import Header from "@/components/common/header/header";
import Footer from "@/components/common/footer/footer";
import Transition from '@/components/common/transition/transition';

// SVG
const requireAll = (r: __WebpackModuleApi.RequireContext) => r.keys().forEach(r);
requireAll(require.context('../../assets/icons', true, /\.svg$/));

setVhCssVariable();
resize(setVhCssVariable);

export const header = new Header(getComponent('header'));
export const footer = new Footer(getComponent('footer'));
export const transition = new Transition(getComponent("transition"));


barba.use(barbaPrefetch);

barba.hooks.beforeEnter((_data) => {
});

barba.hooks.enter((_data) => {
    header.showActiveLink()
    setTimeout(()=>header.logoVision(true),300)
    transition.enter(_data?.next.container!)
});

barba.hooks.leave( async (_data) => {
    header.destroy()
    header.logoVision(false)
    await transition.leave(_data?.current.container!)
});

barba.hooks.once(
    transition.once(),
    setTimeout(()=>header.toggleLogoColor(),1750)
);

barba.init({
    timeout: 500000,
    prefetchIgnore: '/bitrix',
    prevent: ({ el }) => el?.id?.indexOf('bx') !== -1 || el?.classList.contains('no-barba'),
    views: [common],
    requestError: () => false,
});
