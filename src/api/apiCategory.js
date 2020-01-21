import axios from 'axios';

export const getLists = async () => {
  const response = await axios.get(`category/`);
  console.log(response.data,'api~~~~~~~~~~');
  return response.data;
};