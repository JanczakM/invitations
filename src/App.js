import React from 'react';
import './app.scss';
import Template from './components/template/Template.js';
import { BrowserRouter, Route} from "react-router-dom";
import { AnimatedSwitch } from 'react-router-transition';
import Home from './components/home/Home.js';
import Names from './components/names/NamesContainer.js';
import {ThemeProvider, createMuiTheme} from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#c71585'
    }
  },
});

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Template>
          <AnimatedSwitch
             atEnter={{ opacity: 0 }}
             atLeave={{ opacity: 0 }}
             atActive={{ opacity: 1 }}
             className='switch-wrapper'
           >
            <Route exact path='/' component={Home} />
            <Route exact path='/imiona' component={Names} />
          </AnimatedSwitch>
        </Template>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
