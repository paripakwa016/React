import { useState, useCallback, useEffect, useRef } from 'react'




function App() {
  const [Pass,Password_setter]=useState("");
  const [numbers,numbers_setter]=useState(false);
  const [characters,characters_setter]=useState(false);
  const [length,length_setter]=useState(8);
  const Password=useCallback(Password_generator,[numbers,characters,length,Password_setter])
  const passwordRef = useRef(null)

  function Password_generator(){
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let result=""
    if(numbers)str+="0123456789";
    if(characters)str+="~!@#$%^&*()_+|}{?";
    let counter = 0;
      while (counter < length) {
        result += str.charAt(Math.floor(Math.random() * str.length));
        counter ++;
      }
      Password_setter(result);
  }
  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(Pass)
  }, [Pass])

  useEffect(() => {
    Password()
  }, [length, numbers, characters, Password])
  
  return (
  <div className='w-full h-full'>
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className='text-white text-center my-3'>Password generator</h1>
    <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
            type="text"
            value={Pass}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}
        />
        <button
         onClick={copyPasswordToClipboard}
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        >copy</button>
        
    </div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input 
        type="range"
        min={8}
        max={24}
        value={length}
         className='cursor-pointer'
         onChange={(e)=>length_setter(e.target.value)}
          />
          <label>Length: {length}</label>
      </div>
      <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          defaultChecked={numbers}
          id="numberInput"
          onChange={()=>numbers_setter((prev)=>!prev)}
      />
      <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={characters}
              id="characterInput"
              onChange={()=>characters_setter((prev)=>!prev)}
          />
          <label htmlFor="characterInput">Characters</label>
      </div>
    </div>
</div></div>
    
  )
}

export default App