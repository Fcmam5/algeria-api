// modules
const ADMINS = 'admins';
const WILAYAS = 'wilayas';
const DAIRATS = 'DAIRATS';
const BALADYIATS = 'BALADYIATS';
// users roles
const adminRole = 0;

// methods
const LOGIN = 'LOGIN';
const LIST = 'LIST';
const SHOW = 'SHOW';
const SHOW_SELF = 'SHOW_SELF';
const CREATE = 'CREATE';
const DELETE = 'DELETE';
const DELETE_SELF = 'DELETE_SELF';
const UPDATE = 'UPDATE';
const UPDATE_SELF = 'UPDATE_SELF';


module.exports = {
  LOGIN,
  LIST,
  SHOW,
  SHOW_SELF,
  CREATE,
  DELETE,
  DELETE_SELF,
  UPDATE,
  UPDATE_SELF,
  adminRole,
  ADMINS,
  WILAYAS,
  DAIRATS,
  BALADYIATS,
  allMethods: [
    LOGIN,
    LIST,
    SHOW,
    SHOW_SELF,
    CREATE,
    DELETE,
    DELETE_SELF,
    UPDATE,
    UPDATE_SELF,
  ],
};
