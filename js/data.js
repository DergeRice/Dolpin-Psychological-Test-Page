const qnaList = [
    {
      q: '1. 나의 애교 능력은?',
      a: [
        { answer: 'a. 없다.', score: [0,0,0,0,0,0,0,0,0,0] },
        { answer: 'b. 좋아하는 사람에게만 한다.', score: [0,0,5,5,5,0,5,5,5,5] },
        { answer: 'c. 애교 기본 탑재!', score: [10,10,10,5,5,10,5,5,5,5] },
        { answer: 'd. 애교 빼면 시체', score: [20,20,0,10,10,20,10,10,10,10]}
      ]
    },
    {
      q: '2. 자신의 대인관계는 어떤가요?',
      a: [
        { answer: 'a. 좁고 깊은 관계', score: [20,30,0,-20,20,30,0,0,0,0] },
        { answer: 'b. 낯가리지만 친하면 잘지내는 스타일', score: [30,0,0,0,0,0,20,20,0,0] },
        { answer: 'c. 낯은 가리지 않지만 먼저 말을 걸지는 않는다.', score: [0,0,0,0,0,0,0,0,0,10] },
        { answer: 'd. 두루두루 친하게 지내는 스타일', score: [0,0,10,30,0,0,0,0,10,20] }
      ]
    },
    {
      q: '3. 밥을 먹는데 식탁에 국물이 튀었을때 나의 행동은?',
      a: [
        { answer: 'a. 다먹고 치운다', score: [-20,0,0,0,0,0,0,0,20,10] },
        { answer: 'b. 그릇을 가져와서 치운다.', score: [0,10,10,20,10,0,10,0,0,0] },
        { answer: 'c. 바로 닦은 후에 다시 식사를 한다.', score: [30,0,10,20,0,0,0,0,0,0] },
        { answer: 'd. 신경쓰지 않으며 식사를 즐긴다.', score: [-20,0,0,0,0,0,0,20,20,20] }
      ]
    },
    {
      q: '4. 애인이 턱어 걸려 넘어졌을때, 나의 반응은?',
      a: [
        { answer: 'a. 바로 걱정하며, 주위에 다른 턱은 없는지 살펴본다.', score:[0,0,0,0,20,0,0,0,0,0] },
        { answer: 'b. 애인의 아픔을 공감해준다.', score: [10,0,20,0,0,0,10,20,20,0] },
        { answer: 'c. 구박하는 척하면서 알게모르게 걱정해준다.', score: [0,-10,0,0,0,0,30,-20,-10,0] },
        { answer: 'd. 다친 곳은 없는지 확인하며, 근처 약국을 찾는다.', score: [0,0,0,0,10,20,0,10,0,10] }
      ]
    },
    {
      q: '5. 오늘 날씨가 내가 좋아하는 날씨일때, 나의 행동은?',
      a: [
        { answer: 'a. 친구들을 만나서 논다.', score: [-10,-10,20,10,0,10,10,10,0,0] },
        { answer: 'b. 자신의 기분이나 행동을 SNS에 공유한다.', score: [0,0,0,0,0,0,30,0,0,0] },
        { answer: 'c. 혼자 음악을 들으며 산책을 한다.', score: [-10,-10,10,0,0,10,0,0,10,10] },
        { answer: 'd. 날씨가 좋아도 집에서 있는다.', score: [10,20,-20,0,0,0,0,0,0,0] }
      ]
    },
    {
      q: '6. 친구가 기분이 안좋아 보일때, 나의 행동은?',
      a: [
        { answer: 'a. 친구에게 맛있는 음식을 사주며 풀어주려고 노력한다.', score: [10,10,30,20,10,30,20,20,0,10] },
        { answer: 'b. 단도직입적으로 물어본다.', score: [0,0,-20,0,10,0,10,0,0,0] },
        { answer: 'c. 풀릴때까지 조용히 옆에 있어준다.', score: [0,0,10,0,0,0,0,-10,10,0] },
        { answer: 'd. 가만히 있는다.', score: [10,10,0,0,0,0,-10,0,0,-10] }
      ]
    },
    {
      q: '7. 애인이 친구들이랑 술을 마시기로 했을때, 나의 반응은?',
      a: [
        { answer: 'a. 애인을 믿는다.', score: [0,0,0,20,0,30,0,30,0,20] },
        { answer: 'b. 애인에게 연락을 자주하라고 한다.', score: [20,30,10,0,30,0,10,20,0,0] },
        { answer: 'c. 어디에 갔는지 뭐할건지 캐묻는다.', score: [0,20,20,0,10,0,0,0,10,0] },
        { answer: 'd. 집에 들어갈때 연락만 되면 된다.', score: [0,0,20,0,20,0,20,0,0,0] }
      ]
    },
    {
      q: '8. 길 가다가 고양이 상자를 발견하면?',
      a: [
        { answer: 'a. 고양이 상자로 가서 직접 확인한다.', score: [0,0,20,20,0,20,10,20,30,20]},
        { answer: 'b. 주변을 살펴보며 고양이가 있는지 확인한다.', score: [20,10,0,10,0,0,0,0,0,0] },
        { answer: 'c. 원래 가던 길을 간다.', score: [0,10,0,0,0,0,0,-10,-10,0] },
        { answer: 'd. 고양이 밥을 주고 싶은 마음이다.', score: [0,0,20,0,20,0,20,0,0,0] }
      ]
    },
    {
      q: '9. 연애할 때 나의 스타일은?',
      a: [
        { answer: 'a. 친구들을 거의 만나지않고 애인과 시간을 주로 보낸다.', score: [20,20,0,0,30,20,0,0,10,0] },
        { answer: 'b. 질투하지않고 서로를 존중해준다.', score: [0,-20,0,0,0,0,20,30,20,20] },
        { answer: 'c. 나는 친구들을 만나지만 애인은 안 그랬으면 좋겠다.', score: [10,20,0,0,0,0,0,0,-10,-10] },
        { answer: 'd. 대화를 중요하게 생각해서 얘기를 자주 나눈다.', score: [10,0,20,30,10,0,0,0,20,20] }
      ]
    }
  ]
  
  const infoList = [
    {
      name: '러시안블루',
      png:'RussianBlue',
      desc: '점잖고 조용하고 소심하게 느껴질 수 있다. 하지만 주인에게 마음을 열면 애교박에 모르는 개냥이! 낯을 많이 가려서 가족외에는 잘 놀려하지 안하고 위생 상태를 많이 따짐'
    },
    {
      name: '페르시안',
      png:'Persian',
      desc: '활동성이 높지 않고 온순한 성격. 질투심이 많음. 놀기를 좋아하고 애교가 많음'
    },
    {
      name: '아비니시안',
      png:'Abyssinian',
      desc: '똑똑함. 기분 파악을 잘함. 온순하고 놀기를 좋아함. 끊임 없이 돌아다니는 것을 좋아하고 호기심이 많음'
    },
    {
      name: '스코티시 폴드',
      png:'ScottishFold',
      desc: '순하고 새로운 환경에 빠르게 적응하며, 사람을 좋아한다.'
    },
    {
      name: '코숏',
      png:'shorthair',
      desc: '한국 토종이다. 정이 많고 활발한 성격. 애교가 많음'
    },
    {
      name: '사미즈(샴)',
      png:'Siamese',
      desc: '영리하고 예민하고 감수성이 풍부하다. 주인이 어그로 끌면 신경질 적임. 쓰다듬어 주길 좋아하고 애정이 많은편'
    },
    {
      name: '브리티시 숏헤어',
      png:'BritishShort',
      desc: '사람에게 친근하고 사랑스러운 성격'
    },
    {
      name: '스핑크스',
      png:'sphinx',
      desc: '성격이 좋고 호기심이 많고 주인을 좋아함'
    },
    {
      name: '아메리칸 숏헤어',
      png:'AmericaShort',
      desc: '낙천적이고 쾌활함. 온화한 애정이 많으면서도 어리광을 부리지 않아서 어린이나 다른 동물과도 쉽게 친해진다.'
    }
  ]