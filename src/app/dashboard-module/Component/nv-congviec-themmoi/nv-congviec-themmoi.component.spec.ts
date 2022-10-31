import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NvCongviecThemmoiComponent } from './nv-congviec-themmoi.component';

describe('NvCongviecThemmoiComponent', () => {
  let component: NvCongviecThemmoiComponent;
  let fixture: ComponentFixture<NvCongviecThemmoiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NvCongviecThemmoiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NvCongviecThemmoiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
