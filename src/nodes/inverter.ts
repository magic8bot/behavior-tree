import { Action, STATUS } from '../tree'

export type InverterNode = (node: Action) => Action

export const inverterNode: InverterNode = (node) => () => {
  const status = node()
  return status === STATUS.SUCCESS ? STATUS.FAILURE : STATUS.SUCCESS
}
