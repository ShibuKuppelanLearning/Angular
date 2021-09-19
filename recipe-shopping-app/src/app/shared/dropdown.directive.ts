import { Directive, OnInit, HostListener, HostBinding } from '@angular/core'

@Directive({
    selector: '[appdropdown]'
})
export class DropdownDirective implements OnInit {
    @HostBinding('class.show')isOpen: boolean = false;    
    @HostListener('click') onDropdownClicked() {
        this.isOpen = !this.isOpen;
    }

    constructor() {

    }

    ngOnInit(): void {

    }
}