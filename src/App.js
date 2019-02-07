import React, { Component } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as faSVG from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Container,
} from 'react-bootstrap';

import IconContainer from './IconContainer';
import { connect } from 'react-redux';
import {
  handleSearchIcons,
} from './actions';

const iconList = Object.keys(faSVG);
iconList.splice(0, 2);

class App extends Component {
  render() {
    const {searchKeyword} = this.props.iconApp;
    return (
      <div className="App">
        <Container>
        <div className="input-group mt-5 mb-4 pr-4">
          <div className="input-group-prepend">
          <span className="input-group-text" id="basic-addon1"><FontAwesomeIcon icon={faSVG['faSearch']} /></span>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="Search Icon"
            value={searchKeyword}
            onChange={(e) => {this.props.handleSearchIcons(e.target.value)}}
          />
        </div>
        {/* Show the search re-rendering performance diff without PureComponent */}
        <IconContainer/>

        </Container>
      </div>
    );
  }
}

const mapStateToProps = ({iconApp}) => ({iconApp});
export default connect(mapStateToProps,
  {
    handleSearchIcons,
  })(App);
