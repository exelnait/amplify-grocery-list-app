import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmplifyS3ImageComponent } from './amplify-s3-image.component';

describe('AmplifyS3ImageComponent', () => {
  let component: AmplifyS3ImageComponent;
  let fixture: ComponentFixture<AmplifyS3ImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmplifyS3ImageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AmplifyS3ImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
