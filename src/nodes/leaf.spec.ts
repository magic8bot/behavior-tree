import { leafNode } from './leaf'
import { STATUS } from '../tree'

describe('LeafNode', () => {
  test('Returns a status', () => {
    const expected = STATUS.SUCCESS
    const result = leafNode(() => STATUS.SUCCESS)()

    expect(result).toEqual(expected)
  })
})
