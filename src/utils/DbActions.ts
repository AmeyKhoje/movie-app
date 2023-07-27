import {
  collection,
  addDoc,
  getDocs,
  getDoc,
  doc,
  query,
  where,
  getFirestore,
} from 'firebase/firestore/lite';
import app, { db } from 'src/firebase/Config';

export const saveUser = (data: any) =>
  new Promise(async (resolve, reject) => {
    const usersDoc = collection(db, 'users');
    const qu = query(
      usersDoc,
      where('email', '==', data.email),
      where('userName', '==', data.userName)
    );
    const docE = await getDocs(qu);

    if (!docE?.docs?.length) {
      const userRef = await addDoc(usersDoc, data);
      if (userRef?.id) {
        resolve({
          success: true,
        });
      } else {
        resolve({
          success: false,
        });
      }
    } else {
      reject({
        alreadyExist: true,
      });
    }
  });

export const loginUser = async (data: any) => {
  try {
    const usersDoc = collection(db, 'users');
    const qu = query(
      usersDoc,
      where('email', '==', data.email),
      where('userName', '==', data.userName),
      where('password', '==', data?.password)
    );
    const docE = await getDocs(qu);
    if (docE.docs.length) {
      localStorage.setItem('isLoggedIn', 'true');
      return {
        success: true,
      };
    } else {
      return {
        success: false,
      };
    }
  } catch (error: any) {
    return {
      success: false,
    };
  }
};
