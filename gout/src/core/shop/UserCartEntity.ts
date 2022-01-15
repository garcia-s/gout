import { ProductEntity } from "./ProductEntity"

export class UserCartItem {
  product: ProductEntity
  quantity: number
  constructor(product: ProductEntity, quantity: number) {
    this.product = product
    this.quantity = quantity
  }

  calculateTotal(): number {
    return 3
  }
}

export class UserCartEntity {
  items: UserCartItem[] = []

  get calculateTotal(): number {
    let total: number = 0
    this.items.forEach(e => (total = total + e.calculateTotal()))
    return total
  }
}
