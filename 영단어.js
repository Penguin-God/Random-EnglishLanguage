// Key가 영단어 value가 뜻
const day_1 = [
"social : 사회적인", "overlook : 간과하다, 못 본 체하다", "public : 공공의, 대중의", "undo : (잠긴 것을) 풀다, 열다", "undermine : 약화[손상]시키다", "reflect : 반사하다, 반영하다",
"object : 물건, 물체, 목표", "lead : 안내하다, 이끌다", "state : 상태, 국가", "instance : 사례, 경우", "evidence : 증거, 증명", "perform : 행하다, 실시하다", "influence : 영향(력)",
"achieve : 이루다, 성취하다", "quarrel : 다투다, 언쟁을 벌이다", "offer : 제공하다, 제의[제안]하다", "occur : 일어나다, 발생하다", "concern : 걱정, 관계", "risk : 위험", 
"ivdividual : 개개의, 개별적인, 독특한", "interpersonal : 대인 관계에 관련된", "consume : 소비[소모]히디, 먹다", "impact : 영향, 충격", "lack : 부족, 결핍", "reduction : 축소, 감소",
"position : 위치, 자세, 태도", "compact : 소형차, 콤팩트 (휴대용 화장 분갑)", "endanger : 위험에 빠뜨리다", "term : 용어, 기간, 학기", "demand : 요구, 수요", "simplicity : 간단함, 단순함",
"medium : 중간의", "ubiquitous : 어디에나 있는", "support : 지지[옹호]하다, 부양하다", "contrast : 차이, 대조", "force : 힘, 폭력", "mean : 의미하다, 의도하다", "encode : 암호화하다",
"hygiene : 위생", "condition : 상태, 환경, 조건", "hue : 색조, 빛깔", "rate : 속도, 비율, 요금", "capacity : 용량, 능력", "crude : 천연 그대로의, 대충의"
]

var test_Word = []

function WordSelection(day){
    if(day == 1){
        test_Word = day_1
    }
    else if(day == 3){
        test_Word = test_Word
    }
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
    else if(document.getElementById("랜덤영단어").innerText == "뜻 확인하기"){
        뜻보여주기()
    }
}

function ReStart()
{
    test_Word = []
}

// 뜻 보여주는 함수 
function 뜻보여주기(){
    document.getElementById("뜻").innerHTML = 영단어구분[1]
    test_Word.splice(randomNumber, 1) // 한번 본 영단어  삭제
    document.getElementById("랜덤영단어").innerText = "다음 영단어"
}
