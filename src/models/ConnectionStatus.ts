export const ConnectionStatus = {
  Online: 'online',
  Offline: 'offline',
} as const;

export const ConnectionStatusColor = {
  Success: 'success.main',
  Error: 'error.main',
} as const;

export type ConnectionStatus =
  (typeof ConnectionStatus)[keyof typeof ConnectionStatus];
