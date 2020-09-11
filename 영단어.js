var word = ["perserve", "ordinary", "come up with", "method", "rely on", "charm", "lifelong"] // Key가 영단어 value가 뜻
var number = ["지키다, 간직하다", "평범한", "~을 생각해내다", "방법", "~에 의존하는", "매력, 작은 장식물", "평생의"] // 뜻

var RandomArray

function RandomWord() 
{
    if(document.getElementById("뜻").innerText == "뜻" && document.getElementById("word").innerText != "영단어"){
        console.log("awsfdga")
    }
    else{
        // 배열크기에 맞는 수 랜덤으로 부르고 자르기
        RandomArray = Math.floor(Math.random() * word.length)

        // 배열 구분 및 html에 값 전달
        document.getElementById("word").innerHTML = word[RandomArray]
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
    word = ["perserve", "ordinary", "come up with", "method", "rely on", "charm", "lifelong"]
    number =  ["지키다, 간직하다", "평범한", "~을 생각해내다", "방법", "~에 의존하는", "매력, 작은 장식물", "평생의"]
    document.getElementById("word").innerHTML = "영단어"
    document.getElementById("뜻").innerHTML = "뜻"
}

// 뜻 보여주는 함수 
function 뜻보여주기(){
    if(document.getElementById("뜻").innerText != "다 봤습니다"){
        document.getElementById("뜻").innerHTML = number[RandomArray]
        number.splice(RandomArray, 1)
    }
}
