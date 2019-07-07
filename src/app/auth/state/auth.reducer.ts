import { AuthenticatedUser } from '@app/_models';
import { AuthActions, AuthActionTypes } from './auth.actions';

export interface State {
  isAuthenticated: boolean;
  processing: boolean;
  createNewPassword: boolean;
  forgottenPassword: boolean;
  user: AuthenticatedUser;
  error: string;
}

const initialState: State = {
  isAuthenticated: false,
  createNewPassword: false,
  forgottenPassword: false,
  processing: false,
  user: null,
  error: ''
};

export function reducer(state = initialState, action: AuthActions): State {
  switch ( action.type ) {

    case AuthActionTypes.CreateNewPassword:
      return {
        ...state,
        createNewPassword: action.payload,
        error: ''
      };

    case AuthActionTypes.ForgottenPassword:
      return {
        ...state,
        forgottenPassword: action.payload,
        error: ''
      };

    case AuthActionTypes.Login:
      return {
        ...state,
        processing: true
      };

    case AuthActionTypes.LoginSuccess:
      return {
        ...state,
        isAuthenticated: true,
        processing: false,
        user: Object.assign({}, action.payload),
        error: ''
      };

    case AuthActionTypes.LoginFail:
      return {
        ...state,
        isAuthenticated: false,
        processing: false,
        user: null,
        error: action.payload
      };

    case AuthActionTypes.Logout:
      return initialState;

    case AuthActionTypes.RedefinePassword:
      return {
        ...state,
        processing: true,
        error: ''
      };

    case AuthActionTypes.RedefinePasswordSuccess:
      return {
        ...state,
        createNewPassword: false,
        processing: false,
        error: ''
      };

    case AuthActionTypes.RedefinePasswordFail:
      return {
        ...state,
        processing: false,
        error: action.payload
      };

    case AuthActionTypes.ResetPassword:
      return {
        ...state,
        processing: true,
        error: ''
      };

    case AuthActionTypes.ResetPasswordFail:
      return {
        ...state,
        processing: false,
        error: action.payload
      };

    case AuthActionTypes.ResetPasswordSuccess:
      return {
        ...state,
        forgottenPassword: false,
        processing: false,
        error: ''
      };

    default:
      return state;
  }
}
