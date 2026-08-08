import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VfChatbotSelectorAngularComponent } from './vf-chatbot-selector.angular.component';

describe('VfChatbotSelectorAngularComponent', () => {
  let component: VfChatbotSelectorAngularComponent;
  let fixture: ComponentFixture<VfChatbotSelectorAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VfChatbotSelectorAngularComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VfChatbotSelectorAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
