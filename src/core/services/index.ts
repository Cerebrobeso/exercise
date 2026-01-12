// 1. Esporta l'astrazione (il "contratto" pubblico)
// Questo è ciò che useranno i tuoi componenti: import { LoggerService } from '@core/services/logger';
export * from './logger.service';

// 2. Esporta le implementazioni (se necessario, es. per i test o config esplicita)
export * from './logger.impl.console';
export * from './logger.impl.api';

// 3. (Opzionale ma molto Pro) Esporta direttamente il PROVIDER configurato
// Così chi configura l'app non deve sapere i dettagli interni della factory!
import { Provider, isDevMode } from '@angular/core';
import { LoggerService } from './logger.service';
import { ConsoleLoggerService } from './logger.impl.console';
import { ApiLoggerService } from './logger.impl.api';

export function loggerFactory(): LoggerService {
  return isDevMode() ? new ConsoleLoggerService() : new ApiLoggerService();
}

export const LOGGER_PROVIDER: Provider = {
  provide: LoggerService,
  useFactory: loggerFactory,
};
