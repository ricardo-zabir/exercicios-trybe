import './App.css';
import Image from './Image';
import Order from './Order';
import UserProfile from './UserProfile';
const users = [{
  id: 102,
  name: "João",
  email: "joao@gmail.com",
  avatar: "https:cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_640.png"
},

{
  id: 77,
  name: "Amélia",
  email: "amelia@gmail.com",
  avatar: "https:cdn.pixabay.com/photo/2017/01/31/13/05/cameo-2023867_640.png"
}];

const headphone = {
  id: 102,
  user: "cena@gmail.com",
  product: "Razer Headphone",
  price: {
    value: 99.99,
    currency: "dollars"
  }
};

const energyDrink = {
  id: 77,
  user: "cena@gmail.com",
  product: "Monster 500mL",
  price: {
    value: 9.99,
    currency: "dollars"
  }
};

function App() {
  return (
    <main>
      <h1>Exercício de fixação 11.2</h1>
      <Image source='https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg' alternativeText='Cute cat staring'/>
      <div className="App">
        {users.map((user, idx) => {
          return <UserProfile user= { user } key= { idx } />
        })}
      </div>
      <div className='Orders'>
        <Order order= { energyDrink } />
        <Order order= { headphone } />
      </div>
    </main>
    );
}

export default App;
