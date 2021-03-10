import "./App.css";
import getPlantData from "./services/getPlantData";
import convertFilesToBase64 from "./services/convertFilesToBase64";

function App() {
  const handleFileUpload = async (event) => {
    const base64Files = await convertFilesToBase64(event.target.files);
    const plantData = await getPlantData(base64Files);
  };
  return (
    <div className="App">
      File to identify
      <input type="file" onChange={handleFileUpload} />
    </div>
  );
}

export default App;
