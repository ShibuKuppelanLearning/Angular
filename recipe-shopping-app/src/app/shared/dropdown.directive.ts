import { Directive, OnInit, HostListener, HostBinding, ElementRef, ContentChild } from '@angular/core'

@Directive({
    selector: '[appdropdown]'
})
export class DropdownDirective implements OnInit {
    @ContentChild('dropdownmenu') dropDownMenue: ElementRef;
    @HostBinding('class.show') isOpen: boolean = false;

    @HostListener('click') onDropdownClicked() {
        this.isOpen = !this.isOpen;
        this.dropDownMenue.nativeElement.classList.add('show');
    }

    constructor() {

    }

    ngOnInit(): void {

    }
}