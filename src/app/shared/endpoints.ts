import {environment} from '../../environments/environment';

const api = environment.api;

export const endpoints = {
  auth: {
    activate: `${api}/activate`,
    login: `${api}/login`,
    forgot: `${api}/forgot-password`,
    redefine: `${api}/recovery`,
    register: `${api}/register`
  },
  rankings: {
    list: `${api}/rankings`
  },
  riot: {
    roles: `${api}/roles`
  },
  summoner: {
    register: `${api}/register-account`,
    confirm: `${api}/confirm-account`
  },
  teams: {
    list: `${api}/teams`,
    byId: (teamId) => `${api}/teams/${teamId}`
  },
  vacancies: {
    list: `${api}/vacancies`,
    byId: (vacancyId) => `${api}/vacancies/${vacancyId}`
  }
};
