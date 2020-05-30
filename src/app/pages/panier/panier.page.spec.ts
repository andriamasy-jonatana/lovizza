import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PanierPage } from './panier.page';
import {CommonModule, Location} from '@angular/common';
import {RouterTestingModule} from '@angular/router/testing';

describe('PanierPage', () => {
  let component: PanierPage;
  let fixture: ComponentFixture<PanierPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanierPage ],
      imports: [IonicModule.forRoot(), CommonModule, RouterTestingModule],
      providers: [Location]
    }).compileComponents();

    fixture = TestBed.createComponent(PanierPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeDefined();
  });
});
