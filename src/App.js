import { Route,Switch} from "react-router-dom";
import MainNavigation from "./Components/layout/MainNavigation";
import AllMeetupsPage from "./Pages/AllMeetups";
import FavoritesPage from "./Pages/Favorites";
import NewMeetupPage from "./Pages/NewMeetup";
import Layout from './Components/layout/Layout';


function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact={true}>
        <AllMeetupsPage />
      </Route>
      <Route path='/new-meetup'>
        <NewMeetupPage />
      </Route>
      <Route path='/favorites'>
        <FavoritesPage />
      </Route>
     </Switch>
  </Layout>
  );
}

export default App;
