import './index.css'
import * as React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';
import NavBar from './components/NavBar/NavBar'
import { theme } from './App.style'
import ProductsListContainer from './views/products/ListContainer'
import ProductsDetailContainer from './views/products/DetailContainer'

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Container disableGutters={true} maxWidth="lg">
          <NavBar></NavBar>
          <Container disableGutters={true} fixed sx={{ mt: 4, mb: 4 }}>
            <Routes>
            <Route path="" element={<ProductsListContainer greeting={"Hello!"}></ProductsListContainer>}></Route>
            <Route path="/:id" element={<ProductsListContainer greeting={"Hello!"}></ProductsListContainer>}></Route>
            <Route path="/productDetail/:id" element={<ProductsDetailContainer></ProductsDetailContainer>}></Route>
            </Routes>
          </Container>
        </Container>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
/*
<Router>
            <Routes>
              <Route key="10" path="/" >
                <ProductsListContainer greeting={"Hello!"}></ProductsListContainer>
              </Route>
              <Route key="20" path="" >
                <ProductsListContainer greeting={"Hello!"}></ProductsListContainer>
              </Route>
              <Route key="30" path="/test" >
              </Route>
            </Routes>
          </Router>
*/
