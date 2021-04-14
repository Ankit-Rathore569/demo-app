import { Fragment } from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import PropsComp from './PropsComp';

function App() {
  return (
    <Fragment>
      <Header />
      <h2>Hello World APP.JS</h2>
      <hr />
      <PropsComp name="Ankit Rathore" empid="101" domain="Frontend Developer" />
      <Footer />
    </Fragment>
  );
}

export default App;
