import React from 'react'
import './form.css'
const Form = () => {
  const [formStatus, setFormStatus] = React.useState('Send')
  const onSubmit = (e) => {
    e.preventDefault()
    setFormStatus('Submitting...')
    const { name, email, message } = e.target.elements
    let conFom = {
      name: name.value,
      email: email.value,
      message: message.value,
    }
    console.log(conFom)
  }
  return (
    <div className="formcontainer">
     
      <form onSubmit={onSubmit}>
        <div className="formfield">
          <label  htmlFor="name">
            Name
          </label>
          <input  type="text" id="name" required />
        </div>
        <div className="formfield">
          <label  htmlFor="email">
            Email
          </label>
          <input  type="email" id="email" required />
        </div>
        <div className="formfield">
          <label htmlFor="message">
            Message
          </label>
          <textarea  id="message" required />
        </div>
        <button className="formbtn" type="submit">
          {formStatus}
        </button>
      </form>
    </div>
  )
}
export default Form