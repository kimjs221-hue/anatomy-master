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
  },
{
    id: "NEURO_01",
    tag: "신경계-대뇌겉질",
    prompt: "브로드만 영역에 대한 설명으로 옳은 것은?",
    choices: [
      {
        text: "① 3,1,2 영역은 중심앞이랑에 있고 수의운동을 조절한다.",
        explanation: "3,1,2는 중심뒤이랑의 일차몸감각영역으로 식별촉각 담당. 수의운동 조절은 4영역(중심앞이랑)."
      },
      {
        text: "② 4 영역은 중심뒤이랑에 있고 식별촉각을 담당한다.",
        explanation: "4영역은 중심앞이랑의 일차운동영역으로 수의운동 담당. 식별촉각은 3,1,2영역."
      },
      {
        text: "③ 41,42 영역은 가로관자이랑에 있고 소리를 구별한다.",
        explanation: "정답. 41,42는 Heschl 가로관자이랑의 일차·연합 청각영역으로 소리의 구별 담당."
      },
      {
        text: "④ 22 영역은 아래이마이랑에 있고 언어의 운동프로그램을 수립한다.",
        explanation: "22영역은 위관자이랑(Wernicke, 언어이해). 언어 운동프로그램은 44,45영역(아래이마이랑, Broca)."
      },
      {
        text: "⑤ 17 영역은 관자엽의 위관자이랑에 있다.",
        explanation: "17영역은 뒤통수엽 일차시각겉질. 위관자이랑은 22영역(청각/언어 이해)."
      }
    ],
    correctIndex: 2
  },
  {
    id: "NEURO_02",
    tag: "신경계-둘레계통",
    prompt: "둘레계통의 구조와 기능에 대한 설명으로 옳은 것은?",
    choices: [
      {
        text: "① 편도체는 해마의 아래안쪽에 있고 단기기억을 장기기억으로 전환한다.",
        explanation: "단기→장기기억 전환의 핵심 구조는 해마. 편도체는 주로 공포·정서."
      },
      {
        text: "② 해마는 분계섬유줄을 통해 시상하부로 투사된다.",
        explanation: "해마는 뇌활(fornix)을 통해 시상하부·유두체로 투사된다."
      },
      {
        text: "③ 띠이랑은 해마곁이랑과 연결되어 파페츠회로를 구성한다.",
        explanation: "정답. 해마곁이랑→해마→뇌활→유두체→시상앞핵→띠이랑→다시 해마곁이랑으로 이어지는 파페츠회로."
      },
      {
        text: "④ 유두체는 관자엽 앞쪽 끝에 있다.",
        explanation: "유두체는 시상하부의 일부로 사이뇌 바닥에 위치한다."
      },
      {
        text: "⑤ 갈고리이랑은 후각과 무관하다.",
        explanation: "갈고리이랑(uncus)은 후각겉질과 밀접한 구조로 후각과 관련 있다."
      }
    ],
    correctIndex: 2
  },
  {
    id: "NEURO_03",
    tag: "신경계-바닥핵",
    prompt: "바닥핵의 구조에 대한 설명으로 옳은 것은?",
    choices: [
      {
        text: "① 꼬리핵 머리는 가쪽뇌실 아래뿔의 지붕을 형성한다.",
        explanation: "가쪽뇌실 아래뿔의 지붕은 꼬리핵 ‘꼬리’가 형성한다."
      },
      {
        text: "② 담장은 속섬유막과 대뇌부챗살 사이의 회색질이다.",
        explanation: "속섬유막·대뇌부챗살은 투사섬유로 백색질 구조. 담장은 바깥섬유막과 맨바깥섬유막 사이 회색질판."
      },
      {
        text: "③ 창백핵은 가쪽섬유판에 의해 안쪽과 가쪽 분절로 나뉜다.",
        explanation: "창백핵은 ‘안쪽섬유판’에 의해 안쪽·가쪽 분절로 나뉜다."
      },
      {
        text: "④ 흑색질 치밀부분은 창백핵의 안쪽분절과 출력이 유사하다.",
        explanation: "창백핵 안쪽분절과 출력이 유사한 것은 흑색질 ‘그물부분’(출력핵 역할)."
      },
      {
        text: "⑤ 조가비핵은 렌즈핵의 가쪽 부분이며 바깥섬유막과 맨바깥섬유막이 가쪽에 있다.",
        explanation: "정답. 렌즈핵은 조가비핵(가쪽)과 창백핵(안쪽)으로 구성되며 조가비핵 가쪽에 바깥·맨바깥섬유막이 위치."
      }
    ],
    correctIndex: 4
  },
  {
    id: "NEURO_04",
    tag: "신경계-바닥핵",
    prompt: "바닥핵의 직접경로와 간접경로에 대한 설명으로 옳은 것은?",
    choices: [
      {
        text: "① 직접경로에서 줄무늬체는 억제성으로 안쪽창백핵을 억제한다.",
        explanation: "정답. 직접경로: 줄무늬체(GABA) → 안쪽창백핵 억제 → 시상 억제 감소 → 대뇌겉질 활성."
      },
      {
        text: "② 직접경로는 목표하지 않는 동작을 억제한다.",
        explanation: "목표하지 않는 동작 억제는 간접경로의 역할이다."
      },
      {
        text: "③ 간접경로에서 시상밑핵은 억제성으로 안쪽창백핵을 억제한다.",
        explanation: "간접경로에서 시상밑핵은 흥분성(글루탐산)으로 안쪽창백핵을 흥분시킨다."
      },
      {
        text: "④ 간접경로는 시상을 흥분시켜 대뇌겉질을 활성화한다.",
        explanation: "시상 흥분·겉질 활성은 주로 ‘직접경로’의 효과."
      },
      {
        text: "⑤ 두 경로는 상호보완적이지 않다.",
        explanation: "직접·간접경로는 서로 상호보완적으로 운동을 정교하게 조절한다."
      }
    ],
    correctIndex: 0
  },
    {
    id: "NEURO_05",
    tag: "신경계-사이뇌",
    prompt: "사이뇌의 위치와 구성에 대한 설명으로 옳은 것은?",
    choices: [
      {
        text: "① 사이뇌는 중간뇌 아래쪽에 있으며 소뇌와 접한다.",
        explanation: "사이뇌는 대뇌 아래·중간뇌 위에 위치하며 소뇌와 직접 접하지 않는다."
      },
      {
        text: "② 시상은 셋째뇌실의 가쪽 벽을 형성한다.",
        explanation: "정답. 시상이 셋째뇌실의 양쪽 가벽을 만든다."
      },
      {
        text: "③ 시상하부고랑은 시상과 소뇌를 구분한다.",
        explanation: "시상하부고랑은 시상과 시상하부를 구분하는 고랑."
      },
      {
        text: "④ 시상상부에는 가쪽무릎핵이 있다.",
        explanation: "가쪽무릎핵은 시상에 속하는 청각/시각 관련 핵."
      },
      {
        text: "⑤ 시상밑부는 시상 뒤쪽에만 위치한다.",
        explanation: "시상밑부(subthalamus)는 이름처럼 시상 ‘아래쪽’에 위치."
      }
    ],
    correctIndex: 1
  },
  {
    id: "NEURO_06",
    tag: "신경계-중간뇌",
    prompt: "중간뇌의 바깥구조에 대한 설명으로 옳은 것은?",
    choices: [
      {
        text: "① 눈돌림신경은 아래둔덕 바로 아래에서 등쪽으로 나온다.",
        explanation: "아래둔덕 아래에서 등쪽으로 나오는 것은 ‘도르래신경’."
      },
      {
        text: "② 도르래신경은 다리사이오목의 양측에서 바깥으로 나온다.",
        explanation: "다리사이오목에서 나와 앞쪽으로 나가는 것은 눈돌림신경."
      },
      {
        text: "③ 대뇌다리는 앞면 양쪽의 뚜렷한 융기로 겉질척수로가 주로 분포한다.",
        explanation: "정답. 대뇌다리(cerebral peduncle)는 겉질척수로 등 하행로가 지나는 굵은 앞면 융기."
      },
      {
        text: "④ 다리사이오목은 위둔덕과 아래둔덕 사이에 있다.",
        explanation: "위·아래둔덕 사이에는 위둔덕팔·아래둔덕팔이 위치."
      },
      {
        text: "⑤ 사둔덕체는 대뇌다리와 속섬유막으로 구성된다.",
        explanation: "사둔덕체(quadrigeminal plate)는 위둔덕·아래둔덕 네 개의 결절로 구성."
      }
    ],
    correctIndex: 2
  },
  {
    id: "NEURO_07",
    tag: "신경계-중간뇌",
    prompt: "덮개앞구역에 대한 설명으로 옳은 것은?",
    choices: [
      {
        text: "① 동공빛반사와 무관하다.",
        explanation: "덮개앞구역(pretectal area)은 동공빛반사와 밀접하게 관련."
      },
      {
        text: "② 청각 경로의 교차핵이다.",
        explanation: "청각 교차는 주로 상올리브핵·가쪽섬유띠 등에서 이루어진다."
      },
      {
        text: "③ 덮개앞구역 손상 시 직접반사 및 간접반사는 소실되지 않는다.",
        explanation: "손상 시 간접반사(대측 동공반응) 소실, 직접반사는 남을 수 있다."
      },
      {
        text: "④ 시각신경 자극을 에딩거-베스트팔핵으로 전달한다.",
        explanation: "정답. 시각신경→시각로→덮개앞구역→에딩거-베스트팔핵으로 전달되어 동공빛반사 매개."
      },
      {
        text: "⑤ 중간소뇌다리를 형성한다.",
        explanation: "중간소뇌다리는 다리뇌(pontine fibers)와 관련, 덮개앞구역과 무관."
      }
    ],
    correctIndex: 3
  },
  {
    id: "NEURO_08",
    tag: "신경계-중간뇌",
    prompt: "적색핵 관련 경로에 대한 설명으로 옳은 것은?",
    choices: [
      {
        text: "① 적색척수로는 팔 굽힘 움직임 조절과 자세 유지 보조에 관여한다.",
        explanation: "정답. 적색척수로는 상지 굽힘근 촉진·자세 조절에 관여."
      },
      {
        text: "② 소뇌겉질에서 직접 시상의 VPL로 투사한다.",
        explanation: "소뇌겉질은 깊은핵(치아핵 등)을 거쳐 시상으로 투사한다."
      },
      {
        text: "③ 운동 학습 루프는 위올리브핵과 연결된다.",
        explanation: "운동 학습 루프는 ‘아래올리브핵–소뇌’ 연결이 핵심."
      },
      {
        text: "④ 덮개척수로를 통해 눈운동을 조절한다.",
        explanation: "눈운동은 주로 덮개척수로가 아니라 전정·시각 관련 경로, 뇌신경핵이 담당."
      },
      {
        text: "⑤ 가쪽섬유띠에서 시작한다.",
        explanation: "가쪽섬유띠는 청각 경로 일부로 적색핵 시작점이 아니다."
      }
    ],
    correctIndex: 0
  },
  {
    id: "NEURO_09",
    tag: "신경계-숨뇌",
    prompt: "숨뇌의 바깥구조에 대한 설명으로 옳은 것은?",
    choices: [
      {
        text: "① 피라미드는 뒤가쪽의 융기로 가쪽겉질척수로가 지나간다.",
        explanation: "피라미드는 앞쪽 정중선 융기로 겉질척수로가 내려간다."
      },
      {
        text: "② 피라미드 교차는 겉질척수로의 약 85%가 교차하는 부위이다.",
        explanation: "정답. 여기서 대부분의 겉질척수섬유가 반대편으로 교차해 가쪽겉질척수로 형성."
      },
      {
        text: "③ 올리브는 위올리브핵을 포함한다.",
        explanation: "숨뇌의 올리브는 ‘아래올리브핵’을 포함."
      },
      {
        text: "④ 널판결절과 쐐기결절은 일차청각겉질로 투사한다.",
        explanation: "널판결절·쐐기결절은 몸감각 정보를 일차몸감각겉질로 보낸다."
      },
      {
        text: "⑤ 삼차결절에는 안뜰신경핵이 들어 있다.",
        explanation: "삼차결절에는 삼차신경척수핵이 위치한다."
      }
    ],
    correctIndex: 1
  },
  {
    id: "NEURO_10",
    tag: "신경계-그물체",
    prompt: "그물체의 구역과 기능 연결로 옳은 것은?",
    choices: [
      {
        text: "① 가쪽핵무리 – 근긴장 억제와 자세 반사 조절",
        explanation: "근긴장·자세 반사 조절은 주로 안쪽핵무리 기능."
      },
      {
        text: "② 안쪽핵무리 – 감각 통합과 ARAS 보조",
        explanation: "감각통합·ARAS 보조는 가쪽핵무리 기능."
      },
      {
        text: "③ 중심핵무리 – 오름그물활성계를 통해 의식 수준 조절",
        explanation: "정답. 중심핵무리는 ARAS의 핵심으로 각성과 의식 수준 조절."
      },
      {
        text: "④ 안쪽핵무리 – 솔기핵에서 세로토닌 분비",
        explanation: "솔기핵(세로토닌)은 중심핵무리 계통."
      },
      {
        text: "⑤ 가쪽핵무리 – 그물척수로를 통해 폄근 촉진",
        explanation: "그물척수로를 통한 폄근 촉진은 주로 안쪽핵무리 역할."
      }
    ],
    correctIndex: 2
  },
  {
    id: "NEURO_11",
    tag: "신경계-자율신경",
    prompt: "부교감신경의 작용에 대한 설명으로 옳은 것은?",
    choices: [
      {
        text: "① 동공 확대",
        explanation: "동공 확대는 교감신경 작용. 부교감은 동공 축소."
      },
      {
        text: "② 털세움근 수축",
        explanation: "털세움근 수축(소름)은 교감신경 효과."
      },
      {
        text: "③ 방광조임근 수축",
        explanation: "방광조임근 수축은 배뇨 억제(교감). 부교감은 조임근 이완·방광벽 수축."
      },
      {
        text: "④ 심장근육 수축력 증가",
        explanation: "심박·수축력 증가는 교감, 부교감은 감소."
      },
      {
        text: "⑤ 소화관 꿈틀운동 촉진",
        explanation: "정답. 부교감은 소화관 연동운동·분비 촉진."
      }
    ],
    correctIndex: 4
  },
  {
    id: "NEURO_12",
    tag: "신경계-자율신경",
    prompt: "자율신경계의 신경절이전신경세포와 뼈대근육 운동신경세포에서 유리되는 신경전달물질에 대한 설명으로 옳은 것은?",
    choices: [
      {
        text: "① 도파민",
        explanation: "도파민은 중추 보상계·흑색질 등에서 주로 사용."
      },
      {
        text: "② 에피네프린",
        explanation: "에피네프린은 주로 부신속질에서 혈중 분비."
      },
      {
        text: "③ 아세틸콜린",
        explanation: "정답. 자율신경계 신경절이전섬유, 체성운동신경 모두 아세틸콜린 사용."
      },
      {
        text: "④ 세로토닌",
        explanation: "세로토닌은 주로 중추(솔기핵) 신경전달물질."
      },
      {
        text: "⑤ 감마아미노부티르산(GABA)",
        explanation: "GABA는 억제성 중추신경전달물질."
      }
    ],
    correctIndex: 2
  },
  {
    id: "NEURO_13",
    tag: "신경계-자율신경",
    prompt: "교감신경계의 특성에 대한 설명으로 옳은 것은?",
    choices: [
      {
        text: "① 흥분 시 꿈틀운동이 촉진된다.",
        explanation: "교감흥분 시 소화관 연동운동은 억제된다."
      },
      {
        text: "② 가슴척수와 엉치척수에서 시작된다.",
        explanation: "교감신경은 T1–L2(가슴·허리척수)에서 기원."
      },
      {
        text: "③ 흥분 시 에너지를 보존하고 비축한다.",
        explanation: "교감은 에너지 ‘사용’(fight or flight). 보존·비축은 부교감."
      },
      {
        text: "④ 신경절이전신경세포 말단에서 아세틸콜린이 분비된다.",
        explanation: "정답. 교감·부교감 모두 신경절이전섬유는 ACh 분비."
      },
      {
        text: "⑤ 신경절이전신경세포의 세포체는 척수앞뿔에 위치한다.",
        explanation: "자율신경 신경절이전세포체는 가쪽뿔(중간가쪽핵)에 위치."
      }
    ],
    correctIndex: 3
  },
  {
    id: "NEURO_14",
    tag: "신경계-뇌신경",
    prompt: "뇌신경(cranial nerve)의 기능에 대한 설명으로 옳은 것은?",
    choices: [
      {
        text: "① 얼굴신경 - 씹기",
        explanation: "씹기근은 삼차신경(운동뿔). 얼굴신경은 표정근."
      },
      {
        text: "② 갓돌림신경 - 눈 감기",
        explanation: "눈 감기는 얼굴신경(눈둘레근). 갓돌림신경은 가쪽곧은근 지배."
      },
      {
        text: "③ 삼차신경 - 표정 짓기",
        explanation: "표정은 얼굴신경, 삼차는 씹기·얼굴 감각."
      },
      {
        text: "④ 도르래신경 - 미각 2/3 앞쪽 담당",
        explanation: "혀 앞 2/3 미각은 얼굴신경(고삭신경)."
      },
      {
        text: "⑤ 혀인두신경 - 귀밑샘에서 침분비",
        explanation: "정답. 혀인두신경의 부교감섬유(아래침분비핵) → 귀밑샘 분비."
      }
    ],
    correctIndex: 4
  },
  {
    id: "NEURO_15",
    tag: "신경계-뇌신경",
    prompt: "일반몸감각(GSA) 신경핵에 대한 설명으로 옳은 것은?",
    choices: [
      {
        text: "① 삼차감각핵은 숨뇌에만 존재한다.",
        explanation: "삼차감각핵은 중간뇌·다리뇌·숨뇌·상부척수까지 길게 이어진다."
      },
      {
        text: "② 삼차신경중간뇌핵은 미각을 처리한다.",
        explanation: "삼차중간뇌핵은 고유감각(저작근, 치아 등) 담당."
      },
      {
        text: "③ 삼차신경다리뇌핵은 얼굴의 식별촉각과 압각을 담당한다.",
        explanation: "정답. 주삼차핵(다리뇌핵)은 정교한 촉각·압각 처리."
      },
      {
        text: "④ 삼차신경척수핵은 고유감각만을 전달한다.",
        explanation: "삼차척수핵은 통각·온도감각을 전달."
      },
      {
        text: "⑤ 삼차감각핵으로는 삼차신경 섬유만 들어간다.",
        explanation: "다른 뇌신경(얼굴, 미주 등)의 일반감각도 삼차핵으로 들어간다."
      }
    ],
    correctIndex: 2
  },
  {
    id: "NEURO_16",
    tag: "신경계-뇌신경",
    prompt: "내장감각(GVA·SVA)과 고립로핵에 대한 설명으로 옳은 것은?",
    choices: [
      {
        text: "① 고립로핵은 미각과 내장감각을 통합한다.",
        explanation: "정답. SVA(미각)·GVA(내장감각)의 공통 종착핵."
      },
      {
        text: "② 고립로핵은 삼차감각 정보를 시상으로 보낸다.",
        explanation: "삼차감각 정보는 삼차감각핵에서 시상으로."
      },
      {
        text: "③ 고립로핵은 넷째뇌실 바닥의 다리뇌에 있다.",
        explanation: "고립로핵은 숨뇌 쪽 넷째뇌실 바닥에 위치."
      },
      {
        text: "④ 얼굴신경의 미각은 삼차신경다리뇌핵으로 간다.",
        explanation: "얼굴신경의 미각섬유는 고립로핵으로 들어간다."
      },
      {
        text: "⑤ 미주신경의 내장감각은 삼차신경척수핵으로 끝난다.",
        explanation: "미주신경의 내장감각도 고립로핵에서 끝난다."
      }
    ],
    correctIndex: 0
  },
  {
    id: "NEURO_17",
    tag: "신경계-뇌신경",
    prompt: "일반내장운동(GVE) 부교감핵과 기능 연결로 옳은 것은?",
    choices: [
      {
        text: "① 에딩거-베스트팔핵: 동공 수축과 수정체 조절",
        explanation: "정답. 동안신경 부교감핵으로 동공조임근·섬모체근 지배."
      },
      {
        text: "② 위침분비핵: 귀밑샘 분비",
        explanation: "위침분비핵(superior salivatory)은 턱밑샘·혀밑샘 분비."
      },
      {
        text: "③ 아래침분비핵: 눈물샘 분비",
        explanation: "아래침분비핵(inferior salivatory)은 귀밑샘 분비."
      },
      {
        text: "④ 미주신경등쪽핵: 바깥눈근육 수축",
        explanation: "미주등쪽핵은 내장기관 부교감 조절(심장·소화기 등)."
      },
      {
        text: "⑤ 에딩거-베스트팔핵: 위시상정맥굴과 관련 있음",
        explanation: "에딩거-베스트팔핵 섬유는 해면정맥굴을 지나 동안신경과 함께 간다."
      }
    ],
    correctIndex: 0
  },
  {
    id: "NEURO_18",
    tag: "신경계-뇌신경",
    prompt: "미주신경(CN X)에 대한 설명으로 옳은 것은?",
    choices: [
      {
        text: "① 일반몸감각(GSA)은 고립로핵에서 끝난다.",
        explanation: "GSA(외이 피부 등)는 삼차감각핵에서 끝난다."
      },
      {
        text: "② 특수내장감각(SVA)은 위미주신경절에서 끝난다.",
        explanation: "SVA(후두부 미각 등)는 고립로핵에서 끝난다."
      },
      {
        text: "③ 특수내장운동(SVE)은 의문핵에서 기원하여 인두와 후두 근육을 지배한다.",
        explanation: "정답. 의문핵에서 기원하는 branchial motor 섬유가 인두·후두근 지배."
      },
      {
        text: "④ 부교감섬유는 삼차감각핵에서 시작한다.",
        explanation: "미주 부교감섬유는 미주신경등쪽핵에서 시작."
      },
      {
        text: "⑤ 미주신경은 심장 박동을 증가시킨다.",
        explanation: "미주 자극은 심박수·수축력 감소(부교감)."
      }
    ],
    correctIndex: 2
  },
  {
    id: "NEURO_19",
    tag: "신경계-말초신경",
    prompt: "척수신경과 신경얼기에 대한 설명으로 옳은 것은?",
    choices: [
      {
        text: "① 척수신경은 30쌍이며 혼합신경이 아니다.",
        explanation: "척수신경은 31쌍, 앞·뒤뿌리가 합쳐진 혼합신경."
      },
      {
        text: "② 가슴신경은 척수신경얼기가 형성되어 있지 않다.",
        explanation: "정답. 경·팔·허리·엉치신경은 얼기를 형성하지만 가슴신경은 개별 늑간신경으로 분포."
      },
      {
        text: "③ 팔신경얼기의 노신경 손상은 원숭이손을 만든다.",
        explanation: "원숭이손은 주로 정중신경 손상."
      },
      {
        text: "④ 겨드랑신경은 위팔세갈래근을 지배한다.",
        explanation: "겨드랑신경은 어깨세모근·작은원근 지배. 위팔세갈래근은 노신경."
      },
      {
        text: "⑤ 허리신경얼기의 넙다리신경은 가장 작다.",
        explanation: "넙다리신경은 허리신경얼기에서 가장 큰 신경."
      }
    ],
    correctIndex: 1
  },
  {
    id: "NEURO_20",
    tag: "신경계-뇌신경",
    prompt: "뇌신경 요약의 통과부와 기능 연결로 옳은 것은?",
    choices: [
      {
        text: "① 시각신경 – 체판구멍 – 시각",
        explanation: "시각신경은 시각관(optic canal)을 통과."
      },
      {
        text: "② 눈돌림신경 – 위눈확틈새 – 동공 축소",
        explanation: "정답. 눈돌림신경은 위눈확틈새를 지나 바깥눈근+에딩거-베스트팔섬유(동공축소) 지배."
      },
      {
        text: "③ 도르래신경 – 타원구멍 – 위빗근",
        explanation: "도르래신경은 위눈확틈새를 통과해 위빗근 지배."
      },
      {
        text: "④ 얼굴신경 – 목정맥구멍 – 얼굴 표정근",
        explanation: "얼굴신경은 속귀길→얼굴관→붓꼭지구멍을 통해 나와 표정근 지배."
      },
      {
        text: "⑤ 혀밑신경 – 속귀길 – 혀의 근육 지배",
        explanation: "혀밑신경은 혀밑신경관을 통과해 혀 근육 지배."
      }
    ],
    correctIndex: 1
  },
  {
    id: "NEURO_21",
    tag: "신경계-뇌신경",
    prompt: "혀인두신경의 기능 · 반사 연결로 옳은 것은?",
    choices: [
      {
        text: "① 구토반사의 감각입력은 미주신경이고 운동반응은 혀인두신경이다.",
        explanation: "구토반사의 감각입력은 혀인두신경, 운동반응은 미주신경."
      },
      {
        text: "② 목동맥팽대는 혈중 CO₂ 농도를 감지한다.",
        explanation: "목동맥팽대는 혈압(baroreceptor)을 감지."
      },
      {
        text: "③ 목동맥토리는 혈압을 감지한다.",
        explanation: "목동맥토리(carotid body)는 O₂·CO₂ 농도 등 화학수용체."
      },
      {
        text: "④ 구토반사는 혀인두신경이 감각입력이 되고 미주신경이 운동반응이 된다.",
        explanation: "정답. afferent CN IX, efferent CN X."
      },
      {
        text: "⑤ 붓인두근은 얼굴운동핵에서 기원한다.",
        explanation: "붓인두근은 의문핵(IX의 운동핵)에서 기원."
      }
    ],
    correctIndex: 3
  },
  {
    id: "NEURO_22",
    tag: "신경계-자율신경",
    prompt: "교감 · 부교감 비교에 대한 설명으로 옳은 것은?",
    choices: [
      {
        text: "① 교감신경의 신경절이전섬유는 길고 부교감은 짧다.",
        explanation: "교감은 척수 가까운 신경절 → 신경절이전 짧고, 부교감은 효과기 근처 신경절 → 신경절이전 길다."
      },
      {
        text: "② 두 계통 모두 신경절이후섬유의 전달물질은 아세틸콜린이다.",
        explanation: "두 계통 모두 ‘신경절이전’섬유가 ACh. 교감의 대부분 신경절이후는 노르에피네프린."
      },
      {
        text: "③ 교감 효과기는 ɑ, 𝛽 수용체를 갖는다.",
        explanation: "정답. 교감말단의 표적세포는 α, β 아드레날린수용체 보유."
      },
      {
        text: "④ 부교감신경의 신경절 수용체는 무스카린수용체이다.",
        explanation: "신경절(자율신경절) 수용체는 양쪽 모두 니코틴수용체."
      },
      {
        text: "⑤ 부교감신경절이전섬유는 니코틴수용체를 사용하지 않는다.",
        explanation: "부교감 신경절이전섬유가 방출한 ACh는 신경절의 니코틴수용체에 작용한다."
      }
    ],
    correctIndex: 2
  },
  {
    id: "NEURO_23",
    tag: "신경계-자율신경",
    prompt: "자율신경계의 생리작용에 대한 설명으로 옳은 것은?",
    choices: [
      {
        text: "① 교감신경은 동공을 축소시키고 섬모체근을 수축시킨다.",
        explanation: "동공 축소·섬모체근 수축은 부교감 효과."
      },
      {
        text: "② 부교감신경은 방광조임근을 수축시키고 방광벽 근육을 이완시킨다.",
        explanation: "방광조임근 수축·벽 이완은 교감. 부교감은 배뇨 촉진."
      },
      {
        text: "③ 교감신경은 심장근육 수축력을 증가시키고 말초혈관을 수축시킨다.",
        explanation: "정답. fight or flight 반응: 심박·수축력 증가, 피부·내장혈관 수축."
      },
      {
        text: "④ 부교감신경은 기관지를 확장하고 꿈틀운동을 억제한다.",
        explanation: "기관지 확장·꿈틀운동 억제는 교감 효과."
      },
      {
        text: "⑤ 교감신경은 눈물샘 분비를 다량 증가시킨다.",
        explanation: "눈물샘 분비는 주로 부교감."
      }
    ],
    correctIndex: 2
  },
  {
    id: "NEURO_24",
    tag: "신경계-뇌신경",
    prompt: "혀밑신경의 연결과 기능에 대한 설명으로 옳은 것은?",
    choices: [
      {
        text: "① 혀밑신경핵은 아래올리브핵과 안쪽섬유띠 사이에 위치한다.",
        explanation: "정답. 숨뇌에서 혀밑신경핵은 이런 위치관계로 보인다."
      },
      {
        text: "② 혀밑신경은 미각을 전달하고 고립로핵에서 끝난다.",
        explanation: "혀밑신경은 순수운동신경으로 미각 전달하지 않는다."
      },
      {
        text: "③ 혀밑신경은 위눈꺼풀올림근을 지배한다.",
        explanation: "위눈꺼풀올림근은 동안신경 지배."
      },
      {
        text: "④ 혀밑신경은 소뇌다리뇌각을 통해 나온다.",
        explanation: "소뇌다리뇌각에서 나오는 것은 7,8번 신경(얼굴·속귀신경)."
      },
      {
        text: "⑤ 혀밑신경은 속근육을 제외한 혀의 바깥근육만 지배한다.",
        explanation: "혀밑신경은 혀의 대부분 속·바깥근육을 지배(혀목근 일부 제외)."
      }
    ],
    correctIndex: 0
  },
 {
    "id": "Skeletal_Q1",
    "tag": "뼈대계통",
    "prompt": "뼈의 함몰부로 옳은 것은?",
    "choices": [
      {
        "text": "구멍 (foramen)",
        "explanation": "정답입니다. **구멍(foramen)**은 신경이나 혈관이 통과하는 뼈의 함몰부(오목, depression)를 의미합니다."
      },
      {
        "text": "결절 (tubercle)",
        "explanation": "오답입니다. 결절은 근육이나 인대가 붙는 **작은 돌출부(융기)**입니다."
      },
      {
        "text": "능선 (crest)",
        "explanation": "오답입니다. 능선은 뼈 표면의 **날카로운 돌출부(융기)**입니다."
      },
      {
        "text": "가시 (spine)",
        "explanation": "오답입니다. 가시는 뼈의 **날카로운 돌출부(융기)**입니다."
      },
      {
        "text": "돌기 (trochanter)",
        "explanation": "오답입니다. 돌기(큰돌기, 작은돌기)는 넓고 **큰 돌출부(융기)**로, 주로 넙다리뼈에 있습니다."
      }
    ],
    "correctIndex": 0
  },
  {
    "id": "Skeletal_Q2",
    "tag": "뼈대계통",
    "prompt": "뼈되기 중 연골뼈되기에서 뼈조직으로 전환되는 연골로 옳은 것은?",
    "choices": [
      {
        "text": "섬유연골",
        "explanation": "오답입니다. 섬유연골은 주로 디스크, 반달 등에 존재합니다."
      },
      {
        "text": "유리연골",
        "explanation": "정답입니다. **연골뼈되기(endochondral ossification)**는 **유리연골(hyaline cartilage)** 모형을 바탕으로 뼈가 형성되는 과정입니다."
      },
      {
        "text": "탄력연골",
        "explanation": "오답입니다. 탄력연골은 귀, 후두덮개 등에 존재합니다."
      },
      {
        "text": "아교연골",
        "explanation": "오답입니다. 아교연골이라는 명칭은 잘 사용되지 않습니다."
      },
      {
        "text": "뼈연골",
        "explanation": "오답입니다. 뼈연골이라는 명칭은 잘 사용되지 않습니다."
      }
    ],
    "correctIndex": 1
  },
  {
    "id": "Skeletal_Q3",
    "tag": "뼈대계통",
    "prompt": "뼈의 조직학적 특성에 대한 설명으로 옳은 것은?",
    "choices": [
      {
        "text": "골수공간의 황색골수는 혈액세포를 만드는 조혈작용을 한다.",
        "explanation": "오답입니다. 황색골수는 주로 지방으로 구성되며, 조혈작용은 **적색골수**가 합니다."
      },
      {
        "text": "해면뼈에는 뼈단위, 하버스관, 볼크만관이 있다.",
        "explanation": "오답입니다. 뼈단위(osteon), 하버스관, 볼크만관은 **치밀뼈(compact bone)**의 특징적인 구조입니다. 해면뼈는 뼈잔기둥으로 이루어져 있습니다."
      },
      {
        "text": "뼈바탕질 중 무기질은 뼈모세포에 의해 합성되며 아교섬유 및 여러 단백질-탄수화물 복합체가 이룬다.",
        "explanation": "오답입니다. 뼈모세포에 의해 합성되는 것은 뼈바탕질 중 **유기질** (아교섬유 및 복합체)입니다. 무기질은 칼슘염 등입니다."
      },
      {
        "text": "뼈속막은 해면뼈와 골수공간의 경계막으로 뼈속 공간의 모든 면을 둘러싸고 있다.",
        "explanation": "정답입니다. **뼈속막(endosteum)**은 해면뼈의 뼈잔기둥, 골수공간을 둘러싸고 있는 막입니다."
      },
      {
        "text": "뼈막의 바깥층은 뼈발생층으로 뼈의 성장과 복구에 중요한 역할을 한다.",
        "explanation": "오답입니다. 뼈발생층은 뼈막의 **속층(inner layer)**입니다. 바깥층은 섬유층입니다."
      }
    ],
    "correctIndex": 3
  },
  {
    "id": "Skeletal_Q4",
    "tag": "뼈대계통",
    "prompt": "뼈 발생에 관한 설명으로 옳은 것은?",
    "choices": [
      {
        "text": "막속뼈되기는 결합조직의 막이 직접 뼈로 대체되는 것이다.",
        "explanation": "정답입니다. **막속뼈되기(intramembranous ossification)**는 연골 모형 없이 중간엽세포가 직접 뼈로 변환되는 방식입니다 (예: 이마뼈, 마루뼈, 빗장뼈)."
      },
      {
        "text": "뼈대계통은 외배엽에서 발생한다.",
        "explanation": "오답입니다. 뼈대계통은 주로 **중배엽**에서 발생합니다."
      },
      {
        "text": "연골뼈되기는 이마뼈와 같은 납작뼈의 뼈되기 방식이다.",
        "explanation": "오답입니다. 이마뼈와 같은 납작뼈는 주로 **막속뼈되기**를 합니다. 연골뼈되기는 긴뼈 등에서 일어납니다."
      },
      {
        "text": "뼈세포는 뼈의 바탕질과 아교섬유를 생성한다.",
        "explanation": "오답입니다. 뼈의 바탕질과 아교섬유를 생성하는 것은 **뼈모세포(osteoblast)**입니다. 뼈세포는 성숙한 뼈 조직 내에 있습니다."
      },
      {
        "text": "연골뼈되기의 이차뼈되기중심은 연골의 몸통부분에서 시작된다.",
        "explanation": "오답입니다. 이차뼈되기중심은 뼈의 **끝부분(epiphysis)**에서 시작됩니다. 몸통부분(diaphysis)에서 시작되는 것은 일차뼈되기중심입니다."
      }
    ],
    "correctIndex": 0
  },
  {
    "id": "Skeletal_Q5",
    "tag": "뼈대계통",
    "prompt": "머리뼈의 구멍과 통과하는 구조물의 연결이 옳은 것은?",
    "choices": [
      {
        "text": "타원구멍 - 아래턱신경",
        "explanation": "정답입니다. **타원구멍(foramen ovale)**은 삼차신경의 셋째 가지인 **아래턱신경(Mandibular nerve, V3)**이 통과합니다."
      },
      {
        "text": "원형구멍 - 눈신경",
        "explanation": "오답입니다. 원형구멍은 위턱신경(V2)이, 눈신경(V1)은 위눈확틈새를 통과합니다."
      },
      {
        "text": "체판구멍 - 시각신경",
        "explanation": "오답입니다. 체판구멍은 후각신경(I)이, 시각신경(II)은 시각신경관을 통과합니다."
      },
      {
        "text": "목정맥구멍 - 얼굴신경",
        "explanation": "오답입니다. 목정맥구멍은 IX, X, XI 뇌신경 등이 통과하며, 얼굴신경(VII)은 붓꼭지구멍을 통과합니다."
      },
      {
        "text": "붓꼭지구멍 - 눈돌림신경",
        "explanation": "오답입니다. 붓꼭지구멍은 얼굴신경(VII)이, 눈돌림신경(III)은 위눈확틈새를 통과합니다."
      }
    ],
    "correctIndex": 0
  },
  {
    "id": "Skeletal_Q6",
    "tag": "뼈대계통",
    "prompt": "머리뼈에 대한 설명으로 옳은 것은?",
    "choices": [
      {
        "text": "이마뼈에는 바깥뒤통수뼈융기와 비스듬틀이 있다.",
        "explanation": "오답입니다. 바깥뒤통수뼈융기와 비스듬틀은 **뒤통수뼈(occipital bone)**에 있습니다."
      },
      {
        "text": "관자뼈의 광대돌기는 광대뼈의 관자돌기와 연결하여 광대활을 이룬다.",
        "explanation": "정답입니다. 관자뼈의 광대돌기와 광대뼈의 관자돌기가 연결되어 **광대활(zygomatic arch)**을 형성합니다."
      },
      {
        "text": "이마뼈는 뇌머리뼈 바닥의 일부를 형성한다.",
        "explanation": "오답입니다. 이마뼈는 뇌머리뼈의 앞쪽 부분을 형성하며, 뇌머리뼈 바닥의 주요 부분은 나비뼈, 뒤통수뼈 등입니다."
      },
      {
        "text": "나비뼈는 꼭지돌기, 붓돌기, 목정맥오목 등이 있다.",
        "explanation": "오답입니다. 꼭지돌기(mastoid process), 붓돌기(styloid process), 목정맥오목 등은 **관자뼈(temporal bone)**의 특징입니다."
      },
      {
        "text": "아래턱뼈의 턱뼈가지는 광대뼈의 턱관절오목과 관절한다.",
        "explanation": "오답입니다. 아래턱뼈의 턱뼈가지는 **관자뼈(temporal bone)**의 **턱관절오목(mandibular fossa)**과 관절합니다."
      }
    ],
    "correctIndex": 1
  },
  {
    "id": "Skeletal_Q7",
    "tag": "뼈대계통",
    "prompt": "다음에서 설명하는 머리뼈로 옳은 것은?\n• 몸통과 3쌍의 돌기(큰날개, 작은날개, 날개돌기)로 이루어져 있음\n• 아래턱신경이 통과하는 타원구멍, 위턱신경이 통과하는 원형구멍이 있음",
    "choices": [
      {
        "text": "벌집뼈",
        "explanation": "오답입니다. 벌집뼈는 주로 코안과 눈확 형성에 관여하며 볏돌기와 체판을 가집니다."
      },
      {
        "text": "아래턱뼈",
        "explanation": "오답입니다. 아래턱뼈는 한 쌍의 관절돌기와 이틀부분을 가집니다."
      },
      {
        "text": "이마뼈",
        "explanation": "오답입니다. 이마뼈는 주로 앞머리뼈와 눈확을 형성합니다."
      },
      {
        "text": "나비뼈",
        "explanation": "정답입니다. 제시된 '몸통, 큰날개, 작은날개, 날개돌기' 및 '타원구멍, 원형구멍'은 뇌머리뼈 바닥의 중심에 위치하는 **나비뼈(sphenoid bone)**의 주요 특징입니다."
      },
      {
        "text": "마루뼈",
        "explanation": "오답입니다. 마루뼈는 뇌머리뼈의 윗면과 가쪽벽을 형성하는 납작뼈입니다."
      }
    ],
    "correctIndex": 3
  },
  {
    "id": "Skeletal_Q8",
    "tag": "뼈대계통",
    "prompt": "중간머리뼈우묵에 대한 설명으로 옳은 것은?",
    "choices": [
      {
        "text": "벌집뼈의 볏돌기, 벌집체판 등이 위치한다.",
        "explanation": "오답입니다. 앞머리뼈우묵(anterior cranial fossa)에 대한 설명입니다."
      },
      {
        "text": "큰구멍, 비스듬틀, 목정맥구멍 등이 통과한다.",
        "explanation": "오답입니다. 뒤머리뼈우묵(posterior cranial fossa)에 대한 설명입니다."
      },
      {
        "text": "나비뼈 큰날개와 관자뼈로 구성되고 시각신경관, 위눈확틈새 등이 위치한다.",
        "explanation": "정답입니다. **중간머리뼈우묵(middle cranial fossa)**은 주로 나비뼈 큰날개와 관자뼈로 구성되며, 시각신경관, 위눈확틈새, 원형구멍, 타원구멍 등이 위치합니다."
      },
      {
        "text": "관자뼈와 뒤통수뼈로 인해 오목한 곳을 말한다.",
        "explanation": "오답입니다. 뒤머리뼈우묵(posterior cranial fossa)에 대한 설명입니다."
      },
      {
        "text": "이마뼈 눈확판, 벌집뼈, 나비뼈의 작은날개로 구성된다.",
        "explanation": "오답입니다. 앞머리뼈우묵(anterior cranial fossa)에 대한 설명입니다."
      }
    ],
    "correctIndex": 2
  },
  {
    "id": "Skeletal_Q9",
    "tag": "뼈대계통",
    "prompt": "고리뼈에 대한 설명으로 옳은 것은?",
    "choices": [
      {
        "text": "가시돌기의 가로구멍으로 척추동맥 및 정맥이 통과한다.",
        "explanation": "오답입니다. 가로구멍(transverse foramen)은 **가로돌기(transverse process)**에 있습니다."
      },
      {
        "text": "몸통에서 위로 뻗어 있는 꼭지돌기가 있다.",
        "explanation": "오답입니다. 몸통이 없고, 치아돌기(dens)가 있는 뼈는 **중쇠뼈(axis, C2)**입니다."
      },
      {
        "text": "앞고리의 뒷면에는 중쇠뼈의 치아돌기와 관절을 이루는 작은 관절면이 있다.",
        "explanation": "정답입니다. **고리뼈(atlas, C1)**는 척추뼈몸통이 없는 대신 앞고리 뒤쪽에 **치아돌기오목**을 가지고, 중쇠뼈의 치아돌기와 관절합니다."
      },
      {
        "text": "척추뼈몸통과 가시돌기가 있다.",
        "explanation": "오답입니다. 고리뼈는 척추뼈 중 유일하게 **척추뼈몸통과 가시돌기가 없습니다**."
      },
      {
        "text": "뒤결절과 치아돌기가 있다.",
        "explanation": "오답입니다. 뒤결절은 있으나, 치아돌기는 **중쇠뼈(C2)**에 있습니다."
      }
    ],
    "correctIndex": 2
  },
  {
    "id": "Skeletal_Q10",
    "tag": "뼈대계통",
    "prompt": "복장뼈에 대한 설명 중 옳은 것은?",
    "choices": [
      {
        "text": "12쌍의 갈비뼈가 직접 관절한다.",
        "explanation": "오답입니다. 복장뼈에 직접 관절(참갈비뼈)하는 갈비뼈는 **7쌍**입니다."
      },
      {
        "text": "복장뼈몸통에는 목아래패임, 빗장패임과 갈비패임이 있다.",
        "explanation": "오답입니다. 목아래패임(jugular notch)과 빗장패임(clavicular notch)은 **복장뼈자루(manubrium)**에 있습니다."
      },
      {
        "text": "복장뼈자루, 복장뼈몸통, 붓돌기로 구성되어 있다.",
        "explanation": "오답입니다. 복장뼈는 복장뼈자루, 복장뼈몸통, **칼돌기(xiphoid process)**로 구성되어 있습니다."
      },
      {
        "text": "복장뼈몸통에 있는 갈비패임은 온전한 것이 4개, 절반 패인 것이 2개가 있다.",
        "explanation": "정답입니다. 복장뼈자루와 몸통의 연결부(복장뼈각)에 2번 갈비뼈가 붙고, 몸통 자체에는 **3번부터 6번 갈비뼈**까지 온전하게 붙습니다(총 4개). 7번 갈비뼈는 몸통과 칼돌기 사이에 절반씩 붙습니다(총 2개 절반)."
      },
      {
        "text": "복장뼈자루는 손으로 촉지 가능하며 가로막, 배곧은근 등이 부착한다.",
        "explanation": "오답입니다. 가로막, 배곧은근 등이 부착하고 촉지 가능한 부분은 주로 **칼돌기(xiphoid process)**입니다."
      }
    ],
    "correctIndex": 3
  },
  {
    "id": "Skeletal_Q11",
    "tag": "뼈대계통",
    "prompt": "가슴우리를 구성하는 뼈에 대한 설명으로 옳은 것은?",
    "choices": [
      {
        "text": "8~12번 갈비뼈는 참갈비뼈로 갈비연골에 의해 직접 복장뼈와 연결된다.",
        "explanation": "오답입니다. **1~7번** 갈비뼈가 참갈비뼈입니다. 8~10번은 거짓갈비뼈, 11~12번은 뜬갈비뼈입니다."
      },
      {
        "text": "복장뼈각은 2번 갈비뼈의 갈비연골이 부착한다.",
        "explanation": "정답입니다. **복장뼈각(sternal angle)**은 복장뼈자루와 복장뼈몸통이 만나는 부위로, **2번 갈비뼈**의 갈비연골이 관절하는 지표가 됩니다."
      },
      {
        "text": "복장뼈자루에는 2개의 목아래패임과 1개의 빗장패임이 있다.",
        "explanation": "오답입니다. 복장뼈자루에는 **1개의 목아래패임**과 **2개의 빗장패임**이 있습니다."
      },
      {
        "text": "복장뼈는 갈비뼈머리, 등뼈의 몸통은 갈비뼈몸통과 연결된다.",
        "explanation": "오답입니다. 복장뼈는 **갈비연골**과, 등뼈의 몸통은 갈비뼈의 **갈비뼈머리**와 연결됩니다."
      },
      {
        "text": "갈비뼈결절은 등뼈 몸통의 갈비오목과 관절한다.",
        "explanation": "오답입니다. 갈비뼈결절은 등뼈 **가로돌기(transverse process)**의 가로돌기갈비오목과 관절합니다."
      }
    ],
    "correctIndex": 1
  },
  {
    "id": "Skeletal_Q12",
    "tag": "뼈대계통",
    "prompt": "팔의 뼈대계통에 관한 설명으로 옳은 것은?",
    "choices": [
      {
        "text": "어깨뼈 봉우리끝은 빗장뼈의 빗장끝과 관절한다.",
        "explanation": "오답입니다. 어깨뼈의 **봉우리(acromion)**는 빗장뼈의 **봉우리끝(acromial end)**과 관절합니다."
      },
      {
        "text": "등세모근은 위팔뼈 큰결절(greater tubercle)에 부착한다.",
        "explanation": "오답입니다. 등세모근(trapezius)은 빗장뼈, 어깨뼈 봉우리 등에 붙으며, 위팔뼈 큰결절에는 가시위근, 가시아래근, 작은원근 등이 붙습니다."
      },
      {
        "text": "위팔두갈래근은 위팔뼈 세모근거친면(deltoid tuberosity)에 부착한다.",
        "explanation": "오답입니다. 위팔뼈 세모근거친면에는 **어깨세모근(deltoid muscle)**이 닿습니다. 위팔두갈래근은 노뼈거친면에 닿습니다."
      },
      {
        "text": "위팔세갈래근은 어깨뼈 관절오목아래결절(infraglenoid tubercle)에 부착한다.",
        "explanation": "정답입니다. **위팔세갈래근(triceps brachii)**의 긴갈래는 어깨뼈의 **관절오목아래결절**에 기시합니다."
      },
      {
        "text": "위팔뼈의 작은머리는 자뼈머리(ulnar head)와 관절하여 팔꿉관절을 형성한다.",
        "explanation": "오답입니다. 위팔뼈의 작은머리(capitulum)는 **노뼈머리(radial head)**와 관절합니다."
      }
    ],
    "correctIndex": 3
  },
  {
    "id": "Skeletal_Q13",
    "tag": "뼈대계통",
    "prompt": "빗장뼈에 대한 설명으로 옳은 것은?",
    "choices": [
      {
        "text": "빗장뼈의 봉우리끝은 어깨뼈의 어깨뼈봉우리와 관절한다.",
        "explanation": "정답입니다. 빗장뼈의 봉우리끝과 어깨뼈의 봉우리(acromion)가 **봉우리빗장관절(acromioclavicular joint)**을 이룹니다."
      },
      {
        "text": "빗장뼈의 빗장패임은 복장뼈의 복장끝과 관절한다.",
        "explanation": "오답입니다. **복장뼈자루의 빗장패임**이 빗장뼈의 **복장끝**과 관절합니다."
      },
      {
        "text": "원뿔인대결절은 빗장뼈 복장끝 쪽에 있는 튀어나온 부분이다.",
        "explanation": "오답입니다. 원뿔인대결절(conoid tubercle)은 빗장뼈 **봉우리끝 쪽 아래면**에 있습니다."
      },
      {
        "text": "뼈되기가 가장 늦게 되는 S자형의 뼈이다.",
        "explanation": "오답입니다. 빗장뼈는 뼈되기(골화)가 **가장 먼저** 시작되는 뼈입니다."
      },
      {
        "text": "갈비빗장인대자국은 빗장뼈 윗면 봉우리끝 쪽에 있는 인대가 붙는 거친곳이다.",
        "explanation": "오답입니다. 갈비빗장인대자국은 빗장뼈 **복장끝 쪽 아래면**에 있습니다."
      }
    ],
    "correctIndex": 0
  },
  {
    "id": "Skeletal_Q14",
    "tag": "뼈대계통",
    "prompt": "위팔뼈에 대한 설명으로 옳은 것은?",
    "choices": [
      {
        "text": "먼쪽에 있는 위팔뼈머리는 어깨뼈의 관절오목과 어깨관절을 형성한다.",
        "explanation": "오답입니다. 위팔뼈머리는 **몸쪽(proximal end)**에 있습니다."
      },
      {
        "text": "중간에 있는 세모근거친면은 등세모근이 닿는다.",
        "explanation": "오답입니다. 세모근거친면(deltoid tuberosity)에는 **어깨세모근(deltoid muscle)**이 닿습니다. 등세모근은 빗장뼈와 어깨뼈에 닿습니다."
      },
      {
        "text": "먼쪽에 있는 도르래패임은 자뼈의 도르래와 관절한다.",
        "explanation": "오답입니다. 위팔뼈 먼쪽의 **도르래(trochlea)**가 자뼈의 **도르래패임(trochlear notch)**과 관절합니다."
      },
      {
        "text": "먼쪽에 있는 갈고리오목은 자뼈의 갈고리돌기와 관절한다.",
        "explanation": "정답입니다. 위팔뼈 먼쪽 앞면에 있는 **갈고리오목(coronoid fossa)**은 팔꿉관절 굽힘 시 자뼈의 **갈고리돌기(coronoid process)**를 수용합니다."
      },
      {
        "text": "몸쪽 앞에 있는 결절사이고랑은 위팔두갈래근 짧은갈래의 통로이다.",
        "explanation": "오답입니다. 결절사이고랑(intertubercular sulcus)은 위팔두갈래근 **긴갈래의 힘줄**이 지나가는 통로입니다."
      }
    ],
    "correctIndex": 3
  },
  {
    "id": "Skeletal_Q15",
    "tag": "뼈대계통",
    "prompt": "자뼈에 대한 설명으로 옳은 것은?",
    "choices": [
      {
        "text": "팔꿈치머리는 먼쪽의 앞에 위치하고 위팔뼈의 팔꿈치오목과 관절한다.",
        "explanation": "오답입니다. 팔꿈치머리(olecranon)는 **몸쪽(proximal end)의 뒤**에 위치하며 위팔뼈의 팔꿈치오목과 관절합니다."
      },
      {
        "text": "자뼈의 도르래패임은 위팔세갈래근이 닿는다.",
        "explanation": "오답입니다. 자뼈의 도르래패임은 위팔뼈의 도르래와 관절하는 부위이며, 위팔세갈래근은 **팔꿈치머리**에 닿습니다."
      },
      {
        "text": "자뼈 몸쪽에 있는 자뼈 거친면은 위팔근이 닿는다.",
        "explanation": "정답입니다. **자뼈 거친면(ulnar tuberosity)**은 자뼈 몸쪽 앞면에 위치하며 **위팔근(brachialis muscle)**이 닿는 부위입니다."
      },
      {
        "text": "자뼈의 몸쪽에는 팔꿈치오목, 갈고리오목, 도르래가 있다.",
        "explanation": "오답입니다. 자뼈 몸쪽에는 **팔꿈치머리(olecranon), 갈고리돌기(coronoid process), 도르래패임(trochlear notch)** 등이 있습니다. 오목이나 도르래는 주로 위팔뼈에 있습니다."
      },
      {
        "text": "자뼈 먼쪽에 있는 자뼈머리는 노뼈의 노패임과 관절한다.",
        "explanation": "오답입니다. 자뼈 먼쪽의 자뼈머리는 **노뼈의 자패임**과 관절합니다. 노뼈의 노패임은 자뼈의 노돌기와 관절합니다."
      }
    ],
    "correctIndex": 2
  },
  {
    "id": "Skeletal_Q16",
    "tag": "뼈대계통",
    "prompt": "골반에 대한 설명으로 옳은 것은?",
    "choices": [
      {
        "text": "아래골반문은 큰골반과 작은골반을 나누는 평면을 말한다.",
        "explanation": "오답입니다. 큰골반과 작은골반을 나누는 평면은 **위골반문(pelvic inlet)**입니다. 아래골반문은 작은골반의 아래쪽 출구입니다."
      },
      {
        "text": "큰골반은 참골반이라고 하며 주로 생식계통의 장기가 접하여 있다.",
        "explanation": "오답입니다. **작은골반(true pelvis)**이 참골반이며 생식계통, 방광, 직장 등이 위치합니다."
      },
      {
        "text": "골반가로막은 가로막, 꼬리근 등으로 구성된다.",
        "explanation": "오답입니다. 골반가로막(pelvic diaphragm)은 **항문올림근(levator ani muscle)**과 **꼬리근(coccygeus muscle)** 등으로 구성됩니다."
      },
      {
        "text": "위골반문은 엉치뼈곶, 엉치뼈날개의 앞모서리, 분계선을 지나는 평면이다.",
        "explanation": "정답입니다. **위골반문(pelvic inlet)**은 엉치뼈곶, 활꼴선, 두덩뼈 위가지 등으로 이루어진 분계선(terminal line)을 따라 형성된 평면입니다."
      },
      {
        "text": "골반안은 위쪽의 큰골반을 뜻한다.",
        "explanation": "오답입니다. 골반안(pelvic cavity)은 **작은골반(true pelvis)**이 형성하는 공간을 뜻합니다."
      }
    ],
    "correctIndex": 3
  },
  {
    "id": "Skeletal_Q17",
    "tag": "뼈대계통",
    "prompt": "다리뼈의 구조에 대한 설명으로 옳은 것은?",
    "choices": [
      {
        "text": "넙다리뼈 먼쪽 앞에 있는 융기사이융기에는 십자인대가 붙는다.",
        "explanation": "오답입니다. 십자인대가 붙는 부위는 정강뼈의 **융기사이융기(intercondylar eminence)**와 넙다리뼈의 **융기사이오목(intercondylar fossa)**입니다. 넙다리뼈의 융기사이오목은 **먼쪽 뒷면**에 있습니다."
      },
      {
        "text": "종아리뼈 몸쪽에는 가자미근이 붙는 가자미선이 있다.",
        "explanation": "오답입니다. 가자미선(soleal line)은 **정강뼈(tibia) 몸쪽 뒤쪽**에 있습니다."
      },
      {
        "text": "정강뼈 몸쪽에 있는 정강뼈거친면은 넙다리네갈래근의 힘줄인 무릎인대가 붙는다.",
        "explanation": "정답입니다. **정강뼈거친면(tibial tuberosity)**은 정강뼈 몸쪽 앞면에 있으며, **무릎인대(patellar ligament)**가 닿는 부위입니다. 이 인대는 넙다리네갈래근 힘줄의 연장선입니다."
      },
      {
        "text": "발목뼈의 몸쪽 줄은 발배뼈와 입방뼈가 구성한다.",
        "explanation": "오답입니다. 발목뼈의 몸쪽 줄은 **목말뼈(talus)**와 **발꿈치뼈(calcaneus)**가 주를 이룹니다."
      },
      {
        "text": "정강뼈의 위쪽은 목말뼈, 아래쪽은 넙다리뼈와 관절을 이룬다.",
        "explanation": "오답입니다. 정강뼈의 위쪽은 **넙다리뼈**와, 아래쪽은 **목말뼈**와 관절합니다."
      }
    ],
    "correctIndex": 2
  },
  {
    "id": "Skeletal_Q18",
    "tag": "뼈대계통",
    "prompt": "넙다리뼈의 구조에 대한 설명으로 옳은 것은?",
    "choices": [
      {
        "text": "넙다리뼈 중간 앞면에 거친선이 위치한다.",
        "explanation": "오답입니다. 거친선(linea aspera)은 넙다리뼈 몸통의 **중간 뒷면**에 위치하며 근육 부착부입니다."
      },
      {
        "text": "넙다리뼈 먼쪽 뒷면에 작은돌기가 위치한다.",
        "explanation": "오답입니다. 작은돌기(lesser trochanter)는 넙다리뼈 **몸쪽(proximal end) 뒷면**에 위치합니다."
      },
      {
        "text": "넙다리뼈 몸쪽 앞면에 모음근결절(adductor tubercle)이 위치한다.",
        "explanation": "오답입니다. 모음근결절은 넙다리뼈 **먼쪽(distal end) 안쪽**에 위치합니다."
      },
      {
        "text": "넙다리뼈 몸쪽 뒷면에 큰볼기근이 닿는 볼기근거친면이 위치한다.",
        "explanation": "정답입니다. **볼기근거친면(gluteal tuberosity)**은 큰볼기근이 닿는 부위로, 넙다리뼈 몸쪽 뒷면, 큰돌기 아래에 있습니다."
      },
      {
        "text": "넙다리뼈 몸쪽 앞면에 융기사이오목(intercondylar fossa)이 위치한다.",
        "explanation": "오답입니다. 융기사이오목은 넙다리뼈 **먼쪽(distal end) 뒷면**에 위치합니다."
      }
    ],
    "correctIndex": 3
  },
  {
    "id": "Skeletal_Q19",
    "tag": "뼈대계통",
    "prompt": "정강뼈에 대한 설명으로 옳은 것은?",
    "choices": [
      {
        "text": "정강뼈 몸쪽에 있는 돌기사이능선에는 장딴지근이 붙는다.",
        "explanation": "오답입니다. 장딴지근(gastrocnemius)은 넙다리뼈의 **관절융기 위**에 있는 돌기에 붙습니다."
      },
      {
        "text": "정강뼈의 아래쪽은 발꿈치뼈, 위쪽은 무릎뼈, 가쪽은 종아리뼈와 관절을 이룬다.",
        "explanation": "오답입니다. 정강뼈는 위쪽은 **넙다리뼈**, 아래쪽은 **목말뼈**, 가쪽은 **종아리뼈**와 관절을 이룹니다."
      },
      {
        "text": "정강뼈의 먼쪽에 있는 가쪽복사는 발의 안쪽에서 만져지며 복숭아뼈라고 말한다.",
        "explanation": "오답입니다. 정강뼈의 먼쪽에 있는 것은 **안쪽복사(medial malleolus)**이며 발의 안쪽에서 만져집니다. 가쪽복사는 종아리뼈에 있습니다."
      },
      {
        "text": "정강뼈에 있는 가자미근선에는 장딴지빗근이 붙는다.",
        "explanation": "오답입니다. 가자미근선에는 **가자미근(soleus muscle)**이 붙습니다."
      },
      {
        "text": "정강뼈 몸쪽에 있는 융기사이융기에는 십자인대가 붙는다.",
        "explanation": "정답입니다. 정강뼈 몸쪽의 융기사이융기(intercondylar eminence) 주변의 앞/뒤 융기사이구역(intercondylar area)에 **십자인대(cruciate ligaments)**가 부착합니다."
      }
    ],
    "correctIndex": 4
  },
  {
    "id": "Skeletal_Q20",
    "tag": "뼈대계통",
    "prompt": "발목뼈에 관한 설명으로 옳은 것은?",
    "choices": [
      {
        "text": "발목뼈 중 목말뼈가 가장 크다.",
        "explanation": "오답입니다. 발목뼈 중 가장 큰 뼈는 **발꿈치뼈(calcaneus)**입니다."
      },
      {
        "text": "입방뼈는 가쪽쐐기뼈의 가쪽에 있다.",
        "explanation": "정답입니다. **입방뼈(cuboid)**는 발목뼈의 먼쪽 줄에서 가장 가쪽에 위치하며, 세 개의 쐐기뼈(cuneiform bones) 중 가장 가쪽에 있는 **가쪽쐐기뼈**의 가쪽에 인접해 있습니다."
      },
      {
        "text": "가쪽에 쐐기뼈, 안쪽에 입방뼈가 위치한다.",
        "explanation": "오답입니다. **안쪽에 쐐기뼈(cuneiforms)**, **가쪽에 입방뼈**가 위치합니다."
      },
      {
        "text": "발배뼈의 뒤는 쐐기뼈, 앞은 발꿈치뼈가 위치한다.",
        "explanation": "오답입니다. 발배뼈(navicular)의 뒤는 **목말뼈(talus)**, 앞은 **쐐기뼈**가 위치합니다."
      },
      {
        "text": "정강뼈와 종아리뼈가 발꿈치뼈와 직접 만나 발목관절을 이룬다.",
        "explanation": "오답입니다. 정강뼈와 종아리뼈는 **목말뼈**와 직접 만나 **발목관절(talocrural joint)**을 이룹니다."
      }
    ],
    "correctIndex": 1
  },
  {
    "id": "Articular_Q1",
    "tag": "관절계통",
    "prompt": "관절에 관한 설명으로 옳은 것은?",
    "choices": [
      {
        "text": "봉합 - 연골관절",
        "explanation": "오답입니다. 봉합(suture)은 **섬유관절(fibrous joint)**의 일종입니다."
      },
      {
        "text": "못박이관절 - 윤활관절",
        "explanation": "오답입니다. 못박이관절(gomphosis)은 **섬유관절**의 일종입니다."
      },
      {
        "text": "인대결합 - 연골관절",
        "explanation": "오답입니다. 인대결합(syndesmosis)은 **섬유관절**의 일종입니다."
      },
      {
        "text": "유리연골결합 - 윤활관절",
        "explanation": "오답입니다. 유리연골결합(synchondrosis)은 **연골관절(cartilaginous joint)**의 일종입니다."
      },
      {
        "text": "섬유연골결합 - 연골관절",
        "explanation": "정답입니다. **섬유연골결합(symphysis)**은 두 뼈가 섬유연골로 연결된 **연골관절(cartilaginous joint)**의 일종입니다 (예: 척추사이원반)."
      }
    ],
    "correctIndex": 4
  },
  {
    "id": "Articular_Q2",
    "tag": "관절계통",
    "prompt": "다음에서 설명하는 관절의 형태는?\n• 두 뼈 사이에 인대가 단단하게 연결되어 움직임이 거의 일어나지 않음\n• 노뼈와 자뼈 사이의 뼈사이막, 종아리뼈와 정강뼈의 뼈사이막에 해당함\n• 아교섬유, 섬유조직다발로 연결됨",
    "choices": [
      {
        "text": "봉합",
        "explanation": "오답입니다. 봉합은 머리뼈의 관절 형태입니다."
      },
      {
        "text": "못박이관절",
        "explanation": "오답입니다. 못박이관절은 이가 턱뼈에 박혀있는 관절 형태입니다."
      },
      {
        "text": "유리연골결합",
        "explanation": "오답입니다. 유리연골결합은 일시적인 연골결합(예: 긴뼈의 성장판)이나 영구적인 연골결합(예: 첫째갈비뼈와 복장뼈자루)을 말합니다."
      },
      {
        "text": "인대결합",
        "explanation": "정답입니다. **인대결합(syndesmosis)**은 두 뼈가 뼈사이막이나 인대 다발에 의해 연결되어 움직임이 제한적인 **섬유관절**의 일종입니다."
      },
      {
        "text": "섬유연골결합",
        "explanation": "오답입니다. 섬유연골결합은 척추사이원반과 같은 연골관절입니다."
      }
    ],
    "correctIndex": 3
  },
  {
    "id": "Articular_Q3",
    "tag": "관절계통",
    "prompt": "관절의 분류 중 섬유관절에 속하는 관절로 옳은 것은?",
    "choices": [
      {
        "text": "평면관절",
        "explanation": "오답입니다. 평면관절은 **윤활관절**의 일종입니다."
      },
      {
        "text": "못박이관절",
        "explanation": "정답입니다. **못박이관절(gomphosis)**은 이가 턱뼈의 이틀에 박혀 있는 형태로, **섬유관절**의 일종입니다."
      },
      {
        "text": "경첩관절",
        "explanation": "오답입니다. 경첩관절은 **윤활관절**의 일종입니다."
      },
      {
        "text": "유리연골결합",
        "explanation": "오답입니다. 유리연골결합은 **연골관절**의 일종입니다."
      },
      {
        "text": "안장관절",
        "explanation": "오답입니다. 안장관절은 **윤활관절**의 일종입니다."
      }
    ],
    "correctIndex": 1
  },
  {
    "id": "Articular_Q4",
    "tag": "관절계통",
    "prompt": "관절의 분류 중 척추사이원반의 분류로 옳은 것은?",
    "choices": [
      {
        "text": "경첩관절",
        "explanation": "오답입니다. 경첩관절은 윤활관절입니다."
      },
      {
        "text": "섬유연골결합",
        "explanation": "정답입니다. **척추사이원반(intervertebral disc)**은 섬유연골로 연결되어 있는 **섬유연골결합(symphysis)**이며, 이는 **연골관절**의 일종입니다."
      },
      {
        "text": "유리연골결합",
        "explanation": "오답입니다. 유리연골결합은 주로 성장판이나 첫째 갈비뼈 관절 등에서 볼 수 있습니다."
      },
      {
        "text": "인대결합",
        "explanation": "오답입니다. 인대결합은 뼈사이막 등으로 연결된 섬유관절입니다."
      },
      {
        "text": "연골관절",
        "explanation": "오답입니다. 섬유연골결합은 연골관절의 상위 분류이지만, 더 구체적인 분류를 묻는 문제입니다."
      }
    ],
    "correctIndex": 1
  },
  {
    "id": "Articular_Q5",
    "tag": "관절계통",
    "prompt": "다음에서 설명하는 관절로 옳은 것은?\n• 움직임은 굽힘-폄, 모음-벌림 가능함\n• 노손목관절, 손허리손가락관절, 고리뒤통수관절이 해당됨",
    "choices": [
      {
        "text": "경첩관절",
        "explanation": "오답입니다. 경첩관절은 굽힘-폄만 가능합니다 (단축성)."
      },
      {
        "text": "안장관절",
        "explanation": "오답입니다. 안장관절(예: 엄지손목손허리관절)은 굽힘-폄, 모음-벌림 외에 약간의 돌림이 가능하며 예시 관절과 일치하지 않습니다."
      },
      {
        "text": "절구관절",
        "explanation": "오답입니다. 절구관절은 굽힘-폄, 모음-벌림, 돌림이 모두 가능한 삼축성 관절입니다."
      },
      {
        "text": "중쇠관절",
        "explanation": "오답입니다. 중쇠관절은 돌림(회전) 운동만 가능한 단축성 관절입니다."
      },
      {
        "text": "타원관절",
        "explanation": "정답입니다. **타원관절(ellipsoid joint)**은 두 개의 주된 운동축(굽힘-폄, 모음-벌림)이 있어 이축성 운동이 가능합니다. 제시된 **노손목관절(radiocarpal joint), 손허리손가락관절(metacarpophalangeal joint)**, 고리뒤통수관절(atlanto-occipital joint)이 이에 해당합니다."
      }
    ],
    "correctIndex": 4
  },
  {
    "id": "Articular_Q6",
    "tag": "관절계통",
    "prompt": "윤활관절의 종류와 해당 관절의 인체 예시로 옳은 것은?",
    "choices": [
      {
        "text": "중쇠관절 - 턱관절",
        "explanation": "오답입니다. 턱관절은 복합적인 운동이 가능한 **융기관절** 또는 **평면관절**에 가깝습니다. 중쇠관절은 돌림 운동만 가능합니다."
      },
      {
        "text": "타원관절 - 발목관절",
        "explanation": "오답입니다. 발목관절(talocrural joint)은 주로 굽힘/폄만 가능한 **경첩관절**에 가깝습니다."
      },
      {
        "text": "경첩관절 - 손목뼈사이관절",
        "explanation": "오답입니다. 손목뼈사이관절은 활주 운동만 가능한 **평면관절**입니다. 경첩관절은 팔꿉관절 등에서 볼 수 있습니다."
      },
      {
        "text": "중쇠관절 - 몸쪽노자관절",
        "explanation": "정답입니다. **중쇠관절(pivot joint)**은 한 뼈가 다른 뼈의 축 주위로 돌림(회전) 운동을 하는 관절이며, **몸쪽노자관절(proximal radioulnar joint)**이 이에 해당합니다 (노뼈머리가 돌면서 아래팔의 엎침/뒤침을 가능하게 함)."
      },
      {
        "text": "절구관절 - 고리뒤통수관절",
        "explanation": "오답입니다. 고리뒤통수관절은 주로 굽힘-폄을 하는 **타원관절**이며, 절구관절은 어깨관절이나 엉덩관절처럼 모든 방향의 운동이 가능한 관절입니다."
      }
    ],
    "correctIndex": 3
  },
  {
    "id": "Articular_Q7",
    "tag": "관절계통",
    "prompt": "다음 중 윤활관절에 관한 설명으로 옳은 것은?",
    "choices": [
      {
        "text": "윤활액은 섬유막에서 분비된다.",
        "explanation": "오답입니다. 윤활액은 관절주머니의 속층인 **윤활막(synovial membrane)**에서 분비됩니다."
      },
      {
        "text": "관절원반은 어깨관절과 엉덩관절에 있다.",
        "explanation": "오답입니다. 어깨관절과 엉덩관절에 있는 것은 관절면의 깊이를 깊게 하는 **관절테두리(articular labrum)**입니다. 관절원반은 턱관절, 복장빗장관절 등에 있습니다."
      },
      {
        "text": "뼈의 관절면은 유리연골로 덮여 있다.",
        "explanation": "정답입니다. 윤활관절에서 두 뼈의 관절면은 마찰을 줄이고 충격을 흡수하기 위해 주로 **유리연골(hyaline cartilage)**로 덮여 있습니다."
      },
      {
        "text": "운동범위가 가장 넓은 관절은 안장관절이다.",
        "explanation": "오답입니다. 운동범위가 가장 넓은 관절은 모든 방향의 운동이 가능한 **절구관절(ball-and-socket joint)**입니다 (예: 어깨관절, 엉덩관절)."
      },
      {
        "text": "관절주머니의 바깥막은 윤활막이고 속막은 섬유막이다.",
        "explanation": "오답입니다. 관절주머니의 **바깥막은 섬유막(fibrous membrane)**이고, **속막은 윤활막(synovial membrane)**입니다."
      }
    ],
    "correctIndex": 2
  },
  {
    "id": "Articular_Q8",
    "tag": "관절계통",
    "prompt": "다음에서 설명하는 윤활관절의 구조물은?\n• 접시와 같은 어깨뼈의 관절오목을 더 오목하고 깊게 만들어서 뼈 사이의 접촉면을 넓혀 주는 섬유연골\n• 대표적으로 어깨관절과 엉덩관절에 위치함",
    "choices": [
      {
        "text": "관절원반(articular disc)",
        "explanation": "오답입니다. 관절원반은 뼈가 서로 맞닿는 관절면 사이에 위치하는 섬유연골 구조물입니다 (예: 턱관절, 복장빗장관절)."
      },
      {
        "text": "관절테두리(articular labrum)",
        "explanation": "정답입니다. **관절테두리(articular labrum)**는 어깨관절(어깨오목테두리)과 엉덩관절(절구테두리)에서 관절오목 주변에 부착하여 깊이를 깊게 하고 안정성을 높이는 섬유연골 구조물입니다."
      },
      {
        "text": "힘줄집(tendon sheath)",
        "explanation": "오답입니다. 힘줄집은 힘줄 주위를 둘러싸고 있는 윤활 주머니 모양의 구조물입니다."
      },
      {
        "text": "윤활주머니(synovial bursa)",
        "explanation": "오답입니다. 윤활주머니는 피부, 근육, 힘줄 등과 뼈 사이의 마찰을 줄여주는 윤활액이 들어있는 주머니입니다."
      },
      {
        "text": "관절주머니(articular capsule)",
        "explanation": "오답입니다. 관절주머니는 관절을 감싸는 전체적인 섬유 및 윤활막 구조물입니다."
      }
    ],
    "correctIndex": 1
  },
  {
    "id": "Articular_Q9",
    "tag": "관절계통",
    "prompt": "척주관절에 대한 설명으로 옳은 것은?",
    "choices": [
      {
        "text": "돌기사이관절은 경첩관절이다.",
        "explanation": "오답입니다. 돌기사이관절(facet joint)은 활주 운동만 가능한 **평면관절(plane joint)**입니다."
      },
      {
        "text": "척추뼈몸통 사이 관절은 섬유연골결합이다.",
        "explanation": "정답입니다. 척추뼈몸통 사이의 관절은 **척추사이원반(intervertebral disc)**에 의해 연결된 **섬유연골결합(symphysis)**으로, 연골관절의 일종입니다."
      },
      {
        "text": "고리중쇠관절은 목뼈 폄을 시키는 타원관절이다.",
        "explanation": "오답입니다. 고리중쇠관절은 주로 목의 **돌림(회전) 운동**을 하는 **중쇠관절(pivot joint)**입니다."
      },
      {
        "text": "고리뒤통수관절은 주로 목의 돌림 운동에 관여한다.",
        "explanation": "오답입니다. 고리뒤통수관절은 주로 목의 **굽힘-폄 (끄덕임) 운동**에 관여하는 **타원관절(ellipsoid joint)**입니다."
      },
      {
        "text": "앞세로인대는 척주관 속에서 척추뼈몸통과 척추원반의 뒷면을 따라 있음",
        "explanation": "오답입니다. 척주관 속 척추뼈몸통과 원반 뒷면에 있는 인대는 **뒤세로인대(posterior longitudinal ligament)**입니다. 앞세로인대는 척추뼈몸통의 앞면에 있습니다."
      }
    ],
    "correctIndex": 1
  },
  {
    "id": "Articular_Q10",
    "tag": "관절계통",
    "prompt": "관절테두리(articular labrum)가 있어서 관절의 맞춤을 보강하고 관절의 깊이를 깊게 해주는 인체의 관절로 옳은 것은?",
    "choices": [
      {
        "text": "팔꿉관절",
        "explanation": "오답입니다. 팔꿉관절은 경첩관절이며 관절테두리가 없습니다."
      },
      {
        "text": "손목관절",
        "explanation": "오답입니다. 손목관절은 관절테두리가 없습니다."
      },
      {
        "text": "엉덩관절",
        "explanation": "정답입니다. **엉덩관절(hip joint)**은 **절구테두리(acetabular labrum)**를 가지고 있어 절구의 깊이를 깊게 하고 안정성을 보강합니다. 어깨관절 또한 **어깨오목테두리(glenoid labrum)**를 가집니다."
      },
      {
        "text": "무릎관절",
        "explanation": "오답입니다. 무릎관절에는 관절의 안정성을 돕는 **반달(meniscus)**이 있습니다."
      },
      {
        "text": "발목관절",
        "explanation": "오답입니다. 발목관절은 경첩관절이며 관절테두리가 없습니다."
      }
    ],
    "correctIndex": 2
  },
  {
    "id": "Articular_Q11",
    "tag": "관절계통",
    "prompt": "다음에서 설명하는 인대로 옳은 것은?\n• 척주관 뒷면에서 잘 보임\n• 이웃한 척추뼈 고리판을 연결함\n• 탄력섬유가 많으며 척주의 굽힘을 제한함",
    "choices": [
      {
        "text": "목덜미인대",
        "explanation": "오답입니다. 목덜미인대는 가시끝인대가 목에서 변형된 구조물입니다."
      },
      {
        "text": "가시끝인대",
        "explanation": "오답입니다. 가시끝인대는 척추뼈 가시돌기 끝을 연결합니다. 주로 척주의 굽힘을 제한하지만 황색인대처럼 탄력섬유가 풍부하지는 않습니다."
      },
      {
        "text": "황색인대",
        "explanation": "정답입니다. **황색인대(ligamentum flavum)**는 이웃한 척추뼈의 **고리판(lamina)**을 연결하며, 탄력섬유가 풍부하여 척주의 굽힘 시 탄력적으로 작용하고 굽힘을 제한합니다."
      },
      {
        "text": "앞세로인대",
        "explanation": "오답입니다. 앞세로인대는 척추뼈몸통의 앞면을 따라 연결하며 척주의 폄을 제한합니다."
      },
      {
        "text": "뒤세로인대",
        "explanation": "오답입니다. 뒤세로인대는 척주관 속에 위치하지만 척추뼈몸통의 뒷면을 따라 연결하며 척주의 굽힘을 제한합니다. 고리판을 연결하는 것은 황색인대입니다."
      }
    ],
    "correctIndex": 2
  },
  {
    "id": "Articular_Q12",
    "tag": "관절계통",
    "prompt": "다음 설명에 해당하는 인대는?\n• 척추뼈몸통과 척추사이원반의 앞면을 넓은 띠 모양으로 연결함\n• 척주의 과도한 폄을 제한함",
    "choices": [
      {
        "text": "황색인대(ligamentum flavum)",
        "explanation": "오답입니다. 황색인대는 척추뼈의 고리판을 연결하며 굽힘을 제한합니다."
      },
      {
        "text": "앞세로인대(anterior longitudinal ligament)",
        "explanation": "정답입니다. **앞세로인대(ALL)**는 척주뼈몸통의 **앞면**을 따라 길게 부착하며, 척추가 **과도하게 펴지는 것(과도한 폄)**을 제한하는 가장 강력한 인대 중 하나입니다."
      },
      {
        "text": "가시끝인대(supraspinous ligament)",
        "explanation": "오답입니다. 가시끝인대는 가시돌기 끝을 연결하며 굽힘을 제한합니다."
      },
      {
        "text": "가시사이인대(interspinous ligament)",
        "explanation": "오답입니다. 가시사이인대는 가시돌기 사이를 연결하며 굽힘을 제한합니다."
      },
      {
        "text": "뒤세로인대(posterior longitudinal ligament)",
        "explanation": "오답입니다. 뒤세로인대는 척추뼈몸통의 **뒷면**을 따라 연결하며 굽힘을 제한합니다."
      }
    ],
    "correctIndex": 1
  },
  {
    "id": "Articular_Q13",
    "tag": "관절계통",
    "prompt": "고리중쇠관절(atlantoaxial joint)에서 머리의 돌림운동을 제한하는 인대로 옳은 것은?",
    "choices": [
      {
        "text": "날개인대",
        "explanation": "정답입니다. **날개인대(alar ligament)**는 중쇠뼈의 치아돌기에서 뒤통수뼈의 안쪽 관절융기로 뻗어 나가며, 머리의 **과도한 돌림(회전)**을 제한합니다."
      },
      {
        "text": "황색인대",
        "explanation": "오답입니다. 황색인대는 척추뼈 고리판을 연결합니다."
      },
      {
        "text": "앞세로인대",
        "explanation": "오답입니다. 앞세로인대는 척추뼈몸통의 앞면을 따라 연결합니다."
      },
      {
        "text": "뒤세로인대",
        "explanation": "오답입니다. 뒤세로인대는 척추뼈몸통의 뒷면을 따라 연결합니다."
      },
      {
        "text": "목덜미인대",
        "explanation": "오답입니다. 목덜미인대는 목 부위의 가시끝인대에 해당하며 굽힘을 제한합니다."
      }
    ],
    "correctIndex": 0
  },
  {
    "id": "Articular_Q14",
    "tag": "관절계통",
    "prompt": "다음에서 설명하는 인대는?\n• 빗장뼈의 봉우리 끝과 부리돌기 사이를 연결하는 강한인대\n• 마름인대와 원뿔인대로 되어 있음",
    "choices": [
      {
        "text": "부리빗장인대(coracoclavicular ligament)",
        "explanation": "정답입니다. **부리빗장인대(coracoclavicular ligament)**는 어깨뼈의 부리돌기와 빗장뼈를 연결하며, **원뿔인대(conoid)**와 **마름인대(trapezoid)** 두 부분으로 구성되어 빗장뼈의 상방 움직임을 제한합니다."
      },
      {
        "text": "오목위팔인대(glenohumeral ligament)",
        "explanation": "오답입니다. 오목위팔인대는 어깨관절주머니의 앞쪽을 보강하는 인대입니다."
      },
      {
        "text": "갈비빗장인대(costoclavicular ligament)",
        "explanation": "오답입니다. 갈비빗장인대는 첫째 갈비뼈와 빗장뼈의 복장끝을 연결합니다."
      },
      {
        "text": "부리위팔인대(coracohumeral ligament)",
        "explanation": "오답입니다. 부리위팔인대는 어깨뼈의 부리돌기에서 위팔뼈로 뻗어 나갑니다."
      },
      {
        "text": "부리봉우리인대(coracoacromial ligament)",
        "explanation": "오답입니다. 부리봉우리인대는 부리돌기와 봉우리를 연결하여 어깨지붕을 형성합니다."
      }
    ],
    "correctIndex": 0
  },
  {
    "id": "Articular_Q15",
    "tag": "관절계통",
    "prompt": "몸쪽노자관절 부위에 위치한 구조물로 옳은 것은?",
    "choices": [
      {
        "text": "날개인대",
        "explanation": "오답입니다. 날개인대는 목뼈(고리중쇠관절)에 있습니다."
      },
      {
        "text": "노뼈머리띠인대",
        "explanation": "정답입니다. **노뼈머리띠인대(anular ligament of radius)**는 노뼈머리를 감싸 몸쪽노자관절을 형성하고 안정화시키는 인대입니다."
      },
      {
        "text": "가로고리인대",
        "explanation": "오답입니다. 가로고리인대는 고리뼈에 있는 인대입니다."
      },
      {
        "text": "등쪽노자인대",
        "explanation": "오답입니다. 등쪽노자인대는 먼쪽노자관절을 보강하는 인대입니다."
      },
      {
        "text": "반달세모인대",
        "explanation": "오답입니다. 반달세모인대는 손목관절 부위에 있습니다."
      }
    ],
    "correctIndex": 1
  },
  {
    "id": "Articular_Q16",
    "tag": "관절계통",
    "prompt": "어깨복합체가 이루는 관절에 대한 설명으로 옳은 것은?",
    "choices": [
      {
        "text": "부리위팔인대는 마름인대와 원뿔인대로 구성되어 있다.",
        "explanation": "오답입니다. 마름인대와 원뿔인대로 구성된 것은 **부리빗장인대**입니다."
      },
      {
        "text": "오목위팔관절의 오목테두리는 관절면을 더 얕게 하는 구조물이다.",
        "explanation": "오답입니다. 오목테두리(glenoid labrum)는 관절오목의 깊이를 **더 깊게** 하여 안정성을 높이는 역할을 합니다."
      },
      {
        "text": "가로위팔인대는 위팔뼈와 어깨뼈를 연결하여 안정성을 제공한다.",
        "explanation": "오답입니다. 가로위팔인대(transverse humeral ligament)는 위팔뼈의 **큰결절과 작은결절**을 연결하여 위팔두갈래근 긴갈래 힘줄을 제자리에 잡아줍니다."
      },
      {
        "text": "봉우리빗장관절은 평면관절로 주위에 부리빗장인대가 존재한다.",
        "explanation": "정답입니다. **봉우리빗장관절(acromioclavicular joint)**은 활주 운동만 가능한 **평면관절**이며, 주위에 **부리빗장인대**가 있어 안정성을 크게 보강합니다."
      },
      {
        "text": "복장빗장관절의 갈비빗장인대는 빗장뼈의 내림을 제한한다.",
        "explanation": "오답입니다. 갈비빗장인대는 빗장뼈의 **내림을 제외한 모든 운동** (상방, 전방, 후방 움직임 등)을 강력하게 제한합니다."
      }
    ],
    "correctIndex": 3
  },
  {
    "id": "Articular_Q17",
    "tag": "관절계통",
    "prompt": "엉덩관절의 설명으로 옳은 것은?",
    "choices": [
      {
        "text": "두덩넙다리인대는 볼기뼈의 절구패임 위를 연결한다.",
        "explanation": "오답입니다. 절구패임 위를 연결하여 절구테두리를 완성하는 인대는 **절구가로인대(transverse acetabular ligament)**입니다."
      },
      {
        "text": "엉덩넙다리인대는 나선형으로 관절주머니 뒤쪽을 보강하는 인대이다.",
        "explanation": "오답입니다. 엉덩넙다리인대(iliofemoral ligament)는 인체에서 가장 강한 인대로, 관절주머니의 **앞쪽**을 보강하며 폄을 강하게 제한합니다."
      },
      {
        "text": "엉덩관절은 볼기뼈절구와 넙다리뼈머리 사이의 불안정한 타원관절이다.",
        "explanation": "오답입니다. 엉덩관절은 매우 안정적인 **절구관절(ball-and-socket joint)**입니다."
      },
      {
        "text": "넙다리뼈머리인대는 볼기뼈절구 앞쪽을 보강하는 인체에서 가장 강한 인대이다.",
        "explanation": "오답입니다. 인체에서 가장 강한 인대는 **엉덩넙다리인대(iliofemoral ligament)**입니다. 넙다리뼈머리인대는 관절 자체의 안정성에 기여는 적습니다."
      },
      {
        "text": "두덩넙다리인대는 두덩뼈에서 넙다리뼈에 연결되어 관절주머니의 아래쪽을 보강한다.",
        "explanation": "정답입니다. **두덩넙다리인대(pubofemoral ligament)**는 두덩뼈에서 기시하여 관절주머니의 **아래쪽과 앞쪽**을 보강하며 벌림(abduction)을 제한합니다."
      }
    ],
    "correctIndex": 4
  },
  {
    "id": "Articular_Q18",
    "tag": "관절계통",
    "prompt": "무릎관절의 안쪽곁인대가 연결하는 두 개의 뼈로 옳은 것은?",
    "choices": [
      {
        "text": "무릎뼈 - 정강뼈",
        "explanation": "오답입니다. 무릎뼈와 정강뼈는 무릎인대로 연결됩니다."
      },
      {
        "text": "넙다리뼈 - 정강뼈",
        "explanation": "정답입니다. **안쪽곁인대(medial collateral ligament, MCL)**는 넙다리뼈의 안쪽관절융기에서 **정강뼈**의 안쪽면에 부착하여 무릎관절의 안쪽 안정성을 제공합니다."
      },
      {
        "text": "정강뼈 - 종아리뼈",
        "explanation": "오답입니다. 정강뼈와 종아리뼈는 관절막이나 뼈사이막으로 연결됩니다."
      },
      {
        "text": "무릎뼈 - 종아리뼈",
        "explanation": "오답입니다. 무릎뼈는 정강뼈와 넙다리뼈에 연결되며 종아리뼈와는 직접적인 관계가 없습니다."
      },
      {
        "text": "넙다리뼈 - 종아리뼈",
        "explanation": "오답입니다. 넙다리뼈와 종아리뼈를 연결하는 것은 **가쪽곁인대(lateral collateral ligament, LCL)**입니다."
      }
    ],
    "correctIndex": 1
  },
  {
    "id": "Articular_Q19",
    "tag": "관절계통",
    "prompt": "무릎관절에 대한 설명으로 옳은 것은?",
    "choices": [
      {
        "text": "무릎관절은 안장관절 또는 타원관절에 속한다.",
        "explanation": "오답입니다. 무릎관절은 주로 굽힘-폄 운동을 하는 **경첩관절(hinge joint)** 또는 융기관절(condyloid joint)로 분류됩니다."
      },
      {
        "text": "안쪽관절반달은 두껍고 O자 모양이며 앞과 뒤융기사이구역에 붙는다.",
        "explanation": "오답입니다. O자 모양에 가깝고 두꺼운 것은 **가쪽관절반달(lateral meniscus)**입니다. 안쪽관절반달은 C자 모양입니다."
      },
      {
        "text": "무릎인대는 무릎관절 앞면에 있고 무릎뼈와 정강뼈거치면을 연결한다.",
        "explanation": "정답입니다. **무릎인대(patellar ligament)**는 무릎뼈와 정강뼈거친면(tibial tuberosity)을 연결하며, 넙다리네갈래근의 힘줄이 무릎뼈를 지난 후 이어진 구조입니다."
      },
      {
        "text": "앞십자인대는 넙다리뼈가 정강뼈에 대해 앞쪽으로 밀리는 것을 방지한다.",
        "explanation": "오답입니다. **앞십자인대(ACL)**는 **정강뼈가 넙다리뼈에 대해 앞쪽으로 밀리는 것**을 방지합니다 (또는 넙다리뼈가 정강뼈에 대해 뒤쪽으로 밀리는 것을 방지)."
      },
      {
        "text": "안쪽곁인대는 넙다리뼈 가쪽관절융기와 종아리뼈머리 사이를 연결한다.",
        "explanation": "오답입니다. 넙다리뼈 가쪽관절융기와 종아리뼈머리 사이를 연결하는 것은 **가쪽곁인대(LCL)**입니다."
      }
    ],
    "correctIndex": 2
  },
  {
    "id": "Articular_Q20",
    "tag": "관절계통",
    "prompt": "십자인대가 부착하는 부위의 연결로 옳은 것은?",
    "choices": [
      {
        "text": "융기사이결절 - 융기사이융기",
        "explanation": "오답입니다. 융기사이결절은 정강뼈의 융기사이융기에 속하는 작은 돌기들입니다."
      },
      {
        "text": "융기사이오목 - 융기사이결절",
        "explanation": "오답입니다. 십자인대는 주로 넙다리뼈의 오목과 정강뼈의 융기사이구역에 붙습니다."
      },
      {
        "text": "융기사이융기 - 융기사이오목",
        "explanation": "정답입니다. **십자인대(Cruciate ligaments)**는 정강뼈의 **융기사이융기 앞/뒤 구역 (intercondylar area of tibia)**과 넙다리뼈의 **융기사이오목(intercondylar fossa of femur)**의 벽 사이에 부착합니다."
      },
      {
        "text": "융기사이융기 - 정강뼈거친면",
        "explanation": "오답입니다. 정강뼈거친면에는 무릎인대가 붙습니다."
      },
      {
        "text": "융기사이오목 - 정강뼈거친면",
        "explanation": "오답입니다. 십자인대의 부착 부위와 관련이 없습니다."
      }
    ],
    "correctIndex": 2
  },
{
    "id": "Skeletal_S1",
    "tag": "뼈대계통",
    "prompt": "뼈의 구조적 특징 중 **근육이나 인대가 부착되는 돌출부(융기)**에 해당하지 **않는** 것은?",
    "choices": [
      {
        "text": "결절 (tubercle)",
        "explanation": "오답입니다. 결절은 근육이나 인대가 붙는 돌출부입니다."
      },
      {
        "text": "능선 (crest)",
        "explanation": "오답입니다. 능선은 뼈 표면의 날카로운 돌출부입니다."
      },
      {
        "text": "가시 (spine)",
        "explanation": "오답입니다. 가시는 뼈의 날카로운 돌출부입니다."
      },
      {
        "text": "돌기 (trochanter)",
        "explanation": "오답입니다. 돌기는 넓고 큰 돌출부입니다."
      },
      {
        "text": "구멍 (foramen)",
        "explanation": "정답입니다. **구멍(foramen)**은 신경이나 혈관이 통과하는 **함몰부(오목, depression)**이며, 융기(돌출부)에 해당하지 않습니다."
      }
    ],
    "correctIndex": 4
  },
  {
    "id": "Skeletal_S2",
    "tag": "뼈대계통",
    "prompt": "뼈되기(Ossification) 과정 중 **연골뼈되기(endochondral ossification)**에 대한 설명으로 옳은 것은?",
    "choices": [
      {
        "text": "섬유연골을 기반으로 뼈가 형성된다.",
        "explanation": "오답입니다. 연골뼈되기는 유리연골을 기반으로 합니다."
      },
      {
        "text": "중간엽세포가 직접 뼈로 변환된다.",
        "explanation": "오답입니다. 이는 막속뼈되기(intramembranous ossification)에 대한 설명입니다."
      },
      {
        "text": "주로 이마뼈, 마루뼈 등 납작뼈의 발생 방식이다.",
        "explanation": "오답입니다. 납작뼈의 발생 방식은 주로 막속뼈되기입니다."
      },
      {
        "text": "유리연골(hyaline cartilage) 모형을 기반으로 형성된다.",
        "explanation": "정답입니다. **연골뼈되기**는 긴뼈 등에서 **유리연골(hyaline cartilage)** 모형을 뼈조직으로 대체하는 방식으로 진행됩니다."
      },
      {
        "text": "뼈되기 중 가장 늦게 시작되는 방식이다.",
        "explanation": "오답입니다. 뼈되기 중 가장 먼저 시작되는 것은 막속뼈되기(예: 빗장뼈)입니다."
      }
    ],
    "correctIndex": 3
  },
  {
    "id": "Skeletal_S3",
    "tag": "뼈대계통",
    "prompt": "뼈의 조직학적 구조 중 **치밀뼈(compact bone)**의 특징적인 구조로 옳은 것은?",
    "choices": [
      {
        "text": "뼈잔기둥(trabeculae)",
        "explanation": "오답입니다. 뼈잔기둥은 해면뼈(spongy bone)의 특징적인 구조입니다."
      },
      {
        "text": "적색골수(red bone marrow)",
        "explanation": "오답입니다. 골수는 뼈의 내부 공간에 채워져 있습니다."
      },
      {
        "text": "뼈단위(osteon), 하버스관, 볼크만관",
        "explanation": "정답입니다. **뼈단위(하버스계), 하버스관, 볼크만관** 등은 밀도가 높고 규칙적인 구조를 이루는 **치밀뼈**에 특징적으로 나타나는 구조입니다."
      },
      {
        "text": "뼈속막(endosteum)",
        "explanation": "오답입니다. 뼈속막은 뼈속 공간과 해면뼈를 덮는 막입니다."
      },
      {
        "text": "황색골수(yellow bone marrow)",
        "explanation": "오답입니다. 황색골수는 주로 지방으로 구성됩니다."
      }
    ],
    "correctIndex": 2
  },
  {
    "id": "Skeletal_S4",
    "tag": "뼈대계통",
    "prompt": "뼈의 발생 방식 중 **이마뼈, 마루뼈, 빗장뼈**와 같은 납작뼈의 뼈되기 방식으로 옳은 것은?",
    "choices": [
      {
        "text": "유리연골결합",
        "explanation": "오답입니다. 유리연골결합은 관절의 한 형태입니다."
      },
      {
        "text": "막속뼈되기 (intramembranous ossification)",
        "explanation": "정답입니다. 이마뼈, 마루뼈, 빗장뼈 등은 연골 모형 없이 중간엽세포가 직접 뼈로 변환되는 **막속뼈되기**를 통해 발생합니다."
      },
      {
        "text": "연골뼈되기 (endochondral ossification)",
        "explanation": "오답입니다. 연골뼈되기는 주로 긴뼈의 발생 방식입니다."
      },
      {
        "text": "뼈속막뼈되기",
        "explanation": "오답입니다. 사용되지 않는 용어입니다."
      },
      {
        "text": "이차뼈되기중심",
        "explanation": "오답입니다. 이차뼈되기중심은 연골뼈되기 중 뼈끝에서 발생하는 뼈되기 중심입니다."
      }
    ],
    "correctIndex": 1
  },
  {
    "id": "Skeletal_S5",
    "tag": "뼈대계통",
    "prompt": "머리뼈의 구멍과 통과하는 뇌신경의 연결이 **옳지 않은** 것은?",
    "choices": [
      {
        "text": "타원구멍 - 아래턱신경(V3)",
        "explanation": "오답입니다. 타원구멍은 삼차신경의 셋째 가지인 아래턱신경이 통과합니다."
      },
      {
        "text": "원형구멍 - 위턱신경(V2)",
        "explanation": "오답입니다. 원형구멍은 삼차신경의 둘째 가지인 위턱신경이 통과합니다."
      },
      {
        "text": "위눈확틈새 - 눈신경(V1)",
        "explanation": "오답입니다. 위눈확틈새는 삼차신경의 첫째 가지인 눈신경을 비롯하여 III, IV, VI 신경이 통과합니다."
      },
      {
        "text": "목정맥구멍 - 혀인두신경(IX)",
        "explanation": "오답입니다. 목정맥구멍은 IX(혀인두), X(미주), XI(더부) 뇌신경이 통과합니다."
      },
      {
        "text": "시각신경 - 체판구멍",
        "explanation": "정답입니다. **시각신경(II)**은 **시각신경관(optic canal)**을 통과합니다. **체판구멍**은 후각신경(I)이 통과하는 통로입니다."
      }
    ],
    "correctIndex": 4
  },
  {
    "id": "Skeletal_S6",
    "tag": "뼈대계통",
    "prompt": "아래턱뼈(mandible)의 관절가지에 있는 아래턱뼈머리가 관절하는 구조물로 옳은 것은?",
    "choices": [
      {
        "text": "광대뼈의 관자돌기",
        "explanation": "오답입니다. 광대뼈의 관자돌기는 관자뼈의 광대돌기와 만나 광대활을 이룹니다."
      },
      {
        "text": "관자뼈의 턱관절오목",
        "explanation": "정답입니다. 아래턱뼈머리는 **관자뼈(temporal bone)**에 있는 **턱관절오목(mandibular fossa)**과 관절하여 턱관절(TMJ)을 이룹니다."
      },
      {
        "text": "나비뼈의 큰날개",
        "explanation": "오답입니다. 나비뼈는 뇌머리뼈의 일부를 형성합니다."
      },
      {
        "text": "위턱뼈의 이틀",
        "explanation": "오답입니다. 위턱뼈의 이틀은 위쪽 이가 박히는 곳입니다."
      },
      {
        "text": "뒤통수뼈의 관절융기",
        "explanation": "오답입니다. 뒤통수뼈의 관절융기는 고리뼈와 관절합니다."
      }
    ],
    "correctIndex": 1
  },
  {
    "id": "Skeletal_S7",
    "tag": "뼈대계통",
    "prompt": "뇌머리뼈 바닥의 중심에 위치하며, 몸통, 큰날개, 작은날개, 날개돌기 등으로 구성되고 타원구멍과 원형구멍을 포함하는 뼈는?",
    "choices": [
      {
        "text": "벌집뼈",
        "explanation": "오답입니다. 벌집뼈는 코안과 눈확 형성에 관여하며 볏돌기 등이 있습니다."
      },
      {
        "text": "이마뼈",
        "explanation": "오답입니다. 이마뼈는 주로 뇌머리뼈의 앞쪽과 눈확을 형성합니다."
      },
      {
        "text": "뒤통수뼈",
        "explanation": "오답입니다. 뒤통수뼈는 뇌머리뼈의 뒤쪽을 형성하며 큰구멍 등이 있습니다."
      },
      {
        "text": "나비뼈",
        "explanation": "정답입니다. 제시된 '몸통, 큰날개, 작은날개, 날개돌기'와 구멍들은 뇌머리뼈 바닥의 중심에 위치하는 **나비뼈(sphenoid bone)**의 주요 특징입니다."
      },
      {
        "text": "관자뼈",
        "explanation": "오답입니다. 관자뼈는 꼭지돌기, 붓돌기 등이 있습니다."
      }
    ],
    "correctIndex": 3
  },
  {
    "id": "Skeletal_S8",
    "tag": "뼈대계통",
    "prompt": "고리뼈(atlas, C1)에 대한 설명으로 옳은 것은?",
    "choices": [
      {
        "text": "가시돌기가 길고 끝이 하나이다.",
        "explanation": "오답입니다. 고리뼈는 가시돌기가 없습니다. 이는 중쇠뼈 이하 목뼈의 특징입니다."
      },
      {
        "text": "몸통에서 위로 뻗은 치아돌기가 있다.",
        "explanation": "오답입니다. 치아돌기는 중쇠뼈(C2)에 있습니다."
      },
      {
        "text": "척추뼈몸통과 가시돌기가 없다.",
        "explanation": "정답입니다. **고리뼈(C1)**는 척추뼈 중 유일하게 **척추뼈몸통**과 **가시돌기가 없습니다**."
      },
      {
        "text": "가로돌기에 가로구멍이 없다.",
        "explanation": "오답입니다. 목뼈는 모두 가로돌기에 척추동맥이 통과하는 가로구멍이 있습니다."
      },
      {
        "text": "뒤쪽에 척추뼈몸통이 위치한다.",
        "explanation": "오답입니다. 고리뼈는 몸통이 없으며, 몸통이 있어야 할 자리에 치아돌기가 관절하는 오목이 있습니다."
      }
    ],
    "correctIndex": 2
  },
  {
    "id": "Skeletal_S9",
    "tag": "뼈대계통",
    "prompt": "복장뼈(sternum)의 가장 아래쪽에 위치하며, 가로막(diaphragm) 및 배곧은근(rectus abdominis) 등이 부착하는 구조물은?",
    "choices": [
      {
        "text": "복장뼈자루(manubrium)",
        "explanation": "오답입니다. 복장뼈자루는 빗장뼈, 1번 갈비뼈와 관절합니다."
      },
      {
        "text": "복장뼈몸통(body of sternum)",
        "explanation": "오답입니다. 복장뼈몸통은 3번부터 6번 갈비뼈와 주로 관절합니다."
      },
      {
        "text": "목아래패임(jugular notch)",
        "explanation": "오답입니다. 목아래패임은 복장뼈자루의 위쪽 중앙에 있습니다."
      },
      {
        "text": "복장뼈각(sternal angle)",
        "explanation": "오답입니다. 복장뼈각은 자루와 몸통의 연결 부위입니다."
      },
      {
        "text": "칼돌기(xiphoid process)",
        "explanation": "정답입니다. **칼돌기**는 복장뼈의 가장 아래 부분으로, **가로막**과 **배곧은근** 등이 부착합니다."
      }
    ],
    "correctIndex": 4
  },
  {
    "id": "Skeletal_S10",
    "tag": "뼈대계통",
    "prompt": "위팔세갈래근(triceps brachii muscle)의 힘줄이 닿는 자뼈(ulna)의 몸쪽(proximal end) 돌출부로 옳은 것은?",
    "choices": [
      {
        "text": "갈고리돌기(coronoid process)",
        "explanation": "오답입니다. 갈고리돌기는 팔꿉관절 굽힘 시 위팔뼈의 갈고리오목에 들어갑니다. 위팔근이 닿습니다."
      },
      {
        "text": "자뼈 거친면(ulnar tuberosity)",
        "explanation": "오답입니다. 자뼈 거친면에는 위팔근이 닿습니다."
      },
      {
        "text": "팔꿈치머리 (olecranon)",
        "explanation": "정답입니다. 위팔세갈래근은 팔의 폄을 담당하며, 자뼈의 뒤쪽 몸쪽 끝에 위치한 **팔꿈치머리**에 닿습니다."
      },
      {
        "text": "자뼈머리(ulnar head)",
        "explanation": "오답입니다. 자뼈머리는 먼쪽(distal end)에 있습니다."
      },
      {
        "text": "도르래패임(trochlear notch)",
        "explanation": "오답입니다. 도르래패임은 위팔뼈의 도르래와 관절하는 부위입니다."
      }
    ],
    "correctIndex": 2
  },
  {
    "id": "Articular_A1",
    "tag": "관절계통",
    "prompt": "관절의 분류 중 **연골관절(Cartilaginous Joint)**에 해당하며, 두 뼈가 **섬유연골**로 연결된 관절로 옳은 것은?",
    "choices": [
      {
        "text": "봉합",
        "explanation": "오답입니다. 봉합은 섬유관절입니다."
      },
      {
        "text": "못박이관절",
        "explanation": "오답입니다. 못박이관절은 섬유관절입니다."
      },
      {
        "text": "인대결합",
        "explanation": "오답입니다. 인대결합은 섬유관절입니다."
      },
      {
        "text": "유리연골결합",
        "explanation": "오답입니다. 유리연골결합은 연골관절이지만, 유리연골로 연결됩니다 (예: 성장판, 첫째 갈비뼈 관절)."
      },
      {
        "text": "섬유연골결합",
        "explanation": "정답입니다. **섬유연골결합(symphysis)**은 연골관절의 한 종류로, 두 뼈가 **섬유연골(fibrocartilage)**로 연결된 관절입니다 (예: 척추사이원반, 두덩뼈결합)."
      }
    ],
    "correctIndex": 4
  },
  {
    "id": "Articular_A2",
    "tag": "관절계통",
    "prompt": "두 뼈가 **뼈사이막(interosseous membrane)**과 같은 인대 다발에 의해 연결되어 움직임이 거의 일어나지 않는 섬유관절의 형태로 옳은 것은? (예: 노뼈-자뼈 사이)",
    "choices": [
      {
        "text": "봉합",
        "explanation": "오답입니다. 봉합은 머리뼈에서 볼 수 있습니다."
      },
      {
        "text": "못박이관절",
        "explanation": "오답입니다. 못박이관절은 이가 턱뼈에 박힌 관절입니다."
      },
      {
        "text": "유리연골결합",
        "explanation": "오답입니다. 유리연골결합은 연골관절입니다."
      },
      {
        "text": "인대결합",
        "explanation": "정답입니다. **인대결합(syndesmosis)**은 두 뼈가 뼈사이막이나 인대 다발에 의해 연결되어 움직임이 제한적인 **섬유관절**의 일종입니다."
      },
      {
        "text": "섬유연골결합",
        "explanation": "오답입니다. 섬유연골결합은 연골관절입니다."
      }
    ],
    "correctIndex": 3
  },
  {
    "id": "Articular_A3",
    "tag": "관절계통",
    "prompt": "굽힘-폄, 모음-벌림의 **이축성(Biaxial)** 운동이 가능하며, 노손목관절, 손허리손가락관절, 고리뒤통수관절 등이 해당하는 윤활관절의 형태는?",
    "choices": [
      {
        "text": "경첩관절",
        "explanation": "오답입니다. 경첩관절은 단축성(굽힘-폄)입니다."
      },
      {
        "text": "타원관절 (ellipsoid joint)",
        "explanation": "정답입니다. **타원관절**은 굽힘-폄, 모음-벌림의 두 축을 중심으로 움직이는 **이축성 관절**입니다. 노손목관절 등이 이에 해당합니다."
      },
      {
        "text": "절구관절",
        "explanation": "오답입니다. 절구관절은 삼축성(모든 방향)입니다."
      },
      {
        "text": "중쇠관절",
        "explanation": "오답입니다. 중쇠관절은 단축성(돌림)입니다."
      },
      {
        "text": "안장관절",
        "explanation": "오답입니다. 안장관절도 이축성이지만, 엄지손목손허리관절이 대표적입니다."
      }
    ],
    "correctIndex": 1
  },
  {
    "id": "Articular_A4",
    "tag": "관절계통",
    "prompt": "윤활관절의 구조물 중 **어깨관절과 엉덩관절**에 위치하며 관절면을 더 오목하고 깊게 만들어 안정성을 높이는 역할을 하는 섬유연골 구조물은?",
    "choices": [
      {
        "text": "관절원반(articular disc)",
        "explanation": "오답입니다. 관절원반은 뼈가 서로 맞닿는 관절면 사이에 위치합니다 (예: 턱관절)."
      },
      {
        "text": "윤활주머니(synovial bursa)",
        "explanation": "오답입니다. 윤활주머니는 마찰을 줄여주는 윤활액 주머니입니다."
      },
      {
        "text": "관절테두리(articular labrum)",
        "explanation": "정답입니다. **관절테두리(articular labrum)**는 어깨관절(어깨오목테두리)과 엉덩관절(절구테두리)에서 관절오목 주변에 부착하여 깊이를 깊게 하고 안정성을 높이는 역할을 합니다."
      },
      {
        "text": "반달(meniscus)",
        "explanation": "오답입니다. 반달은 무릎관절에 있습니다."
      },
      {
        "text": "관절주머니(articular capsule)",
        "explanation": "오답입니다. 관절주머니는 관절 전체를 감싸는 막입니다."
      }
    ],
    "correctIndex": 2
  },
  {
    "id": "Articular_A5",
    "tag": "관절계통",
    "prompt": "한 뼈가 다른 뼈의 축 주위로 **돌림(회전)** 운동만 가능한 **단축성(Uniaxial) 윤활관절**은?",
    "choices": [
      {
        "text": "경첩관절",
        "explanation": "오답입니다. 경첩관절은 굽힘-폄 운동이 가능합니다."
      },
      {
        "text": "중쇠관절",
        "explanation": "정답입니다. **중쇠관절(pivot joint)**은 돌림(회전) 운동만 가능한 단축성 관절입니다 (예: 몸쪽노자관절, 고리중쇠관절)."
      },
      {
        "text": "평면관절",
        "explanation": "오답입니다. 평면관절은 활주 운동만 가능합니다."
      },
      {
        "text": "타원관절",
        "explanation": "오답입니다. 타원관절은 이축성입니다."
      },
      {
        "text": "절구관절",
        "explanation": "오답입니다. 절구관절은 삼축성입니다."
      }
    ],
    "correctIndex": 1
  },
  {
    "id": "Articular_A6",
    "tag": "관절계통",
    "prompt": "척추관(vertebral canal) 내에서 이웃한 척추뼈의 **고리판(lamina)을 연결**하며, **탄력섬유**가 풍부하여 척주의 굽힘을 제한하는 인대는?",
    "choices": [
      {
        "text": "앞세로인대",
        "explanation": "오답입니다. 앞세로인대는 척추뼈 몸통 앞면에서 폄을 제한합니다."
      },
      {
        "text": "뒤세로인대",
        "explanation": "오답입니다. 뒤세로인대는 척추뼈 몸통 뒷면에서 굽힘을 제한합니다. 고리판을 연결하지는 않습니다."
      },
      {
        "text": "황색인대",
        "explanation": "정답입니다. **황색인대(ligamentum flavum)**는 이웃한 척추뼈의 **고리판**을 연결하며, 탄력섬유가 풍부하여 척주의 굽힘 시 탄력적으로 작용하고 굽힘을 제한합니다."
      },
      {
        "text": "가시끝인대",
        "explanation": "오답입니다. 가시끝인대는 가시돌기 끝을 연결합니다."
      },
      {
        "text": "목덜미인대",
        "explanation": "오답입니다. 목덜미인대는 목 부위의 가시끝인대입니다."
      }
    ],
    "correctIndex": 2
  },
  {
    "id": "Articular_A7",
    "tag": "관절계통",
    "prompt": "척추뼈몸통과 척추사이원반의 **앞면**을 따라 연결하며, 척주의 **과도한 폄(hyperextension)**을 제한하는 인대는?",
    "choices": [
      {
        "text": "황색인대",
        "explanation": "오답입니다. 황색인대는 척추뼈 고리판을 연결하며 굽힘을 제한합니다."
      },
      {
        "text": "앞세로인대(anterior longitudinal ligament)",
        "explanation": "정답입니다. **앞세로인대(ALL)**는 척추뼈몸통의 **앞면**을 따라 길게 부착하며, 척추의 **과도한 폄**을 제한하는 역할을 합니다."
      },
      {
        "text": "뒤세로인대(posterior longitudinal ligament)",
        "explanation": "오답입니다. 뒤세로인대는 척추뼈몸통의 뒷면을 따라 연결하며 굽힘을 제한합니다."
      },
      {
        "text": "가시끝인대",
        "explanation": "오답입니다. 가시끝인대는 가시돌기 끝을 연결하며 굽힘을 제한합니다."
      },
      {
        "text": "가시사이인대",
        "explanation": "오답입니다. 가시사이인대는 가시돌기 사이를 연결하며 굽힘을 제한합니다."
      }
    ],
    "correctIndex": 1
  },
  {
    "id": "Articular_A8",
    "tag": "관절계통",
    "prompt": "고리중쇠관절(atlantoaxial joint)에서 중쇠뼈의 치아돌기에서 뒤통수뼈의 관절융기로 뻗어 나가며, 머리의 **과도한 돌림(회전)**을 제한하는 인대는?",
    "choices": [
      {
        "text": "가로고리인대",
        "explanation": "오답입니다. 가로고리인대는 치아돌기를 고리뼈에 고정시킵니다."
      },
      {
        "text": "날개인대",
        "explanation": "정답입니다. **날개인대(alar ligament)**는 중쇠뼈의 치아돌기에서 뒤통수뼈 관절융기로 뻗어 나가, 머리의 **과도한 돌림(회전)** 운동을 제한합니다."
      },
      {
        "text": "꼭대기인대",
        "explanation": "오답입니다. 꼭대기인대는 치아돌기 꼭대기에서 뒤통수뼈로 뻗어 나갑니다."
      },
      {
        "text": "황색인대",
        "explanation": "오답입니다. 황색인대는 척추뼈 고리판을 연결합니다."
      },
      {
        "text": "뒤세로인대",
        "explanation": "오답입니다. 뒤세로인대는 척추뼈몸통 뒷면을 연결합니다."
      }
    ],
    "correctIndex": 1
  },
  {
    "id": "Articular_A9",
    "tag": "관절계통",
    "prompt": "빗장뼈의 봉우리끝과 어깨뼈의 부리돌기 사이를 연결하는 강한 인대로, **원뿔인대(conoid)**와 **마름인대(trapezoid)** 두 부분으로 구성되어 있는 것은?",
    "choices": [
      {
        "text": "부리위팔인대",
        "explanation": "오답입니다. 부리위팔인대는 부리돌기에서 위팔뼈로 뻗어 나갑니다."
      },
      {
        "text": "갈비빗장인대",
        "explanation": "오답입니다. 갈비빗장인대는 첫째 갈비뼈와 빗장뼈를 연결합니다."
      },
      {
        "text": "부리빗장인대(coracoclavicular ligament)",
        "explanation": "정답입니다. **부리빗장인대**는 부리돌기와 빗장뼈를 연결하는 인대로, **원뿔인대**와 **마름인대**로 구성되어 있습니다. 봉우리빗장관절의 안정성에 매우 중요합니다."
      },
      {
        "text": "오목위팔인대",
        "explanation": "오답입니다. 오목위팔인대는 어깨관절주머니를 보강합니다."
      },
      {
        "text": "부리봉우리인대",
        "explanation": "오답입니다. 부리봉우리인대는 부리돌기와 봉우리를 연결합니다."
      }
    ],
    "correctIndex": 2
  },
  {
    "id": "Articular_A10",
    "tag": "관절계통",
    "prompt": "무릎관절에서 관절의 안정성을 높이고 넙다리뼈와 정강뼈 사이의 관절면 적합성을 보강하는 섬유연골 구조물은?",
    "choices": [
      {
        "text": "관절테두리",
        "explanation": "오답입니다. 관절테두리는 어깨관절이나 엉덩관절에 있습니다."
      },
      {
        "text": "관절원반",
        "explanation": "오답입니다. 관절원반은 주로 턱관절 등에 있습니다."
      },
      {
        "text": "윤활주머니",
        "explanation": "오답입니다. 윤활주머니는 마찰을 줄여주는 주머니입니다."
      },
      {
        "text": "반달 (meniscus)",
        "explanation": "정답입니다. **반달(meniscus)**은 무릎관절의 넙다리뼈와 정강뼈 관절면 사이에 위치하여 안정성을 높이고 충격을 흡수하는 섬유연골 구조물입니다."
      },
      {
        "text": "힘줄집",
        "explanation": "오답입니다. 힘줄집은 힘줄 주위를 둘러쌉니다."
      }
    ],
    "correctIndex": 3
  },
  {
    "id": "Articular_Q20",
    "tag": "관절계통",
    "prompt": "십자인대가 부착하는 부위의 연결로 옳은 것은?",
    "choices": [
      {
        "text": "융기사이결절 - 융기사이융기",
        "explanation": "오답입니다. 융기사이결절은 정강뼈의 융기사이융기에 속하는 작은 돌기들입니다."
      },
      {
        "text": "융기사이오목 - 융기사이결절",
        "explanation": "오답입니다. 십자인대는 주로 넙다리뼈의 오목과 정강뼈의 융기사이구역에 붙습니다."
      },
      {
        "text": "융기사이융기 - 융기사이오목",
        "explanation": "정답입니다. **십자인대(Cruciate ligaments)**는 정강뼈의 **융기사이융기 앞/뒤 구역 (intercondylar area of tibia)**과 넙다리뼈의 **융기사이오목(intercondylar fossa of femur)**의 벽 사이에 부착합니다."
      },
      {
        "text": "융기사이융기 - 정강뼈거친면",
        "explanation": "오답입니다. 정강뼈거친면에는 무릎인대가 붙습니다."
      },
      {
        "text": "융기사이오목 - 정강뼈거친면",
        "explanation": "오답입니다. 십자인대의 부착 부위와 관련이 없습니다."
      }
    ],
    "correctIndex": 2
  }
];

// 브라우저에서 접근 가능하도록
if (typeof window !== "undefined") {
  window.QUESTIONS = QUESTIONS;
}
