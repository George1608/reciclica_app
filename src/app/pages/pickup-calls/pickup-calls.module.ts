import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PickupCallsPageRoutingModule } from './pickup-calls-routing.module';

import { PickupCallsPage } from './pickup-calls.page';
import { ComponentModule } from 'src/app/components/pickup-call-card/component.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    PickupCallsPageRoutingModule
  ],
  declarations: [
    PickupCallsPage, 
  ],

})
export class PickupCallsPageModule {}
