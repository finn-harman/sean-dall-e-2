import { useEffect, useState } from 'react';
import './App.css';

const MAX_PHOTO_COUNT = 15;
const PHOTOS_PER_PROMPT = 12;

function App() {
  const commonPath = process.env.PUBLIC_URL + "/images";

  const [photoCount, setPhotoCount] = useState(0);
  const [path, setPath] = useState(commonPath + "/Muybridge_horse_gallop_animated_2.gif");
  
  const getRandomInt = (max: number) => {
    return Math.floor(Math.random() * (max)) + 1;
  }

  useEffect(() => {
      // setTimeout((
      let photoPath : string;
      if (photoCount === 0) {
        photoPath = "/Muybridge_horse_gallop_animated_2.gif";
      } else if (photoCount === MAX_PHOTO_COUNT + 1) {
        setPhotoCount(0);
        photoPath = "/Muybridge_horse_gallop_animated_2.gif"
      } else {
        photoPath = `/prompts/${photoCount}_${getRandomInt(PHOTOS_PER_PROMPT)}.png`;
      }
      if (photoCount === 1) {
        setPath("")
      };
      setTimeout(() => {
        setPath(commonPath + photoPath)
      }, photoCount === 1 ? 300 : 0)
  }, [photoCount]);

  console.log("path", path);
  return (
    <div className="App">
      <header className="App-header">
        <img src={path} onClick={() => setPhotoCount(photoCount + 1)} style={{cursor: "pointer", maxWidth: "85%"}} />
      </header>
    </div>
  );
}

export default App;
