import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PickupCallCardComponent } from './pickup-call-card.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  declarations: [
    PickupCallCardComponent,
  ],
  exports: [
    CommonModule,
    FormsModule,
    PickupCallCardComponent
  ]
})
export class ComponentModule { }
