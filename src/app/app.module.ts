import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { TirageComponent } from './pages/tirage/tirage.component';
import { AbsentsComponent } from './pages/absents/absents.component';
import { ReactiveFormsModule } from '@angular/forms'; // Import du module ReactiveFormsModule

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TirageComponent,
    AbsentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule // Ajout module ReactiveFormsModule pour création des formulaires en page "Absents"
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
