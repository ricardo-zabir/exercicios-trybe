import './App.css';
import Header from './header';
import Content from './content';
import Footer from './footer';


const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const arrayOfTasks = ['React', 'Redux', 'Metodologias', 'Soft Skills'];

function App() {
  return (
    <main>
      <Header />
      <ol>Lista de tarefas
        { arrayOfTasks.map((task) => Task(task)) }
      </ol>
      <section className='cards-container'>
        <Content />
      </section>
      <Footer />
    </main>
  );
}

export default App;
