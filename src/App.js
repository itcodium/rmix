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
import { theme } from './App.style';
import './services/firebase'
import ProductsListContainer from './views/products/ListContainer'
import ProductsDetailContainer from './views/products/DetailContainer'
import CartList from './views/products/CartList'
// import { setUp } from './services/setUpStore'
// setUp(); 
function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Container disableGutters={true} maxWidth="lg">
          <NavBar></NavBar>
          <Container disableGutters={true} fixed sx={{ mt: 4, mb: 4, pl: { xs:1}, mr: {xs:1 } }}>
            <Routes>
            <Route path="" element={<ProductsListContainer greeting={"Hello!"}></ProductsListContainer>}></Route>
            <Route path="/:id" element={<ProductsListContainer greeting={"Hello!"}></ProductsListContainer>}></Route>
            <Route path="/productDetail/:id" element={<ProductsDetailContainer></ProductsDetailContainer>}></Route>
            <Route path="/cart" element={<CartList></CartList>}></Route>
            </Routes>
          </Container>
        </Container>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
 