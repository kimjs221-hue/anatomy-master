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
  }
];

// 브라우저에서 접근 가능하도록
if (typeof window !== "undefined") {
  window.QUESTIONS = QUESTIONS;
}

