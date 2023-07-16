export function generateRandomHash(length: number = 4) {
  let hash = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (let i = 0; i < length; i++) {
    hash += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  return hash;
}
