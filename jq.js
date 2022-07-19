/* js로 하는 방법(1)
let spanEl = document.querySelector("span");
spanEl.remove();
 
jquery로 하는 방법(2)
$("span").remove(); */

/* function showValue() {
  $("input").val("가나다라마바사");
//   document.querySelector("input").value = "가나다라마바사";
}
 */

/* $("span").text("가나다라마바사");
document.querySelector("span").value = "가나다라마바사";
 */

/* function showValue() {
  $("span").val(".textBox.val()");
}

function changeValue() {
  $(".textBox").val("가나다라마바사");
} */

/* const inputText = document.querySelector(".text-input");
const writeBtn = document.querySelector(".write-btn");
const modifyBtn = document.querySelector(".modify-btn");
const spanEl = document.querySelector("span");

modifyBtn.addEventListener("click", () => {
  inputText.value = "가나다라마바사";
});

function changeSpan() {
  spanEl.textContent = inputText.value;
} */

/* // JQUERY 버전의 실습
$(".write-btn").on("click", () => {
  $("span").text($(".text-input").val());
  $("span").text(text);
});

// on은 jquery용임. addEventListener랑 정확하게 같은 기능을 한다
$(".modify-btn").on("click", () => {
    $(".text-input").value("가나다라마바사");
}) */

/* // attr은 jquery용, setAttribute와 같은 기능
// 텍스트 박스 누르면 버튼으로 속성 바뀜
$(".text-input").on("click", () => {
  $(".text-input").attr("type", "button");
  $(".text-input").attr("value", "button");
}); */

/* // js 버전(attr 실습)
const textEl = document.querySelector(".text-input");
const Btn1El = document.querySelector(".modify-btn-1");
const Btn2El = document.querySelector(".modify-btn-2");

Btn1El.addEventListener("click", () => {
  document.querySelector(".text-input").setAttribute("placeholder", "변경1을 누르셨습니다.");
});
Btn2El.addEventListener("click", () => {
  document.querySelector(".text-input").setAttribute("type", "radio");
});
 */

/* // jquery 버전(attr 실습)
$(".modify-btn-1").on("click", () => {
  $(".text-input").attr("placeholder", "변경1을 누르셨습니다");
});

$(".modify-btn2").on("click", () => {
  $(".text-input").attr("type", "radio");
}); */

/* // js 버전(배경 색상을 오렌지 색상으로 바꾸는 기능)
function changeCss() {
  document.querySelector("div").style = "background-color: orange";
}

// jquery 버전
function changeCss2() {
  $("div").css("background-color", "skyblue");
}
 */

// $("p").html("<h1>루피</h1>");

// document.querySelector("p").innerHTML = "<h1>루피</h1>";
/* const li = document.createElement("li");
li.textContent = "추가용";

$(".me").before(li);
$(".me").after(li);
 */

/* const textInput = document.querySelector(".text-input");
const modifyBtn1 = document.querySelector(".modify-btn-1");
const modifyBtn2 = document.querySelector(".modify-btn-2");
const list = document.querySelector("ul");

modifyBtn1.addEventListener("click", () => {
  const addLi = document.createElement("li");
  addLi.textContent = textInput.value;

  list.append(addLi);
  textInput = "";
});

function prependLi() {
  let text = $(".text-input").val();
  $("ul").prepend(`<li>${text}</li>`);
} */

const children = document.querySelector("div").children;
const childrenNodes = document.querySelector("div").childrenNodes;

console.log("child", children);
console.log("nodes", childNodes);
