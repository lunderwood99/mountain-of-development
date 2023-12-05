import './res/scss/styles.scss';
import { SideNav } from './components/SideNav/SideNav';
import { Title } from './components/Title/Title'

function App() {
  return (
    <div className="app-container">
      <div className="app-container__content">
        <Title />
        <SideNav />
      </div>
    </div>
  );
}

export default App;
