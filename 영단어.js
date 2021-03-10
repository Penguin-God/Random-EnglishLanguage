var test_Word = []

const day_1 = []
const day_2 = []
const day_3 = []
const  day_4 = []
const  day_5 = []
const  day_6 = []
const  day_7 = []
const  day_8 = []
const  day_9 = []
const  day_10 = []
const  day_11 = []
const  day_12 = []
const  day_13 = []
const  day_14 = []
const  day_15 = []

const days = [day_1, day_2, day_3, day_4, day_5, day_6, day_7, day_8, day_9, day_10, day_11, day_12, day_13, day_14, day_15]

fetch("./word_data.json") // read json
    .then(function(resp){
        return resp.json();
    })
    .then(function(data){
        for(var i = 0; i < days.length; i++){
            var word_day = "day" + String(i + 1)
            days[i] = data[word_day]
            console.log(days[i])
        }
    });

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