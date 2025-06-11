
import '../css/documentPole.css';
import DateSelector from './DateSelector';
interface DocumentDeteils{
  id: number;
  name: string;
}
interface Property {
  id: number;
  category: string;
  documents: DocumentDeteils[];
 
}
interface DocumentPoleProps{
  propertyList: Property[];
  selectedCategoryId: number | null;
}

function DocumentPole({ propertyList, selectedCategoryId }: DocumentPoleProps) {
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
      <DateSelector />
    </div>
    
  );
}

export default DocumentPole;
