import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';
import {toast} from 'ngx-sonner';

@Injectable()
export class ApiLoggerService implements LoggerService {
  log(message: string): void {
    // Qui faresti una chiamata HTTP reale
    console.warn(`[SENDING TO SERVER]: ${message}`);
  }
  error(message: string): void {
    console.warn(`[REPORTING CRITICAL ERROR]: ${message}`);
  }
  toastSuccess(message: string) {
    toast.success(message)
  }

  toastWarning(message: string) {
    toast.warning(message)
  }

  toastError(message: string) {
    toast.error(message)
  }
}
