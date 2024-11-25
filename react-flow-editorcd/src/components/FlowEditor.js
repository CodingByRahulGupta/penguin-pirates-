import React, { useState, useCallback } from 'react';
import Whiteboard from './Whiteboard';
import {
  ReactFlow,
  Controls,
  MiniMap,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';

// FlowEditor Component
const initialNodes = [
  { id: '1', position: { x: 0, y: 0 }, data: { label: 'Start' }, style: { width: 150, height: 60 } },
  { id: '2', position: { x: 200, y: 150 }, data: { label: 'Process' }, style: { width: 150, height: 60 } },
];
const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }];

export default function FlowEditor() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const [newNodeLabel, setNewNodeLabel] = useState('');
  const [newNodeSize, setNewNodeSize] = useState({ width: 150, height: 60 });
  const [newNodePosition, setNewNodePosition] = useState(null); // Position will be set on click
  const [isNodeCreationOpen, setIsNodeCreationOpen] = useState(false); // Popup state
  const [showWhiteboard, setShowWhiteboard] = useState(false); // Manage Whiteboard visibility

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );
  const toggleWhiteboard = () => {
    setShowWhiteboard((prev) => !prev);
  };

  // Handle creating a new node
  const handleAddNode = () => {
    if (newNodeLabel && newNodePosition) {
      const newNode = {
        id: `${nodes.length + 1}`, // Corrected string template
        position: newNodePosition,
        data: { label: newNodeLabel },
        style: { width: newNodeSize.width, height: newNodeSize.height },
      };
      setNodes((nds) => [...nds, newNode]);
      setIsNodeCreationOpen(false); // Close modal after creation
    } else {
      alert('Please provide a label and position for the node.');
    }
  };

  // Handle the click on canvas to get node position
  const handleCanvasClick = (event) => {
    const bounds = event.target.getBoundingClientRect();
    const position = {
      x: event.clientX - bounds.left,
      y: event.clientY - bounds.top,
    };
    setNewNodePosition(position);
    setIsNodeCreationOpen(true);
  };

  return (
    <div style={{ width: '100vw', height: '100vh', position: 'relative' }}>
      {/* Toggle Button */}
      <div style={{ position: 'absolute', top: 10, left: 10, zIndex: 10 }}>
        <button onClick={toggleWhiteboard}>
          {showWhiteboard ? 'Switch to Flow Editor' : 'Use Whiteboard'}
        </button>
      </div>

      {showWhiteboard ? (
        // Render Whiteboard if toggled
        <Whiteboard />
      ) : (
        // Render Flow Editor by default
        <div style={{ width: '100vw', height: '100vh', position: 'relative' }}>
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            fitView
            onClick={handleCanvasClick} // Capture canvas click
          >
            <Controls />
            <MiniMap />
            <Background variant="dots" gap={12} size={1} />

            {/* Notification popup */}
            {isNodeCreationOpen && newNodePosition && (
              <div
                style={{
                  position: 'absolute',
                  top: `${newNodePosition.y}px`, // Corrected string template
                  left: `${newNodePosition.x}px`, // Corrected string template
                  padding: '20px',
                  backgroundColor: '#f8f8f8',
                  borderRadius: '5px',
                  border: '1px solid #ccc',
                  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                  zIndex: 1000,
                  pointerEvents: 'auto', // Ensure the popup is clickable
                }}
              >
                <div>
                  <label>
                    Node Name:
                    <input
                      type="text"
                      value={newNodeLabel}
                      onChange={(e) => setNewNodeLabel(e.target.value)}
                      placeholder="Enter Node Name"
                    />
                  </label>
                </div>
                <div>
                  <label>
                    Width:
                    <input
                      type="number"
                      value={newNodeSize.width}
                      onChange={(e) =>
                        setNewNodeSize({ ...newNodeSize, width: parseInt(e.target.value) })
                      }
                    />
                  </label>
                </div>
                <div>
                  <label>
                    Height:
                    <input
                      type="number"
                      value={newNodeSize.height}
                      onChange={(e) =>
                        setNewNodeSize({ ...newNodeSize, height: parseInt(e.target.value) })
                      }
                    />
                  </label>
                </div>

                <button onClick={handleAddNode}>Create Node</button>
                <button onClick={() => setIsNodeCreationOpen(false)}>Cancel</button>
              </div>
            )}
          </ReactFlow>
        </div>
      )}
    </div>
  );
}
