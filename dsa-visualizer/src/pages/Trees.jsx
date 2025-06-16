import React, { useState, useEffect } from "react";

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.visible = false;
  }
}

const insertLevelOrderAnimated = async (arr, delay = 500) => {
  const nodes = arr.map((val) =>
    val === null ? null : new TreeNode(val)
  );

  for (let i = 0; i < nodes.length; i++) {
    if (nodes[i] !== null) {
      nodes[i].visible = true;
      await new Promise((res) => setTimeout(res, delay));
      const leftIndex = 2 * i + 1;
      const rightIndex = 2 * i + 2;
      if (leftIndex < nodes.length) nodes[i].left = nodes[leftIndex];
      if (rightIndex < nodes.length) nodes[i].right = nodes[rightIndex];
    }
  }

  return nodes[0];
};

const Line = ({ x1, y1, x2, y2 }) => (
  <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="gray" strokeWidth="2" />
);

const TreeNodeComponent = ({ node, x, y, level, positions }) => {
  if (!node || !node.visible) return null;

  const radius = 20;
  const nodeSpacing = 60;
  const verticalSpacing = 100;

  const leftX = x - nodeSpacing / (level + 1);
  const rightX = x + nodeSpacing / (level + 1);
  const nextY = y + verticalSpacing;

  return (
    <>
      {node.left && node.left.visible && (
        <Line x1={x} y1={y} x2={leftX} y2={nextY} />
      )}
      {node.right && node.right.visible && (
        <Line x1={x} y1={y} x2={rightX} y2={nextY} />
      )}
      <circle cx={x} cy={y} r={radius} fill="#10b981" />
      <text
        x={x}
        y={y + 5}
        textAnchor="middle"
        fill="white"
        fontSize="16"
        fontWeight="bold"
      >
        {node.value}
      </text>

      {node.left && (
        <TreeNodeComponent
          node={node.left}
          x={leftX}
          y={nextY}
          level={level + 1}
          positions={positions}
        />
      )}
      {node.right && (
        <TreeNodeComponent
          node={node.right}
          x={rightX}
          y={nextY}
          level={level + 1}
          positions={positions}
        />
      )}
    </>
  );
};

const TreeVisualizer = () => {
  const [input, setInput] = useState("1,2,3,4,null,null,5");
  const [root, setRoot] = useState(null);

  const buildTree = async () => {
    const values = input.split(",").map((val) =>
      val.trim() === "null" ? null : parseInt(val.trim())
    );
    const tree = await insertLevelOrderAnimated(values, 600);
    setRoot({ ...tree }); // trigger rerender
  };

  useEffect(() => {
    buildTree();
  }, [input]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-100 to-green-200 p-4">
      <h1 className="text-3xl font-bold text-center text-emerald-700 mb-4">
        🌳 Binary Tree Visualizer (with animation)
      </h1>

      <div className="flex justify-center mb-4 gap-4 flex-col items-center">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter values like 1,2,3,null,4"
          className="px-4 py-2 border rounded w-full max-w-xl text-center"
        />
        <button
          onClick={buildTree}
          className="px-6 py-2 bg-emerald-600 text-white rounded-xl shadow hover:bg-emerald-700 transition"
        >
          Build Tree
        </button>
      </div>

      <svg width="100%" height="600">
        {root && (
          <TreeNodeComponent
            node={root}
            x={window.innerWidth / 2}
            y={60}
            level={0}
            positions={{}}
          />
        )}
      </svg>
    </div>
  );
};

export default TreeVisualizer;
