import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightSideBarSkeletonComponent } from './right-side-bar-skeleton.component';

describe('RightSideBarSkeletonComponent', () => {
  let component: RightSideBarSkeletonComponent;
  let fixture: ComponentFixture<RightSideBarSkeletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RightSideBarSkeletonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RightSideBarSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
