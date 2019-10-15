import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './theme/layout/admin/admin.component';
import {CoreChartModule} from './demo/pages/core-chart/core-chart.module';
import {AuthComponent} from './theme/layout/auth/auth.component';
import {CreateProduitComponent} from './create-produit/create-produit.component';
import {ProduitDetailsComponent} from './produit-details/produit-details.component';
import {ProduitListComponent} from './produit-list/produit-list.component';
import {ClientDetailsComponent} from './client-details/client-details.component';
import {CreateClientComponent} from './create-client/create-client.component';
import {ClientListComponent} from './client-list/client-list.component';
import {FournisseurListComponent} from './fournisseur-list/fournisseur-list.component';
import {CreateFournisseurComponent} from './create-fournisseur/create-fournisseur.component';
import {FournisseurDetailsComponent} from './fournisseur-details/fournisseur-details.component';
import {CommandeListComponent} from './commande-list/commande-list.component';
import {CreateCommandeComponent} from './create-commande/create-commande.component';
import {CommandeDetailsComponent} from './commande-details/commande-details.component';
import {StockListComponent} from './stock-list/stock-list.component';
import {CreateStockComponent} from './create-stock/create-stock.component';
import {StockDetailsComponent} from './stock-details/stock-details.component';
import {ForgotComponent} from './theme/auth/forgot/forgot.component';
import {LockScreenComponent} from './theme/auth/lock-screen/lock-screen.component';
import {RegistrationComponent} from './theme/auth/registration/registration.component';
import {LoginComponent} from './theme/auth/login/login.component';


const routes: Routes = [



  { path: '', redirectTo: 'auth/login', pathMatch: 'full' },

  {
    path: 'auth/login',
    component: LoginComponent,
    pathMatch: 'full',

    data: {
      title: 'Login Page'
    }},

  {
    path: 'auth/registration',
    component: RegistrationComponent,
    data: {
      title: 'registration Page'
    }
  },

  {
    path: 'auth/ lock-screen',
    component:  LockScreenComponent,
    data: {
      title: 'lock-screen Page'
    }
  },

  {
    path: 'auth/forgot',
    component: ForgotComponent,
    data: {
      title: 'forgot Page'
    }
  },


  {
    path: '',
    component: AdminComponent,
    children: [




      {
        path: 'sample-page',
        loadChildren: () => import('./demo/pages/sample-page/sample-page.module').then(module => module.SamplePageModule)
      },
      { path: 'produit-list', component: ProduitListComponent },
      { path: 'create-produit', component: CreateProduitComponent },
      { path: 'produit-details/:id', component: ProduitDetailsComponent },



      { path: 'client-list', component: ClientListComponent },
      { path: 'create-client', component: CreateClientComponent },
      { path: 'client-details/:id', component: ClientDetailsComponent },


      { path: 'fournisseur-list', component: FournisseurListComponent },
      { path: 'create-fournisseur', component: CreateFournisseurComponent },
      { path: 'fournisseur-details/:id', component: FournisseurDetailsComponent },


      { path: 'commande-list', component: CommandeListComponent },
      { path: 'create-commande', component: CreateCommandeComponent },
      { path: 'commande-details/:id', component: CommandeDetailsComponent },


      { path: 'stock-list', component: StockListComponent },
      { path: 'create-stock', component: CreateStockComponent },
      { path: 'stock-details/:id', component: StockDetailsComponent },
    ]
  },
  {
    path: '',
    component: AuthComponent,
    children: [
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
