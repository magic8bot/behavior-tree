import { parallelNode } from './parallel'
import { STATUS } from '../tree'

describe('ParallelNode', () => {
  test('Runs leaf node', () => {
    const leaf = jest.fn()

    parallelNode(() => [leaf], 1)()

    expect(leaf).toHaveBeenCalled()
  })

  test('Runs leaf nodes', () => {
    const leaf1 = jest.fn().mockReturnValue(STATUS.SUCCESS)
    const leaf2 = jest.fn().mockReturnValue(STATUS.SUCCESS)
    const leaf3 = jest.fn().mockReturnValue(STATUS.SUCCESS)

    parallelNode(() => [leaf1, leaf2, leaf3], 3)()

    expect(leaf1).toHaveBeenCalled()
    expect(leaf2).toHaveBeenCalled()
    expect(leaf3).toHaveBeenCalled()
  })

  test('Returns success if successReq met', () => {
    const leaf1 = jest.fn().mockReturnValue(STATUS.SUCCESS)
    const leaf2 = jest.fn().mockReturnValue(STATUS.SUCCESS)
    const leaf3 = jest.fn().mockReturnValue(STATUS.SUCCESS)

    const expected = STATUS.SUCCESS
    const result = parallelNode(() => [leaf1, leaf2, leaf3], 3)()

    expect(result).toEqual(expected)
  })

  test('Returns faulre if successReq not met', () => {
    const leaf1 = jest.fn().mockReturnValue(STATUS.SUCCESS)
    const leaf2 = jest.fn().mockReturnValue(STATUS.SUCCESS)
    const leaf3 = jest.fn().mockReturnValue(STATUS.FAILURE)

    const expected = STATUS.FAILURE
    const result = parallelNode(() => [leaf1, leaf2, leaf3], 3)()

    expect(result).toEqual(expected)
  })
})
