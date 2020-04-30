import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvenoddComponent } from './evenodd.component';

describe('EvenoddComponent', () => {
  let component: EvenoddComponent;
  let fixture: ComponentFixture<EvenoddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvenoddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvenoddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
