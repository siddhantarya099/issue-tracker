import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { IssueService } from './issue.service';

describe('IssueService', () => {
  let service: IssueService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [IssueService],
    });
    service = TestBed.inject(IssueService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve issues', () => {
    const mockIssues = [
      { id: 1, title: 'Sample Issue 1', description: 'Description 1' },
      { id: 2, title: 'Sample Issue 2', description: 'Description 2' },
    ];

    service.getAllIssues().subscribe((issues) => {
      expect(issues.length).toBe(2);
      expect(issues).toEqual(mockIssues);
    });

    const req = httpMock.expectOne('http://localhost:3000/issues');
    expect(req.request.method).toBe('GET');
    req.flush(mockIssues);
  });
});
