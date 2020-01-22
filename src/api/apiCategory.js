import axios from 'axios';

export const getLists = async () => {
  const response = await axios.get(`category/`);
  console.log(response.data,'api~~~~~~~~~~');
  return response.data;
};

export const changeShow=async(category)=>{
  await category.map((item,index)=>{
    return axios.patch(`category/${item.id}`,{show:item.show});
    });
    return;
}