import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';

const routes: Routes = [
    {
        path     : '',
        component: MainPageComponent
    },
    {
        path        : 'about-us',
        loadChildren: () => import ('./about-us-page/about-us-page.module').then(m => m.AboutUsPageModule)
    },
    {
        path        : 'our-team',
        loadChildren: () => import ('./our-team-page/our-team-page.module').then(m => m.OurTeamPageModule)
    },
    {
        path        : 'price-list',
        loadChildren: () => import ('./price-list/price-list.module').then(m => m.PriceListModule)
    },
    {
        path        : 'stocks',
        loadChildren: () => import ('./stocks/stocks.module').then(m => m.StocksModule)
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
