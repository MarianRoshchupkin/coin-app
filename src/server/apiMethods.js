import { generateRandomString } from "../utils/generation/generateRandomIndex";
import { database } from "./server";
import crypto from "crypto";

export const auth = () => async (req, res, next) => {
  if (!req.cookies['sessionId'])
    return next();

  req.user = await findUserBySessionId(req.cookies['sessionId']);
  req.sessionId = req.cookies["sessionId"];
  next();
};

export const findUserByUsername = async (username) => {
  try {
    const users = await database('users')
      .select()
      .where({ username })
      .first()

    return users;
  } catch(err) {
    console.log('');
    console.log("      this error's happened in findUserByUsername()");
    console.log(`      ${err.toString()}`);
  }
}

export const findAccountByAccount = async (account) => {
  try {
    const accounts = await database('accounts')
      .select()
      .where({number: account})
      .first()

    return accounts;
  } catch(err) {
    console.log('');
    console.log("      this error's happened in findAccountByAccount()");
    console.log(`      ${err.toString()}`);
  }
}

export const findUserBySessionId = async (sessionId) => {
  try {
    const session = await database('sessions')
      .select('userId')
      .where({ sessionId: sessionId })
      .first()

    if (!session) return;

    return database('users')
      .select()
      .where({ id: session.userId })
      .first()
  } catch(err) {
    console.log('');
    console.log("      this error's happened in findUserBySessionId()");
    console.log(`      ${err.toString()}`);
  }
};

export const createSession = async (userId) => {
  try {
    const sessionId = generateRandomString();

    await database('sessions').insert({
      userId: userId,
      sessionId: sessionId,
    })

    return sessionId;
  } catch(err) {
    console.log('');
    console.log("      this error's happened in createSession()");
    console.log(`      ${err.toString()}`);
  }
};

export const deleteSession = async (sessionId) => {
  try {
    await database('sessions').where({ sessionId: sessionId }).delete();
  } catch(err) {
    console.log('');
    console.log("      this error's happened in deleteSession()");
    console.log(`      ${err.toString()}`);
  }
};

export const createHash = (password) => {
  try {
    const hash = crypto.createHash("sha256");
    return hash.update(password).digest("hex");
  } catch(err) {
    console.log('');
    console.log("      this error's happened in deleteSession()");
    console.log(`      ${err.toString()}`);
  }
};
