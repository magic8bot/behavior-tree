import { Action, STATUS } from '../tree'

export type SelectorNode = (nodes: () => Action[]) => Action

export const selectorNode: SelectorNode = (nodes) => () => {
  for (let node of nodes()) {
    const status = node()
    if (status !== STATUS.FAILURE) return status
  }

  return STATUS.SUCCESS
}
