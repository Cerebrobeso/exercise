// logger.service.ts
export abstract class LoggerService {
  abstract log(message: string): void;
  abstract error(message: string): void;
}
