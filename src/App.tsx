import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AllRoutes } from './routes/routes';

function App() {
  const Router = createBrowserRouter(AllRoutes);

  return (
    <>
      <RouterProvider router={Router} />
    </>
  )
}

export default App
