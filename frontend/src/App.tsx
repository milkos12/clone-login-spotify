
import { Route, Routes } from 'react-router-dom';
import LoginForm from './components/LoginForm/LoginForm';
import PageForgotPlatform from './components/ForgotPassword/PageForgotPassword';
import React from 'react';

function App() {
  const example = (user: string) => { }
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LoginForm onSubmit={example} />} />
        <Route path='/PageForgotPassword' element={ <PageForgotPlatform />}/>
      </Routes>
    </div>
  );
}

export default App;
