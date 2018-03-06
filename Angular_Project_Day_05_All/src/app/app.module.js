"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var app_router_1 = require('./app.router');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var app_component_1 = require('./app.component');
var login_component_1 = require('./login/login.component');
var index_component_1 = require('./index/index.component');
var notfound_component_1 = require('./utility/notFound/notfound.component');
var header_component_1 = require('./utility/header/header.component');
var myhttp_service_1 = require('./utility/service/myhttp.service');
var footer_component_1 = require('./utility/footer/footer.component');
var carousel_component_1 = require('./utility/carousel/carousel.component');
var slide_component_1 = require('./utility/carousel/slide.component');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            providers: [myhttp_service_1.MyHttpService],
            imports: [
                app_router_1.AppRoutingModule,
                http_1.HttpModule,
                forms_1.FormsModule,
                platform_browser_1.BrowserModule
            ],
            declarations: [
                carousel_component_1.Carousel,
                slide_component_1.Slide,
                footer_component_1.FooterComponent,
                header_component_1.HeaderComponent,
                notfound_component_1.NotFoundComponent,
                index_component_1.IndexComponent,
                login_component_1.LoginComponent,
                app_component_1.AppComponent
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map