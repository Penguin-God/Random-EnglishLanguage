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

fetch("./word_data_test.json") // read json
    .then(function(resp){
        return resp.json();
    })
    .then(function(data){
        for(var i = 0; i < Object.keys(data).length; i++){
            let addDay = "day" + (i + 1);
            days.push(data[addDay]);
        }
        console.log(days)
    });

// 시작
function Start() {
    if(currentDay.length == 0){
        alert("선택된 Day가 없습니다. 하나 이상의 Day를 선택하고 시작해주세요")
        return
    }
    Add_DayWords()
    HideAndShow()
    ShowCurrentDay()

    Current_WordCount(test_Word)
}

function Add_DayWords(){ // startDay, endDay
    for(i = 0; i < testDays.length; i++){
        for(j = 0; j < Object.keys(testDays[i]).length; j++){ // test_Word에 json file의 영단어 넣는 반복문
             test_Word.push(testDays[i][String(j + 1)])
        }
    }
}

var currentDay = []
var testDays = []
function GetDay(day) {
    testDays.push(days[day - 1])
    currentDay.push(day)
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
    const button_id = Return_DayButtonId(day)
    if(document.getElementById(button_id).style.color != "red"){
        GetDay(day)
        Change_ButtonColor(button_id, "red")
    }
    else{
        RemoveDay(day)
        Change_ButtonColor(button_id, "black")
    }
}

function Return_DayButtonId(day) {
    const button_id = "day" + String(day) + "_Button"
    return button_id
}

function RemoveDay(onclickDay) {
    for(var i = 0; i < currentDay.length; i++){
        if(currentDay[i] == onclickDay){
            currentDay.splice(i, 1)
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
var hideMean = true // 뜻을 확인한 상태면 다음 단어로 아니라면 뜻을 보여줌
function Split_Englsih_Korean() {
    randomNumber = Math.floor(Math.random() * test_Word.length)
    영단어구분 = test_Word[randomNumber].split(":")
}

function ConveyText_ToTable(word, mean, buttonText) {
    document.getElementById("word").innerHTML = word
    document.getElementById("뜻").innerHTML = mean
    document.getElementById("랜덤영단어").innerHTML = buttonText
}


function RandomWord()
{
    if(test_Word.length == 0){ // 영단어 다 볼시
        return;
    }

    if(hideMean){
        Split_Englsih_Korean()
        ConveyText_ToTable(영단어구분[0], "뜻", "뜻 확인하기")
        hideMean = false
    }
    else{
        ConveyText_ToTable(영단어구분[0], 영단어구분[1], "다음 영단어")
        WordSplice(randomNumber)
        Current_WordCount(test_Word)
        hideMean = true
        if(test_Word.length == 0){ // 여기코드 간결하게 바꾸기
            ConveyText_ToTable(영단어구분[0], 영단어구분[1], "end")
            document.getElementById("wordCount_Text").innerHTML = "모든 영단어를 확인했습니다"
        } 
    }
}

function WordSplice(randomNumber) {
    test_Word.splice(randomNumber, 1) // 한번 본 영단어  삭제
}

function Current_WordCount(test_Word) {
    currentWord = test_Word.length
    currentWord_Text = "뜻을 확인하지 않은 영단어가" + "<br>" + String(currentWord) + "개 남았습니다."
    document.getElementById("wordCount_Text").innerHTML = currentWord_Text
}

function TestEnd() {
    ConveyText_ToTable("영단어를", "다 봤습니다", "end")
    document.getElementById("wordCount_Text").innerHTML = "모든 영단어를 확인했습니다"
}


// 재시작
function ReStart()
{
    if(test_Word.length == 0) ResetFunction_Operation()
    else Check_BackWebpage()
}

function ResetFunction_Operation(params) {
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
    for(var i = 0; i < days.length; i++){
        day_Id = "day" + String(i + 1) + "_Button"
        Change_ButtonColor(day_Id, "black")
    }
}

function Check_BackWebpage(massage) {
    backPage = window.confirm("확인하지 않은 영단어가 남아 있습니다. 정말로 처음 화면으로 돌아가시겠습니까?")
    if(backPage) ResetFunction_Operation()
}
