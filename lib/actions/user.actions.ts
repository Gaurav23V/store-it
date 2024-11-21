'use server'

import { Query } from "appwrite";
import { createAdminClient } from "../appwrite";
import { appwriteConfig } from "../appwrite/config";

const getUserByEmail = async (email: string) => {
    const { databases } = await createAdminClient();

    const result = await databases.listDocuments(
        appwriteConfig.databaseId, 
        appwriteConfig.usersCollectionId,
        queries: [Query.equal("email", [email])],
    );

    return result.total > 0 ? result.documents[0] : null;
}

const createAccount = async ({
  fullName,
  email,
}: {
  fullName: string;
  email: string;
}) => {
    const existingUser = await getUserByEmail(email);
};
