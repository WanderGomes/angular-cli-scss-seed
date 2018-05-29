import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/compiler/src/core';



import {AuthGuardService} from '../providers/auth-guard/auth-guard.service';
import {MainComponent} from '../components/pages/public/main/main.component';
import {GlobalConstants} from '../constants/global.constants';

export const AppRoutes: Routes = [
  {
    path: GlobalConstants.ROTAS.MAIN,
    component: MainComponent,
    canActivate: [AuthGuardService]
  }
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(AppRoutes);
