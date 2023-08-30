import { Component, OnInit } from '@angular/core';
import { IssueService } from '../issue.service';


@Component({
  selector: 'app-view-issues',
  templateUrl: './view-issues.component.html',
  styleUrls: ['./view-issues.component.css']
})
export class ViewIssuesComponent implements OnInit {
  issues: any[] | undefined; // Adjust the type based on your API response

  constructor(private issueService: IssueService) {}

  ngOnInit(): void {
    this.fetchIssues();
  }

  private fetchIssues(): void {
    this.issueService.getAllIssues().subscribe(
      (issues: any[]) => {
        this.issues = issues;
      },
      error => {
        console.error('Error fetching issues:', error);
      }
    );
  }
}

