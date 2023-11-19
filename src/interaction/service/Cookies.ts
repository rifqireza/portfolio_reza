import Cookies from 'js-cookie';

type CookiesKeyword = 'portfolio' | 'userId';

export default class CookiesService {
  set(keyword: CookiesKeyword = 'portfolio', content: any, expired: any) {
    Cookies.set(keyword, content, expired);
  }

  remove(keyword: CookiesKeyword = 'portfolio') {
    Cookies.remove(keyword);
  }

  getJson(keyword: CookiesKeyword = 'portfolio') {
    return Cookies.get(keyword)
  }
}