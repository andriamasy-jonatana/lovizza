import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdminPizzaPage } from './admin-pizza.page';
import {RouterTestingModule} from '@angular/router/testing';
import {PizzaService} from '../../../services/pizza/pizza.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('AdminPizzaPage', () => {
  let component: AdminPizzaPage;
  let fixture: ComponentFixture<AdminPizzaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminPizzaPage ],
      imports: [IonicModule.forRoot(), RouterTestingModule, HttpClientTestingModule],
      providers: [PizzaService]
    }).compileComponents();

    fixture = TestBed.createComponent(AdminPizzaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
