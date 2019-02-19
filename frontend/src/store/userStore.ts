import { observable, autorun } from 'mobx';

const localStorageKey = 'token';

export class UserStore {

  @observable
  private token = localStorage.getItem(localStorageKey) || undefined;

  setToken(token: string | undefined) {
    this.token = token;
  }

  getToken() {
    return this.token;
  }

  isAuthenticated() {
    return !!this.token;
  }

}

export const shardUserStore = new UserStore();

autorun(() => {
  const token = shardUserStore.getToken();
  if (token) {
    localStorage.setItem(localStorageKey, token);
  } else {
    localStorage.removeItem(localStorageKey);
  }

});
