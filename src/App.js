import React, { useState } from 'react';
import SettingContainer from './containers/SettingContainer';

function App() {
  const [hide,setHide] = useState(false)
  const change=(e)=>{
    setHide(true);
  }
  return (
    <div className="App">
      <button onClick={change}>설정</button>
      {hide?
      <SettingContainer></SettingContainer>
      :null
}
    </div>
  );
}

export default App;
