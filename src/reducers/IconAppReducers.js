import * as ActionTypes from '../actions';

import * as faSVG from '@fortawesome/free-solid-svg-icons';
const iconList = Object.keys(faSVG);
iconList.splice(0, 2);

const initialState = {
  iconList: iconList,
  searchKeyword: ''
};

const iconApp = (state = initialState, action) => {
  switch(action.type) {
    case ActionTypes.HANDLE_SEARCH_ICONS: {
      const { searchKeyword } = action;
      return {
        ...state,
        searchKeyword,
        iconList: getFilteredIcons(searchKeyword),
      }
    }

    default: {
      return state;
    }

  }
}

const getFilteredIcons = (searchKeyword) => {
  return iconList.filter(icon => {
    return icon.slice(2).toLowerCase().includes(searchKeyword.toLowerCase());
  })
}

export default iconApp;