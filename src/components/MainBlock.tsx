
import '../css/mainBlock.css';
import DocumentPole from './DocumentPole';


interface Property {
  id: number;
  category: string;
  documents: { id: number; name: string }[];
}

interface MainBlockProps {
  propertyList: Property[];
  selectedCategoryId: number | null;
    setSelectedCategoryId: React.Dispatch<React.SetStateAction<number | null>>;
}

function MainBlock({ propertyList, selectedCategoryId }: MainBlockProps) {
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
