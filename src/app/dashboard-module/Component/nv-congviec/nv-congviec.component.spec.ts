import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NvCongviecComponent } from './nv-congviec.component';

describe('NvCongviecComponent', () => {
  let component: NvCongviecComponent;
  let fixture: ComponentFixture<NvCongviecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NvCongviecComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NvCongviecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
