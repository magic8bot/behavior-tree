import { selectorNode } from './selector'
import { STATUS } from '../tree'

describe('SelectorNode', () => {
  test('Runs leaf node', () => {
    const leaf = jest.fn()

    selectorNode(() => [leaf])()

    expect(leaf).toHaveBeenCalled()
  })

  test('Runs leaf nodes until success', () => {
    const leaf1 = jest.fn().mockReturnValue(STATUS.FAILURE)
    const leaf2 = jest.fn().mockReturnValue(STATUS.SUCCESS)
    const leaf3 = jest.fn()

    selectorNode(() => [leaf1, leaf2, leaf3])()

    expect(leaf1).toHaveBeenCalled()
    expect(leaf2).toHaveBeenCalled()
    expect(leaf3).not.toHaveBeenCalled()
  })

  test('Returns success if all fail', () => {
    const leaf1 = jest.fn().mockReturnValue(STATUS.FAILURE)
    const leaf2 = jest.fn().mockReturnValue(STATUS.FAILURE)
    const leaf3 = jest.fn().mockReturnValue(STATUS.FAILURE)

    const expected = STATUS.SUCCESS
    const result = selectorNode(() => [leaf1, leaf2, leaf3])()

    expect(result).toEqual(expected)
  })
})
