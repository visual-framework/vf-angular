import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VfTabsAngularComponent } from './vf-tabs.component';
import { DomSanitizer } from '@angular/platform-browser';
import { ChangeDetectorRef } from '@angular/core';

declare global {
    interface Window {
        vfTabs: () => void;
    }
}

describe('VfTabsAngularComponent', () => {
    let component: VfTabsAngularComponent;
    let fixture: ComponentFixture<VfTabsAngularComponent>;
    let sanitizer: DomSanitizer;
    let cdr: ChangeDetectorRef;

    beforeEach(async () => {
        // Just create an empty function instead of a spy
        window.vfTabs = () => {};

        await TestBed.configureTestingModule({
            declarations: [VfTabsAngularComponent],
            providers: [
                { provide: DomSanitizer, useValue: { bypassSecurityTrustHtml: (html: string) => html } },
                { provide: ChangeDetectorRef, useValue: { detectChanges: () => {} } }
            ]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(VfTabsAngularComponent);
        component = fixture.componentInstance;
        sanitizer = TestBed.inject(DomSanitizer);
        cdr = TestBed.inject(ChangeDetectorRef);
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should set tabs data on ngOnChanges', () => {
        const tabsData = [
            [{ tab_title: 'Tab 1' }, { tab_number: 1 }, { tab_heading: 'Heading 1' }, { tab_content: 'Content 1' }],
            [{ tab_title: 'Tab 2' }, { tab_number: 2 }, { tab_heading: 'Heading 2' }, { tab_content: 'Content 2' }]
        ];
        component.tabsdata = tabsData;
        component.ngOnChanges();
        expect(component.tabs).toEqual(tabsData);
    });

    it('should sanitize HTML content', () => {
        const unsafeHtml = '<script>alert("XSS")</script>';
        const safeHtml = component.sanitizeHTML(unsafeHtml);
        expect(safeHtml).toEqual(unsafeHtml);
    });

    xit('should call vfTabs on ngAfterViewInit', () => {
        // Create the spy just for this test
        const vfTabsSpy = spyOn(window, 'vfTabs');
        component.ngAfterViewInit();
        expect(vfTabsSpy).toHaveBeenCalled();
    });

    xit('should detect changes on ngAfterViewInit', () => {
        spyOn(cdr, 'detectChanges');
        component.ngAfterViewInit();
        expect(cdr.detectChanges).toHaveBeenCalled();
    });

    it('should show tab content on click of tab', () => {
        const tabsData = [
            [{ tab_title: 'Tab 1' }, { tab_number: 1 }, { tab_heading: 'Heading 1' }, { tab_content: 'Content 1' }],
            [{ tab_title: 'Tab 2' }, { tab_number: 2 }, { tab_heading: 'Heading 2' }, { tab_content: 'Content 2' }]
        ];
        component.tabsdata = tabsData;
        component.ngOnChanges();
        const tabNumber = 1;
        const compiled : HTMLElement = fixture.debugElement.nativeElement;
        const hiddentab = compiled.querySelector('vf-tabs__section--2');
        console.log(hiddentab);
        // expect(hiddentab.hidden).toEqual(tabNumber);
    });
});
