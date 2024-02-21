//Image into base64 formate:

export let convertToBase64 = (profile) => {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();

    fileReader.readAsDataURL(profile);

    fileReader.onload = () => {
      resolve(fileReader.result);
    };

    fileReader.onerror = (error) => {
      reject(error);
    };
  });
};
export let convertLogoPicToBase64 = (profileImage) => {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();

    fileReader.readAsDataURL(profileImage);

    fileReader.onload = () => {
      resolve(fileReader.result); //  convertservicePicToBase64
    };

    fileReader.onerror = (error) => {
      reject(error);
    };
  });
};

export let convertservicePicToBase64 = (servicePic) => {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();

    fileReader.readAsDataURL(servicePic);

    fileReader.onload = () => {
      resolve(fileReader.result); //  convertservicePicToBase64
    };

    fileReader.onerror = (error) => {
      reject(error);
    };
  });
};
