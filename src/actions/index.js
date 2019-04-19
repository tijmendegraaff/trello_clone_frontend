import axios from 'axios';
import authHeader from '../helpers/auth-header';
import { FETCH_USER, FETCH_BOARDS } from './types';

export const fetchUser = () => async (dispatch) => {
  const res = await axios.get('http://localhost:3000/users/me', {
    headers: authHeader(),
  });
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchBoards = () => async (dispatch) => {
  const res = await axios.get('http://localhost:3000/boards', {
    headers: authHeader(),
  });
  dispatch({ type: FETCH_BOARDS, payload: res.data });
};
