import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PizzaDetailsPage } from './pizza-details.page';
import {CommonModule} from '@angular/common';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {PizzaService} from '../../services/pizza/pizza.service';
import {IngredientService} from '../../services/ingredient/ingredient.service';

describe('PizzaDetailsPage', () => {
  let component: PizzaDetailsPage;
  let fixture: ComponentFixture<PizzaDetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PizzaDetailsPage ],
      imports: [IonicModule.forRoot(), CommonModule, HttpClientTestingModule],
      providers: [PizzaService, IngredientService]
    }).compileComponents();

    fixture = TestBed.createComponent(PizzaDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeUndefined();
  });
});
