import vi from './messages/vi/common.json';

type ViMessages = typeof vi;

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace AppConfig {
    type Messages = ViMessages;
  }
}

export {};
