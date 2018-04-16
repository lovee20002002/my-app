import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { UpnavebarComponent } from './upnavebar/upnavebar.component';
import { HomeComponent } from './home/home.component';
import { StarComponent } from './star/star.component';
import { BasicHighlightDirective } from './basic-highlight.directive';
import { AdvancedHighlightDirective } from './advanced-highlight.directive';
import { TrueComponent } from './true/true.component';
import { UnleesDirective } from './unlees.directive';
import { ServiceComponent } from './service/service.component';
import { AddAccountComponent } from './add-account/add-account.component';
import { AccountsService } from './accounts.service';
import { LoggingService } from './logging.service';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { AccountComponent } from './account/account.component';


const routes: Routes = [
  { path:'',component:HomeComponent},
  { path:'star',component:StarComponent},
  { path:'addaccunt',component:AddAccountComponent},
  { path:'account',component:AccountComponent},
  { path:'user/:id/:name',component:UserComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    UpnavebarComponent,
    HomeComponent,
    StarComponent,
    BasicHighlightDirective,
    AdvancedHighlightDirective,
    TrueComponent,
    UnleesDirective,
    ServiceComponent,
    AddAccountComponent,
    UserComponent,
    AccountComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(routes)
  ],
  providers: [AccountsService,LoggingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
