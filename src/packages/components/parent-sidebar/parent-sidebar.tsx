import React, { useState } from 'react';
import { CollectionList } from '../collection-list/collection-list';

interface Collection {
  id: string;
  name: string;
  isSelected: boolean; // Add this property to the type definition
}

export const ParentSidebar: React.FC = () => {
  const [collections, setCollections] = useState<Collection[]>([
    { id: '1s', name: 'Bangles', isSelected: false },
    { id: '2s', name: 'Choker', isSelected: false },
    { id: '3s', name: 'Chandraharam', isSelected: false },
    { id: '4s', name: 'Black beads', isSelected: false },
    { id: '5s', name: 'Bracelet', isSelected: false },
  ]);

  const handleSelectionChange = (id: string) => {
    setCollections((prevCollections) =>
      prevCollections.map((collection) =>
        collection.id === id ? { ...collection, isSelected: !collection.isSelected } : collection
      )
    );
  };

  return (
    <div style={{ width: '250px', padding: '10px', border: '1px solid #ccc' }}>
      <h4>Dietary Needs</h4>
      <CollectionList collections={collections} onSelectionChange={handleSelectionChange} />
    </div>
  );
};