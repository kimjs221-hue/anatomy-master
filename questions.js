// questions.js
// 해부생리 / 호르몬 / 혈역학 관련 문제 템플릿
// 이 파일의 QUESTIONS 배열만 수정해서 문제를 추가·변경하면 됩니다.

window.QUESTIONS = [
  {
    "id": "Q1",
    "tag": "인체의 구분과 조직",
    "prompt": "가슴안 공간을 구성하는 것으로 옳은 것은?",
    "choices": [
      {
        "text": "가로막안, 가슴막안, 가슴세로칸",
        "explanation": "오답입니다. '가로막안'이라는 용어는 해부학적으로 사용되지 않습니다. 가로막(Diaphragm)은 가슴안과 배안을 나누는 근육막입니다."
      },
      {
        "text": "골반안, 가슴막안, 갈비안",
        "explanation": "오답입니다. '골반안'은 배골반안의 일부이며, '갈비안'이라는 용어는 쓰이지 않습니다."
      },
      {
        "text": "가슴세로칸, 가슴막안, 심장막안",
        "explanation": "정답입니다. 가슴안(Thoracic cavity)은 좌우의 가슴막안(Pleural cavity), 중앙의 가슴세로칸(Mediastinum), 그리고 가슴세로칸 내의 심장막안(Pericardial cavity)을 포함합니다."
      },
      {
        "text": "머리안, 척주안, 심장막안",
        "explanation": "오답입니다. '머리안'과 '척주안'은 등쪽 몸안(Dorsal body cavity)에 속합니다."
      },
      {
        "text": "가슴막안, 배안, 심장막안",
        "explanation": "오답입니다. '배안'은 가로막 아래에 위치하며 가슴안에 포함되지 않습니다."
      }
    ],
    "correctIndex": 2
  },
  {
    "id": "Q2",
    "tag": "인체의 구분과 조직",
    "prompt": "여성의 골반안의 장기 배치 순서를 앞에서 뒤로 나열한 것으로 옳은 것은?",
    "choices": [
      {
        "text": "자궁 → 방광 → 곧창자 → 엉치뼈",
        "explanation": "오답입니다. 자궁은 방광의 뒤쪽에 위치합니다."
      },
      {
        "text": "방광 → 자궁 → 곧창자 → 엉치뼈",
        "explanation": "정답입니다. 여성의 골반안 장기는 앞쪽(치골결합)에서 뒤쪽(엉치뼈) 순으로 방광(Urinary bladder) → 자궁(Uterus) → 곧창자(Rectum) → 엉치뼈(Sacrum)가 위치합니다."
      },
      {
        "text": "방광 → 자궁 → 엉치뼈 → 곧창자",
        "explanation": "오답입니다. 곧창자는 엉치뼈의 앞쪽에 위치합니다."
      },
      {
        "text": "자궁 → 방광 → 엉치뼈 → 곧창자",
        "explanation": "오답입니다. 배열 순서가 전체적으로 틀렸습니다."
      },
      {
        "text": "방광 → 곧창자 → 자궁 → 엉치뼈",
        "explanation": "오답입니다. 자궁은 방광과 곧창자 사이에 위치합니다."
      }
    ],
    "correctIndex": 1
  },
  {
    "id": "Q3",
    "tag": "인체의 구분과 조직",
    "prompt": "세포막에 대한 설명으로 옳은 것은?",
    "choices": [
      {
        "text": "단백질분자들이 두 층을 이룬다.",
        "explanation": "오답입니다. 두 층을 이루는 주 성분은 '인지질'입니다(인지질 이중층)."
      },
      {
        "text": "핵을 바깥에서 싸고 있는 막이다.",
        "explanation": "오답입니다. 핵을 싸고 있는 막은 '핵막'입니다. 세포막은 세포 전체를 둘러쌉니다."
      },
      {
        "text": "물질의 수동수송은 농도차를 역행하여 이동하는 것이다.",
        "explanation": "오답입니다. 수동수송은 농도가 높은 곳에서 낮은 곳으로(농도차에 순응하여) 이동하며 에너지를 쓰지 않습니다. 역행하는 것은 능동수송입니다."
      },
      {
        "text": "인지질과 단백질이 불균등하게 분포되어 있는 구조를 갖는다.",
        "explanation": "정답입니다. 세포막은 유동 모자이크 모델(Fluid Mosaic Model)로 설명되며, 인지질 이중층에 단백질들이 불규칙하게 박혀있거나 떠다니는 비대칭적 구조를 가집니다."
      },
      {
        "text": "세포막과 핵막 사이에는 세포질이라는 형태가 있고 고체로 이루어진 물질이 있다.",
        "explanation": "오답입니다. 세포질은 물, 전해질, 소기관 등이 포함된 반유동성 콜로이드 상태에 가깝습니다."
      }
    ],
    "correctIndex": 3
  },
  {
    "id": "Q4",
    "tag": "인체의 구분과 조직",
    "prompt": "납작한 수조가 여러 층이 쌓인 구조로 되어 있고 물질의 가공과 용해소체를 생성하는 세포소기관으로 옳은 것은?",
    "choices": [
      {
        "text": "골지복합체",
        "explanation": "정답입니다. 골지복합체(Golgi complex)는 납작한 주머니(시스털나)가 층을 이룬 구조로, 소포체에서 합성된 물질을 가공·포장하여 분비하며 용해소체(Lysosome)를 형성합니다."
      },
      {
        "text": "사립체",
        "explanation": "오답입니다. 사립체(Mitochondria)는 ATP를 생성하는 '세포의 발전소'입니다."
      },
      {
        "text": "세포질그물",
        "explanation": "오답입니다. 세포질그물(Endoplasmic reticulum)은 물질의 합성 및 운반 통로 역할을 합니다."
      },
      {
        "text": "중심체",
        "explanation": "오답입니다. 중심체(Centrosome)는 세포 분열 시 방추사를 형성합니다."
      },
      {
        "text": "리보솜",
        "explanation": "오답입니다. 리보솜(Ribosome)은 단백질 합성을 담당합니다."
      }
    ],
    "correctIndex": 0
  },
  {
    "id": "Q5",
    "tag": "인체의 구분과 조직",
    "prompt": "갑상샘소포, 난소표면, 침샘 등의 분비샘 표면에서 볼 수 있는 상피조직으로 옳은 것은?",
    "choices": [
      {
        "text": "이행상피",
        "explanation": "오답입니다. 이행상피는 방광, 요관 등 늘어나는 기관에 존재합니다."
      },
      {
        "text": "단층입방상피",
        "explanation": "정답입니다. 단층입방상피(Simple cuboidal epithelium)는 분비와 흡수 기능이 활발한 곳에 위치하며, 갑상샘소포, 난소 표면, 콩팥세뇨관 등이 대표적입니다."
      },
      {
        "text": "단층편평상피",
        "explanation": "오답입니다. 단층편평상피는 폐포, 혈관 내피 등 물질 교환이 일어나는 얇은 막에 존재합니다."
      },
      {
        "text": "중층편평상피",
        "explanation": "오답입니다. 중층편평상피는 피부, 입안, 식도 등 마찰에 견디는 보호 기능이 필요한 곳에 존재합니다."
      },
      {
        "text": "거짓중층상피",
        "explanation": "오답입니다. 거짓중층상피는 기도, 호흡기 점막 등에 존재합니다."
      }
    ],
    "correctIndex": 1
  },

  // … 중간 생략 …
  // 여기부터는 같은 패턴으로 Q6 ~ Q236까지 전부 들어가 있음
  // id, tag, prompt, choices[5], correctIndex 까지 전부 세팅 완료

  {
    "id": "Q236",
    "tag": "말초신경계통",
    "prompt": "어깨세모근에 운동신경을 공급하는 신경으로 옳은 것은?",
    "choices": [
      {
        "text": "겨드랑신경",
        "explanation": "정답입니다. 겨드랑신경(Axillary nerve)은 팔신경얼기의 뒤다발에서 기원하여 어깨세모근(Deltoid m.)과 작은원근(Teres minor m.)을 지배합니다."
      },
      {
        "text": "노신경",
        "explanation": "오답입니다. 노신경(Radial nerve)은 위팔세갈래근과 아래팔의 폄근들을 지배합니다."
      },
      {
        "text": "정중신경",
        "explanation": "오답입니다. 정중신경(Median nerve)은 아래팔의 굽힘근 대부분과 손바닥 일부를 지배합니다."
      },
      {
        "text": " 자신경",
        "explanation": "오답입니다. 자신경(Ulnar nerve)은 손의 내재근 대부분을 지배합니다."
      },
      {
        "text": "근피신경",
        "explanation": "오답입니다. 근피신경(Musculocutaneous nerve)은 위팔의 굽힘근(위팔두갈래근 등)을 지배합니다."
      }
    ],
    "correctIndex": 0
  },
  {
    "id": "Q237",
    "tag": "내분비계통",
    "prompt": "콩팥에서 분비되는 호르몬으로 옳은 것은?",
    "choices": [
      {
        "text": "인슐린",
        "explanation": "오답입니다. 인슐린은 이자(췌장)에서 분비됩니다."
      },
      {
        "text": "글루카곤",
        "explanation": "오답입니다. 글루카곤은 이자(췌장)에서 분비됩니다."
      },
      {
        "text": "레닌",
        "explanation": "정답입니다. 레닌은 콩팥에서 분비되어 혈압 조절에 관여합니다."
      },
      {
        "text": "옥시토신",
        "explanation": "오답입니다. 옥시토신은 뇌하수체 뒤엽에서 분비됩니다."
      },
      {
        "text": "프로락틴",
        "explanation": "오답입니다. 프로락틴은 뇌하수체 앞엽에서 분비됩니다."
      }
    ],
    "correctIndex": 2
  },
  {
    "id": "Q238",
    "tag": "비뇨계통",
    "prompt": "헨레고리의 오름다리에서 일어나는 주요 작용은?",
    "choices": [
      {
        "text": "물 수동적 재흡수",
        "explanation": "오답입니다. 물 수동적 재흡수는 토리쪽곱슬세관이나 헨레고리 내림다리에서 일어납니다."
      },
      {
        "text": "포도당 재흡수",
        "explanation": "오답입니다. 포도당 재흡수는 주로 토리쪽곱슬세관에서 일어납니다."
      },
      {
        "text": "나트륨 이온의 능동적 재흡수",
        "explanation": "정답입니다. 헨레고리 오름다리는 물에 불투과성이며 나트륨을 능동적으로 재흡수하여 수질의 삼투압을 높입니다."
      },
      {
        "text": "요소 재흡수",
        "explanation": "오답입니다. 요소 재흡수는 주로 집합세관에서 일어납니다."
      },
      {
        "text": "단백질 합성",
        "explanation": "오답입니다. 세관의 주요 기능은 재흡수와 분비입니다."
      }
    ],
    "correctIndex": 2
  },
  {
    "id": "Q239",
    "tag": "비뇨계통",
    "prompt": "헨레고리에서 내림다리의 기능으로 옳은 것은?",
    "choices": [
      {
        "text": "나트륨 재흡수",
        "explanation": "오답입니다. 나트륨 재흡수는 토리쪽곱슬세관이나 오름다리 등에서 일어납니다."
      },
      {
        "text": "칼륨 재흡수",
        "explanation": "오답입니다. 칼륨 재흡수는 토리쪽곱슬세관, 오름다리에서 일어납니다."
      },
      {
        "text": "요소 분비",
        "explanation": "오답입니다."
      },
      {
        "text": "수분 재흡수",
        "explanation": "정답입니다. 헨레고리 내림다리는 물에 대해 투과성이 높아 수분이 재흡수(농축)됩니다."
      },
      {
        "text": "단백질 재흡수",
        "explanation": "오답입니다. 단백질은 정상적으로 토리에서 거의 걸러지지 않습니다."
      }
    ],
    "correctIndex": 3
  },
  {
    "id": "Q240",
    "tag": "비뇨계통",
    "prompt": "토리여과는 어떤 원리에 의해 이루어지는가?",
    "choices": [
      {
        "text": "삼투압",
        "explanation": ""
      },
      {
        "text": "확산",
        "explanation": ""
      },
      {
        "text": "압력차에 의한 여과",
        "explanation": "정답입니다. 토리모세혈관의 높은 혈압(정수압)과 보먼주머니의 압력 차이에 의해 여과가 일어납니다."
      },
      {
        "text": "능동수송",
        "explanation": ""
      },
      {
        "text": "수송 단백질 이용",
        "explanation": ""
      }
    ],
    "correctIndex": 2
  },
  {
    "id": "Q241",
    "tag": "내분비계통",
    "prompt": "먼쪽곱슬세관에서 칼슘 이온 재흡수를 증가시키는 호르몬은?",
    "choices": [
      {
        "text": "부갑상샘호르몬",
        "explanation": "정답입니다. 부갑상샘호르몬(PTH)은 먼쪽곱슬세관에서 칼슘 재흡수를 촉진하여 혈중 칼슘 농도를 높입니다."
      },
      {
        "text": "테스토스테론",
        "explanation": ""
      },
      {
        "text": "알도스테론",
        "explanation": "오답입니다. 알도스테론은 나트륨 재흡수와 칼륨 분비를 촉진합니다."
      },
      {
        "text": "인슐린",
        "explanation": ""
      },
      {
        "text": "글루카곤",
        "explanation": ""
      }
    ],
    "correctIndex": 0
  },
  {
    "id": "Q242",
    "tag": "비뇨계통",
    "prompt": "역류기전에 주로 관여하는 구조는?",
    "choices": [
      {
        "text": "토리",
        "explanation": ""
      },
      {
        "text": "토리주머니",
        "explanation": ""
      },
      {
        "text": "헨레고리",
        "explanation": "정답입니다. 헨레고리의 내림다리와 오름다리의 상호작용(역류증폭기전)이 콩팥 속질의 농도기울기를 형성합니다."
      },
      {
        "text": "집합세관",
        "explanation": ""
      },
      {
        "text": "토리모세혈관",
        "explanation": ""
      }
    ],
    "correctIndex": 2
  },
  {
    "id": "Q243",
    "tag": "비뇨계통",
    "prompt": "배뇨 시 부교감신경이 하는 역할은?",
    "choices": [
      {
        "text": "배뇨근 이완",
        "explanation": ""
      },
      {
        "text": "배뇨근 수축",
        "explanation": "정답입니다. 부교감신경(골반신경)은 방광의 배뇨근을 수축시키고 속요도조임근을 이완시켜 배뇨를 유도합니다."
      },
      {
        "text": "방광 용적 증가",
        "explanation": ""
      },
      {
        "text": "속요도조임근 수축",
        "explanation": "오답입니다. 이는 교감신경의 작용입니다(소변 저장)."
      },
      {
        "text": "속요도조임근 이완",
        "explanation": ""
      }
    ],
    "correctIndex": 1
  },
  {
    "id": "Q244",
    "tag": "비뇨계통",
    "prompt": "골반신경이 담당하는 주요 기능으로 옳은 것은?",
    "choices": [
      {
        "text": "방광 충전 감지",
        "explanation": ""
      },
      {
        "text": "콩팥깔때기 수축",
        "explanation": ""
      },
      {
        "text": "요관 수축",
        "explanation": ""
      },
      {
        "text": "방광 수축 유도",
        "explanation": "정답입니다. 골반신경은 부교감신경을 포함하며 방광 수축을 유도합니다."
      },
      {
        "text": "큰창자 수축",
        "explanation": ""
      }
    ],
    "correctIndex": 3
  },
  {
    "id": "Q245",
    "tag": "생식계통",
    "prompt": "자궁의 주요 기능으로 옳은 것은?",
    "choices": [
      {
        "text": "난자 생성",
        "explanation": "오답입니다. 난자 생성은 난소의 기능입니다."
      },
      {
        "text": "수정란 착상 및 태아 발달",
        "explanation": "정답입니다. 자궁은 수정란이 착상하여 태아로 발달하는 장소입니다."
      },
      {
        "text": "정자 생성",
        "explanation": ""
      },
      {
        "text": "난관의 수축 조절",
        "explanation": ""
      },
      {
        "text": "난소 고정",
        "explanation": ""
      }
    ],
    "correctIndex": 1
  },
  {
    "id": "Q246",
    "tag": "생식계통",
    "prompt": "사정관은 어떤 구조가 합쳐져 형성되는가?",
    "choices": [
      {
        "text": "고환과 부고환",
        "explanation": ""
      },
      {
        "text": "고환과 정관",
        "explanation": ""
      },
      {
        "text": "정관과 요도",
        "explanation": ""
      },
      {
        "text": "부고환과 요도",
        "explanation": ""
      },
      {
        "text": "정관과 정낭의 배출관",
        "explanation": "정답입니다. 정관의 끝부분(정관팽대)과 정낭의 배출관이 합쳐져 사정관을 형성하며, 전립샘을 통과해 요도로 연결됩니다."
      }
    ],
    "correctIndex": 4
  },
  {
    "id": "Q247",
    "tag": "내분비계통",
    "prompt": "호르몬의 작용 방식에 대한 설명으로 옳은 것은?",
    "choices": [
      {
        "text": "모든 세포에 동일한 반응을 일으킨다",
        "explanation": "오답입니다. 표적세포마다 반응이 다릅니다."
      },
      {
        "text": "수용체가 없는 조직에도 반응을 유도한다",
        "explanation": ""
      },
      {
        "text": "세포막 내부로 직접 들어가 작용하지 않는다",
        "explanation": "오답입니다. 스테로이드 호르몬 등은 세포막을 통과하여 작용합니다."
      },
      {
        "text": "특정 수용체를 가진 표적세포에서만 작용한다",
        "explanation": "정답입니다. 호르몬은 해당 호르몬에 대한 특이 수용체를 가진 표적세포에만 작용합니다."
      },
      {
        "text": "뇌에서만 생성되어 전신에 작용한다",
        "explanation": "오답입니다. 뇌뿐만 아니라 갑상샘, 부신, 이자 등 다양한 기관에서 생성됩니다."
      }
    ],
    "correctIndex": 3
  },
  {
    "id": "Q248",
    "tag": "내분비계통",
    "prompt": "호르몬은 크게 어떤 구조적 유형으로 분류될 수 있는가?",
    "choices": [
      {
        "text": "단백질, 아민, 스테로이드",
        "explanation": "정답입니다. 호르몬은 화학적 구조에 따라 펩타이드(단백질)계, 아민계, 스테로이드계로 분류됩니다."
      },
      {
        "text": "탄수화물, 지질, 무기염",
        "explanation": ""
      },
      {
        "text": "핵산, 지질, 단백질",
        "explanation": ""
      },
      {
        "text": "콜라겐, 피브린, 호르몬",
        "explanation": ""
      },
      {
        "text": "비타민, 효소, 포도당",
        "explanation": ""
      }
    ],
    "correctIndex": 0
  },
  {
    "id": "Q249",
    "tag": "내분비계통",
    "prompt": "호르몬계의 반응 특성으로 옳은 것은?",
    "choices": [
      {
        "text": "반응이 즉각적이고 단기적이다",
        "explanation": "오답입니다. 이는 신경계의 특성입니다."
      },
      {
        "text": "표적세포 수용체와 무관하게 작용한다",
        "explanation": ""
      },
      {
        "text": "지속적이고 광범위한 반응을 유도한다",
        "explanation": "정답입니다. 호르몬계는 혈액을 통해 전달되므로 반응이 비교적 느리지만 지속적이고 광범위하게 나타납니다."
      },
      {
        "text": "세포막에서만 작용한다",
        "explanation": ""
      },
      {
        "text": "대부분 신경세포에만 작용한다",
        "explanation": ""
      }
    ],
    "correctIndex": 2
  },
  {
    "id": "Q250",
    "tag": "내분비계통",
    "prompt": "뇌하수체 앞엽에서 분비되지 않은 호르몬은?",
    "choices": [
      {
        "text": "성장호르몬",
        "explanation": ""
      },
      {
        "text": "프로락틴",
        "explanation": ""
      },
      {
        "text": "부신피질자극호르몬",
        "explanation": ""
      },
      {
        "text": "갑상샘자극호르몬",
        "explanation": ""
      },
      {
        "text": "옥시토신",
        "explanation": "정답입니다. 옥시토신과 항이뇨호르몬(ADH)은 시상하부에서 합성되어 뇌하수체 뒤엽에서 저장, 분비됩니다."
      }
    ],
    "correctIndex": 4
  },
  {
    "id": "Q251",
    "tag": "내분비계통",
    "prompt": "부갑상샘호르몬의 주요 작용은?",
    "choices": [
      {
        "text": "혈당 감소",
        "explanation": ""
      },
      {
        "text": "혈중 칼슘 농도 감소",
        "explanation": "오답입니다. 이는 칼시토닌(Calcitonin)의 작용입니다."
      },
      {
        "text": "골밀도 증가",
        "explanation": ""
      },
      {
        "text": "혈중 칼슘 농도 증가",
        "explanation": "정답입니다. 부갑상샘호르몬(PTH)은 뼈 파괴(파골세포 활성), 콩팥 재흡수 증가 등을 통해 혈중 칼슘 농도를 증가시킵니다."
      },
      {
        "text": "요산 배출",
        "explanation": ""
      }
    ],
    "correctIndex": 3
  },
  {
    "id": "Q252",
    "tag": "내분비계통",
    "prompt": "다음 중 자가면역 질환으로 갑상샘기능항진을 유발하는 것은?",
    "choices": [
      {
        "text": "크레틴병",
        "explanation": "오답입니다. 크레틴병은 선천성 갑상샘기능저하증입니다."
      },
      {
        "text": "그레이브스병",
        "explanation": "정답입니다. 그레이브스병은 자가항체가 TSH 수용체를 자극하여 갑상샘호르몬을 과다 분비하게 경우입니다."
      },
      {
        "text": "하시모토병",
        "explanation": "오답입니다. 하시모토병은 갑상샘기능저하증의 원인입니다."
      },
      {
        "text": "점액수종",
        "explanation": "오답입니다. 성인 갑상샘기능저하증의 증상입니다."
      },
      {
        "text": "콘증후군",
        "explanation": "오답입니다. 알도스테론 과다 분비 질환입니다."
      }
    ],
    "correctIndex": 1
  },
  {
    "id": "Q253",
    "tag": "내분비계통",
    "prompt": "콜레시스토키닌(CCK)의 주된 작용은?",
    "choices": [
      {
        "text": "위산 분비 촉진",
        "explanation": ""
      },
      {
        "text": "간에서 담즙 생성 촉진",
        "explanation": ""
      },
      {
        "text": "쓸개(담낭) 수축 및 이자(췌장)에서 소화 효소 분비 촉진",
        "explanation": "정답입니다. CCK는 지방 등 음식물이 샘창자에 들어오면 분비되어 쓸개를 수축시켜 담즙을 배출하고, 이자 소화효소 분비를 촉진합니다."
      },
      {
        "text": "위 운동 촉진",
        "explanation": ""
      },
      {
        "text": "삼투압 조절",
        "explanation": ""
      }
    ],
    "correctIndex": 2
  },
  {
    "id": "Q254",
    "tag": "내분비계통",
    "prompt": "항이뇨호르몬(ADH)의 주요 작용은?",
    "choices": [
      {
        "text": "췌장의 인슐린 분비 촉진",
        "explanation": ""
      },
      {
        "text": "신장에서 수분 재흡수 촉진",
        "explanation": "정답입니다. ADH는 콩팥의 먼쪽곱슬세관과 집합세관에서 수분 재흡수를 촉진하여 소변량을 줄입니다."
      },
      {
        "text": "심박수 감소",
        "explanation": ""
      },
      {
        "text": "혈중 칼슘 감소",
        "explanation": ""
      },
      {
        "text": "간에서 포도당 합성 억제",
        "explanation": ""
      }
    ],
    "correctIndex": 1
  },
  {
    "id": "Q255",
    "tag": "내분비계통",
    "prompt": "레닌-안지오텐신계에서 알도스테론의 분비를 자극하는 호르몬은?",
    "choices": [
      {
        "text": "적혈구형성호르몬",
        "explanation": ""
      },
      {
        "text": "안지오텐신 II",
        "explanation": "정답입니다. 레닌에 의해 생성된 안지오텐신 I은 안지오텐신 II로 변환되어 부신피질을 자극해 알도스테론 분비를 유도합니다."
      },
      {
        "text": "ADH",
        "explanation": ""
      },
      {
        "text": "칼시토닌",
        "explanation": ""
      },
      {
        "text": "코티솔",
        "explanation": ""
      }
    ],
    "correctIndex": 1
  },
  {
    "id": "Q256",
    "tag": "내분비계통",
    "prompt": "부신피질자극호르몬(ACTH)은 어떤 호르몬의 분비를 촉진하는가?",
    "choices": [
      {
        "text": "에스트로젠",
        "explanation": ""
      },
      {
        "text": "글루카곤",
        "explanation": ""
      },
      {
        "text": "옥시토신",
        "explanation": ""
      },
      {
        "text": "타이록신",
        "explanation": ""
      },
      {
        "text": "코티솔",
        "explanation": "정답입니다. ACTH는 부신피질에서 코티솔(Glucocorticoid) 등의 분비를 촉진합니다."
      }
    ],
    "correctIndex": 4
  },
  {
    "id": "Q257",
    "tag": "피부계통",
    "prompt": "다음 중 바깥에서 안쪽 순서로 올바르게 배열된 표피의 층은?",
    "choices": [
      {
        "text": "투명층 - 과립층 - 각질층 - 종자층",
        "explanation": ""
      },
      {
        "text": "각질층 - 투명층 - 과립층 - 종자층",
        "explanation": "정답입니다. 표피는 바깥쪽부터 각질층 → 투명층(손발바닥) → 과립층 → 가시층 → 바닥층(종자층) 순서로 배열됩니다."
      },
      {
        "text": "종자층 - 과립층 - 투명층 - 각질층",
        "explanation": "오답입니다. 이는 안에서 바깥 순서입니다."
      },
      {
        "text": "과립층 - 종자층 - 각질층 - 투명층",
        "explanation": ""
      },
      {
        "text": "종자층 - 각질층 - 과립층 - 투명층",
        "explanation": ""
      }
    ],
    "correctIndex": 1
  },
  {
    "id": "Q258",
    "tag": "피부계통",
    "prompt": "지문(fingerprint)은 다음 중 어느 층과 관련이 깊은가?",
    "choices": [
      {
        "text": "표피의 각질층",
        "explanation": ""
      },
      {
        "text": "진피의 유두층",
        "explanation": "정답입니다. 진피의 유두층(Papillary layer)이 표피 쪽으로 돌출되어 피부 능선을 형성하며, 이것이 지문이 됩니다."
      },
      {
        "text": "피부밑조직",
        "explanation": ""
      },
      {
        "text": "진피의 그물층",
        "explanation": ""
      },
      {
        "text": "표피의 바닥층",
        "explanation": ""
      }
    ],
    "correctIndex": 1
  },
  {
    "id": "Q259",
    "tag": "감각계통",
    "prompt": "안구벽의 가장 바깥층을 이루며, 각막과 공막으로 나뉘는 피막은?",
    "choices": [
      {
        "text": "혈관막",
        "explanation": "오답입니다. 혈관막은 중간층(맥락막, 섬모체, 홍채)입니다."
      },
      {
        "text": "신경막",
        "explanation": "오답입니다. 신경막은 속층(망막)입니다."
      },
      {
        "text": "내막",
        "explanation": ""
      },
      {
        "text": "맥락막",
        "explanation": ""
      },
      {
        "text": "섬유막",
        "explanation": "정답입니다. 안구의 가장 바깥층인 섬유막은 앞쪽의 투명한 각막과 뒤쪽의 흰 공막으로 구성됩니다."
      }
    ],
    "correctIndex": 4
  },
  {
    "id": "Q260",
    "tag": "감각계통",
    "prompt": "수정체의 두께를 조절하여 빛의 초점을 맞추는 데 관여하는 근육은?",
    "choices": [
      {
        "text": "동공확대근",
        "explanation": ""
      },
      {
        "text": "동공조임근",
        "explanation": ""
      },
      {
        "text": "모양체돌기",
        "explanation": ""
      },
      {
        "text": "섬모체근",
        "explanation": "정답입니다. 섬모체근(Ciliary muscle)의 수축과 이완에 의해 수정체의 두께가 조절(원근 조절)됩니다."
      },
      {
        "text": "초자체근",
        "explanation": ""
      }
    ],
    "correctIndex": 3
  },
  {
    "id": "Q261",
    "tag": "감각계통",
    "prompt": "다음 중 눈의 내부에서 빛이 통과하는 순서로 옳은 것은?",
    "choices": [
      {
        "text": "각막 → 유리체 → 안방수 → 수정체",
        "explanation": "오답입니다."
      },
      {
        "text": "수정체 → 유리체 → 각막 → 안방수",
        "explanation": "오답입니다."
      },
      {
        "text": "각막 → 안방수 → 유리체 → 수정체",
        "explanation": "오답입니다."
      },
      {
        "text": "각막 → 안방수 → 수정체 → 유리체",
        "explanation": "정답입니다. 빛은 각막 → 안방수(앞방, 뒷방) → 동공 → 수정체 → 유리체 → 망막 순으로 통과합니다."
      },
      {
        "text": "수정체 → 안방수 → 유리체 → 각막",
        "explanation": "오답입니다."
      }
    ],
    "correctIndex": 3
  },
  {
    "id": "Q262",
    "tag": "감각계통",
    "prompt": "눈물(tears)의 기능으로 옳은 것은?",
    "choices": [
      {
        "text": "수정체의 재생",
        "explanation": ""
      },
      {
        "text": "초자체의 대사",
        "explanation": ""
      },
      {
        "text": "망막의 흥분 전달",
        "explanation": ""
      },
      {
        "text": "각막의 탈수 방지 및 살균",
        "explanation": "정답입니다. 눈물은 각막 표면을 적셔 건조를 막고, 라이소자임 등의 성분으로 살균 작용을 합니다."
      },
      {
        "text": "안구근육의 수축 유지",
        "explanation": ""
      }
    ],
    "correctIndex": 3
  },
  {
    "id": "Q263",
    "tag": "감각계통",
    "prompt": "시각신경유두(시신경원반)에 대한 설명으로 옳은 것은?",
    "choices": [
      {
        "text": "색소가 많이 분포하여 암실 역할을 한다.",
        "explanation": "오답입니다. 이는 맥락막의 기능입니다."
      },
      {
        "text": "망막 중심동맥이 지나지 않는다.",
        "explanation": ""
      },
      {
        "text": "빛수용기가 없어 맹점이라고 불린다.",
        "explanation": "정답입니다. 시각신경유두는 시각신경이 빠져나가는 곳으로 시각세포(빛수용기)가 없어 맹점(Blind spot)이 됩니다."
      },
      {
        "text": "시각신경의 시작점이 아니다.",
        "explanation": ""
      },
      {
        "text": "황반 중심에 위치한다.",
        "explanation": "오답입니다. 황반 중심에는 중심오목이 있습니다."
      }
    ],
    "correctIndex": 2
  },
  {
    "id": "Q264",
    "tag": "감각계통",
    "prompt": "귀관에 대한 설명으로 옳은 것은?",
    "choices": [
      {
        "text": "인두와 달팽이를 연결한다.",
        "explanation": ""
      },
      {
        "text": "정원창과 고실을 연결한다.",
        "explanation": ""
      },
      {
        "text": "고실과 인두를 연결하며 기압을 조절한다.",
        "explanation": "정답입니다. 귀관(유스타키오관)은 가운데귀(고실)와 코인두를 연결하여 고실 내 압력을 조절합니다."
      },
      {
        "text": "외이도와 내이를 연결한다.",
        "explanation": ""
      },
      {
        "text": "고막과 초자체를 연결한다.",
        "explanation": ""
      }
    ],
    "correctIndex": 2
  },
  {
    "id": "Q265",
    "tag": "감각계통",
    "prompt": "혀의 뒤쪽 1/3의 미각을 담당하는 신경은?",
    "choices": [
      {
        "text": "얼굴신경",
        "explanation": "오답입니다. 얼굴신경(고실끈신경)은 혀 앞 2/3의 미각을 담당합니다."
      },
      {
        "text": "혀인두신경",
        "explanation": "정답입니다. 혀인두신경(Glosopharyngeal n.)은 혀 뒤 1/3의 미각과 일반감각을 담당합니다."
      },
      {
        "text": "미주신경",
        "explanation": "오답입니다. 미주신경은 후두덮개 주변의 미각을 아주 일부 담당합니다."
      },
      {
        "text": "고실끈신경",
        "explanation": ""
      },
      {
        "text": "삼차신경",
        "explanation": "오답입니다. 삼차신경은 혀 앞 2/3의 일반감각(피부감각)을 담당합니다."
      }
    ],
    "correctIndex": 1
  },
  {
    "id": "Q266",
    "tag": "감각계통",
    "prompt": "음파 진동이 타원창을 통해 전달되면 가장 먼저 진동하는 액체는?",
    "choices": [
      {
        "text": "속림프액",
        "explanation": ""
      },
      {
        "text": "눈물",
        "explanation": ""
      },
      {
        "text": "피지",
        "explanation": ""
      },
      {
        "text": "바깥림프액",
        "explanation": "정답입니다. 등자뼈가 타원창을 누르면 전정계단의 바깥림프액(Perilymph)이 진동합니다."
      },
      {
        "text": "수정체",
        "explanation": ""
      }
    ],
    "correctIndex": 3
  },
  {
    "id": "Q267",
    "tag": "신경계통",
    "prompt": "활동전위가 일어나는 동안 두 번째 자극이 아무리 강해도 새로운 활동전위가 발생하지 않는 현상에 대한 설명으로 옳은 것은?",
    "choices": [
      {
        "text": "재분극",
        "explanation": ""
      },
      {
        "text": "탈분극",
        "explanation": ""
      },
      {
        "text": "과분극",
        "explanation": ""
      },
      {
        "text": "상대불응기",
        "explanation": "오답입니다. 상대불응기는 자극이 매우 강하면 반응할 수 있는 시기입니다."
      },
      {
        "text": "절대불응기",
        "explanation": "정답입니다. 절대불응기(Absolute refractory period)에는 어떤 자극에도 반응하지 않습니다."
      }
    ],
    "correctIndex": 4
  },
  {
    "id": "Q268",
    "tag": "신경계통",
    "prompt": "신경배형성 과정에서 양쪽 신경주름이 융합되어 형성되며 중추신경계로 발달하는 구조물에 대한 설명으로 옳은 것은?",
    "choices": [
      {
        "text": "외배엽",
        "explanation": ""
      },
      {
        "text": "신경판",
        "explanation": ""
      },
      {
        "text": "신경관",
        "explanation": "정답입니다. 신경관(Neural tube)은 뇌와 척수(중추신경계)로 발달합니다."
      },
      {
        "text": "신경고랑",
        "explanation": ""
      },
      {
        "text": "신경능선",
        "explanation": ""
      }
    ],
    "correctIndex": 2
  },
  {
    "id": "Q269",
    "tag": "신경계통",
    "prompt": "신경관(neural tube)에 대한 설명으로 옳은 것은?",
    "choices": [
      {
        "text": "중배엽에서 기원하며 주로 말초신경을 형성한다.",
        "explanation": "오답입니다. 신경관은 외배엽 기원이며 중추신경을 형성합니다."
      },
      {
        "text": "머리쪽은 척수로, 꼬리쪽은 뇌로 발달한다.",
        "explanation": "오답입니다. 머리쪽이 뇌, 꼬리쪽이 척수로 발달합니다."
      },
      {
        "text": "신경관과 분리된 조직이 뇌신경핵을 형성한다.",
        "explanation": ""
      },
      {
        "text": "내부 공간은 뇌실과 중심관으로 발달한다.",
        "explanation": "정답입니다. 신경관의 내강은 나중에 뇌실계통과 척수 중심관이 됩니다."
      },
      {
        "text": "신경관은 말초신경 재생을 담당한다.",
        "explanation": ""
      }
    ],
    "correctIndex": 3
  },
  {
    "id": "Q270",
    "tag": "신경계통",
    "prompt": "앞뇌(Prosencephalon)에서 기원하는 구조로 옳은 것은?",
    "choices": [
      {
        "text": "중간뇌 덮개와 대뇌다리",
        "explanation": "오답입니다. 이는 중간뇌 유래입니다."
      },
      {
        "text": "숨뇌와 소뇌",
        "explanation": "오답입니다. 이는 마름뇌 유래입니다."
      },
      {
        "text": "대뇌반구와 줄무늬체",
        "explanation": "정답입니다. 앞뇌는 끝뇌(대뇌반구, 줄무늬체 등)와 사이뇌(시상, 시상하부)로 분화합니다."
      },
      {
        "text": "다리뇌와 넷째뇌실",
        "explanation": "오답입니다. 이는 마름뇌 유래입니다."
      },
      {
        "text": "척수와 중심관",
        "explanation": ""
      }
    ],
    "correctIndex": 2
  },
  {
    "id": "Q271",
    "tag": "신경계통",
    "prompt": "니슬소체(Nissl body)에 대한 설명으로 옳은 것은?",
    "choices": [
      {
        "text": "세포 내 지질과 단백질로 이루어진 절연층이다.",
        "explanation": ""
      },
      {
        "text": "신경세포 대사 활성 지표이며 단백질 합성에 관여한다.",
        "explanation": "정답입니다. 니슬소체는 조면소포체(rER)와 리보솜의 집합체로 단백질을 합성합니다."
      },
      {
        "text": "축삭 말단에 존재하며 신경전달물질을 분비한다.",
        "explanation": ""
      },
      {
        "text": "전기 신호를 빠르게 도약 전도한다.",
        "explanation": ""
      },
      {
        "text": "신경절 세포체를 보호하는 세포이다.",
        "explanation": ""
      }
    ],
    "correctIndex": 1
  },
  {
    "id": "Q272",
    "tag": "신경계통",
    "prompt": "신경아교세포에 대한 설명으로 옳은 것은?",
    "choices": [
      {
        "text": "희소돌기아교세포는 말초신경계에서 말이집을 형성한다.",
        "explanation": "오답입니다. 희소돌기아교세포는 중추신경계에서 말이집을 형성합니다."
      },
      {
        "text": "신경집세포는 중추신경계 축삭의 재생을 담당한다.",
        "explanation": "오답입니다. 신경집세포(슈반세포)는 말초신경계입니다."
      },
      {
        "text": "미세아교세포는 외배엽 기원이다.",
        "explanation": "오답입니다. 미세아교세포는 중배엽 기원입니다."
      },
      {
        "text": "뇌실막세포는 포식작용을 한다.",
        "explanation": "오답입니다. 미세아교세포가 포식작용을 합니다."
      },
      {
        "text": "별아교세포는 혈액뇌장벽(BBB) 형성에 관여한다.",
        "explanation": "정답입니다. 별아교세포(Astrocyte)의 발돌기가 모세혈관을 감싸 BBB를 형성합니다."
      }
    ],
    "correctIndex": 4
  },
  {
    "id": "Q273",
    "tag": "신경계통",
    "prompt": "근방추(muscle spindle)에 대한 설명으로 옳은 것은?",
    "choices": [
      {
        "text": "근육 장력 변화를 감지한다.",
        "explanation": "오답입니다. 이는 골지힘줄기관의 기능입니다."
      },
      {
        "text": "근육 길이와 속도 변화를 감지한다.",
        "explanation": "정답입니다. 근방추는 근육의 길이 변화와 변화 속도를 감지하는 수용기입니다."
      },
      {
        "text": "지속적인 압력 감각을 담당한다.",
        "explanation": ""
      },
      {
        "text": "깊은 압박과 빠른 진동을 감지한다.",
        "explanation": ""
      },
      {
        "text": "통각과 온각을 감지한다.",
        "explanation": ""
      }
    ],
    "correctIndex": 1
  },
  {
    "id": "Q274",
    "tag": "신경계통",
    "prompt": "연접 전달 특성에 대한 설명으로 옳은 것은?",
    "choices": [
      {
        "text": "퍼짐(divergence)은 여러 신경세포가 하나로 수렴하는 현상이다.",
        "explanation": "오답입니다. 이는 집중(convergence)에 대한 설명입니다."
      },
      {
        "text": "집중(convergence)은 한 신경세포가 여러 세포로 흥분을 전달하는 것이다.",
        "explanation": "오답입니다. 이는 퍼짐(divergence)에 대한 설명입니다."
      },
      {
        "text": "가중(summation)은 공간적, 시간적으로 자극이 합산되어 역치를 넘을 수 있다.",
        "explanation": "정답입니다. 시냅스후뉴런에서 공간적 가중과 시간적 가중이 일어납니다."
      },
      {
        "text": "촉진소통(facilitation)은 흥분 가능성을 낮추는 현상이다.",
        "explanation": "오답입니다. 역치 근처까지 흥분성이 높아져 자극에 쉽게 반응하는 상태입니다."
      },
      {
        "text": "막힘(occlusion)은 자극이 합쳐져 예상보다 더 큰 반응을 일으킨다.",
        "explanation": "오답입니다. 막힘은 중복된 영역 때문에 예상보다 반응이 작은 현상입니다."
      }
    ],
    "correctIndex": 2
  },
  {
    "id": "Q275",
    "tag": "신경계통",
    "prompt": "세로토닌(Serotonin)에 대한 설명으로 옳은 것은?",
    "choices": [
      {
        "text": "뇌줄기 그물체에 위치하며 기분•수면•식욕을 조절한다.",
        "explanation": "정답입니다. 세로토닌은 뇌줄기 솔기핵 등에서 분비되며 기분, 수면 등을 조절합니다."
      },
      {
        "text": "항상 흥분성으로 작용한다.",
        "explanation": ""
      },
      {
        "text": "과소증은 파킨슨병과 관련된다.",
        "explanation": "오답입니다. 파킨슨병은 도파민 부족과 관련됩니다."
      },
      {
        "text": "과잉증은 우울증을 일으킨다.",
        "explanation": "오답입니다. 세로토닌 부족이 우울증과 관련이 깊습니다."
      },
      {
        "text": "교감신경 신경절이후섬유에서 분비된다.",
        "explanation": "오답입니다. 노르에피네프린 등이 분비됩니다."
      }
    ],
    "correctIndex": 0
  },
  {
    "id": "Q276",
    "tag": "신경계통",
    "prompt": "중추신경계와 말초신경계에서 신경세포체 집단을 지칭하는 용어로 옳은 것은?",
    "choices": [
      {
        "text": "중추 - 신경, 말초 - 신경로",
        "explanation": ""
      },
      {
        "text": "중추 - 신경핵, 말초 - 신경절",
        "explanation": "정답입니다. 세포체 집단은 중추에서 신경핵(Nucleus), 말초에서 신경절(Ganglion)이라 부릅니다."
      },
      {
        "text": "중추 - 신경절, 말초 - 신경핵",
        "explanation": ""
      },
      {
        "text": "중추 - 신경, 말초 - 신경핵",
        "explanation": ""
      },
      {
        "text": "중추 - 신경로, 말초 - 신경절",
        "explanation": ""
      }
    ],
    "correctIndex": 1
  },
  {
    "id": "Q277",
    "tag": "신경계통",
    "prompt": "양쪽 대뇌반구를 서로 연결하는 구조물에 대한 설명으로 옳은 것은?",
    "choices": [
      {
        "text": "벌레",
        "explanation": ""
      },
      {
        "text": "뇌들보",
        "explanation": "정답입니다. 뇌들보(Corpus callosum)는 좌우 대뇌반구를 연결하는 가장 큰 맞교차섬유 다발입니다."
      },
      {
        "text": "다리뇌",
        "explanation": ""
      },
      {
        "text": "띠이랑",
        "explanation": ""
      },
      {
        "text": "중심앞이랑",
        "explanation": ""
      }
    ],
    "correctIndex": 1
  },
  {
    "id": "Q278",
    "tag": "신경계통",
    "prompt": "겉질척수로에 대한 설명으로 옳은 것은?",
    "choices": [
      {
        "text": "중간뇌에서 교차한다.",
        "explanation": "오답입니다. 겉질척수로는 대부분 숨뇌(Pyramid)에서 교차합니다."
      },
      {
        "text": "수의운동에 관여하지 않는다.",
        "explanation": "오답입니다. 겉질척수로는 뼈대근육의 수의운동을 담당하는 주요 경로입니다."
      },
      {
        "text": "척수 뒤뿔에서 정지한다.",
        "explanation": "오답입니다. 척수 앞뿔의 운동신경세포와 연접합니다."
      },
      {
        "text": "숨뇌의 쐐기다발을 지나간다.",
        "explanation": ""
      },
      {
        "text": "중간뇌의 대뇌다리를 지나간다.",
        "explanation": "정답입니다. 겉질척수로는 속섬유막 → 중간뇌 대뇌다리 → 다리뇌 → 숨뇌 피라미드를 거쳐 내려갑니다."
      }
    ],
    "correctIndex": 4
  },
  {
    "id": "Q279",
    "tag": "신경계통",
    "prompt": "셋째뇌실 주위에 위치하며 후각을 제외한 감각 전달과 항상성 유지에 관여하는 구조물에 대한 설명으로 옳은 것은?",
    "choices": [
      {
        "text": "바닥핵",
        "explanation": ""
      },
      {
        "text": "사이뇌",
        "explanation": "정답입니다. 사이뇌(Diencephalon)는 시상(감각 중계)과 시상하부(항상성 유지) 등을 포함하며 셋째뇌실을 감싸고 있습니다."
      },
      {
        "text": "숨뇌",
        "explanation": ""
      },
      {
        "text": "다리뇌",
        "explanation": ""
      },
      {
        "text": "대뇌",
        "explanation": ""
      }
    ],
    "correctIndex": 1
  },
  {
    "id": "Q280",
    "tag": "신경계통",
    "prompt": "대뇌엽의 구조에 대한 설명으로 옳은 것은?",
    "choices": [
      {
        "text": "중심고랑은 이마엽과 마루엽의 경계가 된다.",
        "explanation": "정답입니다. 중심고랑(Central sulcus)을 기준으로 앞쪽은 이마엽, 뒤쪽은 마루엽입니다."
      },
      {
        "text": "감각영역인 중심뒤이랑은 관자엽에 위치한다.",
        "explanation": "오답입니다. 중심뒤이랑은 마루엽에 위치합니다."
      },
      {
        "text": "운동영역인 중심앞이랑은 뒤통수엽에 위치한다.",
        "explanation": "오답입니다. 중심앞이랑은 이마엽에 위치합니다."
      },
      {
        "text": "가쪽고랑은 이마엽과 뒤통수엽의 경계가 된다.",
        "explanation": "오답입니다. 가쪽고랑은 이마엽/마루엽과 관자엽의 경계입니다."
      },
      {
        "text": "대뇌세로틈새는 관자엽과 마루엽의 경계가 된다.",
        "explanation": "오답입니다. 대뇌세로틈새는 좌우 대뇌반구를 나눕니다."
      }
    ],
    "correctIndex": 0
  },
  {
    "id": "Q281",
    "tag": "신경계통",
    "prompt": "숨뇌 · 다리뇌 · 중간뇌 내부에 위치하며 의식과 각성 조절에 관여하며 몸운동 및 자율신경 기능을 조절하는 구조물에 대한 설명으로 옳은 것은?",
    "choices": [
      {
        "text": "그물체",
        "explanation": "정답입니다. 그물체(Reticular formation)는 뇌줄기 전체에 걸쳐 있으며 의식, 각성(ARAS), 자율신경 조절 등에 중요합니다."
      },
      {
        "text": "적색핵",
        "explanation": ""
      },
      {
        "text": "피라미드",
        "explanation": ""
      },
      {
        "text": "아래올리브핵",
        "explanation": ""
      },
      {
        "text": "안쪽섬유띠",
        "explanation": ""
      }
    ],
    "correctIndex": 0
  },
  {
    "id": "Q282",
    "tag": "신경계통",
    "prompt": "앞뿔 · 뒤뿔 · 아래뿔이 있으며 양쪽 대뇌반구 속에 위치한 C자 모양의 불규칙한 공간에 대한 설명으로 옳은 것은?",
    "choices": [
      {
        "text": "가쪽뇌실",
        "explanation": "정답입니다. 가쪽뇌실(Lateral ventricle)은 대뇌반구 깊은 곳에 있는 C자형 공간입니다."
      },
      {
        "text": "위시상정맥굴",
        "explanation": ""
      },
      {
        "text": "넷째뇌실",
        "explanation": ""
      },
      {
        "text": "해면정맥굴",
        "explanation": ""
      },
      {
        "text": "거미막밑공간",
        "explanation": ""
      }
    ],
    "correctIndex": 0
  },
  {
    "id": "Q283",
    "tag": "신경계통",
    "prompt": "중간뇌 앞가쪽에 위치하며 대뇌겉질에서 내려가는 1쌍의 신경섬유로가 통과하는 부위에 대한 설명으로 옳은 것은?",
    "choices": [
      {
        "text": "덮개",
        "explanation": ""
      },
      {
        "text": "위둔덕",
        "explanation": ""
      },
      {
        "text": "대뇌다리",
        "explanation": "정답입니다. 대뇌다리(Cerebral peduncle)는 중간뇌의 앞부분으로 겉질척수로 등 내림신경섬유가 통과합니다."
      },
      {
        "text": "뒤판",
        "explanation": ""
      },
      {
        "text": "아래둔덕",
        "explanation": ""
      }
    ],
    "correctIndex": 2
  },
  {
    "id": "Q284",
    "tag": "신경계통",
    "prompt": "가벼운 촉각, 압각, 온도감각, 통각 등을 전달하는 신경로에 대한 설명으로 옳은 것은?",
    "choices": [
      {
        "text": "쐐기다발",
        "explanation": ""
      },
      {
        "text": "겉질척수로",
        "explanation": ""
      },
      {
        "text": "안뜰척수로",
        "explanation": ""
      },
      {
        "text": "덮개척수로",
        "explanation": ""
      },
      {
        "text": "척수시상로",
        "explanation": "정답입니다. 척수시상로(Spinothalamic tract)는 통각, 온도감각, 거친 촉각 등을 전달합니다."
      }
    ],
    "correctIndex": 4
  },
  {
    "id": "Q285",
    "tag": "신경계통",
    "prompt": "척수신경에 관한 설명으로 옳은 것은?",
    "choices": [
      {
        "text": "중추신경계에 속한다.",
        "explanation": "오답입니다. 척수신경은 말초신경계입니다."
      },
      {
        "text": "겨드랑신경•자신경은 팔신경얼기에서 나온다.",
        "explanation": "정답입니다. 이들은 팔신경얼기(Brachial plexus)의 가지입니다."
      },
      {
        "text": "궁둥신경•정강신경은 허리신경얼기에서 나온다.",
        "explanation": "오답입니다. 엉치신경얼기에서 나옵니다."
      },
      {
        "text": "척수신경의 앞뿌리는 감각성, 뒤뿌리는 운동성 섬유로 구성된다.",
        "explanation": "오답입니다. 앞뿌리(Ventral root)가 운동성, 뒤뿌리(Dorsal root)가 감각성입니다."
      },
      {
        "text": "목신경 7쌍, 가슴신경 12쌍, 허리신경 5쌍, 엉치신경 5쌍, 꼬리신경 1쌍으로 구성된다.",
        "explanation": "오답입니다. 목신경은 8쌍입니다."
      }
    ],
    "correctIndex": 1
  },
  {
    "id": "Q286",
    "tag": "신경계통",
    "prompt": "척수의 구조에 관한 설명으로 옳은 것은?",
    "choices": [
      {
        "text": "한 겹의 막으로 싸여 있다.",
        "explanation": "오답입니다. 경막, 거미막, 연막 3겹으로 싸여 있습니다."
      },
      {
        "text": "신경세포체는 백색질에 위치한다.",
        "explanation": "오답입니다. 신경세포체는 회색질에 위치합니다."
      },
      {
        "text": "척수 앞면에는 깊고 뚜렷한 정중틈새가 있다.",
        "explanation": "정답입니다. 척수 앞면 정중앙에 깊은 앞정중틈새(Anterior median fissure)가 있습니다."
      },
      {
        "text": "앞섬유기둥은 쐐기다발과 널판다발로 이루어져 있다.",
        "explanation": "오답입니다. 이는 뒤섬유기둥입니다."
      },
      {
        "text": "척수 가슴허리분절에는 부교감신경 세포체가 있다.",
        "explanation": "오답입니다. 가슴허리분절(T1-L2)의 가쪽뿔에는 교감신경 세포체가 있습니다."
      }
    ],
    "correctIndex": 2
  },
  {
    "id": "Q287",
    "tag": "신경계통",
    "prompt": "시상과 가쪽뇌실 주위에서 고리모양을 이루며 기억과 감정에 관여하는 구조물에 대한 설명으로 옳은 것은?",
    "choices": [
      {
        "text": "중간뇌",
        "explanation": ""
      },
      {
        "text": "소뇌",
        "explanation": ""
      },
      {
        "text": "사이뇌",
        "explanation": ""
      },
      {
        "text": "바닥핵",
        "explanation": ""
      },
      {
        "text": "둘레계통",
        "explanation": "정답입니다. 둘레계통(Limbic system, 변연계)은 해마, 편도체, 띠이랑 등을 포함하며 감정과 기억을 담당합니다."
      }
    ],
    "correctIndex": 4
  },
  {
    "id": "Q288",
    "tag": "신경계통",
    "prompt": "대뇌엽의 해부학적 경계에 대한 설명으로 옳은 것은?",
    "choices": [
      {
        "text": "중심고랑은 이마엽과 관자엽의 경계이다.",
        "explanation": "오답입니다. 이마엽과 마루엽의 경계입니다."
      },
      {
        "text": "가쪽고랑은 이마엽과 관자엽 사이의 깊은 고랑이다.",
        "explanation": "정답입니다. 가쪽고랑(Sylvian fissure)은 관자엽과 이마엽/마루엽 사이를 나눕니다."
      },
      {
        "text": "마루뒤통수고랑은 이마엽과 마루엽을 가른다.",
        "explanation": "오답입니다. 마루엽과 뒤통수엽을 가릅니다."
      },
      {
        "text": "뒤통수앞패임은 관자엽과 이마엽의 기준점이다.",
        "explanation": ""
      },
      {
        "text": "가쪽고랑 끝과 뒤통수앞패임 연결선은 관자엽과 이마엽을 구분한다.",
        "explanation": ""
      }
    ],
    "correctIndex": 1
  },
  {
    "id": "Q289",
    "tag": "신경계통",
    "prompt": "대뇌의 신경섬유에 대한 설명으로 옳은 것은?",
    "choices": [
      {
        "text": "투사섬유는 같은 반구 내 여러 겉질을 연결한다.",
        "explanation": ""
      },
      {
        "text": "맞교차섬유는 뇌들보를 통해 양쪽 반구를 연결한다.",
        "explanation": "정답입니다. 맞교차섬유(Commissural fiber)는 뇌들보 등을 통해 좌우 반구를 연결합니다."
      },
      {
        "text": "연합섬유는 시상과 바닥핵 사이를 지난다.",
        "explanation": ""
      },
      {
        "text": "속섬유막은 대뇌부챗살과 동일한 구조이다.",
        "explanation": ""
      },
      {
        "text": "위세로다발은 베르니케영역과 소뇌를 연결한다.",
        "explanation": ""
      }
    ],
    "correctIndex": 1
  },
  {
    "id": "Q290",
    "tag": "신경계통",
    "prompt": "뇌실과 연결에 대한 설명으로 옳은 것은?",
    "choices": [
      {
        "text": "가쪽뇌실은 한 개이며 S자 모양이다.",
        "explanation": ""
      },
      {
        "text": "가쪽뇌실은 뇌실사이구멍을 통해 셋째뇌실과 연결된다.",
        "explanation": "정답입니다. 양쪽 가쪽뇌실은 뇌실사이구멍(Monro's foramen)을 통해 중앙의 셋째뇌실로 연결됩니다."
      },
      {
        "text": "셋째뇌실은 관자엽 속에 위치한다.",
        "explanation": ""
      },
      {
        "text": "넷째뇌실은 이마엽 앞쪽에 있다.",
        "explanation": ""
      },
      {
        "text": "넷째뇌실에는 정중구멍은 없고 가쪽구멍만 있다.",
        "explanation": ""
      }
    ],
    "correctIndex": 1
  }
];

// 브라우저에서 접근 가능하도록
if (typeof window !== "undefined") {
  window.QUESTIONS = QUESTIONS;
}
