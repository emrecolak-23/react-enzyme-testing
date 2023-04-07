import {
  CHANGE_SEARCHFIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED,
} from './constants';

import * as reducers from './reducers';

describe('searchRobots', () => {
  const initialStateSearch = {
    searchField: '',
  };

  it('should return the initial state', () => {
    expect(reducers.searchRobots(undefined, {})).toEqual({ searchField: '' });
  });

  it('should handle CHANGE_SEARCHFIELD', () => {
    expect(
      reducers.searchRobots(initialStateSearch, {
        type: CHANGE_SEARCHFIELD,
        payload: 'abs',
      })
    ).toEqual({
      searchField: 'abs',
    });
  });
});

describe('requestRobots', () => {
  const initialStateRobots = {
    robots: [],
    isPending: false,
  };

  it('should return the initial state', () => {
    expect(reducers.requestRobots(undefined, {})).toEqual(initialStateRobots);
  });

  it('should handle REQUEST_ROBOTS_PENDING action', () => {
    expect(
      reducers.requestRobots(initialStateRobots, {
        type: REQUEST_ROBOTS_PENDING,
      })
    ).toEqual({
      robots: [],
      isPending: true,
    });
  });

  it('should handle REQUEST_ROBOTS_SUCCESS action', () => {
    expect(
      reducers.requestRobots(initialStateRobots, {
        type: REQUEST_ROBOTS_SUCCESS,
        payload: [{ id: 1, name: 'Emre', email: 'colakkemre@gmail.com' }],
      })
    ).toEqual({
      robots: [{ id: 1, name: 'Emre', email: 'colakkemre@gmail.com' }],
      isPending: false,
    });
  });

  it('should handle REQUEST_ROBOTS_SUCCESS action', () => {
    expect(
      reducers.requestRobots(initialStateRobots, {
        type: REQUEST_ROBOTS_FAILED,
        payload: 'Invalid data',
      })
    ).toEqual({
      robots: [],
      isPending: false,
      error: 'Invalid data',
    });
  });
});
