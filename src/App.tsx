import Modal from 'react-modal';
import { useState } from 'react';
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global"
import { NewTaskModal } from './components/NewTaskModal';

Modal.setAppElement('#root');

function App() {


  const [isNewTaskModalOpen, setIsNewTaskModalOpen] = useState(false);

  function handleOpenNewTaskModal() {
    setIsNewTaskModalOpen(true)
  }

  function handleCloseNewTaskModal() {
    setIsNewTaskModalOpen(false)
  }
  return (
    <>
      <Header onOpenNewTaskModal={handleOpenNewTaskModal} />

      <Dashboard />

      <NewTaskModal
        isOpen={isNewTaskModalOpen}
        onRequestClose={handleCloseNewTaskModal}
      />

      <GlobalStyle />
    </>
  );
}

export default App;
