import './index.css'
import * as React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';
import NavBar from './components/NavBar/NavBar'
import ListContainer from './components/ListContainer/ListContainer'
import { theme } from './App.style'


function App() {

  return (
    <ThemeProvider theme={theme}>
      <Container disableGutters={true} maxWidth="lg">
        <NavBar></NavBar>
        <Container disableGutters={true} fixed sx={{ mt: 4, mb: 4 }}>
          <ListContainer greeting={"Hello!"}></ListContainer>
        </Container>
      </Container>
    </ThemeProvider>
  );
}

export default App;

