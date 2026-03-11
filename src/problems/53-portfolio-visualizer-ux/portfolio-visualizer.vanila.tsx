import { AbstractComponent, type TComponentConfig } from '@course/utils'
import css from './portfolio-visualizer.module.css'
import cx from '@course/cx'
import styles from '@course/styles'

export type TPortfolioNode = {
  id: string
  name: string
  value: number
  children?: TPortfolioNode[]
}

type TPortfolioStateNode = Omit<TPortfolioNode, 'children'> & {
  parentID: string | null
  children?: TPortfolioStateNode[]
}

export type TPortfolioVisualizerProps = {
  data: TPortfolioNode
}

/**
 * Expected data: same tree structure as React version (see portfolio-visualizer.react.tsx)
 */

export class PortfolioVisualizer extends AbstractComponent<TPortfolioVisualizerProps> {
  private store: Map<string, TPortfolioStateNode> = new Map()
  private root: TPortfolioStateNode | null = null

  // Step 1: Constructor — super with listeners: ['input'], call prepareData()
  // Step 2: prepareData + prepare(data, parentID) — recursive, builds store Map + root node
  // Step 3: renderNode(node, total) — returns HTML string:
  //   - <details open> with <summary> containing name, <input type=number data-node-id>, <output> percentage
  //   - Recursively render children
  // Step 4: toHTML — render container with renderNode(root, root.value)
  // Step 5: onInput(event) — event delegation on input changes:
  //   - Read data-node-id, validate (reject if newValue < sum of children)
  //   - Update node value, bubble up parent chain recalculating sums
  //   - Call updateDisplayedValues()
  // Step 6: updateDisplayedValues — iterate store, update each input value and output percentage in DOM

  constructor(config: TComponentConfig<TPortfolioVisualizerProps>) {
    super(config)
  }
  toHTML() {
    return '<div>TODO: Implement PortfolioVisualizer</div>'
  }
}
