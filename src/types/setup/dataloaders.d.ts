import { AddressDataloaders } from '../../backend/controllers/addresses/dataloaders'
import { ConsumerDataloaders } from '../../backend/controllers/consumers/dataloaders'
import { PaymentDataloaders } from '../../backend/controllers/payments/dataloaders'
import { ProductDataloaders } from '../../backend/controllers/products/dataloaders'

export interface Dataloaders {
  addresses: AddressDataloaders
  consumers: ConsumerDataloaders
  payments: PaymentDataloaders
  products: ProductDataloaders
}
