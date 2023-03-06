import './App.css';
import {MathJaxContext} from 'better-react-mathjax';
import Question from './Question';

function App() {
    return (
      <MathJaxContext>    
          <Question />
      </MathJaxContext>
    );
}

export default App;