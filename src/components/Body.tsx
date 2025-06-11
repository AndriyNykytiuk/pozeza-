import React from 'react';
import '../css/body.css';
import Aside from './Aside';
import MainBlock from './MainBlock';
import propertyList from '../listProps.json';








const Body: React.FC = () => {
  const [selectedCategoryId, setSelectedCategoryId] = React.useState<number | null>(null);

  return (
    <div className="body-wrapper">
      <Aside
        propertyList={propertyList}
        selectedCategoryId={selectedCategoryId}
        setSelectedCategoryId={setSelectedCategoryId}
      />
      <MainBlock
        propertyList={propertyList}
        selectedCategoryId={selectedCategoryId}
         setSelectedCategoryId={setSelectedCategoryId}
      />
    </div>
  );
};

export default Body;
