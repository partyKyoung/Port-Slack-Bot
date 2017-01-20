import utils from '../lib/utils';

export default function botTalk (message, rtm) {
  let num = utils.GetRandomNumber(10);

  const channel = message.channel;
  const text = message.text;
  const user = message.user;

  const place = ['집', '회사', '성남', '경주', '성신여대', '신림', '대구', '부천', '홍대', '합정', '마포대교', '장승배기', '노량진', '건대입구'];
  const randomTalk = ['맞아요 전 쓰레기에요 ㅠ...',
    '안그래도 저 쓰레기 이미지 생겼는데 이젠 빡대가리 이미지도 생기겠네요 ㅠ',
    '넹',
    '트래포트 생활 망했당',
    '개웃기넹ㅜ',
    '넘졸려요',
    '선릉역까지 가주시는거죠?',
    '구라죠 ㅎㅎ',
    '쿠키런 대전 받아줘요 ㅜ',
    '아 오늘 까지만 놀고 낼부턴 열심히 해야지',
    '팀장님 같은 개발자가 되고 싶어요',
    '<@' + user + '>님 양애취시네, 일도 안하시고 ㅎㅎ',
    '서버 터졌당',
    'ㅎㄷ',
    '제 최대의 적은 저네요',
    'ㅎㅎ'
  ];

  if (text.includes('?')) {
    if (text.includes('언제')) {
      if (num % 2 === 0) {
        rtm.sendMessage('오늘?', channel);
      } else {
        rtm.sendMessage('몰라요', channel);
      }

    } else if (text.includes('어디')) {
      num = utils.GetRandomNumber(place.length);
      rtm.sendMessage(place[num], channel);

    } else if (text.includes('무엇을') || text.includes('뭘') || text.includes('무얼') || text.includes('뭐')) {
      if (num % 2 === 0) {
        rtm.sendMessage('??', channel);
      } else {
        rtm.sendMessage('히익', channel);
      }
    } else if (text.includes('어떻게')) {
      if (num % 2 === 0) {
        rtm.sendMessage('잘 ㅎ', channel);
      } else {
        rtm.sendMessage('열심히 ㅎ;', channel);
      }

    } else if (text.includes('왜')) {
      if (num % 2 === 0) {
        rtm.sendMessage('그걸 왜 저한테 물으세요;', channel);
      } else {
        rtm.sendMessage('저는 잘 몰라요 ㅜ...', channel);
      }

    } else if (text.includes('어때')) {
      if (num % 2 === 0) {
        rtm.sendMessage('좋아요', channel);
      } else {
        rtm.sendMessage('싫어요', channel);
      }

    } else {
       if (num % 2 === 0) {
         rtm.sendMessage('넹', channel);
       } else {
         rtm.sendMessage('ㄴ;', channel);
       }
    } // if

  } else {
    num = utils.GetRandomNumber(randomTalk.length);
    rtm.sendMessage(randomTalk[num], channel);
  } // if- else
}
