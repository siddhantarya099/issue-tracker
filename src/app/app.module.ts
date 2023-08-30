import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'; // Import ReactiveFormsModule;
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddIssueComponent } from './add-issue/add-issue.component';
import { ViewIssuesComponent } from './view-issues/view-issues.component';
import { DeleteIssueComponent } from './delete-issue/delete-issue.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common'; // Import CommonModule

@NgModule({
  declarations: [
    AppComponent,
    AddIssueComponent,
    ViewIssuesComponent,
    DeleteIssueComponent,
    // No need to include HttpClientModule, ReactiveFormsModule, CommonModule here
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, // Include HttpClientModule here
    ReactiveFormsModule, // Include ReactiveFormsModule here
    CommonModule, // Include CommonModule here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
