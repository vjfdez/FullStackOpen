import Content from './Content';
import Header from './Header';
import Total from './Total';

const App = (props) => {
  const {counter} = props
  return (
    <div>{counter}</div>
  )
}

export default App