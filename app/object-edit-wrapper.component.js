System.register(['@angular/core', '@angular/router', 'idai-components-2/idai-components-2', "./sample-objects"], function(exports_1, context_1) {
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
    var core_1, router_1, idai_components_2_1, idai_components_2_2, idai_components_2_3, sample_objects_1;
    var ObjectEditWrapperComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (idai_components_2_1_1) {
                idai_components_2_1 = idai_components_2_1_1;
                idai_components_2_2 = idai_components_2_1_1;
                idai_components_2_3 = idai_components_2_1_1;
            },
            function (sample_objects_1_1) {
                sample_objects_1 = sample_objects_1_1;
            }],
        execute: function() {
            ObjectEditWrapperComponent = (function () {
                function ObjectEditWrapperComponent(configLoader, datastore, routeSegment) {
                    this.configLoader = configLoader;
                    this.datastore = datastore;
                    this.routeSegment = routeSegment;
                    this.id = routeSegment.getParam('id');
                }
                ObjectEditWrapperComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.loadSampleData();
                    var promises = [];
                    promises.push(this.configLoader.getProjectConfiguration(ObjectEditWrapperComponent.PROJECT_CONFIGURATION_PATH));
                    promises.push(this.configLoader.getRelationsConfiguration(ObjectEditWrapperComponent.RELATIONS_CONFIGURATION_PATH));
                    Promise.all(promises).then(function (configs) {
                        _this.projectConfiguration = configs[0];
                        _this.relationsConfiguration = configs[1];
                        _this.datastore.get(_this.id).then(function (entity) {
                            _this.selectedObject = JSON.parse(JSON.stringify(entity));
                        });
                    }, function (errs) { console.error('errs: ', errs); });
                };
                ObjectEditWrapperComponent.prototype.loadSampleData = function () {
                    for (var _i = 0, OBJECTS_1 = sample_objects_1.OBJECTS; _i < OBJECTS_1.length; _i++) {
                        var item = OBJECTS_1[_i];
                        this.datastore.update(item);
                    }
                };
                ObjectEditWrapperComponent.PROJECT_CONFIGURATION_PATH = 'config/Configuration.json';
                ObjectEditWrapperComponent.RELATIONS_CONFIGURATION_PATH = 'config/Relations.json';
                ObjectEditWrapperComponent = __decorate([
                    core_1.Component({
                        selector: 'object-edit-wrapper',
                        templateUrl: 'templates/object-edit-wrapper.html',
                        directives: [router_1.ROUTER_DIRECTIVES, idai_components_2_1.ObjectEditComponent]
                    }), 
                    __metadata('design:paramtypes', [idai_components_2_2.ConfigLoader, idai_components_2_3.Datastore, router_1.RouteSegment])
                ], ObjectEditWrapperComponent);
                return ObjectEditWrapperComponent;
            }());
            exports_1("ObjectEditWrapperComponent", ObjectEditWrapperComponent);
        }
    }
});
//# sourceMappingURL=object-edit-wrapper.component.js.map