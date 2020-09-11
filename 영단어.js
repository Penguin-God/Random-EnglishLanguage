var word = ["one : 1", "two : 2", "three : 3", "four : 4", "five : 5", "six : 6", "seven : 7"] // Key가 영단어 value가 뜻
var number = ["1", "2", "3", "4", "5", "6", "7"] // 뜻

var RandomArray

function RandomWord() 
{
    // 배열크기에 맞는 수 랜덤으로 부르고 자르기
    RandomArray = Math.floor(Math.random() * word.length)
    var 영단어구분 = word[RandomArray].split(":")

    // 배열 구분 및 html에 값 전달
    document.getElementById("word").innerHTML = 영단어구분[0]
    document.getElementById("뜻").innerHTML = "뜻"

    // 이미 한번 본 영단어 삭제
    word.splice(RandomArray, 1) // .splice(index, 삭제할원소 개수, 치환할 내용)

    // 영단어 다 볼시 문구
    if(word.length == 0){
        document.getElementById("word").innerHTML = "영단어를"
        document.getElementById("뜻").innerHTML = "다 봤습니다"
    }
}

function 다시하기()
{
    word = ["one : 1", "two : 2", "three : 3", "four : 4", "five : 5", "six : 6", "seven : 7"]
    document.getElementById("word").innerHTML = "영단어"
    document.getElementById("뜻").innerHTML = "뜻"
}

// 뜻 보여주는 함수 
function 뜻보여주기(){
    document.getElementById("뜻").innerHTML = number[RandomArray]
    number.splice(RandomArray, 1)
}
