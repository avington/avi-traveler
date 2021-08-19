import { CredentialsEntity } from '@avi-traveler/models';

export interface AuthState {
  entity: CredentialsEntity | null;
  isSignedIn: boolean;
  error?: string | null;
}
