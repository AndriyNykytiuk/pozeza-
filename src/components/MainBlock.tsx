import React from 'react';
import '../css/mainBlock.css';
import DocumentPole from './DocumentPole';

function MainBlock({ propertyList, selectedCategoryId }) {
  return (
    <div className='main-block'>
      <DocumentPole
        propertyList={propertyList}
        selectedCategoryId={selectedCategoryId}
      />
    </div>
  );
}

export default MainBlock;
