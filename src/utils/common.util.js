import Cookies from "js-cookie";
export const logout = (history) => {
  Cookies.remove("x_ufo");
  Cookies.remove("x_auth_token");
  return history("/");
};

export const formatDate1 = (date) => {
  if (date == null) {
    return null;
  }
  const dateObj = new Date(date);
  return dateObj.toISOString().slice(0, 10); // Get the first 10 characters (YYYY-MM-DD)
};
