export enum STATUS {
  FAILURE,
  SUCCESS,
}

export type Action = () => STATUS
export type RootNode = () => Action

export class Tree {
  private root: Action

  constructor(root: RootNode) {
    this.root = root()
  }

  tick = () => this.root()
}
