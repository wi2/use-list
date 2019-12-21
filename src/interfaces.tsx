// reducer
export interface ActionList {
  type?: string
  id?: string
  ids?: string[]
  atIndex: number
  action?: object | undefined
}

export interface Row {
  _id: string
  _createdAt: Date
  _updatedAt: Date
  action?: object | undefined
}

export interface StateList extends Array<Row> { }
