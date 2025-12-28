export interface FormattedTime {
  text: string;
  isUrgent: boolean;
}

const ONE_HOUR_MS = 3600000; // 1 hour in milliseconds

export function formatTime(ms: number): FormattedTime {
  if (ms < 0) {
    return { text: '00m 00s', isUrgent: true };
  }

  const totalSeconds = Math.floor(ms / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  const text = `${minutes}m ${seconds.toString().padStart(2, '0')}s`;

  return {
    text,
    isUrgent: minutes < 5,
  };
}

export function getTimeRemaining(createdAt: number): number {
  return ONE_HOUR_MS - (Date.now() - createdAt);
}

export function isExpired(createdAt: number): boolean {
  return Date.now() - createdAt > ONE_HOUR_MS;
}

export { ONE_HOUR_MS };

