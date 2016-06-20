/// <reference path="../typings/browser/ambient/es6-shim/index.d.ts" />
/// <reference path="../typings/browser/ambient/node/index.d.ts" />

import {bootstrap}    from '@angular/platform-browser-dynamic'
import {AppComponent} from './app.component'
import {HTTP_PROVIDERS} from '@angular/http';
import {provide, enableProdMode} from '@angular/core';
import {Datastore} from "idai-components-2/idai-components-2";
import {ReadDatastore} from "idai-components-2/idai-components-2";
import {Messages} from "idai-components-2/idai-components-2";
import {RestDatastore} from "./rest-datastore";
import {ConfigLoader} from "idai-components-2/idai-components-2";
import {PersistenceManager} from "idai-components-2/idai-components-2";
import {LoadAndSaveService} from "idai-components-2/idai-components-2";
import {ValidationInterceptor} from "idai-components-2/idai-components-2";
import {AppValidationInterceptor} from "./app-validation-interceptor";
import {MD} from "idai-components-2/idai-components-2";
import { ROUTER_PROVIDERS,RouteSegment } from '@angular/router';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';

bootstrap(AppComponent, [
    ROUTER_PROVIDERS,
    HTTP_PROVIDERS,
    provide(LocationStrategy, { useClass: HashLocationStrategy }),
    provide(Datastore, { useClass: RestDatastore }),
    provide(ReadDatastore, { useExisting: Datastore }),
    provide(Messages, { useClass: Messages }),
    provide(ConfigLoader, {useClass: ConfigLoader}),
    provide(PersistenceManager, {useClass: PersistenceManager}),
    provide(ConfigLoader, {useClass: ConfigLoader}),
    provide(LoadAndSaveService, {useClass: LoadAndSaveService}),
    provide(ValidationInterceptor, {useClass: AppValidationInterceptor}),
    provide(MD, {useClass: MD})
]);
