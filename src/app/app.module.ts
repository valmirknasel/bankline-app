import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovimentacaoListComponent } from './components/movimentacao-list/movimentacao-list.component';
import { MovimentacaoNewComponent } from './components/movimentacao-new/movimentacao-new.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import  localePt from '@angular/common/locales/pt';
import { CurrencyMaskModule } from "ng2-currency-mask";
import { MovimentacaoListItemComponent } from './components/movimentacao-list-item/movimentacao-list-item.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MovimentacaoDeleteComponent } from './components/movimentacao-delete/movimentacao-delete.component';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    MovimentacaoListComponent,
    MovimentacaoNewComponent,
    MovimentacaoListItemComponent,
    MovimentacaoDeleteComponent
  ],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		AppRoutingModule,
		NgbModule,
		FormsModule,
		HttpClientModule,
		CurrencyMaskModule,
	],
  providers: [{provide: LOCALE_ID, useValue: 'pt-BR'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
