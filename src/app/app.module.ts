import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContadorComponent } from './components/contador/contador.component';
import { ModelosComponent } from './components/modelos/modelos.component';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListComponent } from './components/list/list.component';
import { UserComponent } from './components/user/user.component';
import { FormsComponent } from './components/forms/forms.component';
import { AliasComponent } from './components/alias/alias.component';
import { DirectivaDirective } from './components/directivas/directiva.directive';
import { ClasePipesComponent } from './components/clase-pipes/clase-pipes.component';
import { UppercasePipe } from './components/pipes/uppercase.pipe';
import { SortPipe } from './components/pipes/sort.pipe';
import { SortByPipe } from './components/pipes/sort-by.pipe';
import { HttpClientComponent } from './components/http-client/http-client.component';
import { ViewchildComponent } from './components/viewchild/viewchild.component';
import { SearchComponent } from './components/search/search.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchPipe } from './components/pipes/search.pipe';
import { ContentComponent } from './components/content/content.component';
import {RouterModule, Routes} from '@angular/router';
import { NgOnChangesComponent } from './components/ng-on-changes/ng-on-changes.component';
import {MatSelectModule} from '@angular/material/select';


@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent,
    ModelosComponent,
    LoginComponent,
    ListComponent,
    UserComponent,
    FormsComponent,
    AliasComponent,
    DirectivaDirective,
    ClasePipesComponent,
    UppercasePipe,
    SortPipe,
    SortByPipe,
    HttpClientComponent,
    ViewchildComponent,
    SearchComponent,
    SearchPipe,
    ContentComponent,
    NgOnChangesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
