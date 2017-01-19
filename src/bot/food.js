import utils from '../lib/utils';

export default function botFood (message, rtm) {
  const channel = message.channel;
  const text = message.text;
  const user = message.user;

  const breakfast = ['샌드위치', '맥모닝', '볶음밥', '엄마가 해준 밥', '토스트'];
  const lunch = ['볶음밥', '카레', '라멘', '칼국수', '냉면', '분식', '초밥', '우동', '회덮밥', '라면', '김치찌개', '된장찌개', '국밥', '순두부찌개', '부대찌개', '샌드위치', '햄버거'];
  const dinner = ['닭발', '치킨', '피자', '햄버거', '국밥', '부대찌개', '김치찌개', '된장찌개', '삼겹살', '갈비', '곱창', '막창', '굶는거', '라면', '낙지볶음', '회', '보쌈', '초밥'];
  const snack = ['새우튀김', '붕어빵', '떡볶이', '아이스크림', '슈크림', '초콜렛', '오뎅', '마카롱'];

  let num = 0;

  if (text.includes('아침')){
    num = utils.GetRandomNumber(breakfast.length);
    rtm.sendMessage(breakfast[num] + ' 먹을래요?', channel);
  }else if (text.includes('점심')) {
    num = utils.GetRandomNumber(lunch.length);
    rtm.sendMessage(lunch[num] + ' 먹을래요?', channel);
  } else if (text.includes('저녁') || text.includes('야식')) {
    num = utils.GetRandomNumber(dinner.length);
    rtm.sendMessage(dinner[num] + ' 먹을래요?', channel);
  } else if (text.includes('간식')) {
    num = utils.GetRandomNumber(snack.length);
    rtm.sendMessage(snack[num] + ' 먹을래요?', channel);
  } else {
    rtm.sendMessage('암거나 먹어요;', channel);
  }
}
