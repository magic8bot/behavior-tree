import { Action } from '../tree'

export type LeafNode = (action: Action) => Action

export const leafNode: LeafNode = (action) => () => action()
