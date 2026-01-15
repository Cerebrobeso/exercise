import {Component, computed, inject} from '@angular/core';
import {HlmToasterImports} from '@/libs/ui/sonner/src';
import {AccessControlService} from '@/src/app/access-control/access-control.service';
import {FormBuilder, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {HlmFormFieldImports} from '@/libs/ui/form-field/src';
import {HlmLabelImports} from '@/libs/ui/label/src';
import {HlmInputImports} from '@/libs/ui/input/src';
import {HlmSpinnerImports} from '@/libs/ui/spinner/src';
import {HlmButton} from '@/libs/ui/button/src';
import {AccessControlDirective} from '@/src/app/access-control/access-control.directive';
import {UserRole} from '@/src/app/access-control/user.model';
import {CdkCopyToClipboard} from '@angular/cdk/clipboard';

@Component({
  selector: 'app-access-control',
  imports: [
    HlmToasterImports,
    ReactiveFormsModule,
    HlmFormFieldImports,
    HlmLabelImports,
    HlmInputImports,
    HlmSpinnerImports,
    HlmButton,
    AccessControlDirective,
    CdkCopyToClipboard
  ],
  templateUrl: './access-control.html',
  styleUrl: './access-control.css',
})
export class AccessControl {
  private service = inject(AccessControlService);
  private fb = inject(FormBuilder);

  public user = this.service.currentUser;
  public isAuthenticated = this.service.isAuthenticated;
  public loginForm: FormGroup;

  public userRole = computed(() => this.user()?.role);
  public roles = UserRole;

  isLoading = this.service.loader;

  constructor() {
    this.loginForm = this.fb.group({
      username: [''],
      password: ['']
    });
  }

  isFieldInvalid(fieldName: string): boolean {
    const field = this.loginForm.get(fieldName);
    return !!(field?.invalid && field?.touched);
  }

  login() {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    const {username, password} = this.loginForm.value;
    this.service.login(username, password);
  }

  logout() {
    this.service.logout();
  }
}
