import { sequenceNode } from './sequence'
import { STATUS } from '../tree'

describe('SequenceNode', () => {
  test('Runs leaf node', () => {
    const leaf = jest.fn()

    sequenceNode(() => [leaf])()

    expect(leaf).toHaveBeenCalled()
  })

  test('Runs leaf nodes until failure', () => {
    const leaf1 = jest.fn().mockReturnValue(STATUS.SUCCESS)
    const leaf2 = jest.fn().mockReturnValue(STATUS.FAILURE)
    const leaf3 = jest.fn()

    sequenceNode(() => [leaf1, leaf2, leaf3])()

    expect(leaf1).toHaveBeenCalled()
    expect(leaf2).toHaveBeenCalled()
    expect(leaf3).not.toHaveBeenCalled()
  })

  test('Returns success if all success', () => {
    const leaf1 = jest.fn().mockReturnValue(STATUS.SUCCESS)
    const leaf2 = jest.fn().mockReturnValue(STATUS.SUCCESS)
    const leaf3 = jest.fn().mockReturnValue(STATUS.SUCCESS)

    const expected = STATUS.SUCCESS
    const result = sequenceNode(() => [leaf1, leaf2, leaf3])()

    expect(result).toEqual(expected)
  })
})
