
import { Route, Routes } from 'react-router-dom';
import LoginForm from './components/LoginForm/LoginForm';
import PageForgotPlatform from './components/ForgotPassword/PageForgotPassword';
import PageSingUp from './components/SingUp/PageSingUp';
import PageSingUpCreate from './components/SingUp/PageSingUpCreate';
import React from 'react';

function App() {
  const example = (user: string) => { }
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LoginForm onSubmit={example} />} />
        <Route path='/PageForgotPassword' element={ <PageForgotPlatform />}/>
        <Route path='/PageSingUp' element={<PageSingUp />}/>
        <Route path='/PageSingUpCreate' element={<PageSingUpCreate />} />
      </Routes>
    </div>
  );
}

export default App;
