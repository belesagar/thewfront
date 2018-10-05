import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule, routingComponents } from './app-routing.module';

import { AppComponent } from './app.component';
import { MiddelComponent } from './layout/middel/middel.component';
import { HeaderComponent } from './layout/header/header.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderLayoutComponent } from './layout/header-layout/header-layout.component';
import { UserlistComponent } from './users/userlist/userlist.component';
import { Constant } from './constant/constant.component';
import { TosterService } from './toster-service.service';
import { CommonService } from './common.service';
import { PlaceOrderComponent } from './order/place-order/place-order.component';
import { LocalStorageServiceService } from './local-storage-service.service';
import { AuthinterceptorsService } from './interceptors/authinterceptors.service';
import { HTTP_INTERCEPTORS} from '@angular/common/http';
import { OrderdetailsComponent } from './order/orderdetails/orderdetails.component';
import { OrderlistComponent } from './order/orderlist/orderlist.component';
import { LogoutComponent } from './logout/logout.component';
import { LoaderComponent } from './layout/loader/loader.component';
import { LoadingModule } from 'ngx-loading';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { ErrorpageComponent } from './layout/errorpage/errorpage.component';
import { ServicesComponent } from './services/services.component';
import { RefferandearnComponent } from './refferandearn/refferandearn.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { PaymentresultComponent } from './order/paymentresult/paymentresult.component';
import { OfferComponent } from './offer/offer.component';
import { ConfirmOrderComponent } from './order/confirm-order/confirm-order.component';
import { ServicecategoryComponent } from './servicecategory/servicecategory.component';
import { LoginMiddelComponent } from './layout/login-middel/login-middel.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    MiddelComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    HeaderLayoutComponent,
    UserlistComponent,
    Constant,
    PlaceOrderComponent,
    OrderdetailsComponent,
    OrderlistComponent,
    LogoutComponent,
    LoaderComponent,
    ErrorpageComponent,
    ServicesComponent,
    RefferandearnComponent,
    MyprofileComponent,
    PaymentresultComponent,
    OfferComponent,
    ConfirmOrderComponent,
    ServicecategoryComponent,
    LoginMiddelComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    LoadingModule,
    Ng4LoadingSpinnerModule.forRoot(),
    ReactiveFormsModule
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:AuthinterceptorsService,
      multi:true,
    },
    TosterService,
    CommonService,
    LocalStorageServiceService,
    AuthinterceptorsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
