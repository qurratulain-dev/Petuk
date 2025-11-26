import React, { useState } from 'react';
import contactImg from '../../assets/form.png';

const Form = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    // Input change 
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setError('');
        setSuccess('');
    }
    // Form submit 
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.subject || !formData.message) {
            setError('Please fill all required fields.');
            return;
        }
        // console
        console.log('Form Submitted:', formData);

        setSuccess('Your message has been sent successfully!');
        setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
        });
    }
    return (
        <section >
            <div className='max-w-6xl mx-auto px-5 py-10 flex flex-col md:flex-row gap-10 items-center'>

                <form
                    onSubmit={handleSubmit}
                    className='basis-full md:basis-2/5 bg-white shadow-lg p-5 rounded-lg text-sm text-zinc-500 font-light'>
                    <h2 className='text-2xl font-semibold text-zinc-700 mb-6'>Have Any Questions?</h2>

                    <div className='flex flex-col mb-4'>
                        <label htmlFor="name" className='pb-2 font-medium'>Your Name <span className='text-red-500'>*</span></label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            value={formData.name}
                            onChange={handleChange}
                            className='focus:outline-none border border-zinc-300 rounded p-2'/>
                    </div>

                    <div className='flex flex-col mb-4'>
                        <label htmlFor="email" className='pb-2 font-medium'>Your Email <span className='text-red-500'>*</span></label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={formData.email}
                            onChange={handleChange}
                            className='focus:outline-none border border-zinc-300 rounded p-2'/>
                    </div>

                    <div className='flex flex-col mb-4'>
                        <label htmlFor="subject" className='pb-2 font-medium'>Subject <span className='text-red-500'>*</span></label>
                        <input
                            type="text"
                            name="subject"
                            id="subject"
                            placeholder='Enter subject'
                            value={formData.subject}
                            onChange={handleChange}
                            className='focus:outline-none border border-zinc-300 rounded p-2'/>
                    </div>

                    <div className='flex flex-col mb-4'>
                        <label htmlFor="message" className='pb-2 font-medium'>Message <span className='text-red-500'>*</span></label>
                        <textarea
                            name="message"
                            id="message"
                            rows={5}
                            placeholder='Write your message here...'
                            value={formData.message}
                            onChange={handleChange}
                            className='focus:outline-none border border-zinc-300 rounded p-2'
                        ></textarea>
                    </div>
                    {/* submit hony ya na hony py Message */}
                    {error && <p className='text-red-500 mb-4'>{error}</p>}
                    {success && <p className='text-green-500 mb-4'>{success}</p>}
                    {/* Submit Button */}
                    <button
                        type='submit'
                        className='bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600 transition-colors duration-300'>
                        Send Message
                    </button>
                </form>

                {/* Image Section */}
                <div className='basis-full md:basis-3/5 relative h-full w-full rounded-lg overflow-hidden'>
                    <img
                        src={contactImg}
                        alt="Contact"
                        className='h-full w-full object-cover' />
                </div>
            </div>
        </section>
    )
}

export default Form;
