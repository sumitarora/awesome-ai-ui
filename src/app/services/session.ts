import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';

export const COOKIE_NAME: string = 'sessionId';

@Injectable()
export class SessionService {

  resetSession() {
    const sessionId = this.generateUUID();
    this.setCookie(COOKIE_NAME, sessionId, 60);
  }

  checkSession() {
    let sessionId = this.getCookie(COOKIE_NAME);
    if (sessionId.length === 0) {
      sessionId = this.generateUUID();
    }
    this.setCookie(COOKIE_NAME, sessionId, 60);
    return sessionId;
  }

  generateUUID() {
    let d = new Date().getTime();
    const uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        const r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
    return uuid;
  }

  setCookie(cname: String, cvalue: String, expSeconds: number) {
    const d = new Date();
    d.setTime(d.getTime() + (expSeconds * 1000));
    const expires = 'expires=' + d.toUTCString();
    document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
  }

  public getCookie(cname) {
    const name = cname + '=';
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') {
          c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
          return c.substring(name.length, c.length);
      }
    }
    return '';
  }


}
