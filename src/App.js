import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout'
import TopPage from './pages/TopPage'
import MyPage from './pages/MyPage'
import SubmitPage from './pages/SubmitPage'
import ContentsPage from './pages/ContentsPage'
import { connect } from 'react-redux';

function App(props) {
  function selectPage(){
    switch(props.page){
      case 'TopPage':
        return <TopPage/>
      case 'MyPage':
        return <MyPage/>
      case 'SubmitPage':
        return <SubmitPage/>
      case 'ContentsPage':
        return <ContentsPage/>
      default:
        return <TopPage/>
    }
  }

  return (
    <Layout title='otegaru journey'>
      {selectPage()}
    </Layout>
  );
}

App = connect ((state) => state)(App)
export default App;
