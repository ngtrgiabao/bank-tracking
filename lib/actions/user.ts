'use server'

import { ID } from "node-appwrite";
import { cookies } from "next/headers";

import { createAdminClient, createSessionClient } from "../appwrite";
import { parseStringify } from "../utils";

export const signIn = async (user: SignInParams) => {
  try {

  } catch (error) {
    console.log(error)
  }
}

export const signUp = async (user: SignUpParams) => {
  try {
    const { account } = await createAdminClient();
    const { email, password, firstName, lastName } = user;

    const newUserAccount = await account.create(ID.unique(), email, password, `${firstName} ${lastName}`);
    const session = await account.createEmailPasswordSession(email, password);

    cookies().set("appwrite-session", session.secret, {
      path: "/",
      httpOnly: true,
      sameSite: "strict",
      secure: true,
    });

    return parseStringify(newUserAccount);
  } catch (error) {
    console.error(error);

  }
}

export async function getLoggedInUser() {
  try {
    const { account } = await createSessionClient();
    return await account.get();
  } catch (error) {
    return null;
  }
}