import { saveAs } from 'file-saver-es';
import { getZipBuilder } from './zip';

export const convertBlobToArrayBuffer = async (
  blob: Blob,
) => {
  const promise: (() => Promise<ArrayBuffer>) = () => new Promise((resolve, reject) => {
    try {
      const fileReader = new FileReader();
      fileReader.readAsArrayBuffer(blob);
      fileReader.onload = async (event) => {
        if (!event.target) reject(event);
        const arrayBuffer = event.target.result as ArrayBuffer;
        resolve(arrayBuffer);
      };
    } catch(error) {
      reject(error);
    }
  });
  const result = await promise();
  return result;
};


export const convertBlobToZipBlob = async (blob: Blob) => {
  return blob;
};

export const convertArrayBufferToZip = async (arrayBuffer: ArrayBuffer) => {
  const zipBuilder = getZipBuilder();
  const zip = await zipBuilder.loadAsync(arrayBuffer);
  return zip;
};

/*
export const convertBlobToXlsxBlob = async (
  file: Blob,
) => {
  const promise: () => Promise<string | ArrayBuffer> = () => new Promise((resolve, reject) => {
    try {
      const fileReader = new FileReader();
      fileReader.readAsArrayBuffer(file);
      fileReader.onload = async (event) => {
        if (!event.target) reject(event);
        const bufferArray = event.target.result;
        resolve(bufferArray);
      };
    } catch(error) {
      reject(error);
    }
  });
  const result = await promise();
  return result;
};
*/

export const downloadFileViaBrowser = async (blob: Blob, blobFilename: string) => {
  await saveAs(blob, blobFilename);
};
