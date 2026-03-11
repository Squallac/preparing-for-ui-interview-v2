import css from './portfolio-visualizer.module.css'
import cx from '@course/cx'
import styles from '@course/styles'
import { useMemo, useState, type ChangeEvent } from 'react'

export type TPortfolioNode = {
  id: string
  name: string
  value: number
  children?: TPortfolioNode[]
}

type TPortfolioVisualizerProps = {
  data: TPortfolioNode
}

type TPortfolioStateNode = Omit<TPortfolioNode, 'children'> & {
  parentID: string | null
  children?: TPortfolioStateNode[]
}

/**
 * Expected data:
 * {
 *   id: 'root', name: 'Portfolio', value: 1000,
 *   children: [
 *     { id: 'stocks', name: 'Stocks', value: 600, children: [
 *       { id: 'aapl', name: 'AAPL', value: 300 },
 *       { id: 'goog', name: 'GOOG', value: 300 },
 *     ]},
 *     { id: 'bonds', name: 'Bonds', value: 400 },
 *   ]
 * }
 */

export function PortfolioVisualizer({ data }: TPortfolioVisualizerProps) {
  // Step 1: prepare(data, parentID) — recursive function that flattens tree into Map<id, TPortfolioStateNode>
  //   - Each node gets parentID reference, children mapped recursively
  //   - Returns [rootNode, store Map] — memoize with useMemo
  // Step 2: State — useState<Map> initialized from prepare result
  // Step 3: onNodeUpdate — onChange handler on container (event delegation on inputs):
  //   - Read data-node-id from input, get new value
  //   - Validation: if node has children, reject if newValue < sum of children values
  //   - Update node value in store
  //   - Bubble up: walk parentID chain, recalculate each parent as sum of its children
  // Step 4: PortfolioNode component — renders <details open> with:
  //   - <summary> with name, <input type=number data-node-id>, <output> showing percentage
  //   - Recursively render children
  // Step 5: Render — container div with onChange={onNodeUpdate}, render root PortfolioNode
  return <div>TODO: Implement</div>
}
