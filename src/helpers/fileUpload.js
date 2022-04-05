import axios from 'axios';

export const fileUpload = async ( file ) => {
  const cloudUrl = 'https://api.cloudinary.com/v1_1/dpyritjyb/upload';
  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', 'react-journal');

  try {
    const { data } = await axios.post(cloudUrl, formData);
    const { secure_url } = data;
    return secure_url;
  } catch (error) {
    console.log(error);
  }
}