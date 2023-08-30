import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IssueService } from '../issue.service';

@Component({
  selector: 'app-add-issue',
  templateUrl: './add-issue.component.html',
  styleUrls: ['./add-issue.component.css']
})
export class AddIssueComponent implements OnInit {
  issueForm: FormGroup; // Remove the | undefined part

  constructor(private formBuilder: FormBuilder, private issueService: IssueService) {
    this.issueForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    // No need to initialize the form here anymore
  }

  onSubmit(): void {
    if (this.issueForm.valid) {
      const newIssue = {
        title: this.issueForm.value.title,
        description: this.issueForm.value.description
      };

      this.issueService.addIssue(newIssue).subscribe(
        () => {
          console.log('Issue added successfully');
          this.issueForm.reset();
        },
        error => {
          console.error('Error adding issue:', error);
        }
      );
    }
  }
}
