
import '@/assets/css/App.less'

import Routers from '@/routers'
import {
  BrowserRouter
} from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routers></Routers>
    </BrowserRouter>)
}

export default App
