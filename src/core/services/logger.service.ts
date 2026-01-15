// logger.service.ts
export abstract class LoggerService {
  abstract log(message: string): void;
  abstract error(message: string): void;

  abstract toastSuccess(message: string): void;

  abstract toastWarning(message: string): void;

  abstract toastError(message: string): void;
}
