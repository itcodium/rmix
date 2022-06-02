import './index.css'
import * as React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';
import NavBar from './components/NavBar/NavBar'
import { theme } from './App.style'
import ProductsListContainer from './views/products/ListContainer'
import ProductsDetailContainer from './views/products/DetailContainer'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container disableGutters={true} maxWidth="lg">
        <NavBar></NavBar>
        <Container disableGutters={true} fixed sx={{ mt: 4, mb: 4 }}>
        <ProductsDetailContainer></ProductsDetailContainer>
          <ProductsListContainer greeting={"Hello!"}></ProductsListContainer>
        </Container>
      </Container>
    </ThemeProvider>
  );
}

export default App;

