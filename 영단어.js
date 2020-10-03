// Key가 영단어 value가 뜻
var one_word = [
"perserve : 지키다", "hold on to : ~을 계속 보유하다", "precious : 소중한", "souvenir : 기념품", "purchase : 구입하다", "bring back : ~을 기억나게하다, 가져오다",
"other than : ~외에", "ordinary : 평범한", "last : 마지막, 지속되다", "come up with : ~을 생각해내다", "method : 방법", "visible : 눈에보이는", "spontaneous : 즉흥적인, 자발적인",
"rely on : ~에 의존하는", "hostel : 호스텔 (숙박시설)", "route : 길, 경로", "sigthseeing : 관광", "accumulate : 축적하다", "landmark : 랜드마크, 관광명소", "layer : 겹, 층",
"sealant : 밀봉제", "fade : 바래다", "wear out : 닳다", "terrific : 멋진, 훌륭한", "charm : 매력, 작은 장식물", "bracelet : 팔찌", "entire : 완전한, 전체의", "tiny : 작은",
"lifelong : 평생의", "remind A of B : A에게 B를 생각나게 하다", "hesitation : 망설임, 주저함", "manage to : 관리하다, 간신히 ~하다", "hotspot : 핫스팟 (Wifi)", "status : 상태",
"affordable : (가격이) 알맞은", "reliable : 믿을만한", "overseas : 해외", "reasonable : 합리적인", "local : 현지인", "telecommunication : 통신", "take up : (시간, 공간을) 차지하다",
"luggage : 짐", "purposely : 일부러", "automatically : 자동으로", "occasionally : 때때로", "glance through : ~을 훑어보다", "catch a glimpse of : ~을 힐끗보다", "flood : 홍수, 밀려오다",
"shore : 해안", "keep in touch : 연락하고 지내다", "obviously : 분명히", "conversation : 대화", "elderly : 노인, 나이가 지긋한", "happen upon : ~을 우연히 발견하다", 
"prove : 입증하다", "in the end : 결국", "personal : 개인적인", "soul : 마음, 정신", "enrich : 풍성하게 하다", "grap : 붙잡다, 잡아치기", "capture : 캡쳐, 포착", "priceless : 대단히 귀중한"
] 

var three_word = [
    "trick : 속임수", "statistics : 통계", "commercial : 광고", "figure : 수치", "generally : 일반적으로", "rating : 평점", "review : 논평, 비평", "similarly : 마찬가지로",
    "fasten : 착용하다, 묶다", "survive : 생존하다", "present : 제시하다", "unfortunately : 안타깝게도", "misuse : 악용, 오용", "claim : 주장하다", "independent : 독립적인",
    "laboratory : 실험심, 연구소", "guarantee : 보장하다", "agency : (정부)기관, 대리점", "noticeable : 뚜렷함", "defective : 결함이 있는", "a wide range of : 다양함",
    "misleading : 오해의 소지가 있는", "purpose : 목적", "survey : (설문)조시", "atmosphere : 분위기", "fill out : ~을 작성하다", "normal : 보통의", "reaction : 반응",
    "voluntary : 자발적인", "sampling : 표본추출", "biased : 편향된", "in favor of : ~에 지지하여", "underrepresent : 적게 표시하다", "moderate : 중도의, 보통의",
    "trap : 함정", "corporation : 기업", "employee : 직원", "well-paying : 보수가 좋은", "recruit : 뽑다, 모집하다", "competent : 유능한", "candidate : 지원자",
    "distribute : 배부하다", "yearly salary : 연봉", "spread : 퍼뜨리다", "depending on : ~에 따라", "illustration : 일러스트레이션, 삽화", "term : 용어",
    "indicate : 가리키다", "mean : 평균", "calculate : 계산하다", "median : 중앙값", "mode : 최빈값", "frequently : 자주", "a handful of : 소수의", "perceive : 인지하다",
    "deceptively : 기만적으로, 믿을 수 없이", "convincing : 설득력 있는", "sort : 종류", "accurate : 정확한", "display : 보여주다", "raw : 원료 그대로의",
    "misrepresent : 잘못 표현하다", "axis : 축", "vertical : 세로", "horizontal : 가로", "modest : 적당한", "notable : 주목할만한", "argument : 주장", "hence : 이런 이유로",
    "unit : 단위", "assume : 추정하다", "emphasize : 강조하다", "state : 말하다, 진술하다", "debate : 토론", "support : 뒷받침하다", "reinforce : 강화하다",
    "proper : 적절한", "objective : 객관적인", "convince A of B : A에게 B를 납득시키다", "come across : 유연히 마주치다", "blindly : 맹목적으로", "in detail : 상세하게",
    "judge : 판단하다"
]

var word = []

function WordSelection(Word){
    if(Word == 1){
        word = one_word
    }
    else if(Word == 3){
        word = three_word
    }
}


var RandomArray
var 영단어구분

function RandomWord() 
{
    if(document.getElementById("뜻").innerText == "뜻" && document.getElementById("word").innerText != "영단어"){
        document.getElementById("뜻").innerHTML = "뜻을 확인해주세요"
    }
    else if(document.getElementById("뜻").innerText != "뜻을 확인해주세요" && word.length != 0){
        // 배열크기에 맞는 수 랜덤으로 부르고 자르기
        RandomArray = Math.floor(Math.random() * word.length)
        영단어구분 = word[RandomArray].split(":")

        // 배열 구분 및 html에 값 전달
        document.getElementById("word").innerHTML = 영단어구분[0]
        //document.getElementById("word").innerHTML = word[RandomArray]
        document.getElementById("뜻").innerHTML = "뜻"

        // 이미 한번 본 영단어 삭제
        word.splice(RandomArray, 1) // .splice(index, 삭제할원소 개수, 치환할 내용)

        // 영단어 다 볼시 문구
        if(word.length == 0){
            document.getElementById("word").innerHTML = "영단어를"
            document.getElementById("뜻").innerHTML = "다 봤습니다"
        }
    }
}

