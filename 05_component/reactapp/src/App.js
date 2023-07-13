import DogCard from './DogCard';
import { Article, Cat,CatGang } from './ExportImport';
import { Image } from './ImageUsingProps';

function App() {
  return (
    <div>
      <DogCard/>
      <Cat/>
      <CatGang/>
      <Article/>
      <Image src="https://assets.gqindia.com/photos/62bbfc0be1545ee4f0cd6ca2/16:9/pass/Street%20food%20in%20Mumbai-Chaat.jpg" location="Kandiavli"/>
      <Image  location="Malad" src="https://www.thestatesman.com/wp-content/uploads/2020/03/vada-pav-12.jpg"/>

    </div>
  );
}

export default App;
