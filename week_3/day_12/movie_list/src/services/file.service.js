import { ref, getDownloadURL, uploadBytesResumable, uploadBytes, listAll, deleteObject } from 'firebase/storage';
import { db, storage } from '../firebase/firebase';
import {v4 } from 'uuid';
import { collection } from 'firebase/firestore';

class FileService {

  async uploadImage(file, onUploadProgress) {
    return new Promise((resolve, reject) => {
      const fileRef = ref(storage, 'images');
      const uploadTask = uploadBytesResumable(fileRef, file);
      alert('Image Uploaded!');

      uploadTask.on(
        'state_changed',
        (snapshot) => {
          // handle update
          // listen to updates
          this.handleProgressUpdate(snapshot, onUploadProgress);
        },
        (err) => {
          // handle error
          reject(err.message);
        },
        () => {
          // get downLoadUrl for completed upload
          // resolve our promise
          getDownloadURL(uploadTask.snapshot.ref).then((downloadUrl) => {
            // resolve the download url
            resolve(downloadUrl);
          });
        }
      );
    });
  }

  async fetchMovie() {
    const url = getDownloadURL(ref(storage, 'images'))
    return url
  }

  handleProgressUpdate(snapshot, onUploadProgress) {
    if (onUploadProgress) {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      onUploadProgress(progress);
    }

   
  }
}

const service = new FileService();
export default service;