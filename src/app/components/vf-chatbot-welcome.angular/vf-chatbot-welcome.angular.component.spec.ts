import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VfChatbotWelcomeAngularComponent } from './vf-chatbot-welcome.angular.component';

describe('VfChatbotWelcomeAngularComponent', () => {
  let component: VfChatbotWelcomeAngularComponent;
  let fixture: ComponentFixture<VfChatbotWelcomeAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VfChatbotWelcomeAngularComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VfChatbotWelcomeAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
