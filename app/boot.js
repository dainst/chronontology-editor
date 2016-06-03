/// <reference path="../typings/browser/ambient/es6-shim/index.d.ts" />
/// <reference path="../typings/browser/ambient/node/index.d.ts" />
System.register(['@angular/platform-browser-dynamic', './app.component', '@angular/http', '@angular/core', "idai-components-2/idai-components-2", "./memory-datastore", '@angular/router', '@angular/common'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var platform_browser_dynamic_1, app_component_1, http_1, core_1, idai_components_2_1, idai_components_2_2, memory_datastore_1, idai_components_2_3, idai_components_2_4, idai_components_2_5, router_1, common_1;
    return {
        setters:[
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (idai_components_2_1_1) {
                idai_components_2_1 = idai_components_2_1_1;
                idai_components_2_2 = idai_components_2_1_1;
                idai_components_2_3 = idai_components_2_1_1;
                idai_components_2_4 = idai_components_2_1_1;
                idai_components_2_5 = idai_components_2_1_1;
            },
            function (memory_datastore_1_1) {
                memory_datastore_1 = memory_datastore_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [
                router_1.ROUTER_PROVIDERS,
                http_1.HTTP_PROVIDERS,
                core_1.provide(common_1.LocationStrategy, { useClass: common_1.HashLocationStrategy }),
                core_1.provide(idai_components_2_1.Datastore, { useClass: memory_datastore_1.MemoryDatastore }),
                core_1.provide(idai_components_2_2.Messages, { useClass: idai_components_2_2.Messages }),
                core_1.provide(idai_components_2_3.ConfigLoader, { useClass: idai_components_2_3.ConfigLoader }),
                core_1.provide(idai_components_2_4.PersistenceManager, { useClass: idai_components_2_4.PersistenceManager }),
                core_1.provide(idai_components_2_3.ConfigLoader, { useClass: idai_components_2_3.ConfigLoader }),
                core_1.provide(idai_components_2_5.MD, { useClass: idai_components_2_5.MD })
            ]);
        }
    }
});
//# sourceMappingURL=boot.js.map