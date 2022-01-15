class EntityError<T> extends Error {
  fields: T[]
  constructor(fields: T[]) {
    super()
    this.fields = fields
  }
}

export default EntityError


