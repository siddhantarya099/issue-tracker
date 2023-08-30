import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:3000/issues';

@Injectable({
  providedIn: 'root'
})
export class IssueService {
  constructor(private http: HttpClient) {}

  addIssue(issue: any): Observable<any> {
    return this.http.post(API_URL, issue);
  }

  getAllIssues(): Observable<any[]> {
    return this.http.get<any[]>(API_URL);
  }

  deleteIssue(issueId: string): Observable<any> {
    const deleteUrl = `${API_URL}/${issueId}`;
    return this.http.delete(deleteUrl);
  }
}

