import firebase from "firebase/compat/app";
import { getStorage, ref, getDownloadURL, uploadBytes, deleteObject } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
  measurementId: import.meta.env.VITE_MEASUREMENT_ID
};
const app = firebase.initializeApp(firebaseConfig)

export async function getFileUrl(path: string) {
  const storage = getStorage();
  const storageRef = ref(storage, path);

  try {
    const fileUrl = await getDownloadURL(storageRef);
    return fileUrl;
  } catch (error) {
    console.error("파일 URL을 가져오는 중 에러가 발생했습니다:", error);
  }
}

export async function uploadFile(path: string, file: File) {
  const storage = getStorage(app);
  const storageRef = ref(storage, path);

  try {
    const snapshot = await uploadBytes(storageRef, file);
    console.log('Uploaded a file!', snapshot);
  } catch (error) {
    console.error('Upload failed', error);
  }
}

export async function deleteFile(path: string) {
  const storage = getStorage(app);
  const storageRef = ref(storage, path);

  try {
    await deleteObject(storageRef);
    console.log(`${path} has been successfully deleted`);
  } catch (error) {
    console.error('Error deleting the file:', error);
  }
};
