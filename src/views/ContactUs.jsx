import React, { useState,useEffect } from 'react';
import { useSelector } from 'react-redux';
import {AiOutlineLinkedin} from 'react-icons/ai'
import {AiFillFacebook} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'



const ContactUs = () => {
    
    const entity = useSelector(state => state.user);
    console.log(entity)

  const [formData, setFormData] = useState({
    name: entity.username,
    email: entity.email,
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Realizar validaciones aquí js,luego remover el required (por ejemplo, verificar que los campos no estén vacíos).

    // Enviar el mensaje por correo electrónico (implementación simulada) agregar luego.
    const messageData = {
      Name: formData.name,
      Email: formData.email,
      Message: formData.message,
    };

    // Aquí se va agregar la lógica para enviar el mensaje por correo electrónico.
    // En este ejemplo, solo mostraremos los datos en la consola.
    console.log('Mensaje enviado:', messageData);
  };

  useEffect(() => {
    // Check if the Kommunicate script has already been loaded
    if (!window.kommunicate) {
      (function (d, m) {
        var kommunicateSettings = {
          "appId": "d0be590bfd72faa7b9777f5f8ab7dc4e",
          "popupWidget": true,
          "automaticChatOpenOnNavigation": true
        };
        var s = document.createElement("script");
        s.type = "text/javascript";
        s.async = true;
        s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
        var h = document.getElementsByTagName("head")[0];
        h.appendChild(s);
        window.kommunicate = m;
        m._globals = kommunicateSettings;
      })(document, window.kommunicate || {});
    }
    /* NOTE: Use web server to view HTML files as real-time update will not work
    if you directly open the HTML file in the browser. */
  
  }, []);
  return (
    <div className='flex flex-col  items-center scroll-smooth w-full  min-h-screen overflow-y-auto text-black bg-white'>
      <div className='contact-container mx-auto pb-60 grid grid-cols-1 gap-4 bg-white rounded rounded-md overflow-hidden md:w-80 lg:max-w-2xl md:m-auto md:w-90 md:max-w-full lg:grid-cols-2 lg:gap-6 lg:w-full lg:mt-20'>
        <div className='form-container p-5 '>
          <h3 className='text-base font-semibold mb-4'>Message Us</h3>
          <form className='contact-form grid gap-y-4' onSubmit={handleSubmit}>
            <input
              className='w-full bg-white  p-4 rounded-lg text-sm border border-gray-300'
              type='text'
              placeholder='YourName'
              name='name'
              value={formData.name}
              onChange={handleInputChange}
              required
            />
            <input
              className='w-full bg-white p-4 rounded-lg text-sm border border-gray-300'
              type='email'
              placeholder='Enter Your Email...'
              name='email'
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            <textarea
              className='w-full bg-white p-4 rounded-lg text-sm  border border-gray-300'
              placeholder='Write Message Here...'
              name='message'
              value={formData.message}
              onChange={handleInputChange}
              cols='30'
              rows='10'
              required
            ></textarea>
            <input
              className='send button w-full bg-red-100 p-4 rounded-lg text-sm text-base font-medium cursor-pointer transition duration-300 ease-linear hover:bg-red-400'
              type='submit'
              value='Send'
            />
          </form>
        </div>
        <div className='map p-5 '>
            <div className='socials flex flex-row pb-7 justify-center '>
        <a href='https://linkedin.com' target="_blank" className="text-4xl mx-2 text-gray-500 "><AiOutlineLinkedin/></a>
        <a href='https://facebook.com' target="_blank" className="text-4xl mx-2 text-gray-500"><AiFillFacebook/></a>
        <a href='https://instagram.com' target="_blank" className="text-4xl mx-2 text-gray-500"><AiFillInstagram/></a>
            </div>
       <p className='text-sm pb-2 pl-3'>Our location</p>
          <iframe
            className='w-full h-full '
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d254508.51141489705!2d-74.10780699999997!3d4.6482975500000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9bfd2da6cb29%3A0x239d635520a33914!2zQm9nb3TDoSwgQm9nb3Rh!5e0!3m2!1sen!2sco!4v1696722777925!5m2!1sen!2sco'
            allowFullScreen={true}
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
          ></iframe>
        </div>
      </div>
      <style>
        {`
          
          .kommunicate-custom-iframe   {
            bottom: 85px ; 
            

            
           }   
          
     `}
      </style>
      
    </div>
  );
};

export default ContactUs;

