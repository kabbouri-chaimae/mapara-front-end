import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './theme/shared/shared.module';

import { AppComponent } from './app.component';
import { AdminComponent } from './theme/layout/admin/admin.component';
import { AuthComponent } from './theme/layout/auth/auth.component';
import { NavigationComponent } from './theme/layout/admin/navigation/navigation.component';
import { NavContentComponent } from './theme/layout/admin/navigation/nav-content/nav-content.component';
import { NavGroupComponent } from './theme/layout/admin/navigation/nav-content/nav-group/nav-group.component';
import { NavCollapseComponent } from './theme/layout/admin/navigation/nav-content/nav-collapse/nav-collapse.component';
import { NavItemComponent } from './theme/layout/admin/navigation/nav-content/nav-item/nav-item.component';
import { NavBarComponent } from './theme/layout/admin/nav-bar/nav-bar.component';
import { NavLeftComponent } from './theme/layout/admin/nav-bar/nav-left/nav-left.component';
import { NavSearchComponent } from './theme/layout/admin/nav-bar/nav-left/nav-search/nav-search.component';
import { NavRightComponent } from './theme/layout/admin/nav-bar/nav-right/nav-right.component';
import { ConfigurationComponent } from './theme/layout/admin/configuration/configuration.component';

import { ToggleFullScreenDirective } from './theme/shared/full-screen/toggle-full-screen';

/* Menu Items */
import { NavigationItem } from './theme/layout/admin/navigation/navigation';
import { NgbButtonsModule, NgbDropdownModule, NgbTabsetModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import {CreateProduitComponent} from './create-produit/create-produit.component';
import {ProduitListComponent} from './produit-list/produit-list.component';
import {ProduitDetailsComponent} from './produit-details/produit-details.component';
import {CreateClientComponent} from './create-client/create-client.component';
import {ClientListComponent} from './client-list/client-list.component';
import {ClientDetailsComponent} from './client-details/client-details.component';
import {FournisseurListComponent} from './fournisseur-list/fournisseur-list.component';
import {CreateFournisseurComponent} from './create-fournisseur/create-fournisseur.component';
import {FournisseurDetailsComponent} from './fournisseur-details/fournisseur-details.component';
import {CreateCommandeComponent} from './create-commande/create-commande.component';
import {CommandeDetailsComponent} from './commande-details/commande-details.component';
import {CommandeListComponent} from './commande-list/commande-list.component';
import {CreateStockComponent} from './create-stock/create-stock.component';
import {StockDetailsComponent} from './stock-details/stock-details.component';
import {StockListComponent} from './stock-list/stock-list.component';

import {RegistrationComponent} from './theme/auth/registration/registration.component';
import {LockScreenComponent} from './theme/auth/lock-screen/lock-screen.component';
import {ForgotComponent} from './theme/auth/forgot/forgot.component';
import {LoginComponent} from './theme/auth/login/login.component';

@NgModule({
  declarations: [

    CreateFournisseurComponent,
    FournisseurDetailsComponent,
    FournisseurListComponent,

    CreateCommandeComponent,
    CommandeDetailsComponent,
    CommandeListComponent,

    CreateProduitComponent,
    ProduitDetailsComponent,
    ProduitListComponent,

    CreateClientComponent,
    ClientDetailsComponent,
    ClientListComponent,
    ClientListComponent,




    CreateStockComponent,
    StockDetailsComponent,
    StockListComponent,
    LoginComponent,
    RegistrationComponent,
    LockScreenComponent,
    ForgotComponent,


    AppComponent,
    AdminComponent,
    AuthComponent,
    NavigationComponent,

    NavContentComponent,
    NavGroupComponent,
    NavCollapseComponent,
    NavItemComponent,
    NavBarComponent,
    NavLeftComponent,
    NavSearchComponent,
    NavRightComponent,
    ConfigurationComponent,
    ToggleFullScreenDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    NgbDropdownModule,
    NgbTooltipModule,
    NgbButtonsModule,
    NgbTabsetModule
  ],
  providers: [NavigationItem],
  bootstrap: [AppComponent]
})
export class AppModule { }
