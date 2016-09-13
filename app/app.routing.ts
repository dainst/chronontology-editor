import {Routes, RouterModule} from '@angular/router';
import {ObjectEditWrapperComponent} from './object-edit-wrapper.component';

const appRoutes: Routes = [
    { path: 'edit/:id', component: ObjectEditWrapperComponent }
];

export const routing = RouterModule.forRoot(appRoutes);