import React from 'react';
import '../css/aside.css';
import { IoIosArrowDown, IoIosArrowBack } from "react-icons/io";
import Properties from './Properties';

interface Property {
  id: number;
  category: string;
  inspections: { id: number; name: string }[];
}

interface AsideProps {
  propertyList: Property[];
  selectedCategoryId: number | null;
  setSelectedCategoryId: React.Dispatch<React.SetStateAction<number | null>>;
}

function Aside({
  propertyList,
  selectedCategoryId,
  setSelectedCategoryId,
}: AsideProps) {
  const departmentsList = [
    { id: 1, name: "22 ДПРЧ" },
    { id: 2, name: "12 ДПРЧ" },
    { id: 3, name: "10 ДПРЧ" },
    { id: 4, name: "8 ДПРЧ" },
    { id: 5, name: "АРЧ АРЗ СП" },
    { id: 6, name: "1 ДПРЧ" },
  ];

  const [listDepartments, setListDepartments] = React.useState('Оберіть підрозділ');
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleArrow = () => {
    setIsOpen(prev => !prev);
  };

  const handleDeptClick = (deptName: string) => {
    setListDepartments(deptName);
    setIsOpen(false);
  };

  return (
    <div className='aside-wrapper'>
      <div className='aside-choose-department'>
        <div className='departments-title' onClick={toggleArrow}>
          <h3>{listDepartments}</h3>
          {isOpen ? <IoIosArrowBack className='arrow-back' /> : <IoIosArrowDown className='arrow-down' />}
        </div>
        <div className={`departments-list ${isOpen ? "show" : "unvisible"}`}>
          {departmentsList.map((dept) =>
            <div className='dept-list' key={dept.id}>
              <div className='list-item' onClick={() => handleDeptClick(dept.name)}>{dept.name}</div>
            </div>
          )}
        </div>
      </div>
      <Properties
        propertyList={propertyList}
        selectedCategoryId={selectedCategoryId}
        setSelectedCategoryId={setSelectedCategoryId}
      />
    </div>
  );
}

export default Aside;
