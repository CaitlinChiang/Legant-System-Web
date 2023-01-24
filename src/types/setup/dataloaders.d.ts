import { AddressDataloaders } from '../../backend/controllers/addresses/dataloaders'
import { ConsumerDataloaders } from '../../backend/controllers/consumers/dataloaders'
import { PackageDataloaders } from '../../backend/controllers/packages/dataloaders'
import { PaymentDataloaders } from '../../backend/controllers/payments/dataloaders'
import { ProductDataloaders } from '../../backend/controllers/products/dataloaders'
import { SupplierDataloaders } from '../../backend/controllers/suppliers/dataloaders'

export interface Dataloaders {
  addresses: AddressDataloaders
  consumers: ConsumerDataloaders
  packages: PackageDataloaders
  payments: PaymentDataloaders
  products: ProductDataloaders
  suppliers: SupplierDataloaders
}
