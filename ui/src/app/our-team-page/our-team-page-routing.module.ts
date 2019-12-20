import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OurTeamPageComponent } from './our-team-page.component';

const routes: Routes = [
    {
        path     : '',
        component: OurTeamPageComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class OurTeamPageRoutingModule {
}
