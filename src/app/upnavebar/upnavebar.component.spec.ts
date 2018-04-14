import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpnavebarComponent } from './upnavebar.component';

describe('UpnavebarComponent', () => {
  let component: UpnavebarComponent;
  let fixture: ComponentFixture<UpnavebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpnavebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpnavebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
