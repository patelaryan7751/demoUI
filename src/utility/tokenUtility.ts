const removeToken = () => {
  localStorage.removeItem("sessionToken");
  location.href = "/login";
};

export { removeToken };
