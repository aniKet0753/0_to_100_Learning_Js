//simmple count notification bar handelar which inncrease the count number by changing the state by pressin button.
function App(){
const [count,setcount]=useState(1)

function increase(){
  setcount(count+1)
}
  return(
    <div>
<div>
  <div style={{width:20,backgroundColor:"red",borderRadius:9,marginLeft:8,textAlign:"center"}}>{count}</div>
  <img src='https://static.vecteezy.com/system/resources/previews/015/934/666/original/bell-icon-simple-element-symbol-for-template-design-can-be-used-for-website-and-mobile-application-vector.jpg'style={{
    width:25,
    height:25
  }} />
</div>
<div>
  <button onClick={increase}>increase Count</button>
</div>
    </div>
  )
}
//runnig clock by using useeffect and array dependency
function App(){
const [count,setcount]=useState(1)//count is ping to 1


function incresecount(){
  setcount(function(count){//here another way tto call setcound 
    return count+1
  })
}

//not applicable cus u neeed useeffect here
useEffect(function(){
  setInterval(incresecount,1000)

},[])

  return(
    <div>
<div>
  <div style={{width:20,backgroundColor:"red",borderRadius:9,marginLeft:8,textAlign:"center"}}>{count}</div>
  <img src='https://static.vecteezy.com/system/resources/previews/015/934/666/original/bell-icon-simple-element-symbol-for-template-design-can-be-used-for-website-and-mobile-application-vector.jpg'style={{
    width:25,
    height:25
  }} />
</div>
<div>
</div>
    </div>
  )
}