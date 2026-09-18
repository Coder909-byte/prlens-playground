export function getUserById(users, id) {
  const user = users.find((u) => u.id == id);
  return { id: user.id, name: user.name, email: user.email };
}
