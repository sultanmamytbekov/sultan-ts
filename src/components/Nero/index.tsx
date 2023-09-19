import img from "../img/images.png";
import img1 from "../img/VISA-logo.png";
import img2 from "../img/mmbank.png";
import img3 from "../img/optimabank.png";
import "./index.scss";
import { useState } from "react";
import uniqid from "uniqid"
// interface ITask {
//   tasks:IArray
// }
interface IArray {
  id :any
  title: string
  title1: string
  title2: string

}

const Hero = () => {
    const [tasks , setTasks] = useState<IArray[]>([])
    const [value , setValue] = useState('')
    const [value1 , setValue1] = useState('')
    const [value2 , setValue2] = useState('')
    const [num , setNum] = useState(-1)
    const [num1 , setNum1] = useState(0)
    const [none , setNone] = useState(false)
    const [num2 , setNum2] = useState(0)
    function getValue(){
        setValue('')
        setValue1('')
        setValue2('')
    }
    let imges = img
    let width = '50px'
    let color = ''
    if (num1 === 1){
      imges = img
      width = '50px'
      color = 'red'
    }
    else if (num1 === 2){
      imges = img1
      width = '65px'
      color = 'green'
    }
    else if (num1 === 3){
      imges = img2
      width="90px"
      color = 'blue'
    }
    else if (num1 === 4){
      imges = img3
      width="50px"
      color = 'purple'
    }
  
    const addTask = () => {
      const newTask:IArray = {
        id: uniqid(),
        title: value,
        title1: value1,
        title2: value2,
      };
      setTasks([...tasks, newTask])
    };
  return (
    <div id="hero">
      <div className="container">
        <div className="hero">
          <div className="hero--text">
            <h1 style={{ paddingTop: "80px" }}>Checkout</h1>
            <h2>€ 300,00</h2>
            <div className="hero--text__df">
              <p>Saved Cards</p>
              <h3 onClick={() => {
                {
                  tasks.map(el => {
                    setValue(el.title)
                    setValue1(el.title1)
                    setValue2(el.title2)
                  })
                }
              }}>
                <span>+</span> Add New
              </h3>
            </div>
            <div className="hero--text__block">
              <img src={img} alt="" />
              <h1>5142 - 8164 - 6526 - 2563</h1>
              <div>
                <p>Name</p>
                <p>Valid Till</p>
              </div>
              <div>
                <h4>{"jenner anne".toUpperCase()}</h4>
                <h4>05/34</h4>
              </div>
            </div>
            <div style={{background:none ? color : '' , borderRadius:"15px"}} className="hero--text__block1">
              <img style={{marginLeft:num1 === 3 ? '-1px' : '' , display:none ? 'block' : 'none'}} width={width} src={imges} alt="" />
              {
                tasks.slice(num,num + 1).map(el => (
                  <>
                    <h1>{el.title1.split(' ').join(' - ')}</h1>
                 <div>
                 <p>Name</p>
                 <p>Valid Till</p> 
               </div>
               <div>
                 <h4>{el.title.toUpperCase()}</h4>
               <h4>{el.title2.slice(0,5).split(' ').join('/')}</h4></div>
                  </>
                ))
              }
                    {/* <h1>{propusk ? value1.split(' ').join(' - ') : ''}</h1>
                 <div>
                 <p>{propusk ? value.length !== 0 ? 'Name': '' : ''}</p>
                 <p>{propusk ? value2.length !== 0 ? 'Valid Till': '' : ''}</p> 
               </div>
               <div>
                 <h4>{propusk ? value : ''}</h4>
               <h4>{propusk ? value2 : ''}</h4></div> */}
            
            </div>
            <button>{"Proceed".toUpperCase()}</button>
          </div>
          <div className="hero--text1">
            <h1 style={{ paddingTop: "80px" }}>Add new card</h1>
            <div className="hero--text1__block">
              <h3 style={{marginTop:'35px'}}>Enter details</h3>
              <div style={{margin:'0 0 0 15px'}}>
              <div>
                <p>Name</p>
                <input value={value} onChange={(e) => setValue(e.target.value)} type="text" />
              </div>
              <div>
                <p>Card number</p>
                <input value={value1} onChange={(e) => setValue1(e.target.value)} type="text" />
              </div>
              <div>
                <p>Expiry date</p>
                <input value={value2} onChange={(e) => setValue2(e.target.value)} type="text" />
              </div>
              <div style={{display:'flex' , alignItems:'center', justifyContent:'space-between' , width:"285px"}}>
                <img style={{border:num2 === 1? '1px solid black': 'none'}} onClick={() => {
                  setNum1(1)
                  setNum2(1)
                }} src={img} alt="" />
                <img style={{border:num2 === 2? '1px solid black': 'none'}} onClick={() => {
                  setNum1(2)
                  setNum2(2)
                }} width='55px' src={img1} alt="" />
                <img style={{border:num2 === 3? '1px solid black': 'none'}} onClick={() => {
                  setNum1(3)
                  setNum2(3)
                }} width='90px' src={img2} alt="" />
                <img style={{border:num2 === 4? '1px solid black': 'none'}} onClick={() => {
                  setNum1(4)
                  setNum2(4)
                }} width='55px' src={img3} alt="" />
              </div>
              <div style={{marginTop:'-40px' , marginLeft:'-2px'}} className="hero--text1__block--div">
                <div onClick={() => setNum1(1)} style={{background:'red' , border:num1 === 1 ? '2px solid black' : ''}}></div>
                <div onClick={() => setNum1(2)} style={{background:'green' , border:num1 === 2 ? '2px solid black' : ''}}></div>
                <div onClick={() => setNum1(3)} style={{background:'blue' , border:num1 === 3 ? '2px solid black' : ''}}></div>
                <div onClick={() => setNum1(4)} style={{background:'purple' , border:num1 === 4 ? '2px solid black' : ''}}></div>
              </div>
              </div>
              <h3 style={{marginTop:'-25px'}}>Enter details</h3>
            </div>
            <button onClick={() => {
                addTask()
                getValue()
                setNum(num + 1)
                setNone(true)
            }}>{"Proceed".toUpperCase()}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
