const getCookie = (key: string): string =>
  document.cookie.split('; ').reduce((total, currentCookie) => {
    const [storedKey, storedValue] = currentCookie.split('=');
    return key === storedKey ? decodeURIComponent(storedValue) : total;
  }, '');

export default getCookie;
