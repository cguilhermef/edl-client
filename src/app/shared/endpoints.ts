import {environment} from '../../environments/environment';
const api = environment.api;

export const endpoints = {
  auth: {
    login: `${ api }/login`,
    forgot: `${ api }/forgot-password`,
    redefine: `${ api }/recovery`,
    register: `${ api }/register`
  },
  summoner: {
    register: `${ api }/register-account`,
    confirm: `${ api }/confirm-account`
  }
};
