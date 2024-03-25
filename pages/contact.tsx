import React, { useState } from 'react';
import Layout from '../components/layout';
import Container from '../components/container';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true)

    const response = await fetch('/api/sendEmail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert('Message sent successfully');
      setFormData({ name: '', email: '', phone: '', message: '' });
    } else {
      alert('An error occurred while sending the message.');
    }
    setIsSubmitting(false)
  };

  return (
    <Layout>
      <Container>
        <div className='my-20'>
          <div className='flex flex-col items-center justify-center'>
            <h2 className="w-full py-[60px] text-4xl md:text-6xl">
              Get in touch with us.
            </h2>
            <form className='flex pt-10 flex-col md:w-3/4 sm:w-full' onSubmit={handleSubmit}>
              <input
                type='text'
                name='name'
                placeholder='FULL NAME'
                value={formData.name}
                onChange={handleChange}
                required
              />

              <input
                type='email'
                name='email'
                placeholder='EMAIL'
                value={formData.email}
                onChange={handleChange}
                required
              />

              <input
                type='tel'
                name='phone'
                placeholder='PHONE'
                value={formData.phone}
                onChange={handleChange}
                required
              />

              <textarea
                name='message'
                placeholder='MESSAGE ....'
                cols={30}
                rows={8}
                value={formData.message}
                onChange={handleChange}
                required
              />
              <button disabled={isSubmitting} className='bg-black/60 rounded-xl text-white pixel-font w-fit px-6 py-3' type='submit'>Send Message</button>
            </form>
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default ContactForm;
