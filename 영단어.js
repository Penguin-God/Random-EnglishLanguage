// if(1){
//     document.write(Math.floor(Math.random() * 100));
// }
const 영단어원본 = ["one : 1", "two : 2", "three : 3", "four : 4", "five : 5", "six : 6", "seven : 7"]
var word = ["one : 1", "two : 2", "three : 3", "four : 4", "five : 5", "six : 6", "seven : 7"] // Key가 영단어 value가 뜻

function RandomWord() 
{
    // 배열크기에 맞는 수 랜덤으로 부르고 자르기
    var RandomArray = Math.floor(Math.random() * word.length)
    var 영단어구분 = word[RandomArray].split(":")

    // 배열 구분 및 html에 값 전달
    document.getElementById("word").innerHTML = 영단어구분[0]
    document.getElementById("word").innerHTML = 영단어구분[1]

    // 이미 한번 본 영단어 삭제
    word.splice(RandomArray, 1) // .splice(index, 삭제할원소 개수, 치환할 내용)

    // 영단어 다 볼시 문구
    if(word.length == 0){
        document.getElementById("word").innerHTML = "영단어를"
        document.getElementById("뜻").innerHTML = "다 봤습니다"
    }

    // 확인용 출력
    console.log(RandomArray) 
    console.log(word)
}

function 다시하기()
{
    word = ["one : 1", "two : 2", "three : 3", "four : 4", "five : 5", "six : 6", "seven : 7"]
    document.getElementById("word").innerHTML = "영단어"
    document.getElementById("뜻").innerHTML = "뜻"
}

// 뜻 보여주기 함수 아직 미완 
function 뜻보여주기(){
    document.getElementById("뜻").innerHTML = 영단어구분[1]
}

