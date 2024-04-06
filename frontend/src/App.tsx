
import LoginForm from './components/LoginForm/LoginForm';
import React from 'react';

function App() {
  const example = (user: string) =>{}
  return (
    <div className="App">
      <h1>Hey!</h1>
      <LoginForm onSubmit={example} />
    </div>
  );
}

export default App;
