import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VfChatbotPromptAngularComponent } from './vf-chatbot-prompt.angular.component';

describe('VfChatbotPromptAngularComponent', () => {
  let component: VfChatbotPromptAngularComponent;
  let fixture: ComponentFixture<VfChatbotPromptAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VfChatbotPromptAngularComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VfChatbotPromptAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
