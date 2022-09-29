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
import Weather from './components/Weather/src/Weather';
import './assets/styles/App.css';
import Trails from '../../frontend/src/components/TrailCard'

import Chat from '../src/components/Socket-io/index'
import './assets/styles/App.css'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allTrails: [],
    };
  }

  componentDidMount() {
    this.handleGetAllTrails();
  }
  handleGetAllTrails = async () => {
    const config = {
      baseURL: `${process.env.REACT_APP_HEROKU_URL}`,
      method: 'get',
    };
    const res = await axios(config);
    // console.log('res', res.data);
    this.setState({ allTrails: res.data });
    // console.log('res>>>>>>>>', res.data)
  };

  render() {
    const { isLoading } = this.props.auth0;

    if (isLoading) {
      return (
        <div id="lodingDiv">
          <ReactLoading
            id="loading"
            type={'spokes'}
            color={'green'}
            height={667}
            width={100}
          />
        </div>
      );
    }

    // handleGetAllTrails={this.handleGetAllTrails} 
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
                  <HomePage allTrails={this.state.allTrails} auth0={this.props.auth0} />
                }
              />
              <Route path="Trails" element={<Trails />} />
              <Route exact path='/weather' element={< Weather />} />
              <Route exact path='/explore' element={< ExplorePage auth0={this.props.auth0} />} />
              <Route exact path='/explore/trail/:id' element={< TrailDetailPage auth0={this.props.auth0} />} />
              <Route exact path='/profile' element={< ProfilePage auth0={this.props.auth0} />} />
              {/* <Route exact path='/trail' element={< TrailDetailPage auth0={this.props.auth0} />} /> */}
              <Route exact path='/trail' element={< TrailDetailPage auth0={this.props.auth0} />}/>
              <Route exact path='/trail/:id' element={< TrailDetailPage auth0={this.props.auth0} />} />
              <Route exact path='/chat' element={< Chat auth0={this.props.auth0} />} />
            </>
          )}
          <Route exact path='/about' element={< AboutUsPage auth0={this.props.auth0} />} />
        </Routes>
      </Router>
    );
  }
}

export default withAuth0(App);
