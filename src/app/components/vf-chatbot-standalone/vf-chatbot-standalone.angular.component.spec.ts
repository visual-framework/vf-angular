import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VfChatbotStandaloneAngularComponent } from './vf-chatbot-standalone.angular.component';

describe('VfChatbotStandaloneAngularComponent', () => {
  let component: VfChatbotStandaloneAngularComponent;
  let fixture: ComponentFixture<VfChatbotStandaloneAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VfChatbotStandaloneAngularComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VfChatbotStandaloneAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
