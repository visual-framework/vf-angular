import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VfChatbotActionPromptAngularComponent } from './vf-chatbot-action-prompt.angular.component';

describe('VfChatbotActionPromptAngularComponent', () => {
  let component: VfChatbotActionPromptAngularComponent;
  let fixture: ComponentFixture<VfChatbotActionPromptAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VfChatbotActionPromptAngularComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VfChatbotActionPromptAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
