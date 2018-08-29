import { inverterNode } from './inverter'
import { STATUS } from '../tree'

describe('InverterNode', () => {
  test('inverts from success', () => {
    const expected = STATUS.FAILURE
    const result = inverterNode(() => STATUS.SUCCESS)()

    expect(result).toEqual(expected)
  })

  test('inverts from failue', () => {
    const expected = STATUS.SUCCESS
    const result = inverterNode(() => STATUS.FAILURE)()

    expect(result).toEqual(expected)
  })
})
