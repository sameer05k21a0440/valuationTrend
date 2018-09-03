import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule, NZ_I18N, en_US} from 'ng-zorro-antd';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { StockMainMenuComponent } from './stock-main-menu/stock-main-menu.component';

import { StockListProvider } from '../provider/stock-provider';


registerLocaleData(en);
@NgModule({
  declarations: [
    AppComponent,
    StockMainMenuComponent
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    NgZorroAntdModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US },StockListProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
