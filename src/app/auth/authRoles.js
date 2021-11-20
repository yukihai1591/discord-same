/* LIBRARY */
let authRoles = {
  admin: ["admin"],
  teacher: ["admin", "teacher"],
  user: ["admin", "teacher", "student"],
  onlyGuest: [],
};

export default authRoles;
