import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalProtocolosComponent } from './modal-protocolos.component';

describe('ModalProtocolosComponent', () => {
  let component: ModalProtocolosComponent;
  let fixture: ComponentFixture<ModalProtocolosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalProtocolosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalProtocolosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
