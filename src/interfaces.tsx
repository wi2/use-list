// reducer
export interface ActionList {
  type?: string
  id?: string
  ids?: string[]
  action?: object | undefined
}

export interface Row {
  _id: string
  createdAt: Date
  updatedAt: Date
  action?: object | undefined
}

export interface StateList extends Array<Row> { }
