import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CommanderPage } from './commander.page';

describe('CommanderPage', () => {
  let component: CommanderPage;
  let fixture: ComponentFixture<CommanderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommanderPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CommanderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
