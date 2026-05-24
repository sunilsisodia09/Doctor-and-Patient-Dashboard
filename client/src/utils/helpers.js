export const truncateText = (
  text,
  maxLength = 50
) => {
  if (!text) return "";

  return text.length > maxLength
    ? `${text.substring(0, maxLength)}...`
    : text;
};

export const capitalize = (text) => {
  if (!text) return "";

  return (
    text.charAt(0).toUpperCase() +
    text.slice(1)
  );
};

export const generateAvatar = (name) => {
  return `https://ui-avatars.com/api/?name=${name}`;
};

export const getToken = () => {
  return localStorage.getItem("token");
};

export const getUser = () => {
  return JSON.parse(
    localStorage.getItem("user")
  );
};

export const logoutUser = () => {
  localStorage.removeItem("token");

  localStorage.removeItem("user");

  window.location.href = "/login";
};