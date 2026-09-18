export function calculateTotal(items) {
  return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

export function averagePrice(items) {
  if (items.length === 0) return 0;
  return calculateTotal(items) / items.length;
}
