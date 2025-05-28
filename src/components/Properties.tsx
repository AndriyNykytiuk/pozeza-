import React from 'react';
import '../css/properties.css';
import { IoIosArrowDown, IoIosArrowBack } from "react-icons/io";

function Properties({ propertyList, selectedCategoryId, setSelectedCategoryId }) {
  const toggleArrowProperties = (id: number) => {
    setSelectedCategoryId(prevState => prevState === id ? null : id);
  };

  return (
    <div className='property-list'>
      {propertyList.map((property) => (
        <div key={property.id}>
          <div className='property-item' onClick={() => toggleArrowProperties(property.id)}>
            {property.category} {selectedCategoryId === property.id ? <IoIosArrowBack className='arrow-back' /> : <IoIosArrowDown className='arrow-down' />}
          </div>
          {selectedCategoryId === property.id && (
            <div className='inspections-list'>
              {property.inspections.map((inspection) => (
                <div className='inspection-item' key={inspection.id}>
                  {inspection.name}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Properties;
