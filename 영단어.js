var test_Word = []

const day_1 = [
"social : 사회적인", "overlook : 간과하다, 못 본 체하다", "public : 공공의, 대중의", "undo : (잠긴 것을) 풀다, 열다", "undermine : 약화[손상]시키다", "reflect : 반사하다, 반영하다",
"object : 물건, 물체, 목표", "lead : 안내하다, 이끌다", "state : 상태, 국가", "instance : 사례, 경우", "evidence : 증거, 증명", "perform : 행하다, 실시하다", "influence : 영향(력)",
"achieve : 이루다, 성취하다", "quarrel : 다투다, 언쟁을 벌이다", "offer : 제공하다, 제의[제안]하다", "occur : 일어나다, 발생하다", "concern : 걱정, 관계", "risk : 위험", 
"ivdividual : 개개의, 개별적인, 독특한", "interpersonal : 대인 관계에 관련된", "consume : 소비[소모]히디, 먹다", "impact : 영향, 충격", "lack : 부족, 결핍", "reduction : 축소, 감소",
"position : 위치, 자세, 태도", "compact : 소형차, 콤팩트 (휴대용 화장 분갑)", "endanger : 위험에 빠뜨리다", "term : 용어, 기간, 학기", "demand : 요구, 수요", "simplicity : 간단함, 단순함",
"medium : 중간의", "ubiquitous : 어디에나 있는", "support : 지지[옹호]하다, 부양하다", "contrast : 차이, 대조", "force : 힘, 폭력", "mean : 의미하다, 의도하다", "encode : 암호화하다",
"hygiene : 위생", "condition : 상태, 환경, 조건", "hue : 색조, 빛깔", "rate : 속도, 비율, 요금", "capacity : 수용력, 용량, 능력", "crude : 천연 그대로의, 대충의"
]

const day_2 = [
    "comparison : 비교, 대조", "manner : 방법, 태도", "intelligence : 지능, 이해력, 첩보", "describe : 서술[묘사]하다", "abnormal : 비정상적인, 이상한",
    "critical : 비판[비평]적인, 위태로운, 중대한", "political : 정치의, 정치적인", "acoustic : 청각의, 음향의", "maintain : 유지[지속]하다, 주장하다",
    "accurate : 정확한, 정밀한", "display : 전시[진열]하다, (감정, 성질 등을)나타내다", "exploration : 탐험, 탐사, 탐구", "value : (경제적)가치, 중요성",
    "remain : 여전히 ~이다, 남다", "drive : 운전하다, (어떤 방향으로) 몰다", "moral : 도덕상의", "reveal : (비밀을)폭로하다, 보이다", "reward : 보상(금)",
    "potential : 가능성이 있는, 잠재적인", "deceptive : 속이는, 기만적인", "curl : 곱슬곱슬하게 하다, (몸을)웅크리다", "resource : 자원, 원천, 자산",
    "crop : 농작물, 수확량", "access : 접근, 출입", "appropriate : 적절한", "perspective : 관점, 시각, 원근법", "diameter : 지름, 직경", 
    "influx : (사람, 자금 등의)유입, 밀려듬", "personality : 성격, 개성, 유명인사", "process : 과정, 절차", "prevent : 막다, 예방하다", "germinate : 싹이트다, 발아하다",
    "deal : 다루다, (상품을)거래하다", "aspect : 측면, 국면, 외관", "psyche : 정신, 마음", "hold : 잡고있다, 견디다, 수용하다", "headquarters : 본사, 본부",
    "subject : 주제, 학과, 연구[실험]대상", "degree : (각도, 온도계 등의)도, 정도, 범위", "quality : 질, 특질, 특성", "immature : 미숙한",
    "project : 계획, 프로젝트", "claim : (권리 등을) 요구[청구]히디, (사실을)주장하다", "impede : 저해[방해]하다", "approve : 찬성하다, 승인하다",
    "imminent : 임박한, 절박한"    
]

