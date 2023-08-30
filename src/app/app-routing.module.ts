import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddIssueComponent } from './add-issue/add-issue.component';
import { ViewIssuesComponent } from './view-issues/view-issues.component';
import { DeleteIssueComponent } from './delete-issue/delete-issue.component';

const routes: Routes = [
  { path: 'add', component: AddIssueComponent },
  { path: 'view', component: ViewIssuesComponent },
  { path: 'delete/:id', component: DeleteIssueComponent },
  { path: '', redirectTo: '/view', pathMatch: 'full' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
