import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListingComponent } from './userlisting.component';

describe('UserlistingComponent', () => {
  let component: UserListingComponent;
  let fixture: ComponentFixture<UserListingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserListingComponent],
    });
    fixture = TestBed.createComponent(UserListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
