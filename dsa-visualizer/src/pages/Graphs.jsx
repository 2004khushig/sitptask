import React, { useCallback, useState } from "react";
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  addEdge,
  useNodesState,
  useEdgesState,
} from "reactflow";
import "reactflow/dist/style.css";

const GraphVisualizer = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  const [nodeLabel, setNodeLabel] = useState("");
  const [sourceId, setSourceId] = useState("");
  const [targetId, setTargetId] = useState("");

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  const addNode = () => {
    if (!nodeLabel.trim()) return;
    const id = `${nodeLabel.trim()}-${Date.now()}`;
    const newNode = {
      id,
      data: { label: nodeLabel.trim() },
      position: { x: Math.random() * 500, y: Math.random() * 300 },
    };
    setNodes((nds) => [...nds, newNode]);
    setNodeLabel("");
  };

  const addEdgeManually = () => {
    if (!sourceId.trim() || !targetId.trim()) return;
    const newEdge = {
      id: `e${sourceId}-${targetId}`,
      source: sourceId,
      target: targetId,
    };
    setEdges((eds) => [...eds, newEdge]);
    setSourceId("");
    setTargetId("");
  };

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-3xl font-bold text-center text-emerald-700">🌐 Graph Visualizer</h2>

      <div className="grid sm:grid-cols-3 gap-4">
        <div className="space-y-2">
          <label className="block text-emerald-700 font-semibold">Add Node</label>
          <input
            className="border p-2 rounded w-full"
            placeholder="Node label"
            value={nodeLabel}
            onChange={(e) => setNodeLabel(e.target.value)}
          />
          <button
            className="bg-emerald-600 text-white py-2 px-4 w-full rounded hover:bg-emerald-700"
            onClick={addNode}
          >
            ➕ Add Node
          </button>
        </div>

        <div className="space-y-2 col-span-2">
          <label className="block text-emerald-700 font-semibold">Add Edge (source → target)</label>
          <div className="flex gap-2">
            <input
              className="border p-2 rounded w-full"
              placeholder="Source Node ID"
              value={sourceId}
              onChange={(e) => setSourceId(e.target.value)}
            />
            <input
              className="border p-2 rounded w-full"
              placeholder="Target Node ID"
              value={targetId}
              onChange={(e) => setTargetId(e.target.value)}
            />
          </div>
          <button
            className="bg-emerald-600 text-white py-2 px-4 w-full rounded hover:bg-emerald-700"
            onClick={addEdgeManually}
          >
            ➕ Add Edge
          </button>
        </div>
      </div>

      <div className="h-[500px] border rounded-xl shadow overflow-hidden">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          fitView
        >
          <MiniMap />
          <Controls />
          <Background />
        </ReactFlow>
      </div>
    </div>
  );
};

export default GraphVisualizer;
