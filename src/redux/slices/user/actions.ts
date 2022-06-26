import { UserModel } from '../../../models';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { doc, Firestore, getDoc } from 'firebase/firestore';
import { UserType } from '../../../types';

export const register = createAsyncThunk(
  'user/register',
  async ({ db, uid }: { db: Firestore; uid: string }) => {
    const user = await UserModel.getUser({ db, uid });
    return user;
  }
);

export const getUser = createAsyncThunk(
  'user/getUser',
  async ({ db, uid }: { db: Firestore; uid: string }) => {
    const docRef = doc(db, 'users', uid);
    const docSnap = await getDoc(docRef);
    return docSnap.data() as UserType;
  }
);
