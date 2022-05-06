'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">first-project-twin3 documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-fa4f15d48f13dc334a13bc9fe2b75b22970081c9e509a694c2fc0b83b556661fdb71303aee42d2738e26b44c7c100fcbc2c614cdbfdeff1f6cf775df51011599"' : 'data-target="#xs-components-links-module-AppModule-fa4f15d48f13dc334a13bc9fe2b75b22970081c9e509a694c2fc0b83b556661fdb71303aee42d2738e26b44c7c100fcbc2c614cdbfdeff1f6cf775df51011599"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-fa4f15d48f13dc334a13bc9fe2b75b22970081c9e509a694c2fc0b83b556661fdb71303aee42d2738e26b44c7c100fcbc2c614cdbfdeff1f6cf775df51011599"' :
                                            'id="xs-components-links-module-AppModule-fa4f15d48f13dc334a13bc9fe2b75b22970081c9e509a694c2fc0b83b556661fdb71303aee42d2738e26b44c7c100fcbc2c614cdbfdeff1f6cf775df51011599"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ContentComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ContentComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeadComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HeadComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MainProviderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MainProviderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NotFoundComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NotFoundComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/GproductModule.html" data-type="entity-link" >GproductModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-GproductModule-98d3630298dd4f24cd660b9174bd700471a52fb1aa4b877f6fe9313f02ffcfff9e5243534713fc7c12b49ac1d349e61717fb041389db45c06b4548601900e694"' : 'data-target="#xs-components-links-module-GproductModule-98d3630298dd4f24cd660b9174bd700471a52fb1aa4b877f6fe9313f02ffcfff9e5243534713fc7c12b49ac1d349e61717fb041389db45c06b4548601900e694"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-GproductModule-98d3630298dd4f24cd660b9174bd700471a52fb1aa4b877f6fe9313f02ffcfff9e5243534713fc7c12b49ac1d349e61717fb041389db45c06b4548601900e694"' :
                                            'id="xs-components-links-module-GproductModule-98d3630298dd4f24cd660b9174bd700471a52fb1aa4b877f6fe9313f02ffcfff9e5243534713fc7c12b49ac1d349e61717fb041389db45c06b4548601900e694"' }>
                                            <li class="link">
                                                <a href="components/BestSellerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BestSellerComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FormAddProductComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FormAddProductComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/GproductComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GproductComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MainProductComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MainProductComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProductComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/GproductRoutingModule.html" data-type="entity-link" >GproductRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/GuserModule.html" data-type="entity-link" >GuserModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-GuserModule-37423263b108161074616702a5fcf13f4cd27e9e6e9cde8e02347302095391848687c9ea2826fdc087e3163bb9dce01448b0299934383474ebc477e4c5915d01"' : 'data-target="#xs-components-links-module-GuserModule-37423263b108161074616702a5fcf13f4cd27e9e6e9cde8e02347302095391848687c9ea2826fdc087e3163bb9dce01448b0299934383474ebc477e4c5915d01"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-GuserModule-37423263b108161074616702a5fcf13f4cd27e9e6e9cde8e02347302095391848687c9ea2826fdc087e3163bb9dce01448b0299934383474ebc477e4c5915d01"' :
                                            'id="xs-components-links-module-GuserModule-37423263b108161074616702a5fcf13f4cd27e9e6e9cde8e02347302095391848687c9ea2826fdc087e3163bb9dce01448b0299934383474ebc477e4c5915d01"' }>
                                            <li class="link">
                                                <a href="components/FormAddUserComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FormAddUserComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/GuserComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GuserComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ListUserComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ListUserComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MainUserComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MainUserComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/GuserRoutingModule.html" data-type="entity-link" >GuserRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Product.html" data-type="entity-link" >Product</a>
                            </li>
                            <li class="link">
                                <a href="classes/User.html" data-type="entity-link" >User</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/CalculService.html" data-type="entity-link" >CalculService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProductService.html" data-type="entity-link" >ProductService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SharedDataService.html" data-type="entity-link" >SharedDataService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserService.html" data-type="entity-link" >UserService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});