import { Tree, STATUS } from './tree'

describe('Tree', () => {
  test('Creates a new tree', () => {
    const tree = new Tree(() => () => STATUS.SUCCESS)
    expect(tree instanceof Tree).toEqual(true)
  })

  test('Can tick', () => {
    const leaf = jest.fn()
    const tree = new Tree(() => leaf)
    tree.tick()

    expect(leaf).toHaveBeenCalled()
  })

  test('Can tick, again', () => {
    const leaf = jest.fn()
    const tree = new Tree(() => leaf)
    tree.tick()
    tree.tick()

    expect(leaf).toHaveBeenCalledTimes(2)
  })
})
