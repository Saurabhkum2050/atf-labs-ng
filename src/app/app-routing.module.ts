import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { HomeComponent } from './pages/home/home.component';
import { MemoriesComponent } from './pages/memories/memories.component';
import { ServicesComponent } from './pages/services/services.component';

const routes: Routes = [
  {
    component: HomeComponent,
    path: ''
  },
  {
    component: AboutUsComponent,
    path: 'about-us'
  },
  {
    component: MemoriesComponent,
    path: 'memories'
  },
  {
    component: ServicesComponent,
    path: 'services'
  },
  {
    component: ContactUsComponent,
    path: 'contact-us'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
