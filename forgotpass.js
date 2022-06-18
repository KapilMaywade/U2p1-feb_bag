let data=JSON.parse(localStorage.getItem("user"))


function hello(event){
  let  krish= document.querySelector('#krish')
  let p1=document.createElement("p")
  let p2=document.createElement("P")
  let email=document.querySelector('#krish').value;
  if(email==""){
    p1.innerText="Sorry, looks like something went wrong. Please correct the following and submit again:"
    p2.innerText="* Please fill E-mail field."
    let div = document.querySelector('#dis');
    div.append(p1,p2)
  }

  else{
    let pd=data.filter(function(elem,index){
    return elem.email===email 
  })
    if(pd.length==0 && email!=""){
      p1.innerText="Sorry, looks like something went wrong. Please correct the following and submit again:"
      p2.innerText="No account found with that email."
      let div = document.querySelector('#dis');
      div.append(p1,p2)
      krish.reset()
    }
   
    else{
        let div = document.querySelector('#dis');
        div.innerHTML=""
        let h4=document.querySelector('h4');
        h4.innerHTML=""
        let p= document.querySelector('#s');
        p.innerHTML="";
        p.innerText="We've sent you an email with a link to update your password."
        p.style.border="1px solid gray"
        p.style.padding="10px"
        console.log(pd)
  }
}   
}
