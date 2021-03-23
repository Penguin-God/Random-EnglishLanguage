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

// 시작
function Start() {
    Add_DayWords()
    HideAndShow()
    ShowCurrentDay()

    Current_WordCount()
}

function Add_DayWords(){ // startDay, endDay
    for(i = 0; i < testDays.length; i++){
        for(j = 0; j < Object.keys(testDays[i]).length; j++){ // test_Word에 json file의 영단어 넣는 반복문
             test_Word.push(testDays[i][String(j + 1)])
        }
    }
}

function HideAndShow() {
    $("#getDays").toggle()
    $("#word_note").toggle()
}

function ShowCurrentDay() {
    var currentDays = "현재 포함되어 있는 day :"
    for(var i = 0; i < currentDay.length; i++){
        currentDays += "  Day" + String(currentDay[i])
    }
    document.getElementById("currentDay").innerHTML = currentDays
}


// day 추가
function AddDay(day) {
    const button_id = "day" + String(day) + "_Button"
    if(document.getElementById(button_id).style.color != "red"){
        GetDay(day)
        Change_ButtonColor(button_id, "red")
    }
    else{
        RemoveDay(day)
        Change_ButtonColor(button_id, "black")
    }
}

var currentDay = []
var testDays = []
function GetDay(day) {
    testDays.push(days[day - 1])
    currentDay.push(day)
}

function RemoveDay(onclickDay) {
    for(var i = 0; i < currentDay.length; i++){
        if(currentDay[i] == onclickDay){
            testDays.splice(i, 1)
        }
    }
}

function Change_ButtonColor(id, buttonColor) {
    document.getElementById(id).style.color = buttonColor
}


// 랜덤으로 영단어 보여주기
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
        Current_WordCount(test_Word)
        return;
    }

    if(document.getElementById("랜덤영단어").innerText == "다음 영단어"){
        Split_Englsih_Korean()
        ConveyMeaning_ToHTML()
        document.getElementById("랜덤영단어").innerHTML = "뜻 확인하기"
    }
    else{
        뜻보여주기()
        WordSplice()
        Current_WordCount(test_Word)
    }
}

function WordSplice() {
    test_Word.splice(randomNumber, 1) // 한번 본 영단어  삭제
}
 
function 뜻보여주기(){
    document.getElementById("뜻").innerHTML = 영단어구분[1]
    document.getElementById("랜덤영단어").innerText = "다음 영단어"
}

function Current_WordCount() {
    currentWord = test_Word.length
    currentWord_Text = "뜻을 확인하지 않은 영단어가" + "<br>" + String(currentWord) + "개 남았습니다."
    document.getElementById("wordCount_Text").innerHTML = currentWord_Text
}


// 재시작
function ReStart()
{
    HideAndShow()
    ResetValue()
}

function ResetValue() {
    test_Word = []
    testDays = []
    currentDay = []
    ResetColor()
    document.getElementById("word").innerHTML = "영단어"
    document.getElementById("뜻").innerHTML = "뜻"
}

function ResetColor() {
    for(var i = 0; i < 15; i++){
        day_Id = "day" + String(i + 1) + "_Button"
        Change_ButtonColor(day_Id, "black")
    }
}
