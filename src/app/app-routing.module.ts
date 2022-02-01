import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AccueilComponent } from './accueil/accueil.component';
import { TarifsComponent } from './tarifs/tarifs.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesOfferedComponent } from './services-offered/services-offered.component';
const routes: Routes = [
  { path: '', redirectTo: '/accueil', pathMatch: 'full'},
  { path: 'accueil', component: AccueilComponent},
  { path: 'services', component: ServicesOfferedComponent},
  { path: 'tarifs', component: TarifsComponent},
  { path: 'contacts', component: ContactComponent},
  { path: '**', redirectTo: '/accueil'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
