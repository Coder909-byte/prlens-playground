export function getUserById(users, id) {
  const user = users.find((u) => u.id === id);
  if (!user) return null;
  return { id: user.id, name: user.name };
}
