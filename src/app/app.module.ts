// Angular imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Material & flex imports
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatButtonModule} from '@angular/material';
import {MatCardModule} from '@angular/material/card';

// Our components imports
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './components/list/list.component';
import { PageDetailComponent } from './components/page-detail/page-detail.component';
import { PageListsComponent } from './components/page-lists/page-lists.component';
import { SearchComponent } from './components/search/search.component';
import { StatsComponent } from './components/stats/stats.component';
import { GenresComponent } from './components/genres/genres.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    PageDetailComponent,
    PageListsComponent,
    SearchComponent,
    StatsComponent,
    GenresComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FlexLayoutModule,
    MatButtonModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [ListComponent, PageDetailComponent, PageListsComponent, SearchComponent, StatsComponent, GenresComponent]
})
export class AppModule { }
