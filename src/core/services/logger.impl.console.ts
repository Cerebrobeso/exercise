import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable()
export class ConsoleLoggerService implements LoggerService {
  log(message: string): void {
    console.log(`[DEV LOG]: ${message}`);
  }
  error(message: string): void {
    console.error(`[DEV ERROR]: ${message}`);
  }
}
