import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EasyPage } from './easy.page';

describe('EasyPage', () => {
  let component: EasyPage;
  let fixture: ComponentFixture<EasyPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EasyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
