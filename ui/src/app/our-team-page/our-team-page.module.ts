import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OurTeamPageRoutingModule } from './our-team-page-routing.module';
import { OurTeamPageComponent } from './our-team-page.component';

@NgModule({
    declarations: [OurTeamPageComponent],
    imports     : [
        CommonModule,
        OurTeamPageRoutingModule
    ]
})
export class OurTeamPageModule {
}
