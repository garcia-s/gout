export class CategoryEntity {
  id: string
  parent?: string
  name: string

  constructor(p: { id: string; name: string; parent?: string }) {
    this.id = p.id
    this.parent = p.parent
    this.name = p.name
  }
}
