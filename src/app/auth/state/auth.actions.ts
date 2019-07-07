import { Action } from '@ngrx/store';
import { AuthenticatedUser, UserCredential } from '@app/_models';

export enum AuthActionTypes {
  ForgottenPassword = '[ Auth ] Forgotten password',
  CreateNewPassword = '[ Auth ] Create new password',
  Login = '[ Auth ] Login',
  LoginFail = '[ Auth ] Login fail',
  LoginSuccess = '[ Auth ] Login success',
  Logout = '[ Auth ] Logout',
  LogoutSuccess = '[ Auth ] Logout success',
  LogoutFail = '[ Auth ] Logout fail',
  ResetPassword = '[ Auth ] Reset password',
  ResetPasswordSuccess = '[ Auth ] Reset password success',
  ResetPasswordFail = '[ Auth ] Reset password fail',
  RedefinePassword = '[ Auth ] Redefine password',
  RedefinePasswordFail = '[ Auth ] Redefine password fail',
  RedefinePasswordSuccess = '[ Auth ] Redefine password success'
}

export class ForgottenPassword implements Action {
  readonly type = AuthActionTypes.ForgottenPassword;

  constructor(public payload: boolean) {}
}

export class CreateNewPassword implements Action {
  readonly type = AuthActionTypes.CreateNewPassword;

  constructor(public payload: boolean) {}
}

export class Login implements Action {
  readonly type = AuthActionTypes.Login;

  constructor(public payload: UserCredential) {}
}

export class LoginSuccess implements Action {
  readonly type = AuthActionTypes.LoginSuccess;

  constructor(public payload: AuthenticatedUser) {}
}

export class LoginFail implements Action {
  readonly type = AuthActionTypes.LoginFail;

  constructor(public payload: string) {}
}

export class Logout implements Action {
  readonly type = AuthActionTypes.Logout;
}

export class LogoutFail implements Action {
  readonly type = AuthActionTypes.LogoutFail;

  constructor(public payload: string) {}
}

export class LogoutSuccess implements Action {
  readonly type = AuthActionTypes.LogoutSuccess;
}

export class ResetPassword implements Action {
  readonly type = AuthActionTypes.ResetPassword;

  constructor(public payload: string) {}
}

export class ResetPasswordFail implements Action {
  readonly type = AuthActionTypes.ResetPasswordFail;

  constructor(public payload: string) {}
}

export class ResetPasswordSuccess implements Action {
  readonly type = AuthActionTypes.ResetPasswordSuccess;
}

export class RedefinePassword implements Action {
  readonly type = AuthActionTypes.RedefinePassword;

  constructor(public payload: {
    password: string,
    token: string
  }) {}
}

export class RedefinePasswordFail implements Action {
  readonly type = AuthActionTypes.RedefinePasswordFail;

  constructor(public payload: string) {}
}

export class RedefinePasswordSuccess implements Action {
  readonly type = AuthActionTypes.RedefinePasswordSuccess;
}

export type AuthActions = CreateNewPassword
  | ForgottenPassword
  | Login
  | LoginFail
  | LoginSuccess
  | Logout
  | LogoutFail
  | LogoutSuccess
  | RedefinePassword
  | RedefinePasswordFail
  | RedefinePasswordSuccess
  | ResetPassword
  | ResetPasswordFail
  | ResetPasswordSuccess;
