import "App.css";
import React from 'react';
import ThemeProvider from "providers/ThemeProvider";
import Text from "components/atoms/grouping/Text/Text";
import Button from "components/atoms/forms/Button/Button";
import Header from "components/organisms/Header/Header";
import AppBackground from "components/atoms/embeding/AppBackground/AppBackground";
import MountainIcon from "components/atoms/embeding/MountainIcon/MountainIcon";

// @NOTE - [TODO | Val'] : debug <Header /> for toggle theme

function App() {

  return (
    <ThemeProvider>
      <div className="App">
        {/* <Header/>
        <Text size="xlarge" color="primary">RAITŌ ライト</Text>
        <Button format="link">button</Button> */}
        <AppBackground /> 
      </div>
    </ThemeProvider>
  );
}

export default App;
