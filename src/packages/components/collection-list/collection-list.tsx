import React from 'react';

interface Collection {
  id: string;
  name: string;
  isSelected: boolean;
}

interface CollectionListProps {
  collections: Collection[];
  onSelectionChange: (id: string) => void;
}

export const CollectionList: React.FC<CollectionListProps> = ({ collections, onSelectionChange }) => {
  return (
    <div>
      {collections.map((collection) => (
        <div
          key={collection.id}
          style={{
            display: 'flex',
            alignItems: 'center',
            padding: '10px',
            borderRadius: '5px',
            backgroundColor: collection.isSelected ? '#f0f8ff' : 'transparent',
            transition: 'background-color 0.3s ease',
            cursor: 'pointer',
          }}
          onClick={() => onSelectionChange(collection.id)}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = collection.isSelected ? '#f0f8ff' : '#e0e0e0')}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = collection.isSelected ? '#f0f8ff' : 'transparent')}
        >
          <input
            type="checkbox"
            checked={collection.isSelected}
            onChange={(e) => {
                e.stopPropagation(); // Prevent the parent div's onClick from firing
                onSelectionChange(collection.id);
              }}
            style={{ marginRight: '10px',
                width: '18px',
                height: '18px',
                borderRadius: '50%', // Makes the checkbox rounded
                appearance: 'none', // Removes default styling
                border: '2px solid #ccc',
                backgroundColor: collection.isSelected ? '#4caf50' : 'white', // Green for selected
                cursor: 'pointer',
                display: 'inline-block' }}
          />
          <span>{collection.name}</span>
        </div>
      ))}
    </div>
  );
};