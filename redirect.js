var random = new Array();
random[0]="https://google.com"
random[1]="https://bing.com"
random[2]="https://aol.com"
random[3]="https://yahoo.com"
random[4]="https://yandex.com"
function nextPage() {
var state = null;
if (localStorage.randomState) {
state = JSON.parse(localStorage.randomState);
if (state.order.length != random.length) {
state = null; }}
if (!state) { state = { order: [], index: 0 };
for (var i = 0; i < random.length; i++) {
state.order.splice(Math.floor(Math.random() * (i + 1)), 0, i);}}
var page = random[state.order[state.index]];
state.index = (state.index + 1) % random.length;
localStorage.randomState = JSON.stringify(state);
location.href = page; 
}; window.location.replace = random[nextPage()]
