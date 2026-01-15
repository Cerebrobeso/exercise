import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';
import {toast} from 'ngx-sonner';

@Injectable()
export class ConsoleLoggerService implements LoggerService {
  log(message: string): void {
    console.log(`[DEV LOG]: ${message}`);
  }
  error(message: string): void {
    console.error(`[DEV ERROR]: ${message}`);
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
