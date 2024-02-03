import './App.css';
import AllRoutes from './AllRoutes';
import {ToastContainerError,ToastContainerSuccess} from "./ReactToast.js"

function App() {
  return (
    <div className="App">
      <AllRoutes />
      {ToastContainerError}
      {ToastContainerSuccess}
    </div>
  );
}

export default App
