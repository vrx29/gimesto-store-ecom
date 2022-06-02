export const setCookie = (token, userName) => {
  document.cookie = `authToken=${encodeURIComponent(token)}`;
  document.cookie = `user=${encodeURIComponent(userName)}`;
};

export const getCookie = () => {
  const authCookie = document.cookie;
  if (!authCookie) {
    return {
      authToken: null,
      user: null,
    };
  }
  const arrayFromCookie = authCookie.split("; ").map((row) => row.split("="));
  const { authToken, user } = Object.fromEntries(arrayFromCookie);
  return {
    authToken,
    user,
  };
};

export const deleteCookie = () => {
  document.cookie = "authToken=;max-age=0";
  document.cookie = "user=;max-age=0";
};
