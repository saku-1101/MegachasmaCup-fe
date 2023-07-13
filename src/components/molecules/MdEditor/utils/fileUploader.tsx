const fileUploader = (file: File) => {
  const imageURL = URL.createObjectURL(file);

  return imageURL;
};

export default fileUploader;
