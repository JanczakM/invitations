import React from 'react';
import './app.scss';
import Template from './components/template/Template.js';
import { BrowserRouter, Route} from "react-router-dom";
import { AnimatedSwitch } from 'react-router-transition';
import Home from './components/home/Home.js';
import Names from './components/names/NamesContainer.js';
import WeddingDate from './components/weddingdate/WeddingDateContainer.js';
import WeddingPlace from './components/weddingplace/WeddingPlaceContainer.js';
import Background from './components/background/BackgroundContainer.js';
import Font from './components/font/FontContainer.js';
import IsWedding from './components/iswedding/IsWeddingContainer.js';
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
            <Route exact path='/tlo' component={Background} />
            <Route exact path='/czcionka' component={Font} />
            <Route exact path='/imiona' component={Names} />
            <Route exact path='/termin-slubu' component={WeddingDate} />
            <Route exact path='/miejsce-slubu' component={WeddingPlace} />
            <Route exact path='/czy-wesele' component={IsWedding} />
          </AnimatedSwitch>
        </Template>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
