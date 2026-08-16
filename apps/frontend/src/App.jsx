import {
  ReactFlow,
  Background,
  Controls,
  MiniMap,
} from '@xyflow/react'

import '@xyflow/react/dist/style.css'

const nodes = [
  {
    id: '1',
    position: { x: 100, y: 100 },
    data: { label: 'OpenAPI Specification' },
  },
  {
    id: '2',
    position: { x: 400, y: 100 },
    data: { label: 'API Parser' },
  },
  {
    id: '3',
    position: { x: 700, y: 100 },
    data: { label: 'AST' },
  },
]

const edges = [
  {
    id: 'e1-2',
    source: '1',
    target: '2',
  },
  {
    id: 'e2-3',
    source: '2',
    target: '3',
  },
]

function App() {
  return (
    <div className="h-screen">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        fitView
      >
        <Background />
        <Controls />
        <MiniMap />
      </ReactFlow>
    </div>
  )
}

export default App