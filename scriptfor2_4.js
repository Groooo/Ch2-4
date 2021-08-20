var dong=1, ho=1, count=15;
var a=0, b=0;
here();
function here(){
  document.querySelector('#address').innerText = (dong+'-'+ho);
  document.querySelector('#life').innerText = count;
}
function answer(){
  if(count>=0&&dong==31&&ho==8){
    window.alert("Success!");
    window.removeEventListener("keydown", go);
  }
  if(count<0){
    window.alert("Fail!");
    window.removeEventListener("keydown", go);
    location.reload();
  }
}
window.addEventListener("keydown", go);
function go(){
  if(event.keyCode==37){
    a--;
    count=count-1;
  }
  if(event.keyCode==38){
    b++;
    count=count-1;
  }
  if(event.keyCode==39){
    a++;
    count=count-1;
  }
  if(event.keyCode==40){
    b--;
    count=count-1;
  }
  let k=Math.max(Math.abs(a),Math.abs(b));
  if(b==k){
    ho=Math.max(ho,k+1);
    dong=(2*k-1)*(2*k-1)+k+a;
  }
  if(a==k){
    ho=Math.max(ho,k+1);
    dong=(2*k-1)*(2*k-1)+3*k-b;
  }
  if(b==-k){
    ho=Math.max(ho,k+1);
    dong=(2*k-1)*(2*k-1)+5*k-a;
  }
  if(a==-k){
    ho=Math.max(ho,k+1);
    dong=(2*k+1)*(2*k+1)-k+b;
  }
  here();
  answer();
}
