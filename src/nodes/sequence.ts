import { Action, STATUS } from '../tree'

type SequenceNode = (nodes: () => Action[]) => Action

export const sequenceNode: SequenceNode = (nodes) => () => {
  for (let node of nodes()) {
    const status = node()
    if (status !== STATUS.SUCCESS) return status
  }

  return STATUS.SUCCESS
}
