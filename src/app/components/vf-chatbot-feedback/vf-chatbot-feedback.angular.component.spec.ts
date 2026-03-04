import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VfChatbotFeedbackAngularComponent } from './vf-chatbot-feedback.angular.component';

describe('VfChatbotFeedbackAngularComponent', () => {
  let component: VfChatbotFeedbackAngularComponent;
  let fixture: ComponentFixture<VfChatbotFeedbackAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VfChatbotFeedbackAngularComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VfChatbotFeedbackAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
