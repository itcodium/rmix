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
          <Container sx={{ pl: { xs:1}, pr: { xs:1 } }}  disableGutters={true} fixed>
            <Routes>
            <Route path="" element={<ProductsListContainer></ProductsListContainer>}></Route>
            <Route path="/:id" element={<ProductsListContainer></ProductsListContainer>}></Route>
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
 // https://docs.google.com/document/d/1pj-gatjxqk7pv8uRv4gN3HBFVuQj3FhGQxwNy1gA2Uk/edit 
// sx={{ mt: 4, mb: 4, pl: { xs:1}, mr: {xs:1 } }}