function 다시하기()
{
    one_word = [
        "perserve : 지키다", "hold on to : ~을 계속 보유하다", "precious : 소중한", "souvenir : 기념품", "purchase : 구입하다", "bring back : ~을 기억나게하다, 가져오다",
        "other than : ~외에", "ordinary : 평범한", "last : 마지막, 지속되다", "come up with : ~을 생각해내다", "method : 방법", "visible : 눈에보이는", "spontaneous : 즉흥적인, 자발적인",
        "rely on : ~에 의존하는", "hostel : 호스텔 (숙박시설)", "route : 길, 경로", "sigthseeing : 관광", "accumulate : 축적하다", "landmark : 랜드마크, 관광명소", "layer : 겹, 층",
        "sealant : 밀봉제", "fade : 바래다", "wear out : 닳다", "terrific : 멋진, 훌륭한", "charm : 매력, 작은 장식물", "bracelet : 팔찌", "entire : 완전한, 전체의", "tiny : 작은",
        "lifelong : 평생의", "remind A of B : A에게 B를 생각나게 하다", "hesitation : 망설임, 주저함", "manage to : 관리하다, 간신히 ~하다", "hotspot : 핫스팟 (Wifi)", "status : 상태",
        "affordable : (가격이) 알맞은", "reliable : 믿을만한", "overseas : 해외", "reasonable : 합리적인", "local : 현지인", "telecommunication : 통신", "take up : (시간, 공간을) 차지하다",
        "luggage : 짐", "purposely : 일부러", "automatically : 자동으로", "occasionally : 때때로", "glance through : ~을 훑어보다", "catch a glimpse of : ~을 힐끗보다", "flood : 홍수, 밀려오다",
        "shore : 해안", "keep in touch : 연락하고 지내다", "obviously : 분명히", "conversation : 대화", "elderly : 노인, 나이가 지긋한", "happen upon : ~을 우연히 발견하다", 
        "prove : 입증하다", "in the end : 결국", "personal : 개인적인", "soul : 마음, 정신", "enrich : 풍성하게 하다", "grap : 붙잡다, 잡아치기", "capture : 캡쳐, 포착", "priceless : 대단히 귀중한"
        ] 
    three_word =  [
        "trick : 속임수", "statistics : 통계", "commercial : 광고", "figure : 수치", "generally : 일반적으로", "rating : 평점", "review : 논평, 비평", "similarly : 마찬가지로",
        "fasten : 착용하다, 묶다", "survive : 생존하다", "present : 제시하다", "unfortunately : 안타깝게도", "misuse : 악용, 오용", "claim : 주장하다", "independent : 독립적인",
        "laboratory : 실험심, 연구소", "guarantee : 보장하다", "agency : (정부)기관, 대리점", "noticeable : 뚜렷함", "defective : 결함이 있는", "a wide range of : 다양함",
        "misleading : 오해의 소지가 있는", "purpose : 목적", "survey : (설문)조시", "atmosphere : 분위기", "fill out : ~을 작성하다", "normal : 보통의", "reaction : 반응",
        "voluntary : 자발적인", "sampling : 표본추출", "biased : 편향된", "in favor of : ~에 지지하여", "underrepresent : 적게 표시하다", "moderate : 중도의, 보통의",
        "trap : 함정", "corporation : 기업", "employee : 직원", "well-paying : 보수가 좋은", "recruit : 뽑다, 모집하다", "competent : 유능한", "candidate : 지원자",
        "distribute : 배부하다", "yearly salary : 연봉", "spread : 퍼뜨리다", "depending on : ~에 따라", "illustration : 일러스트레이션, 삽화", "term : 용어",
        "indicate : 가리키다", "mean : 평균", "calculate : 계산하다", "median : 중앙값", "mode : 최빈값", "frequently : 자주", "a handful of : 소수의", "perceive : 인지하다",
        "deceptively : 기만적으로, 믿을 수 없이", "convincing : 설득력 있는", "sort : 종류", "accurate : 정확한", "display : 보여주다", "raw : 원료 그대로의",
        "misrepresent : 잘못 표현하다", "axis : 축", "vertical : 세로", "horizontal : 가로", "modest : 적당한", "notable : 주목할만한", "argument : 주장", "hence : 이런 이유로",
        "unit : 단위", "assume : 추정하다", "emphasize : 강조하다", "state : 말하다, 진술하다", "debate : 토론", "support : 뒷받침하다", "reinforce : 강화하다",
        "proper : 적절한", "objective : 객관적인", "convince A of B : A에게 B를 납득시키다", "come across : 유연히 마주치다", "blindly : 맹목적으로", "in detail : 상세하게",
        "judge : 판단하다"
    ]
    document.getElementById("word").innerHTML = "영단어"
    document.getElementById("뜻").innerHTML = "뜻"
}

// 뜻 보여주는 함수 
function 뜻보여주기(){
    if(document.getElementById("뜻").innerText != "다 봤습니다"){
        document.getElementById("뜻").innerHTML = 영단어구분[1]
    }
}
