import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatListModule} from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatInputModule} from '@angular/material/input';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { SuperHeroService } from './services/superheros.service';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import { FullProfileComponent } from './full-profile/full-profile.component';
import {MatCheckboxDefaultOptions, MatCheckboxModule, MAT_CHECKBOX_DEFAULT_OPTIONS} from '@angular/material/checkbox';
import { CompareComponent } from './compare/compare.component';
import { BuildProfileComponent } from './build-profile/build-profile.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FullProfileComponent,
    CompareComponent,
    BuildProfileComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatDialogModule,
    MatCheckboxModule
  ],
  providers: [
    SuperHeroService,
    {
      provide: MAT_CHECKBOX_DEFAULT_OPTIONS,
      useValue: {
        clickAction: 'noop'
      } as MatCheckboxDefaultOptions
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
