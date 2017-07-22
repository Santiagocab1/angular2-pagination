import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { UsersServices } from './users/users.service';

import { AppComponent } from './app.component';
import { SortArrowsComponent } from './pagination/sort-arrows.component';
import { PaginationFilterPipe } from "./pagination/pagination-filter.pipe";
import { PaginationComponent } from './pagination/pagination.component';
import { PaginationDirective } from './pagination/pagination.directive';

@NgModule({
  declarations: [
    AppComponent,
    PaginationComponent,
    PaginationFilterPipe,
    SortArrowsComponent,
    PaginationDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [UsersServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
