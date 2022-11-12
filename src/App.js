
import './App.css';
import Props from './components/props'
import Rasm from './logo.svg'
function App() {
  return (
    <>
      <Props name='Anvar' age="24" adres={Rasm} bname="Tugma"/>
      <Props name="Ali" age="30"/>
      <Props name="Vali" age="40"/>
      <Props name="Sobir" age="60"/>
    </>
  );
}


export default App;

