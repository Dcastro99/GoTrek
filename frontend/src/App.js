import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ReactLoading from 'react-loading';
import { withAuth0 } from '@auth0/auth0-react';
import Welcome from '../../frontend/src/components/Welcome/index';
import axios from 'axios';
import ExplorePage from './pages/ExplorePage.js';
import AboutUsPage from './pages/AboutUsPage.js';
import ProfilePage from './pages/ProfilePage.js';
import TrailDetailPage from './pages/TrailDetailPage.js';
import HomePage from './pages/HomePage';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allNFT: null,
      walletItem: null,
    };
  }

  componentDidMount() {
    this.handleGetTrails();
  }
  handleGetTrails = async () => {
    const config = {
      baseURL: `${process.env.REACT_APP_HEROKU_URL}`,
      method: 'get',
    };
    const res = await axios(config);
    this.setState({ allTrails: res.data });
  };

  render() {
    const { isLoading } = this.props.auth0;

    if (isLoading) {
      return (
        <div id="lodingDiv">
          <ReactLoading
            id="loading"
            type={'spokes'}
            color={'blue'}
            height={667}
            width={375}
          />
        </div>
      );
    }


    return (
      <Router>
        <Routes>
          {!this.props.auth0.isAuthenticated ? (
            <Route exact path='/' element={<Welcome auth0={this.props.auth0} />} />
          ) : (
            <>
              <Route
                path="/"
                element={
                  <HomePage />
                }
              />
              {/* <Route exact path='/signup' element={< SignUpPage />} /> */}
              {/* <Route exact path='/login' element={< LoginPage />} /> */}
              <Route exact path='/explore' element={< ExplorePage />} />
              <Route exact path='/profile' element={< ProfilePage />} />
              <Route exact path='/trail' element={< TrailDetailPage />} />
            </>
          )}
          <Route exact path='/about' element={< AboutUsPage />} />
        </Routes>
      </Router>
    );
  }
}

export default withAuth0(App);
