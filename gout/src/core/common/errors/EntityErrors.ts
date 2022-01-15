export class EntityError<T> extends Error {
  fields: T[]

  constructor(fields: T[]) {
    super()
    this.fields = fields
  }
}

//Thrown whenever a presenter (Like the GUI adapter) creates an entity with unparsable informaition
export class InputEntityError<T> extends EntityError<T> {}

//Thrown whenever the persistance system (IE backend/database) returns an entity that it's unparseable
export class OutputEntityError<T> extends EntityError<T> {}
