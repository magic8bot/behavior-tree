import { Action, STATUS } from '../tree'

export type ParallelNode = (nodes: () => Action[], successReq: number) => Action

export const parallelNode: ParallelNode = (nodes, successReq) => () => {
  const map = new Map()
  const leaves = nodes()

  for (let leaf of leaves) {
    map.set(leaf, leaf())
  }

  const statuses = Array.from(map.values())
  const successes = statuses.filter((status) => status === STATUS.SUCCESS)

  return successes.length === successReq ? STATUS.SUCCESS : STATUS.FAILURE
}
