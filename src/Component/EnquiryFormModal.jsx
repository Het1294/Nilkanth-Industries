import React from 'react'

const EnquiryFormModal = ({onClose}) => {
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <h2>Enquiry Form</h2>
        <form action="https://formspree.io/f/your-form-id" method="POST">
          <input type="text" name="name" placeholder="Name" />
          <div className="row">
            <input type="email" name="email" placeholder="Email*" required />
            <input type="text" name="phone" placeholder="Phone" />
          </div>
          <textarea
            name="message"
            rows="5"
            placeholder="Tell Us About Project *"
            required
          ></textarea>
          <button type="submit">
            SEND MESSAGE <span>✈</span>
          </button>
        </form>
        <button className="close-btn" onClick={onClose}>X</button>
      </div>
    </div>
  )
}

export default EnquiryFormModal
