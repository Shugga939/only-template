import Component, { ComponentProps } from '@/base/component';

export default class Header extends Component {

    linksList: HTMLAnchorElement[]
    logo: HTMLAnchorElement;
    linksContainer: HTMLDivElement;

    constructor(element: ComponentProps) {
        super(element);
        this.logo = this.getElement('logo')!
        this.linksContainer = this.getElement('links')!
        this.linksList = <HTMLAnchorElement[]>[...this.linksContainer.children]
        this.linksContainer.addEventListener('click', this.clickHandler)
        this.showActiveLink()
    }

    showActiveLink = ()=> {
        this.linksList.forEach(link => {
            window.location.href === link.href? link.classList.add('header__link--active') :
                                                link.classList.remove('header__link--active')
        });
    }

    clickHandler = (e:Event)=> {
        const currentLink = (e.target as HTMLElement ).closest('.header__link') as HTMLAnchorElement
        if (currentLink) e.preventDefault();
    }

    toggleLogoColor() {
        this.logo.classList.toggle('header__logo--additionalColor')
        this.logo.classList.toggle('header__logo--mainlColor')
    }

    logoVision(show:boolean) {
        show? 
            this.logo.classList.remove('header__logo--hide')
            :
            this.logo.classList.add('header__logo--hide') 
    }

    destroy = () => {
        this.linksContainer.removeEventListener('click', this.clickHandler)
    };
}
