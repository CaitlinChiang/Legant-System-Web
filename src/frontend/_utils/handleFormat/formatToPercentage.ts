export const formatToPercentage = (discount: number): string | null => {
  if (!discount) return null

  const discountWholeNumber = String(discount)
  return discountWholeNumber + '%'
}
