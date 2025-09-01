import axios from 'axios';
import React from 'react'
import { useForm } from "react-hook-form"
import toast from 'react-hot-toast';

const Contacts = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    const userDataInfo = {
      name: data.name,
      email: data.email,
      message: data.message
    }
    try {
      await axios.post("https://getform.io/f/bqoemrnb", userDataInfo)
      toast.success("meaaage send successful!")

    } catch (error) {
      console.log(error)
      toast.error("Something Went Rong")

    }
  }
  return (
    <>
    <section id="contacts">
      <div className='max-w-screen-2xl container mx-auto px-5 md:px-17 shadow-md pb-30' style={{ backgroundColor: '#302f46ff', color: '#E2DFF3' }}>
        <div className='flex h-auto justify-items-center justify-center items-center'>
          <h1 className='flex w-90 md:mt-29 mt-20 md:mb-10 justify-items-center md:text-5xl text-3xl rounded-full justify-center text-center font-bold'>
            <span className='text-teal-400'>Get in Touch</span>
          </h1>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <div className='contact-info p-4'>
            <h2 className='text-3xl font-bold mb-4'>Contact Information</h2>
            <p className='text-gray-300 mb-4'>Feel free to reach out to me through the following channels:</p>
            <ul>
              <li className='mb-2'>
                <span className='font-bold'>Email:</span> <a href='mailto:sourabhmondal9@gmail.com' className='text-teal-400'>sourabhmondal9@gmail.com</a>
              </li>
              <li className='mb-2'>
                <span className='font-bold'>Phone:</span> <a href='tel:+917908161009' className='text-teal-400'>+917908161009</a>
              </li>
              <li className='mb-2'>
                <span className='font-bold'>LinkedIn:</span> <a href='http://www.linkedin.com/in/sourabh-mondal-063734381' target='_blank' rel='noopener noreferrer' className='text-teal-400'>http://www.linkedin.com/in/sourabh-mondal</a>
              </li>
            </ul>
          </div>
          <div className='contact-form p-4'>
            <h2 className='text-3xl font-bold mb-4'>Send a Message</h2>
            <form
              onSubmit={handleSubmit(onSubmit)}
            // action="https://getform.io/f/bqoemrnb"
            // method="POST"
            >
              <div className='mb-4'>
                <label className='block text-gray-300 mb-2' htmlFor='name'>Name:</label>
                <input {...register("name", { required: true })} type='text' id='name' name='name' className='w-full p-2 rounded-md bg-gray-700 text-gray-300 border border-gray-600' />
                {errors.name && <span>This field is required</span>}
              </div>
              <div className='mb-4'>
                <label className='block text-gray-300 mb-2' htmlFor='email'>Email:</label>
                <input {...register("email", { required: true })} type='email' id='email' name='email' className='w-full p-2 rounded-md bg-gray-700 text-gray-300 border border-gray-600' />
                {errors.email && <span>This field is required</span>}
              </div>
              <div className='mb-4'>
                <label className='block text-gray-300 mb-2' htmlFor='message'>Message:</label>
                <textarea {...register("message", { required: true })} id='message' name='message' className='w-full p-2 rounded-md bg-gray-700 text-gray-300 border border-gray-600' rows='5'></textarea>
                {errors.message && <span>This field is required</span>}
              </div>
              <button type='submit' className='bg-teal-400 text-white px-4 py-2 rounded-md cursor-pointer'>Send Message</button>
            </form>
          </div>
        </div>
      </div>
      </section>
    </>
  );
};

export default Contacts;
