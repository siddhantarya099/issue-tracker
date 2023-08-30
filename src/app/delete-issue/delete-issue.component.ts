import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IssueService } from '../issue.service';


@Component({
  selector: 'app-delete-issue',
  templateUrl: './delete-issue.component.html',
  styleUrls: ['./delete-issue.component.css']
})
export class DeleteIssueComponent implements OnInit {
  issueId: string = ''; // Initialize the property

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private issueService: IssueService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.issueId = params['id'];
    });
  }
  onDeleteIssue(): void {
    this.issueService.deleteIssue(this.issueId).subscribe(
      () => {
        console.log('Issue deleted successfully');
        this.router.navigate(['/view']);
      },
      error => {
        console.error('Error deleting issue:', error);
      }
    );
  }
}

