import React, { useRef } from 'react'

function Notepad() {

  const userInp = useRef();

  const userOp = useRef();

  const convertToUpper = ()=>{
    let inp = userInp.current.value;
    let upperInp = inp.toUpperCase();
    userOp.current.value = upperInp;
  }
  const convertToLower = ()=>{
    let inp = userInp.current.value;
    let upperInp = inp.toLowerCase();
    userOp.current.value = upperInp;
  }
  const convertCapitalize = ()=>{
    //alert("capitalize button clicked")
    let inp = userInp.current.value
    const words = inp.split(" ")

   let capitalizedString= words.map((word)=>{
      return word[0].toUpperCase() + word.substring(1)    
    }).join(" ");
    userOp.current.value = capitalizedString
  }

  const copyText = ()=>{
    
    let opText = userOp.current.value;
    navigator.clipboard.writeText(opText)
    alert("done")
  }
  return (
    <div className='container'>
      <h3 className='text-center my-4'>Advance Notepad</h3>
      <div className='border  border-3 bporder-dark p-3 '>
      <textarea name="userInp" id="userinp"  rows="4" className='w-100 p-1 fs-3 form-control' ref={userInp}></textarea>

      <div className='row justify-content-center my-3 '>
        <button className=" col-md-2 col-sm-10 btn btn-dark mx-2 my-1 px-5" onClick={convertToUpper} >UPPERCASE</button>
        <button className=" col-md-2 col-sm-10 btn btn-dark mx-2 my-1 px-5" onClick={convertToLower}>lowercase</button>
        <button className="col-md-2 col-sm-10 btn btn-dark mx-2 my-1 px-5" onClick={convertCapitalize}>Capitalize</button>
      </div>
      <textarea name="userOp" id="userOp" rows="4" className='w-100 p-1 fs-3 form-control' ref={userOp} readOnly></textarea>
      <button className='btn btn-primary' onClick={copyText}>Copy</button>
      </div>
    </div>
  )
}

export default Notepad
