import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { EditNotePage } from './edit/EditNotePage';
import { HomePage } from './home/HomePage';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/edit/:id" element={<EditNotePage />} />
        <Route path="*" element={<p>Not Found</p>} />
      </Routes>
    </HashRouter>
  );
}

export { App };
