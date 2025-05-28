import React from 'react';
import '../css/documentPole.css';

function DocumentPole({ propertyList, selectedCategoryId }) {
  const selectedCategory = propertyList.find(category => category.id === selectedCategoryId);

  return (
    <div className='document-pole'>
 
      {selectedCategory ? (
        selectedCategory.documents.map((doc) => (
          <div className='document-items'key={doc.id}>{doc.name}</div>
        ))
      ) : (
        <div>Оберіть категорію для перегляду документів</div>
      )}
    </div>
  );
}

export default DocumentPole;
