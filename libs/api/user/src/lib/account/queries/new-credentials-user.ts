import { sql } from '@sovereign-university/database';
import { UserDetails } from '@sovereign-university/types';

interface NewCredentialsUserOptions {
  username: string;
  passwordHash: string;
  contributorId: string;
  email?: string;
}

export const newCredentialsUserQuery = ({
  username,
  passwordHash,
  contributorId,
  email,
}: NewCredentialsUserOptions) => {
  return sql<UserDetails[]>`
    INSERT INTO users.accounts (
      username, 
      display_name, 
      password_hash, 
      email, 
      contributor_id
    ) VALUES (
      ${username.toLowerCase()},
      ${username},
      ${passwordHash},
      ${email || null}, 
      ${contributorId})
    RETURNING uid, username, display_name, email, contributor_id;
  `;
};
