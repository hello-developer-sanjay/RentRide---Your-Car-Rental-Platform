
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import rootReducer from './redux/reducers';
import App from './App';
import { createRoot } from 'react-dom/client';
import './index.css';

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk]
});

const root = createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <Router>
      <Routes>
      <Route path="/" element={<App />} />
        <Route path="/page/:page?" element={<App />} />
      </Routes>
    </Router>
  </Provider>,
);
