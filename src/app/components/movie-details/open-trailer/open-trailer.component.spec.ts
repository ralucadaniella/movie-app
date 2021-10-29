import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenTrailerComponent } from './open-trailer.component';

describe('OpenTrailerComponent', () => {
  let component: OpenTrailerComponent;
  let fixture: ComponentFixture<OpenTrailerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenTrailerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenTrailerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
