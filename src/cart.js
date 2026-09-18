export function calculateTotal(items) {
  return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

export function averagePrice(items) {
  return calculateTotal(items) / items.length;
}

export function applyDiscount(total, percent) {
  return total - total * percent;
}
