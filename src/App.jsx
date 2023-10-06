import Cards from './components/Cards/Cards'
import './styles/App.scss';

const rates = [
  {
    rateName: 'Безлимитный 300',
    color: 'blue',
    price: 300,
    speed: 'до 10 Мбит/сек',
    comment: 'Объем включенного трафика не ограничен',
    selected: false
  },
  {
    rateName: 'Безлимитный 450',
    price: 450,
    speed: 'до 50 Мбит/сек',
    color: 'green',
    comment: 'Объем включенного трафика не ограничен',
    selected: false
  },
  {
    rateName: 'Безлимитный 550',
    price: 550,
    speed: 'до 100 Мбит/сек',
    color: 'red',
    comment: 'Объем включенного трафика не ограничен',
    selected: false
  },
  {
    rateName: 'Безлимитный 1000',
    price: 1000,
    speed: 'до 200 Мбит/сек',
    color: 'darkblue',
    comment: 'Объем включенного трафика не ограничен',
    selected: false
  }
]

function App() {
  return (
    <div className="container">
      <Cards arr = {rates}/>
    </div>
  );
}

export default App;
