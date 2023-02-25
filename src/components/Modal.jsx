import React from 'react'
import { useGlobalContext } from '../context'
import {
  FaTimes,
  FaEnvelope,
  FaPhoneAlt,
  FaLocationArrow,
  FaWhatsappSquare,
  FaTwitter,
  FaLinkedin,
  FaTelegram
} from 'react-icons/fa'

function Modal() {
  const { isModalOpen, closeModal } = useGlobalContext()
  return (
    <section className={`${isModalOpen ? 'modal open-modal' : 'modal'}`}>
      <div className='article'>
        <div className='close-btn'>
          <p>
            <strong>Get Intouch</strong>
          </p>
          <FaTimes onClick={closeModal} />
        </div>
        <div className='content'>
          <div className='email el'>
            <FaEnvelope />
            <p>Demandwork247@gmail.com</p>
          </div>
          <div className='phone el'>
            <FaPhoneAlt />
            <p>+2347060699353</p>
          </div>
          <div className='el'>
            <FaLocationArrow />
            <p>Kualar Lumpur, Malaysia</p>
          </div>
          <div className='modal-social'>
            <a
              href='https://www.twitter.com/demandtv'
              target='_blank'
              rel='noreferrer'
            >
              <FaTwitter className='icon' />
            </a>
            <a
              href='https://www.linkedin.com/in/rasheed-adekunle-18540a22b/'
              target='_blank'
              rel='noreferrer'
            >
              <FaTelegram className='icon' />
            </a>

            <a
              href='https://api.whatsapp.com/send?phone=23470606993'
              target='_blank'
              rel='noreferrer'
            >
              <FaWhatsappSquare className='icon' />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Modal