const day_3 = [
"tendency : 경향, 성향", "observe : 관찰[주시]하다, (법률, 규칙 등을)준수하다, 말하다", "diversity : 다양성", "nonverbal : 말을 사용하지 않는, 비언어적인", "escalate : 확대되다, 증가하다",
"native : 출생지의, 토착의", "contact : 연락, 접촉, 맞닿음", "distance : 거리", "enhance : 높이다, 강화하다", "radiant : 빛나는, 환한", "select : 선택[선발]하다", "interaction : 상호작용",
"contribute : 기부하다, 기여하다, 공헌하다", "specific : 명확한, 구체적인", "authority : 권위, 권력", "ignore : 무시하다", "relative : 상대적인, 관련있는", "significant : 중요한, 상당한",
"identify : (신원을)확인하다, 동일시하다", "practice : 실행, 관행, 연습", "aware : 알고있는", "era : 시대", "chemical : 화학의, 화학적인", "previous : 이전의, 앞의", "shiver : (추위, 공포 등으로)몸을 떨다",
"perceive : 지각[인지]하다, 이해하다", "assume : 추정하다, (책임, 역할을)맡다", "conduct : 수행하다, 안내하다, 지휘하다", "prove : 입증[증명]하다, (~임이)판명되다", "eradicate : 근절하다, 뿌리뽑다",
"outcome : 결과, 성과", "anxiety : 불안, 열망", "present : 현재, 선물", "genetic : 유전(학)의", "promote : 촉진[장려]하다, 홍보하다, 진급[승진]시키다", "irrational : 비이성적인, 분별이 없는",
"bear : 참다, (감정을)가지다, (아이를)낳다, (책임을)지다", "bias : 편견, 편향", "heritage : (사회적, 문화적)유산", "colleague : 동료", "majority : 다수(집단)", "inclusive : 포괄적인, (~을)포함한",
"fast : 단식[금식]하다", "conflict : 충돌, 갈등", "enrich : 부유하게 하다, 질을 높이다", "mindful : 염두에 두는, 주의하는"
]

const  day_4 = [
    "this is 4"
]

const  day_5 = [
    "this is 5"
]

const  day_6 = [
    "this is 6"
]

const  day_7 = [
    "this is 7"
]

const  day_8 = [
    "this is 8"
]

const  day_9 = [
    "this is 9"
]

const  day_10 = [
    "this is 10"
]

const days = [day_1, day_2, day_3, day_4, day_5, day_6, day_7, day_8, day_9, day_10]

function Add_DayWords(startDay, endDay){
    for(i = startDay - 1; i < endDay; i++){
        for(j = 0; j < days[i].length; j++){
            test_Word.push(days[i][j])
        }
    }
}

function SetDay() {
    startDay = document.getElementById("startDay").value
    endDay = document.getElementById("endDay").value
    Add_DayWords(startDay, endDay)
    HideAndShow()
}

function HideAndShow() {
    $("#getDays").toggle()
    $("#word_note").toggle()
}


var randomNumber
var 영단어구분

function Split_Englsih_Korean() {
    randomNumber = Math.floor(Math.random() * test_Word.length)
    영단어구분 = test_Word[randomNumber].split(":")
}

function ConveyMeaning_ToHTML() {
    document.getElementById("word").innerHTML = 영단어구분[0]
    document.getElementById("뜻").innerHTML = "뜻"
}

function RandomWord()
{
    if(test_Word.length == 0){ // 영단어 다 볼시 문구
        document.getElementById("word").innerHTML = "영단어를"
        document.getElementById("뜻").innerHTML = "다 봤습니다"
        return;
    }

    if(document.getElementById("랜덤영단어").innerText != "뜻 확인하기"){
        Split_Englsih_Korean()
        ConveyMeaning_ToHTML()
        document.getElementById("랜덤영단어").innerHTML = "뜻 확인하기"
    }
    else{
        뜻보여주기()
    }
}

// 뜻 보여주는 함수 
function 뜻보여주기(){
    document.getElementById("뜻").innerHTML = 영단어구분[1]
    test_Word.splice(randomNumber, 1) // 한번 본 영단어  삭제
    document.getElementById("랜덤영단어").innerText = "다음 영단어"
}


function ReStart()
{
    test_Word = []
    HideAndShow()
    ResetValue()
}

function ResetValue() {
    document.getElementById("startDay").value = ""
    document.getElementById("endDay").value = ""
    document.getElementById("word").innerHTML = "영단어"
    document.getElementById("뜻").innerHTML = "뜻"
}