import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'

import { RegisterComponent} from 'src/app/auth/components/register/register.component'
import {RouterModule} from '@angular/router'
import {ReactiveFormsModule} from '@angular/forms'
import {StoreModule} from "@ngrx/store";
import {reducers} from "./store/reducers";
import {AuthService} from "./services/auth.service";
import {EffectsModule} from "@ngrx/effects";
import {RegisterEffect} from "./store/effects/register.effect";
import {BackendErrorMessagesModule} from "../shared/modules/backendErrorMessages/backendErrorMessages.module";

const routes = [
  {
    path: 'register',
    component: RegisterComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    StoreModule.forFeature('auth', reducers),
    EffectsModule.forFeature([RegisterEffect]),
    BackendErrorMessagesModule
  ],
  declarations: [RegisterComponent],
  providers: [AuthService]
})
export class AuthModule {}
