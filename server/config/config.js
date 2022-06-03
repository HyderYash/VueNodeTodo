const PROJ_NAME = "Todo App";
//? API CALL PREFIX START ?//
const API_PREFIX = "/api";

//* ----------- AUTHENTICATION URIS START ----------- *//
const AUTH_API = "/auth";
const SIGIN_API = `${AUTH_API}/signin`;
const SENDTEMPASSTOUSER = `${AUTH_API}/sendtempasstouser`;
const CHCKPASSOFUSERANDINSERT = `${AUTH_API}/checkpasswordofuserandinsert`;
const CHECKUSERNAMEINDBANDSENDOTP_API = `${AUTH_API}/checkusernameandsendotp`;
const VERIFYOTP_API = `${AUTH_API}/verifyotp`;
const CHANGEPASSWORD_API = `${AUTH_API}/changepassword`;
const CHECKUSERWITHPASS_API = `${AUTH_API}/checkuserwithpass`;
//* ----------- AUTHENTICATION URIS END ----------- *//

//* ----------- THIS IS BEING IS USED FOR TODO APIS ----------- *//
const TODO_API = "/todo";
const GET_TODOSTATS = `${TODO_API}/gettodostats`;
//* ----------- THIS IS BEING IS USED FOR TODO APIS ----------- *//

//? API CALL PREFIX END ?//

//? MYSQL TABLE LIST ?//
const AUTH_TABLE_PRE = "common_";
const COMMON_USER_TB = `${AUTH_TABLE_PRE}users`;
const TODO_PRE = "todo_";
const TODOTASKLIST_TB = `${TODO_PRE}tasklist`;
const TODOTASKRATING_TB = `${TODO_PRE}user_task_rating`;
//? MYSQL TABLE LIST ?//

//! ----------- EXPORTING VARIABLES ----------- !//
module.exports = {
  SENDER_EMAIL: process.env.SENDER_EMAIL,
  SENDER_PASS: process.env.SENDER_PASS,
  encrypt_password: process.env.ENCRYPT_PASSWORD,
  encrypt_iv: process.env.ENCRYPT_IV,
  API_PREFIX,
  AUTH_API,
  SIGIN_API,
  SENDTEMPASSTOUSER,
  CHCKPASSOFUSERANDINSERT,
  CHANGEPASSWORD_API,
  CHECKUSERWITHPASS_API,
  COMMON_USER_TB,
  TODOTASKLIST_TB,
  TODOTASKRATING_TB,
  PROJ_NAME,
  CHECKUSERNAMEINDBANDSENDOTP_API,
  VERIFYOTP_API,
  GET_TODOSTATS,
};

//! ----------- EXPORTING VARIABLES ----------- !//
