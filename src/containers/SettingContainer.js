import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCategory, set_true } from '../modules/category';
import ChooseList from '../components/ChooseList';
import SettingList from '../components/SettingList';
import AddRemove from '../components/AddRemove'
import { first } from '../modules/firstTime';

function SettingContainer() {
  const [clicked, setClicked] = useState(false);
  // let [a, setA] = useState(1);
  const category = useSelector((state) => state.category_reducer);
  let a= useSelector((state)=>state.firstTime);
  const dispatch = useDispatch();
  console.log(category,'컨테이너',a)

   // 컴포넌트 마운트 후 포스트 목록 요청
  useEffect(() => {
    dispatch(getCategory());
    // console.log(a,'컨테이너a')
  }, [dispatch]);

  const clickEvent = () => {
    console.log('클릭됫을때')
    setClicked(true);
  }
  const clickFalseEvent = () => {
    console.log('클릭false바꾸기')
    setClicked(false);
  }

  const changeShow = (category) => {
    dispatch(set_true(category));
  }
  const changeA=()=>{
   dispatch(first());
  }

  return (
    <div>
      <ChooseList category={category} changeShow={changeShow}></ChooseList>
      <AddRemove clickEvent={clickEvent}></AddRemove>
      <SettingList category={category} clicked={clicked} clickFalseEvent={clickFalseEvent} a={a.number} changeA={changeA}></SettingList>
    </div>
  );
}

export default SettingContainer;