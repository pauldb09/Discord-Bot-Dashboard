(window.webpackJsonp = window.webpackJsonp || []).push([
    [19], {
        okPm: function(e, t, o) {
            "use strict";
            o.r(t), o.d(t, "ROUTES", function() { return Wr }), o.d(t, "SiteRoutingModule", function() { return Xr });
            var i = o("iInd"),
                r = o("SVse"),
                n = o("s7LF"),
                s = o("NMtB"),
                c = o("hex+"),
                a = o("LRne"),
                b = o("z6cu"),
                l = o("eIep"),
                d = o("JIr8"),
                p = o("8Y7J"),
                u = o("XZY7"),
                h = o("gNCb");
            let m = (() => {
                class e {
                    constructor(e, t, o, i) { this.productsService = e, this.platformService = t, this.configService = o, this.router = i }
                    canActivate() { return this._canActivate() }
                    canActivateChild() { return this._canActivate() }
                    _canActivate() { return this.platformService.isServer ? Object(a.a)(!0) : this.configService.loadConfig().pipe(Object(l.a)(e => this.productsService.products$), Object(l.a)(e => Object(a.a)(!0)), Object(d.a)(e => (this.router.navigate(["/error/503"]), Object(b.a)(e)))) }
                }
                return e.\u0275fac = function(t) { return new(t || e)(p.Wb(u.c), p.Wb(h.n), p.Wb(h.c), p.Wb(i.d)) }, e.\u0275prov = p.Fb({ token: e, factory: e.\u0275fac }), e
            })();
            const g = [m],
                f = [(() => {
                    class e {
                        constructor() {}
                        getSite$() { return Object(a.a)({}) }
                    }
                    return e.\u0275fac = function(t) { return new(t || e) }, e.\u0275prov = p.Fb({ token: e, factory: e.\u0275fac }), e
                })()];
            let P = (() => {
                class e {}
                return e.\u0275mod = p.Hb({ type: e }), e.\u0275inj = p.Gb({
                    factory: function(t) { return new(t || e) },
                    providers: [...f, ...g],
                    imports: [
                        [r.c, i.g, n.p, n.h, s.a, c.a]
                    ]
                }), e
            })();
            var v = o("Xc2/"),
                y = o("X1Gg"),
                O = o("cKR0");
            let w = (() => {
                class e {
                    constructor() {}
                    ngOnInit() {}
                }
                return e.\u0275fac = function(t) { return new(t || e) }, e.\u0275cmp = p.Db({
                    type: e,
                    selectors: [
                        ["sbw-about-us"]
                    ],
                    decls: 49,
                    vars: 0,
                    consts: [
                        ["headerClasses", "bg-light page-header-light", "borderType", "angled", "borderClasses", "text-white"],
                        [1, "page-header-content", "pb-4"],
                        [1, "container"],
                        [1, "row", "align-items-center"],
                        [1, "col-lg-8", "mb-4", "mb-lg-0"],
                        [1, "page-header-title"],
                        [1, "page-header-text", "mb-0"],
                        [1, "col-lg-4"],
                        ["sbwCarbon", "", 1, "carbon-container", "carbon-inverse"],
                        ["sectionClasses", "pt-10 pb-5 bg-white", "borderType", "angled", "borderClasses", "text-light"],
                        [1, "row"],
                        [1, "col-lg-8"],
                        [1, "mb-5"],
                        [1, "mb-0"]
                    ],
                    template: function(e, t) { 1 & e && (p.Pb(0, "sbpro-page-header", 0), p.Pb(1, "div", 1), p.Pb(2, "div", 2), p.Pb(3, "div", 3), p.Pb(4, "div", 4), p.Pb(5, "h1", 5), p.Fc(6, "About Us"), p.Ob(), p.Pb(7, "p", 6), p.Fc(8, "We design and develop expertly coded, Bootstrap based UI tools to help designers and developers build beautiful and powerful web applications."), p.Ob(), p.Ob(), p.Pb(9, "div", 7), p.Kb(10, "div", 8), p.Ob(), p.Ob(), p.Ob(), p.Ob(), p.Ob(), p.Pb(11, "sbpro-page-section", 9), p.Pb(12, "div", 2), p.Pb(13, "div", 10), p.Pb(14, "div", 11), p.Pb(15, "div", 12), p.Pb(16, "h2"), p.Fc(17, "Rooted in Open Source"), p.Ob(), p.Kb(18, "hr"), p.Pb(19, "p"), p.Fc(20, "Founded in 2013, Start Bootstrap has been the most popular library of free, open source Bootstrap themes on the web for over seven years. At the very start, the mission was simply to create and share free, open source, and easy to download Bootstrap themes without sacrificing quality. To this day, we still prioritize our one-click downloads without having to enter any information, and we use the MIT license for our free products so you don't have to use our name in the footer of your website."), p.Ob(), p.Pb(21, "p"), p.Fc(22, "Up until 2020, Start Bootstrap only featured free products with development supported by minimal advertising and affiliate partnerships. In 2020 however, after numerous requests for the past seven years, we began creating premium, paid products that were much more comprehensive and fully tooled versions of some of our most popular freebies."), p.Ob(), p.Pb(23, "p", 13), p.Fc(24, "Moving forward, we will be focusing on maintaining the quality and design of our free, open source products along with our new, more powerful pro products. Thank you for visiting Start Bootstrap!"), p.Ob(), p.Ob(), p.Pb(25, "div", 12), p.Pb(26, "h2"), p.Fc(27, "Meet the Devs"), p.Ob(), p.Kb(28, "hr"), p.Pb(29, "p"), p.Fc(30, "Start Bootstrap was founded by and maintained by David Miller in 2013. In 2020, Sam Artioli joined the company. The expertise he has brought to the table has now allowed us to develop more powerful products using new technologies, along with an expanded vision for the company."), p.Ob(), p.Ob(), p.Pb(31, "div", 12), p.Pb(32, "h3"), p.Fc(33, "David Miller"), p.Ob(), p.Pb(34, "p"), p.Fc(35, "David is the founder of Start Bootstrap. Before creating Start Bootstrap, he was a web designer at the University of Central Florida as well as a freelance web designer working with local clients."), p.Ob(), p.Pb(36, "p"), p.Fc(37, "Since 2013, he has worked on maintaining Start Bootstrap, and thanks to the exposure gained from Start Bootstrap, he has been able to successfully work as a contract developer building out UI's for clients and organizations worldwide."), p.Ob(), p.Ob(), p.Pb(38, "div", 12), p.Pb(39, "h3"), p.Fc(40, "Sam Artioli"), p.Ob(), p.Pb(41, "p"), p.Fc(42, "Sam is a Technologist, Technology Executive, and Entrepreneur with 20+ years of experience in technology. Sam has a solid career foundation, including 7 years at Apple (2000 - 2007) and 5 years with Disney (2011 - 2016), while taking a few years off in-between to travel the world and attempt his first startup."), p.Ob(), p.Pb(43, "p"), p.Fc(44, "Most recently, Sam lead the technology initiatives at Abe.ai, a white-label chatbot software for community banks and credit unions, which was successfully acquired by Envestnet in January 2019."), p.Ob(), p.Pb(45, "p"), p.Fc(46, "As of January 2020, Sam joined forces with David to help expand Start Bootstrap."), p.Ob(), p.Pb(47, "p"), p.Fc(48, "Apart from creating amazing software, Sam also enjoys spending time with his family, capoeira, piano, guitar, running and any form of surf/wake/snow/skate boarding."), p.Ob(), p.Ob(), p.Ob(), p.Ob(), p.Ob(), p.Ob()) },
                    directives: [v.a, y.a, O.a],
                    styles: [""],
                    changeDetection: 0
                }), e
            })();
            var F = o("quSY"),
                x = o("DDWP"),
                k = o("G0yt"),
                S = o("Nv++");
            const B = [
                    [
                        ["", 8, "dropdown-trigger"]
                    ],
                    [
                        ["", 8, "dropdown-items"]
                    ]
                ],
                D = function() { return ["fas", "chevron-right"] },
                I = [".dropdown-trigger", ".dropdown-items"];
            let T = (() => {
                class e {
                    constructor() { this.style = "icon", this.placement = "bottom-left", this.customClasses = [], this.dropdownButtonClasses = [], this.dropdownMenuClasses = [] }
                    ngOnInit() { "icon" === this.style && (this.dropdownButtonClasses.push("sb-btn-icon", "sb-btn-transparent-dark"), this.customClasses.push("no-caret")), this.background && this.dropdownButtonClasses.push(this.background), this.color && this.dropdownButtonClasses.push(this.color), this.classes && this.customClasses.push(...this.classes), this.animation && this.dropdownMenuClasses.push(this.animation) }
                }
                return e.\u0275fac = function(t) { return new(t || e) }, e.\u0275cmp = p.Db({
                    type: e,
                    selectors: [
                        ["sbpro-dropdown"]
                    ],
                    inputs: { style: "style", background: "background", color: "color", placement: "placement", classes: "classes", animation: "animation" },
                    ngContentSelectors: I,
                    decls: 7,
                    vars: 6,
                    consts: [
                        ["ngbDropdown", "", "display", "dynamic", 1, "dropdown", "mr-3", 3, "ngClass", "placement"],
                        ["ngbDropdownToggle", "", "data-cy", "dropdown", "role", "button", "aria-haspopup", "true", "aria-expanded", "false", 1, "btn", "dropdown-toggle", 3, "ngClass"],
                        [1, "dropdown-arrow"],
                        [3, "icon"],
                        ["ngbDropdownMenu", "", "aria-labelledby", "dropdownMenuButton", 1, "dropdown-menu", "dropdown-menu-right", "border-0", "shadow", 3, "ngClass"]
                    ],
                    template: function(e, t) { 1 & e && (p.kc(B), p.Pb(0, "div", 0), p.Pb(1, "button", 1), p.jc(2), p.Pb(3, "div", 2), p.Kb(4, "fa-icon", 3), p.Ob(), p.Ob(), p.Pb(5, "div", 4), p.jc(6, 1), p.Ob(), p.Ob()), 2 & e && (p.lc("ngClass", t.customClasses)("placement", t.placement), p.xb(1), p.lc("ngClass", t.dropdownButtonClasses), p.xb(3), p.lc("icon", p.oc(5, D)), p.xb(1), p.lc("ngClass", t.dropdownMenuClasses)) },
                    directives: [k.d, r.o, k.g, S.a, k.f],
                    styles: [".dropdown-item{cursor:pointer}"],
                    changeDetection: 0
                }), e
            })();
            const C = function() { return ["fas", "check-square"] };

            function L(e, t) { 1 & e && p.Kb(0, "fa-icon", 29), 2 & e && p.lc("icon", p.oc(1, C)) }
            const K = function() { return ["fas", "square"] };

            function M(e, t) { 1 & e && p.Kb(0, "fa-icon", 30), 2 & e && p.lc("icon", p.oc(1, K)) }

            function E(e, t) { 1 & e && p.Kb(0, "fa-icon", 29), 2 & e && p.lc("icon", p.oc(1, C)) }

            function A(e, t) { 1 & e && p.Kb(0, "fa-icon", 30), 2 & e && p.lc("icon", p.oc(1, K)) }

            function N(e, t) { 1 & e && p.Kb(0, "fa-icon", 29), 2 & e && p.lc("icon", p.oc(1, C)) }

            function j(e, t) { 1 & e && p.Kb(0, "fa-icon", 30), 2 & e && p.lc("icon", p.oc(1, K)) }
            const R = function(e) { return { active: e } };

            function U(e, t) {
                if (1 & e) {
                    const e = p.Qb();
                    p.Pb(0, "div", 21), p.Pb(1, "div", 2), p.Fc(2, "Technologies"), p.Ob(), p.Pb(3, "div", 22), p.Pb(4, "label", 23), p.Pb(5, "input", 24), p.Zb("click", function() { return p.vc(e), p.dc().toggleFilter("HTML") }), p.Ob(), p.Dc(6, L, 1, 2, "fa-icon", 25), p.Dc(7, M, 1, 2, "fa-icon", 26), p.Fc(8, "HTML"), p.Ob(), p.Pb(9, "label", 27), p.Pb(10, "input", 24), p.Zb("click", function() { return p.vc(e), p.dc().toggleFilter("ANGULAR") }), p.Ob(), p.Dc(11, E, 1, 2, "fa-icon", 25), p.Dc(12, A, 1, 2, "fa-icon", 26), p.Fc(13, "Angular"), p.Ob(), p.Pb(14, "label", 28), p.Pb(15, "input", 24), p.Zb("click", function() { return p.vc(e), p.dc().toggleFilter("VUE") }), p.Ob(), p.Dc(16, N, 1, 2, "fa-icon", 25), p.Dc(17, j, 1, 2, "fa-icon", 26), p.Fc(18, "Vue"), p.Ob(), p.Ob(), p.Ob()
                }
                if (2 & e) {
                    const e = p.dc();
                    p.xb(4), p.lc("ngClass", p.pc(12, R, e.showHTML)), p.yb("data-cy-value", e.showHTML), p.xb(2), p.lc("ngIf", e.showHTML), p.xb(1), p.lc("ngIf", !e.showHTML), p.xb(2), p.lc("ngClass", p.pc(14, R, e.showAngular)), p.yb("data-cy-value", e.showAngular), p.xb(2), p.lc("ngIf", e.showAngular), p.xb(1), p.lc("ngIf", !e.showAngular), p.xb(2), p.lc("ngClass", p.pc(16, R, e.showVue)), p.yb("data-cy-value", e.showVue), p.xb(2), p.lc("ngIf", e.showVue), p.xb(1), p.lc("ngIf", !e.showVue)
                }
            }

            function q(e, t) { 1 & e && p.Kb(0, "fa-icon", 29), 2 & e && p.lc("icon", p.oc(1, C)) }

            function G(e, t) { 1 & e && p.Kb(0, "fa-icon", 30), 2 & e && p.lc("icon", p.oc(1, K)) }

            function H(e, t) { 1 & e && p.Kb(0, "fa-icon", 29), 2 & e && p.lc("icon", p.oc(1, C)) }

            function _(e, t) { 1 & e && p.Kb(0, "fa-icon", 30), 2 & e && p.lc("icon", p.oc(1, K)) }

            function V(e, t) {
                if (1 & e) {
                    const e = p.Qb();
                    p.Pb(0, "div", 31), p.Pb(1, "div", 2), p.Fc(2, "Price"), p.Ob(), p.Pb(3, "div", 22), p.Pb(4, "label", 32), p.Pb(5, "input", 24), p.Zb("click", function() { return p.vc(e), p.dc().toggleFilter("PRO") }), p.Ob(), p.Dc(6, q, 1, 2, "fa-icon", 25), p.Dc(7, G, 1, 2, "fa-icon", 26), p.Fc(8, "Pro"), p.Ob(), p.Pb(9, "label", 33), p.Pb(10, "input", 24), p.Zb("click", function() { return p.vc(e), p.dc().toggleFilter("FREE") }), p.Ob(), p.Dc(11, H, 1, 2, "fa-icon", 25), p.Dc(12, _, 1, 2, "fa-icon", 26), p.Fc(13, "Free"), p.Ob(), p.Ob(), p.Ob()
                }
                if (2 & e) {
                    const e = p.dc();
                    p.xb(4), p.lc("ngClass", p.pc(8, R, e.showPro)), p.yb("data-cy-value", e.showPro), p.xb(2), p.lc("ngIf", e.showPro), p.xb(1), p.lc("ngIf", !e.showPro), p.xb(2), p.lc("ngClass", p.pc(10, R, e.showFree)), p.yb("data-cy-value", e.showFree), p.xb(2), p.lc("ngIf", e.showFree), p.xb(1), p.lc("ngIf", !e.showFree)
                }
            }

            function J(e, t) { 1 & e && p.Kb(0, "fa-icon", 29), 2 & e && p.lc("icon", p.oc(1, C)) }

            function W(e, t) { 1 & e && p.Kb(0, "fa-icon", 30), 2 & e && p.lc("icon", p.oc(1, K)) }

            function X(e, t) { 1 & e && p.Kb(0, "fa-icon", 29), 2 & e && p.lc("icon", p.oc(1, C)) }

            function z(e, t) { 1 & e && p.Kb(0, "fa-icon", 30), 2 & e && p.lc("icon", p.oc(1, K)) }
            const Q = function() { return ["fad", "info-circle"] };

            function $(e, t) {
                if (1 & e) {
                    const e = p.Qb();
                    p.Pb(0, "div", 31), p.Pb(1, "div", 2), p.Fc(2, "Type"), p.Kb(3, "fa-icon", 34), p.Ob(), p.Pb(4, "div", 22), p.Pb(5, "label", 35), p.Pb(6, "input", 24), p.Zb("click", function() { return p.vc(e), p.dc().toggleFilter("THEME") }), p.Ob(), p.Dc(7, J, 1, 2, "fa-icon", 25), p.Dc(8, W, 1, 2, "fa-icon", 26), p.Fc(9, "Themes"), p.Ob(), p.Pb(10, "label", 36), p.Pb(11, "input", 24), p.Zb("click", function() { return p.vc(e), p.dc().toggleFilter("TEMPLATE") }), p.Ob(), p.Dc(12, X, 1, 2, "fa-icon", 25), p.Dc(13, z, 1, 2, "fa-icon", 26), p.Fc(14, "Templates"), p.Ob(), p.Ob(), p.Ob()
                }
                if (2 & e) {
                    const e = p.dc();
                    p.xb(3), p.lc("icon", p.oc(9, Q)), p.xb(2), p.lc("ngClass", p.pc(10, R, e.showTheme)), p.yb("data-cy-value", e.showTheme), p.xb(2), p.lc("ngIf", e.showTheme), p.xb(1), p.lc("ngIf", !e.showTheme), p.xb(2), p.lc("ngClass", p.pc(12, R, e.showTemplate)), p.yb("data-cy-value", e.showTemplate), p.xb(2), p.lc("ngIf", e.showTemplate), p.xb(1), p.lc("ngIf", !e.showTemplate)
                }
            }
            const Z = function(e) { return { "text-primary": e } };
            let Y = (() => {
                    class e {
                        constructor(e, t, o, i) { this.productsService = e, this.router = t, this.route = o, this.changeDetectorRef = i, this.showFrameworksGroup = !0, this.showFreeOrProGroup = !0, this.selectedCategory = "ALL", this.subscription = new F.a, this.showThemeOrTemplateGroup = !1, this.selectedCategoryDisplay = "", this.selectedFramework = "", this.selectedFreeOrPro = "", this.showHTML = !0, this.showAngular = !0, this.showVue = !0, this.showPro = !0, this.showFree = !0, this.showTheme = !0, this.showTemplate = !0 }
                        ngOnInit() { this.productsService.resetFilters(), this.selectedCategoryDisplay = x.ProductCategoryDisplayName[this.selectedCategory], this.selectedCategory === x.ProductCategory.bundle && (this.showFreeOrProGroup = !1), this.subscription.add(this.route.queryParams.subscribe(e => this._processQueryParams(e))), this._hasThemesTemplatesSlug() }
                        ngOnDestroy() { this.subscription.unsubscribe() }
                        _resetFilters() { this.showHTML = !0, this.showAngular = !0, this.showVue = !0, this.showPro = !0, this.showFree = !0 }
                        _processQueryParams(e) {
                            this._resetFilters(), this.productsService.resetFilters();
                            for (const t in e) switch (t) {
                                case "showHTML":
                                    this.productsService.setTechnologyFilter("HTML", !0), this.showHTML = !1;
                                    break;
                                case "showAngular":
                                    this.productsService.setTechnologyFilter("ANGULAR", !0), this.showAngular = !1;
                                    break;
                                case "showVue":
                                    this.productsService.setTechnologyFilter("VUE", !0), this.showVue = !1;
                                    break;
                                case "showPro":
                                    this.productsService.setFilterByFree("PRO", !0), this.showPro = !1, this.productsService.setFilterByFree("FREE", !1);
                                    break;
                                case "showFree":
                                    this.productsService.setFilterByFree("FREE", !0), this.showFree = !1, this.productsService.setFilterByFree("PRO", !1)
                            }
                            this._hasThemesTemplatesSlug(), this.changeDetectorRef.detectChanges()
                        }
                        _filterNameForParam(e) {
                            switch (e) {
                                case "showHTML":
                                    return "HTML";
                                case "showAngular":
                                    return "ANGULAR";
                                case "showVue":
                                    return "VUE";
                                case "showPro":
                                    return "PRO";
                                case "showFree":
                                    return "FREE"
                            }
                            throw new Error("PARAM_NOT_RECOGNIZED")
                        }
                        _hasThemesTemplatesSlug() { this.productConfig && this.productConfig.themesTemplatesSlug && (this.showThemeOrTemplateGroup = !!this.productConfig.themesTemplatesSlug, "themes" === this.route.snapshot.url[0].path && (this.productsService.setFilterByType("THEME", !1), this.productsService.setFilterByType("TEMPLATE", !0), this.showTemplate = !1), "templates" === this.route.snapshot.url[0].path && (this.productsService.setFilterByType("TEMPLATE", !1), this.productsService.setFilterByType("THEME", !0), this.showTheme = !1)) }
                        frameworkSelected(e) { e === this.selectedFramework && (this.selectedFramework = "") }
                        toggleFilter(e) {
                            let t;
                            switch (e) {
                                case "HTML":
                                    this.productsService.setTechnologyFilter("HTML", this.showHTML), this.showHTML = !this.showHTML;
                                    break;
                                case "ANGULAR":
                                    this.productsService.setTechnologyFilter("ANGULAR", this.showAngular), this.showAngular = !this.showAngular;
                                    break;
                                case "VUE":
                                    this.productsService.setTechnologyFilter("VUE", this.showVue), this.showVue = !this.showVue;
                                    break;
                                case "PRO":
                                    this.productsService.setFilterByFree("PRO", this.showPro), this.showPro = !this.showPro, this.showPro || this.showFree || (this.showFree = !0, this.productsService.setFilterByFree("FREE", !1));
                                    break;
                                case "FREE":
                                    this.productsService.setFilterByFree("FREE", this.showFree), this.showFree = !this.showFree, this.showPro || this.showFree || (this.showPro = !0, this.productsService.setFilterByFree("PRO", !1));
                                    break;
                                case "THEME":
                                    this.showTheme && this.showTemplate && (t = "/templates/" + this.productConfig.themesTemplatesSlug), this.showTheme && !this.showTemplate && (t = "/templates/" + this.productConfig.themesTemplatesSlug), !this.showTheme && this.showTemplate && (t = "/" + this.productConfig.themesTemplatesSlug);
                                    break;
                                case "TEMPLATE":
                                    this.showTheme && this.showTemplate && (t = "/themes/" + this.productConfig.themesTemplatesSlug), !this.showTheme && this.showTemplate && (t = "/themes/" + this.productConfig.themesTemplatesSlug), this.showTheme && !this.showTemplate && (t = "/" + this.productConfig.themesTemplatesSlug)
                            }
                            const o = this._getQueryParams();
                            t ? this.router.navigate([t], { queryParams: o, queryParamsHandling: "merge" }) : this.router.navigate([], { relativeTo: this.route, queryParams: o, queryParamsHandling: "merge" })
                        }
                        changeCategory(e) {
                            const t = this._getQueryParams();
                            this.router.navigate([e], { queryParams: t, queryParamsHandling: "merge" })
                        }
                        _getQueryParams() { return { showHTML: !!this.showHTML && void 0, showAngular: !!this.showAngular && void 0, showVue: !!this.showVue && void 0, showPro: !!this.showPro && void 0, showFree: !!this.showFree && void 0 } }
                    }
                    return e.\u0275fac = function(t) { return new(t || e)(p.Jb(u.c), p.Jb(i.d), p.Jb(i.a), p.Jb(p.h)) }, e.\u0275cmp = p.Db({
                        type: e,
                        selectors: [
                            ["sbw-quick-nav"]
                        ],
                        inputs: { showFrameworksGroup: "showFrameworksGroup", showFreeOrProGroup: "showFreeOrProGroup", selectedCategory: "selectedCategory", productConfig: "productConfig" },
                        decls: 34,
                        vars: 34,
                        consts: [
                            [1, "d-flex", "justify-content-between", "flex-column", "flex-xl-row"],
                            [1, "mb-3", "mb-xl-0"],
                            [1, "font-italic", "text-xs", "mb-1"],
                            ["dropdownStyle", "text", "background", "btn-white shadow"],
                            ["data-cy", "selectedCategory", 1, "dropdown-trigger"],
                            [1, "dropdown-items"],
                            ["data-cy", "ALL", 1, "dropdown-item", 3, "ngClass", "click"],
                            ["data-cy", "ADMIN_DASHBOARD", 1, "dropdown-item", 3, "ngClass", "click"],
                            ["data-cy", "LANDING_PAGES", 1, "dropdown-item", 3, "ngClass", "click"],
                            ["data-cy", "BUSINESS_CORPORATE", 1, "dropdown-item", 3, "ngClass", "click"],
                            ["data-cy", "PORTFOLIO_RESUME", 1, "dropdown-item", 3, "ngClass", "click"],
                            ["data-cy", "GENERAL_PAGE_LAYOUTS", 1, "dropdown-item", 3, "ngClass", "click"],
                            ["data-cy", "NAVIGATION_LAYOUTS", 1, "dropdown-item", 3, "ngClass", "click"],
                            ["data-cy", "ECOMMERCE", 1, "dropdown-item", 3, "ngClass", "click"],
                            ["data-cy", "BLOG_NEWS", 1, "dropdown-item", 3, "ngClass", "click"],
                            [1, "dropdown-divider"],
                            ["data-cy", "BUNDLE", 1, "dropdown-item", 3, "ngClass", "click"],
                            [1, "d-flex", "flex-column", "flex-lg-row"],
                            ["class", "mb-3 mb-lg-0", 4, "ngIf"],
                            ["class", "ml-lg-3 mb-3 mb-lg-0", 4, "ngIf"],
                            [1, "mt-3", "mb-5"],
                            [1, "mb-3", "mb-lg-0"],
                            [1, "btn-group", "btn-group-toggle", "btn-group-quick-nav"],
                            ["data-cy", "showHTML", 1, "btn", "btn-white", 3, "ngClass"],
                            ["type", "radio", 3, "click"],
                            ["class", "mr-2 text-primary", 3, "icon", 4, "ngIf"],
                            ["class", "mr-2 text-gray-300", 3, "icon", 4, "ngIf"],
                            ["data-cy", "showAngular", 1, "btn", "btn-white", 3, "ngClass"],
                            ["data-cy", "showVue", 1, "btn", "btn-white", 3, "ngClass"],
                            [1, "mr-2", "text-primary", 3, "icon"],
                            [1, "mr-2", "text-gray-300", 3, "icon"],
                            [1, "ml-lg-3", "mb-3", "mb-lg-0"],
                            ["data-cy", "showPro", 1, "btn", "btn-white", 3, "ngClass"],
                            ["data-cy", "showFree", 1, "btn", "btn-white", 3, "ngClass"],
                            ["placement", "top", "ngbTooltip", "Themes are fully styled layouts. Templates are basic blueprints with minimal custom styling.", 1, "ml-1", "text-gray-500", 3, "icon"],
                            ["data-cy", "showTheme", 1, "btn", "btn-white", 3, "ngClass"],
                            ["data-cy", "showTemplate", 1, "btn", "btn-white", 3, "ngClass"]
                        ],
                        template: function(e, t) { 1 & e && (p.Pb(0, "div", 0), p.Pb(1, "div", 1), p.Pb(2, "div", 2), p.Fc(3, "Category"), p.Ob(), p.Pb(4, "sbpro-dropdown", 3), p.Pb(5, "div", 4), p.Fc(6), p.Ob(), p.Pb(7, "div", 5), p.Pb(8, "a", 6), p.Zb("click", function() { return t.changeCategory("/") }), p.Fc(9, "All"), p.Ob(), p.Pb(10, "a", 7), p.Zb("click", function() { return t.changeCategory("/admin-dashboard") }), p.Fc(11, "Admin & Dashboard"), p.Ob(), p.Pb(12, "a", 8), p.Zb("click", function() { return t.changeCategory("/landing-pages") }), p.Fc(13, "Landing Pages"), p.Ob(), p.Pb(14, "a", 9), p.Zb("click", function() { return t.changeCategory("/themes/business-corporate") }), p.Fc(15, "Business & Corporate"), p.Ob(), p.Pb(16, "a", 10), p.Zb("click", function() { return t.changeCategory("/themes/portfolio-resume") }), p.Fc(17, "Portfolio & Resume"), p.Ob(), p.Pb(18, "a", 11), p.Zb("click", function() { return t.changeCategory("/templates/general") }), p.Fc(19, "General Page Layouts"), p.Ob(), p.Pb(20, "a", 12), p.Zb("click", function() { return t.changeCategory("/templates/navigation") }), p.Fc(21, "Navigation Layouts"), p.Ob(), p.Pb(22, "a", 13), p.Zb("click", function() { return t.changeCategory("/templates/ecommerce") }), p.Fc(23, "Ecommerce"), p.Ob(), p.Pb(24, "a", 14), p.Zb("click", function() { return t.changeCategory("/blog-news") }), p.Fc(25, "Blog & News"), p.Ob(), p.Kb(26, "div", 15), p.Pb(27, "a", 16), p.Zb("click", function() { return t.changeCategory("/bundles") }), p.Fc(28, "Bundles"), p.Ob(), p.Ob(), p.Ob(), p.Ob(), p.Pb(29, "div", 17), p.Dc(30, U, 19, 18, "div", 18), p.Dc(31, V, 14, 12, "div", 19), p.Dc(32, $, 15, 14, "div", 19), p.Ob(), p.Ob(), p.Kb(33, "hr", 20)), 2 & e && (p.xb(6), p.Gc(t.selectedCategoryDisplay), p.xb(2), p.lc("ngClass", p.pc(14, Z, "ALL" === t.selectedCategory)), p.xb(2), p.lc("ngClass", p.pc(16, Z, "ADMIN_DASHBOARD" === t.selectedCategory)), p.xb(2), p.lc("ngClass", p.pc(18, Z, "LANDING_PAGES" === t.selectedCategory)), p.xb(2), p.lc("ngClass", p.pc(20, Z, "BUSINESS_CORPORATE" === t.selectedCategory)), p.xb(2), p.lc("ngClass", p.pc(22, Z, "PORTFOLIO_RESUME" === t.selectedCategory)), p.xb(2), p.lc("ngClass", p.pc(24, Z, "GENERAL_PAGE_LAYOUTS" === t.selectedCategory)), p.xb(2), p.lc("ngClass", p.pc(26, Z, "NAVIGATION_LAYOUTS" === t.selectedCategory)), p.xb(2), p.lc("ngClass", p.pc(28, Z, "ECOMMERCE" === t.selectedCategory)), p.xb(2), p.lc("ngClass", p.pc(30, Z, "BLOG_NEWS" === t.selectedCategory)), p.xb(3), p.lc("ngClass", p.pc(32, Z, "BUNDLE" === t.selectedCategory)), p.xb(3), p.lc("ngIf", t.showFrameworksGroup), p.xb(1), p.lc("ngIf", t.showFreeOrProGroup), p.xb(1), p.lc("ngIf", t.showThemeOrTemplateGroup)) },
                        directives: [T, r.o, r.q, S.a, k.m],
                        styles: ["[_nghost-%COMP%]{display:contents}.btn-group-quick-nav[_ngcontent-%COMP%]{box-shadow:0 .15rem 1.75rem 0 rgba(33,40,50,.15);border-radius:.35rem}.btn-group-quick-nav[_ngcontent-%COMP%]   .btn-white[_ngcontent-%COMP%]{border-color:#f2f2f2}.btn-group-quick-nav[_ngcontent-%COMP%]   .btn-white.active[_ngcontent-%COMP%]{color:#212832;background-color:#fff;border-color:#f2f2f2}.btn-group-quick-nav[_ngcontent-%COMP%]   .btn-white.active[_ngcontent-%COMP%]:hover{background-color:#f2f2f2}"],
                        changeDetection: 0
                    }), e
                })(),
                ee = (() => {
                    class e {
                        constructor(e, t, o) { this.utilityService = e, this._elRef = t, this.analyticsService = o, this.inViewportOptions = {}, this.hasIntersectionObserver = this.intersectionObserverFeatureDetection() }
                        ngOnInit() {
                            var e;
                            (null === (e = this.product) || void 0 === e ? void 0 : e.free) && (this.hasIntersectionObserver = !1)
                        }
                        ngAfterViewInit() { this.hasIntersectionObserver && (this.observer = new(0, this.utilityService.window.IntersectionObserver)(this.intersectionObserverCallback.bind(this), Object.assign(Object.assign({}, this.inViewportOptions), { root: null })), this.observer.observe(this._elRef.nativeElement)) }
                        ngOnDestroy() { this.observer && this.observer.unobserve(this._elRef.nativeElement) }
                        intersectionObserverCallback(e) { e.forEach(e => { e.isIntersecting && (this.product && this.analyticsService.productImpression(this.product), this.promotion && this.analyticsService.promotionImpression(this.promotion, this.slug)) }) }
                        intersectionObserverFeatureDetection() { return "IntersectionObserver" in this.utilityService.window && "IntersectionObserverEntry" in this.utilityService.window && ("isIntersecting" in this.utilityService.window.IntersectionObserverEntry.prototype || Object.defineProperty(this.utilityService.window.IntersectionObserverEntry.prototype, "isIntersecting", {get() { return this.intersectionRatio > 0 } }), !0) }
                    }
                    return e.\u0275fac = function(t) { return new(t || e)(p.Jb(h.s), p.Jb(p.l), p.Jb(h.a)) }, e.\u0275dir = p.Eb({
                        type: e,
                        selectors: [
                            ["", "sbwInView", ""]
                        ],
                        inputs: { product: "product", promotion: "promotion", slug: "slug", inViewportOptions: "inViewportOptions" }
                    }), e
                })(),
                te = (() => {
                    class e {
                        constructor(e) { this.analyticsService = e }
                        transform(e) { return `/${e.productType.toLowerCase()}/${e.slug}` }
                    }
                    return e.\u0275fac = function(t) { return new(t || e)(p.Jb(h.a)) }, e.\u0275pipe = p.Ib({ name: "createProductCardLink", type: e, pure: !0 }), e
                })();
            var oe = o("xRdd"),
                ie = o("8c7h");

            function re(e, t) { 1 & e && (p.Pb(0, "div", 21), p.Fc(1, "Free"), p.Ob()) }

            function ne(e, t) { 1 & e && (p.Pb(0, "div", 22), p.Fc(1, "Pro"), p.Ob()) }
            const se = function() { return ["fad", "download"] };

            function ce(e, t) {
                if (1 & e && (p.Pb(0, "div", 23), p.Kb(1, "fa-icon", 24), p.Fc(2, "X,XXX"), p.Ob()), 2 & e) {
                    const e = p.dc().$implicit;
                    p.yb("data-cy", e.slug + "-downloadCount"), p.xb(1), p.lc("icon", p.oc(2, se))
                }
            }

            function ae(e, t) {
                if (1 & e && (p.Pb(0, "div", 23), p.Kb(1, "fa-icon", 24), p.Fc(2), p.ec(3, "number"), p.Ob()), 2 & e) {
                    const e = p.dc().$implicit;
                    p.yb("data-cy", e.slug + "-downloadCount"), p.xb(1), p.lc("icon", p.oc(7, se)), p.xb(1), p.Gc(p.hc(3, 3, e.downloadCount, "1.0", "en-US"))
                }
            }
            const be = function(e) { return { hidden: e } };

            function le(e, t) {
                if (1 & e) {
                    const e = p.Qb();
                    p.Pb(0, "div", 8), p.Pb(1, "a", 9), p.Zb("click", function() { p.vc(e); const o = t.$implicit; return p.dc(3).viewProduct(o) }), p.ec(2, "createProductCardLink"), p.Pb(3, "picture"), p.Kb(4, "source", 10), p.ec(5, "safe"), p.ec(6, "webpExt"), p.Kb(7, "source", 11), p.ec(8, "safe"), p.Kb(9, "img", 12), p.ec(10, "safe"), p.Ob(), p.Ob(), p.Pb(11, "div", 13), p.Pb(12, "div", 14), p.Pb(13, "div", 15), p.Fc(14), p.Ob(), p.Pb(15, "div", 16), p.Fc(16), p.Ob(), p.Ob(), p.Pb(17, "div", 17), p.Dc(18, re, 2, 0, "div", 18), p.Dc(19, ne, 2, 0, "div", 19), p.Dc(20, ce, 3, 3, "div", 20), p.Dc(21, ae, 4, 8, "div", 20), p.Ob(), p.Ob(), p.Ob()
                }
                if (2 & e) {
                    const e = t.$implicit,
                        o = p.dc(3);
                    p.lc("ngClass", p.pc(31, be, e.hidden)), p.xb(1), p.lc("routerLink", p.fc(2, 14, e)), p.yb("data-cy", e.slug), p.xb(3), p.lc("srcset", p.hc(5, 16, p.gc(6, 20, null == e.images ? null : e.images.primaryImage.medium, "medium"), "resourceURL", "NONE"), p.yc), p.xb(3), p.lc("srcset", p.hc(8, 23, null == e.images ? null : e.images.primaryImage.medium, "resourceURL", "NONE"), p.yc), p.xb(2), p.lc("src", p.hc(10, 27, null == e.images ? null : e.images.primaryImage.medium, "resourceURL", "NONE"), p.yc)("alt", null == e.images ? null : e.images.primaryImage.alt), p.xb(3), p.lc("product", e), p.xb(2), p.Gc(e.displayName), p.xb(2), p.Gc(e.description.bump), p.xb(2), p.lc("ngIf", !0 === e.free), p.xb(1), p.lc("ngIf", !1 === e.free), p.xb(1), p.lc("ngIf", !o.prerenderDynamicProductCardsLoaded), p.xb(1), p.lc("ngIf", o.prerenderDynamicProductCardsLoaded)
                }
            }

            function de(e, t) {
                if (1 & e && (p.Nb(0), p.Dc(1, le, 22, 33, "div", 7), p.Mb()), 2 & e) {
                    const e = p.dc().ngIf;
                    p.xb(1), p.lc("ngForOf", e)
                }
            }

            function pe(e, t) {
                if (1 & e && (p.Nb(0), p.Dc(1, de, 2, 1, "ng-container", 3), p.Mb()), 2 & e) {
                    const e = t.ngIf,
                        o = p.dc(),
                        i = p.tc(7);
                    p.xb(1), p.lc("ngIf", e.length && !o.allHidden)("ngIfElse", i)
                }
            }

            function ue(e, t) { 1 & e && p.Kb(0, "div", 25) }

            function he(e, t) { 1 & e && (p.Pb(0, "div", 26), p.Kb(1, "img", 27), p.Pb(2, "h5", 28), p.Fc(3, "No matching items found"), p.Ob(), p.Pb(4, "p", 29), p.Fc(5, "Select some filters to see more items"), p.Ob(), p.Ob()) }

            function me(e, t) { 1 & e && (p.Pb(0, "div", 30), p.Pb(1, "p", 31), p.Fc(2, "Loading items..."), p.Ob(), p.Pb(3, "div", 32), p.Pb(4, "span", 33), p.Fc(5, "Loading..."), p.Ob(), p.Ob(), p.Ob()) }
            let ge = (() => {
                class e {
                    constructor(e, t, o, i, r) { this.productsService = e, this.changeDetectorRef = t, this.elementRef = o, this.analyticsService = i, this.platformService = r, this.showFrameworksGroup = !0, this.showFreeOrProGroup = !0, this.showThemeOrTemplateGroup = !1, this.subscription = new F.a, this.allHidden = !1, this.prerenderDynamicProductCardsLoaded = !1 }
                    ngOnInit() { this.productsService.setCategory(this.category || "ALL"), this.subscription.add(this.productsService.allHidden$.subscribe(e => { this.allHidden = e, this.changeDetectorRef.markForCheck() })) }
                    ngAfterViewInit() { this.platformService.isServer || (this.prerenderDynamicProductCardsLoaded = !0, this.changeDetectorRef.detectChanges()) }
                    ngOnDestroy() { this.subscription.unsubscribe() }
                    viewProduct(e) { e.free ? this.analyticsService.sendEventViewItem("FREE_PRODUCT", e.displayName) : this.analyticsService.sendEventViewItem("PRO_PRODUCT", e.displayName, void 0, e) }
                }
                return e.\u0275fac = function(t) { return new(t || e)(p.Jb(u.c), p.Jb(p.h), p.Jb(p.l), p.Jb(h.a), p.Jb(h.n)) }, e.\u0275cmp = p.Db({
                    type: e,
                    selectors: [
                        ["sbw-product-cards"]
                    ],
                    inputs: { category: "category", showFrameworksGroup: "showFrameworksGroup", showFreeOrProGroup: "showFreeOrProGroup", showThemeOrTemplateGroup: "showThemeOrTemplateGroup", productConfig: "productConfig" },
                    decls: 10,
                    vars: 9,
                    consts: [
                        [1, "container"],
                        [3, "showFrameworksGroup", "showFreeOrProGroup", "productConfig", "selectedCategory"],
                        [1, "row", "justify-content-center"],
                        [4, "ngIf", "ngIfElse"],
                        ["class", "hidden", "data-cy", "prerenderDynamicProductCardsLoaded", 4, "ngIf"],
                        ["noItems", ""],
                        ["loading", ""],
                        ["class", "col-lg-4 col-md-6 mb-5", 3, "ngClass", 4, "ngFor", "ngForOf"],
                        [1, "col-lg-4", "col-md-6", "mb-5", 3, "ngClass"],
                        ["tabindex", "0", 1, "d-block", "rounded-lg", "lift", "lift-lg", "mb-3", "pointer", 2, "--aspect-ratio", "1.5", 3, "routerLink", "click"],
                        ["type", "image/webp", 3, "srcset"],
                        ["type", "image/jpeg", 3, "srcset"],
                        [1, "img-fluid", "rounded-lg", 3, "src", "alt"],
                        [1, "d-flex", "justify-content-between", "align-items-center"],
                        ["sbwInView", "", 3, "product"],
                        [1, "h6", "mb-0"],
                        [1, "small"],
                        [1, "text-right", "flex-shrink-0"],
                        ["class", "badge badge-green-soft", 4, "ngIf"],
                        ["class", "badge badge-blue-soft", 4, "ngIf"],
                        ["class", "text-xs", 4, "ngIf"],
                        [1, "badge", "badge-green-soft"],
                        [1, "badge", "badge-blue-soft"],
                        [1, "text-xs"],
                        [1, "mr-1", 3, "icon"],
                        ["data-cy", "prerenderDynamicProductCardsLoaded", 1, "hidden"],
                        [1, "col-lg-4", "text-center", "mb-4"],
                        ["src", "assets/img/freepik/windows-pana.svg", "alt", "", 1, "img-fluid", "mb-3"],
                        [1, "mb-0"],
                        [1, "font-italic", "small", "mb-0"],
                        [1, "col-lg-4", "text-center"],
                        [1, "small", "font-italic"],
                        ["role", "status", 1, "spinner-border", "text-primary"],
                        [1, "sr-only"]
                    ],
                    template: function(e, t) {
                        if (1 & e && (p.Pb(0, "div", 0), p.Kb(1, "sbw-quick-nav", 1), p.Pb(2, "div", 2), p.Dc(3, pe, 2, 2, "ng-container", 3), p.ec(4, "async"), p.Ob(), p.Ob(), p.Dc(5, ue, 1, 0, "div", 4), p.Dc(6, he, 6, 0, "ng-template", null, 5, p.Ec), p.Dc(8, me, 6, 0, "ng-template", null, 6, p.Ec)), 2 & e) {
                            const e = p.tc(9);
                            p.xb(1), p.lc("showFrameworksGroup", t.showFrameworksGroup)("showFreeOrProGroup", t.showFreeOrProGroup)("productConfig", t.productConfig)("selectedCategory", t.category), p.xb(2), p.lc("ngIf", p.fc(4, 7, t.productsService.products$))("ngIfElse", e), p.xb(2), p.lc("ngIf", t.prerenderDynamicProductCardsLoaded)
                        }
                    },
                    directives: [Y, r.q, r.p, r.o, i.f, ee, S.a],
                    pipes: [r.b, te, oe.a, ie.a, r.g],
                    styles: [""],
                    changeDetection: 0
                }), e
            })();
            const fe = [{ title: "Official Bootstrap Resources", subTitle: "Projects created and maintained by the Bootstrap creators.", titleSeparator: !1, subSections: [{ resources: [{ name: "Bootstrap", link: "https://getbootstrap.com/", description: "The most popular front-end framework for developing responsive, mobile first projects on the web." }, { name: "Bootstrap Blog", link: "http://blog.getbootstrap.com/", description: "The official bootstrap blog. Announcements, discussions, and more for Bootstrap." }, { name: "Bootstrap Expo", link: "http://expo.getbootstrap.com/", description: "Beautiful and inspiring uses of Bootstrap, curated by @mdo." }, { name: "Bootlint", link: "https://github.com/twbs/bootlint", description: "An HTML linter for Bootstrap projects." }] }] }, { title: "Bootstrap Templates & Themes", titleSeparator: !0, subSections: [{ heading: "Premium Marketplaces", subHeading: "Purchase Bootstrap themes, or sell your own custom designed Bootstrap themes on these third-party marketplace websites!", resources: [{ name: "Bootstrap Themes", link: "https://themes.getbootstrap.com/", description: "Bootstrap Themes sells themes built by or reviewed by Bootstrap's creators. The Boostrap team reviews every new theme and update against a set of guidelines they wrote." }, { name: "WrapBootstrap", link: "https://wrapbootstrap.com/?ref=StartBootstrap", description: "WrapBootstrap was one of the first third-party marketplaces dedicated to selling premium Bootstrap templates and themes." }, { name: "BootstrapBay", link: "https://bootstrapbay.sjv.io/N0yAv", description: "BootstrapBay is a third-party marketplace for Bootstrap themes & templates, operating since 2014." }, { name: "ThemeForest", link: "https://1.envato.market/4m9dG", description: "ThemeForest is a very popular marketplace for website themes. There are thousands of Bootstrap based products on ThemeForest to choose from." }, { name: "Creative Market", link: "https://creativemarket.com/themes/bootstrap?u=StartBootstrap", description: "Creative Market is another third-party vendor marketplace that offers a variety of general design assets. Creative Market has many Bootstrap built themes to choose from." }] }, { heading: "Premium Vendors", subHeading: "Premium vendors only sell their own in-house created content, as opposed to marketplace websites that sell themes submitted by a variety of third-party users.", resources: [{ name: "Creative Tim", link: "https://www.creative-tim.com?affiliate_id=101249", description: "A selection of premium Bootstrap themes, templates, UI kits and more - developed by Creative Tim." }, { name: "Designmodo", link: "https://designmodo.com/startup/?u=787", description: "Designmodo's Startup Framework is a Bootstrap based website generator, which is a high quality solution for those who want a beautiful startup website quickly." }, { name: "Themefisher", link: "https://themefisher.com/premium-templates/", description: "A selection of Bootstrap based themes built by the design team at Themefisher." }] }, { heading: "Free Templates & Themes", subHeading: "Download free Bootstrap templates and themes on the following websites.", resources: [{ name: "Start Bootstrap", link: "https://startbootstrap.com/", description: "Start Bootstrap creates free, open source, MIT license, Bootstrap themes, templates, and code snippets for you to use on any project, guides to help you learn more about designing and developing with the Bootstrap framework, and premium Bootstrap products." }, { name: "Bootswatch", link: "http://bootswatch.com/", description: "A collection of easy to use, open source swatches for Bootstrap." }] }, { heading: "Bootstrap Showcases", subHeading: "Get inspired for your next Bootstrap project by browsing examples of websites built with Bootstrap!", resources: [{ name: "Built With Bootstrap", link: "http://builtwithbootstrap.com/", description: "A showcase of sites and apps built with Bootstrap" }] }] }, { title: "Bootstrap Integrations", titleSeparator: !0, subSections: [{ heading: "Javascript", subHeading: "Bootstrap components rewritten to integrate with the most popular development javascript frameworks", resources: [{ name: "ng-bootstrap", link: "https://ng-bootstrap.github.io", description: "Bootstrap 4 components, powered by Angular", supports: "Bootstrap 4" }, { name: "reactstrap", link: "https://reactstrap.github.io/", description: "Easy to use React Bootstrap 4 components", supports: "Bootstrap 4" }, { name: "Bootstrap Vue", link: "https://bootstrap-vue.js.org/", description: "Bootstrap 4 Components For Vue.js", supports: "Bootstrap 4" }, { name: "UI Bootstrap", link: "https://angular-ui.github.io/bootstrap/", description: "Bootstrap components written in pure AngularJS by the AngularUI Team", supports: "Bootstrap 3" }, { name: "ngx-bootstrap", link: "http://valor-software.com/ngx-bootstrap/", description: "Native Angular widgets for Bootstrap 3 and Bootstrap 4", supports: "Bootstrap 3, Bootstrap 4" }, { name: "Ember Bootstrap", link: "http://www.ember-bootstrap.com/", description: "An ember-cli addon for using Bootstrap in Ember.js applications.", supports: "Bootstrap 3" }] }, { heading: "Wordpress", subHeading: "Bootstrap components rewritten to integrate with wordpress", resources: [{ name: "Sage", link: "https://roots.io/sage/", description: "The best WordPress starter theme with a modern front-end development workflow. Sage comes with the latest version of Bootstrap.", supports: "Bootstrap 4" }, { name: "Bootplate", link: "http://bootplate.jdmdigital.co/", description: "Wicked-fast, mobile-first Bootstrap 4 theme framework for building awesome WordPress websites.", supports: "Bootstrap 4" }, { name: "Understrap", link: "http://understrap.com/", description: "UnderStrap combines Underscores and Bootstrap 4 into a perfect open source foundation for your next WordPress theme project.", supports: "Bootstrap 4" }] }] }, { title: "Bootstrap Development Tools", titleSeparator: !0, subSections: [{ heading: "Visual Builders", subHeading: "Visual builder applications for creating custom versions of Bootstrap and Bootstrap components.", resources: [{ name: "Bootply", link: "http://www.bootply.com/", description: "A Bootstrap code editor and builder - the Bootstrap playground.", supports: "Bootstrap 3, Bootstrap 4" }, { name: "BuildBootstrap", link: "http://buildbootstrap.com/", description: "BuildBootstrap is a free online tool helping with common task of creating responsive layout utilizing Bootstrap 3 or latest Bootstrap 4 grid system.", supports: "Bootstrap 3, Bootstrap 4" }, { name: "Pingendo", link: "http://pingendo.com/", description: "A first class Bootstrap 4 builder for developers, designers, and their clients", supports: "Bootstrap 4" }, { name: "Bootstrap Studio", link: "https://bootstrapstudio.io/", description: "A powerful desktop app for creating responsive websites using the Bootstrap framework.", supports: "Bootstrap 4" }, { name: "Form Builder", link: "https://bootsnipp.com/forms", description: "A drag-and-drop Bootstrap form builder by Bootsnipp.", supports: "Bootstrap 2, Bootstrap 3" }, { name: "Button Builder", link: "http://www.bootply.com/", description: "A simple Bootstrap button builder by Bootsnipp.", supports: "Bootstrap 3" }, { name: "Jetstrap", link: "https://jetstrap.com/", description: "Not just a mock-up tool, Jetstrap is the premier interface-building tool for Bootstrap 3.", supports: "Bootstrap 3" }, { name: "BootSwatchr", link: "http://bootswatchr.com/", description: "ThemeRoller for Bootstrap.", supports: "Bootstrap 3" }, { name: "PaintStrap", link: "http://paintstrap.com/", description: "Generate beautiful Bootstrap themes using the Adobe kuler / COLOURlovers color scheme.", supports: "Bootstrap 3" }, { name: "1pxdeep", link: "http://rriepe.github.io/1pxdeep/", description: "Flat(ish) Bootstrap 3 theme generator.", supports: "Bootstrap 3" }] }, { heading: "Other Tools", subHeading: "Helpful tools for developers to use while creating with Bootstrap.", resources: [{ name: "Bootstrap CDN", link: "http://www.bootstrapcdn.com/", description: "The recommended CDN for Bootstrap, Font Awesome, and Bootswatch", supports: "Bootstrap 2, Bootstrap 3, Bootstrap 4" }, { name: "Bootstrap Loader", link: "https://github.com/shakacode/bootstrap-loader", description: "Load Bootstrap styles and scripts in your Webpack bundle", supports: "Bootstrap 3, Bootstrap 4" }, { name: "Bootstrap 4 CheatSheet", link: "https://www.creative-tim.com/bootstrap-cheat-sheet/", description: "A cheat sheet for Bootstrap 4 components", supports: "Bootstrap 4" }, { name: "Pug Bootstrap", link: "http://rajasegar.github.io/PUG-Bootstrap/", description: "The power of Bootstrap combined with the speed of Pug for faster and easier web development.", supports: "Bootstrap 3" }, { name: "Bootsnipp", link: "http://bootsnipp.com", description: "Design elements, playground, and code snippets for the Bootstrap HTML/CSS/JS framework.", supports: "Bootstrap 3, Bootstrap 4" }, { name: "CodexUI", link: "https://codexui.com/", description: "Vanilla Bootstrap 4 components that require no extra CSS or Javascript to use.", supports: "Bootstrap 4" }, { name: "Bootstrap Accessibility Plugin", link: "https://github.com/paypal/bootstrap-accessibility-plugin", description: "Accessibility Plugin for Bootstrap 3 and Bootstrap 3 as SubModule.", supports: "Bootstrap 3" }, { name: "Tablestrap", link: "http://tablestrap.com/", description: "A Bootstrap table generator.", supports: "Bootstrap 3" }, { name: "Lavish", link: "http://www.lavishbootstrap.com/", description: "Generate your own Bootstrap color scheme from an image and customize to your taste.", supports: "Bootstrap 3" }, { name: "Bootcoding", link: "http://www.bootcoding.com/", description: "Create your own or modifiy existing bootstrap code snippets by playing with HTML, CSS and JS.", supports: "Bootstrap 3" }] }] }, { title: "Bootstrap Plugins", titleSeparator: !0, subSections: [{ heading: "Form Plugins", resources: [{ name: "Bootstrap Datepicker", link: "https://uxsolutions.github.io/bootstrap-datepicker/", description: "A datepicker for Bootstrap.", supports: "Bootstrap 2, Bootstrap 3" }, { name: "Angular Bootstrap Colorpicker", link: "https://codepen.io/buberdds/full/fBAsr", description: "No jQuery dependendencies, just an AngularJS directive based on the bootstrap-colorpicker jQuery library.", supports: "Bootstrap 3" }, { name: "Bootstrap Colorpicker", link: "https://farbelous.github.io/bootstrap-colorpicker/", description: "Simple and customizable colorpicker component for Bootstrap.", supports: "Bootstrap 3" }, { name: "React Bootstrap Datepicker", link: "http://pushtell.github.io/react-bootstrap-date-picker/", description: "React-Bootstrap based date picker.", supports: "Bootstrap 3" }, { name: "jQuery File Upload", link: "https://blueimp.github.io/jQuery-File-Upload/", description: "File upload widget with multiple file selection, drag & drop support, progress bars, validation and preview images, audio and video for jQuery.", supports: "Bootstrap 3" }, { name: "Bootstrap 3 Datepicker", link: "http://eonasdan.github.io/bootstrap-datetimepicker/", description: "Date/time picker widget based on Bootstrap.", supports: "Bootstrap 3" }, { name: "Bootstrap Select", link: "http://silviomoreto.github.io/bootstrap-select/", description: "Bootstrap-select is a jQuery plugin that utilizes Bootstrap's dropdown.js to style and bring additional functionality to standard select elements.", supports: "Bootstrap 3" }, { name: "Bootstrap Date Range Picker", link: "http://www.daterangepicker.com/", description: "Date range picker component for Bootstrap.", supports: "Bootstrap 3" }, { name: "jqBootstrapValidation", link: "http://reactiveraven.github.io/jqBootstrapValidation/", description: "A jQuery validation plugin for bootstrap forms.", supports: "Bootstrap 2, Bootstrap 3" }, { name: "FormValidation", link: "http://formvalidation.io/", description: "Plugin to validate Bootstrap forms", supports: "Bootstrap 3, Bootstrap 4" }, { name: "Bootstrap Combobox", link: "https://github.com/danielfarrell/bootstrap-combobox", description: "A combobox plugin that works with Bootstrap.", supports: "Bootstrap 2, Bootstrap 3" }, { name: "Bootstrap Floating Labels", link: "http://headdetect.github.io/bootstrap-floating-labels", description: "UX friendly floating form labels for Bootstrap 3", supports: "Bootstrap 3" }, { name: "Bootstrap Float Label", link: "https://github.com/wgarrido/bootstrap-float-label", description: "Floating labels with animation for Bootstrap", supports: "Bootstrap 3" }, { name: "Bootstrap Show Password", link: "http://wenzhixin.net.cn/p/bootstrap-show-password", description: "A simple, yet intuitive Bootstrap form plugin for giving users the option to see their password.", supports: "Bootstrap 2, Bootstrap 3" }, { name: "Tokenfield for Bootstrap", link: "http://sliptree.github.io/bootstrap-tokenfield/", description: "Advanced tagging/tokenizing plugin for jQuery and Bootstrap with a focus on keyboard and copy-paste support.", supports: "Bootstrap 3" }, { name: "Bootstrap Multiselect", link: "http://davidstutz.github.io/bootstrap-multiselect/", description: "A jQuery multiselect plugin based on Bootstrap.", supports: "Bootstrap 3" }, { name: "Bootstrap Select Dropdown", link: "https://thompsonsj.com/bootstrap-select-dropdown/", description: "A jQuery plugin for Bootstrap 4 that converts select and multiselect elements to dropdowns.", supports: "Bootstrap 4" }, { name: "Bootstrap Toggle", link: "http://www.bootstraptoggle.com/", description: "Bootstrap Toggle is a highly flexible Bootstrap plugin that converts checkboxes into toggles", supports: "Bootstrap 3" }, { name: "Datepicker for Bootstrap", link: "http://www.eyecon.ro/bootstrap-datepicker/", description: "A plugin to add a datepicker to field or to any other element in Bootstrap.", supports: "Bootstrap 3" }, { name: "Bootstrap MaxLength", link: "http://mimo84.github.io/bootstrap-maxlength/", description: "A visual feedback indicator for the maxlength attribute.", supports: "Bootstrap 3" }, { name: "Bootstrap Iconpicker", link: "http://victor-valencia.github.io/bootstrap-iconpicker", description: "A simple Bootstrap 3 based icon picker. Allows a user to pick an icon from a dropdown menu.", supports: "Bootstrap 3" }, { name: "Bootstrap Tags", link: "http://maxwells.github.io/bootstrap-tags.html", description: "A jQuery plugin meant to extend Bootstrap to include tagging functionality.", supports: "Bootstrap 3" }, { name: "Bootstrap Tag Autocomplete", link: "http://sandglaz.github.io/bootstrap-tagautocomplete/", description: "An @mention autocomplete plugin similar to the functionality seen on Facebook or Twitter.", supports: "Bootstrap 2" }, { name: "Bootcomplete.js", link: "http://getwebhelp.com/bootcomplete/", description: "Lightweight AJAX autocomplete alternitive for Bootstrap 3", supports: "Bootstrap 3" }, { name: "jQuery MiniColors", link: "https://labs.abeautifulsite.net/jquery-minicolors/", description: "A tiny color picker built on jQuery with Bootstrap 3 support.", supports: "Bootstrap 3" }, { name: "Color Palette for Bootstrap", link: "http://extremefe.github.io/bootstrap-colorpalette/", description: "A color palette dropdown plugin for Bootstrap.", supports: "Bootstrap 2, Bootstrap 3" }, { name: "Bootstrap Slider", link: "http://seiyria.com/bootstrap-slider/", description: "A Bootstrap slider component.", supports: "Bootstrap 3" }, { name: "Bootstrap Year Calendar", link: "http://www.bootstrap-year-calendar.com/", description: "A fully customizable year calendar widget for Bootstrap.", supports: "Bootstrap 3" }, { name: "jQuery Spinner", link: "https://vsn4ik.github.io/jquery.spinner/", description: "A number-spinner based-on jQuery, supports keyboard operations and continuous changing.", supports: "Bootstrap 3" }] }, { heading: "Table Plugins", resources: [{ name: "Bootstrap Table", link: "http://bootstrap-table.wenzhixin.net.cn/", description: "An extended Bootstrap table with radio, checkbox, sort, pagination, and other added features.", supports: "Bootstrap 2, Bootstrap 3" }, { name: "DataTables for Bootstrap", link: "https://datatables.net/examples/styling/bootstrap4.html", description: "A extension of the DataTables jQuery plugin that integrates seamlessly with the Bootstrap 3 and 4 UI.", supports: "Bootstrap 3, Bootstrap 4" }, { name: "WATable", link: "http://wootapa-watable.appspot.com/", description: "Filter, format, paginate and sort your data with ease and lightning speed", supports: "Bootstrap 3" }] }, { heading: "Menu & Navigation Plugins", resources: [{ name: "Bootstrap Navbar Dropdowns", link: "http://fontenele.github.io/bootstrap-navbar-dropdowns/", description: "Bootstrap 4 Navbar with multiple dropdowns.", supports: "Bootstrap 4" }, { name: "Bootstrap Tree View", link: "http://jonmiles.github.io/bootstrap-treeview/", description: "Tree View for Bootstrap", supports: "Bootstrap 3" }, { name: "Bootstrap Context Menu", link: "https://dgoguerra.github.io/bootstrap-menu/", description: "A context menu plugin using Bootstrap's dropdown component.", supports: "Bootstrap 3" }, { name: "Bootpag", link: "http://botmonster.com/jquery-bootpag/", description: "A dynamic pagination jQuery plugin that works well with Bootstrap.", supports: "Bootstrap 3" }, { name: "Bootstrap Submenu", link: "https://vsn4ik.github.io/bootstrap-submenu/", description: "Extense the Bootstrap dropdown to add support for submenus.", supports: "Bootstrap 3" }, { name: "Bootstrap Dropmenu", link: "https://skywalkapps.github.io/bootstrap-dropmenu/", description: "Dropmenu is a set of extensions, which enhances Bootstrap dropdown component.", supports: "Bootstrap 3" }, { name: "Hierarchy Select", link: "https://neofusion.github.io/hierarchy-select/", description: "Dropmenu menus with live search and hierarchy.", supports: "Bootstrap 3" }] }, { heading: "Notification Plugins", resources: [{ name: "SweetAlert for Bootstrap", link: "https://lipis.github.io/bootstrap-sweetalert/", description: 'A beautiful replacement for JavaScript\'s "alert".', supports: "Bootstrap 3" }, { name: "Bootstrap Confirmation", link: "http://bootstrap-confirmation.js.org/", description: "Bootstrap plugin for on-place confirm boxes using Popover", supports: "Bootstrap 3" }, { name: "Bootstrap Tour", link: "http://bootstraptour.com/", description: "The easiest way to show people how to use your website.", supports: "Bootstrap 3" }, { name: "PNotify", link: "http://sciactive.github.io/pnotify/", description: "Beautiful JavaScript notifications.", supports: "Bootstrap 3" }, { name: "jQuery Growl", link: "http://projects.zoulcreations.com/jquery/jquery-growl/", description: "A growl notifications plugin that works out of the box with the Bootstrap 3 framework.", supports: "Bootstrap 3" }, { name: "Bootstrap Growl", link: "https://github.com/ifightcrime/bootstrap-growl/", description: 'A pretty simple jQuery plugin that turns standard Bootstrap alerts into "growl-like" notifications.', supports: "Bootstrap 3" }, { name: "Bootstrap Notify", link: "http://bootstrap-notify.remabledesigns.com/", description: 'Turn standard Bootstrap alerts into "growl" like notifications.', supports: "Bootstrap 3" }, { name: "Bootstrap Notifications", link: "https://skywalkapps.github.io/bootstrap-notifications/", description: "This component comes very handy when you want to quickly implement UI for notifications in your app.", supports: "Bootstrap 3" }] }, { heading: "Modal Plugins", resources: [{ name: "Bootbox.js", link: "http://bootboxjs.com/", description: "Bootstrap modals made easy.", supports: "Bootstrap 3" }, { name: "Bootstrap Lightbox", link: "https://jbutz.github.io/bootstrap-lightbox/", description: "A simple lightbox plugin based on the bootstrap modal plugin.", supports: "Bootstrap 2" }, { name: "Flippant.js", link: "http://labs.mintchaos.com/flippant.js/", description: "A mini js+css library for flipping things over.", supports: "Bootstrap 2" }] }, { heading: "Button Plugins", resources: [{ name: "Social Buttons for Bootstrap", link: "https://lipis.github.io/bootstrap-social/", description: "Social Sign-In Buttons made in pure CSS based on Bootstrap and Font Awesome!", supports: "Bootstrap 3" }, { name: "Ladda UI for Bootstrap 3", link: "http://msurguy.github.io/ladda-bootstrap/", description: "Great effect that puts the spinner directly inside a button to give your users immediate feedback after a click or form submit.", supports: "Bootstrap 3" }, { name: "Bootstrap Checkbox", link: "https://vsn4ik.github.io/bootstrap-checkbox/", description: "A checkbox component based on Bootstrap buttons.", supports: "Bootstrap 3" }] }, { heading: "Other Plugins", resources: [{ name: "Summernote", link: "https://summernote.org/", description: "Super Simple WYSIWYG Editor on Bootstrap.", supports: "Bootstrap 3" }, { name: "Bootstrap WYSIWYG", link: "http://mindmup.github.io/bootstrap-wysiwyg/", description: "A tiny wysiwyg rich text editor for Bootstrap.", supports: "Bootstrap 2" }, { name: "Bootstrap Markdown", link: "http://www.codingdrama.com/bootstrap-markdown/", description: "Markdown editing meet Bootstrap.", supports: "Bootstrap 3" }, { name: "Bootstrap Milestones", link: "http://jablon.me/bootstrap-milestones/", description: "A Bootstrap plugin to create milestone lists.", supports: "Bootstrap 3" }, { name: "Bootstrap Responsive Timeline", link: "http://sanex3339.github.io/bootstrap-responsive-timeline/", description: "A CSS based Bootstrap timeline.", supports: "Bootstrap 3" }, { name: "Activity Feed for Bootstrap", link: "https://skywalkapps.github.io/bootstrap-activity-feed/", description: "Activity Feed displays user posts in Facebook-like style.", supports: "Bootstrap 3" }] }] }];
            var Pe = o("/5Qy");
            const ve = function(e) { return { active: e } };

            function ye(e, t) {
                if (1 & e) {
                    const e = p.Qb();
                    p.Pb(0, "li", 3), p.Pb(1, "a", 4), p.Zb("click", function() { p.vc(e); const o = t.$implicit; return p.dc(4).menuItemSelected(o.title) }), p.Fc(2), p.Ob(), p.Ob()
                }
                if (2 & e) {
                    const e = t.$implicit,
                        o = p.dc(3).ngIf,
                        i = p.dc();
                    p.xb(1), p.lc("ngClass", p.pc(2, ve, (null == o[1] ? null : o[1].identifier) === i.paramCase(e.title))), p.xb(1), p.Gc(e.title)
                }
            }

            function Oe(e, t) {
                if (1 & e && (p.Pb(0, "ul", 6), p.Dc(1, ye, 3, 4, "li", 2), p.Ob()), 2 & e) {
                    const e = p.dc().$implicit;
                    p.xb(1), p.lc("ngForOf", e.children)
                }
            }

            function we(e, t) {
                if (1 & e) {
                    const e = p.Qb();
                    p.Pb(0, "li", 3), p.Pb(1, "a", 4), p.Zb("click", function() { p.vc(e); const o = t.$implicit; return p.dc(2).menuItemSelected(o.title) }), p.Fc(2), p.Ob(), p.Dc(3, Oe, 2, 1, "ul", 5), p.Ob()
                }
                if (2 & e) {
                    const e = t.$implicit,
                        o = p.dc().ngIf,
                        i = p.dc();
                    p.xb(1), p.lc("ngClass", p.pc(3, ve, (null == o[0] ? null : o[0].identifier) === i.paramCase(e.title))), p.xb(1), p.Gc(e.title), p.xb(1), p.lc("ngIf", e.children)
                }
            }

            function Fe(e, t) {
                if (1 & e && (p.Nb(0), p.Pb(1, "ul", 1), p.Dc(2, we, 4, 5, "li", 2), p.Ob(), p.Mb()), 2 & e) {
                    const e = p.dc();
                    p.xb(2), p.lc("ngForOf", e.sideNavItems)
                }
            }
            let xe = (() => {
                class e {
                    constructor(e, t, o, i) { this.scrollSpyService = e, this.router = t, this.route = o, this.utilityService = i, this.subscription = new F.a, this.sideNavItems = [{ title: "Official Bootstrap Resources" }, { title: "Bootstrap Templates & Themes", children: [{ title: "Premium Marketplaces" }, { title: "Premium Vendors" }, { title: "Free Templates & Themes" }, { title: "Bootstrap Showcases" }] }, { title: "Bootstrap Integrations", children: [{ title: "Javascript" }, { title: "Wordpress" }] }, { title: "Bootstrap Development Tools", children: [{ title: "Visual Builders" }, { title: "Other Tools" }] }, { title: "Bootstrap Plugins", children: [{ title: "Form Plugins" }, { title: "Table Plugins" }, { title: "Menu & Navigation Plugins" }, { title: "Notification Plugins" }, { title: "Modal Plugins" }, { title: "Button Plugins" }, { title: "Other Plugins" }] }], this.rescroll = !1 }
                    ngOnInit() { this.scrollSpyService.reset() }
                    ngAfterViewInit() { this.subscription.add(this.route.fragment.subscribe(e => { e && setTimeout(() => { this.scrollToElement(e) }, 100) })) }
                    scrollToElement(e) {
                        const t = this.utilityService.window.document.getElementById(e);
                        if (!t) throw new Error("FRAGMENT_NOT_FOUND");
                        const o = t.getBoundingClientRect().top;
                        let i = 0;
                        i = this.utilityService.window.innerWidth < 992 ? this.utilityService.window.pageYOffset - 95 : this.utilityService.window.pageYOffset - 92, this.utilityService.window.scrollTo({ top: o + i, behavior: "smooth" }), this.rescroll = !this.rescroll, this.rescroll && (console.log("RESCROLLING"), setTimeout(() => { this.scrollToElement(e) }, 100))
                    }
                    ngOnDestroy() { this.subscription.unsubscribe() }
                    paramCase(e) { return e ? Object(Pe.a)(e) : "NO_IDENTIFIER" }
                    menuItemSelected(e) { this.router.navigate([], { relativeTo: this.route, fragment: Object(Pe.a)(e) }) }
                }
                return e.\u0275fac = function(t) { return new(t || e)(p.Jb(h.p), p.Jb(i.d), p.Jb(i.a), p.Jb(h.s)) }, e.\u0275cmp = p.Db({
                    type: e,
                    selectors: [
                        ["sbw-bootstrap-resources-side-nav"]
                    ],
                    decls: 2,
                    vars: 3,
                    consts: [
                        [4, "ngIf"],
                        [1, "resources-sidebar", "nav", "flex-column", "sticky-top", "mb-4"],
                        ["class", "nav-item", 4, "ngFor", "ngForOf"],
                        [1, "nav-item"],
                        [1, "nav-link", "pointer", 3, "ngClass", "click"],
                        ["class", "nav flex-column ml-3", 4, "ngIf"],
                        [1, "nav", "flex-column", "ml-3"]
                    ],
                    template: function(e, t) { 1 & e && (p.Dc(0, Fe, 3, 1, "ng-container", 0), p.ec(1, "async")), 2 & e && p.lc("ngIf", p.fc(1, 1, t.scrollSpyService.activeScrollSpyNavItems$)) },
                    directives: [r.q, r.p, r.o],
                    pipes: [r.b],
                    styles: [".resources-sidebar[_ngcontent-%COMP%]{top:calc(93px + 1rem)}.resources-sidebar[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]{margin:.25rem 0;padding:0 .5rem;color:#363d47;border-left:2px solid transparent;font-size:.85rem}.resources-sidebar[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%]{color:#3A871F;border-left:2px solid #3A871F;font-weight:700}.resources-sidebar[_ngcontent-%COMP%] > li.nav-item[_ngcontent-%COMP%] > .nav[_ngcontent-%COMP%]{display:none}.resources-sidebar[_ngcontent-%COMP%] > li.nav-item[_ngcontent-%COMP%] > a.nav-link.active[_ngcontent-%COMP%] ~ .nav[_ngcontent-%COMP%]{display:flex}.table-striped[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-of-type(odd){background-color:#f2f6fc}"],
                    changeDetection: 0
                }), e
            })();
            var ke = o("/75N");

            function Se(e, t) {
                if (1 & e && (p.Pb(0, "h2", 5), p.Fc(1), p.Ob()), 2 & e) {
                    const e = p.dc();
                    p.xb(1), p.Gc(e.bootstrapResourcesSection.title)
                }
            }

            function Be(e, t) {
                if (1 & e && (p.Pb(0, "p", 6), p.Fc(1), p.Ob()), 2 & e) {
                    const e = p.dc();
                    p.xb(1), p.Gc(e.bootstrapResourcesSection.subTitle)
                }
            }

            function De(e, t) { 1 & e && p.Kb(0, "hr") }

            function Ie(e, t) {
                if (1 & e && (p.Pb(0, "h3", 5), p.Fc(1), p.Ob()), 2 & e) {
                    const e = p.dc().$implicit;
                    p.xb(1), p.Gc(e.heading)
                }
            }

            function Te(e, t) {
                if (1 & e && (p.Pb(0, "p", 6), p.Fc(1), p.Ob()), 2 & e) {
                    const e = p.dc().$implicit;
                    p.xb(1), p.Gc(e.subHeading)
                }
            }

            function Ce(e, t) {
                if (1 & e && (p.Nb(0), p.Pb(1, "div", 14), p.Fc(2), p.Ob(), p.Mb()), 2 & e) {
                    const e = t.$implicit;
                    p.xb(2), p.Gc(e.trim())
                }
            }

            function Le(e, t) {
                if (1 & e && (p.Pb(0, "div", 13), p.Dc(1, Ce, 3, 1, "ng-container", 4), p.Ob()), 2 & e) {
                    const e = p.dc().$implicit;
                    p.xb(1), p.lc("ngForOf", e.supports.split(","))
                }
            }

            function Ke(e, t) {
                if (1 & e && (p.Pb(0, "tr"), p.Pb(1, "td"), p.Pb(2, "a", 11), p.Fc(3), p.Ob(), p.Ob(), p.Pb(4, "td"), p.Fc(5), p.Dc(6, Le, 2, 1, "div", 12), p.Ob(), p.Ob()), 2 & e) {
                    const e = t.$implicit;
                    p.xb(2), p.lc("href", e.link, p.yc), p.xb(1), p.Gc(e.name), p.xb(2), p.Hc(" ", e.description, " "), p.xb(1), p.lc("ngIf", e.supports)
                }
            }
            const Me = function(e) { return { "mb-5": e } };

            function Ee(e, t) {
                if (1 & e && (p.Nb(0), p.Pb(1, "div", 7), p.Dc(2, Ie, 2, 1, "h3", 1), p.Dc(3, Te, 2, 1, "p", 2), p.Pb(4, "div", 8), p.Pb(5, "table", 9), p.Pb(6, "thead"), p.Pb(7, "tr"), p.Pb(8, "th", 10), p.Fc(9, "Name"), p.Ob(), p.Pb(10, "th"), p.Fc(11, "Description"), p.Ob(), p.Ob(), p.Ob(), p.Pb(12, "tbody"), p.Dc(13, Ke, 7, 4, "tr", 4), p.Ob(), p.Ob(), p.Ob(), p.Ob(), p.Mb()), 2 & e) {
                    const e = t.$implicit,
                        o = t.last,
                        i = p.dc();
                    p.xb(1), p.lc("sbwScrollSpy", i.paramCase(e.heading || i.bootstrapResourcesSection.title))("parentItemIdentifier", i.paramCase(i.bootstrapResourcesSection.title)), p.xb(1), p.lc("ngIf", e.heading), p.xb(1), p.lc("ngIf", e.subHeading), p.xb(1), p.lc("ngClass", p.pc(6, Me, o)), p.xb(9), p.lc("ngForOf", e.resources)
                }
            }
            let Ae = (() => {
                class e {
                    constructor() {}
                    ngOnInit() {}
                    paramCase(e) { return e ? Object(Pe.a)(e) : "NO_IDENTIFIER" }
                }
                return e.\u0275fac = function(t) { return new(t || e) }, e.\u0275cmp = p.Db({
                    type: e,
                    selectors: [
                        ["sbw-bootstrap-resources-section"]
                    ],
                    inputs: { bootstrapResourcesSection: "bootstrapResourcesSection" },
                    decls: 5,
                    vars: 5,
                    consts: [
                        ["level", "0", 1, "scroll-spy-container", 3, "sbwScrollSpy"],
                        ["class", "mb-0", 4, "ngIf"],
                        ["class", "lead mb-4", 4, "ngIf"],
                        [4, "ngIf"],
                        [4, "ngFor", "ngForOf"],
                        [1, "mb-0"],
                        [1, "lead", "mb-4"],
                        ["level", "1", 1, "scroll-spy-container", 3, "sbwScrollSpy", "parentItemIdentifier"],
                        [1, "table-responsive", 3, "ngClass"],
                        [1, "table", "table-bordered", "table-striped"],
                        [1, "resource-name"],
                        ["rel", "nofollow noreferrer", "target", "_blank", 3, "href"],
                        ["class", "mt-2", 4, "ngIf"],
                        [1, "mt-2"],
                        [1, "badge", "badge-secondary", "mr-2"]
                    ],
                    template: function(e, t) { 1 & e && (p.Pb(0, "div", 0), p.Dc(1, Se, 2, 1, "h2", 1), p.Dc(2, Be, 2, 1, "p", 2), p.Dc(3, De, 1, 0, "hr", 3), p.Dc(4, Ee, 14, 8, "ng-container", 4), p.Ob()), 2 & e && (p.lc("sbwScrollSpy", t.paramCase(t.bootstrapResourcesSection.title)), p.xb(1), p.lc("ngIf", t.bootstrapResourcesSection.title), p.xb(1), p.lc("ngIf", t.bootstrapResourcesSection.subTitle), p.xb(1), p.lc("ngIf", t.bootstrapResourcesSection.titleSeparator), p.xb(1), p.lc("ngForOf", t.bootstrapResourcesSection.subSections)) },
                    directives: [ke.a, r.q, r.p, r.o],
                    styles: [".scroll-spy-container[_ngcontent-%COMP%]{padding-top:12px}"],
                    changeDetection: 0
                }), e
            })();

            function Ne(e, t) {
                if (1 & e && (p.Nb(0), p.Kb(1, "sbw-bootstrap-resources-section", 14), p.Mb()), 2 & e) {
                    const e = t.$implicit;
                    p.xb(1), p.lc("bootstrapResourcesSection", e)
                }
            }
            let je = (() => {
                class e {
                    constructor() { this.bootstrapResourcesSections = fe }
                    ngOnInit() {}
                }
                return e.\u0275fac = function(t) { return new(t || e) }, e.\u0275cmp = p.Db({
                    type: e,
                    selectors: [
                        ["sbw-bootstrap-resources"]
                    ],
                    decls: 18,
                    vars: 1,
                    consts: [
                        ["headerClasses", "bg-primary page-header-dark", "borderType", "angled", "borderClasses", "text-white"],
                        [1, "page-header-content", "pb-4"],
                        [1, "container"],
                        [1, "row", "align-items-center"],
                        [1, "col-lg-8", "mb-4", "mb-lg-0"],
                        [1, "page-header-title"],
                        [1, "page-header-text", "mb-0"],
                        [1, "col-lg-4"],
                        ["sbwCarbon", "", 1, "carbon-container"],
                        ["sectionClasses", "pt-10 pb-5 bg-white", "borderType", "angled", "borderClasses", "text-light"],
                        [1, "row"],
                        [1, "col-lg-3"],
                        [1, "col-lg-9"],
                        [4, "ngFor", "ngForOf"],
                        [3, "bootstrapResourcesSection"]
                    ],
                    template: function(e, t) { 1 & e && (p.Pb(0, "sbpro-page-header", 0), p.Pb(1, "div", 1), p.Pb(2, "div", 2), p.Pb(3, "div", 3), p.Pb(4, "div", 4), p.Pb(5, "h1", 5), p.Fc(6, "Bootstrap Resources"), p.Ob(), p.Pb(7, "p", 6), p.Fc(8, "A curated list of quality Bootstrap resources and Bootstrap plugins maintained by Start Bootstrap."), p.Ob(), p.Ob(), p.Pb(9, "div", 7), p.Kb(10, "div", 8), p.Ob(), p.Ob(), p.Ob(), p.Ob(), p.Ob(), p.Pb(11, "sbpro-page-section", 9), p.Pb(12, "div", 2), p.Pb(13, "div", 10), p.Pb(14, "div", 11), p.Kb(15, "sbw-bootstrap-resources-side-nav"), p.Ob(), p.Pb(16, "div", 12), p.Dc(17, Ne, 2, 1, "ng-container", 13), p.Ob(), p.Ob(), p.Ob(), p.Ob()), 2 & e && (p.xb(17), p.lc("ngForOf", t.bootstrapResourcesSections)) },
                    directives: [v.a, y.a, O.a, xe, r.p, Ae],
                    styles: [""],
                    changeDetection: 0
                }), e
            })();
            var Re = o("2iHv");

            function Ue(e, t) { 1 & e && (p.Pb(0, "div", 29), p.Fc(1, "Team Size required."), p.Ob()) }

            function qe(e, t) { 1 & e && (p.Pb(0, "div", 29), p.Fc(1, "Project Budget required."), p.Ob()) }

            function Ge(e, t) { 1 & e && (p.Pb(0, "div", 29), p.Fc(1, "Contact Email required."), p.Ob()) }

            function He(e, t) { 1 & e && (p.Pb(0, "div", 29), p.Fc(1, "Email is not valid."), p.Ob()) }

            function _e(e, t) { 1 & e && (p.Pb(0, "div", 29), p.Fc(1, "Project Timeline required."), p.Ob()) }

            function Ve(e, t) { 1 & e && (p.Pb(0, "div", 29), p.Fc(1, "Please tell us a little bit about the project."), p.Ob()) }

            function Je(e, t) {
                if (1 & e) {
                    const e = p.Qb();
                    p.Pb(0, "div", 11), p.Pb(1, "div", 12), p.Pb(2, "p", 13), p.Fc(3, "We provide a whitelabeled, single or multi-tenant platform that takes you from zero to deployment in a fraction of the time it would take a build out a fully functional web application from scratch."), p.Ob(), p.Pb(4, "p", 14), p.Fc(5, "We utilize our own pro products along with our proprietary platform to deliver powerful applications in record time. Please fill out the form below with information about your project and we will get back to you as soon as possible."), p.Ob(), p.Pb(6, "form", 15), p.Zb("ngSubmit", function() { return p.vc(e), p.dc().submitCustomDevelopment() }), p.Pb(7, "h2", 16), p.Fc(8, "Tell us about your project..."), p.Ob(), p.Pb(9, "div", 17), p.Pb(10, "div", 18), p.Pb(11, "div", 19), p.Kb(12, "input", 20), p.Dc(13, Ue, 2, 0, "div", 21), p.Ob(), p.Pb(14, "div", 19), p.Pb(15, "select", 22), p.Pb(16, "option", 23), p.Fc(17, "Project Budget"), p.Ob(), p.Pb(18, "option"), p.Fc(19, "Less than $50,000"), p.Ob(), p.Pb(20, "option"), p.Fc(21, "$50,000 - $250,000"), p.Ob(), p.Pb(22, "option"), p.Fc(23, "$250,000 - $1,000,000"), p.Ob(), p.Pb(24, "option"), p.Fc(25, "Over $1,000,000"), p.Ob(), p.Ob(), p.Dc(26, qe, 2, 0, "div", 21), p.Ob(), p.Ob(), p.Ob(), p.Pb(27, "div", 17), p.Pb(28, "div", 18), p.Pb(29, "div", 19), p.Kb(30, "input", 24), p.Dc(31, Ge, 2, 0, "div", 21), p.Dc(32, He, 2, 0, "div", 21), p.Ob(), p.Pb(33, "div", 19), p.Pb(34, "select", 25), p.Pb(35, "option", 23), p.Fc(36, "Project Timeline"), p.Ob(), p.Pb(37, "option"), p.Fc(38, "3 Months"), p.Ob(), p.Pb(39, "option"), p.Fc(40, "6 Months"), p.Ob(), p.Pb(41, "option"), p.Fc(42, "9 Months"), p.Ob(), p.Pb(43, "option"), p.Fc(44, "1 Year"), p.Ob(), p.Pb(45, "option"), p.Fc(46, "2 Years +"), p.Ob(), p.Ob(), p.Dc(47, _e, 2, 0, "div", 21), p.Ob(), p.Ob(), p.Ob(), p.Pb(48, "div", 17), p.Kb(49, "textarea", 26), p.Dc(50, Ve, 2, 0, "div", 21), p.Ob(), p.Pb(51, "div", 17), p.Pb(52, "button", 27), p.Fc(53, "Submit"), p.Ob(), p.Ob(), p.Pb(54, "p", 28), p.Fc(55, "Note: Project budget estimates are in USD. If you are a startup, we will consider non-dilutive equity."), p.Ob(), p.Ob(), p.Ob(), p.Ob()
                }
                if (2 & e) {
                    const e = p.dc();
                    p.xb(6), p.lc("formGroup", e.customDevelopmentForm), p.xb(6), p.Bb("is-invalid", e.teamSizeControlInvalid), p.xb(1), p.lc("ngIf", e.teamSizeControl.hasError("required")), p.xb(2), p.Bb("is-invalid", e.projectBudgetControlInvalid), p.xb(11), p.lc("ngIf", e.projectBudgetControl.hasError("notDefault")), p.xb(4), p.Bb("is-invalid", e.contactEmailControlInvalid), p.xb(1), p.lc("ngIf", e.contactEmailControl.hasError("required")), p.xb(1), p.lc("ngIf", e.contactEmailControl.hasError("email")), p.xb(2), p.Bb("is-invalid", e.projectTimelineControlInvalid), p.xb(13), p.lc("ngIf", e.projectTimelineControl.hasError("notDefault")), p.xb(2), p.Bb("is-invalid", e.detailsControlInvalid), p.xb(1), p.lc("ngIf", e.detailsControl.hasError("required")), p.xb(2), p.lc("disabled", e.customDevelopmentForm.invalid)
                }
            }

            function We(e, t) { 1 & e && (p.Pb(0, "div", 11), p.Pb(1, "div", 12), p.Pb(2, "div", 30), p.Pb(3, "div", 31), p.Kb(4, "img", 32), p.Pb(5, "div", 33), p.Fc(6, "Message Sent!"), p.Ob(), p.Pb(7, "div", 34), p.Fc(8, "Thank you for your inquiry. We will get back to you as soon as possible."), p.Ob(), p.Ob(), p.Ob(), p.Ob(), p.Ob()) }
            let Xe = (() => {
                class e {
                    constructor(e, t, o, i) { this.fb = e, this.overlayService = t, this.generalService = o, this.changeDetectorRef = i, this.customDevelopmentForm = this.fb.group({ teamSize: ["", [n.s.required]], projectBudget: ["Project Budget", [n.s.required, this.notDefault("Project Budget")]], contactEmail: ["", [n.s.required, n.s.email]], projectTimeline: ["Project Timeline", [n.s.required, this.notDefault("Project Timeline")]], details: ["", [n.s.required]] }), this.formSubmitted = !1 }
                    ngOnInit() {}
                    submitCustomDevelopment() { this.overlayService.show(Re.b.text, "One sec, while we relay the message..."), this.generalService.submitCustomDevelopment$(this.customDevelopmentForm.value).subscribe(() => { this.overlayService.hide(), this.formSubmitted = !0, this.changeDetectorRef.detectChanges() }) }
                    notDefault(e) { return t => e === t.value ? { notDefault: { value: t.value } } : null }
                    get teamSizeControl() { return this.customDevelopmentForm.get("teamSize") }
                    get teamSizeControlValid() { return this.teamSizeControl.touched && !this.teamSizeControlInvalid }
                    get teamSizeControlInvalid() { return this.teamSizeControl.touched && this.teamSizeControl.hasError("required") }
                    get projectBudgetControl() { return this.customDevelopmentForm.get("projectBudget") }
                    get projectBudgetControlValid() { return this.projectBudgetControl.touched && !this.projectBudgetControlInvalid }
                    get projectBudgetControlInvalid() { return this.projectBudgetControl.touched && (this.projectBudgetControl.hasError("required") || this.projectBudgetControl.hasError("notDefault")) }
                    get contactEmailControl() { return this.customDevelopmentForm.get("contactEmail") }
                    get contactEmailControlValid() { return this.contactEmailControl.touched && !this.contactEmailControlInvalid }
                    get contactEmailControlInvalid() { return this.contactEmailControl.touched && (this.contactEmailControl.hasError("required") || this.contactEmailControl.hasError("email")) }
                    get projectTimelineControl() { return this.customDevelopmentForm.get("projectTimeline") }
                    get projectTimelineControlValid() { return this.projectTimelineControl.touched && !this.projectTimelineControlInvalid }
                    get projectTimelineControlInvalid() { return this.projectTimelineControl.touched && (this.projectTimelineControl.hasError("required") || this.projectTimelineControl.hasError("notDefault")) }
                    get detailsControl() { return this.customDevelopmentForm.get("details") }
                    get detailsControlValid() { return this.detailsControl.touched && !this.detailsControlInvalid }
                    get detailsControlInvalid() { return this.detailsControl.touched && this.detailsControl.hasError("required") }
                }
                return e.\u0275fac = function(t) { return new(t || e)(p.Jb(n.c), p.Jb(h.m), p.Jb(h.h), p.Jb(p.h)) }, e.\u0275cmp = p.Db({
                    type: e,
                    selectors: [
                        ["sbw-custom-development"]
                    ],
                    decls: 15,
                    vars: 2,
                    consts: [
                        ["headerClasses", "bg-light page-header-light", "borderType", "angled", "borderClasses", "text-white"],
                        [1, "page-header-content", "pb-4"],
                        [1, "container"],
                        [1, "row", "align-items-center"],
                        [1, "col-lg-8", "mb-4", "mb-lg-0"],
                        [1, "page-header-title"],
                        [1, "page-header-text", "mb-0"],
                        [1, "col-lg-4"],
                        ["sbwCarbon", "", 1, "carbon-container", "carbon-inverse"],
                        ["sectionClasses", "pt-10 pb-5 bg-white", "borderType", "angled", "borderClasses", "text-light"],
                        ["class", "row", 4, "ngIf"],
                        [1, "row"],
                        [1, "col-lg-8"],
                        [1, "lead"],
                        [1, "mb-5"],
                        [1, "mb-5", 3, "formGroup", "ngSubmit"],
                        [1, "mb-3"],
                        [1, "form-group"],
                        [1, "form-row"],
                        [1, "col"],
                        ["type", "text", "placeholder", "Team Size", "formControlName", "teamSize", 1, "form-control"],
                        ["class", "invalid-feedback", 4, "ngIf"],
                        ["formControlName", "projectBudget", 1, "form-control"],
                        ["selected", "", "disabled", ""],
                        ["type", "text", "placeholder", "Contact Email", "formControlName", "contactEmail", 1, "form-control"],
                        ["formControlName", "projectTimeline", 1, "form-control"],
                        ["rows", "9", "placeholder", "Share some details about your project...", "formControlName", "details", 1, "form-control"],
                        ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"],
                        [1, "small", "font-italic"],
                        [1, "invalid-feedback"],
                        [1, "card", "my-4"],
                        [1, "card-body", "p-5", "text-center"],
                        ["src", "assets/img/freepik/mailbox-pana.svg", "alt", "Message Submitted", 1, "img-fluid", "mb-4", 2, "width", "10rem"],
                        [1, "h3"],
                        [1, "font-italic"]
                    ],
                    template: function(e, t) { 1 & e && (p.Pb(0, "sbpro-page-header", 0), p.Pb(1, "div", 1), p.Pb(2, "div", 2), p.Pb(3, "div", 3), p.Pb(4, "div", 4), p.Pb(5, "h1", 5), p.Fc(6, "Custom Bootstrap Design & Development"), p.Ob(), p.Pb(7, "p", 6), p.Fc(8, "You can hire the Start Bootstrap team for custom development projects"), p.Ob(), p.Ob(), p.Pb(9, "div", 7), p.Kb(10, "div", 8), p.Ob(), p.Ob(), p.Ob(), p.Ob(), p.Ob(), p.Pb(11, "sbpro-page-section", 9), p.Pb(12, "div", 2), p.Dc(13, Je, 56, 18, "div", 10), p.Dc(14, We, 9, 0, "div", 10), p.Ob(), p.Ob()), 2 & e && (p.xb(13), p.lc("ngIf", !t.formSubmitted), p.xb(1), p.lc("ngIf", t.formSubmitted)) },
                    directives: [v.a, y.a, O.a, r.q, n.u, n.l, n.g, n.b, n.k, n.e, n.r, n.o, n.t],
                    styles: [""],
                    changeDetection: 0
                }), e
            })();
            var ze = o("ygrO"),
                Qe = o("1U9P"),
                $e = o("ZcrQ"),
                Ze = o("Qywx");

            function Ye(e, t) {
                if (1 & e && (p.Pb(0, "a", 39), p.Fc(1), p.Ob()), 2 & e) {
                    const e = t.$implicit;
                    p.xb(1), p.Gc(e)
                }
            }

            function et(e, t) {
                if (1 & e && (p.Kb(0, "img", 40), p.ec(1, "safe")), 2 & e) {
                    const e = p.dc(2);
                    p.lc("src", p.hc(1, 2, e.post.headerImage.medium || null, "resourceURL", "NONE"), p.yc)("alt", e.post.headerImage.alt)
                }
            }

            function tt(e, t) { 1 & e && p.Kb(0, "hr", 10) }

            function ot(e, t) { 1 & e && p.Kb(0, "span") }
            const it = function() { return ["fal", "arrow-circle-left"] };

            function rt(e, t) {
                if (1 & e && (p.Pb(0, "a", 45), p.Pb(1, "span", 46), p.Pb(2, "span", 47), p.Kb(3, "fa-icon", 48), p.Ob(), p.Pb(4, "span", 49), p.Pb(5, "div", 50), p.Fc(6, "Previous Guide"), p.Ob(), p.Fc(7), p.Ob(), p.Ob(), p.Ob()), 2 & e) {
                    const e = p.dc(3);
                    p.lc("routerLink", "/blog/" + e.previousGuide.slug), p.xb(3), p.lc("icon", p.oc(3, it)), p.xb(4), p.Hc(" ", e.previousGuide.heading, "")
                }
            }
            const nt = function() { return ["fal", "arrow-circle-right"] };

            function st(e, t) {
                if (1 & e && (p.Pb(0, "a", 51), p.Pb(1, "span", 46), p.Pb(2, "span", 49), p.Pb(3, "div", 50), p.Fc(4, "Next Guide"), p.Ob(), p.Fc(5), p.Ob(), p.Pb(6, "span", 47), p.Kb(7, "fa-icon", 48), p.Ob(), p.Ob(), p.Ob()), 2 & e) {
                    const e = p.dc(3);
                    p.lc("routerLink", "/blog/" + e.nextGuide.slug), p.xb(5), p.Hc(" ", e.nextGuide.heading, ""), p.xb(2), p.lc("icon", p.oc(3, nt))
                }
            }

            function ct(e, t) {
                if (1 & e && (p.Pb(0, "div", 41), p.Dc(1, ot, 1, 0, "span", 42), p.Dc(2, rt, 8, 4, "a", 43), p.Dc(3, st, 8, 4, "a", 44), p.Ob()), 2 & e) {
                    const e = p.dc(2);
                    p.xb(1), p.lc("ngIf", e.nextGuide), p.xb(1), p.lc("ngIf", e.previousGuide), p.xb(1), p.lc("ngIf", e.nextGuide)
                }
            }

            function at(e, t) {
                if (1 & e && (p.Kb(0, "img", 52), p.ec(1, "safe")), 2 & e) {
                    const e = p.dc(2);
                    p.lc("src", p.hc(1, 2, e.post.user.postMetaData.profileImage.medium || null, "resourceURL", "NONE"), p.yc)("alt", e.post.user.postMetaData.profileImage.alt)
                }
            }

            function bt(e, t) {
                if (1 & e && (p.Nb(0), p.Pb(1, "a", 53), p.Fc(2), p.Pb(3, "div", 54), p.Fc(4), p.ec(5, "date"), p.Ob(), p.Ob(), p.Mb()), 2 & e) {
                    const e = t.$implicit,
                        o = t.index;
                    p.xb(1), p.lc("routerLink", "/guides/" + e.slug), p.yb("data-cy", "recentGuideLink-" + o), p.xb(1), p.Hc("", e.heading, " "), p.xb(2), p.Gc(p.gc(5, 4, e.publishedDate, "longDate"))
                }
            }
            const lt = function() { return ["fad", "globe"] },
                dt = function() { return ["fab", "twitter"] },
                pt = function() { return ["fab", "github"] };

            function ut(e, t) {
                if (1 & e && (p.Pb(0, "div", 2), p.Pb(1, "div", 3), p.Pb(2, "div", 4), p.Pb(3, "article", 5), p.Pb(4, "header"), p.Pb(5, "h1"), p.Fc(6), p.Ob(), p.Pb(7, "p", 6), p.Fc(8), p.Ob(), p.Pb(9, "div", 7), p.Fc(10), p.ec(11, "date"), p.Pb(12, "a", 8), p.Fc(13), p.Ob(), p.Ob(), p.Dc(14, Ye, 2, 1, "a", 9), p.Kb(15, "hr", 10), p.Ob(), p.Dc(16, et, 2, 6, "img", 11), p.Kb(17, "sbw-markdown-html", 12), p.Ob(), p.Dc(18, tt, 1, 0, "hr", 13), p.Dc(19, ct, 4, 3, "div", 14), p.Kb(20, "hr", 10), p.Pb(21, "div", 15), p.Pb(22, "div", 16), p.Pb(23, "div", 17), p.Pb(24, "div", 18), p.Dc(25, at, 2, 6, "img", 19), p.Ob(), p.Pb(26, "div"), p.Pb(27, "h4"), p.Fc(28), p.Ob(), p.Pb(29, "p", 20), p.Fc(30), p.Ob(), p.Pb(31, "div", 21), p.Pb(32, "div", 22), p.Kb(33, "fa-icon", 23), p.Pb(34, "a", 24), p.Fc(35), p.Ob(), p.Ob(), p.Pb(36, "div", 22), p.Kb(37, "fa-icon", 25), p.Pb(38, "a", 26), p.Fc(39, "davidmillerskt"), p.Ob(), p.Ob(), p.Pb(40, "div"), p.Kb(41, "fa-icon", 27), p.Pb(42, "a", 28), p.Fc(43, "davidtmiller"), p.Ob(), p.Ob(), p.Ob(), p.Ob(), p.Ob(), p.Ob(), p.Ob(), p.Kb(44, "div", 29), p.Pb(45, "div", 30), p.Pb(46, "div", 16), p.Kb(47, "sbw-disqus"), p.Ob(), p.Ob(), p.Ob(), p.Pb(48, "div", 31), p.Kb(49, "div", 32), p.Pb(50, "aside"), p.Pb(51, "div", 33), p.Pb(52, "div", 34), p.Pb(53, "div", 35), p.Fc(54, "Recent Guides"), p.Ob(), p.Ob(), p.Pb(55, "div", 36), p.Dc(56, bt, 6, 7, "ng-container", 37), p.Ob(), p.Pb(57, "div", 16), p.Pb(58, "button", 38), p.Fc(59, "View All Guides"), p.Ob(), p.Ob(), p.Ob(), p.Ob(), p.Ob(), p.Ob(), p.Ob()), 2 & e) {
                    const e = p.dc();
                    p.xb(6), p.Gc(e.post.heading), p.xb(2), p.Gc(e.post.subHeading), p.xb(2), p.Hc("", p.gc(11, 20, e.post.publishedDate, "longDate"), " by "), p.xb(3), p.Ic("", e.post.user.firstName, " ", e.post.user.lastName, ""), p.xb(1), p.lc("ngForOf", e.post.tags), p.xb(2), p.lc("ngIf", e.post.headerImage.medium), p.xb(1), p.lc("md", e.post.body), p.xb(1), p.lc("ngIf", e.nextGuide || e.previousGuide), p.xb(1), p.lc("ngIf", e.nextGuide || e.previousGuide), p.xb(6), p.lc("ngIf", e.post.user.postMetaData.profileImage.medium), p.xb(3), p.Ic("", e.post.user.firstName, " ", e.post.user.lastName, ""), p.xb(2), p.Gc(e.post.user.postMetaData.bio), p.xb(3), p.lc("icon", p.oc(23, lt)), p.xb(1), p.lc("href", e.post.user.postMetaData.socialURLs.website.url, p.yc), p.xb(1), p.Gc(e.post.user.postMetaData.socialURLs.website.displayName), p.xb(2), p.lc("icon", p.oc(24, dt)), p.xb(4), p.lc("icon", p.oc(25, pt)), p.xb(15), p.lc("ngForOf", e.guidePreviewsRecent)
                }
            }
            let ht = (() => {
                class e {
                    constructor(e, t, o) { this.route = e, this.blogService = t, this.changeDetectorRef = o, this.subscription = new F.a }
                    ngOnInit() {
                        this.subscription.add(this.route.params.subscribe(e => {
                            if (!e.postSlug) throw new Error("postSlug not in params");
                            this.blogService.getPost$(e.postSlug).subscribe(e => { this.post = e, this.changeDetectorRef.detectChanges() }), this.blogService.getPreviousGuidePreview$(e.postSlug).subscribe(e => { this.previousGuide = e, this.changeDetectorRef.detectChanges() }), this.blogService.getNextGuidePreview$(e.postSlug).subscribe(e => { this.nextGuide = e, this.changeDetectorRef.detectChanges() })
                        })), this.subscription.add(this.blogService.guidePreviews$.subscribe(e => { this.guidePreviewsRecent = e.slice(0, 5), this.changeDetectorRef.detectChanges() }))
                    }
                    ngOnDestroy() { this.subscription.unsubscribe() }
                }
                return e.\u0275fac = function(t) { return new(t || e)(p.Jb(i.a), p.Jb(ze.a), p.Jb(p.h)) }, e.\u0275cmp = p.Db({
                    type: e,
                    selectors: [
                        ["sbw-guide"]
                    ],
                    decls: 2,
                    vars: 1,
                    consts: [
                        ["sectionClasses", "mt-page-header py-5", "borderType", "angled", "borderClasses", "text-light"],
                        ["class", "container", 4, "ngIf"],
                        [1, "container"],
                        [1, "row"],
                        [1, "col-lg-8"],
                        [1, "post"],
                        [1, "lead"],
                        [1, "small", "font-italic", "mb-2"],
                        ["href", "javascript:void(0);", 1, "text-dark"],
                        ["class", "badge badge-green-soft text-green text-capitalize mr-2", 4, "ngFor", "ngForOf"],
                        [1, "hr-lg"],
                        ["class", "img-fluid rounded mb-3", 3, "src", "alt", 4, "ngIf"],
                        [3, "md"],
                        ["class", "hr-lg", 4, "ngIf"],
                        ["class", "d-flex align-items-stretch justify-content-between", 4, "ngIf"],
                        [1, "card", "mb-4"],
                        [1, "card-body"],
                        [1, "d-flex", "flex-column", "flex-sm-row", "align-items-sm-center"],
                        [1, "mr-4", "mb-4", "mb-sm-0"],
                        ["class", "rounded-circle bg-gray-300", "style", "height: 5rem; width: 5rem", 3, "src", "alt", 4, "ngIf"],
                        [1, "small"],
                        [1, "d-flex", "flex-column", "flex-md-row", "align-items-md-center", "small"],
                        [1, "mr-3", "mb-3", "mb-md-0"],
                        [1, "text-primary", "mr-1", 3, "icon"],
                        [3, "href"],
                        [1, "text-twitter", "mr-1", 3, "icon"],
                        ["href", "https://twitter.com/davidmillerskt"],
                        [1, "text-github", "mr-1", 3, "icon"],
                        ["href", "javascript:void(0);"],
                        ["sbwNativeStandard", "", 1, "native-standard", "mb-4"],
                        [1, "card", "mb-4", "mb-lg-0"],
                        [1, "col-lg-4"],
                        ["sbwCarbon", "", 1, "carbon-inverse", "mb-4"],
                        [1, "card"],
                        [1, "card-header", "bg-green"],
                        [1, "small", "text-white", "font-weight-500"],
                        [1, "list-group", "list-group-flush", "small", "mb-0", "border-bottom"],
                        [4, "ngFor", "ngForOf"],
                        ["routerLink", "/guides", 1, "btn", "btn-green-soft", "text-green", "btn-block", "font-weight-500"],
                        [1, "badge", "badge-green-soft", "text-green", "text-capitalize", "mr-2"],
                        [1, "img-fluid", "rounded", "mb-3", 3, "src", "alt"],
                        [1, "d-flex", "align-items-stretch", "justify-content-between"],
                        [4, "ngIf"],
                        ["class", "btn btn-white border-0 rounded shadow post-pager-link p-0 prev", "data-cy", "previousGuideLink", 3, "routerLink", 4, "ngIf"],
                        ["class", "btn btn-white border-0 rounded shadow post-pager-link p-0 next", "data-cy", "nextGuideLink", 3, "routerLink", 4, "ngIf"],
                        ["data-cy", "previousGuideLink", 1, "btn", "btn-white", "border-0", "rounded", "shadow", "post-pager-link", "p-0", "prev", 3, "routerLink"],
                        [1, "d-flex", "h-100"],
                        [1, "bg-primary", "p-2", "d-flex", "align-items-center", "text-white"],
                        [3, "icon"],
                        [1, "p-3", "d-flex", "flex-column", "justify-content-center", "w-100"],
                        [1, "indicator", "mb-1", "text-uppercase"],
                        ["data-cy", "nextGuideLink", 1, "btn", "btn-white", "border-0", "rounded", "shadow", "post-pager-link", "p-0", "next", 3, "routerLink"],
                        [1, "rounded-circle", "bg-gray-300", 2, "height", "5rem", "width", "5rem", 3, "src", "alt"],
                        [1, "list-group-item", "list-group-item-action", 3, "routerLink"],
                        [1, "text-xs", "text-muted"]
                    ],
                    template: function(e, t) { 1 & e && (p.Pb(0, "sbpro-page-section", 0), p.Dc(1, ut, 60, 26, "div", 1), p.Ob()), 2 & e && (p.xb(1), p.lc("ngIf", t.post)) },
                    directives: [O.a, r.q, r.p, Qe.a, S.a, $e.a, Ze.a, y.a, i.e, i.f],
                    pipes: [r.f, oe.a],
                    styles: [""],
                    changeDetection: 0
                }), e
            })();
            var mt = o("itXk");

            function gt(e, t) {
                if (1 & e && (p.Pb(0, "a", 37), p.Fc(1), p.Ob()), 2 & e) {
                    const e = t.$implicit;
                    p.xb(1), p.Gc(e)
                }
            }
            const ft = function() { return ["far", "long-arrow-right"] };

            function Pt(e, t) {
                if (1 & e && (p.Pb(0, "div", 24), p.Pb(1, "div", 25), p.Pb(2, "div", 26), p.Pb(3, "div", 27), p.Kb(4, "img", 28), p.ec(5, "safe"), p.Ob(), p.Pb(6, "div"), p.Pb(7, "div", 29), p.Pb(8, "h2", 30), p.Pb(9, "a", 31), p.Fc(10), p.Ob(), p.Ob(), p.Pb(11, "div", 32), p.Fc(12), p.ec(13, "date"), p.Ob(), p.Pb(14, "div", 29), p.Dc(15, gt, 2, 1, "a", 33), p.Ob(), p.Ob(), p.Kb(16, "sbw-markdown-html", 34), p.Pb(17, "a", 35), p.Fc(18, "Read more"), p.Kb(19, "fa-icon", 36), p.Ob(), p.Ob(), p.Ob(), p.Ob(), p.Ob()), 2 & e) {
                    const e = t.$implicit,
                        o = t.index;
                    p.xb(4), p.lc("src", p.hc(5, 10, e.previewImage.medium, "resourceURL", "NONE"), p.yc)("alt", e.previewImage.alt), p.xb(5), p.lc("routerLink", "/guides/" + e.slug), p.xb(1), p.Gc(e.heading), p.xb(2), p.Gc(p.gc(13, 14, e.publishedDate, "longDate")), p.xb(3), p.lc("ngForOf", e.tags), p.xb(1), p.lc("md", e.body), p.xb(1), p.lc("routerLink", "/guides/" + e.slug), p.yb("data-cy", "readMoreButton-" + o), p.xb(2), p.lc("icon", p.oc(17, ft))
                }
            }

            function vt(e, t) {
                if (1 & e && (p.Pb(0, "div", 44), p.Fc(1), p.Ob()), 2 & e) {
                    const e = t.$implicit;
                    p.xb(1), p.Gc(e)
                }
            }

            function yt(e, t) {
                if (1 & e && (p.Nb(0), p.Pb(1, "a", 38), p.Pb(2, "div", 39), p.Dc(3, vt, 2, 1, "div", 40), p.Ob(), p.Pb(4, "div", 41), p.Fc(5), p.Ob(), p.Pb(6, "div", 42), p.Fc(7), p.Ob(), p.Pb(8, "div", 43), p.Fc(9), p.ec(10, "date"), p.Ob(), p.Ob(), p.Mb()), 2 & e) {
                    const e = t.$implicit;
                    p.xb(1), p.lc("routerLink", "/blog/" + e.slug), p.xb(2), p.lc("ngForOf", e.tags), p.xb(2), p.Gc(e.heading), p.xb(2), p.Gc(e.subHeading), p.xb(2), p.Gc(p.gc(10, 5, e.publishedDate, "longDate"))
                }
            }
            const Ot = function() { return ["fad", "books"] };
            let wt = (() => {
                class e {
                    constructor(e, t, o, i) { this.blogService = e, this.route = t, this.changeDetectorRef = o, this.router = i, this.subscription = new F.a, this.page = 1, this.pageSize = 5 }
                    ngOnInit() {
                        this.subscription.add(Object(mt.b)([this.blogService.guidePreviews$, this.route.queryParams]).subscribe(([e, t]) => {
                            this.guidePreviews = e, this.page = t.page ? t.page : 1;
                            const o = this.pageSize * (this.page - 1);
                            this.guidePreviewsFiltered = e.slice(o, o + this.pageSize), this.changeDetectorRef.detectChanges()
                        })), this.subscription.add(this.blogService.newsPreviews$.subscribe(e => { this.newsPreviews = e.slice(0, 2), this.changeDetectorRef.detectChanges() }))
                    }
                    ngOnDestroy() { this.subscription.unsubscribe() }
                    pageChange(e) { this.router.navigate([], { relativeTo: this.route, queryParams: { page: e }, queryParamsHandling: "merge" }) }
                }
                return e.\u0275fac = function(t) { return new(t || e)(p.Jb(ze.a), p.Jb(i.a), p.Jb(p.h), p.Jb(i.d)) }, e.\u0275cmp = p.Db({
                    type: e,
                    selectors: [
                        ["sbw-guides"]
                    ],
                    decls: 30,
                    vars: 7,
                    consts: [
                        ["headerClasses", "bg-green page-header-dark", "borderType", "angled", "borderClasses", "text-light"],
                        [1, "page-header-content", "pb-4"],
                        [1, "container"],
                        [1, "row", "align-items-center"],
                        [1, "col-lg-8", "mb-4", "mb-lg-0"],
                        [1, "page-header-title"],
                        [1, "page-header-text", "mb-0"],
                        [1, "col-lg-4"],
                        ["sbwCarbon", "", 1, "carbon-container"],
                        [1, "bg-light", "py-4"],
                        [1, "row"],
                        ["data-cy", "guidesCards", 1, "col-lg-8", "mt-lg-n10"],
                        ["class", "card mb-5", 4, "ngFor", "ngForOf"],
                        ["aria-label", "Blog post navigation", 1, "d-flex", "justify-content-center", "mb-10"],
                        ["aria-label", "Default pagination", 3, "collectionSize", "page", "pageSize", "pageChange"],
                        [1, "col-lg-4", "mt-lg-n5"],
                        [1, "card"],
                        [1, "card-header", "bg-primary"],
                        [1, "small", "text-white", "font-weight-500"],
                        [1, "mr-1", 3, "icon"],
                        ["data-cy", "latestNewsSidebar", 1, "list-group", "list-group-flush", "small", "mb-0", "border-bottom"],
                        [4, "ngFor", "ngForOf"],
                        [1, "card-body"],
                        ["routerLink", "/blog", 1, "btn", "btn-primary-soft", "text-primary", "btn-block", "font-weight-500"],
                        [1, "card", "mb-5"],
                        [1, "card-body", "p-5"],
                        [1, "d-flex", "align-items-center"],
                        [1, "flex-shrink-0", "d-none", "d-lg-block", "mr-5"],
                        [1, "img-fluid", "blog-preview-img", 3, "src", "alt"],
                        [1, "mb-3"],
                        [1, "mb-0"],
                        [1, "text-green", 3, "routerLink"],
                        [1, "small", "text-muted", "mb-2"],
                        ["class", "badge badge-green-soft text-green text-capitalize mr-2", 4, "ngFor", "ngForOf"],
                        [3, "md"],
                        [1, "btn", "btn-green", 3, "routerLink"],
                        [1, "ml-1", 3, "icon"],
                        [1, "badge", "badge-green-soft", "text-green", "text-capitalize", "mr-2"],
                        [1, "list-group-item", "list-group-item-action", 3, "routerLink"],
                        [1, "mb-1"],
                        ["class", "badge badge-primary-soft text-primary text-capitalize mr-2", 4, "ngFor", "ngForOf"],
                        [1, "font-weight-500"],
                        [1, "mb-2", "text-xs"],
                        [1, "text-xs", "text-muted"],
                        [1, "badge", "badge-primary-soft", "text-primary", "text-capitalize", "mr-2"]
                    ],
                    template: function(e, t) { 1 & e && (p.Pb(0, "sbpro-page-header", 0), p.Pb(1, "div", 1), p.Pb(2, "div", 2), p.Pb(3, "div", 3), p.Pb(4, "div", 4), p.Pb(5, "h1", 5), p.Fc(6, "Bootstrap Guides"), p.Ob(), p.Pb(7, "p", 6), p.Fc(8, "These Bootstrap guides and Bootstrap tutorials can help learn more about using Bootstrap 4 and other tools to create better web based projects!"), p.Ob(), p.Ob(), p.Pb(9, "div", 7), p.Kb(10, "div", 8), p.Ob(), p.Ob(), p.Ob(), p.Ob(), p.Ob(), p.Pb(11, "main", 9), p.Pb(12, "div", 2), p.Pb(13, "div", 10), p.Pb(14, "div", 11), p.Dc(15, Pt, 20, 18, "div", 12), p.Pb(16, "nav", 13), p.Pb(17, "ngb-pagination", 14), p.Zb("pageChange", function(e) { return t.page = e })("pageChange", function(e) { return t.pageChange(e) }), p.Ob(), p.Ob(), p.Ob(), p.Pb(18, "div", 15), p.Pb(19, "aside"), p.Pb(20, "div", 16), p.Pb(21, "div", 17), p.Pb(22, "div", 18), p.Kb(23, "fa-icon", 19), p.Fc(24, "Latest News"), p.Ob(), p.Ob(), p.Pb(25, "div", 20), p.Dc(26, yt, 11, 8, "ng-container", 21), p.Ob(), p.Pb(27, "div", 22), p.Pb(28, "a", 23), p.Fc(29, "View All News"), p.Ob(), p.Ob(), p.Ob(), p.Ob(), p.Ob(), p.Ob(), p.Ob(), p.Ob()), 2 & e && (p.xb(15), p.lc("ngForOf", t.guidePreviewsFiltered), p.xb(2), p.lc("collectionSize", t.guidePreviews.length)("page", t.page)("pageSize", t.pageSize), p.xb(6), p.lc("icon", p.oc(6, Ot)), p.xb(3), p.lc("ngForOf", t.newsPreviews)) },
                    directives: [v.a, y.a, r.p, k.l, S.a, i.f, Qe.a],
                    pipes: [oe.a, r.f],
                    styles: [""],
                    changeDetection: 0
                }), e
            })();
            const Ft = ["productCards"];
            let xt = (() => {
                class e {
                    constructor(e, t) { this.utilityService = e, this.toastService = t }
                    ngOnInit() {}
                    browseThemes() {
                        const e = this.productCards.elementRef.nativeElement.getBoundingClientRect().top + this.utilityService.window.pageYOffset - 116;
                        this.utilityService.window.scrollTo({ top: e, behavior: "smooth" })
                    }
                }
                return e.\u0275fac = function(t) { return new(t || e)(p.Jb(h.s), p.Jb(h.r)) }, e.\u0275cmp = p.Db({
                    type: e,
                    selectors: [
                        ["sbw-home"]
                    ],
                    viewQuery: function(e, t) {
                        if (1 & e && p.Jc(Ft, !0), 2 & e) {
                            let e;
                            p.sc(e = p.ac()) && (t.productCards = e.first)
                        }
                    },
                    decls: 33,
                    vars: 0,
                    consts: [
                        ["headerClasses", "bg-light page-header-light", "borderType", "angled", "borderClasses", "text-white"],
                        [1, "page-header-content", "pt-10", "pb-5", "pb-lg-0", "z-1"],
                        [1, "container"],
                        [1, "row"],
                        [1, "col-lg-7"],
                        [1, "page-header-title"],
                        [1, "text-primary"],
                        [1, "page-header-text", "mb-4"],
                        ["routerLink", "/themes"],
                        ["routerLink", "/templates"],
                        ["routerLink", "/snippets"],
                        ["routerLink", "/guides"],
                        ["routerLink", "/shop"],
                        ["role", "button", 1, "btn", "btn-primary", "btn-lg", "shadow", "font-weight-500", 3, "click"],
                        [1, "col-lg-5", "d-none", "d-lg-block", "mb-n15"],
                        ["src", "assets/img/freepik/content-pana.svg", "alt", "", 1, "img-fluid"],
                        ["sectionClasses", "pt-15 pb-10 bg-white", "borderType", "angled", "borderClasses", "text-light"],
                        ["category", "ALL"],
                        ["productCards", ""]
                    ],
                    template: function(e, t) { 1 & e && (p.Pb(0, "sbpro-page-header", 0), p.Pb(1, "div", 1), p.Pb(2, "div", 2), p.Pb(3, "div", 3), p.Pb(4, "div", 4), p.Pb(5, "h1", 5), p.Fc(6, "Bootstrap themes, templates, and UI tools to help you "), p.Pb(7, "span", 6), p.Fc(8, "start your next project!"), p.Ob(), p.Ob(), p.Pb(9, "div", 7), p.Fc(10, "Start Bootstrap creates free, open source, MIT license, Bootstrap "), p.Pb(11, "a", 8), p.Fc(12, "themes"), p.Ob(), p.Fc(13, ", "), p.Pb(14, "a", 9), p.Fc(15, "templates"), p.Ob(), p.Fc(16, ", and "), p.Pb(17, "a", 10), p.Fc(18, "code snippets"), p.Ob(), p.Fc(19, " for you to use on any project, "), p.Pb(20, "a", 11), p.Fc(21, "guides"), p.Ob(), p.Fc(22, " to help you learn more about designing and developing with the Bootstrap framework, and "), p.Pb(23, "a", 12), p.Fc(24, "premium Bootstrap UI products"), p.Ob(), p.Fc(25, "."), p.Ob(), p.Pb(26, "button", 13), p.Zb("click", function() { return t.browseThemes() }), p.Fc(27, "Browse Templates & Themes"), p.Ob(), p.Ob(), p.Pb(28, "div", 14), p.Kb(29, "img", 15), p.Ob(), p.Ob(), p.Ob(), p.Ob(), p.Ob(), p.Pb(30, "sbpro-page-section", 16), p.Kb(31, "sbw-product-cards", 17, 18), p.Ob()) },
                    directives: [v.a, i.f, O.a, ge],
                    styles: [""],
                    changeDetection: 0
                }), e
            })();
            var kt = o("aTeN");
            const St = { free: { key: "free", displayName: "Free Product FAQs", categories: [{ displayName: "Licensing", description: "Frequently asked questions regarding licensing", sections: [{ displayName: "Licensing of Free Products on Start Bootstrap", description: "Questions about the MIT License and how to properly use our free products", faqs: [{ question: "When using a free theme or template, do I have to give Start Bootstrap credit on my page?", answer: "No. When using any of our free products, you do not need to give Start Bootstrap on your page.\nTo remain compliant with the MIT License, simply keep the links to the MIT License within the\ncode of the product. These links are already in the custom CSS and JS files of each item, so you\ndo not need to add anything.\n" }, { question: "Can I use a free theme or template for commercial purposes?", answer: "Yes. This is one of the main reasons we chose the MIT License for our free products.\nWe believe our free products should be a free and open resource that developers\ncanuse for commercial purposes without having to credit the creators visibly on the page.\n" }, { question: "What is the MIT License and how do I use it properly?", answer: "The MIT License is a permissive, open source software license that originated at the\nMassachusetts Institute of Technology (MIT). If you are using one of the free items on\nStart Bootstrap, you will notice that the CSS and JS files will have a section of code\ncommented out at the top of the document with information about the theme and a link to\nthe MIT License. All you need to do is keep those links there. There is no need to add\nlinks to Start Bootstrap or the MIT License anywhere visibly on your page.\n" }] }, { displayName: "Other Information about Free Products on Start Bootstrap", description: "General information about the free products on our website.", faqs: [{ question: "How can I access past versions of a theme or template?", answer: "If you are interested in using a past version of one of the free themes or templates,\nyou can access them on GitHub. All of our free themes and templates are listed on GitHub at\n**<https://github.com/StartBootstrap>**. Once you have accessed the repository of the item you\u2019re\nusing, you can look at previous releases by clicking on the \u2018tags\u2019 button to the right of the\nbranch selection dropdown.\n" }] }] }] }, pro: { key: "pro", displayName: "Pro FAQs", categories: [{ displayName: "Licensing", description: "Frequently asked questions regarding licensing", sections: [{ displayName: "Licensing Questions (Pro Products)", description: "Questions about the licenses we offer for our paid, pro products", faqs: [{ question: "Which license should I purchase for my project?", answer: "Visit our **[licenses page](https://startbootstrap.com/licenses)**\nto read the full details on each type of license that we offer. If you are still unsure,\nread through the *Helpful Examples* section on the licenses page, or contact us at\n<support@startbootstrap.com>.\n" }, { question: "Can I use a pro theme for commercial purposes?", answer: "Yes. When you purchase a pro theme from us, you can use the theme for commercial purposes.\nYou can see more about what you can and cannot do with a pro license on our\n**[licensing page](https://startbootstrap.com/licenses)**.\n" }, { question: "I purchased a standard or extended license of a product in the past. What license do I currently have?", answer: "If you purchased a Standard License before November 1, 2020, then your Standard License has\nbeen automatically updated to become what is now the Developer License.\n\nIf you purchased an Extended License before November 1, 2020, then your Extended License has\nbeen automatically updated to become what is now the Startup License.\n\nIf you have any questions about the new license tiers and how they relate to a previous\npurchase made on Start Bootstrap, please let us know at <support@startbootstrap.com>.\n" }] }, { displayName: "Order & Download Issues", description: "Issues related to past orders, downloading, and accessing products", faqs: [{ question: "How can I download a copy of my invoice?", answer: "If you need a digital copy of your invoice, login to your Start Bootstrap account\nand click on *Invoices* from the sidebar menu on the account page. Select the\n*Print* option from the order you need an invoice for. After that, choose\n*Save as PDF* from your browsers print dialog.\n" }, { question: "I made a purchase as a guest and need to link it to a new account.", answer: "After creating an account, login and click on *Orders* from the sidebar menu on the account page.\nFrom the orders page, scroll down to the section that says *Link Past Order* and enter your Order ID.\nYou can find your Order ID from your purchase receipt that was emailed to you when you bought your pro product.\n\nIf you can\u2019t find your Order ID, please contact us at <support@startbootstrap.com> with the\nemail address you used to make your purchase and we will send you your Order ID.\n" }, { question: "Can I re-download a purchase I previously made?", answer: "Yes! Login to your Start Bootstrap account and click on *Downloads* from the\nsidebar menu on the account page. From there you should see your past purchases\nthat are available to download.\n\nIf you did not make an account when you purchased your product, and you need\nto re-download your product, you will need to create a new account and link\nyour order to the account. See the above item for more details.\n\nIf you made your purchase before November 1, 2020, and can't re-access your\nStart Bootstrap account, please contact Start Bootstrap support at\n<support@startbootstrap.com> with your past order number so we can set you up\nwith an account on our new database.\n\n" }] }, { displayName: "Billing Issues", description: "Issues related to billing and making purchases", faqs: [{ question: "What is your refund policy?", answer: "Due to the nature of digital products, we do not refund orders after they have\nbeen downloaded since there is no way to verify that a refunded item has been fully\ndeleted off of a users system.\n\nIf you are considering purchasing a product, we provide comprehensive live previews,\nfull documentation and usage instructions, product descriptions, and code examples\nto ensure that customers know exactly what they are purchasing before they buy.\n\nDue to the amount of public information given about our products before purchase, misunderstanding\nthe product or inability to use the project based on limitations in development\nknowledge and/or expertise does not make one eligible for a refund.\n\nPlease contact us at <support@startbootstrap.com> for answers to any questions you may\nhave about our products before making a purchase.\n\nIf you have made an order by mistake, and have not downloaded the purchased product already,\nyou can contact us using the email address above to request a refund.\n" }, { question: "My order is pending after I submitted my payment details.", answer: "If your order is still pending after submitting your payment details, please\ncheck to see if you have a text message or email from your bank asking you to\nverify the purchase. Once verified, go to your account page and you should see\nyour order and download information. Otherwise, contact support at\n<support@startbootstrap.com> for assistance.\n" }, { question: "Why did my order fail?", answer: "There are a number of reasons your order could fail. Try re-entering your\ncredit card information, try a new credit card, or choose a different payment\nmethod. Orders fail due to incorrect information being entered, banks declining\nthe transaction, and insufficient funds, among other reasons.\n" }] }, { displayName: "Support Issues", description: "Questions related to receiving support for your purchase", faqs: [{ question: "What support is provided after purchasing pro products?", answer: "When purchasing a pro product from Start Bootstrap, you will receive email\nsupport from the developers of the products. The support that we offer\nincludes bug fixes and answers to questions about how the product is built\nand functions. We also provide full documentation with all of our pro products\nwhich has detailed usage instructions and answers to commonly asked questions\nspecific to the product.\n\nWe do not provide support related to integration with frameworks or other issues that arise when\ncustomizing your product past the scope of what is outlined in the documentation.\n" }, { question: "What frameworks do your pro products integrate with?", answer: "Our HTML-based pro products are framework agnostic, and can be integrated into\nany framework or development stack dependent on the expertise of the developer(s) who have\npurchased the product. This includes, but is not limited to: Angular, ASP.NET MVC 5, Django,\nLaravel, React, Ruby on Rails, Vue.js, and all other development frameworks.\n\nSome of our products are already built to integrate with a specific framework out-of-the-box.\nFor example, our SB Admin Pro Angular product has already been integrated with the Angular front-end framework.\nOur framework-specific products are fully integrated, and you can learn more about how to work with\nthese products in the documentation for the product you've purchased. We do not recommend purchasing\na framework-specific product if you are unfamiliar with the framework that is being used.\n" }] }] }] }, general: { key: "general", displayName: "General FAQs", categories: [{ displayName: "Account", description: "Frequently asked questions regarding your Start Bootstrap account", sections: [{ displayName: "Authentication Issues", description: "Issues related to logging in, registering a new account, and setting your account password", faqs: [{ question: "How can I reset my password?", answer: "Visit our login page at **<https://startbootstrap.com/auth/login>** and then complete the following steps:\n\n1. Click on ***Forgot your passoword?*** right below the password input field.\n2. On the next page that says ***Reset Your Password*** enter your email address and\n   then click the ***Send Password Reset Link*** button. If an account is associated\n   with the email address you entered, you will receive an email with instructions\n   on how to reset your password.\n" }, { question: "What do I do if I cannot remember my email?", answer: "If you are unable to remember your email address associated with your account,\ncontact Start Bootstrap support at <support@startbootstrap.com> with an order ID\nfrom a past purchase and we can help you retreive your account information.\n" }] }, { displayName: "Website & Content Questions", description: "Issues related to the Start Bootstrap website and content on Start Bootstrap", faqs: [{ question: "Do you have an affiliate program?", answer: "We are currently working on implementing our affiliate program. If you\u2019re interested\nin becoming a Start Bootstrap affiliate, contact us at <support@startbootstrap.com>\nand we will be happy to provide you with more details.\n" }, { question: "Do you accept guest posts to the Start Bootstrap Blog?", answer: "At the moment, all of our blog posts and guides are written in-house. If you have a\nproposal for us regarding guest submissions to our blog and guides, please provide\nus with examples of your past work, and a list of topics that you are knowledgeable\nabout that are also relevant to the content on Start Bootstrap. You can reach us at\n<support@startbootstrap.com>.\n" }, { question: "Does Start Bootstrap offer custom design and development services?", answer: "If you have a specific project in mind, we do take custom development contracts into consideration\nif they are the right fit for our organization. Email us at <support@startbootstrap.com>\nif you have any questions regarding custom design or application development.\n" }] }] }] } },
                Bt = ["collapsibleSection"];

            function Dt(e, t) {
                if (1 & e && (p.Pb(0, "div", 3), p.Pb(1, "div", 4), p.Pb(2, "div", 5), p.Pb(3, "div", 6), p.Pb(4, "h4", 7), p.jc(5), p.Ob(), p.Pb(6, "p", 8), p.jc(7, 1), p.Ob(), p.Ob(), p.Pb(8, "div", 9), p.Fc(9), p.Ob(), p.Ob(), p.Ob(), p.Ob()), 2 & e) {
                    const e = p.dc();
                    p.xb(9), p.Hc("", e.faqs.length, " Answers")
                }
            }
            const It = function(e) { return { collapsed: e } },
                Tt = function() { return ["far", "chevron-down"] };

            function Ct(e, t) {
                if (1 & e) {
                    const e = p.Qb();
                    p.Pb(0, "div", 10), p.Pb(1, "a", 11), p.Zb("click", function() { p.vc(e); const o = t.index; return p.dc().toggle(o) }), p.Pb(2, "div", 12), p.Fc(3), p.Kb(4, "fa-icon", 13), p.Ob(), p.Ob(), p.Pb(5, "div", 14, 15), p.Pb(7, "div", 16), p.Kb(8, "sbw-markdown-html", 17), p.Ob(), p.Ob(), p.Ob()
                }
                if (2 & e) {
                    const e = t.$implicit,
                        o = t.index,
                        i = p.dc();
                    p.xb(1), p.lc("ngClass", p.pc(4, It, i.collapsed[o])), p.xb(2), p.Gc(e.question), p.xb(1), p.lc("icon", p.oc(6, Tt)), p.xb(4), p.lc("md", e.answer)
                }
            }
            const Lt = [
                    [
                        ["", 8, "header-title"]
                    ],
                    [
                        ["", 8, "header-subtitle"]
                    ]
                ],
                Kt = [".header-title", ".header-subtitle"];
            let Mt = (() => {
                class e {
                    constructor(e) { this.changeDetectorRef = e, this.oneAtATime = !0, this.header = !1, this.collapsed = [] }
                    ngOnInit() {}
                    ngAfterViewInit() {
                        this.divElements = this.collapsibleSections.map(e => e.nativeElement);
                        for (const e in this.divElements) this.divElements[e].addEventListener("transitionend", t => { this.collapsed[e] || (this.divElements[e].style.height = "") });
                        for (const e in this.divElements) this.divElements[e].style.height = "0px", this.collapsed[e] = !0;
                        this.changeDetectorRef.detectChanges()
                    }
                    toggle(e) { return this.collapsed[e] ? this._expand(e) : this._collapse(e) }
                    _collapse(e) {
                        const t = this.divElements[e].scrollHeight,
                            o = this.divElements[e].style.transition;
                        this.divElements[e].style.transition = "", requestAnimationFrame(() => { this.divElements[e].style.height = t + "px", this.divElements[e].style.transition = o, requestAnimationFrame(() => { this.divElements[e].style.height = "0px", this.collapsed[e] = !0, this.changeDetectorRef.detectChanges() }) })
                    }
                    _expand(e) {
                        if (this.divElements[e].style.height = this.divElements[e].scrollHeight + "px", this.collapsed[e] = !1, this.oneAtATime)
                            for (const t in this.collapsed) this.collapsed[t] || parseInt(t, 10) === e || this._collapse(parseInt(t, 10));
                        this.changeDetectorRef.markForCheck()
                    }
                }
                return e.\u0275fac = function(t) { return new(t || e)(p.Jb(p.h)) }, e.\u0275cmp = p.Db({
                    type: e,
                    selectors: [
                        ["sbpro-card-accordion-faq"]
                    ],
                    viewQuery: function(e, t) {
                        if (1 & e && p.Jc(Bt, !0), 2 & e) {
                            let e;
                            p.sc(e = p.ac()) && (t.collapsibleSections = e)
                        }
                    },
                    inputs: { faqs: "faqs", oneAtATime: "oneAtATime", header: "header" },
                    ngContentSelectors: Kt,
                    decls: 3,
                    vars: 2,
                    consts: [
                        [1, "accordion", "accordion-faq", "mb-5"],
                        ["class", "card border-bottom", 4, "ngIf"],
                        ["class", "card accordion-faq-item rounded-0", 4, "ngFor", "ngForOf"],
                        [1, "card", "border-bottom"],
                        [1, "card-body"],
                        [1, "accordion-faq-title"],
                        [1, "mr-2"],
                        [1, "mb-0"],
                        [1, "card-text", "text-gray-500"],
                        [1, "badge", "badge-success-soft", "badge-pill", "text-success"],
                        [1, "card", "accordion-faq-item", "rounded-0"],
                        ["data-toggle", "collapse", "href", "javascript:void(0);", 1, "card-header", 3, "ngClass", "click"],
                        [1, "accordion-faq-item-heading"],
                        [1, "accordion-faq-item-heading-arrow", 3, "icon"],
                        [1, "collapse", "show"],
                        ["collapsibleSection", ""],
                        [1, "card-body", "bg-light"],
                        [3, "md"]
                    ],
                    template: function(e, t) { 1 & e && (p.kc(Lt), p.Pb(0, "div", 0), p.Dc(1, Dt, 10, 1, "div", 1), p.Dc(2, Ct, 9, 7, "div", 2), p.Ob()), 2 & e && (p.xb(1), p.lc("ngIf", t.header), p.xb(1), p.lc("ngForOf", t.faqs)) },
                    directives: [r.q, r.p, r.o, S.a, Qe.a],
                    styles: [".collapse[_ngcontent-%COMP%]{overflow:hidden;transition:height .2s ease-out}.accordion-faq[_ngcontent-%COMP%]{border:1px solid #e0e5ec;border-radius:.35rem}.accordion-faq[_ngcontent-%COMP%]   .accordion-faq-item[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]{border-bottom:1px solid #e0e5ec}.accordion-faq[_ngcontent-%COMP%]   .accordion-faq-item[_ngcontent-%COMP%]:last-child   .card-header[_ngcontent-%COMP%]{border-bottom:0}.accordion-faq[_ngcontent-%COMP%]   .accordion-faq-item[_ngcontent-%COMP%]:last-child   .card-body[_ngcontent-%COMP%]{border-top:1px solid #e0e5ec;border-bottom:0}.accordion-faq[_ngcontent-%COMP%]     :last-child{margin-bottom:0}"],
                    changeDetection: 0
                }), e
            })();

            function Et(e, t) { 1 & e && (p.Pb(0, "h1"), p.Fc(1, "Knowledge Base"), p.Ob()) }

            function At(e, t) {
                if (1 & e && (p.Pb(0, "h1"), p.Fc(1), p.Ob()), 2 & e) {
                    const e = p.dc();
                    p.xb(1), p.Gc(e.grouping.displayName)
                }
            }

            function Nt(e, t) {
                if (1 & e && (p.Nb(0), p.Pb(1, "sbpro-card-accordion-faq", 26), p.Pb(2, "div", 27), p.Fc(3), p.Ob(), p.Pb(4, "div", 28), p.Fc(5), p.Ob(), p.Ob(), p.Mb()), 2 & e) {
                    const e = t.$implicit;
                    p.xb(1), p.lc("faqs", e.faqs)("header", !0), p.xb(2), p.Gc(e.displayName), p.xb(2), p.Gc(e.description)
                }
            }

            function jt(e, t) {
                if (1 & e && (p.Nb(0), p.Dc(1, Nt, 6, 4, "ng-container", 25), p.Mb()), 2 & e) {
                    const e = t.$implicit;
                    p.xb(1), p.lc("ngForOf", e.sections)
                }
            }

            function Rt(e, t) {
                if (1 & e && (p.Pb(0, "div", 24), p.Dc(1, jt, 2, 1, "ng-container", 25), p.Ob()), 2 & e) {
                    const e = p.dc();
                    p.lc("@fadeInOut", void 0), p.xb(1), p.lc("ngForOf", e.grouping.categories)
                }
            }
            const Ut = function() { return ["fad", "gifts"] },
                qt = function() { return ["fad", "file-certificate"] },
                Gt = function() { return ["fad", "question"] };
            let Ht = (() => {
                class e {
                    constructor(e, t) { this.route = e, this.changeDetectorRef = t, this.subscription = new F.a, this.faqData = St }
                    ngOnInit() {
                        this.freeEntries = this._countEntries(this.faqData.free.categories), this.proEntries = this._countEntries(this.faqData.pro.categories), this.generalEntries = this._countEntries(this.faqData.general.categories), this.subscription.add(this.route.params.subscribe(e => {
                            this.grouping = void 0;
                            const t = e.grouping;
                            t && this._isValidGrouping(t) && (this.grouping = this.faqData[t]), this.changeDetectorRef.detectChanges()
                        }))
                    }
                    ngOnDestroy() { this.subscription.unsubscribe() }
                    _countEntries(e) { let t = 0; return e.forEach(e => { e.sections.forEach(e => { t += e.faqs.length }) }), t }
                    _isValidGrouping(e) { return !!["free", "pro", "general"].find(t => t === e) }
                }
                return e.\u0275fac = function(t) { return new(t || e)(p.Jb(i.a), p.Jb(p.h)) }, e.\u0275cmp = p.Db({
                    type: e,
                    selectors: [
                        ["sbw-knowledge-base"]
                    ],
                    decls: 51,
                    vars: 12,
                    consts: [
                        ["sectionClasses", "mt-page-header pb-10 bg-white", "borderType", "angled", "borderClasses", "text-light"],
                        [1, "container", "pt-5"],
                        [1, "d-flex", "align-items-center"],
                        ["src", "assets/img/freepik/idea-pana.svg", "alt", "", 1, "d-none", "d-sm-block", 2, "height", "4rem"],
                        [1, "ml-sm-3"],
                        [4, "ngIf"],
                        [1, "lead", "mb-0"],
                        [1, "my-5"],
                        [1, "container"],
                        ["class", "mb-5", 4, "ngIf"],
                        [1, "row", "text-center"],
                        [1, "col-lg-4", "mb-5", "mb-lg-0"],
                        ["routerLink", "/knowledge-base/free", 1, "card", "card-link", "border-top", "border-top-lg", "border-primary", "h-100", "lift"],
                        [1, "card-body", "p-5"],
                        [1, "icon-stack", "icon-stack-lg", "bg-primary-soft", "text-primary", "mb-4"],
                        [3, "icon"],
                        [1, "card-text"],
                        [1, "card-footer", "bg-transparent", "pt-0", "pb-5"],
                        [1, "badge", "badge-pill", "badge-light", "font-weight-normal", "px-3", "py-2"],
                        ["routerLink", "/knowledge-base/pro", 1, "card", "card-link", "border-top", "border-top-lg", "border-green", "h-100", "lift"],
                        [1, "icon-stack", "icon-stack-lg", "bg-green-soft", "text-green", "mb-4"],
                        [1, "col-lg-4"],
                        ["routerLink", "/knowledge-base/general", 1, "card", "card-link", "border-top", "border-top-lg", "border-yellow", "h-100", "lift"],
                        [1, "icon-stack", "icon-stack-lg", "bg-yellow-soft", "text-yellow", "mb-4"],
                        [1, "mb-5"],
                        [4, "ngFor", "ngForOf"],
                        [3, "faqs", "header"],
                        [1, "header-title"],
                        [1, "header-subtitle"]
                    ],
                    template: function(e, t) { 1 & e && (p.Pb(0, "sbpro-page-section", 0), p.Pb(1, "header"), p.Pb(2, "div", 1), p.Pb(3, "div", 2), p.Kb(4, "img", 3), p.Pb(5, "div", 4), p.Dc(6, Et, 2, 0, "h1", 5), p.Dc(7, At, 2, 1, "h1", 5), p.Pb(8, "p", 6), p.Fc(9, "Last updated: August 2020"), p.Ob(), p.Ob(), p.Ob(), p.Kb(10, "hr", 7), p.Ob(), p.Ob(), p.Pb(11, "main"), p.Pb(12, "div", 8), p.Dc(13, Rt, 2, 2, "div", 9), p.Pb(14, "div", 10), p.Pb(15, "div", 11), p.Pb(16, "a", 12), p.Pb(17, "div", 13), p.Pb(18, "div", 14), p.Kb(19, "fa-icon", 15), p.Ob(), p.Pb(20, "h6"), p.Fc(21, "Free"), p.Ob(), p.Pb(22, "p", 16), p.Fc(23, "I have questions about the free themes, templates, and snippets on Start Bootstrap."), p.Ob(), p.Ob(), p.Pb(24, "div", 17), p.Pb(25, "div", 18), p.Fc(26), p.Ob(), p.Ob(), p.Ob(), p.Ob(), p.Pb(27, "div", 11), p.Pb(28, "a", 19), p.Pb(29, "div", 13), p.Pb(30, "div", 20), p.Kb(31, "fa-icon", 15), p.Ob(), p.Pb(32, "h6"), p.Fc(33, "Pro"), p.Ob(), p.Pb(34, "p", 16), p.Fc(35, "I have questions about a product that I purchased from Start Bootstrap or a product I am thinking about purchasing."), p.Ob(), p.Ob(), p.Pb(36, "div", 17), p.Pb(37, "div", 18), p.Fc(38), p.Ob(), p.Ob(), p.Ob(), p.Ob(), p.Pb(39, "div", 21), p.Pb(40, "a", 22), p.Pb(41, "div", 13), p.Pb(42, "div", 23), p.Kb(43, "fa-icon", 15), p.Ob(), p.Pb(44, "h6"), p.Fc(45, "General"), p.Ob(), p.Pb(46, "p", 16), p.Fc(47, "I have a question about my Start Bootstrap account, the Start Bootstrap website, or something else."), p.Ob(), p.Ob(), p.Pb(48, "div", 17), p.Pb(49, "div", 18), p.Fc(50), p.Ob(), p.Ob(), p.Ob(), p.Ob(), p.Ob(), p.Ob(), p.Ob(), p.Ob()), 2 & e && (p.xb(6), p.lc("ngIf", !t.grouping), p.xb(1), p.lc("ngIf", t.grouping), p.xb(6), p.lc("ngIf", t.grouping), p.xb(6), p.lc("icon", p.oc(9, Ut)), p.xb(7), p.Hc("", t.freeEntries, " Entries"), p.xb(5), p.lc("icon", p.oc(10, qt)), p.xb(7), p.Hc("", t.proEntries, " Entries"), p.xb(5), p.lc("icon", p.oc(11, Gt)), p.xb(7), p.Hc("", t.generalEntries, " Entries")) },
                    directives: [O.a, r.q, i.f, S.a, r.p, Mt],
                    styles: [""],
                    data: { animation: [kt.a] },
                    changeDetection: 0
                }), e
            })();
            const _t = function() { return ["fad", "file-certificate"] },
                Vt = function() { return ["fal", "arrow-right"] };

            function Jt(e, t) { 1 & e && (p.Nb(0), p.Pb(1, "div", 26), p.Pb(2, "div", 27), p.Pb(3, "div", 2), p.Kb(4, "fa-icon", 28), p.Pb(5, "div"), p.Pb(6, "div", 29), p.Pb(7, "strong"), p.Fc(8, "The information in this section applies to the paid, pro products sold on Start Bootstrap."), p.Ob(), p.Ob(), p.Pb(9, "div", 29), p.Fc(10, "Our free themes, templates, and snippets and licensed under the MIT License. For more information about the MIT License and using our free products, please visit our "), p.Pb(11, "a", 30), p.Fc(12, "Knowledge Base."), p.Ob(), p.Ob(), p.Ob(), p.Ob(), p.Ob(), p.Ob(), p.Pb(13, "h2", 18), p.Pb(14, "div", 19), p.Kb(15, "fa-icon", 20), p.Ob(), p.Fc(16, " Helpful Examples "), p.Ob(), p.Pb(17, "div", 31), p.Pb(18, "h3"), p.Fc(19, "For solo freelancers creating a website for a single client"), p.Ob(), p.Pb(20, "p"), p.Fc(21, "If you are a freelancer creating one website for a single client, and the website you\u2019re creating can be accessed by the end user (in this case, visitors to your client\u2019s website) free of charge, then the "), p.Pb(22, "a", 32), p.Fc(23, "Freelancer License"), p.Ob(), p.Fc(24, " is all you need if you only want the HTML/CSS version of the theme. The "), p.Pb(25, "a", 33), p.Fc(26, "Developer License"), p.Ob(), p.Fc(27, " is required if you want the full source files for the theme."), p.Ob(), p.Pb(28, "p"), p.Fc(29, "If users have to pay to access certain features or areas of the website you are creating for your client, like a SaaS application, then the "), p.Pb(30, "a", 34), p.Fc(31, "Startup License"), p.Ob(), p.Fc(32, " is needed."), p.Ob(), p.Pb(33, "p", 29), p.Fc(34, "Note: a typical e-commerce website requires users to pay for products on the website, but not to use the website \u2013 in this case a Freelancer or Developer License is sufficient."), p.Ob(), p.Ob(), p.Pb(35, "div", 6), p.Pb(36, "h3"), p.Fc(37, "For agencies and small teams creating a website for a single client"), p.Ob(), p.Pb(38, "p"), p.Fc(39, "If you are an agency or a small team of 5 team members or less creating one website for a single client, "), p.Pb(40, "a", 34), p.Fc(41, "Startup License"), p.Ob(), p.Fc(42, " is required."), p.Ob(), p.Pb(43, "p"), p.Fc(44, "With the "), p.Pb(45, "a", 34), p.Fc(46, "Startup License"), p.Ob(), p.Fc(47, ", the application you are building for a client is allowed to have paying users, for example, a SaaS application."), p.Ob(), p.Ob(), p.Pb(48, "div", 6), p.Pb(49, "h3"), p.Fc(50, "For companies creating a website for their own business"), p.Ob(), p.Pb(51, "p"), p.Fc(52, "If you represent a company, and are building a website for the business, you must choose the appropriate license. If the website you are building is informational, like a landing page or marketing website, where users can access the website for free, then the "), p.Pb(53, "a", 32), p.Fc(54, "Freelancer License"), p.Ob(), p.Fc(55, " or "), p.Pb(56, "a", 33), p.Fc(57, "Developer License"), p.Ob(), p.Fc(58, " is all you need if you are the only team member accessing the theme files."), p.Ob(), p.Pb(59, "p"), p.Fc(60, "If your team is between 2-5 members, the "), p.Pb(61, "a", 34), p.Fc(62, "Startup License"), p.Ob(), p.Fc(63, " is required, which also allows the creation of applications where the end users must pay in order to access, like a SaaS platform."), p.Ob(), p.Pb(64, "p"), p.Fc(65, "If your team size is between 6-15 members, the "), p.Pb(66, "a", 35), p.Fc(67, "Enterprise License"), p.Ob(), p.Fc(68, " is required."), p.Ob(), p.Pb(69, "p"), p.Fc(70, "We also offer custom commercial licensing for teams larger than 15 members."), p.Ob(), p.Ob(), p.Pb(71, "div", 6), p.Pb(72, "h3"), p.Fc(73, 'If you are building a "freemium" application'), p.Ob(), p.Pb(74, "p"), p.Fc(75, 'If you are using the "freemium" strategy for your end product, meaning your application is free for users, but users can pay to unlock or access additional features, you must use a license type that allows for paid applications. The '), p.Pb(76, "a", 34), p.Fc(77, "Startup License"), p.Ob(), p.Fc(78, " or the "), p.Pb(79, "a", 35), p.Fc(80, "Enterprise License"), p.Ob(), p.Fc(81, " is needed in this case, depening on how many team members are working with the theme to develop the application."), p.Ob(), p.Ob(), p.Pb(82, "div", 6), p.Pb(83, "h3"), p.Fc(84, "For creating multiple end products using the same theme"), p.Ob(), p.Pb(85, "p"), p.Fc(86, "If you are creating more than one end product, but want to use the same theme, then you will need to buy multiple licenses of the same theme \u2013 "), p.Pb(87, "a", 32), p.Fc(88, "Freelancer License"), p.Ob(), p.Fc(89, " or "), p.Pb(90, "a", 33), p.Fc(91, "Developer License"), p.Ob(), p.Fc(92, " if the end product is accessed for free, Startup or Enterprise Licenses if the end product requires paid access depending on the size of your team."), p.Ob(), p.Pb(93, "p"), p.Fc(94, "If you don't want to purchase multiple licenses for creating multiple end products, we offer custom commercial licensing as well!"), p.Ob(), p.Ob(), p.Pb(95, "div", 6), p.Pb(96, "h3"), p.Fc(97, "Multi channel redistribution, and advanced development"), p.Ob(), p.Pb(98, "p"), p.Fc(99, "If you are looking to redistribute your end product through multiple channels, or require advanced terms that surpass the capabilities of the "), p.Pb(100, "a", 35), p.Fc(101, "Enterprise License"), p.Ob(), p.Fc(102, ", then a custom commercial license is necessary. Information about custom commercial licensing is available upon request by contacting us at "), p.Pb(103, "a", 21), p.Fc(104, "support@startbootstrap.com"), p.Ob(), p.Fc(105, "."), p.Ob(), p.Ob(), p.Mb()), 2 & e && (p.xb(4), p.lc("icon", p.oc(2, _t)), p.xb(11), p.lc("icon", p.oc(3, Vt))) }

            function Wt(e, t) { 1 & e && (p.Nb(0), p.Pb(1, "h2", 18), p.Pb(2, "div", 19), p.Kb(3, "fa-icon", 20), p.Ob(), p.Fc(4, " Freelancer License "), p.Ob(), p.Pb(5, "p"), p.Fc(6, "The Freelancer License gives you access to only the HTML/CSS version of the Theme being purchased."), p.Ob(), p.Pb(7, "p"), p.Fc(8, "The Freelancer License is sufficient if you are 1) the only person working with the Theme's files, 2) you are creating a single End Product deployed on only one domain, and 3) the End Product that you deploy is free to access by the end user. The original theme files and the End Product's files cannot be redistributed in any way. The full terms of the Freelancer License are as follows:"), p.Ob(), p.Pb(9, "ol"), p.Pb(10, "li", 36), p.Fc(11, "The Freelancer License grants the purchaser a non-exclusive, non-transferrable, and ongoing right to make use of the Theme."), p.Ob(), p.Pb(12, "li", 36), p.Fc(13, "You are licensed to use the Theme to create a single End Product for personal use, or for a client."), p.Ob(), p.Pb(14, "li", 36), p.Fc(15, "The End Product is a customized implementation of the Theme requiring the application of skill and effort"), p.Ob(), p.Pb(16, "li", 36), p.Fc(17, "The Theme may only be used by a single (1) developer."), p.Ob(), p.Pb(18, "li", 36), p.Fc(19, "The End Product you create may be accessed by multiple End Users, and the End Users must be able at access the End Product for free."), p.Ob(), p.Pb(20, "li", 36), p.Fc(21, " With the Freelancer License, you can: "), p.Pb(22, "ol"), p.Pb(23, "li", 36), p.Fc(24, "Use the Theme to create one single End Product for personal use or for a client. You can transfer the single End Product to your client for any fee. This license is then transferred to your client."), p.Ob(), p.Ob(), p.Ob(), p.Pb(25, "li", 36), p.Fc(26, " With the Freelancer License, you cannot: "), p.Pb(27, "ol"), p.Pb(28, "li", 36), p.Fc(29, "Create multiple End Products using the Theme."), p.Ob(), p.Pb(30, "li", 36), p.Fc(31, "Create an End Product where End Users must pay in order to access."), p.Ob(), p.Pb(32, "li", 36), p.Fc(33, "Create an End Product with multiple team members working with the Theme files."), p.Ob(), p.Pb(34, "li", 36), p.Fc(35, "Redistribute the Theme \u201cas is\u201d by itself or as part of a bundle of products."), p.Ob(), p.Pb(36, "li", 36), p.Fc(37, "Redistribute the modified End Product."), p.Ob(), p.Pb(38, "li", 36), p.Fc(39, "Redistribute the Theme \u201cas is\u201d, or the modified End Product, as part of an \u201con demand\u201d product or service (like a \u201csite generator\u201d or \u201ccreate your own\u201d website application)."), p.Ob(), p.Ob(), p.Ob(), p.Pb(40, "li", 36), p.Fc(41, "Any components included with the Theme which includes, but is not limited to: graphics, images, code, or any other content, retains its original license. The author of the Theme will document any and all licensed components included with the Theme. You are responsible for adhering to the original license of any additional licensed components included with the Theme."), p.Ob(), p.Pb(42, "li", 36), p.Fc(43, "Start Bootstrap retains ownership of the Theme, but grants you the license on these terms. This license is between the Start Bootstrap and you, the purchaser. Start Bootstrap LLC is the grantor of the license."), p.Ob(), p.Ob(), p.Mb()), 2 & e && (p.xb(3), p.lc("icon", p.oc(1, Vt))) }

            function Xt(e, t) { 1 & e && (p.Nb(0), p.Pb(1, "h2", 18), p.Pb(2, "div", 19), p.Kb(3, "fa-icon", 20), p.Ob(), p.Fc(4, " Developer License "), p.Ob(), p.Pb(5, "p"), p.Fc(6, "The Developer License gives you access to the source files of the Theme and the compiled HTML/CSS version of the Theme being purchased."), p.Ob(), p.Pb(7, "p"), p.Fc(8, "The Developer License is sufficient if you are 1) the only person working with the Theme's files, 2) you are creating a single End Product deployed on only one domain, and 3) the End Product that you deploy is free to access by the end user. The original theme files and the End Product's files cannot be redistributed in any way. The full terms of the Developer License are as follows:"), p.Ob(), p.Pb(9, "ol"), p.Pb(10, "li", 36), p.Fc(11, "The Developer License grants the purchaser a non-exclusive, non-transferrable, and ongoing right to make use of the Theme."), p.Ob(), p.Pb(12, "li", 36), p.Fc(13, "You are licensed to use the Theme to create a single End Product for personal use, or for a client."), p.Ob(), p.Pb(14, "li", 36), p.Fc(15, "The End Product is a customized implementation of the Theme requiring the application of skill and effort"), p.Ob(), p.Pb(16, "li", 36), p.Fc(17, "The Theme may only be used by a single (1) developer."), p.Ob(), p.Pb(18, "li", 36), p.Fc(19, "The End Product you create may be accessed by multiple End Users, and the End Users must be able at access the End Product for free."), p.Ob(), p.Pb(20, "li", 36), p.Fc(21, " With the Developer License, you can: "), p.Pb(22, "ol"), p.Pb(23, "li", 36), p.Fc(24, "Use the Theme to create one single End Product for personal use or for a client. You can transfer the single End Product to your client for any fee. This license is then transferred to your client."), p.Ob(), p.Ob(), p.Ob(), p.Pb(25, "li", 36), p.Fc(26, " With the Developer License, you cannot: "), p.Pb(27, "ol"), p.Pb(28, "li", 36), p.Fc(29, "Create multiple End Products using the Theme."), p.Ob(), p.Pb(30, "li", 36), p.Fc(31, "Create an End Product where End Users must pay in order to access."), p.Ob(), p.Pb(32, "li", 36), p.Fc(33, "Create an End Product with multiple team members working with the Theme files."), p.Ob(), p.Pb(34, "li", 36), p.Fc(35, "Redistribute the Theme \u201cas is\u201d by itself or as part of a bundle of products."), p.Ob(), p.Pb(36, "li", 36), p.Fc(37, "Redistribute the modified End Product."), p.Ob(), p.Pb(38, "li", 36), p.Fc(39, "Redistribute the Theme \u201cas is\u201d, or the modified End Product, as part of an \u201con demand\u201d product or service (like a \u201csite generator\u201d or \u201ccreate your own\u201d website application)."), p.Ob(), p.Ob(), p.Ob(), p.Pb(40, "li", 36), p.Fc(41, "Any components included with the Theme which includes, but is not limited to: graphics, images, code, or any other content, retains its original license. The author of the Theme will document any and all licensed components included with the Theme. You are responsible for adhering to the original license of any additional licensed components included with the Theme."), p.Ob(), p.Pb(42, "li", 36), p.Fc(43, "Start Bootstrap retains ownership of the Theme, but grants you the license on these terms. This license is between the Start Bootstrap and you, the purchaser. Start Bootstrap LLC is the grantor of the license."), p.Ob(), p.Ob(), p.Mb()), 2 & e && (p.xb(3), p.lc("icon", p.oc(1, Vt))) }

            function zt(e, t) { 1 & e && (p.Nb(0), p.Pb(1, "h2", 18), p.Pb(2, "div", 19), p.Kb(3, "fa-icon", 20), p.Ob(), p.Fc(4, " Startup License "), p.Ob(), p.Pb(5, "p"), p.Fc(6, "If your are creating a single end product, deployed to a single domain, that end users must pay to access, with no more than 5 team members working on the project, then the Startup License is required. With the Startup License, you can also redistribute the modified End Product as part of an application (for example, a software package), but you cannot redistribute the Theme \u201cas is\u201d as a stock asset on its own or as part of a bundle of products."), p.Ob(), p.Pb(7, "p"), p.Fc(8, "If you have more than 15 team members accessing the project files, or you are creating multiple End Products please contact us about custom commerical licensing."), p.Ob(), p.Pb(9, "ol"), p.Pb(10, "li", 36), p.Fc(11, "The Startup License grants the purchaser a non-exclusive, non-transferrable, and ongoing right to make use of the Theme."), p.Ob(), p.Pb(12, "li", 36), p.Fc(13, "You are licensed to use the Theme to create a single End Product for personal use, or for a client."), p.Ob(), p.Pb(14, "li", 36), p.Fc(15, "The End Product is a customized implementation of the Theme requiring the application of skill and effort"), p.Ob(), p.Pb(16, "li", 36), p.Fc(17, "The Theme may be used no more than (5) developers or team members working to create the End Product."), p.Ob(), p.Pb(18, "li", 36), p.Fc(19, "The End Product you create may be accessed by multiple End Users, either for free or for a fee."), p.Ob(), p.Pb(20, "li", 36), p.Fc(21, " With the Startup License, you can: "), p.Pb(22, "ol"), p.Pb(23, "li", 36), p.Fc(24, "Use the Theme to create one single End Product for personal use or for a client. You can transfer the single End Product to your client for any fee. This license is then transferred to your client."), p.Ob(), p.Pb(25, "li", 36), p.Fc(26, "Create an End Product where End Users must pay in order to access."), p.Ob(), p.Pb(27, "li", 36), p.Fc(28, "Have up to 5 team members working on the End Product that is built with the Theme's files"), p.Ob(), p.Ob(), p.Ob(), p.Pb(29, "li", 36), p.Fc(30, " With the Startup License, you cannot: "), p.Pb(31, "ol"), p.Pb(32, "li", 36), p.Fc(33, "Create multiple End Products using the Theme."), p.Ob(), p.Pb(34, "li", 36), p.Fc(35, "Have more than 5 team members working on the End Product that is built with the Theme's files"), p.Ob(), p.Pb(36, "li", 36), p.Fc(37, "Redistribute the Theme \u201cas is\u201d by itself or as part of a bundle of products."), p.Ob(), p.Pb(38, "li", 36), p.Fc(39, "Redistribute the modified End Product."), p.Ob(), p.Pb(40, "li", 36), p.Fc(41, "Redistribute the Theme \u201cas is\u201d, or the modified End Product, as part of an \u201con demand\u201d product or service (like a \u201csite generator\u201d or \u201ccreate your own\u201d website application)."), p.Ob(), p.Ob(), p.Ob(), p.Pb(42, "li", 36), p.Fc(43, "Any components included with the Theme which includes, but is not limited to: graphics, images, code, or any other content, retains its original license. The author of the Theme will document any and all licensed components included with the Theme. You are responsible for adhering to the original license of any additional licensed components included with the Theme."), p.Ob(), p.Pb(44, "li", 36), p.Fc(45, "Start Bootstrap retains ownership of the Theme, but grants you the license on these terms. This license is between the Start Bootstrap and you, the purchaser. Start Bootstrap LLC is the grantor of the license."), p.Ob(), p.Ob(), p.Mb()), 2 & e && (p.xb(3), p.lc("icon", p.oc(1, Vt))) }

            function Qt(e, t) { 1 & e && (p.Nb(0), p.Pb(1, "h2", 18), p.Pb(2, "div", 19), p.Kb(3, "fa-icon", 20), p.Ob(), p.Fc(4, " Enterprise License "), p.Ob(), p.Pb(5, "p"), p.Fc(6, "If your are creating a single end product, deployed to a single domain, that end users must pay to access, with no more than 15 team members working on the project, then the Enterprise License is required. With the Enterprise License, you can also redistribute the modified End Product as part of an application (for example, a software package), but you cannot redistribute the Theme \u201cas is\u201d as a stock asset on its own or as part of a bundle of products."), p.Ob(), p.Pb(7, "p"), p.Fc(8, "If you have more than 15 team members accessing the project files, or you are creating multiple End Products please contact us about custom commerical licensing."), p.Ob(), p.Pb(9, "ol"), p.Pb(10, "li", 36), p.Fc(11, "The Enterprise License grants the purchaser a non-exclusive, non-transferrable, and ongoing right to make use of the Theme."), p.Ob(), p.Pb(12, "li", 36), p.Fc(13, "You are licensed to use the Theme to create a single End Product for personal use, or for a client."), p.Ob(), p.Pb(14, "li", 36), p.Fc(15, "The End Product is a customized implementation of the Theme requiring the application of skill and effort"), p.Ob(), p.Pb(16, "li", 36), p.Fc(17, "The Theme may be used no more than (15) developers or team members working to create the End Product."), p.Ob(), p.Pb(18, "li", 36), p.Fc(19, "The End Product you create may be accessed by multiple End Users, either for free or for a fee."), p.Ob(), p.Pb(20, "li", 36), p.Fc(21, " With the Enterprise License, you can: "), p.Pb(22, "ol"), p.Pb(23, "li", 36), p.Fc(24, "Use the Theme to create one single End Product for personal use or for a client. You can transfer the single End Product to your client for any fee. This license is then transferred to your client."), p.Ob(), p.Pb(25, "li", 36), p.Fc(26, "Create an End Product where End Users must pay in order to access."), p.Ob(), p.Pb(27, "li", 36), p.Fc(28, "Have up to 15 team members working on the End Product that is built with the Theme's files"), p.Ob(), p.Ob(), p.Ob(), p.Pb(29, "li", 36), p.Fc(30, " With the Enterprise License, you cannot: "), p.Pb(31, "ol"), p.Pb(32, "li", 36), p.Fc(33, "Create multiple End Products using the Theme."), p.Ob(), p.Pb(34, "li", 36), p.Fc(35, "Have more than 15 team members working on the End Product that is built with the Theme's files"), p.Ob(), p.Pb(36, "li", 36), p.Fc(37, "Redistribute the Theme \u201cas is\u201d by itself or as part of a bundle of products."), p.Ob(), p.Pb(38, "li", 36), p.Fc(39, "Redistribute the modified End Product."), p.Ob(), p.Pb(40, "li", 36), p.Fc(41, "Redistribute the Theme \u201cas is\u201d, or the modified End Product, as part of an \u201con demand\u201d product or service (like a \u201csite generator\u201d or \u201ccreate your own\u201d website application)."), p.Ob(), p.Ob(), p.Ob(), p.Pb(42, "li", 36), p.Fc(43, "Any components included with the Theme which includes, but is not limited to: graphics, images, code, or any other content, retains its original license. The author of the Theme will document any and all licensed components included with the Theme. You are responsible for adhering to the original license of any additional licensed components included with the Theme."), p.Ob(), p.Pb(44, "li", 36), p.Fc(45, "Start Bootstrap retains ownership of the Theme, but grants you the license on these terms. This license is between the Start Bootstrap and you, the purchaser. Start Bootstrap LLC is the grantor of the license."), p.Ob(), p.Ob(), p.Mb()), 2 & e && (p.xb(3), p.lc("icon", p.oc(1, Vt))) }
            const $t = function(e) { return { active: e } };
            let Zt = (() => {
                class e {
                    constructor(e, t) { this.route = e, this.changeDetectorRef = t, this.subscription = new F.a }
                    ngOnInit() {
                        this.subscription.add(this.route.params.subscribe(e => {
                            this.selectedLicense = void 0;
                            const t = e.licenseID;
                            t && this._isValidGrouping(t) && (this.selectedLicense = t), this.changeDetectorRef.detectChanges()
                        }))
                    }
                    ngOnDestroy() { this.subscription.unsubscribe() }
                    _isValidGrouping(e) { return !!["freelancer", "developer", "startup", "enterprise"].find(t => t === e) }
                }
                return e.\u0275fac = function(t) { return new(t || e)(p.Jb(i.a), p.Jb(p.h)) }, e.\u0275cmp = p.Db({
                    type: e,
                    selectors: [
                        ["sbw-licenses"]
                    ],
                    decls: 67,
                    vars: 24,
                    consts: [
                        ["sectionClasses", "mt-page-header pb-10 bg-white", "borderType", "angled", "borderClasses", "text-light"],
                        [1, "container", "pt-5"],
                        [1, "d-flex", "align-items-center"],
                        ["src", "assets/img/freepik/security-pana.svg", "alt", "", 1, "d-none", "d-sm-block", 2, "height", "4rem"],
                        [1, "ml-sm-3"],
                        [1, "lead", "mb-0"],
                        [1, "my-5"],
                        [1, "container"],
                        [1, "row", "justify-content-between"],
                        [1, "col-lg-3"],
                        [1, "nav", "flex-column", "nav-pills", "mb-5", "sticky-top"],
                        ["data-cy", "showGeneralInfoLink", "routerLink", "/licenses", 1, "nav-link", "py-3", "px-4", "mb-1", 3, "ngClass"],
                        ["data-cy", "showFreelancerLicenseLink", "routerLink", "/licenses/freelancer", 1, "nav-link", "py-3", "px-4", "mb-1", 3, "ngClass"],
                        ["data-cy", "showDeveloperLicenseLink", "routerLink", "/licenses/developer", 1, "nav-link", "py-3", "px-4", "mb-1", 3, "ngClass"],
                        ["data-cy", "showStartupLicenseLink", "routerLink", "/licenses/startup", 1, "nav-link", "py-3", "px-4", "mb-1", 3, "ngClass"],
                        ["data-cy", "showEnterpriseLicenseLink", "routerLink", "/licenses/enterprise", 1, "nav-link", "py-3", "px-4", "mb-1", 3, "ngClass"],
                        [1, "col-lg-9", "pl-lg-5"],
                        [4, "ngIf"],
                        [1, "d-flex", "align-items-center", "line-height-normal", "mb-4"],
                        [1, "icon-stack", "icon-stack-sm", "bg-primary", "text-white", "mr-2"],
                        [3, "icon"],
                        ["href", "mailto:support@startbootstrap.com"],
                        [1, "small", "font-italic"],
                        [1, "table-responsive"],
                        [1, "table", "table-bordered"],
                        ["scope", "row"],
                        [1, "card", "bg-blue-soft", "text-blue", "shadow-none", "mb-5"],
                        [1, "card-body"],
                        ["size", "3x", 1, "mr-4", 3, "icon"],
                        [1, "small"],
                        ["routerLink", "/knowledge-base", 1, "text-blue", "font-weight-700"],
                        [1, "mb-5"],
                        ["routerLink", "/licenses/freelancer"],
                        ["routerLink", "/licenses/developer"],
                        ["routerLink", "/licenses/startup"],
                        ["routerLink", "/licenses/enterprise"],
                        [1, "mb-3"]
                    ],
                    template: function(e, t) { 1 & e && (p.Pb(0, "sbpro-page-section", 0), p.Pb(1, "header"), p.Pb(2, "div", 1), p.Pb(3, "div", 2), p.Kb(4, "img", 3), p.Pb(5, "div", 4), p.Pb(6, "h1"), p.Fc(7, "Licenses"), p.Ob(), p.Pb(8, "p", 5), p.Fc(9, "Last updated: September 8, 2020"), p.Ob(), p.Ob(), p.Ob(), p.Kb(10, "hr", 6), p.Ob(), p.Ob(), p.Pb(11, "main"), p.Pb(12, "div", 7), p.Pb(13, "div", 8), p.Pb(14, "div", 9), p.Pb(15, "nav", 10), p.Pb(16, "a", 11), p.Fc(17, "General Info"), p.Ob(), p.Pb(18, "a", 12), p.Fc(19, "Freelancer License"), p.Ob(), p.Pb(20, "a", 13), p.Fc(21, "Developer License"), p.Ob(), p.Pb(22, "a", 14), p.Fc(23, "Startup License"), p.Ob(), p.Pb(24, "a", 15), p.Fc(25, "Enterprise License"), p.Ob(), p.Ob(), p.Ob(), p.Pb(26, "div", 16), p.Dc(27, Jt, 106, 4, "ng-container", 17), p.Dc(28, Wt, 44, 2, "ng-container", 17), p.Dc(29, Xt, 44, 2, "ng-container", 17), p.Dc(30, zt, 46, 2, "ng-container", 17), p.Dc(31, Qt, 46, 2, "ng-container", 17), p.Kb(32, "hr", 6), p.Pb(33, "h2", 18), p.Pb(34, "div", 19), p.Kb(35, "fa-icon", 20), p.Ob(), p.Fc(36, " Still Have Questions? "), p.Ob(), p.Pb(37, "p"), p.Fc(38, "Licensing can be confusing at times depending on what sort of project you are building. If you still aren\u2019t sure which license you need to purchase, please send details about your project to "), p.Pb(39, "a", 21), p.Fc(40, "support@startbootstrap.com "), p.Ob(), p.Fc(41, "and we will be happy to help answer any questions you might have!"), p.Ob(), p.Pb(42, "p", 22), p.Fc(43, "The above content is subject to change, and was last updated on September 3, 2020."), p.Ob(), p.Kb(44, "hr", 6), p.Pb(45, "h2", 18), p.Pb(46, "div", 19), p.Kb(47, "fa-icon", 20), p.Ob(), p.Fc(48, " Definitions "), p.Ob(), p.Pb(49, "div", 23), p.Pb(50, "table", 24), p.Pb(51, "tbody"), p.Pb(52, "tr"), p.Pb(53, "th", 25), p.Fc(54, "Theme"), p.Ob(), p.Pb(55, "td"), p.Fc(56, "Theme is the purchased digital work"), p.Ob(), p.Ob(), p.Pb(57, "tr"), p.Pb(58, "th", 25), p.Fc(59, "End Product"), p.Ob(), p.Pb(60, "td"), p.Fc(61, "End Product is a customized implementation of the Theme that requires an application of skill and effort that is deployed on a single Domain"), p.Ob(), p.Ob(), p.Pb(62, "tr"), p.Pb(63, "th", 25), p.Fc(64, "End User"), p.Ob(), p.Pb(65, "td"), p.Fc(66, "End User is a user of the End Product"), p.Ob(), p.Ob(), p.Ob(), p.Ob(), p.Ob(), p.Ob(), p.Ob(), p.Ob(), p.Ob(), p.Ob()), 2 & e && (p.xb(16), p.lc("ngClass", p.pc(12, $t, !t.selectedLicense)), p.xb(2), p.lc("ngClass", p.pc(14, $t, "freelancer" === t.selectedLicense)), p.xb(2), p.lc("ngClass", p.pc(16, $t, "developer" === t.selectedLicense)), p.xb(2), p.lc("ngClass", p.pc(18, $t, "startup" === t.selectedLicense)), p.xb(2), p.lc("ngClass", p.pc(20, $t, "enterprise" === t.selectedLicense)), p.xb(3), p.lc("ngIf", !t.selectedLicense), p.xb(1), p.lc("ngIf", "freelancer" === t.selectedLicense), p.xb(1), p.lc("ngIf", "developer" === t.selectedLicense), p.xb(1), p.lc("ngIf", "startup" === t.selectedLicense), p.xb(1), p.lc("ngIf", "enterprise" === t.selectedLicense), p.xb(4), p.lc("icon", p.oc(22, Vt)), p.xb(12), p.lc("icon", p.oc(23, Vt))) },
                    directives: [O.a, i.f, r.o, r.q, S.a],
                    styles: [".sticky-top[_ngcontent-%COMP%]{top:calc(93px + 1.5rem);font-size:.875em}"],
                    changeDetection: 0
                }), e
            })();

            function Yt(e, t) { 1 & e && (p.Pb(0, "span"), p.Fc(1, "View Product Details"), p.Ob()) }

            function eo(e, t) { 1 & e && (p.Pb(0, "span"), p.Fc(1, "Overview Page"), p.Ob()) }

            function to(e, t) {
                if (1 & e && (p.Pb(0, "div", 37), p.Fc(1), p.ec(2, "currency"), p.Ob()), 2 & e) {
                    const e = p.dc(5);
                    p.xb(1), p.Hc("Freelancer License \xb7 ", p.ic(2, 1, (null == e.product.pricingsMapped.freelancer ? null : e.product.pricingsMapped.freelancer.price) / 100, "USD", "symbol", "1.0"), "")
                }
            }

            function oo(e, t) {
                if (1 & e && (p.Pb(0, "div", 37), p.Fc(1), p.ec(2, "currency"), p.Ob()), 2 & e) {
                    const e = p.dc(5);
                    p.xb(1), p.Hc("Freelancer License \xb7 ", p.ic(2, 1, (null == e.product.pricingsMapped.freelancer ? null : e.product.pricingsMapped.freelancer.salePrice) / 100, "USD", "symbol", "1.0"), "")
                }
            }

            function io(e, t) {
                if (1 & e) {
                    const e = p.Qb();
                    p.Pb(0, "a", 28), p.Zb("click", function() { return p.vc(e), p.dc(4).changeLicense("freelancer") }), p.Pb(1, "div", 29), p.Dc(2, to, 3, 6, "div", 30), p.Dc(3, oo, 3, 6, "div", 30), p.Pb(4, "ul", 31), p.Pb(5, "li"), p.Fc(6, "1 user, 1 domain"), p.Ob(), p.Pb(7, "li"), p.Fc(8, "Free apps only"), p.Ob(), p.Pb(9, "li"), p.Fc(10, "HTML/CSS version only"), p.Ob(), p.Ob(), p.Pb(11, "div", 32), p.Fc(12, "Read the full "), p.Pb(13, "a", 36), p.Fc(14, "Freelancer License"), p.Ob(), p.Ob(), p.Ob(), p.Ob()
                }
                if (2 & e) {
                    const e = p.dc(4);
                    p.xb(2), p.lc("ngIf", !(null != e.product.pricingsMapped.freelancer && e.product.pricingsMapped.freelancer.salePrice)), p.xb(1), p.lc("ngIf", null == e.product.pricingsMapped.freelancer ? null : e.product.pricingsMapped.freelancer.salePrice)
                }
            }

            function ro(e, t) {
                if (1 & e && (p.Pb(0, "div", 37), p.Fc(1), p.ec(2, "currency"), p.Ob()), 2 & e) {
                    const e = p.dc(4);
                    p.xb(1), p.Hc("Developer License \xb7 ", p.ic(2, 1, (null == e.product.pricingsMapped.developer ? null : e.product.pricingsMapped.developer.price) / 100, "USD", "symbol", "1.0"), "")
                }
            }

            function no(e, t) {
                if (1 & e && (p.Pb(0, "div", 37), p.Fc(1), p.ec(2, "currency"), p.Ob()), 2 & e) {
                    const e = p.dc(4);
                    p.xb(1), p.Hc("Developer License \xb7 ", p.ic(2, 1, (null == e.product.pricingsMapped.developer ? null : e.product.pricingsMapped.developer.salePrice) / 100, "USD", "symbol", "1.0"), "")
                }
            }

            function so(e, t) {
                if (1 & e && (p.Pb(0, "div", 37), p.Fc(1), p.ec(2, "currency"), p.Ob()), 2 & e) {
                    const e = p.dc(4);
                    p.xb(1), p.Hc("Startup License \xb7 ", p.ic(2, 1, (null == e.product.pricingsMapped.startup ? null : e.product.pricingsMapped.startup.price) / 100, "USD", "symbol", "1.0"), "")
                }
            }

            function co(e, t) {
                if (1 & e && (p.Pb(0, "div", 37), p.Fc(1), p.ec(2, "currency"), p.Ob()), 2 & e) {
                    const e = p.dc(4);
                    p.xb(1), p.Hc("Startup License \xb7 ", p.ic(2, 1, (null == e.product.pricingsMapped.startup ? null : e.product.pricingsMapped.startup.salePrice) / 100, "USD", "symbol", "1.0"), "")
                }
            }

            function ao(e, t) {
                if (1 & e && (p.Pb(0, "div", 37), p.Fc(1), p.ec(2, "currency"), p.Ob()), 2 & e) {
                    const e = p.dc(4);
                    p.xb(1), p.Hc("Enterprise License \xb7 ", p.ic(2, 1, (null == e.product.pricingsMapped.enterprise ? null : e.product.pricingsMapped.enterprise.price) / 100, "USD", "symbol", "1.0"), "")
                }
            }

            function bo(e, t) {
                if (1 & e && (p.Pb(0, "div", 37), p.Fc(1), p.ec(2, "currency"), p.Ob()), 2 & e) {
                    const e = p.dc(4);
                    p.xb(1), p.Hc("Enterprise License \xb7 ", p.ic(2, 1, (null == e.product.pricingsMapped.enterprise ? null : e.product.pricingsMapped.enterprise.salePrice) / 100, "USD", "symbol", "1.0"), "")
                }
            }

            function lo(e, t) {
                if (1 & e) {
                    const e = p.Qb();
                    p.Pb(0, "sbpro-dropdown", 23), p.Pb(1, "div", 24), p.Fc(2), p.Ob(), p.Pb(3, "div", 25), p.Dc(4, io, 15, 2, "a", 26), p.Kb(5, "div", 27), p.Pb(6, "a", 28), p.Zb("click", function() { return p.vc(e), p.dc(3).changeLicense("developer") }), p.Pb(7, "div", 29), p.Dc(8, ro, 3, 6, "div", 30), p.Dc(9, no, 3, 6, "div", 30), p.Pb(10, "ul", 31), p.Pb(11, "li"), p.Fc(12, "1 user, 1 domain"), p.Ob(), p.Pb(13, "li"), p.Fc(14, "Free apps only"), p.Ob(), p.Ob(), p.Pb(15, "div", 32), p.Fc(16, "Read the full "), p.Pb(17, "a", 33), p.Fc(18, "Developer License"), p.Ob(), p.Ob(), p.Ob(), p.Ob(), p.Kb(19, "div", 27), p.Pb(20, "a", 28), p.Zb("click", function() { return p.vc(e), p.dc(3).changeLicense("startup") }), p.Pb(21, "div", 29), p.Dc(22, so, 3, 6, "div", 30), p.Dc(23, co, 3, 6, "div", 30), p.Pb(24, "ul", 31), p.Pb(25, "li"), p.Fc(26, "Up to 5 users, 1 domain"), p.Ob(), p.Pb(27, "li"), p.Fc(28, "Paid apps allowed"), p.Ob(), p.Ob(), p.Pb(29, "div", 32), p.Fc(30, "Read the full "), p.Pb(31, "a", 34), p.Fc(32, "Startup License"), p.Ob(), p.Ob(), p.Ob(), p.Ob(), p.Kb(33, "div", 27), p.Pb(34, "a", 28), p.Zb("click", function() { return p.vc(e), p.dc(3).changeLicense("enterprise") }), p.Pb(35, "div", 29), p.Dc(36, ao, 3, 6, "div", 30), p.Dc(37, bo, 3, 6, "div", 30), p.Pb(38, "ul", 31), p.Pb(39, "li"), p.Fc(40, "Up to 15 users, 1 domain"), p.Ob(), p.Pb(41, "li"), p.Fc(42, "Paid apps allowed"), p.Ob(), p.Ob(), p.Pb(43, "div", 32), p.Fc(44, "Read the full "), p.Pb(45, "a", 35), p.Fc(46, "Enterprise License"), p.Ob(), p.Ob(), p.Ob(), p.Ob(), p.Ob(), p.Ob()
                }
                if (2 & e) {
                    const e = p.dc(3);
                    p.xb(2), p.Gc(e.licenseText[e.selectedLicense]), p.xb(2), p.lc("ngIf", e.hasFreelancer), p.xb(4), p.lc("ngIf", !(null != e.product.pricingsMapped.developer && e.product.pricingsMapped.developer.salePrice)), p.xb(1), p.lc("ngIf", null == e.product.pricingsMapped.developer ? null : e.product.pricingsMapped.developer.salePrice), p.xb(13), p.lc("ngIf", !(null != e.product.pricingsMapped.startup && e.product.pricingsMapped.startup.salePrice)), p.xb(1), p.lc("ngIf", null == e.product.pricingsMapped.startup ? null : e.product.pricingsMapped.startup.salePrice), p.xb(13), p.lc("ngIf", !(null != e.product.pricingsMapped.enterprise && e.product.pricingsMapped.enterprise.salePrice)), p.xb(1), p.lc("ngIf", null == e.product.pricingsMapped.enterprise ? null : e.product.pricingsMapped.enterprise.salePrice)
                }
            }

            function po(e, t) {
                if (1 & e && (p.Pb(0, "span", 41), p.Fc(1), p.ec(2, "currency"), p.Ob()), 2 & e) {
                    const e = p.dc(4);
                    p.xb(1), p.Gc(p.ic(2, 1, (null == e.product.pricingsMapped[e.selectedLicense] ? null : e.product.pricingsMapped[e.selectedLicense].price) / 100, "USD", "symbol", "1.0"))
                }
            }

            function uo(e, t) {
                if (1 & e && (p.Pb(0, "span", 41), p.Fc(1), p.ec(2, "currency"), p.Ob()), 2 & e) {
                    const e = p.dc(4);
                    p.xb(1), p.Gc(p.ic(2, 1, (null == e.product.pricingsMapped[e.selectedLicense] ? null : e.product.pricingsMapped[e.selectedLicense].salePrice) / 100, "USD", "symbol", "1.0"))
                }
            }
            const ho = function() { return ["fad", "shopping-cart"] };

            function mo(e, t) {
                if (1 & e) {
                    const e = p.Qb();
                    p.Pb(0, "button", 38), p.Zb("click", function() { return p.vc(e), p.dc(3).buyNow() }), p.Kb(1, "fa-icon", 39), p.Fc(2, "Buy Now \xb7 "), p.Dc(3, po, 3, 6, "span", 40), p.Dc(4, uo, 3, 6, "span", 40), p.Ob()
                }
                if (2 & e) {
                    const e = p.dc(3);
                    p.xb(1), p.lc("icon", p.oc(3, ho)), p.xb(2), p.lc("ngIf", !(null != e.product.pricingsMapped[e.selectedLicense] && e.product.pricingsMapped[e.selectedLicense].salePrice)), p.xb(1), p.lc("ngIf", null == e.product.pricingsMapped[e.selectedLicense] ? null : e.product.pricingsMapped[e.selectedLicense].salePrice)
                }
            }
            const go = function() { return ["fab", "github"] };

            function fo(e, t) {
                if (1 & e && (p.Pb(0, "a", 42), p.Kb(1, "fa-icon", 43), p.Ob()), 2 & e) {
                    const e = p.dc(3);
                    p.lc("href", "https://github.com/StartBootstrap/startbootstrap-" + e.product.slug, p.yc), p.xb(1), p.lc("icon", p.oc(2, go))
                }
            }
            const Po = function() { return ["fad", "download"] };

            function vo(e, t) {
                if (1 & e) {
                    const e = p.Qb();
                    p.Pb(0, "a", 44), p.Zb("click", function() { return p.vc(e), p.dc(3).download() }), p.Kb(1, "fa-icon", 39), p.Fc(2, "Free Download"), p.Ob()
                }
                if (2 & e) {
                    const e = p.dc(3);
                    p.lc("href", "https://github.com/StartBootstrap/startbootstrap-" + e.product.slug + "/archive/gh-pages.zip", p.yc), p.xb(1), p.lc("icon", p.oc(2, Po))
                }
            }
            const yo = function() { return ["fal", "arrow-left"] },
                Oo = function(e) { return { active: e } },
                wo = function() { return ["fal", "desktop"] },
                Fo = function() { return ["fal", "tablet"] },
                xo = function() { return ["fal", "mobile"] },
                ko = function() { return ["fal", "times"] };

            function So(e, t) {
                if (1 & e) {
                    const e = p.Qb();
                    p.Pb(0, "div", 4), p.Pb(1, "div", 5), p.Pb(2, "div", 6), p.Pb(3, "div", 7), p.Pb(4, "a", 8), p.Kb(5, "fa-icon", 9), p.Dc(6, Yt, 2, 0, "span", 10), p.Dc(7, eo, 2, 0, "span", 10), p.Ob(), p.Ob(), p.Pb(8, "div", 11), p.Pb(9, "div", 12), p.Pb(10, "button", 13), p.Zb("click", function() { return p.vc(e), p.dc(2).previewMode = "desktop" }), p.Kb(11, "fa-icon", 14), p.Ob(), p.Pb(12, "button", 15), p.Zb("click", function() { return p.vc(e), p.dc(2).previewMode = "tablet" }), p.Kb(13, "fa-icon", 14), p.Ob(), p.Pb(14, "button", 16), p.Zb("click", function() { return p.vc(e), p.dc(2).previewMode = "mobile" }), p.Kb(15, "fa-icon", 14), p.Ob(), p.Ob(), p.Ob(), p.Pb(16, "div", 17), p.Dc(17, lo, 47, 8, "sbpro-dropdown", 18), p.Dc(18, mo, 5, 4, "button", 19), p.Dc(19, fo, 2, 3, "a", 20), p.Dc(20, vo, 3, 3, "a", 21), p.Pb(21, "button", 22), p.Zb("click", function() { return p.vc(e), p.dc(2).previewBarVisible = !1 }), p.Kb(22, "fa-icon", 14), p.Ob(), p.Ob(), p.Ob(), p.Ob(), p.Ob()
                }
                if (2 & e) {
                    const e = p.dc(2);
                    p.xb(4), p.lc("routerLink", e.productDetailsLink), p.xb(1), p.lc("icon", p.oc(15, yo)), p.xb(1), p.lc("ngIf", !e.product.free), p.xb(1), p.lc("ngIf", e.product.free), p.xb(3), p.lc("ngClass", p.pc(16, Oo, "desktop" === e.previewMode)), p.xb(1), p.lc("icon", p.oc(18, wo)), p.xb(1), p.lc("ngClass", p.pc(19, Oo, "tablet" === e.previewMode)), p.xb(1), p.lc("icon", p.oc(21, Fo)), p.xb(1), p.lc("ngClass", p.pc(22, Oo, "mobile" === e.previewMode)), p.xb(1), p.lc("icon", p.oc(24, xo)), p.xb(2), p.lc("ngIf", !e.product.free), p.xb(1), p.lc("ngIf", !e.product.free), p.xb(1), p.lc("ngIf", e.product.free), p.xb(1), p.lc("ngIf", e.product.free), p.xb(2), p.lc("icon", p.oc(25, ko))
                }
            }
            const Bo = function(e, t, o) { return { "iframe-preview-mobile": e, "iframe-preview-tablet": t, "iframe-preview-full": o } };

            function Do(e, t) {
                if (1 & e && (p.Pb(0, "div", 1), p.Dc(1, So, 23, 26, "div", 2), p.Kb(2, "iframe", 3), p.ec(3, "safe"), p.Ob()), 2 & e) {
                    const e = p.dc();
                    p.xb(1), p.lc("ngIf", e.previewBarVisible), p.xb(1), p.lc("src", p.hc(3, 3, e.product.livePreviewLink, "resourceURL", "NONE"), p.xc)("ngClass", p.rc(7, Bo, "mobile" === e.previewMode, "tablet" === e.previewMode, !e.previewBarVisible))
                }
            }
            let Io = (() => {
                class e {
                    constructor(e, t, o, i, r, n, s, c) { this.route = e, this.productsService = t, this.changeDetectorRef = o, this.router = i, this.orderService = r, this.analyticsService = n, this.generalService = s, this.toastService = c, this.subscription = new F.a, this.previewMode = "desktop", this.selectedLicense = x.LicenseType.freelancer, this.hasFreelancer = !1, this.licenseText = { freelancer: "Freelancer License", developer: "Developer License", startup: "Startup License", enterprise: "Enterprise License" }, this.previewBarVisible = !0, this.hasSeenPromo = !1 }
                    ngOnInit() {
                        this.subscription.add(Object(mt.b)([this.route.paramMap, this.productsService.products$]).subscribe(([e, t]) => {
                            const o = e.get("previewID"),
                                i = t.find(e => e.slug === o);
                            if (!i) return this.router.navigate(["/error/404"]);
                            if (this.productDetailsLink = `/${i.productType.toLowerCase()}/${i.slug}`, this.product = i, this.product.pricingsMapped.freelancer ? this.hasFreelancer = !0 : this.selectedLicense = x.LicenseType.developer, this.changeDetectorRef.detectChanges(), !this.hasSeenPromo && !this.product.free) {
                                this.hasSeenPromo = !0;
                                const e = 25e3;
                                setTimeout(() => { this.toastService.show(null, "Save10PopUp", { autohide: !1, closeOnClick: !1, classes: "toast-coupon", promoCategory: "preview_" + this.product.slug, promoDelay: e }) }, e)
                            }
                        }))
                    }
                    ngOnDestroy() { this.subscription.unsubscribe() }
                    changeLicense(e) { this.selectedLicense = e, this.changeDetectorRef.detectChanges() }
                    buyNow() {
                        const e = this.product.pricingsMapped[this.selectedLicense];
                        this.orderService.addToOrder(e), this.analyticsService.sendEventAddToCart(e, "Preview"), this.router.navigate(["/shop/checkout"])
                    }
                    download() { this.analyticsService.sendEventCustom("download", "FREE_DOWNLOAD", this.product.slug), this.generalService.downloaded$(this.product.id).subscribe() }
                }
                return e.\u0275fac = function(t) { return new(t || e)(p.Jb(i.a), p.Jb(u.c), p.Jb(p.h), p.Jb(i.d), p.Jb(h.l), p.Jb(h.a), p.Jb(h.h), p.Jb(h.r)) }, e.\u0275cmp = p.Db({
                    type: e,
                    selectors: [
                        ["sbw-preview"]
                    ],
                    decls: 1,
                    vars: 1,
                    consts: [
                        ["class", "preview-container", 4, "ngIf"],
                        [1, "preview-container"],
                        ["class", "preview-bar bg-white fixed-top py-2 border-bottom-primary", 4, "ngIf"],
                        ["width", "100%", 1, "iframe-preview", 3, "src", "ngClass"],
                        [1, "preview-bar", "bg-white", "fixed-top", "py-2", "border-bottom-primary"],
                        [1, "container-fluid", "h-100"],
                        [1, "row", "align-items-center", "justify-content-between", "h-100"],
                        [1, "col-auto", "col-lg"],
                        [1, "btn", "btn-transparent-dark", "btn-sm", 3, "routerLink"],
                        ["size", "sm", 1, "mr-1", 3, "icon"],
                        [4, "ngIf"],
                        [1, "col", "col-auto", "d-none", "d-xl-block"],
                        [1, "responsive-toggler", "justify-content-center"],
                        ["id", "desktopToggle", "placement", "bottom", "ngbTooltip", "Desktop Preview", 1, "btn", "btn-icon", "btn-transparent-dark", "mx-1", 3, "ngClass", "click"],
                        [3, "icon"],
                        ["id", "tabletToggle", "placement", "bottom", "ngbTooltip", "Tablet Preview", 1, "btn", "btn-icon", "btn-transparent-dark", "mx-1", 3, "ngClass", "click"],
                        ["id", "mobileToggle", "placement", "bottom", "ngbTooltip", "Mobile Preview", 1, "btn", "btn-icon", "btn-transparent-dark", "mx-1", 3, "ngClass", "click"],
                        [1, "col", "text-right"],
                        ["class", "dropdown-licenses d-none d-sm-inline-block", "dropdownStyle", "text", "background", "btn-transparent-dark btn-sm", 4, "ngIf"],
                        ["class", "btn btn-primary btn-sm font-weight-500 mr-2", 3, "click", 4, "ngIf"],
                        ["class", "btn btn-transparent-dark btn-sm mr-2", 3, "href", 4, "ngIf"],
                        ["class", "btn btn-primary-soft text-primary btn-sm d-none d-sm-inline-block mr-2", 3, "href", "click", 4, "ngIf"],
                        [1, "btn", "btn-transparent-dark", "btn-sm", "btn-icon", 3, "click"],
                        ["dropdownStyle", "text", "background", "btn-transparent-dark btn-sm", 1, "dropdown-licenses", "d-none", "d-sm-inline-block"],
                        [1, "dropdown-trigger"],
                        [1, "dropdown-items"],
                        ["class", "dropdown-item", 3, "click", 4, "ngIf"],
                        [1, "dropdown-divider"],
                        [1, "dropdown-item", 3, "click"],
                        [1, "d-flex", "flex-column", "py-2"],
                        ["class", "mb-2 font-weight-500", 4, "ngIf"],
                        [1, "mb-2", "features-list"],
                        [1, "text-xs", "text-gray-500"],
                        ["routerLink", "/licenses/developer"],
                        ["routerLink", "/licenses/startup"],
                        ["routerLink", "/licenses/enterprise"],
                        ["routerLink", "/licenses/freelancer"],
                        [1, "mb-2", "font-weight-500"],
                        [1, "btn", "btn-primary", "btn-sm", "font-weight-500", "mr-2", 3, "click"],
                        [1, "mr-1", 3, "icon"],
                        ["class", "font-weight-700", 4, "ngIf"],
                        [1, "font-weight-700"],
                        [1, "btn", "btn-transparent-dark", "btn-sm", "mr-2", 3, "href"],
                        [1, "text-github", 3, "icon"],
                        [1, "btn", "btn-primary-soft", "text-primary", "btn-sm", "d-none", "d-sm-inline-block", "mr-2", 3, "href", "click"]
                    ],
                    template: function(e, t) { 1 & e && p.Dc(0, Do, 4, 11, "div", 0), 2 & e && p.lc("ngIf", t.product) },
                    directives: [r.q, r.o, i.f, S.a, k.m, T],
                    pipes: [oe.a, r.d],
                    styles: [".preview-container[_ngcontent-%COMP%]{height:100vh;background-color:#212832}.preview-bar[_ngcontent-%COMP%]{height:63px}.preview-bar[_ngcontent-%COMP%]   .responsive-toggler[_ngcontent-%COMP%]{display:flex}.preview-bar[_ngcontent-%COMP%]   .responsive-toggler.active[_ngcontent-%COMP%]{color:#3A871F}.dropdown-licenses[_ngcontent-%COMP%]{display:inline-block}.dropdown-licenses[_ngcontent-%COMP%]   .features-list[_ngcontent-%COMP%]{color:#a7aeb8;font-size:.875em;padding-left:1rem}.iframe-preview[_ngcontent-%COMP%]{position:absolute;height:calc(100% - 63px);width:100%;border:none;margin-top:63px}.iframe-preview-full[_ngcontent-%COMP%]{height:100%!important;margin-top:0!important}.iframe-preview-mobile[_ngcontent-%COMP%]{width:375px;left:50%;transform:translateX(-50%)}.iframe-preview-tablet[_ngcontent-%COMP%]{width:768px;left:50%;transform:translateX(-50%)}.border-bottom-primary[_ngcontent-%COMP%]{border-bottom:3px solid #c5ccd6}"],
                    changeDetection: 0
                }), e
            })();
            const To = function() { return ["fal", "arrow-right"] };
            let Co = (() => {
                class e {
                    constructor() {}
                    ngOnInit() {}
                }
                return e.\u0275fac = function(t) { return new(t || e) }, e.\u0275cmp = p.Db({
                    type: e,
                    selectors: [
                        ["sbw-privacy-policy"]
                    ],
                    decls: 127,
                    vars: 18,
                    consts: [
                        ["sectionClasses", "mt-page-header pb-5 bg-white", "borderType", "angled", "borderClasses", "text-light"],
                        [1, "container", "py-5"],
                        [1, "lead"],
                        [1, "my-5"],
                        [1, "row"],
                        [1, "col-lg-8"],
                        [1, "d-flex", "align-items-center", "line-height-normal", "mb-4"],
                        [1, "icon-stack", "icon-stack-sm", "bg-primary", "text-white", "mr-2"],
                        [3, "icon"],
                        [1, "col-lg-4", "d-none", "d-lg-block"],
                        ["src", "assets/img/freepik/endpoint-pana.svg", "alt", "", 1, "img-fluid"]
                    ],
                    template: function(e, t) { 1 & e && (p.Pb(0, "sbpro-page-section", 0), p.Pb(1, "header"), p.Pb(2, "div", 1), p.Pb(3, "h1"), p.Fc(4, "Privacy Policy"), p.Ob(), p.Pb(5, "p", 2), p.Fc(6, "Last updated: August 2020"), p.Ob(), p.Kb(7, "hr", 3), p.Pb(8, "div", 4), p.Pb(9, "div", 5), p.Pb(10, "h2", 6), p.Pb(11, "div", 7), p.Kb(12, "fa-icon", 8), p.Ob(), p.Fc(13, " Who we are "), p.Ob(), p.Pb(14, "p"), p.Fc(15, "Our website address is https://startbootstrap.com."), p.Ob(), p.Kb(16, "hr", 3), p.Pb(17, "h2", 6), p.Pb(18, "div", 7), p.Kb(19, "fa-icon", 8), p.Ob(), p.Fc(20, " What personal data we collect and why we collect it "), p.Ob(), p.Pb(21, "h3"), p.Fc(22, "Comments"), p.Ob(), p.Pb(23, "p"), p.Fc(24, "When visitors leave comments on the site we collect the data shown in the comments form, and also the visitor\u2019s IP address and browser user agent string to help spam detection."), p.Ob(), p.Pb(25, "h3"), p.Fc(26, "Cookies"), p.Ob(), p.Pb(27, "p"), p.Fc(28, "A cookie is a file containing an identifier (a string of letters and numbers) that is sent by a web server to a web browser and is stored by the browser. The identifier is then sent back to the server each time the browser requests a page from the server. Our website uses cookies. By using our website and agreeing to this policy, you consent to our use of cookies in accordance with the terms of this policy."), p.Ob(), p.Pb(29, "p"), p.Fc(30, "We use session cookies to personalize the website for each user."), p.Ob(), p.Pb(31, "p"), p.Fc(32, "We use Google Analytics to analyze the use of our website. Our analytics service provider generates statistical and other information about website use by means of cookies. Our analytics service provider\u2019s privacy policy is available at: http://www.google.com/policies/privacy/."), p.Ob(), p.Pb(33, "p"), p.Fc(34, "Deleting cookies may have a negative impact on the usability of the site. If you block cookies, you will not be able to use all the features on our website."), p.Ob(), p.Pb(35, "h3"), p.Fc(36, "Embedded content from other websites"), p.Ob(), p.Pb(37, "p"), p.Fc(38, "Pages on this site may include embedded content (e.g. snippets from JS Fiddle, Disqus comments, etc.). Embedded content from other websites behaves in the exact same way as if the visitor has visited the other website."), p.Ob(), p.Pb(39, "p"), p.Fc(40, "These websites may collect data about you, use cookies, embed additional third-party tracking, and monitor your interaction with that embedded content, including tracking your interaction with the embedded content if you have an account and are logged in to that website."), p.Ob(), p.Pb(41, "h3"), p.Fc(42, "Analytics"), p.Ob(), p.Pb(43, "p"), p.Fc(44, "Start Bootstrap uses cookies from third party partners such as Facebook Pixel and Google Analytics for marketing and data evaluation purposes. These cookies allow us to target potential customers with promotional material related to Start Bootstrap. We may share the data collected by third party partners in order to better target advertisements and other content that has been customized to you. The data collected also allows Start Bootstrap to observe user behavior and trends to help us make strategic decisions regarding the content and operation of this website."), p.Ob(), p.Kb(45, "hr", 3), p.Pb(46, "h2", 6), p.Pb(47, "div", 7), p.Kb(48, "fa-icon", 8), p.Ob(), p.Fc(49, " Who we share your data with "), p.Ob(), p.Pb(50, "p"), p.Fc(51, "At times, we may share data collected on this website with third party advertising partners like Google Ads or Facebook in order to re-target and target potential customers."), p.Ob(), p.Kb(52, "hr", 3), p.Pb(53, "h2", 6), p.Pb(54, "div", 7), p.Kb(55, "fa-icon", 8), p.Ob(), p.Fc(56, " We collect information about you during the checkout process on our store. "), p.Ob(), p.Pb(57, "h3"), p.Fc(58, "While you visit our site, we\u2019ll track:"), p.Ob(), p.Pb(59, "p"), p.Fc(60, "Products and pages you\u2019ve viewed: we\u2019ll use this to, for example, show you products you\u2019ve recently viewed."), p.Ob(), p.Pb(61, "p"), p.Fc(62, "We\u2019ll also use cookies to keep track of cart contents while you\u2019re browsing our site."), p.Ob(), p.Pb(63, "p"), p.Fc(64, "When you purchase from us, we\u2019ll ask you to provide information including your name, email address, credit card/payment details, and optional account information. We\u2019ll use this information for purposes, such as, to:"), p.Ob(), p.Pb(65, "ul"), p.Pb(66, "li"), p.Fc(67, "Send you information about your account and order"), p.Ob(), p.Pb(68, "li"), p.Fc(69, "Respond to your requests, including customer support"), p.Ob(), p.Pb(70, "li"), p.Fc(71, "Process payments and prevent fraud"), p.Ob(), p.Pb(72, "li"), p.Fc(73, "Set up your account to allow you future access to your purchases"), p.Ob(), p.Pb(74, "li"), p.Fc(75, "Comply with any legal obligations we have, such as calculating taxes"), p.Ob(), p.Pb(76, "li"), p.Fc(77, "Improve our store offerings"), p.Ob(), p.Pb(78, "li"), p.Fc(79, "Send you marketing messages, if you choose to receive them"), p.Ob(), p.Pb(80, "li"), p.Fc(81, "If you create an account, we will store your name and email address, which will be used to populate the checkout for future orders."), p.Ob(), p.Ob(), p.Pb(82, "p"), p.Fc(83, "We generally store information about you for as long as we need the information for the purposes for which we collect and use it, and we are not legally required to continue to keep it. This includes your name, email address, and any other information provided."), p.Ob(), p.Pb(84, "p"), p.Fc(85, "We will also store comments or reviews, if you choose to leave them."), p.Ob(), p.Kb(86, "hr", 3), p.Pb(87, "h2", 6), p.Pb(88, "div", 7), p.Kb(89, "fa-icon", 8), p.Ob(), p.Fc(90, " Who on our team has access "), p.Ob(), p.Pb(91, "p"), p.Fc(92, "Members of our web development team have access to the information you provide us. For example, administrators can access order information like what was purchased and when it was purchased, and Customer information like your name, email address, and additional optional information. Our administrators have access to this information to help fulfill orders and provide you with support."), p.Ob(), p.Kb(93, "hr", 3), p.Pb(94, "h2", 6), p.Pb(95, "div", 7), p.Kb(96, "fa-icon", 8), p.Ob(), p.Fc(97, " Payments "), p.Ob(), p.Pb(98, "p"), p.Fc(99, "We accept payments through Stripe and PayPal. When processing payments, some of your data will be passed to Stripe or PayPal, including information required to process or support the payment, such as the purchase total and billing information."), p.Ob(), p.Pb(100, "p"), p.Fc(101, "Start Bootstrap does not process the payments made, and does not ever have access to your credit card information."), p.Ob(), p.Pb(102, "p"), p.Fc(103, "Please see the Stripe Privacy Policy or PayPal Privacy Policy for more details."), p.Ob(), p.Kb(104, "hr", 3), p.Pb(105, "h2", 6), p.Pb(106, "div", 7), p.Kb(107, "fa-icon", 8), p.Ob(), p.Fc(108, " How long we retain your data "), p.Ob(), p.Pb(109, "p"), p.Fc(110, "For users that register on our website, we store the personal information they provide during checkout when purchasing a product and in their user profile. All users can see, edit, or delete their personal information at any time. Website administrators can also see and edit that information."), p.Ob(), p.Kb(111, "hr", 3), p.Pb(112, "h2", 6), p.Pb(113, "div", 7), p.Kb(114, "fa-icon", 8), p.Ob(), p.Fc(115, " What rights you have over your data "), p.Ob(), p.Pb(116, "p"), p.Fc(117, "If you have an account on this site, or have left comments, you can request to receive a summary of personal data we hold about you, including any data you have provided to us. You can also request that we erase any personal data we hold about you. This does not include any data we are obliged to keep for administrative, legal, or security purposes."), p.Ob(), p.Kb(118, "hr", 3), p.Pb(119, "h2", 6), p.Pb(120, "div", 7), p.Kb(121, "fa-icon", 8), p.Ob(), p.Fc(122, " Where we send your data "), p.Ob(), p.Pb(123, "p"), p.Fc(124, "Data you provide during checkout is shared with payment processors, Stripe and PayPal. Usage data is shared with Google Analytics and Facebook Pixel, which we use to improve the experience of our website and products."), p.Ob(), p.Ob(), p.Pb(125, "div", 9), p.Kb(126, "img", 10), p.Ob(), p.Ob(), p.Ob(), p.Ob(), p.Ob()), 2 & e && (p.xb(12), p.lc("icon", p.oc(9, To)), p.xb(7), p.lc("icon", p.oc(10, To)), p.xb(29), p.lc("icon", p.oc(11, To)), p.xb(7), p.lc("icon", p.oc(12, To)), p.xb(34), p.lc("icon", p.oc(13, To)), p.xb(7), p.lc("icon", p.oc(14, To)), p.xb(11), p.lc("icon", p.oc(15, To)), p.xb(7), p.lc("icon", p.oc(16, To)), p.xb(7), p.lc("icon", p.oc(17, To))) },
                    directives: [O.a, S.a],
                    styles: [""],
                    changeDetection: 0
                }), e
            })();
            var Lo = o("VZGA");
            const Ko = function() { return ["fad", "download"] };

            function Mo(e, t) {
                if (1 & e) {
                    const e = p.Qb();
                    p.Pb(0, "div", 43), p.Pb(1, "a", 44), p.Zb("click", function() { return p.vc(e), p.dc().download() }), p.Kb(2, "fa-icon", 10), p.Fc(3, "Free Download"), p.Ob(), p.Ob()
                }
                if (2 & e) {
                    const e = p.dc();
                    p.xb(1), p.lc("href", e.gitURLBase + "/archive/gh-pages.zip", p.yc), p.xb(1), p.lc("icon", p.oc(2, Ko))
                }
            }
            const Eo = function() { return ["fad", "edit"] };

            function Ao(e, t) { 1 & e && (p.Pb(0, "div", 43), p.Pb(1, "a", 45), p.Kb(2, "fa-icon", 10), p.Fc(3, "Edit in Builder"), p.Ob(), p.Ob()), 2 & e && (p.xb(2), p.lc("icon", p.oc(1, Eo))) }

            function No(e, t) { 1 & e && (p.Nb(0), p.Pb(1, "div", 28), p.Pb(2, "div", 29), p.Fc(3, "Downloaded"), p.Ob(), p.Pb(4, "div"), p.Kb(5, "fa-icon", 10), p.Fc(6, "X,XXX"), p.Ob(), p.Ob(), p.Kb(7, "hr"), p.Pb(8, "div", 28), p.Pb(9, "div", 29), p.Fc(10, "Released"), p.Ob(), p.Pb(11, "div"), p.Fc(12, "XXX XX, XXXX"), p.Ob(), p.Ob(), p.Kb(13, "hr"), p.Pb(14, "div", 28), p.Pb(15, "div", 29), p.Fc(16, "Last Update"), p.Ob(), p.Pb(17, "div"), p.Fc(18, "X XXXX ago"), p.Ob(), p.Ob(), p.Kb(19, "hr"), p.Pb(20, "div", 28), p.Pb(21, "div", 29), p.Fc(22, "Product Version"), p.Ob(), p.Pb(23, "div"), p.Fc(24, "X.X.X"), p.Ob(), p.Ob(), p.Kb(25, "hr"), p.Pb(26, "div", 28), p.Pb(27, "div", 29), p.Fc(28, "Bootstrap Version"), p.Ob(), p.Pb(29, "div"), p.Fc(30, "X.X.X"), p.Ob(), p.Ob(), p.Mb()), 2 & e && (p.xb(5), p.lc("icon", p.oc(1, Ko))) }

            function jo(e, t) {
                if (1 & e && (p.Nb(0), p.Pb(1, "div", 28), p.Pb(2, "div", 29), p.Fc(3, "Downloaded"), p.Ob(), p.Pb(4, "div"), p.Kb(5, "fa-icon", 10), p.Fc(6), p.ec(7, "number"), p.Ob(), p.Ob(), p.Kb(8, "hr"), p.Pb(9, "div", 28), p.Pb(10, "div", 29), p.Fc(11, "Released"), p.Ob(), p.Pb(12, "div"), p.Fc(13), p.ec(14, "date"), p.Ob(), p.Ob(), p.Kb(15, "hr"), p.Pb(16, "div", 28), p.Pb(17, "div", 29), p.Fc(18, "Last Update"), p.Ob(), p.Pb(19, "div"), p.Fc(20), p.ec(21, "formatDistanceToNow"), p.Ob(), p.Ob(), p.Kb(22, "hr"), p.Pb(23, "div", 28), p.Pb(24, "div", 29), p.Fc(25, "Product Version"), p.Ob(), p.Pb(26, "div"), p.Fc(27), p.Ob(), p.Ob(), p.Kb(28, "hr"), p.Pb(29, "div", 28), p.Pb(30, "div", 29), p.Fc(31, "Bootstrap Version"), p.Ob(), p.Pb(32, "div"), p.Fc(33), p.Ob(), p.Ob(), p.Mb()), 2 & e) {
                    const e = p.dc();
                    p.xb(5), p.lc("icon", p.oc(14, Ko)), p.xb(1), p.Gc(p.hc(7, 6, e.product.downloadCount, "1.0", "en-US")), p.xb(7), p.Gc(p.fc(14, 10, e.product.releasedDate)), p.xb(7), p.Hc("", p.fc(21, 12, e.product.updatedDate), " ago"), p.xb(7), p.Gc(e.product.productVersion), p.xb(6), p.Gc(e.product.bootstrapVersion)
                }
            }
            const Ro = function() { return ["far", "check"] },
                Uo = function() { return ["fad", "arrow-alt-circle-up"] };

            function qo(e, t) {
                if (1 & e) {
                    const e = p.Qb();
                    p.Pb(0, "div"), p.Pb(1, "div", 26), p.Pb(2, "div", 27), p.Pb(3, "strong"), p.Fc(4, "Need something more?"), p.Ob(), p.Pb(5, "div", 46), p.Fc(6, "Try SB Admin Pro!"), p.Ob(), p.Pb(7, "div", 47), p.Pb(8, "a", 48), p.Pb(9, "picture"), p.Kb(10, "source", 49), p.Kb(11, "source", 50), p.Kb(12, "img", 51), p.Ob(), p.Ob(), p.Ob(), p.Pb(13, "div", 52), p.Pb(14, "div", 53), p.Kb(15, "img", 54), p.Ob(), p.Pb(16, "div", 55), p.Pb(17, "div", 56), p.Pb(18, "strong"), p.Fc(19, "Pro Features Include:"), p.Ob(), p.Ob(), p.Pb(20, "ul", 57), p.Pb(21, "li"), p.Kb(22, "fa-icon", 58), p.Fc(23, "Full Documentation"), p.Ob(), p.Pb(24, "li"), p.Kb(25, "fa-icon", 58), p.Fc(26, "Email Support"), p.Ob(), p.Pb(27, "li"), p.Kb(28, "fa-icon", 58), p.Fc(29, "More Components & Features"), p.Ob(), p.Pb(30, "li"), p.Kb(31, "fa-icon", 58), p.Fc(32, "More Layouts & Page Examples"), p.Ob(), p.Ob(), p.Ob(), p.Ob(), p.Pb(33, "a", 59), p.Zb("click", function() { return p.vc(e), p.dc().upgradeToPro("ProUpgradeFreeThemeStickyAdmin") }), p.Kb(34, "fa-icon", 10), p.Fc(35, "Try SB Admin Pro!"), p.Ob(), p.Ob(), p.Ob(), p.Ob()
                }
                if (2 & e) {
                    const e = p.dc();
                    p.xb(22), p.lc("icon", p.oc(6, Ro)), p.xb(3), p.lc("icon", p.oc(7, Ro)), p.xb(3), p.lc("icon", p.oc(8, Ro)), p.xb(3), p.lc("icon", p.oc(9, Ro)), p.xb(2), p.lc("slug", e.product.slug), p.xb(1), p.lc("icon", p.oc(10, Uo))
                }
            }

            function Go(e, t) {
                if (1 & e) {
                    const e = p.Qb();
                    p.Pb(0, "div"), p.Pb(1, "div", 26), p.Pb(2, "div", 27), p.Pb(3, "strong"), p.Fc(4, "Need something more?"), p.Ob(), p.Pb(5, "div", 46), p.Fc(6, "Try SB Admin Pro Angular!"), p.Ob(), p.Pb(7, "div", 47), p.Pb(8, "a", 60), p.Pb(9, "picture"), p.Kb(10, "source", 61), p.Kb(11, "source", 62), p.Kb(12, "img", 63), p.Ob(), p.Ob(), p.Ob(), p.Pb(13, "div", 52), p.Pb(14, "div", 53), p.Kb(15, "img", 54), p.Ob(), p.Pb(16, "div", 55), p.Pb(17, "div", 56), p.Pb(18, "strong"), p.Fc(19, "Pro Features Include:"), p.Ob(), p.Ob(), p.Pb(20, "ul", 57), p.Pb(21, "li"), p.Kb(22, "fa-icon", 58), p.Fc(23, "Full Documentation"), p.Ob(), p.Pb(24, "li"), p.Kb(25, "fa-icon", 58), p.Fc(26, "Email Support"), p.Ob(), p.Pb(27, "li"), p.Kb(28, "fa-icon", 58), p.Fc(29, "More Components & Features"), p.Ob(), p.Pb(30, "li"), p.Kb(31, "fa-icon", 58), p.Fc(32, "More Layouts & Page Examples"), p.Ob(), p.Ob(), p.Ob(), p.Ob(), p.Pb(33, "a", 64), p.Zb("click", function() { return p.vc(e), p.dc().upgradeToPro("ProUpgradeFreeThemeStickyAdminAngular") }), p.Kb(34, "fa-icon", 10), p.Fc(35, "Try SB Admin Pro Angular!"), p.Ob(), p.Ob(), p.Ob(), p.Ob()
                }
                if (2 & e) {
                    const e = p.dc();
                    p.xb(22), p.lc("icon", p.oc(6, Ro)), p.xb(3), p.lc("icon", p.oc(7, Ro)), p.xb(3), p.lc("icon", p.oc(8, Ro)), p.xb(3), p.lc("icon", p.oc(9, Ro)), p.xb(2), p.lc("slug", e.product.slug), p.xb(1), p.lc("icon", p.oc(10, Uo))
                }
            }

            function Ho(e, t) {
                if (1 & e) {
                    const e = p.Qb();
                    p.Pb(0, "div"), p.Pb(1, "div", 26), p.Pb(2, "div", 27), p.Pb(3, "strong"), p.Fc(4, "Need something more?"), p.Ob(), p.Pb(5, "div", 46), p.Fc(6, "Try SB UI Kit Pro!"), p.Ob(), p.Pb(7, "div", 47), p.Pb(8, "a", 65), p.Pb(9, "picture"), p.Kb(10, "source", 66), p.Kb(11, "source", 67), p.Kb(12, "img", 68), p.Ob(), p.Ob(), p.Ob(), p.Pb(13, "div", 52), p.Pb(14, "div", 53), p.Kb(15, "img", 54), p.Ob(), p.Pb(16, "div", 55), p.Pb(17, "div", 56), p.Pb(18, "strong"), p.Fc(19, "Pro Features Include:"), p.Ob(), p.Ob(), p.Pb(20, "ul", 57), p.Pb(21, "li"), p.Kb(22, "fa-icon", 58), p.Fc(23, "Full Documentation"), p.Ob(), p.Pb(24, "li"), p.Kb(25, "fa-icon", 58), p.Fc(26, "Email Support"), p.Ob(), p.Pb(27, "li"), p.Kb(28, "fa-icon", 58), p.Fc(29, "More Components & Features"), p.Ob(), p.Pb(30, "li"), p.Kb(31, "fa-icon", 58), p.Fc(32, "More Layouts & Page Examples"), p.Ob(), p.Ob(), p.Ob(), p.Ob(), p.Pb(33, "a", 69), p.Zb("click", function() { return p.vc(e), p.dc().upgradeToPro("ProUpgradeFreeThemeStickyUIKit") }), p.Kb(34, "fa-icon", 10), p.Fc(35, "Try SB UI Kit Pro!"), p.Ob(), p.Ob(), p.Ob(), p.Ob()
                }
                if (2 & e) {
                    const e = p.dc();
                    p.xb(22), p.lc("icon", p.oc(6, Ro)), p.xb(3), p.lc("icon", p.oc(7, Ro)), p.xb(3), p.lc("icon", p.oc(8, Ro)), p.xb(3), p.lc("icon", p.oc(9, Ro)), p.xb(2), p.lc("slug", e.product.slug), p.xb(1), p.lc("icon", p.oc(10, Uo))
                }
            }

            function _o(e, t) {
                if (1 & e) {
                    const e = p.Qb();
                    p.Pb(0, "div"), p.Pb(1, "div", 26), p.Pb(2, "div", 27), p.Pb(3, "strong"), p.Fc(4, "Need something more?"), p.Ob(), p.Pb(5, "div", 46), p.Fc(6, "Try SB UI Kit Pro Angular!"), p.Ob(), p.Pb(7, "div", 47), p.Pb(8, "a", 70), p.Pb(9, "picture"), p.Kb(10, "source", 71), p.Kb(11, "source", 72), p.Kb(12, "img", 73), p.Ob(), p.Ob(), p.Ob(), p.Pb(13, "div", 52), p.Pb(14, "div", 53), p.Kb(15, "img", 54), p.Ob(), p.Pb(16, "div", 55), p.Pb(17, "div", 56), p.Pb(18, "strong"), p.Fc(19, "Pro Features Include:"), p.Ob(), p.Ob(), p.Pb(20, "ul", 57), p.Pb(21, "li"), p.Kb(22, "fa-icon", 58), p.Fc(23, "Full Documentation"), p.Ob(), p.Pb(24, "li"), p.Kb(25, "fa-icon", 58), p.Fc(26, "Email Support"), p.Ob(), p.Pb(27, "li"), p.Kb(28, "fa-icon", 58), p.Fc(29, "More Components & Features"), p.Ob(), p.Pb(30, "li"), p.Kb(31, "fa-icon", 58), p.Fc(32, "More Layouts & Page Examples"), p.Ob(), p.Ob(), p.Ob(), p.Ob(), p.Pb(33, "a", 74), p.Zb("click", function() { return p.vc(e), p.dc().upgradeToPro("ProUpgradeFreeThemeStickyUIKitAngular") }), p.Kb(34, "fa-icon", 10), p.Fc(35, "Try SB UI Kit Pro Angular!"), p.Ob(), p.Ob(), p.Ob(), p.Ob()
                }
                if (2 & e) {
                    const e = p.dc();
                    p.xb(22), p.lc("icon", p.oc(6, Ro)), p.xb(3), p.lc("icon", p.oc(7, Ro)), p.xb(3), p.lc("icon", p.oc(8, Ro)), p.xb(3), p.lc("icon", p.oc(9, Ro)), p.xb(2), p.lc("slug", e.product.slug), p.xb(1), p.lc("icon", p.oc(10, Uo))
                }
            }
            const Vo = function() { return ["far", "times"] };

            function Jo(e, t) {
                if (1 & e) {
                    const e = p.Qb();
                    p.Pb(0, "div"), p.Pb(1, "div", 75), p.Pb(2, "div", 76), p.Pb(3, "table", 77), p.Pb(4, "thead"), p.Pb(5, "tr"), p.Kb(6, "th", 78), p.Pb(7, "th", 79), p.Fc(8), p.Kb(9, "br"), p.Pb(10, "div", 80), p.Fc(11, "(Free)"), p.Ob(), p.Ob(), p.Pb(12, "th", 79), p.Fc(13, " SB Admin Pro"), p.Kb(14, "br"), p.Pb(15, "div", 80), p.Fc(16, "(Pro)"), p.Ob(), p.Ob(), p.Ob(), p.Ob(), p.Pb(17, "tbody"), p.Pb(18, "tr"), p.Pb(19, "th", 81), p.Fc(20, "Custom & Extended Components"), p.Ob(), p.Pb(21, "td", 82), p.Fc(22, "5"), p.Ob(), p.Pb(23, "td", 82), p.Fc(24, "70+"), p.Ob(), p.Ob(), p.Pb(25, "tr"), p.Pb(26, "th", 81), p.Fc(27, "Custom CSS Utilities"), p.Ob(), p.Pb(28, "td", 82), p.Fc(29, "10"), p.Ob(), p.Pb(30, "td", 82), p.Fc(31, "100+"), p.Ob(), p.Ob(), p.Pb(32, "tr"), p.Pb(33, "th", 81), p.Fc(34, "Example Pages"), p.Ob(), p.Pb(35, "td", 82), p.Fc(36, "6"), p.Ob(), p.Pb(37, "td", 82), p.Fc(38, "30+"), p.Ob(), p.Ob(), p.Pb(39, "tr"), p.Pb(40, "th", 81), p.Fc(41, "Documentation"), p.Ob(), p.Pb(42, "td", 82), p.Kb(43, "fa-icon", 83), p.Ob(), p.Pb(44, "td", 82), p.Kb(45, "fa-icon", 84), p.Ob(), p.Ob(), p.Pb(46, "tr"), p.Pb(47, "th", 81), p.Fc(48, "Email Support"), p.Ob(), p.Pb(49, "td", 82), p.Kb(50, "fa-icon", 83), p.Ob(), p.Pb(51, "td", 82), p.Kb(52, "fa-icon", 84), p.Ob(), p.Ob(), p.Pb(53, "tr"), p.Pb(54, "th", 81), p.Fc(55, "Code Snippets"), p.Ob(), p.Pb(56, "td", 82), p.Kb(57, "fa-icon", 83), p.Ob(), p.Pb(58, "td", 82), p.Kb(59, "fa-icon", 84), p.Ob(), p.Ob(), p.Pb(60, "tr"), p.Pb(61, "th", 81), p.Fc(62, "Expanded Color System"), p.Ob(), p.Pb(63, "td", 82), p.Kb(64, "fa-icon", 83), p.Ob(), p.Pb(65, "td", 82), p.Kb(66, "fa-icon", 84), p.Ob(), p.Ob(), p.Pb(67, "tr"), p.Pb(68, "th", 81), p.Fc(69, "Sidebar Options"), p.Ob(), p.Pb(70, "td", 82), p.Fc(71, "Static Only"), p.Ob(), p.Pb(72, "td", 82), p.Fc(73, "Fixed and Static"), p.Ob(), p.Ob(), p.Ob(), p.Ob(), p.Ob(), p.Pb(74, "div", 85), p.Pb(75, "a", 86), p.Pb(76, "picture"), p.Kb(77, "source", 49), p.Kb(78, "source", 50), p.Kb(79, "img", 51), p.Ob(), p.Ob(), p.Ob(), p.Ob(), p.Pb(80, "div", 82), p.Pb(81, "a", 87), p.Zb("click", function() { return p.vc(e), p.dc().upgradeToPro("ProUpgradeFreeThemeBottomAdmin") }), p.Kb(82, "fa-icon", 10), p.Fc(83, "Preview SB Admin Pro!"), p.Ob(), p.Ob(), p.Ob()
                }
                if (2 & e) {
                    const e = p.dc();
                    p.xb(8), p.Hc(" ", e.product.displayName, ""), p.xb(35), p.lc("icon", p.oc(11, Vo)), p.xb(2), p.lc("icon", p.oc(12, Ro)), p.xb(5), p.lc("icon", p.oc(13, Vo)), p.xb(2), p.lc("icon", p.oc(14, Ro)), p.xb(5), p.lc("icon", p.oc(15, Vo)), p.xb(2), p.lc("icon", p.oc(16, Ro)), p.xb(5), p.lc("icon", p.oc(17, Vo)), p.xb(2), p.lc("icon", p.oc(18, Ro)), p.xb(15), p.lc("slug", e.product.slug), p.xb(1), p.lc("icon", p.oc(19, Uo))
                }
            }

            function Wo(e, t) {
                if (1 & e) {
                    const e = p.Qb();
                    p.Pb(0, "div"), p.Pb(1, "div", 75), p.Pb(2, "div", 76), p.Pb(3, "table", 77), p.Pb(4, "thead"), p.Pb(5, "tr"), p.Kb(6, "th", 78), p.Pb(7, "th", 79), p.Fc(8), p.Kb(9, "br"), p.Pb(10, "div", 80), p.Fc(11, "(Free)"), p.Ob(), p.Ob(), p.Pb(12, "th", 79), p.Fc(13, " SB Admin Pro Angular"), p.Kb(14, "br"), p.Pb(15, "div", 80), p.Fc(16, "(Pro)"), p.Ob(), p.Ob(), p.Ob(), p.Ob(), p.Pb(17, "tbody"), p.Pb(18, "tr"), p.Pb(19, "th", 81), p.Fc(20, "Custom & Extended Components"), p.Ob(), p.Pb(21, "td", 82), p.Fc(22, "5"), p.Ob(), p.Pb(23, "td", 82), p.Fc(24, "70+"), p.Ob(), p.Ob(), p.Pb(25, "tr"), p.Pb(26, "th", 81), p.Fc(27, "Custom CSS Utilities"), p.Ob(), p.Pb(28, "td", 82), p.Fc(29, "10"), p.Ob(), p.Pb(30, "td", 82), p.Fc(31, "100+"), p.Ob(), p.Ob(), p.Pb(32, "tr"), p.Pb(33, "th", 81), p.Fc(34, "Example Pages"), p.Ob(), p.Pb(35, "td", 82), p.Fc(36, "6"), p.Ob(), p.Pb(37, "td", 82), p.Fc(38, "30+"), p.Ob(), p.Ob(), p.Pb(39, "tr"), p.Pb(40, "th", 81), p.Fc(41, "Documentation"), p.Ob(), p.Pb(42, "td", 82), p.Kb(43, "fa-icon", 83), p.Ob(), p.Pb(44, "td", 82), p.Kb(45, "fa-icon", 84), p.Ob(), p.Ob(), p.Pb(46, "tr"), p.Pb(47, "th", 81), p.Fc(48, "Email Support"), p.Ob(), p.Pb(49, "td", 82), p.Kb(50, "fa-icon", 83), p.Ob(), p.Pb(51, "td", 82), p.Kb(52, "fa-icon", 84), p.Ob(), p.Ob(), p.Pb(53, "tr"), p.Pb(54, "th", 81), p.Fc(55, "Code Snippets"), p.Ob(), p.Pb(56, "td", 82), p.Kb(57, "fa-icon", 83), p.Ob(), p.Pb(58, "td", 82), p.Kb(59, "fa-icon", 84), p.Ob(), p.Ob(), p.Pb(60, "tr"), p.Pb(61, "th", 81), p.Fc(62, "Expanded Color System"), p.Ob(), p.Pb(63, "td", 82), p.Kb(64, "fa-icon", 83), p.Ob(), p.Pb(65, "td", 82), p.Kb(66, "fa-icon", 84), p.Ob(), p.Ob(), p.Pb(67, "tr"), p.Pb(68, "th", 81), p.Fc(69, "Sidebar Options"), p.Ob(), p.Pb(70, "td", 82), p.Fc(71, "Static Only"), p.Ob(), p.Pb(72, "td", 82), p.Fc(73, "Fixed and Static"), p.Ob(), p.Ob(), p.Ob(), p.Ob(), p.Ob(), p.Pb(74, "div", 85), p.Pb(75, "a", 88), p.Pb(76, "picture"), p.Kb(77, "source", 61), p.Kb(78, "source", 62), p.Kb(79, "img", 63), p.Ob(), p.Ob(), p.Ob(), p.Ob(), p.Pb(80, "div", 82), p.Pb(81, "a", 89), p.Zb("click", function() { return p.vc(e), p.dc().upgradeToPro("ProUpgradeFreeThemeBottomAdminAngular") }), p.Kb(82, "fa-icon", 10), p.Fc(83, "Preview SB Admin Pro Angular!"), p.Ob(), p.Ob(), p.Ob()
                }
                if (2 & e) {
                    const e = p.dc();
                    p.xb(8), p.Hc(" ", e.product.displayName, ""), p.xb(35), p.lc("icon", p.oc(11, Vo)), p.xb(2), p.lc("icon", p.oc(12, Ro)), p.xb(5), p.lc("icon", p.oc(13, Vo)), p.xb(2), p.lc("icon", p.oc(14, Ro)), p.xb(5), p.lc("icon", p.oc(15, Vo)), p.xb(2), p.lc("icon", p.oc(16, Ro)), p.xb(5), p.lc("icon", p.oc(17, Vo)), p.xb(2), p.lc("icon", p.oc(18, Ro)), p.xb(15), p.lc("slug", e.product.slug), p.xb(1), p.lc("icon", p.oc(19, Uo))
                }
            }

            function Xo(e, t) {
                if (1 & e) {
                    const e = p.Qb();
                    p.Pb(0, "div"), p.Pb(1, "div", 75), p.Pb(2, "div", 76), p.Pb(3, "table", 77), p.Pb(4, "thead"), p.Pb(5, "tr"), p.Kb(6, "th", 78), p.Pb(7, "th", 79), p.Fc(8), p.Kb(9, "br"), p.Pb(10, "div", 80), p.Fc(11, "(Free)"), p.Ob(), p.Ob(), p.Pb(12, "th", 79), p.Fc(13, " SB UI Kit Pro"), p.Kb(14, "br"), p.Pb(15, "div", 80), p.Fc(16, "(Pro)"), p.Ob(), p.Ob(), p.Ob(), p.Ob(), p.Pb(17, "tbody"), p.Pb(18, "tr"), p.Pb(19, "th", 81), p.Fc(20, "Landing Page Options"), p.Ob(), p.Pb(21, "td", 82), p.Fc(22, "1"), p.Ob(), p.Pb(23, "td", 82), p.Fc(24, "35+"), p.Ob(), p.Ob(), p.Pb(25, "tr"), p.Pb(26, "th", 81), p.Fc(27, "Documentation"), p.Ob(), p.Pb(28, "td", 82), p.Kb(29, "fa-icon", 83), p.Ob(), p.Pb(30, "td", 82), p.Kb(31, "fa-icon", 84), p.Ob(), p.Ob(), p.Pb(32, "tr"), p.Pb(33, "th", 81), p.Fc(34, "Email Support"), p.Ob(), p.Pb(35, "td", 82), p.Kb(36, "fa-icon", 83), p.Ob(), p.Pb(37, "td", 82), p.Kb(38, "fa-icon", 84), p.Ob(), p.Ob(), p.Pb(39, "tr"), p.Pb(40, "th", 81), p.Fc(41, "Custom Utilities"), p.Ob(), p.Pb(42, "td", 82), p.Kb(43, "fa-icon", 83), p.Ob(), p.Pb(44, "td", 82), p.Kb(45, "fa-icon", 84), p.Ob(), p.Ob(), p.Pb(46, "tr"), p.Pb(47, "th", 81), p.Fc(48, "Expanded Color System"), p.Ob(), p.Pb(49, "td", 82), p.Kb(50, "fa-icon", 83), p.Ob(), p.Pb(51, "td", 82), p.Kb(52, "fa-icon", 84), p.Ob(), p.Ob(), p.Ob(), p.Ob(), p.Ob(), p.Pb(53, "div", 85), p.Pb(54, "a", 90), p.Pb(55, "picture"), p.Kb(56, "source", 66), p.Kb(57, "source", 67), p.Kb(58, "img", 91), p.Ob(), p.Ob(), p.Ob(), p.Ob(), p.Pb(59, "div", 82), p.Pb(60, "a", 92), p.Zb("click", function() { return p.vc(e), p.dc().upgradeToPro("ProUpgradeFreeThemeBottomUIKit") }), p.Kb(61, "fa-icon", 10), p.Fc(62, "Preview SB UI Kit Pro!"), p.Ob(), p.Ob(), p.Ob()
                }
                if (2 & e) {
                    const e = p.dc();
                    p.xb(8), p.Hc(" ", e.product.displayName, ""), p.xb(21), p.lc("icon", p.oc(11, Vo)), p.xb(2), p.lc("icon", p.oc(12, Ro)), p.xb(5), p.lc("icon", p.oc(13, Vo)), p.xb(2), p.lc("icon", p.oc(14, Ro)), p.xb(5), p.lc("icon", p.oc(15, Vo)), p.xb(2), p.lc("icon", p.oc(16, Ro)), p.xb(5), p.lc("icon", p.oc(17, Vo)), p.xb(2), p.lc("icon", p.oc(18, Ro)), p.xb(8), p.lc("slug", e.product.slug), p.xb(1), p.lc("icon", p.oc(19, Uo))
                }
            }

            function zo(e, t) {
                if (1 & e) {
                    const e = p.Qb();
                    p.Pb(0, "div"), p.Pb(1, "div", 75), p.Pb(2, "div", 76), p.Pb(3, "table", 77), p.Pb(4, "thead"), p.Pb(5, "tr"), p.Kb(6, "th", 78), p.Pb(7, "th", 79), p.Fc(8), p.Kb(9, "br"), p.Pb(10, "div", 80), p.Fc(11, "(Free)"), p.Ob(), p.Ob(), p.Pb(12, "th", 79), p.Fc(13, " SB UI Kit Pro Angular"), p.Kb(14, "br"), p.Pb(15, "div", 80), p.Fc(16, "(Pro)"), p.Ob(), p.Ob(), p.Ob(), p.Ob(), p.Pb(17, "tbody"), p.Pb(18, "tr"), p.Pb(19, "th", 81), p.Fc(20, "Landing Page Options"), p.Ob(), p.Pb(21, "td", 82), p.Fc(22, "1"), p.Ob(), p.Pb(23, "td", 82), p.Fc(24, "35+"), p.Ob(), p.Ob(), p.Pb(25, "tr"), p.Pb(26, "th", 81), p.Fc(27, "Documentation"), p.Ob(), p.Pb(28, "td", 82), p.Kb(29, "fa-icon", 83), p.Ob(), p.Pb(30, "td", 82), p.Kb(31, "fa-icon", 84), p.Ob(), p.Ob(), p.Pb(32, "tr"), p.Pb(33, "th", 81), p.Fc(34, "Email Support"), p.Ob(), p.Pb(35, "td", 82), p.Kb(36, "fa-icon", 83), p.Ob(), p.Pb(37, "td", 82), p.Kb(38, "fa-icon", 84), p.Ob(), p.Ob(), p.Pb(39, "tr"), p.Pb(40, "th", 81), p.Fc(41, "Custom Utilities"), p.Ob(), p.Pb(42, "td", 82), p.Kb(43, "fa-icon", 83), p.Ob(), p.Pb(44, "td", 82), p.Kb(45, "fa-icon", 84), p.Ob(), p.Ob(), p.Pb(46, "tr"), p.Pb(47, "th", 81), p.Fc(48, "Expanded Color System"), p.Ob(), p.Pb(49, "td", 82), p.Kb(50, "fa-icon", 83), p.Ob(), p.Pb(51, "td", 82), p.Kb(52, "fa-icon", 84), p.Ob(), p.Ob(), p.Ob(), p.Ob(), p.Ob(), p.Pb(53, "div", 85), p.Pb(54, "a", 93), p.Pb(55, "picture"), p.Kb(56, "source", 71), p.Kb(57, "source", 72), p.Kb(58, "img", 94), p.Ob(), p.Ob(), p.Ob(), p.Ob(), p.Pb(59, "div", 82), p.Pb(60, "a", 95), p.Zb("click", function() { return p.vc(e), p.dc().upgradeToPro("ProUpgradeFreeThemeBottomUIKitAngular") }), p.Kb(61, "fa-icon", 10), p.Fc(62, "Preview SB UI Kit Pro Angular!"), p.Ob(), p.Ob(), p.Ob()
                }
                if (2 & e) {
                    const e = p.dc();
                    p.xb(8), p.Hc(" ", e.product.displayName, ""), p.xb(21), p.lc("icon", p.oc(11, Vo)), p.xb(2), p.lc("icon", p.oc(12, Ro)), p.xb(5), p.lc("icon", p.oc(13, Vo)), p.xb(2), p.lc("icon", p.oc(14, Ro)), p.xb(5), p.lc("icon", p.oc(15, Vo)), p.xb(2), p.lc("icon", p.oc(16, Ro)), p.xb(5), p.lc("icon", p.oc(17, Vo)), p.xb(2), p.lc("icon", p.oc(18, Ro)), p.xb(8), p.lc("slug", e.product.slug), p.xb(1), p.lc("icon", p.oc(19, Uo))
                }
            }

            function Qo(e, t) { 1 & e && p.Kb(0, "div", 96) }
            const $o = function() { return ["fad", "external-link"] },
                Zo = function() { return ["fad", "eye"] },
                Yo = function() { return ["fab", "github"] },
                ei = function() { return ["fad", "file-certificate"] };
            let ti = (() => {
                class e {
                    constructor(e, t, o, i) { this.analyticsService = e, this.generalService = t, this.platformService = o, this.changeDetectorRef = i, this.prerenderDynamicThemeFreeLoaded = !1 }
                    ngOnInit() { this.gitURLBase = this.product.gitSlug ? "https://github.com/startbootstrap/" + this.product.gitSlug : "https://github.com/startbootstrap/startbootstrap-" + this.product.slug }
                    ngAfterViewInit() { this.platformService.isServer || (this.prerenderDynamicThemeFreeLoaded = !0, this.changeDetectorRef.detectChanges()) }
                    download() { this.analyticsService.sendEventCustom("download", "FREE_DOWNLOAD", this.product.slug), this.generalService.downloaded$(this.product.id).subscribe() }
                    upgradeToPro(e) { this.analyticsService.promotionClicked(e, this.product.slug) }
                }
                return e.\u0275fac = function(t) { return new(t || e)(p.Jb(h.a), p.Jb(h.h), p.Jb(h.n), p.Jb(p.h)) }, e.\u0275cmp = p.Db({
                    type: e,
                    selectors: [
                        ["sbw-theme-free"]
                    ],
                    inputs: { product: "product" },
                    decls: 89,
                    vars: 53,
                    consts: [
                        ["sectionClasses", "py-5 bg-light mt-page-header", "borderType", "angled", "borderClasses", "text-white"],
                        [1, "container", "mb-n10", "z-1"],
                        [1, "mb-4", "d-lg-none"],
                        ["data-cy", "productDisplayName", 1, "h1", "mb-0"],
                        [1, "mb-0"],
                        [1, "row"],
                        [1, "col-lg-8"],
                        ["data-cy", "productPreviewLink", "target", "_blank", 1, "preview-img", "shadow", "mb-4", 3, "href"],
                        [1, "preview-img-overlay"],
                        [1, "btn", "btn-white"],
                        [1, "mr-1", 3, "icon"],
                        [1, "m-0"],
                        ["type", "image/webp", 3, "srcset"],
                        ["type", "image/jpeg", 3, "srcset"],
                        [1, "img-fluid", 3, "src", "alt"],
                        [1, "d-flex", "justify-content-between", "mb-4"],
                        ["target", "_blank", 1, "btn", "btn-white", "font-weight-500", "shadow", "mr-3", 3, "href"],
                        [1, "d-none", "d-sm-inline"],
                        ["target", "_blank", 1, "btn", "btn-github", "font-weight-500", "shadow", 3, "href"],
                        ["sbwNativeStandard", "", 1, "native-standard"],
                        [1, "col-lg-4"],
                        [1, "mb-4", "d-none", "d-lg-block"],
                        ["sbwCarbon", "", 1, "mb-4", "carbon-inverse", "carbon-container"],
                        ["class", "mb-2", 4, "ngIf"],
                        [1, "mb-4"],
                        ["sbwInView", "", "promotion", "ProUpgradeFreeThemeTop", 1, "btn", "btn-success-soft", "text-success", "btn-block", "font-weight-500", 3, "routerLink", "slug", "click"],
                        [1, "card"],
                        [1, "card-body"],
                        [1, "d-flex", "align-items-center", "justify-content-between", "text-xs"],
                        [1, "font-weight-500"],
                        ["target", "_blank", 1, "text-body", 3, "href"],
                        [4, "ngIf"],
                        ["sectionClasses", "pt-5 pb-10", "borderType", "angled", "borderClasses", "text-light"],
                        [1, "container"],
                        [1, "row", "mb-10"],
                        [1, "mb-5"],
                        [3, "md"],
                        [1, "col-lg-4", "d-none", "d-lg-block"],
                        [1, "position-sticky", "description-sidebar"],
                        [1, "text-center", "mb-5"],
                        [1, "small", "mb-2", "text-muted"],
                        [1, "font-italic"],
                        ["class", "hidden", "data-cy", "prerenderDynamicThemeFreeLoaded", 4, "ngIf"],
                        [1, "mb-2"],
                        [1, "btn", "btn-primary", "btn-lg", "btn-block", "font-weight-500", 3, "href", "click"],
                        ["href", "https://builder.startbootstrap.com/builder/freelancer", "target", "_blank", 1, "btn", "btn-primary-soft", "text-primary", "btn-block", "font-weight-500"],
                        [1, "small"],
                        [1, "my-3"],
                        ["routerLink", "/theme/sb-admin-pro", 1, "lift", "rounded", "o-hidden", "d-block"],
                        ["type", "image/webp", "srcset", "https://assets.startbootstrap.com/img/screenshots/premium/sb-admin-pro.high.webp"],
                        ["type", "image/jpeg", "srcset", "https://assets.startbootstrap.com/img/screenshots/premium/sb-admin-pro.png"],
                        ["src", "https://assets.startbootstrap.com/img/screenshots/premium/sb-admin-pro.png", "alt", "SB Admin Pro", 1, "img-fluid"],
                        [1, "d-flex", "mb-3"],
                        [1, "flex-shrink-0"],
                        ["src", "assets/img/freepik/upgrade-to-pro-pana.svg", "alt", "Man with pointer SVG", 2, "width", "4rem"],
                        [1, "ml-2"],
                        [1, "small", "mb-2"],
                        [1, "list-unstyled", "small", "font-italic"],
                        [1, "text-success", "mr-1", 3, "icon"],
                        ["routerLink", "/theme/sb-admin-pro", "sbwInView", "", "promotion", "ProUpgradeFreeThemeStickyAdmin", 1, "btn", "btn-success-soft", "text-success", "btn-block", "font-weight-500", 3, "slug", "click"],
                        ["routerLink", "/theme/sb-admin-pro-angular", 1, "lift", "rounded", "o-hidden", "d-block"],
                        ["type", "image/webp", "srcset", "https://assets.startbootstrap.com/img/screenshots/premium/sb-admin-pro-angular.high.webp"],
                        ["type", "image/jpeg", "srcset", "https://assets.startbootstrap.com/img/screenshots/premium/sb-admin-pro-angular.png"],
                        ["src", "https://assets.startbootstrap.com/img/screenshots/premium/sb-admin-pro-angular.png", "alt", "SB Admin Pro", 1, "img-fluid"],
                        ["routerLink", "/theme/sb-admin-pro-angular", "sbwInView", "", "promotion", "ProUpgradeFreeThemeStickyAdminAngular", 1, "btn", "btn-success-soft", "text-success", "btn-block", "font-weight-500", 3, "slug", "click"],
                        ["routerLink", "/theme/sb-ui-kit-pro", 1, "lift", "rounded", "o-hidden", "d-block"],
                        ["type", "image/webp", "srcset", "https://assets.startbootstrap.com/img/screenshots/premium/sb-ui-kit-pro.high.webp"],
                        ["type", "image/jpeg", "srcset", "https://assets.startbootstrap.com/img/screenshots/premium/sb-ui-kit-pro.png"],
                        ["src", "https://assets.startbootstrap.com/img/screenshots/premium/sb-ui-kit-pro.png", "alt", "SB UI Kit Pro", 1, "img-fluid"],
                        ["routerLink", "/theme/sb-ui-kit-pro", "sbwInView", "", "promotion", "ProUpgradeFreeThemeStickyUIKit", 1, "btn", "btn-success-soft", "text-success", "btn-block", "font-weight-500", 3, "slug", "click"],
                        ["routerLink", "/theme/sb-ui-kit-pro-angular", 1, "lift", "rounded", "o-hidden", "d-block"],
                        ["type", "image/webp", "srcset", "https://assets.startbootstrap.com/img/screenshots/premium/sb-ui-kit-pro-angular.high.webp"],
                        ["type", "image/jpeg", "srcset", "https://assets.startbootstrap.com/img/screenshots/premium/sb-ui-kit-pro-angular.png"],
                        ["src", "https://assets.startbootstrap.com/img/screenshots/premium/sb-ui-kit-pro-angular.png", "alt", "SB UI Kit Pro Angular", 1, "img-fluid"],
                        ["routerLink", "/theme/sb-ui-kit-pro-angular", "sbwInView", "", "promotion", "ProUpgradeFreeThemeStickyUIKitAngular", 1, "btn", "btn-success-soft", "text-success", "btn-block", "font-weight-500", 3, "slug", "click"],
                        [1, "row", "align-items-center", "mb-4"],
                        [1, "col-lg-6", "pr-lg-4"],
                        [1, "table", "small"],
                        ["scope", "col", 1, "border-top-0"],
                        ["scope", "col", 1, "border-top-0", "text-center"],
                        [1, "text-xs"],
                        ["scope", "row"],
                        [1, "text-center"],
                        [1, "text-danger", 3, "icon"],
                        [1, "text-success", 3, "icon"],
                        [1, "col-lg-6"],
                        ["routerLink", "/theme/sb-admin-pro", 1, "lift", "rounded", "o-hidden", "d-block", "ml-lg-3", "mb-4"],
                        ["routerLink", "/theme/sb-admin-pro", "sbwInView", "", "promotion", "ProUpgradeFreeThemeBottomAdmin", 1, "btn", "btn-lg", "btn-success-soft", "text-success", "font-weight-500", 3, "slug", "click"],
                        ["routerLink", "/theme/sb-admin-pro-angular", 1, "lift", "rounded", "o-hidden", "d-block", "ml-lg-3", "mb-4"],
                        ["routerLink", "/theme/sb-admin-pro-angular", "sbwInView", "", "promotion", "ProUpgradeFreeThemeBottomAdminAngular", 1, "btn", "btn-lg", "btn-success-soft", "text-success", "font-weight-500", 3, "slug", "click"],
                        ["routerLink", "/theme/sb-ui-kit-pro", 1, "lift", "rounded", "o-hidden", "d-block", "ml-lg-3", "mb-4"],
                        ["src", "https://assets.startbootstrap.com/img/screenshots/premium/sb-ui-kit-pro.png", "alt", "SB Admin Pro", 1, "img-fluid"],
                        ["routerLink", "/theme/sb-ui-kit-pro", "sbwInView", "", "promotion", "ProUpgradeFreeThemeBottomUIKit", 1, "btn", "btn-lg", "btn-success-soft", "text-success", "font-weight-500", 3, "slug", "click"],
                        ["routerLink", "/theme/sb-ui-kit-pro-angular", 1, "lift", "rounded", "o-hidden", "d-block", "ml-lg-3", "mb-4"],
                        ["src", "https://assets.startbootstrap.com/img/screenshots/premium/sb-ui-kit-pro-angular.png", "alt", "SB Admin Pro", 1, "img-fluid"],
                        ["routerLink", "/theme/sb-ui-kit-pro-angular", "sbwInView", "", "promotion", "ProUpgradeFreeThemeBottomUIKitAngular", 1, "btn", "btn-lg", "btn-success-soft", "text-success", "font-weight-500", 3, "slug", "click"],
                        ["data-cy", "prerenderDynamicThemeFreeLoaded", 1, "hidden"]
                    ],
                    template: function(e, t) { 1 & e && (p.Pb(0, "sbpro-page-section", 0), p.Pb(1, "div", 1), p.Pb(2, "div", 2), p.Pb(3, "div", 3), p.Fc(4), p.Ob(), p.Pb(5, "p", 4), p.Fc(6), p.Ob(), p.Ob(), p.Pb(7, "div", 5), p.Pb(8, "div", 6), p.Pb(9, "a", 7), p.Pb(10, "div", 8), p.Pb(11, "div", 9), p.Kb(12, "fa-icon", 10), p.Fc(13, "Launch Live Preview"), p.Ob(), p.Ob(), p.Pb(14, "figure", 11), p.Pb(15, "picture"), p.Kb(16, "source", 12), p.ec(17, "safe"), p.ec(18, "webpExt"), p.Kb(19, "source", 13), p.ec(20, "safe"), p.Kb(21, "img", 14), p.ec(22, "safe"), p.Ob(), p.Ob(), p.Ob(), p.Pb(23, "div", 15), p.Pb(24, "div"), p.Pb(25, "a", 16), p.Kb(26, "fa-icon", 10), p.Pb(27, "span", 17), p.Fc(28, "Live "), p.Ob(), p.Fc(29, "Preview"), p.Ob(), p.Pb(30, "a", 18), p.Kb(31, "fa-icon", 10), p.Fc(32, "View Source"), p.Pb(33, "span", 17), p.Fc(34, " Code"), p.Ob(), p.Ob(), p.Ob(), p.Ob(), p.Kb(35, "div", 19), p.Ob(), p.Pb(36, "div", 20), p.Pb(37, "div", 21), p.Pb(38, "h1", 4), p.Fc(39), p.Ob(), p.Pb(40, "p", 4), p.Fc(41), p.Ob(), p.Ob(), p.Kb(42, "div", 22), p.Dc(43, Mo, 4, 3, "div", 23), p.Dc(44, Ao, 4, 2, "div", 23), p.Pb(45, "div", 24), p.Pb(46, "button", 25), p.Zb("click", function() { return t.upgradeToPro("ProUpgradeFreeThemeTop") }), p.Kb(47, "fa-icon", 10), p.Fc(48, "Upgrade to Pro"), p.Ob(), p.Ob(), p.Pb(49, "div", 26), p.Pb(50, "div", 27), p.Pb(51, "div", 28), p.Pb(52, "div", 29), p.Fc(53, "License"), p.Ob(), p.Pb(54, "div"), p.Kb(55, "fa-icon", 10), p.Pb(56, "a", 30), p.Fc(57, "MIT License"), p.Ob(), p.Ob(), p.Ob(), p.Kb(58, "hr"), p.Dc(59, No, 31, 2, "ng-container", 31), p.Dc(60, jo, 34, 15, "ng-container", 31), p.Ob(), p.Ob(), p.Ob(), p.Ob(), p.Ob(), p.Ob(), p.Pb(61, "sbpro-page-section", 32), p.Pb(62, "div", 33), p.Pb(63, "div", 34), p.Pb(64, "div", 6), p.Pb(65, "div", 35), p.Kb(66, "sbw-markdown-html", 36), p.Ob(), p.Pb(67, "div", 26), p.Pb(68, "div", 27), p.Kb(69, "sbw-disqus"), p.Ob(), p.Ob(), p.Ob(), p.Pb(70, "div", 37), p.Pb(71, "div", 38), p.Dc(72, qo, 36, 11, "div", 31), p.Dc(73, Go, 36, 11, "div", 31), p.Dc(74, Ho, 36, 11, "div", 31), p.Dc(75, _o, 36, 11, "div", 31), p.Ob(), p.Ob(), p.Ob(), p.Pb(76, "div", 39), p.Pb(77, "div", 40), p.Fc(78, "Like our free products? Our pro products are even better!"), p.Ob(), p.Pb(79, "h3"), p.Fc(80, "Go "), p.Pb(81, "span", 41), p.Fc(82, "Pro "), p.Ob(), p.Fc(83, "Today!"), p.Ob(), p.Ob(), p.Dc(84, Jo, 84, 20, "div", 31), p.Dc(85, Wo, 84, 20, "div", 31), p.Dc(86, Xo, 63, 20, "div", 31), p.Dc(87, zo, 63, 20, "div", 31), p.Ob(), p.Ob(), p.Dc(88, Qo, 1, 0, "div", 42)), 2 & e && (p.xb(4), p.Gc(t.product.displayName), p.xb(2), p.Gc(t.product.description.shortDescription), p.xb(3), p.lc("href", "previews/" + t.product.slug, p.yc), p.xb(3), p.lc("icon", p.oc(48, $o)), p.xb(4), p.lc("srcset", p.hc(17, 33, p.gc(18, 37, null == t.product.images ? null : t.product.images.primaryImage.high, "high"), "resourceURL", "NONE"), p.yc), p.xb(3), p.lc("srcset", p.hc(20, 40, null == t.product.images ? null : t.product.images.primaryImage.high, "resourceURL", "NONE"), p.yc), p.xb(2), p.lc("src", p.hc(22, 44, null == t.product.images ? null : t.product.images.primaryImage.high, "resourceURL", "NONE"), p.yc)("alt", null == t.product.images ? null : t.product.images.primaryImage.alt), p.xb(4), p.lc("href", "previews/" + t.product.slug, p.yc), p.xb(1), p.lc("icon", p.oc(49, Zo)), p.xb(4), p.lc("href", t.gitURLBase, p.yc), p.xb(1), p.lc("icon", p.oc(50, Yo)), p.xb(8), p.Gc(t.product.displayName), p.xb(2), p.Gc(t.product.description.shortDescription), p.xb(2), p.lc("ngIf", !t.product.noDownload), p.xb(1), p.lc("ngIf", "freelancer" === t.product.slug), p.xb(2), p.lc("routerLink", "/theme/" + t.product.proUpsell)("slug", t.product.slug), p.xb(1), p.lc("icon", p.oc(51, Uo)), p.xb(8), p.lc("icon", p.oc(52, ei)), p.xb(1), p.nc("href", "", t.gitURLBase, "/blob/master/LICENSE", p.yc), p.xb(3), p.lc("ngIf", !t.prerenderDynamicThemeFreeLoaded), p.xb(1), p.lc("ngIf", t.prerenderDynamicThemeFreeLoaded), p.xb(6), p.lc("md", t.product.description.longDescription), p.xb(6), p.lc("ngIf", "sb-admin-pro" === t.product.proUpsell), p.xb(1), p.lc("ngIf", "sb-admin-pro-angular" === t.product.proUpsell), p.xb(1), p.lc("ngIf", "sb-ui-kit-pro" === t.product.proUpsell), p.xb(1), p.lc("ngIf", "sb-ui-kit-pro-angular" === t.product.proUpsell), p.xb(9), p.lc("ngIf", "sb-admin-pro" === t.product.proUpsell), p.xb(1), p.lc("ngIf", "sb-admin-pro-angular" === t.product.proUpsell), p.xb(1), p.lc("ngIf", "sb-ui-kit-pro" === t.product.proUpsell), p.xb(1), p.lc("ngIf", "sb-ui-kit-pro-angular" === t.product.proUpsell), p.xb(1), p.lc("ngIf", t.prerenderDynamicThemeFreeLoaded)) },
                    directives: [O.a, S.a, $e.a, y.a, r.q, ee, i.e, Qe.a, Ze.a, i.f],
                    pipes: [oe.a, ie.a, r.g, r.f, Lo.a],
                    styles: [""],
                    changeDetection: 0
                }), e
            })();
            var oi = o("P+sQ");

            function ii(e, t) { 1 & e && (p.Nb(0), p.Pb(1, "div", 25), p.Fc(2, "$XX"), p.Ob(), p.Mb()) }

            function ri(e, t) {
                if (1 & e && (p.Pb(0, "div", 28), p.Fc(1), p.ec(2, "currency"), p.Ob()), 2 & e) {
                    const e = p.dc(3);
                    p.xb(1), p.Gc(p.ic(2, 1, (null == e.product.pricingsMapped.freelancer ? null : e.product.pricingsMapped.freelancer.price) / 100, "USD", "symbol", "1.0"))
                }
            }

            function ni(e, t) {
                if (1 & e && (p.Pb(0, "span", 29), p.Pb(1, "div", 30), p.Fc(2), p.ec(3, "percent"), p.Ob(), p.Pb(4, "div", 21), p.Pb(5, "del", 31), p.Fc(6), p.ec(7, "currency"), p.Ob(), p.Pb(8, "div", 32), p.Fc(9), p.ec(10, "currency"), p.Ob(), p.Ob(), p.Ob()), 2 & e) {
                    const e = p.dc(3);
                    p.xb(2), p.Hc("", p.fc(3, 3, 1 - (null == e.product.pricingsMapped.freelancer ? null : e.product.pricingsMapped.freelancer.salePrice) / (null == e.product.pricingsMapped.freelancer ? null : e.product.pricingsMapped.freelancer.price)), " off!"), p.xb(4), p.Gc(p.ic(7, 5, (null == e.product.pricingsMapped.freelancer ? null : e.product.pricingsMapped.freelancer.price) / 100, "USD", "symbol", "1.0")), p.xb(3), p.Gc(p.ic(10, 10, (null == e.product.pricingsMapped.freelancer ? null : e.product.pricingsMapped.freelancer.salePrice) / 100, "USD", "symbol", "1.0"))
                }
            }

            function si(e, t) {
                if (1 & e && (p.Nb(0), p.Dc(1, ri, 3, 6, "div", 26), p.Dc(2, ni, 11, 15, "span", 27), p.Mb()), 2 & e) {
                    const e = p.dc(2);
                    p.xb(1), p.lc("ngIf", !(null != e.product.pricingsMapped.freelancer && e.product.pricingsMapped.freelancer.salePrice)), p.xb(1), p.lc("ngIf", null == e.product.pricingsMapped.freelancer ? null : e.product.pricingsMapped.freelancer.salePrice)
                }
            }

            function ci(e, t) { 1 & e && (p.Pb(0, "span"), p.Fc(1, "Buy Now"), p.Ob()) }

            function ai(e, t) { 1 & e && (p.Pb(0, "span"), p.Fc(1, "Hold your horses"), p.Ob()) }
            const bi = function(e, t) { return { "col-xl-3 col-lg-6 mb-xl-0": e, "col-lg-4 mb-lg-0": t } };

            function li(e, t) {
                if (1 & e) {
                    const e = p.Qb();
                    p.Pb(0, "div", 3), p.Pb(1, "div", 4), p.Pb(2, "div", 5), p.Pb(3, "h4", 6), p.Fc(4, "Freelancer License"), p.Ob(), p.Pb(5, "div", 7), p.Fc(6, "For developers who only require the theme HTML/CSS files"), p.Ob(), p.Dc(7, ii, 3, 0, "ng-container", 8), p.Dc(8, si, 3, 2, "ng-container", 8), p.Pb(9, "button", 24), p.Zb("click", function() { p.vc(e); const t = p.dc(); return t.buyNow(t.product.pricingsMapped.freelancer) }), p.Dc(10, ci, 2, 0, "span", 8), p.Dc(11, ai, 2, 0, "span", 8), p.Ob(), p.Pb(12, "ul", 10), p.Pb(13, "li", 11), p.Fc(14, "1 Domain"), p.Ob(), p.Pb(15, "li", 11), p.Fc(16, "1 Team Member"), p.Ob(), p.Pb(17, "li", 11), p.Fc(18, "Free Apps Only"), p.Ob(), p.Pb(19, "li", 11), p.Fc(20, "HTML/CSS Only"), p.Ob(), p.Pb(21, "li", 11), p.Fc(22, "Email Support"), p.Ob(), p.Ob(), p.Ob(), p.Ob(), p.Ob()
                }
                if (2 & e) {
                    const e = p.dc();
                    p.lc("ngClass", p.qc(6, bi, e.hasFreelancer, !e.hasFreelancer)), p.xb(7), p.lc("ngIf", !e.prerenderDynamicLicenseTableLoaded), p.xb(1), p.lc("ngIf", e.prerenderDynamicLicenseTableLoaded), p.xb(1), p.lc("disabled", e.disabled), p.xb(1), p.lc("ngIf", !e.disabled), p.xb(1), p.lc("ngIf", e.disabled)
                }
            }

            function di(e, t) { 1 & e && (p.Nb(0), p.Pb(1, "div", 25), p.Fc(2, "$XX"), p.Ob(), p.Mb()) }

            function pi(e, t) {
                if (1 & e && (p.Pb(0, "div", 35), p.Fc(1), p.ec(2, "currency"), p.Ob()), 2 & e) {
                    const e = p.dc(2);
                    p.xb(1), p.Gc(p.ic(2, 1, e.product.pricingsMapped.developer.price / 100, "USD", "symbol", "1.0"))
                }
            }

            function ui(e, t) {
                if (1 & e && (p.Pb(0, "span", 36), p.Pb(1, "div", 30), p.Fc(2), p.ec(3, "percent"), p.Ob(), p.Pb(4, "div", 21), p.Pb(5, "del", 31), p.Fc(6), p.ec(7, "currency"), p.Ob(), p.Pb(8, "div", 32), p.Fc(9), p.ec(10, "currency"), p.Ob(), p.Ob(), p.Ob()), 2 & e) {
                    const e = p.dc(2);
                    p.xb(2), p.Hc("", p.fc(3, 3, 1 - e.product.pricingsMapped.developer.salePrice / e.product.pricingsMapped.developer.price), " off!"), p.xb(4), p.Gc(p.ic(7, 5, e.product.pricingsMapped.developer.price / 100, "USD", "symbol", "1.0")), p.xb(3), p.Gc(p.ic(10, 10, e.product.pricingsMapped.developer.salePrice / 100, "USD", "symbol", "1.0"))
                }
            }

            function hi(e, t) {
                if (1 & e && (p.Nb(0), p.Dc(1, pi, 3, 6, "div", 33), p.Dc(2, ui, 11, 15, "span", 34), p.Mb()), 2 & e) {
                    const e = p.dc();
                    p.xb(1), p.lc("ngIf", !e.product.pricingsMapped.developer.salePrice), p.xb(1), p.lc("ngIf", e.product.pricingsMapped.developer.salePrice)
                }
            }

            function mi(e, t) { 1 & e && (p.Nb(0), p.Pb(1, "div", 25), p.Fc(2, "$XX"), p.Ob(), p.Mb()) }

            function gi(e, t) {
                if (1 & e && (p.Pb(0, "div", 39), p.Fc(1), p.ec(2, "currency"), p.Ob()), 2 & e) {
                    const e = p.dc(2);
                    p.xb(1), p.Gc(p.ic(2, 1, e.product.pricingsMapped.startup.price / 100, "USD", "symbol", "1.0"))
                }
            }

            function fi(e, t) {
                if (1 & e && (p.Pb(0, "span", 40), p.Pb(1, "div", 30), p.Fc(2), p.ec(3, "percent"), p.Ob(), p.Pb(4, "div", 21), p.Pb(5, "del", 31), p.Fc(6), p.ec(7, "currency"), p.Ob(), p.Pb(8, "div", 32), p.Fc(9), p.ec(10, "currency"), p.Ob(), p.Ob(), p.Ob()), 2 & e) {
                    const e = p.dc(2);
                    p.xb(2), p.Hc("", p.fc(3, 3, 1 - e.product.pricingsMapped.startup.salePrice / e.product.pricingsMapped.startup.price), " off!"), p.xb(4), p.Gc(p.ic(7, 5, e.product.pricingsMapped.startup.price / 100, "USD", "symbol", "1.0")), p.xb(3), p.Gc(p.ic(10, 10, e.product.pricingsMapped.startup.salePrice / 100, "USD", "symbol", "1.0"))
                }
            }

            function Pi(e, t) {
                if (1 & e && (p.Nb(0), p.Dc(1, gi, 3, 6, "div", 37), p.Dc(2, fi, 11, 15, "span", 38), p.Mb()), 2 & e) {
                    const e = p.dc();
                    p.xb(1), p.lc("ngIf", !e.product.pricingsMapped.startup.salePrice), p.xb(1), p.lc("ngIf", e.product.pricingsMapped.startup.salePrice)
                }
            }

            function vi(e, t) { 1 & e && (p.Nb(0), p.Pb(1, "div", 25), p.Fc(2, "$XX"), p.Ob(), p.Mb()) }

            function yi(e, t) {
                if (1 & e && (p.Pb(0, "div", 43), p.Fc(1), p.ec(2, "currency"), p.Ob()), 2 & e) {
                    const e = p.dc(2);
                    p.xb(1), p.Gc(p.ic(2, 1, e.product.pricingsMapped.enterprise.price / 100, "USD", "symbol", "1.0"))
                }
            }

            function Oi(e, t) {
                if (1 & e && (p.Pb(0, "span", 44), p.Pb(1, "div", 30), p.Fc(2), p.ec(3, "percent"), p.Ob(), p.Pb(4, "div", 21), p.Pb(5, "del", 31), p.Fc(6), p.ec(7, "currency"), p.Ob(), p.Pb(8, "div", 32), p.Fc(9), p.ec(10, "currency"), p.Ob(), p.Ob(), p.Ob()), 2 & e) {
                    const e = p.dc(2);
                    p.xb(2), p.Hc("", p.fc(3, 3, 1 - e.product.pricingsMapped.enterprise.salePrice / e.product.pricingsMapped.enterprise.price), " off!"), p.xb(4), p.Gc(p.ic(7, 5, e.product.pricingsMapped.enterprise.price / 100, "USD", "symbol", "1.0")), p.xb(3), p.Gc(p.ic(10, 10, e.product.pricingsMapped.enterprise.salePrice / 100, "USD", "symbol", "1.0"))
                }
            }

            function wi(e, t) {
                if (1 & e && (p.Nb(0), p.Dc(1, yi, 3, 6, "div", 41), p.Dc(2, Oi, 11, 15, "span", 42), p.Mb()), 2 & e) {
                    const e = p.dc();
                    p.xb(1), p.lc("ngIf", !e.product.pricingsMapped.enterprise.salePrice), p.xb(1), p.lc("ngIf", e.product.pricingsMapped.enterprise.salePrice)
                }
            }
            const Fi = function(e, t) { return { "col-xl-3 col-lg-6 mb-lg-0": e, "col-lg-4 mb-lg-0": t } },
                xi = function(e, t) { return { "col-xl-3 col-lg-6": e, "col-lg-4": t } },
                ki = function() { return ["fad", "lock-alt"] };
            let Si = (() => {
                class e {
                    constructor(e, t, o, i, r, n) { this.orderService = e, this.router = t, this.elementRef = o, this.platformService = i, this.analyticsService = r, this.changeDetectorRef = n, this.hasFreelancer = !1, this.disabled = !1, this.prerenderDynamicLicenseTableLoaded = !1 }
                    ngOnInit() { this.platformService.isServer && (this.disabled = !0), this._setFreelancer() }
                    ngOnChanges(e) { e.product.firstChange || e.product && (this.product = e.product.currentValue, this._setFreelancer(), this.changeDetectorRef.detectChanges()) }
                    ngAfterViewInit() { this.platformService.isServer || (this.prerenderDynamicLicenseTableLoaded = !0, this.changeDetectorRef.detectChanges()) }
                    _setFreelancer() { this.hasFreelancer = !!this.product.pricingsMapped.freelancer }
                    buyNow(e) {
                        if (!e) throw new Error("pricing is undefined");
                        this.orderService.addToOrder(e), this.analyticsService.sendEventAddToCart(e, "LicenseTable"), this.router.navigate(["/shop/checkout"])
                    }
                }
                return e.\u0275fac = function(t) { return new(t || e)(p.Jb(oi.a), p.Jb(i.d), p.Jb(p.l), p.Jb(h.n), p.Jb(h.a), p.Jb(p.h)) }, e.\u0275cmp = p.Db({
                    type: e,
                    selectors: [
                        ["sbw-license-table"]
                    ],
                    inputs: { product: "product" },
                    features: [p.vb],
                    decls: 76,
                    vars: 24,
                    consts: [
                        [1, "container", "mt-n5", "mt-lg-n10"],
                        [1, "row", "mb-lg-4"],
                        ["class", "mb-4", 3, "ngClass", 4, "ngIf"],
                        [1, "mb-4", 3, "ngClass"],
                        [1, "card", "text-center", "h-100"],
                        [1, "card-body"],
                        [1, "mb-2"],
                        [1, "small", "mb-2"],
                        [4, "ngIf"],
                        ["data-cy", "buyNowDeveloper", 1, "btn", "btn-primary", "btn-block", "my-3", "font-weight-500", 3, "disabled", "click"],
                        [1, "list-group", "list-group-flush", "small"],
                        [1, "list-group-item"],
                        ["placement", "top", "ngbTooltip", "Includes SCSS files, Pug templates, and npm-based development environment", 1, "list-group-item"],
                        [1, "mb-4", "mb-xl-0", 3, "ngClass"],
                        ["data-cy", "buyNowStartup", 1, "btn", "btn-primary", "btn-block", "my-3", "font-weight-500", 3, "disabled", "click"],
                        [1, "list-group-item", "bg-transparent"],
                        ["placement", "top", "ngbTooltip", "Includes SCSS files, Pug templates, and npm-based development environment", 1, "list-group-item", "bg-transparent"],
                        ["data-cy", "buyNowEnterprise", 1, "btn", "btn-primary", "btn-block", "my-3", "font-weight-500", 3, "disabled", "click"],
                        [1, "d-flex", "align-items-center", "justify-content-center", "small", "mb-2"],
                        [1, "mr-1", "text-gray-500", "text-xs", 3, "icon"],
                        [1, "line-height-normal"],
                        [1, "d-flex", "align-items-center", "justify-content-center"],
                        ["src", "assets/img/brand-logos/powered_by_stripe.svg", "alt", "Powered by Stripe", 1, "mx-2"],
                        ["src", "assets/img/brand-logos/paypal.svg", "alt", "PayPal", 1, "mx-2", 2, "height", "1rem"],
                        ["data-cy", "buyNowFreelancer", 1, "btn", "btn-primary", "btn-block", "my-3", "font-weight-500", 3, "disabled", "click"],
                        [1, "h1"],
                        ["class", "h1", "data-cy", "freelancerLicensePrice", 4, "ngIf"],
                        ["data-cy", "freelancerLicenseSalePrice", 4, "ngIf"],
                        ["data-cy", "freelancerLicensePrice", 1, "h1"],
                        ["data-cy", "freelancerLicenseSalePrice"],
                        [1, "badge", "badge-success-soft", "text-success", "mb-2"],
                        [1, "h3", "mb-0", "text-gray-400", "mr-2"],
                        [1, "h1", "mb-0", "text-green"],
                        ["class", "h1", "data-cy", "developerLicensePrice", 4, "ngIf"],
                        ["data-cy", "developerLicenseSalePrice", 4, "ngIf"],
                        ["data-cy", "developerLicensePrice", 1, "h1"],
                        ["data-cy", "developerLicenseSalePrice"],
                        ["class", "h1", "data-cy", "startupLicensePrice", 4, "ngIf"],
                        ["data-cy", "startupLicenseSalePrice", 4, "ngIf"],
                        ["data-cy", "startupLicensePrice", 1, "h1"],
                        ["data-cy", "startupLicenseSalePrice"],
                        ["class", "h1", "data-cy", "exterpriseLicensePrice", 4, "ngIf"],
                        ["data-cy", "exterpriseLicenseSalePrice", 4, "ngIf"],
                        ["data-cy", "exterpriseLicensePrice", 1, "h1"],
                        ["data-cy", "exterpriseLicenseSalePrice"]
                    ],
                    template: function(e, t) { 1 & e && (p.Pb(0, "div", 0), p.Pb(1, "div", 1), p.Dc(2, li, 23, 9, "div", 2), p.Pb(3, "div", 3), p.Pb(4, "div", 4), p.Pb(5, "div", 5), p.Pb(6, "h4", 6), p.Fc(7, "Developer License"), p.Ob(), p.Pb(8, "div", 7), p.Fc(9, "For developers who want access to the original source files"), p.Ob(), p.Dc(10, di, 3, 0, "ng-container", 8), p.Dc(11, hi, 3, 2, "ng-container", 8), p.Pb(12, "button", 9), p.Zb("click", function() { return t.buyNow(t.product.pricingsMapped.developer) }), p.Fc(13, "Buy Now"), p.Ob(), p.Pb(14, "ul", 10), p.Pb(15, "li", 11), p.Fc(16, "1 Domain"), p.Ob(), p.Pb(17, "li", 11), p.Fc(18, "1 Team Member"), p.Ob(), p.Pb(19, "li", 11), p.Fc(20, "Free Apps Only"), p.Ob(), p.Pb(21, "li", 12), p.Fc(22, "Full Source Files"), p.Ob(), p.Pb(23, "li", 11), p.Fc(24, "Email Support"), p.Ob(), p.Ob(), p.Ob(), p.Ob(), p.Ob(), p.Pb(25, "div", 13), p.Pb(26, "div", 4), p.Pb(27, "div", 5), p.Pb(28, "h4", 6), p.Fc(29, "Startup License"), p.Ob(), p.Pb(30, "div", 7), p.Fc(31, "For small teams creating products that require end users to pay"), p.Ob(), p.Dc(32, mi, 3, 0, "ng-container", 8), p.Dc(33, Pi, 3, 2, "ng-container", 8), p.Pb(34, "button", 14), p.Zb("click", function() { return t.buyNow(t.product.pricingsMapped.startup) }), p.Fc(35, "Buy Now"), p.Ob(), p.Pb(36, "ul", 10), p.Pb(37, "li", 15), p.Fc(38, "1 Domain"), p.Ob(), p.Pb(39, "li", 15), p.Fc(40, "Up to 5 Team Members"), p.Ob(), p.Pb(41, "li", 15), p.Fc(42, "Paid Apps Allowed"), p.Ob(), p.Pb(43, "li", 16), p.Fc(44, "Full Source Files"), p.Ob(), p.Pb(45, "li", 15), p.Fc(46, "Email Support (24 Hour Turnaround)"), p.Ob(), p.Ob(), p.Ob(), p.Ob(), p.Ob(), p.Pb(47, "div", 13), p.Pb(48, "div", 4), p.Pb(49, "div", 5), p.Pb(50, "h4", 6), p.Fc(51, "Enterprise License"), p.Ob(), p.Pb(52, "div", 7), p.Fc(53, "For small teams creating products that require end users to pay"), p.Ob(), p.Dc(54, vi, 3, 0, "ng-container", 8), p.Dc(55, wi, 3, 2, "ng-container", 8), p.Pb(56, "button", 17), p.Zb("click", function() { return t.buyNow(t.product.pricingsMapped.enterprise) }), p.Fc(57, "Buy Now"), p.Ob(), p.Pb(58, "ul", 10), p.Pb(59, "li", 11), p.Fc(60, "1 Domain"), p.Ob(), p.Pb(61, "li", 11), p.Fc(62, "Up to 15 Team Members"), p.Ob(), p.Pb(63, "li", 11), p.Fc(64, "Paid Apps Allowed"), p.Ob(), p.Pb(65, "li", 12), p.Fc(66, "Full Source Files"), p.Ob(), p.Pb(67, "li", 11), p.Fc(68, "Dedicated Priority Support"), p.Ob(), p.Ob(), p.Ob(), p.Ob(), p.Ob(), p.Ob(), p.Pb(69, "div", 18), p.Kb(70, "fa-icon", 19), p.Pb(71, "div", 20), p.Fc(72, "Secure Checkout"), p.Ob(), p.Ob(), p.Pb(73, "div", 21), p.Kb(74, "img", 22), p.Kb(75, "img", 23), p.Ob(), p.Ob()), 2 & e && (p.xb(2), p.lc("ngIf", t.hasFreelancer), p.xb(1), p.lc("ngClass", p.qc(14, bi, t.hasFreelancer, !t.hasFreelancer)), p.xb(7), p.lc("ngIf", !t.prerenderDynamicLicenseTableLoaded), p.xb(1), p.lc("ngIf", t.prerenderDynamicLicenseTableLoaded), p.xb(1), p.lc("disabled", t.disabled), p.xb(13), p.lc("ngClass", p.qc(17, Fi, t.hasFreelancer, !t.hasFreelancer)), p.xb(7), p.lc("ngIf", !t.prerenderDynamicLicenseTableLoaded), p.xb(1), p.lc("ngIf", t.prerenderDynamicLicenseTableLoaded), p.xb(1), p.lc("disabled", t.disabled), p.xb(13), p.lc("ngClass", p.qc(20, xi, t.hasFreelancer, !t.hasFreelancer)), p.xb(7), p.lc("ngIf", !t.prerenderDynamicLicenseTableLoaded), p.xb(1), p.lc("ngIf", t.prerenderDynamicLicenseTableLoaded), p.xb(1), p.lc("disabled", t.disabled), p.xb(14), p.lc("icon", p.oc(23, ki))) },
                    directives: [r.q, r.o, k.m, S.a],
                    pipes: [r.d, r.w],
                    styles: [""],
                    changeDetection: 0
                }), e
            })();
            var Bi = o("XUou");
            let Di = (() => {
                class e {
                    constructor() {}
                    ngOnInit() {}
                }
                return e.\u0275fac = function(t) { return new(t || e) }, e.\u0275cmp = p.Db({
                    type: e,
                    selectors: [
                        ["sbw-product-review"]
                    ],
                    inputs: { review: "review" },
                    decls: 26,
                    vars: 8,
                    consts: [
                        [1, "card", "mb-4"],
                        [1, "card-body"],
                        [1, "d-flex", "align-items-md-center", "justify-content-md-between", "flex-column", "flex-md-row", "small", "mb-3"],
                        [1, "mr-md-1"],
                        [1, "font-italic"],
                        [1, "ml-md-1"],
                        [3, "reviewedStars"],
                        [1, "review-content"],
                        [1, "card", "ml-5"],
                        [1, "d-flex", "small", "mb-3"]
                    ],
                    template: function(e, t) { 1 & e && (p.Pb(0, "div", 0), p.Pb(1, "div", 1), p.Pb(2, "div", 2), p.Pb(3, "div", 3), p.Pb(4, "strong"), p.Fc(5), p.Ob(), p.Pb(6, "span", 4), p.Fc(7, "(verified owner)"), p.Ob(), p.Fc(8), p.ec(9, "date"), p.Ob(), p.Pb(10, "div", 5), p.Kb(11, "sbw-rating-stars", 6), p.Ob(), p.Ob(), p.Pb(12, "div", 7), p.Pb(13, "p"), p.Fc(14), p.Ob(), p.Ob(), p.Ob(), p.Ob(), p.Pb(15, "div", 8), p.Pb(16, "div", 1), p.Pb(17, "div", 9), p.Pb(18, "div", 3), p.Pb(19, "strong"), p.Fc(20, "Start Bootstrap "), p.Ob(), p.Pb(21, "span", 4), p.Fc(22, "(developer response)"), p.Ob(), p.Ob(), p.Ob(), p.Pb(23, "div", 7), p.Pb(24, "p"), p.Fc(25), p.Ob(), p.Ob(), p.Ob(), p.Ob()), 2 & e && (p.xb(5), p.Hc("", t.review.userAbbreviatedName, " "), p.xb(3), p.Hc(" \u2013 ", p.gc(9, 5, t.review.createdAt, "longDate"), ""), p.xb(3), p.lc("reviewedStars", t.review.stars), p.xb(3), p.Gc(t.review.review), p.xb(11), p.Gc(t.review.response)) },
                    directives: [Bi.a],
                    pipes: [r.f],
                    styles: [""],
                    changeDetection: 0
                }), e
            })();

            function Ii(e, t) {
                if (1 & e && p.Kb(0, "sbw-product-review", 5), 2 & e) {
                    const e = p.dc().$implicit;
                    p.lc("review", e)
                }
            }

            function Ti(e, t) {
                if (1 & e && (p.Pb(0, "div", 0), p.Dc(1, Ii, 1, 1, "sbw-product-review", 4), p.Ob()), 2 & e) {
                    const e = t.$implicit;
                    p.xb(1), p.lc("ngIf", e.approved)
                }
            }
            let Ci = (() => {
                class e {
                    constructor() {}
                    ngOnInit() {}
                }
                return e.\u0275fac = function(t) { return new(t || e) }, e.\u0275cmp = p.Db({
                    type: e,
                    selectors: [
                        ["sbw-product-reviews"]
                    ],
                    inputs: { reviews: "reviews" },
                    decls: 5,
                    vars: 1,
                    consts: [
                        [1, "mb-4"],
                        [1, "row"],
                        [1, "col-lg-8"],
                        ["class", "mb-4", 4, "ngFor", "ngForOf"],
                        [3, "review", 4, "ngIf"],
                        [3, "review"]
                    ],
                    template: function(e, t) { 1 & e && (p.Pb(0, "h2", 0), p.Fc(1, "Product Reviews"), p.Ob(), p.Pb(2, "div", 1), p.Pb(3, "div", 2), p.Dc(4, Ti, 2, 1, "div", 3), p.Ob(), p.Ob()), 2 & e && (p.xb(4), p.lc("ngForOf", t.reviews)) },
                    directives: [r.p, r.q, Di],
                    styles: [""],
                    changeDetection: 0
                }), e
            })();
            const Li = { angular: { tooltip: "Fully integrated with the Angular 9+ web application framework", url: "assets/img/brand-logos/angular-icon.svg", alt: "Angular Logo" }, bootstrap_4: { tooltip: "Built with Bootstrap, the world\u2019s most popular front-end open source toolkit", url: "assets/img/brand-logos/bootstrap-4.svg", alt: "Bootstrap 4 Logo" }, css: { tooltip: "Custom components, utilities, and other features built with CSS", url: "assets/img/brand-logos/css-3.svg", alt: "CSS 3 Logo" }, html: { tooltip: "Clean, adaptable, and fully responsive HTML build files", url: "assets/img/brand-logos/html-5.svg", alt: "HTML 5 Logo" }, pug: { tooltip: "HTML templating made easy with Pug source files", url: "assets/img/brand-logos/pug.svg", alt: "Pug Logo" }, sass: { tooltip: "Source files built with the premier CSS extension language", url: "assets/img/brand-logos/sass.svg", alt: "Sass Logo" }, typescript: { tooltip: "Build more efficient, scalable web applications with TypeScript", url: "assets/img/brand-logos/typescript.svg", alt: "Typescript Logo" }, vue: { tooltip: "Built with the versatile, progressive JavaScript framework, Vue.js", url: "assets/img/brand-logos/vue-js.svg", alt: "Vue JS Logo" } };
            let Ki = (() => {
                class e { ngOnInit() { this.techStackIcon = Li[this.iconName] } }
                return e.\u0275fac = function(t) { return new(t || e) }, e.\u0275cmp = p.Db({
                    type: e,
                    selectors: [
                        ["sbw-tech-stack-icon"]
                    ],
                    inputs: { iconName: "iconName" },
                    decls: 3,
                    vars: 7,
                    consts: [
                        ["placement", "bottom", 1, "icon-tech-stack", 3, "ngbTooltip"],
                        [3, "src", "alt"]
                    ],
                    template: function(e, t) { 1 & e && (p.Pb(0, "div", 0), p.Kb(1, "img", 1), p.ec(2, "safe"), p.Ob()), 2 & e && (p.lc("ngbTooltip", t.techStackIcon.tooltip), p.xb(1), p.lc("src", p.hc(2, 3, t.techStackIcon.url, "resourceURL", "NONE"), p.yc)("alt", t.techStackIcon.alt)) },
                    directives: [k.m],
                    pipes: [oe.a],
                    styles: [".icon-tech-stack[_ngcontent-%COMP%]{display:flex;height:3.5rem;width:3.5rem;align-items:center;justify-content:center;border-radius:100%;box-shadow:0 .15rem 1.75rem 0 rgba(33,40,50,.15);flex-shrink:0;margin-right:.5rem;margin-left:.5rem;margin-bottom:1rem}.icon-tech-stack[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:1.5rem}"],
                    changeDetection: 0
                }), e
            })();
            const Mi = ["licenseTable"],
                Ei = ["couponToast"],
                Ai = function() { return ["fad", "shopping-cart"] };

            function Ni(e, t) { 1 & e && (p.Nb(0), p.Kb(1, "fa-icon", 17), p.Pb(2, "span"), p.Fc(3, "Buy Now - $XX"), p.Ob(), p.Mb()), 2 & e && (p.xb(1), p.lc("icon", p.oc(1, Ai))) }

            function ji(e, t) {
                if (1 & e && (p.Pb(0, "span", 58), p.Fc(1), p.ec(2, "currency"), p.Ob()), 2 & e) {
                    const e = p.dc(2);
                    p.xb(1), p.Hc("Buy Now - ", p.ic(2, 1, e.cheapestPricing.price / 100, "USD", "symbol", "1.0"), "")
                }
            }

            function Ri(e, t) {
                if (1 & e && (p.Pb(0, "span", 59), p.Fc(1, "Buy Now - "), p.Pb(2, "del", 60), p.Fc(3), p.ec(4, "currency"), p.Ob(), p.Fc(5), p.ec(6, "currency"), p.Ob()), 2 & e) {
                    const e = p.dc(2);
                    p.xb(3), p.Gc(p.ic(4, 2, e.cheapestPricing.price / 100, "USD", "symbol", "1.0")), p.xb(2), p.Hc(" ", p.ic(6, 7, e.cheapestPricing.salePrice / 100, "USD", "symbol", "1.0"), "")
                }
            }

            function Ui(e, t) {
                if (1 & e && (p.Nb(0), p.Kb(1, "fa-icon", 17), p.Dc(2, ji, 3, 6, "span", 56), p.Dc(3, Ri, 7, 12, "span", 57), p.Mb()), 2 & e) {
                    const e = p.dc();
                    p.xb(1), p.lc("icon", p.oc(3, Ai)), p.xb(1), p.lc("ngIf", !e.cheapestPricing.salePrice), p.xb(1), p.lc("ngIf", e.cheapestPricing.salePrice)
                }
            }
            const qi = function() { return ["fas", "star"] };

            function Gi(e, t) { 1 & e && (p.Pb(0, "div", 47), p.Pb(1, "div", 61), p.Pb(2, "div", 62), p.Kb(3, "fa-icon", 63), p.Kb(4, "fa-icon", 63), p.Kb(5, "fa-icon", 63), p.Kb(6, "fa-icon", 63), p.Kb(7, "fa-icon", 63), p.Ob(), p.Fc(8, " (X customer reviews) "), p.Ob(), p.Kb(9, "hr"), p.Pb(10, "div", 64), p.Pb(11, "div", 65), p.Fc(12, "Total Sales"), p.Ob(), p.Pb(13, "div"), p.Kb(14, "fa-icon", 17), p.Fc(15, "X,XXX"), p.Ob(), p.Ob(), p.Kb(16, "hr"), p.Pb(17, "div", 64), p.Pb(18, "div", 65), p.Fc(19, "Released"), p.Ob(), p.Pb(20, "div"), p.Fc(21, "XXX XX, XXXX"), p.Ob(), p.Ob(), p.Kb(22, "hr"), p.Pb(23, "div", 64), p.Pb(24, "div", 65), p.Fc(25, "Last Update"), p.Ob(), p.Pb(26, "div"), p.Fc(27, "X XXXX ago"), p.Ob(), p.Ob(), p.Kb(28, "hr"), p.Pb(29, "div", 64), p.Pb(30, "div", 65), p.Fc(31, "Product Version"), p.Ob(), p.Pb(32, "div"), p.Fc(33, "X.X.X"), p.Ob(), p.Ob(), p.Kb(34, "hr"), p.Pb(35, "div", 64), p.Pb(36, "div", 65), p.Fc(37, "Bootstrap Version"), p.Ob(), p.Pb(38, "div"), p.Fc(39, "X.X.X"), p.Ob(), p.Ob(), p.Ob()), 2 & e && (p.xb(3), p.lc("icon", p.oc(6, qi)), p.xb(1), p.lc("icon", p.oc(7, qi)), p.xb(1), p.lc("icon", p.oc(8, qi)), p.xb(1), p.lc("icon", p.oc(9, qi)), p.xb(1), p.lc("icon", p.oc(10, qi)), p.xb(7), p.lc("icon", p.oc(11, Ai))) }

            function Hi(e, t) {
                if (1 & e && (p.Pb(0, "div", 47), p.Pb(1, "div", 61), p.Pb(2, "div", 62), p.Kb(3, "fa-icon", 63), p.Kb(4, "fa-icon", 63), p.Kb(5, "fa-icon", 63), p.Kb(6, "fa-icon", 63), p.Kb(7, "fa-icon", 63), p.Ob(), p.Fc(8), p.Ob(), p.Kb(9, "hr"), p.Pb(10, "div", 64), p.Pb(11, "div", 65), p.Fc(12, "Total Sales"), p.Ob(), p.Pb(13, "div"), p.Kb(14, "fa-icon", 17), p.Fc(15), p.ec(16, "number"), p.Ob(), p.Ob(), p.Kb(17, "hr"), p.Pb(18, "div", 64), p.Pb(19, "div", 65), p.Fc(20, "Released"), p.Ob(), p.Pb(21, "div"), p.Fc(22), p.ec(23, "date"), p.Ob(), p.Ob(), p.Kb(24, "hr"), p.Pb(25, "div", 64), p.Pb(26, "div", 65), p.Fc(27, "Last Update"), p.Ob(), p.Pb(28, "div"), p.Fc(29), p.ec(30, "formatDistanceToNow"), p.Ob(), p.Ob(), p.Kb(31, "hr"), p.Pb(32, "div", 64), p.Pb(33, "div", 65), p.Fc(34, "Product Version"), p.Ob(), p.Pb(35, "div"), p.Fc(36), p.Ob(), p.Ob(), p.Kb(37, "hr"), p.Pb(38, "div", 64), p.Pb(39, "div", 65), p.Fc(40, "Bootstrap Version"), p.Ob(), p.Pb(41, "div"), p.Fc(42), p.Ob(), p.Ob(), p.Ob()), 2 & e) {
                    const e = p.dc();
                    p.xb(3), p.lc("icon", p.oc(20, qi)), p.xb(1), p.lc("icon", p.oc(21, qi)), p.xb(1), p.lc("icon", p.oc(22, qi)), p.xb(1), p.lc("icon", p.oc(23, qi)), p.xb(1), p.lc("icon", p.oc(24, qi)), p.xb(1), p.Hc(" (", e.product.reviews.length, " customer reviews) "), p.xb(6), p.lc("icon", p.oc(25, Ai)), p.xb(1), p.Gc(p.hc(16, 12, e.product.downloadCount, "1.0", "en-US")), p.xb(7), p.Gc(p.fc(23, 16, e.product.releasedDate)), p.xb(7), p.Hc("", p.fc(30, 18, e.product.updatedDate), " ago"), p.xb(7), p.Gc(e.product.productVersion), p.xb(6), p.Gc(e.product.bootstrapVersion)
                }
            }

            function _i(e, t) { 1 & e && (p.Nb(0), p.Kb(1, "fa-icon", 17), p.Pb(2, "span"), p.Fc(3, "Buy Now - $XX"), p.Ob(), p.Mb()), 2 & e && (p.xb(1), p.lc("icon", p.oc(1, Ai))) }

            function Vi(e, t) {
                if (1 & e && (p.Pb(0, "span", 68), p.Fc(1), p.ec(2, "currency"), p.Ob()), 2 & e) {
                    const e = p.dc(2);
                    p.xb(1), p.Hc("Buy Now - ", p.ic(2, 1, e.cheapestPricing.price / 100, "USD", "symbol", "1.0"), "")
                }
            }

            function Ji(e, t) {
                if (1 & e && (p.Pb(0, "span", 69), p.Fc(1, "Buy Now - "), p.Pb(2, "del", 60), p.Fc(3), p.ec(4, "currency"), p.Ob(), p.Fc(5), p.ec(6, "currency"), p.Ob()), 2 & e) {
                    const e = p.dc(2);
                    p.xb(3), p.Gc(p.ic(4, 2, e.cheapestPricing.price / 100, "USD", "symbol", "1.0")), p.xb(2), p.Hc(" ", p.ic(6, 7, e.cheapestPricing.salePrice / 100, "USD", "symbol", "1.0"), "")
                }
            }

            function Wi(e, t) {
                if (1 & e && (p.Nb(0), p.Kb(1, "fa-icon", 17), p.Dc(2, Vi, 3, 6, "span", 66), p.Dc(3, Ji, 7, 12, "span", 67), p.Mb()), 2 & e) {
                    const e = p.dc();
                    p.xb(1), p.lc("icon", p.oc(3, Ai)), p.xb(1), p.lc("ngIf", !e.cheapestPricing.salePrice), p.xb(1), p.lc("ngIf", e.cheapestPricing.salePrice)
                }
            }

            function Xi(e, t) { 1 & e && (p.Kb(0, "sbw-tech-stack-icon", 70), p.ec(1, "lowercase")), 2 & e && p.lc("iconName", p.fc(1, 1, t.$implicit)) }

            function zi(e, t) {
                if (1 & e && (p.Nb(0), p.Kb(1, "fa-icon", 17), p.Pb(2, "span"), p.Fc(3), p.Ob(), p.Mb()), 2 & e) {
                    const e = p.dc();
                    p.xb(1), p.lc("icon", p.oc(2, Ai)), p.xb(2), p.Hc("Buy ", e.product.displayName, " - $XX")
                }
            }

            function Qi(e, t) {
                if (1 & e && (p.Pb(0, "span", 73), p.Fc(1), p.ec(2, "currency"), p.Ob()), 2 & e) {
                    const e = p.dc(2);
                    p.xb(1), p.Ic("Buy ", e.product.displayName, " - ", p.ic(2, 2, e.cheapestPricing.price / 100, "USD", "symbol", "1.0"), "")
                }
            }

            function $i(e, t) {
                if (1 & e && (p.Pb(0, "span", 74), p.Fc(1), p.Pb(2, "del", 60), p.Fc(3), p.ec(4, "currency"), p.Ob(), p.Fc(5), p.ec(6, "currency"), p.Ob()), 2 & e) {
                    const e = p.dc(2);
                    p.xb(1), p.Hc("Buy ", e.product.displayName, " - "), p.xb(2), p.Gc(p.ic(4, 3, e.cheapestPricing.price / 100, "USD", "symbol", "1.0")), p.xb(2), p.Hc(" ", p.ic(6, 8, e.cheapestPricing.salePrice / 100, "USD", "symbol", "1.0"), "")
                }
            }

            function Zi(e, t) {
                if (1 & e && (p.Nb(0), p.Kb(1, "fa-icon", 17), p.Dc(2, Qi, 3, 7, "span", 71), p.Dc(3, $i, 7, 13, "span", 72), p.Mb()), 2 & e) {
                    const e = p.dc();
                    p.xb(1), p.lc("icon", p.oc(3, Ai)), p.xb(1), p.lc("ngIf", !e.cheapestPricing.salePrice), p.xb(1), p.lc("ngIf", e.cheapestPricing.salePrice)
                }
            }

            function Yi(e, t) { 1 & e && p.Kb(0, "div", 75) }
            const er = function() { return ["fad", "external-link"] },
                tr = function() { return ["fad", "eye"] },
                or = function() { return ["fad", "books"] },
                ir = function() { return ["fad", "badge-check"] };
            let rr = (() => {
                class e {
                    constructor(e, t, o, i) { this.utilityService = e, this.analyticsService = t, this.platformService = o, this.changeDetectorRef = i, this.prerenderDynamicThemeProLoaded = !1 }
                    ngOnInit() { this.cheapestPricing = this._setCheapestPricing(this.product) }
                    ngAfterViewInit() { this.platformService.isServer || (this.prerenderDynamicThemeProLoaded = !0, this.changeDetectorRef.detectChanges()) }
                    buyNow(e) {
                        const t = this.licenseTable.elementRef.nativeElement.getBoundingClientRect().top + this.utilityService.window.pageYOffset - 96;
                        this.utilityService.window.scrollTo({ top: t, behavior: "smooth" }), this.analyticsService.sendEventCustom("buy-now-leader", "theme-pro-page", e)
                    }
                    _setCheapestPricing(e) { return e.pricingsMapped.freelancer ? e.pricingsMapped.freelancer : e.pricingsMapped.developer }
                }
                return e.\u0275fac = function(t) { return new(t || e)(p.Jb(h.s), p.Jb(h.a), p.Jb(h.n), p.Jb(p.h)) }, e.\u0275cmp = p.Db({
                    type: e,
                    selectors: [
                        ["sbw-theme-pro"]
                    ],
                    viewQuery: function(e, t) {
                        if (1 & e && (p.Jc(Mi, !0), p.Jc(Ei, !0, p.K)), 2 & e) {
                            let e;
                            p.sc(e = p.ac()) && (t.licenseTable = e.first), p.sc(e = p.ac()) && (t.couponToast = e.first)
                        }
                    },
                    inputs: { product: "product" },
                    decls: 124,
                    vars: 47,
                    consts: [
                        ["sectionClasses", "py-5 bg-light mt-page-header", "borderType", "angled", "borderClasses", "text-white"],
                        [1, "container"],
                        [1, "mb-4", "d-lg-none"],
                        ["data-cy", "productDisplayName", 1, "mb-0"],
                        [1, "mb-0"],
                        [1, "row"],
                        [1, "col-lg-8"],
                        ["data-cy", "productPreviewLink", "target", "_blank", 1, "preview-img", "shadow", "mb-4", 3, "href"],
                        [1, "preview-img-overlay"],
                        [1, "btn", "btn-white"],
                        [1, "text-gray-600", "mr-1", 3, "icon"],
                        [1, "m-0"],
                        ["type", "image/webp", 3, "srcset"],
                        ["type", "image/jpeg", 3, "srcset"],
                        [1, "img-fluid", 3, "src", "alt"],
                        [1, "d-flex", "justify-content-between", "mb-4", "mb-lg-0"],
                        ["target", "_blank", 1, "btn", "btn-white", "shadow", "mr-3", 3, "href"],
                        [1, "mr-1", 3, "icon"],
                        [1, "d-none", "d-sm-inline"],
                        [1, "col-lg-4"],
                        [1, "mb-4", "d-none", "d-lg-block"],
                        [1, "mb-4"],
                        [1, "btn", "btn-primary", "btn-lg", "btn-block", "font-weight-500", "shadow", 3, "click"],
                        [4, "ngIf"],
                        [1, "card", "mb-3"],
                        ["class", "card-body", 4, "ngIf"],
                        [1, "text-center"],
                        [1, "badge", "badge-yellow", "badge-pill", "font-weight-500"],
                        ["sectionClasses", "py-5", "borderType", "angled", "borderClasses", "text-light"],
                        [1, "col-lg-8", "mb-4", "mb-lg-0"],
                        [3, "md"],
                        [1, "position-sticky", "description-sidebar"],
                        [1, "btn", "btn-primary", "btn-lg", "btn-block", "font-weight-500", "shadow", "mb-4", 3, "click"],
                        [1, "icons-tech", "justify-content-center"],
                        [3, "iconName", 4, "ngFor", "ngForOf"],
                        ["sectionClasses", "py-5 bg-light", "borderType", "angled", "borderClasses", "text-white"],
                        ["licenseTable", ""],
                        [1, "row", "justify-content-center"],
                        [1, "col-lg-7"],
                        [1, "text-center", "mb-3"],
                        [1, "text-primary"],
                        ["sectionClasses", "pb-5", "borderType", "angled", "borderClasses", "text-light"],
                        [3, "product"],
                        [3, "reviews"],
                        [1, "row", "mb-4"],
                        [1, "col-lg-4", "mb-4", "mb-lg-0"],
                        [1, "card", "h-100"],
                        [1, "card-body"],
                        [1, "card-text", "text-xs"],
                        [1, "card-footer", "d-flex", "align-items-center", "justify-content-between"],
                        [1, "text-xs", "font-italic"],
                        [1, "badge", "badge-green-soft", "text-green"],
                        [1, "mt-10"],
                        [1, "col-lg-6", "text-center"],
                        [1, "btn", "btn-primary", "btn-lg", "font-weight-500", "shadow", "mb-4", 3, "click"],
                        ["class", "hidden", "data-cy", "prerenderDynamicThemeProLoaded", 4, "ngIf"],
                        ["data-cy", "buyNowButton", 4, "ngIf"],
                        ["data-cy", "buyNowSaleButton", 4, "ngIf"],
                        ["data-cy", "buyNowButton"],
                        ["data-cy", "buyNowSaleButton"],
                        [1, "text-white-50"],
                        [1, "text-center", "text-xs"],
                        [1, "text-yellow"],
                        [3, "icon"],
                        [1, "d-flex", "align-items-center", "justify-content-between", "text-xs"],
                        [1, "font-weight-500"],
                        ["data-cy", "buyNowButtonSticky", 4, "ngIf"],
                        ["data-cy", "buyNowSaleButtonSticky", 4, "ngIf"],
                        ["data-cy", "buyNowButtonSticky"],
                        ["data-cy", "buyNowSaleButtonSticky"],
                        [3, "iconName"],
                        ["data-cy", "buyNowButtonFooter", 4, "ngIf"],
                        ["data-cy", "buyNowSaleButtonFooter", 4, "ngIf"],
                        ["data-cy", "buyNowButtonFooter"],
                        ["data-cy", "buyNowSaleButtonFooter"],
                        ["data-cy", "prerenderDynamicThemeProLoaded", 1, "hidden"]
                    ],
                    template: function(e, t) { 1 & e && (p.Pb(0, "sbpro-page-section", 0), p.Pb(1, "div", 1), p.Pb(2, "div", 2), p.Pb(3, "h1", 3), p.Fc(4), p.Ob(), p.Pb(5, "p", 4), p.Fc(6), p.Ob(), p.Ob(), p.Pb(7, "div", 5), p.Pb(8, "div", 6), p.Pb(9, "a", 7), p.Pb(10, "div", 8), p.Pb(11, "div", 9), p.Kb(12, "fa-icon", 10), p.Fc(13, "Launch Live Preview"), p.Ob(), p.Ob(), p.Pb(14, "figure", 11), p.Pb(15, "picture"), p.Kb(16, "source", 12), p.ec(17, "safe"), p.ec(18, "webpExt"), p.Kb(19, "source", 13), p.ec(20, "safe"), p.Kb(21, "img", 14), p.ec(22, "safe"), p.Ob(), p.Ob(), p.Ob(), p.Pb(23, "div", 15), p.Pb(24, "div"), p.Pb(25, "a", 16), p.Kb(26, "fa-icon", 17), p.Pb(27, "span", 18), p.Fc(28, "Live "), p.Ob(), p.Fc(29, "Preview"), p.Ob(), p.Pb(30, "a", 16), p.Kb(31, "fa-icon", 17), p.Fc(32, "Documentation"), p.Ob(), p.Ob(), p.Ob(), p.Ob(), p.Pb(33, "div", 19), p.Pb(34, "div", 20), p.Pb(35, "h1", 4), p.Fc(36), p.Ob(), p.Pb(37, "p", 4), p.Fc(38), p.Ob(), p.Ob(), p.Pb(39, "div", 21), p.Pb(40, "button", 22), p.Zb("click", function() { return t.buyNow("top") }), p.Dc(41, Ni, 4, 2, "ng-container", 23), p.Dc(42, Ui, 4, 4, "ng-container", 23), p.Ob(), p.Ob(), p.Pb(43, "div", 24), p.Dc(44, Gi, 40, 12, "div", 25), p.Dc(45, Hi, 43, 26, "div", 25), p.Ob(), p.Pb(46, "div", 26), p.Pb(47, "div", 27), p.Kb(48, "fa-icon", 17), p.Fc(49, "Verified Pro Product"), p.Ob(), p.Ob(), p.Ob(), p.Ob(), p.Ob(), p.Ob(), p.Pb(50, "sbpro-page-section", 28), p.Pb(51, "div", 1), p.Pb(52, "div", 5), p.Pb(53, "div", 29), p.Kb(54, "sbw-markdown-html", 30), p.Ob(), p.Pb(55, "div", 19), p.Pb(56, "div", 31), p.Pb(57, "button", 32), p.Zb("click", function() { return t.buyNow("sticky") }), p.Dc(58, _i, 4, 2, "ng-container", 23), p.Dc(59, Wi, 4, 4, "ng-container", 23), p.Ob(), p.Pb(60, "div", 33), p.Dc(61, Xi, 2, 3, "sbw-tech-stack-icon", 34), p.Ob(), p.Ob(), p.Ob(), p.Ob(), p.Ob(), p.Ob(), p.Pb(62, "sbpro-page-section", 35, 36), p.Pb(64, "div", 1), p.Pb(65, "div", 37), p.Pb(66, "div", 38), p.Pb(67, "div", 39), p.Pb(68, "h2"), p.Fc(69, "Join over "), p.Pb(70, "span", 40), p.Fc(71, "12,000,000+"), p.Ob(), p.Fc(72, " developers who have downloaded Start Bootstrap's themes since 2013!"), p.Ob(), p.Ob(), p.Ob(), p.Ob(), p.Ob(), p.Ob(), p.Pb(73, "sbpro-page-section", 41), p.Kb(74, "sbw-license-table", 42), p.Ob(), p.Pb(75, "sbpro-page-section", 35), p.Pb(76, "div", 1), p.Kb(77, "sbw-product-reviews", 43), p.Ob(), p.Ob(), p.Pb(78, "sbpro-page-section", 28), p.Pb(79, "div", 1), p.Pb(80, "h3", 21), p.Fc(81, "See what others have to say about our products..."), p.Ob(), p.Pb(82, "div", 44), p.Pb(83, "div", 45), p.Pb(84, "div", 46), p.Pb(85, "div", 47), p.Pb(86, "p", 48), p.Fc(87, "I've purchased a theme from you and I just want to thank you for really nice structured code, a really nice project setup, and most importantly introducing .pug templates to me. I've never worked with them before and I've discovered how they are a joy to work with!"), p.Ob(), p.Ob(), p.Pb(88, "div", 49), p.Pb(89, "div", 50), p.Fc(90, "M. Laco"), p.Ob(), p.Pb(91, "div", 51), p.Fc(92, "Verified Purchase"), p.Ob(), p.Ob(), p.Ob(), p.Ob(), p.Pb(93, "div", 45), p.Pb(94, "div", 46), p.Pb(95, "div", 47), p.Pb(96, "p", 48), p.Fc(97, "I love the fact that your template doesn\u2019t stray too far if at all from the bootstrap conventions and I find myself periodically referring to their docs with great success."), p.Ob(), p.Ob(), p.Pb(98, "div", 49), p.Pb(99, "div", 50), p.Fc(100, "V. Menendez"), p.Ob(), p.Pb(101, "div", 51), p.Fc(102, "Verified Purchase"), p.Ob(), p.Ob(), p.Ob(), p.Ob(), p.Pb(103, "div", 19), p.Pb(104, "div", 46), p.Pb(105, "div", 47), p.Pb(106, "p", 48), p.Fc(107, "I've been coding websites for 12 years now, and I have never seen coding as neat, well commented and easy to follow as I see in your templates. It's just beautiful. I just wanted to write a short note saying that you're doing an amazing job."), p.Ob(), p.Ob(), p.Pb(108, "div", 49), p.Pb(109, "div", 50), p.Fc(110, "C. Vogel"), p.Ob(), p.Pb(111, "div", 51), p.Fc(112, "Verified Purchase"), p.Ob(), p.Ob(), p.Ob(), p.Ob(), p.Ob(), p.Pb(113, "div", 52), p.Pb(114, "div", 37), p.Pb(115, "div", 53), p.Pb(116, "h3"), p.Fc(117, "Ready to get started?"), p.Ob(), p.Pb(118, "p"), p.Fc(119, "Join over 12,000,000 developers who have already downloaded Bootstrap themes and templates from Start Bootstrap. We are committed to quality code, intuitive design, and best practices when building our products."), p.Ob(), p.Pb(120, "button", 54), p.Zb("click", function() { return t.buyNow("footer") }), p.Dc(121, zi, 4, 3, "ng-container", 23), p.Dc(122, Zi, 4, 4, "ng-container", 23), p.Ob(), p.Ob(), p.Ob(), p.Ob(), p.Ob(), p.Ob(), p.Dc(123, Yi, 1, 0, "div", 55)), 2 & e && (p.xb(4), p.Gc(t.product.displayName), p.xb(2), p.Gc(t.product.description.bump), p.xb(3), p.lc("href", "previews/" + t.product.slug, p.yc), p.xb(3), p.lc("icon", p.oc(43, er)), p.xb(4), p.lc("srcset", p.hc(17, 28, p.gc(18, 32, null == t.product.images ? null : t.product.images.primaryImage.high, "high"), "resourceURL", "NONE"), p.yc), p.xb(3), p.lc("srcset", p.hc(20, 35, null == t.product.images ? null : t.product.images.primaryImage.high, "resourceURL", "NONE"), p.yc), p.xb(2), p.lc("src", p.hc(22, 39, null == t.product.images ? null : t.product.images.primaryImage.high, "resourceURL", "NONE"), p.yc)("alt", null == t.product.images ? null : t.product.images.primaryImage.alt), p.xb(4), p.lc("href", "previews/" + t.product.slug, p.yc), p.xb(1), p.lc("icon", p.oc(44, tr)), p.xb(4), p.lc("href", "https://docs.startbootstrap.com/" + t.product.slug, p.yc), p.xb(1), p.lc("icon", p.oc(45, or)), p.xb(5), p.Gc(t.product.displayName), p.xb(2), p.Gc(t.product.description.bump), p.xb(3), p.lc("ngIf", !t.prerenderDynamicThemeProLoaded), p.xb(1), p.lc("ngIf", t.prerenderDynamicThemeProLoaded), p.xb(2), p.lc("ngIf", !t.prerenderDynamicThemeProLoaded), p.xb(1), p.lc("ngIf", t.prerenderDynamicThemeProLoaded), p.xb(3), p.lc("icon", p.oc(46, ir)), p.xb(6), p.lc("md", t.product.description.longDescription), p.xb(4), p.lc("ngIf", !t.prerenderDynamicThemeProLoaded), p.xb(1), p.lc("ngIf", t.prerenderDynamicThemeProLoaded), p.xb(2), p.lc("ngForOf", t.product.technologies), p.xb(13), p.lc("product", t.product), p.xb(3), p.lc("reviews", t.product.reviews), p.xb(44), p.lc("ngIf", !t.prerenderDynamicThemeProLoaded), p.xb(1), p.lc("ngIf", t.prerenderDynamicThemeProLoaded), p.xb(1), p.lc("ngIf", t.prerenderDynamicThemeProLoaded)) },
                    directives: [O.a, S.a, r.q, Qe.a, r.p, Si, Ci, Ki],
                    pipes: [oe.a, ie.a, r.d, r.g, r.f, Lo.a, r.n],
                    styles: [""],
                    changeDetection: 0
                }), e
            })();
            const nr = ["licenseTable"];

            function sr(e, t) { 1 & e && p.Kb(0, "img", 31) }

            function cr(e, t) { 1 & e && p.Kb(0, "img", 32) }

            function ar(e, t) { 1 & e && (p.Nb(0), p.Pb(1, "span"), p.Fc(2, "Buy Now - $XX"), p.Ob(), p.Mb()) }

            function br(e, t) {
                if (1 & e && (p.Pb(0, "span", 35), p.Fc(1), p.ec(2, "currency"), p.Ob()), 2 & e) {
                    const e = p.dc(2);
                    p.xb(1), p.Hc("Buy Now - ", p.ic(2, 1, e.cheapestPricing.price / 100, "USD", "symbol", "1.0"), "")
                }
            }

            function lr(e, t) {
                if (1 & e && (p.Pb(0, "span", 36), p.Fc(1, "Buy Now - "), p.Pb(2, "del", 37), p.Fc(3), p.ec(4, "currency"), p.Ob(), p.Fc(5), p.ec(6, "currency"), p.Ob()), 2 & e) {
                    const e = p.dc(2);
                    p.xb(3), p.Gc(p.ic(4, 2, e.cheapestPricing.price / 100, "USD", "symbol", "1.0")), p.xb(2), p.Hc(" ", p.ic(6, 7, e.cheapestPricing.salePrice / 100, "USD", "symbol", "1.0"), "")
                }
            }

            function dr(e, t) {
                if (1 & e && (p.Nb(0), p.Dc(1, br, 3, 6, "span", 33), p.Dc(2, lr, 7, 12, "span", 34), p.Mb()), 2 & e) {
                    const e = p.dc();
                    p.xb(1), p.lc("ngIf", !e.cheapestPricing.salePrice), p.xb(1), p.lc("ngIf", e.cheapestPricing.salePrice)
                }
            }

            function pr(e, t) { 1 & e && (p.Nb(0), p.Pb(1, "span"), p.Fc(2, "Buy Now - $XX"), p.Ob(), p.Mb()) }

            function ur(e, t) {
                if (1 & e && (p.Pb(0, "span", 40), p.Fc(1), p.ec(2, "currency"), p.Ob()), 2 & e) {
                    const e = p.dc(2);
                    p.xb(1), p.Hc("Buy Now - ", p.ic(2, 1, e.cheapestPricing.price / 100, "USD", "symbol", "1.0"), "")
                }
            }

            function hr(e, t) {
                if (1 & e && (p.Pb(0, "span", 41), p.Fc(1, "Buy Now - "), p.Pb(2, "del", 42), p.Fc(3), p.ec(4, "currency"), p.Ob(), p.Fc(5), p.ec(6, "currency"), p.Ob()), 2 & e) {
                    const e = p.dc(2);
                    p.xb(3), p.Gc(p.ic(4, 2, e.cheapestPricing.price / 100, "USD", "symbol", "1.0")), p.xb(2), p.Hc(" ", p.ic(6, 7, e.cheapestPricing.salePrice / 100, "USD", "symbol", "1.0"), "")
                }
            }

            function mr(e, t) {
                if (1 & e && (p.Nb(0), p.Dc(1, ur, 3, 6, "span", 38), p.Dc(2, hr, 7, 12, "span", 39), p.Mb()), 2 & e) {
                    const e = p.dc();
                    p.xb(1), p.lc("ngIf", !e.cheapestPricing.salePrice), p.xb(1), p.lc("ngIf", e.cheapestPricing.salePrice)
                }
            }

            function gr(e, t) { 1 & e && (p.Kb(0, "sbw-tech-stack-icon", 43), p.ec(1, "lowercase")), 2 & e && p.lc("iconName", p.fc(1, 1, t.$implicit)) }

            function fr(e, t) { 1 & e && p.Kb(0, "div", 44) }
            const Pr = function() { return ["fad", "shopping-cart"] };
            let vr = (() => {
                class e {
                    constructor(e, t, o, i) { this.utilityService = e, this.analyticsService = t, this.changeDetectorRef = o, this.platformService = i, this.productClass = "", this.prerenderDynamicThemeBundleLoaded = !1 }
                    ngOnInit() { this._productChangeProcessing() }
                    ngOnChanges(e) { e.product.firstChange || e.product && (this.product = e.product.currentValue, this._productChangeProcessing(), this.changeDetectorRef.detectChanges()) }
                    ngAfterViewInit() { this.platformService.isServer || (this.prerenderDynamicThemeBundleLoaded = !0, this.changeDetectorRef.detectChanges()) }
                    _productChangeProcessing() { "pro-angular-bundle" === this.product.slug && (this.productClass = "overlay-angular"), "pro-html-bundle" === this.product.slug && (this.productClass = "overlay-html"), this.cheapestPricing = this._setCheapestPricing(this.product) }
                    buyNow(e) {
                        const t = this.licenseTable.elementRef.nativeElement.getBoundingClientRect().top + this.utilityService.window.pageYOffset - 96;
                        this.utilityService.window.scrollTo({ top: t, behavior: "smooth" }), this.analyticsService.sendEventCustom("buy-now-leader", "theme-bundle-page", e)
                    }
                    _setCheapestPricing(e) { return e.pricingsMapped.freelancer ? e.pricingsMapped.freelancer : e.pricingsMapped.developer }
                }
                return e.\u0275fac = function(t) { return new(t || e)(p.Jb(h.s), p.Jb(h.a), p.Jb(p.h), p.Jb(h.n)) }, e.\u0275cmp = p.Db({
                    type: e,
                    selectors: [
                        ["sbw-theme-bundle"]
                    ],
                    viewQuery: function(e, t) {
                        if (1 & e && p.Jc(nr, !0), 2 & e) {
                            let e;
                            p.sc(e = p.ac()) && (t.licenseTable = e.first)
                        }
                    },
                    inputs: { product: "product" },
                    features: [p.vb],
                    decls: 43,
                    vars: 17,
                    consts: [
                        ["borderType", "rounded", "borderClasses", "text-white", 3, "headerClasses"],
                        [1, "container"],
                        [1, "row", "justify-content-center"],
                        [1, "col-lg-8", "text-center"],
                        [1, "bundle-tech-img", "mb-4"],
                        ["src", "assets/img/brand-logos/bootstrap-4.svg", "alt", "Bootstrap 4 Logo", 4, "ngIf"],
                        ["src", "assets/img/brand-logos/angular-icon.svg", "alt", "Angular Logo", 4, "ngIf"],
                        ["data-cy", "productDisplayName", 1, "bundle-heading", "text-white", "mb-0"],
                        [1, "lead", "text-white-75", "mb-4"],
                        [1, "mb-4"],
                        [1, "btn", "btn-white", "font-weight-500", "shadow", 3, "click"],
                        [1, "text-gray-500", "mr-2", 3, "icon"],
                        [4, "ngIf"],
                        ["sectionClasses", "py-5", "borderType", "angled", "borderClasses", "text-light"],
                        [1, "row"],
                        [1, "col-lg-8", "mb-4", "mb-lg-0"],
                        [3, "md"],
                        [1, "col-lg-4"],
                        [1, "position-sticky", "description-sidebar"],
                        [1, "btn", "btn-primary", "btn-lg", "btn-block", "font-weight-500", "shadow", "mb-4", 3, "click"],
                        [1, "mr-1", 3, "icon"],
                        [1, "icons-tech", "justify-content-center"],
                        [3, "iconName", 4, "ngFor", "ngForOf"],
                        ["sectionClasses", "py-5 bg-light", "borderType", "angled", "borderClasses", "text-white"],
                        ["licenseTable", ""],
                        [1, "col-lg-7"],
                        [1, "text-center", "mb-3"],
                        [1, "text-primary"],
                        ["sectionClasses", "pb-5", "borderType", "angled", "borderClasses", "text-light"],
                        [3, "product"],
                        ["class", "hidden", "data-cy", "prerenderDynamicThemeBundleLoaded", 4, "ngIf"],
                        ["src", "assets/img/brand-logos/bootstrap-4.svg", "alt", "Bootstrap 4 Logo"],
                        ["src", "assets/img/brand-logos/angular-icon.svg", "alt", "Angular Logo"],
                        ["data-cy", "buyNowButton", 4, "ngIf"],
                        ["data-cy", "buyNowSaleButton", 4, "ngIf"],
                        ["data-cy", "buyNowButton"],
                        ["data-cy", "buyNowSaleButton"],
                        [1, "text-gray-500"],
                        ["data-cy", "buyNowButtonSticky", 4, "ngIf"],
                        ["data-cy", "buyNowSaleButtonSticky", 4, "ngIf"],
                        ["data-cy", "buyNowButtonSticky"],
                        ["data-cy", "buyNowSaleButtonSticky"],
                        [1, "text-white-50"],
                        [3, "iconName"],
                        ["data-cy", "prerenderDynamicThemeBundleLoaded", 1, "hidden"]
                    ],
                    template: function(e, t) { 1 & e && (p.Pb(0, "sbpro-page-header", 0), p.Pb(1, "div", 1), p.Pb(2, "div", 2), p.Pb(3, "div", 3), p.Pb(4, "div", 4), p.Dc(5, sr, 1, 0, "img", 5), p.Dc(6, cr, 1, 0, "img", 6), p.Ob(), p.Pb(7, "h1", 7), p.Fc(8), p.Ob(), p.Pb(9, "p", 8), p.Fc(10), p.Ob(), p.Pb(11, "div", 9), p.Pb(12, "button", 10), p.Zb("click", function() { return t.buyNow("top") }), p.Kb(13, "fa-icon", 11), p.Dc(14, ar, 3, 0, "ng-container", 12), p.Dc(15, dr, 3, 2, "ng-container", 12), p.Ob(), p.Ob(), p.Ob(), p.Ob(), p.Ob(), p.Ob(), p.Pb(16, "sbpro-page-section", 13), p.Pb(17, "div", 1), p.Pb(18, "div", 14), p.Pb(19, "div", 15), p.Kb(20, "sbw-markdown-html", 16), p.Ob(), p.Pb(21, "div", 17), p.Pb(22, "div", 18), p.Pb(23, "button", 19), p.Zb("click", function() { return t.buyNow("sticky") }), p.Kb(24, "fa-icon", 20), p.Dc(25, pr, 3, 0, "ng-container", 12), p.Dc(26, mr, 3, 2, "ng-container", 12), p.Ob(), p.Pb(27, "div", 21), p.Dc(28, gr, 2, 3, "sbw-tech-stack-icon", 22), p.Ob(), p.Ob(), p.Ob(), p.Ob(), p.Ob(), p.Ob(), p.Pb(29, "sbpro-page-section", 23, 24), p.Pb(31, "div", 1), p.Pb(32, "div", 2), p.Pb(33, "div", 25), p.Pb(34, "div", 26), p.Pb(35, "h2"), p.Fc(36, "Join over "), p.Pb(37, "span", 27), p.Fc(38, "12,000,000+"), p.Ob(), p.Fc(39, " developers who have downloaded Start Bootstrap's themes since 2013!"), p.Ob(), p.Ob(), p.Ob(), p.Ob(), p.Ob(), p.Ob(), p.Pb(40, "sbpro-page-section", 28), p.Kb(41, "sbw-license-table", 29), p.Ob(), p.Dc(42, fr, 1, 0, "div", 30)), 2 & e && (p.lc("headerClasses", "bg-bundle bg-img-cover overlay overlay-80 mt-page-header py-10 " + t.productClass), p.xb(5), p.lc("ngIf", "pro-html-bundle" === t.product.slug), p.xb(1), p.lc("ngIf", "pro-angular-bundle" === t.product.slug), p.xb(2), p.Gc(t.product.displayName), p.xb(2), p.Gc(t.product.description.bump), p.xb(3), p.lc("icon", p.oc(15, Pr)), p.xb(1), p.lc("ngIf", !t.prerenderDynamicThemeBundleLoaded), p.xb(1), p.lc("ngIf", t.prerenderDynamicThemeBundleLoaded), p.xb(5), p.lc("md", t.product.description.longDescription), p.xb(4), p.lc("icon", p.oc(16, Pr)), p.xb(1), p.lc("ngIf", !t.prerenderDynamicThemeBundleLoaded), p.xb(1), p.lc("ngIf", t.prerenderDynamicThemeBundleLoaded), p.xb(2), p.lc("ngForOf", t.product.technologies), p.xb(13), p.lc("product", t.product), p.xb(1), p.lc("ngIf", t.prerenderDynamicThemeBundleLoaded)) },
                    directives: [v.a, r.q, S.a, O.a, Qe.a, r.p, Si, Ki],
                    pipes: [r.d, r.n],
                    styles: [""],
                    changeDetection: 0
                }), e
            })();

            function yr(e, t) {
                if (1 & e && p.Kb(0, "sbw-theme-free", 2), 2 & e) {
                    const e = p.dc(2);
                    p.lc("product", e.product)
                }
            }

            function Or(e, t) {
                if (1 & e && p.Kb(0, "sbw-theme-pro", 2), 2 & e) {
                    const e = p.dc(2);
                    p.lc("product", e.product)
                }
            }

            function wr(e, t) {
                if (1 & e && p.Kb(0, "sbw-theme-bundle", 2), 2 & e) {
                    const e = p.dc(2);
                    p.lc("product", e.product)
                }
            }

            function Fr(e, t) {
                if (1 & e && (p.Nb(0), p.Dc(1, yr, 1, 1, "sbw-theme-free", 1), p.Dc(2, Or, 1, 1, "sbw-theme-pro", 1), p.Dc(3, wr, 1, 1, "sbw-theme-bundle", 1), p.Mb()), 2 & e) {
                    const e = p.dc();
                    p.xb(1), p.lc("ngIf", !0 === e.product.free), p.xb(1), p.lc("ngIf", !1 === e.product.free && !1 === e.product.bundle), p.xb(1), p.lc("ngIf", !1 === e.product.free && !0 === e.product.bundle)
                }
            }
            let xr = (() => {
                    class e {
                        constructor(e, t, o, i) { this.route = e, this.productsService = t, this.changeDetectorRef = o, this.router = i, this.subscription = new F.a }
                        ngOnInit() {
                            this.subscription.add(Object(mt.b)([this.route.paramMap, this.productsService.products$]).subscribe(([e, t]) => {
                                const o = e.get("productSlug"),
                                    i = t.find(e => e.slug === o);
                                if (!i) return this.router.navigate(["/error/404"]);
                                this.product = i, this.changeDetectorRef.detectChanges()
                            }))
                        }
                        ngOnDestroy() { this.subscription.unsubscribe() }
                    }
                    return e.\u0275fac = function(t) { return new(t || e)(p.Jb(i.a), p.Jb(u.c), p.Jb(p.h), p.Jb(i.d)) }, e.\u0275cmp = p.Db({
                        type: e,
                        selectors: [
                            ["sbw-product"]
                        ],
                        decls: 1,
                        vars: 1,
                        consts: [
                            [4, "ngIf"],
                            [3, "product", 4, "ngIf"],
                            [3, "product"]
                        ],
                        template: function(e, t) { 1 & e && p.Dc(0, Fr, 4, 3, "ng-container", 0), 2 & e && p.lc("ngIf", t.product) },
                        directives: [r.q, ti, rr, vr],
                        styles: [""],
                        changeDetection: 0
                    }), e
                })(),
                kr = (() => {
                    class e {
                        constructor(e) { this.metaService = e, this.headerClassColor = "bg-primary" }
                        ngOnInit() { this.productConfig = this.metaService.getCurrentProduct(), console.log(this.metaService.currentURL), this.headerClassColor = this.metaService.currentURL.match(/^\/templates/) ? "bg-blue" : "bg-primary" }
                    }
                    return e.\u0275fac = function(t) { return new(t || e)(p.Jb(h.k)) }, e.\u0275cmp = p.Db({
                        type: e,
                        selectors: [
                            ["sbw-products"]
                        ],
                        decls: 13,
                        vars: 5,
                        consts: [
                            ["borderType", "angled", "borderClasses", "text-white", 3, "headerClasses"],
                            [1, "page-header-content", "pb-4"],
                            [1, "container"],
                            [1, "row", "align-items-center"],
                            [1, "col-lg-8", "mb-4", "mb-lg-0"],
                            ["data-cy", "productsHeaderTitle", 1, "page-header-title"],
                            [1, "page-header-text", "mb-0"],
                            [1, "col-lg-4"],
                            ["sbwCarbon", "", 1, "carbon-container"],
                            ["sectionClasses", "pt-10 pb-5 bg-white", "borderType", "angled", "borderClasses", "text-light"],
                            [3, "category", "productConfig"]
                        ],
                        template: function(e, t) { 1 & e && (p.Pb(0, "sbpro-page-header", 0), p.Pb(1, "div", 1), p.Pb(2, "div", 2), p.Pb(3, "div", 3), p.Pb(4, "div", 4), p.Pb(5, "h1", 5), p.Fc(6), p.Ob(), p.Pb(7, "p", 6), p.Fc(8), p.Ob(), p.Ob(), p.Pb(9, "div", 7), p.Kb(10, "div", 8), p.Ob(), p.Ob(), p.Ob(), p.Ob(), p.Ob(), p.Pb(11, "sbpro-page-section", 9), p.Kb(12, "sbw-product-cards", 10), p.Ob()), 2 & e && (p.lc("headerClasses", "page-header-dark " + t.headerClassColor), p.xb(6), p.Gc(t.productConfig.headerTitle), p.xb(2), p.Gc(t.productConfig.headerText), p.xb(4), p.lc("category", t.productConfig.category)("productConfig", t.productConfig)) },
                        directives: [v.a, y.a, O.a, ge],
                        styles: [""],
                        changeDetection: 0
                    }), e
                })(),
                Sr = (() => {
                    class e {
                        constructor() {}
                        ngOnInit() {}
                    }
                    return e.\u0275fac = function(t) { return new(t || e) }, e.\u0275cmp = p.Db({
                        type: e,
                        selectors: [
                            ["sbw-sb-angular-inspector"]
                        ],
                        decls: 24,
                        vars: 0,
                        consts: [
                            ["headerClasses", "bg-light page-header-light", "borderType", "angled", "borderClasses", "text-white"],
                            [1, "page-header-content", "pb-4"],
                            [1, "container"],
                            [1, "row", "align-items-center"],
                            [1, "col-lg-8", "mb-4", "mb-lg-0"],
                            [1, "page-header-title"],
                            [1, "page-header-text", "mb-0"],
                            [1, "col-lg-4"],
                            ["sbwCarbon", "", 1, "carbon-container", "carbon-inverse"],
                            ["sectionClasses", "pt-10 pb-5 bg-white", "borderType", "angled", "borderClasses", "text-light"],
                            [1, "col-lg-8"],
                            [1, "lead"],
                            ["href", "https://chrome.google.com/webstore/detail/sb-angular-inspector/lapcbklolihkkijaemmlbkpibgghhioh", "target", "_blank"],
                            ["src", "assets/img/brand-logos/chrome-web-store-badge.svg", "alt", "Chrome Web Store Badge", 2, "height", "6rem"],
                            [1, "col-lg-4", "pl-5", "d-none", "d-lg-block"],
                            ["src", "assets/img/sb-angular-inspector-icon.svg", "alt", "SB Angular Inspector Logo", 1, "img-fluid"]
                        ],
                        template: function(e, t) { 1 & e && (p.Pb(0, "sbpro-page-header", 0), p.Pb(1, "div", 1), p.Pb(2, "div", 2), p.Pb(3, "div", 3), p.Pb(4, "div", 4), p.Pb(5, "h1", 5), p.Fc(6, "SB Angular Inspector"), p.Ob(), p.Pb(7, "p", 6), p.Fc(8, "An Angular Inspector for Angular 9+ (Ivy) which extends Chrome's developer tools for Angular 9+ web applications"), p.Ob(), p.Ob(), p.Pb(9, "div", 7), p.Kb(10, "div", 8), p.Ob(), p.Ob(), p.Ob(), p.Ob(), p.Ob(), p.Pb(11, "sbpro-page-section", 9), p.Pb(12, "div", 2), p.Pb(13, "div", 3), p.Pb(14, "div", 10), p.Pb(15, "p", 11), p.Fc(16, "Streamline your Angular workflow by using SB Angular Inspector, a Chrome browser extension which adds an Angular State Inspector to your Chrome developer tools. SB Angular Inspector is "), p.Pb(17, "strong"), p.Fc(18, "compatible with Angular 9+"), p.Ob(), p.Fc(19, " (Ivy) based web applications."), p.Ob(), p.Pb(20, "a", 12), p.Kb(21, "img", 13), p.Ob(), p.Ob(), p.Pb(22, "div", 14), p.Kb(23, "img", 15), p.Ob(), p.Ob(), p.Ob(), p.Ob()) },
                        directives: [v.a, y.a, O.a],
                        styles: [""],
                        changeDetection: 0
                    }), e
                })();
            var Br = o("SRA6"),
                Dr = o("zZ3C");
            const Ir = function() { return ["fad", "gifts"] },
                Tr = function() { return ["fal", "arrow-right"] },
                Cr = function() { return ["fal", "times"] };
            let Lr = (() => {
                class e {
                    constructor(e, t) { this.bannerService = e, this.analyticsService = t }
                    ngOnInit() { this.analyticsService.promotionImpression("BlackFridayBanner") }
                    dismissBanner() { this.bannerService.dismiss() }
                }
                return e.\u0275fac = function(t) { return new(t || e)(p.Jb(h.b), p.Jb(h.a)) }, e.\u0275cmp = p.Db({
                    type: e,
                    selectors: [
                        ["sbw-banner"]
                    ],
                    decls: 20,
                    vars: 6,
                    consts: [
                        [1, "container"],
                        [1, "d-flex", "justify-content-between", "align-items-center"],
                        ["routerLink", "/shop", 1, "mr-3", "line-height-normal", "d-flex", "align-items-center", "text-white"],
                        [1, "mr-2", 3, "icon"],
                        [1, "message-with-badge"],
                        [1, "badge", "badge-light", "text-monospace", "font-weight-700"],
                        [1, "d-none", "d-xl-inline"],
                        ["routerLink", "/shop", 1, "btn", "btn-success", "btn-sm", "font-weight-500", "mr-3"],
                        [1, "ml-2", 3, "icon"],
                        ["type", "button", 1, "btn-icon", "btn", "btn-transparent-light", 3, "click"],
                        [3, "icon"]
                    ],
                    template: function(e, t) { 1 & e && (p.Pb(0, "div", 0), p.Pb(1, "div", 1), p.Pb(2, "a", 2), p.Kb(3, "fa-icon", 3), p.Pb(4, "div", 4), p.Fc(5, "Use the code "), p.Pb(6, "span", 5), p.Fc(7, "BLACKFRIDAY"), p.Ob(), p.Fc(8, " and take "), p.Pb(9, "strong"), p.Fc(10, "40% off "), p.Ob(), p.Fc(11, " until Nov. 30 "), p.Pb(12, "span", 6), p.Fc(13, "on all pro products!"), p.Ob(), p.Ob(), p.Ob(), p.Pb(14, "div"), p.Pb(15, "button", 7), p.Fc(16, "Browse Deals"), p.Kb(17, "fa-icon", 8), p.Ob(), p.Pb(18, "button", 9), p.Zb("click", function() { return t.dismissBanner() }), p.Kb(19, "fa-icon", 10), p.Ob(), p.Ob(), p.Ob(), p.Ob()), 2 & e && (p.xb(3), p.lc("icon", p.oc(3, Ir)), p.xb(14), p.lc("icon", p.oc(4, Tr)), p.xb(2), p.lc("icon", p.oc(5, Cr))) },
                    directives: [i.f, S.a, i.e],
                    styles: ["[_nghost-%COMP%]{position:fixed;width:100%;z-index:1030;background-color:#000;color:#fff;height:3.5rem;font-size:.875rem;top:0;display:none;align-items:center}@media (min-width:768px){[_nghost-%COMP%]{display:flex}}.message-with-badge[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%]{position:relative;top:-1px}"],
                    changeDetection: 0
                }), e
            })();

            function Kr(e, t) { 1 & e && p.Kb(0, "sbw-banner") }
            const Mr = function(e) { return { hasBanner: e } };
            let Er = (() => {
                class e {
                    constructor(e, t, o) { this.bannerService = e, this.changeDetectorRef = t, this.toastService = o, this.subscription = new F.a, this.showBanner = !1 }
                    ngOnInit() {}
                }
                return e.\u0275fac = function(t) { return new(t || e)(p.Jb(h.b), p.Jb(p.h), p.Jb(h.r)) }, e.\u0275cmp = p.Db({
                    type: e,
                    selectors: [
                        ["sbw-site"]
                    ],
                    decls: 4,
                    vars: 4,
                    consts: [
                        ["footerClasses", "bg-light footer-light", 3, "ngClass"],
                        [4, "ngIf"],
                        ["topNavClasses", "bg-white navbar-light fixed-top", "brandClasses", "text-black", "buttonClasses", "btn-teal"]
                    ],
                    template: function(e, t) { 1 & e && (p.Pb(0, "sbw-layout-site", 0), p.Dc(1, Kr, 1, 0, "sbw-banner", 1), p.Kb(2, "sb-top-nav", 2), p.Kb(3, "router-outlet"), p.Ob()), 2 & e && (p.lc("ngClass", p.pc(2, Mr, t.showBanner)), p.xb(1), p.lc("ngIf", t.showBanner)) },
                    directives: [Br.a, r.o, r.q, Dr.a, i.h, Lr],
                    styles: [""],
                    changeDetection: 0
                }), e
            })();
            const Ar = [{ slug: "animated-navbar-dropdown", title: "Dropdown Menu Animation for Bootstrap Navbar", subTitle: "CSS Only Animations for Bootstrap 4 Navbar Dropdowns", bootstrapVersion: "4.3.1", jsFiddleSrc: "//jsfiddle.net/StartBootstrap/o7ev9czn/embedded/result,html,css,js,resources", previewImageSrc: "//assets.startbootstrap.com/img/screenshots/snippets/animated-navbar-dropdowns.jpg" }, { slug: "sticky-footer-flexbox", title: "Flexbox Sticky Footer", subTitle: "A Sticky Footer Layout using Bootstrap 4 Flex Utility Classes", bootstrapVersion: "4.3.1", jsFiddleSrc: "//jsfiddle.net/StartBootstrap/out2g1mq/embedded/result,html,css,js,resources", previewImageSrc: "//assets.startbootstrap.com/img/screenshots/snippets/sticky-footer-flexbox.jpg" }, { slug: "video-header", title: "Bootstrap Header with HTML5 Video Background", subTitle: "HTML5 Video Background Header with Mobile Fallback", bootstrapVersion: "4.3.1", jsFiddleSrc: "//jsfiddle.net/StartBootstrap/enajc82d/embedded/result,html,css,js,resources", previewImageSrc: "//assets.startbootstrap.com/img/screenshots/snippets/video-header.jpg" }, { slug: "sign-in-split", title: "Modern Sign In Page with Split Screen Format", subTitle: "Modern Sign In Page with Split Screen Image", bootstrapVersion: "4.3.1", jsFiddleSrc: "//jsfiddle.net/StartBootstrap/efvg9j7a/embedded/result,html,css,js,resources", previewImageSrc: "//assets.startbootstrap.com/img/screenshots/snippets/sign-in-split.jpg" }, { slug: "login", title: "Bootstrap Login Form with Floating Labels", subTitle: "Login Form with Floating Form Labels and Social Logins", bootstrapVersion: "4.3.1", jsFiddleSrc: "//jsfiddle.net/StartBootstrap/amxr8n19/embedded/result,html,css,js,resources", previewImageSrc: "//assets.startbootstrap.com/img/screenshots/snippets/login.jpg" }, { slug: "navbar-logo", title: "Bootstrap 4 Navbar with Logo Image", subTitle: "Bootstrap 4 Navbar Example with Logo Image", bootstrapVersion: "4.3.1", jsFiddleSrc: "//jsfiddle.net/StartBootstrap/jm1sLd6f/embedded/result,html,css,js,resources", previewImageSrc: "//assets.startbootstrap.com/img/screenshots/snippets/navbar-logo.jpg" }, { slug: "full-slider", title: "Bootstrap 4 Full Page Image Slider Header", subTitle: "Bootstrap 4 Full Page Height Image Slider Header", bootstrapVersion: "4.3.1", jsFiddleSrc: "//jsfiddle.net/StartBootstrap/yezxdwv3/embedded/result,html,css,js,resources", previewImageSrc: "//assets.startbootstrap.com/img/screenshots/snippets/full-slider.jpg" }, { slug: "pricing-table", title: "Bootstrap 4 Responsive Pricing Table Snippet", subTitle: "Pricing Table with Custom Hover Effects and Buttons", bootstrapVersion: "4.3.1", jsFiddleSrc: "//jsfiddle.net/StartBootstrap/rgp3qdye/embedded/result,html,css,js,resources", previewImageSrc: "//assets.startbootstrap.com/img/screenshots/snippets/pricing-table.jpg" }, { slug: "thumbnail-gallery", title: "Bootstrap 4 Gallery with Image Thumbnails", subTitle: "Basic Gallery Layout with Image Thumbnails", bootstrapVersion: "4.3.1", jsFiddleSrc: "//jsfiddle.net/StartBootstrap/m0egb54s/embedded/result,html,css,js,resources", previewImageSrc: "//assets.startbootstrap.com/img/screenshots/snippets/thumbnail-gallery.jpg" }, { slug: "registration-page", title: "Bootstrap Registration Page with Floating Labels", subTitle: "Registration Page with Floating Form Labels and Splash Image", bootstrapVersion: "4.3.1", jsFiddleSrc: "//jsfiddle.net/StartBootstrap/1nu8g6e5/embedded/result,html,css,js,resources", previewImageSrc: "//assets.startbootstrap.com/img/screenshots/snippets/registration-page.jpg" }, { slug: "half-slider", title: "Bootstrap 4 Half Page Image Slider Header", subTitle: "Bootstrap 4 Half Page Height Image Slider Header", bootstrapVersion: "4.3.1", jsFiddleSrc: "//jsfiddle.net/StartBootstrap/3xr90f2y/embedded/result,html,css,js,resources", previewImageSrc: "//assets.startbootstrap.com/img/screenshots/snippets/half-slider.jpg" }, { slug: "about-team", title: "Bootstrap 4 About and Team Section", subTitle: "About and Team Member Example Section Layout", bootstrapVersion: "4.3.1", jsFiddleSrc: "//jsfiddle.net/StartBootstrap/2Lkm6e1j/embedded/result,html,css,js,resources", previewImageSrc: "//assets.startbootstrap.com/img/screenshots/snippets/about-team.jpg" }, { slug: "full-image-header", title: "Bootstrap 4 Full Page Image Header", subTitle: "Full Page Image Header with Vertically Centered Content", bootstrapVersion: "4.3.1", jsFiddleSrc: "//jsfiddle.net/StartBootstrap/q4khv018/embedded/result,html,css,js,resources", previewImageSrc: "//assets.startbootstrap.com/img/screenshots/snippets/full-image-header.jpg" }, { slug: "portfolio-item", title: "Bootstrap 4 Portfolio Item Details Page", subTitle: "Portfolio Item Details Layout Example", bootstrapVersion: "4.3.1", jsFiddleSrc: "//jsfiddle.net/StartBootstrap/dswvpqhx/embedded/result,html,css,js,resources", previewImageSrc: "//assets.startbootstrap.com/img/screenshots/snippets/portfolio-item.jpg" }, { slug: "full-image-background", title: "Full Page Image HTML Background for Bootstrap", subTitle: "Fixed on Scroll Full Page Image Background", bootstrapVersion: "4.3.1", jsFiddleSrc: "//jsfiddle.net/StartBootstrap/t7suLowj/embedded/result,html,css,js,resources", previewImageSrc: "//assets.startbootstrap.com/img/screenshots/snippets/full-image-background.jpg" }, { slug: "portfolio-one-column", title: "Bootstrap 4 One Column Portfolio Layout", subTitle: "One Column Portfolio Layout Example", bootstrapVersion: "4.3.1", jsFiddleSrc: "//jsfiddle.net/StartBootstrap/6dcgqs4t/embedded/result,html,css,js,resources", previewImageSrc: "//assets.startbootstrap.com/img/screenshots/snippets/portfolio-one-column.jpg" }, { slug: "portfolio-two-column", title: "Bootstrap 4 Two Column Portfolio Layout", subTitle: "Two Column Portfolio Layout Example", bootstrapVersion: "4.3.1", jsFiddleSrc: "//jsfiddle.net/StartBootstrap/caj146vz/embedded/result,html,css,js,resources", previewImageSrc: "//assets.startbootstrap.com/img/screenshots/snippets/portfolio-two-column.jpg" }, { slug: "portfolio-three-column", title: "Bootstrap 4 Three Column Portfolio Layout", subTitle: "Three Column Portfolio Layout Example", bootstrapVersion: "4.3.1", jsFiddleSrc: "//jsfiddle.net/StartBootstrap/b7uLpqsk/embedded/result,html,css,js,resources", previewImageSrc: "//assets.startbootstrap.com/img/screenshots/snippets/portfolio-three-column.jpg" }, { slug: "portfolio-four-column", title: "Bootstrap 4 Four Column Portfolio Layout", subTitle: "Four Column Portfolio Layout Example", bootstrapVersion: "4.3.1", jsFiddleSrc: "//jsfiddle.net/StartBootstrap/42bgwce1/embedded/result,html,css,js,resources", previewImageSrc: "//assets.startbootstrap.com/img/screenshots/snippets/portfolio-four-column.jpg" }];
            let Nr = (() => {
                class e {
                    constructor(e) { this.route = e }
                    ngOnInit() { this.snippet = Ar.find(e => e.slug === this.route.snapshot.paramMap.get("snippet-slug")) }
                }
                return e.\u0275fac = function(t) { return new(t || e)(p.Jb(i.a)) }, e.\u0275cmp = p.Db({
                    type: e,
                    selectors: [
                        ["sbw-snippet"]
                    ],
                    decls: 32,
                    vars: 8,
                    consts: [
                        ["headerClasses", "bg-yellow page-header-dark", "borderType", "angled", "borderClasses", "text-white"],
                        [1, "page-header-content", "pb-4"],
                        [1, "container"],
                        [1, "row", "align-items-center"],
                        [1, "col-lg-8", "mb-4", "mb-lg-0"],
                        [1, "page-header-title"],
                        [1, "page-header-text", "mb-0"],
                        [1, "col-lg-4"],
                        ["sbwCarbon", "", 1, "carbon-container"],
                        ["sectionClasses", "py-5", "borderType", "angled", "borderClasses", "text-light"],
                        [1, "mb-3"],
                        [1, "badge", "badge-secondary"],
                        [1, "mb-4", "rounded", "shadow", "snippet"],
                        ["width", "100%", "height", "700", "allowfullscreen", "", "allowpaymentrequest", "allowpaymentrequest", "frameborder", "0", 3, "src"],
                        [1, "row"],
                        [1, "col-lg-8"],
                        ["sbwNativeStandard", "", 1, "native-standard"],
                        [1, "card"],
                        [1, "card-body"],
                        [1, "small"]
                    ],
                    template: function(e, t) { 1 & e && (p.Pb(0, "sbpro-page-header", 0), p.Pb(1, "div", 1), p.Pb(2, "div", 2), p.Pb(3, "div", 3), p.Pb(4, "div", 4), p.Pb(5, "h1", 5), p.Fc(6), p.Ob(), p.Pb(7, "p", 6), p.Fc(8), p.Ob(), p.Ob(), p.Pb(9, "div", 7), p.Kb(10, "div", 8), p.Ob(), p.Ob(), p.Ob(), p.Ob(), p.Ob(), p.Pb(11, "sbpro-page-section", 9), p.Pb(12, "div", 2), p.Pb(13, "div", 10), p.Pb(14, "span", 11), p.Fc(15), p.Ob(), p.Ob(), p.Pb(16, "div", 12), p.Kb(17, "iframe", 13), p.ec(18, "safe"), p.Ob(), p.Pb(19, "div", 14), p.Pb(20, "div", 15), p.Kb(21, "div", 16), p.Pb(22, "div", 17), p.Pb(23, "div", 18), p.Kb(24, "sbw-disqus"), p.Ob(), p.Ob(), p.Ob(), p.Pb(25, "div", 7), p.Pb(26, "div", 17), p.Pb(27, "div", 18), p.Pb(28, "h5"), p.Fc(29, "Need more UI elements?"), p.Ob(), p.Pb(30, "div", 19), p.Fc(31, "Try SB UI Kit Pro, which is packed with custom view, pages, and components to help you get started on your next project!"), p.Ob(), p.Ob(), p.Ob(), p.Ob(), p.Ob(), p.Ob(), p.Ob()), 2 & e && (p.xb(6), p.Gc(null == t.snippet ? null : t.snippet.title), p.xb(2), p.Gc(null == t.snippet ? null : t.snippet.subTitle), p.xb(7), p.Hc("Bootstrap ", null == t.snippet ? null : t.snippet.bootstrapVersion, ""), p.xb(2), p.lc("src", p.hc(18, 4, null == t.snippet ? null : t.snippet.jsFiddleSrc, "resourceURL", "NONE"), p.xc)) },
                    directives: [v.a, y.a, O.a, $e.a, Ze.a],
                    pipes: [oe.a],
                    styles: [""],
                    changeDetection: 0
                }), e
            })();

            function jr(e, t) {
                if (1 & e && (p.Pb(0, "div", 12), p.Pb(1, "div", 13), p.Pb(2, "a", 14), p.Pb(3, "picture"), p.Kb(4, "source", 15), p.ec(5, "safe"), p.ec(6, "webpExt"), p.Kb(7, "source", 16), p.ec(8, "safe"), p.Kb(9, "img", 17), p.ec(10, "safe"), p.Ob(), p.Ob(), p.Pb(11, "div", 18), p.Pb(12, "div"), p.Pb(13, "div", 19), p.Fc(14), p.Ob(), p.Pb(15, "div", 20), p.Fc(16), p.Ob(), p.Ob(), p.Ob(), p.Ob(), p.Ob()), 2 & e) {
                    const e = t.$implicit;
                    p.xb(2), p.lc("routerLink", "/snippets/" + e.slug), p.xb(2), p.lc("srcset", p.hc(5, 7, p.fc(6, 11, e.previewImageSrc), "resourceURL", "NONE"), p.yc), p.xb(3), p.lc("srcset", p.hc(8, 13, e.previewImageSrc, "resourceURL", "NONE"), p.yc), p.xb(2), p.lc("src", p.hc(10, 17, e.previewImageSrc, "resourceURL", "NONE"), p.yc)("alt", e.title), p.xb(5), p.Gc(e.title), p.xb(2), p.Gc(e.subTitle)
                }
            }
            let Rr = (() => {
                class e {
                    constructor() { this.snippets = Ar }
                    ngOnInit() {}
                }
                return e.\u0275fac = function(t) { return new(t || e) }, e.\u0275cmp = p.Db({
                    type: e,
                    selectors: [
                        ["sbw-snippets"]
                    ],
                    decls: 15,
                    vars: 1,
                    consts: [
                        ["headerClasses", "bg-yellow page-header-dark", "borderType", "angled", "borderClasses", "text-white"],
                        [1, "page-header-content", "pb-4"],
                        [1, "container"],
                        [1, "row", "align-items-center"],
                        [1, "col-lg-8", "mb-4", "mb-lg-0"],
                        [1, "page-header-title"],
                        [1, "page-header-text", "mb-0"],
                        [1, "col-lg-4"],
                        ["sbwCarbon", "", 1, "carbon-container"],
                        ["sectionClasses", "py-5", "borderType", "angled", "borderClasses", "text-light"],
                        [1, "row"],
                        ["class", "col-lg-4 col-md-6", 4, "ngFor", "ngForOf"],
                        [1, "col-lg-4", "col-md-6"],
                        [1, "mb-5"],
                        [1, "d-block", "lift", "rounded", "mb-3", "o-hidden", 2, "--aspect-ratio", "516/352", 3, "routerLink"],
                        ["type", "image/webp", 3, "srcset"],
                        ["type", "image/jpeg", 3, "srcset"],
                        [1, "img-fluid", 3, "src", "alt"],
                        [1, "d-flex", "justify-content-between"],
                        [1, "text-dark", "small", "font-weight-500", "mb-1"],
                        [1, "text-xs"]
                    ],
                    template: function(e, t) { 1 & e && (p.Pb(0, "sbpro-page-header", 0), p.Pb(1, "div", 1), p.Pb(2, "div", 2), p.Pb(3, "div", 3), p.Pb(4, "div", 4), p.Pb(5, "h1", 5), p.Fc(6, "Bootstrap Snippets"), p.Ob(), p.Pb(7, "p", 6), p.Fc(8, "A curated library of Bootstrap 4 code snippets created by Start Bootstrap, perfect for dropping into any Bootstrap based project or theme!"), p.Ob(), p.Ob(), p.Pb(9, "div", 7), p.Kb(10, "div", 8), p.Ob(), p.Ob(), p.Ob(), p.Ob(), p.Ob(), p.Pb(11, "sbpro-page-section", 9), p.Pb(12, "div", 2), p.Pb(13, "div", 10), p.Dc(14, jr, 17, 21, "div", 11), p.Ob(), p.Ob(), p.Ob()), 2 & e && (p.xb(14), p.lc("ngForOf", t.snippets)) },
                    directives: [v.a, y.a, O.a, r.p, i.f],
                    pipes: [oe.a, ie.a],
                    styles: [".snippet-heart-count[_ngcontent-%COMP%]{margin-top:.15625rem}"],
                    changeDetection: 0
                }), e
            })();
            const Ur = function() { return ["fal", "arrow-right"] };
            let qr = (() => {
                    class e {
                        constructor() {}
                        ngOnInit() {}
                    }
                    return e.\u0275fac = function(t) { return new(t || e) }, e.\u0275cmp = p.Db({
                        type: e,
                        selectors: [
                            ["sbw-terms-and-conditions"]
                        ],
                        decls: 51,
                        vars: 8,
                        consts: [
                            ["sectionClasses", "mt-page-header pb-5 bg-white", "borderType", "angled", "borderClasses", "text-light"],
                            [1, "container", "py-5"],
                            [1, "lead"],
                            [1, "my-5"],
                            [1, "row"],
                            [1, "col-lg-8"],
                            [1, "d-flex", "align-items-center", "line-height-normal", "mb-4"],
                            [1, "icon-stack", "icon-stack-sm", "bg-primary", "text-white", "mr-2"],
                            [3, "icon"],
                            [1, "font-italic", "small", "mt-5"],
                            [1, "col-lg-4", "d-none", "d-lg-block"],
                            ["src", "assets/img/freepik/accept-terms-pana.svg", "alt", "", 1, "img-fluid"]
                        ],
                        template: function(e, t) { 1 & e && (p.Pb(0, "sbpro-page-section", 0), p.Pb(1, "header"), p.Pb(2, "div", 1), p.Pb(3, "h1"), p.Fc(4, "Terms & Conditions"), p.Ob(), p.Pb(5, "p", 2), p.Fc(6, "Last updated: September 2020"), p.Ob(), p.Kb(7, "hr", 3), p.Pb(8, "div", 4), p.Pb(9, "div", 5), p.Pb(10, "h2", 6), p.Pb(11, "div", 7), p.Kb(12, "fa-icon", 8), p.Ob(), p.Fc(13, " General Terms For Buyers "), p.Ob(), p.Pb(14, "p"), p.Fc(15, "By accessing and placing an order with Start Bootstrap, you confirm that you are in agreement with and bound by the terms and conditions contained in the terms outlined below. These terms apply to the entire website and any email or other type of communication between you and Start Bootstrap."), p.Ob(), p.Pb(16, "p"), p.Fc(17, "Under no circumstances shall the Start Bootstrap team be liable for any direct, indirect, special, incidental or consequential damages, including, but not limited to, loss of data or profit, arising out of the use, or the inability to use, the materials on this site, even if the Start Bootstrap team or an authorized representative has been advised of the possibility of such damages. If your use of materials from this site results in the need for servicing, repair or correction of equipment or data, you assume any costs thereof."), p.Ob(), p.Pb(18, "p"), p.Fc(19, "Start Bootstrap will not be responsible for any outcome that may occur during the course of usage of our resources. We reserve the rights to change prices and revise the resources usage policy at any moment."), p.Ob(), p.Kb(20, "hr", 3), p.Pb(21, "h2", 6), p.Pb(22, "div", 7), p.Kb(23, "fa-icon", 8), p.Ob(), p.Fc(24, " Security "), p.Ob(), p.Pb(25, "p"), p.Fc(26, "Start Bootstrap does not process any order payments through the website. All payments are processed securely through Stripe or PayPal, third party online payment providers. Feel free to contact us about our security policies."), p.Ob(), p.Kb(27, "hr", 3), p.Pb(28, "h2", 6), p.Pb(29, "div", 7), p.Kb(30, "fa-icon", 8), p.Ob(), p.Fc(31, " Cookie Policy "), p.Ob(), p.Pb(32, "p"), p.Fc(33, "A cookie is a file containing an identifier (a string of letters and numbers) that is sent by a web server to a web browser and is stored by the browser. The identifier is then sent back to the server each time the browser requests a page from the server. Our website uses cookies. By using our website and agreeing to this policy, you consent to our use of cookies in accordance with the terms of this policy."), p.Ob(), p.Pb(34, "p"), p.Fc(35, "We use session cookies to personalize the website for each user."), p.Ob(), p.Pb(36, "p"), p.Fc(37, "We use Google Analytics to analyze the use of our website. Our analytics service provider generates statistical and other information about website use by means of cookies. Our analytics service provider\u2019s privacy policy is available at: http://www.google.com/policies/privacy/."), p.Ob(), p.Pb(38, "p"), p.Fc(39, "Deleting cookies may have a negative impact on the usability of the site. If you block cookies, you will not be able to use all the features on our website."), p.Ob(), p.Kb(40, "hr", 3), p.Pb(41, "h2", 6), p.Pb(42, "div", 7), p.Kb(43, "fa-icon", 8), p.Ob(), p.Fc(44, " Refunds "), p.Ob(), p.Pb(45, "p"), p.Fc(46, "Due the nature of digital products, after an digital product is downloaded, the sale is final. You may request a refund for a purchase that has not been downloaded up to 7 days after the purchase was made."), p.Ob(), p.Pb(47, "p", 9), p.Fc(48, "These terms were last updated on September 8, 2020 and are subject to change."), p.Ob(), p.Ob(), p.Pb(49, "div", 10), p.Kb(50, "img", 11), p.Ob(), p.Ob(), p.Ob(), p.Ob(), p.Ob()), 2 & e && (p.xb(12), p.lc("icon", p.oc(4, Ur)), p.xb(11), p.lc("icon", p.oc(5, Ur)), p.xb(7), p.lc("icon", p.oc(6, Ur)), p.xb(13), p.lc("icon", p.oc(7, Ur))) },
                        directives: [O.a, S.a],
                        styles: [""],
                        changeDetection: 0
                    }), e
                })(),
                Gr = (() => {
                    class e {
                        constructor() {}
                        ngOnInit() {}
                    }
                    return e.\u0275fac = function(t) { return new(t || e) }, e.\u0275cmp = p.Db({
                        type: e,
                        selectors: [
                            ["sbw-maintenance"]
                        ],
                        decls: 10,
                        vars: 0,
                        consts: [
                            ["sectionClasses", "mt-page-header pt-10 pb-5 bg-white", "borderType", "angled", "borderClasses", "text-light"],
                            [1, "container"],
                            [1, "row", "justify-content-center"],
                            [1, "col-lg-6"],
                            ["src", "assets/img/freepik/under-construction-pana.svg", "alt", "Website is under scheduled maintenance", 1, "img-fluid", "mb-5"],
                            [1, "text-center"]
                        ],
                        template: function(e, t) { 1 & e && (p.Pb(0, "sbpro-page-section", 0), p.Pb(1, "div", 1), p.Pb(2, "div", 2), p.Pb(3, "div", 3), p.Kb(4, "img", 4), p.Pb(5, "div", 5), p.Pb(6, "h1"), p.Fc(7, "Scheduled Maintenance"), p.Ob(), p.Pb(8, "p"), p.Fc(9, "We're currently updating Start Bootstrap, so we've brought a few pages down for schedule maintenance. Please try again in a few minutes, and thank you for your patience."), p.Ob(), p.Ob(), p.Ob(), p.Ob(), p.Ob(), p.Ob()) },
                        directives: [O.a],
                        styles: [""],
                        changeDetection: 0
                    }), e
                })();
            var Hr = o("olz4"),
                _r = o("GjrR"),
                Vr = o("5TF+"),
                Jr = o("2/QY");
            const Wr = [{ path: "", canActivate: [], canActivateChild: [Vr.a, Hr.a, m, Vr.b], component: Er, children: [{ path: "", canActivate: [], component: xt, resolve: { dynamicRouteData: Jr.a } }, { path: "admin-dashboard", canActivate: [], component: kr, resolve: { dynamicRouteData: Jr.a } }, { path: "landing-pages", canActivate: [], component: kr, resolve: { dynamicRouteData: Jr.a } }, { path: "blog-news", canActivate: [], component: kr, resolve: { dynamicRouteData: Jr.a } }, { path: "bundles", canActivate: [], component: kr, resolve: { dynamicRouteData: Jr.a } }, { path: "themes", canActivate: [], component: kr, resolve: { dynamicRouteData: Jr.a } }, { path: "themes/admin-dashboard", canActivate: [], component: kr, resolve: { dynamicRouteData: Jr.a } }, { path: "themes/landing-pages", canActivate: [], component: kr, resolve: { dynamicRouteData: Jr.a } }, { path: "themes/blog-news", canActivate: [], component: kr, resolve: { dynamicRouteData: Jr.a } }, { path: "themes/business-corporate", canActivate: [], component: kr, resolve: { dynamicRouteData: Jr.a } }, { path: "themes/portfolio-resume", canActivate: [], component: kr, resolve: { dynamicRouteData: Jr.a } }, { path: "templates", canActivate: [], component: kr, resolve: { dynamicRouteData: Jr.a } }, { path: "templates/admin-dashboard", canActivate: [], component: kr, resolve: { dynamicRouteData: Jr.a } }, { path: "templates/landing-pages", canActivate: [], component: kr, resolve: { dynamicRouteData: Jr.a } }, { path: "templates/blog-news", canActivate: [], component: kr, resolve: { dynamicRouteData: Jr.a } }, { path: "templates/general", canActivate: [], component: kr, resolve: { dynamicRouteData: Jr.a } }, { path: "templates/navigation", canActivate: [], component: kr, resolve: { dynamicRouteData: Jr.a } }, { path: "templates/ecommerce", canActivate: [], component: kr, resolve: { dynamicRouteData: Jr.a } }, { path: "bundle/:productSlug", canActivate: [], component: xr, resolve: { dynamicRouteData: Jr.a } }, { path: "template/:productSlug", canActivate: [], component: xr, resolve: { dynamicRouteData: Jr.a } }, { path: "theme/:productSlug", canActivate: [], component: xr, resolve: { dynamicRouteData: Jr.a } }, { path: "snippets", canActivate: [], component: Rr, resolve: { dynamicRouteData: Jr.a } }, { path: "snippets/:snippet-slug", canActivate: [], component: Nr, resolve: { dynamicRouteData: Jr.a } }, { path: "guides", canActivate: [_r.a], component: wt, resolve: { dynamicRouteData: Jr.a } }, { path: "guides/:postSlug", canActivate: [_r.a], component: ht, resolve: { dynamicRouteData: Jr.a } }, { path: "licenses", canActivate: [], component: Zt, resolve: { dynamicRouteData: Jr.a }, data: { dynamicRouteDataKey: "shopLicenses" } }, { path: "licenses/:licenseID", canActivate: [], component: Zt, resolve: { dynamicRouteData: Jr.a }, data: { dynamicRouteDataKey: "shopLicenses" } }, { path: "terms-and-conditions", canActivate: [], component: qr, resolve: { dynamicRouteData: Jr.a } }, { path: "privacy-policy", canActivate: [], component: Co, resolve: { dynamicRouteData: Jr.a } }, { path: "knowledge-base", canActivate: [], component: Ht, resolve: { dynamicRouteData: Jr.a } }, { path: "knowledge-base/:grouping", canActivate: [], component: Ht, resolve: { dynamicRouteData: Jr.a } }, { path: "bootstrap-resources", canActivate: [], component: je, resolve: { dynamicRouteData: Jr.a } }, { path: "sb-angular-inspector", canActivate: [], component: Sr, resolve: { dynamicRouteData: Jr.a } }, { path: "about-us", canActivate: [], component: w, resolve: { dynamicRouteData: Jr.a } }, { path: "custom-development", canActivate: [], component: Xe, resolve: { dynamicRouteData: Jr.a } }, { path: "maintenance", canActivate: [], component: Gr, resolve: { dynamicRouteData: Jr.a } }] }, { path: "previews/:previewID", canActivate: [Vr.a, Hr.a], component: Io, resolve: { dynamicRouteData: Jr.a } }];
            let Xr = (() => {
                class e {}
                return e.\u0275mod = p.Hb({ type: e }), e.\u0275inj = p.Gb({
                    factory: function(t) { return new(t || e) },
                    imports: [
                        [P, i.g.forChild(Wr)], i.g
                    ]
                }), e
            })()
        }
    }
]);
//# sourceMappingURL=19-es2015.665a455b064af1d2d2a2.js.map