export const formatDiscountedPrice = (
  discount: number,
  price: number
): string | null => {
  if (!price) return null
  if (!discount) return '$' + price.toFixed(2)

  const discountPrice = price * (discount / 100)
  const newPrice = price - discountPrice
  const formattedNewPrice = newPrice.toFixed(2)

  return '$' + formattedNewPrice
}
