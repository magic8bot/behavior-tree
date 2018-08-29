import { Tree, sequenceNode, STATUS, leafNode, selectorNode } from './src'

const exploreArea = () => {
  return sequenceNode(() => [lookForItems(), takeItem()])
}

const lookForItems = () => {
  return leafNode(() => {
    console.log('Food?')
    return Math.random() >= 0.5 ? STATUS.SUCCESS : STATUS.FAILURE
  })
}

const takeItem = () => {
  return leafNode(() => {
    console.log('Mine')
    return STATUS.SUCCESS
  })
}

const shouldAttack = () => {
  return sequenceNode(() => [isNextToEnemy(), attack()])
}

const isNextToEnemy = () => {
  return leafNode(() => {
    console.log('Huh?')
    return Math.random() >= 0.5 ? STATUS.SUCCESS : STATUS.FAILURE
  })
}

const attack = () => {
  return leafNode(() => {
    console.log('⚔')
    return Math.random() >= 0.5 ? STATUS.SUCCESS : STATUS.FAILURE
  })
}

const walk = () => {
  return leafNode(() => {
    console.log('walk')
    return STATUS.SUCCESS
  })
}

// prettier-ignore
const tree = new Tree(() => sequenceNode(() => [
  selectorNode(() => [
    shouldAttack(),
    exploreArea(),
  ]),
  walk(),
]))

tree.tick()
