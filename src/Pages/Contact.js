
import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
  });

  const [formErrors, setFormErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    setFormErrors({
      ...formErrors,
      [name]: '',
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

  
    let errors = {};
    if (formData.firstName.trim() === '') {
      errors.firstName = ' Required❗';
    }
    if (formData.lastName.trim() === '') {
      errors.lastName = ' Required❗';
    }
    if (formData.email.trim() === '') {
      errors.email = ' Required❗';
    }
    if (formData.subject.trim() === '') {
      errors.subject = 'Required❗';
    }
    if (formData.message.trim() === '') {
      errors.message = 'Message is required❗';
    }

    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      setSubmitStatus('✅ Form submitted successfully!');
      alert('Form submitted successfully!');
    } else {
      setSubmitStatus('❌ Form has errors. Please check and try again.');
      alert('Form has errors. Please check and try again.');
    }
  };

  return (
    <>
      <div className="ContactWrapper">
        <div className='Contact-1'>
          <h1>Contact</h1>
          <span>Phone</span>
          <p className='Num'>91-7075780635</p>
          <h2>Email</h2>
          <p>bacheharika@gmail.com</p>
        </div>

        <div className='Contact-Container'>
          <form onSubmit={handleSubmit}>
            <div className='NameSection'>
              <div className='FormItem'>
                <label>First Name</label>
                <input type="text" name="firstName" value={formData.firstName} onChange={handleChange}/>
                <p className={`Error RedText`}>{formErrors.firstName}</p>
              </div>
              <div className='FormItem'>
                <label>Last Name</label>
                <input type="text" name="lastName" value={formData.lastName} onChange={handleChange}/>
                <p className={`Error RedText`}>{formErrors.lastName}</p>
              </div>
            </div>

            <div className='EmailSubjectSection'>
              <div className='FormItem'>
                <label>Email *</label>
                <input type='text' name="email" value={formData.email} onChange={handleChange}/>
                <p className={`Error RedText`}>{formErrors.email}</p>
              </div>
              <div className='FormItem'>
                <label>Subject</label>
                <input type='text' name="subject" value={formData.subject} onChange={handleChange}/>
                <p className={`Error RedText`}>{formErrors.subject}</p>
              </div>
            </div>

            <div className='MessageSection'>
              <div className='FormItem'>
                <label>Message</label>
                <input type='text' name="message" style={{ height: '100px', width: '400px' }} value={formData.message} onChange={handleChange}/>
                <p className={`Error RedText`}>{formErrors.message}</p>
              </div>
              <div className='SubmitCircle' onClick={handleSubmit}>
  <button type="button" className='SubmitText' style={{ border: 'none' }}>Submit</button>
</div>

            </div>

            {submitStatus && <p className={`SubmitStatus RedText`}>{submitStatus}</p>}
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;

