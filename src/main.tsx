import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import { Provider } from 'react-redux';
import App from './App.tsx'
import ErrorBoundary from './components/ErrorBoundary.tsx'
import { store } from './store.ts';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary>
      <Provider store={store}>
        <App />
      </Provider>
    </ErrorBoundary>
  </StrictMode>,
)
