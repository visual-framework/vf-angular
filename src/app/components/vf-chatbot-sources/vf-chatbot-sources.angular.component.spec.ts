import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VfChatbotSourcesAngularComponent } from './vf-chatbot-sources.angular.component';

describe('VfChatbotSourcesAngularComponent', () => {
  let component: VfChatbotSourcesAngularComponent;
  let fixture: ComponentFixture<VfChatbotSourcesAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VfChatbotSourcesAngularComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VfChatbotSourcesAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
