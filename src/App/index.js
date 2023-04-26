import React from 'react';
import { NotesProvider } from '../NotesContext';
import { AppUI } from './AppUI.js'

function App() {

  return (
    <NotesProvider>
      <AppUI />
    </NotesProvider>
  );
}

export default App;
