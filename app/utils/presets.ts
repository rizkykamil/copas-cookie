import { Cookie } from '@/app/types';

export type PresetType = 'simple' | 'full' | 'credentials';

export interface SimplePreset {
  type: 'simple';
  name: string;
  cookies: string[]; // cookie names only
}

export interface FullPreset {
  type: 'full';
  name: string;
  cookies: Array<{
    name: string;
    domain?: string;
    httpOnly?: boolean;
    secure?: boolean;
    sameSite?: 'Strict' | 'Lax' | 'None';
    prioritas?: string;
  }>;
}

export interface CredentialsPreset {
  type: 'credentials';
  name: string;
  username?: string;
  password?: string;
  cookies?: string[]; // optional cookie names
}

export type Preset = SimplePreset | FullPreset | CredentialsPreset;

export const PRESETS: Record<string, Preset> = {
  netflix: {
    type: 'simple',
    name: 'Netflix',
    cookies: ['SecureNetflixId', 'NetflixId'],
  },

  hbogo: {
    type: 'credentials',
    name: 'HBO Go',
    username: '',
    password: '',
  },

  bstation: {
    type: 'full',
    name: 'BStation',
    cookies: [
      {
        name: 'SESSDATA',
        domain: '',
        httpOnly: true,
        secure: true,
        sameSite: undefined,
        prioritas: 'medium',
      },
    ],
  },

  chatgpt : {
    type: 'full',
    name: 'ChatGPT',
    cookies: [
      {
        name: '__Secure-next-auth.session-token',
        domain: '',
        httpOnly: true,
        secure: true,
        sameSite: undefined,
        prioritas: 'medium',
      },
      {
        name: '__Host-next-auth.csrf-token',
        domain: '',
        httpOnly: true,
        secure: true,
        sameSite: undefined,
        prioritas: 'medium',
      },
    ],
  },
};

export function getPreset(type: string): Preset | null {
  return PRESETS[type] || null;
}

