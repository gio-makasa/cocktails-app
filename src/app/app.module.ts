import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CagetoriesComponent } from './cagetories/cagetories.component';
import { SearchComponent } from './search/search.component';
import { AboutComponent } from './pages/about/about.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ListComponent } from './pages/list/list.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent  },
  { path: 'about/:id', component: AboutComponent },
  { path: 'list/:filter/:filterValue', component: ListComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    CagetoriesComponent,
    SearchComponent,
    AboutComponent,
    HomeComponent,
    ListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
