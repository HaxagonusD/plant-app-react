const convertFilesToBase64 = async (files) => {
  console.log(files);
  const promises = [];
  for (let i = 0; i < files.length; i++) {
    promises.push(
      new Promise((resolve) => {
        const reader = new FileReader();
        reader.onload = (event) => {
          const res = event.target.result;
          console.log(res);
          resolve(res);
        };
        reader.readAsDataURL(files[i]);
      })
    );
  }
  return await Promise.all(promises);
};

export default convertFilesToBase64;
