System.register(['@angular/core', '@angular/router-deprecated', 'idai-components-2/idai-components-2'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_deprecated_1, idai_components_2_1, idai_components_2_2, idai_components_2_3;
    var ObjectEditWrapperComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            },
            function (idai_components_2_1_1) {
                idai_components_2_1 = idai_components_2_1_1;
                idai_components_2_2 = idai_components_2_1_1;
                idai_components_2_3 = idai_components_2_1_1;
            }],
        execute: function() {
            ObjectEditWrapperComponent = (function () {
                function ObjectEditWrapperComponent(configLoader, datastore) {
                    this.configLoader = configLoader;
                    this.datastore = datastore;
                }
                ObjectEditWrapperComponent.prototype.clicked = function (id) {
                    var _this = this;
                    this.datastore.get(id).then(function (entity) {
                        _this.selectedObject = JSON.parse(JSON.stringify(entity));
                    });
                };
                ObjectEditWrapperComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.loadSampleData();
                    this.configLoader.getProjectConfiguration().then(function (pc) {
                        _this.projectConfiguration = pc;
                    });
                };
                ObjectEditWrapperComponent.prototype.loadSampleData = function () {
                    this.selectedObject = {};
                    this.selectedObject['identifier'] = 'ob1';
                    this.selectedObject['title'] = 'Obi One Kenobi';
                    this.selectedObject['id'] = '1';
                    this.selectedObject['type'] = 'Object';
                };
                ObjectEditWrapperComponent = __decorate([
                    core_1.Component({
                        selector: 'object-edit-wrapper',
                        templateUrl: 'templates/object-edit-wrapper.html',
                        directives: [router_deprecated_1.ROUTER_DIRECTIVES, idai_components_2_1.ObjectEditComponent]
                    }), 
                    __metadata('design:paramtypes', [idai_components_2_2.ConfigLoader, idai_components_2_3.Datastore])
                ], ObjectEditWrapperComponent);
                return ObjectEditWrapperComponent;
            }());
            exports_1("ObjectEditWrapperComponent", ObjectEditWrapperComponent);
        }
    }
});
//# sourceMappingURL=object-edit-wrapper.component.js.map