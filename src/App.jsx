import { useState } from 'react'
import './App.css'
import { Listado } from './assets/componets/Leandro'


function App() {
const [email, setEmail] = useState('@');
const error = (email)=>{
  if(email.includes('@') && email.length > 6){
    return('active')
  }else{
    return('')
  }
};


const actived = error(email);


const validate = (email)=>{
  if(!email.includes('@')) 
    return 'Valid email required'
}

const errorMessage = validate(email)
console.log(email)




  return (
    <>
    <main className='main'>
      <article className='card'>
        <div className={`card-left ${actived}`}>
          <strong className='card-left-title'>Stay updated!</strong>
          <span className='card-left-text'>Join 60,000 product managers receiving monthly updates on:</span>
          <Listado text='Product discovery and building what matters'/>
          <Listado text='Measuring to ensure updates are a sucess'/>
          <Listado text='And much more!'/>
          <form 
          className='card-left-formulario'
          onSubmit={(ev)=>
            {ev.preventDefault();
            setEmail(ev.target.email.value);}}>
          <label className='card-left-email' htmlFor="email">Email Adress<span className='message-error'>{errorMessage}</span></label>
          <input 
          className={`card-email-input ${!email.includes('@') || email =='' ? 'active' : ''}`}
          type="text"
          name="email"
          placeholder='email@company.com'
          autoComplete='off'
           />

           <input 
           className='card-btn'
           type="submit" />
          </form>
        </div>
        <figure className='article-right'>
        </figure>
        <div className={`card-subscribing ${actived}`}>
          <figure>
          <svg xmlns="http://www.w3.org/2000/svg" width="51" height="51" viewBox="0 0 21 21"><g fill="none"><circle cx="10.5" cy="10.5" r="10.5" fill="#FF6155"/><path stroke="#FFF" strokeWidth="2" d="M6 11.381 8.735 14 15 8"/></g></svg>
          </figure>
          <strong className='card-subscribing-title'>Thanks for subscribing!</strong>
          <p className='card-subscribing-text'>A confirmation email has been sent to <span className='email-selected'>{email}</span>. Please open it and click the button inside to confirm your suscription</p>
          <button className='card-btn'> Dismiss message</button>
        </div>
      </article>
    </main>
    </>
  )
}





export default App
