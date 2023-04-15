import './App.css';
import Logo from '../logo.svg';
import AuthContent from './AuthContent';
import Header from './Header';
import LoginForm from './LoginForm';

function App() {
  return (
    <div>
      <Header pageTitle="Auth" logoSrc={Logo} />
      <AuthContent />
    </div>
  )
}

export default App;