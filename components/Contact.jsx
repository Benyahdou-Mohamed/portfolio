import React from 'react'

const Contact = () => {
  return (
    <div className='mx-12 mb-36'>
        <div className="flex justify-center items-center text-[70px] font-bold mb-28 ">
                Contact
        </div>
        <div className="flex flex-row">
          <div className="w-full">
          <div id="container">
  
  <div class="underline">
  </div>
  <div class="icon_wrapper">
   
  </div>
  <form action="#" method="post" id="contact_form">
    <div class="name">
      <label for="name"></label>
      <input type="text" placeholder="My name is" name="name" id="name_input" required/>
    </div>
    <div class="email">
      <label for="email"></label>
      <input type="email" placeholder="My e-mail is" name="email" id="email_input" required/>
    </div>
    
    <div class="subject">
      <label for="subject"></label>
      <select placeholder="Subject line" name="subject" id="subject_input" required>
        <option disabled hidden selected>Subject line</option>
        <option>I'd like to start a project</option>
        <option>I'd like to ask a question</option>
        <option>I'd like to make a proposal</option>
      </select>
    </div>
    <div class="message">
      <label for="message"></label>
      <textarea name="message" placeholder="I'd like to chat about" id="message_input" cols="30" rows="5" required></textarea>
    </div>
    <div class="submit">
      <input type="submit" value="Send Message" id="form_button" />
    </div>
  </form>
</div>
          </div>
          <div className=" ">
            <div className="mb-5">
            <div className="flex-row font-bold text-2xl">
              Contact Details
            </div>
            <span className='font-light text-xl '>Benyahdou.mohamed1@gmail.com</span>
            </div>
              <div  className="h-full  flex-center  flex flex-col   ">
                 
                 <div className='  pt-5 mb-3 text-xl font-bold text-2xl '>SOCIALS</div>
                 <div className="font-light text-xl">
                 <div >Github</div>
                 <div >Linkedin</div>
                 <div >Facebook</div>
                 <div >Instagram</div>
                 </div>

              
            </div>
          </div>
          

        </div>
    
    </div>
  )
}

export default Contact