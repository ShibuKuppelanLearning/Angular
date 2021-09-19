import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {

  constructor(private templateRef: TemplateRef<any>, private viewControllerRef: ViewContainerRef) {}

  @Input() set appUnless(condition: boolean) {
    if (!condition) {
      this.viewControllerRef.createEmbeddedView(this.templateRef);
    } else {
      this.viewControllerRef.clear();
    }
  }

  

}
