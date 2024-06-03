import React, { useState } from 'react';
import './DragAndDropBox.css';

const DragAndDropBox = () => {
  const [dragOver, setDragOver] = useState(false);
  const [droppedItems, setDroppedItems] = useState([]);
  const [originalPositions, setOriginalPositions] = useState({});

  const handleDragStart = (e, item) => {
    e.dataTransfer.setData('text/plain', item);
    setOriginalPositions((prevPositions) => ({
      ...prevPositions,
      [item]: { left: e.target.style.left, top: e.target.style.top }
    }));
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragOver(true);
  };

  const handleDragLeave = () => {
    setDragOver(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const item = e.dataTransfer.getData('text/plain');
    setDroppedItems((prevItems) => [...prevItems, item]);
    setDragOver(false);
  };

  return (
    <div className="drag-and-drop-container">
      <div className="draggable-elements">
        {['Item 1', 'Item 2', 'Item 3'].map((item) => (
          <div
            key={item}
            className="draggable"
            draggable
            onDragStart={(e) => handleDragStart(e, item)}
          >
            {item}
          </div>
        ))}
      </div>
      <div
        className={`drop-container ${dragOver ? 'drag-over' : ''}`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        {droppedItems.map((item, index) => (
          <div key={index} className="dropped-item" style={originalPositions[item]}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DragAndDropBox;
