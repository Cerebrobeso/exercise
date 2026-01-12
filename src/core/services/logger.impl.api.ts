import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable()
export class ApiLoggerService implements LoggerService {
  log(message: string): void {
    // Qui faresti una chiamata HTTP reale
    console.warn(`[SENDING TO SERVER]: ${message}`);
  }
  error(message: string): void {
    console.warn(`[REPORTING CRITICAL ERROR]: ${message}`);
  }
}
