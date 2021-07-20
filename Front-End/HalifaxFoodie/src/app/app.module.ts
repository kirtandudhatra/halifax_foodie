import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './components/signin/signin.component';
import { RegisterComponent } from './components/register/register.component';
import { ChatbotComponent } from './components/chatbot/chatbot.component';
import { MessengerComponent } from './components/messenger/messenger.component';
import { MainComponent } from './components/main/main.component';
import { RestrauntComponent } from './components/restraunt/restraunt.component';
import { CartComponent } from './components/cart/cart.component';
import { OrderComponent } from './components/order/order.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { FeedbackAnalysisComponent } from './components/feedback-analysis/feedback-analysis.component';
import { RecipeUploaderComponent } from './components/recipe-uploader/recipe-uploader.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule, } from '@angular/forms'
import { MatButtonModule } from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSelectModule} from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    RegisterComponent,
    ChatbotComponent,
    MessengerComponent,
    MainComponent,
    RestrauntComponent,
    CartComponent,
    OrderComponent,
    FeedbackComponent,
    FeedbackAnalysisComponent,
    RecipeUploaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatSelectModule,
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
