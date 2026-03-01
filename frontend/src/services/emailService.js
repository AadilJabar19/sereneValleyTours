import emailjs from '@emailjs/browser';

// Initialize EmailJS with public key
const initEmailJS = () => {
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  if (publicKey) {
    emailjs.init(publicKey);
  }
};

// Send contact form email
export const sendContactEmail = async (formData) => {
  initEmailJS();
  
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  
  if (!serviceId || !templateId) {
    throw new Error('EmailJS configuration missing');
  }

  try {
    const response = await emailjs.send(serviceId, templateId, {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone || 'Not provided',
      message: formData.message,
      to_email: 'serenevalleytours@gmail.com',
    });
    return response;
  } catch (error) {
    console.error('EmailJS Error:', error);
    throw error;
  }
};

// Send booking inquiry email
export const sendBookingEmail = async (bookingData) => {
  initEmailJS();
  
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_BOOKING_TEMPLATE_ID || import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  
  if (!serviceId || !templateId) {
    throw new Error('EmailJS configuration missing');
  }

  try {
    const response = await emailjs.send(serviceId, templateId, {
      from_name: bookingData.name,
      from_email: bookingData.email,
      phone: bookingData.phone,
      tour_name: bookingData.tourName,
      tour_date: bookingData.date,
      guests: bookingData.guests,
      message: bookingData.message || 'No additional message',
      to_email: 'serenevalleytours@gmail.com',
    });
    return response;
  } catch (error) {
    console.error('EmailJS Error:', error);
    throw error;
  }
};
