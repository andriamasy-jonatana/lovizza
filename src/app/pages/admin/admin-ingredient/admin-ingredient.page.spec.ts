import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdminIngredientPage } from './admin-ingredient.page';

describe('AdminIngredientPage', () => {
  let component: AdminIngredientPage;
  let fixture: ComponentFixture<AdminIngredientPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminIngredientPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdminIngredientPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
