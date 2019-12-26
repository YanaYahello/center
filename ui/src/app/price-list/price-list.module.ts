import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PriceListRoutingModule } from '@app/price-list/price-list-routing.module';
import { PriceListComponent } from '@app/price-list/price-list.component';

@NgModule({
    declarations: [
        PriceListComponent
    ],
    imports     : [
        PriceListRoutingModule,
        CommonModule
    ]
})
export class PriceListModule {
}
