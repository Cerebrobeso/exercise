import {Directive, effect, inject, input, TemplateRef, ViewContainerRef} from '@angular/core';
import {UserRole} from '@/src/app/access-control/user.model';

@Directive({
  selector: '[appAccessControlDirective]',
})
export class AccessControlDirective {
  userRole = input<UserRole>();
  accessRole = input<UserRole>();

  private templateRef = inject(TemplateRef);
  private viewContainerRef = inject(ViewContainerRef);

  constructor() {
    effect(() => {
      if (this.userRole() === this.accessRole()) {
        this.viewContainerRef.createEmbeddedView(this.templateRef);
      }
    })
  }
}
