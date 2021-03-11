var test_Word = []

var day_1 = []
var day_2 = []
var day_3 = []
var day_4 = []
var day_5 = []
var day_6 = []
var day_7 = []
var day_8 = []
var day_9 = []
var day_10 = []
var day_11 = []
var day_12 = []
var day_13 = []
var day_14 = []
var day_15 = []
var days = []

fetch("./word_data.json") // read json
    .then(function(resp){
        return resp.json();
    })
    .then(function(data){
        day_1 = data["day1"]
        day_2 = data["day2"]
        day_3 = data["day3"]
        day_4 = data["day4"]
        day_5 = data["day5"]
        day_6 = data["day6"]
        day_7 = data["day7"]
        day_8 = data["day8"]
        day_9 = data["day9"]
        day_10 = data["day10"]
        day_11 = data["day11"]
        day_12 = data["day12"]
        day_13 = data["day13"]
        day_14 = data["day14"]
        day_15 = data["day15"]
        days = [day_1, day_2, day_3, day_4, day_5, day_6, day_7, day_8, day_9, day_10, day_11, day_12, day_13, day_14, day_15]
    });


function Add_DayWords(startDay, endDay){ // 보여줄 영단어 test_Word에 push하기
    for(i = startDay - 1; i < endDay; i++){
        for(j = 0; j < Object.keys(days[i]).length; j++){
            test_Word.push(days[i][String(j + 1)])
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