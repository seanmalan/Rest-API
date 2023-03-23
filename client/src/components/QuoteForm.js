import React from 'react';
import "./QuoteForm.css"
import { useForm, ValidationError } from '@formspree/react';
import DatePicker from "react-datepicker";
import { Link } from 'react-router-dom';



function QuoteForm() {
  const [state, handleSubmit] = useForm("xwkjnnnd");
  if (state.succeeded) {
    
  console.log(state.result)


      return (
      <>
      
      <p>Thanks for requesting a quote!
        We will be in touch shortly to confirm.
      </p>

      {/* <p>Here are the details you entered:</p> */}


      {/* <p>Name: {state.values.customername}</p>
      <p>Client Phone Number: {state.values.clientphonenumber}</p>
      <p>Email: {state.values.email}</p>
      <p>Location: {state.values.location}</p>
      <p>Description: {state.values.description}</p>
      <p>Date: {state.values.date}</p> */}

      <Link to={`/`}> Take me back to the home page </Link>
      </>
      );
  }


  return (
    <section>
      <h1>Request a quote!</h1>
      <form onSubmit={handleSubmit}className="form">
        <div>
          <label htmlFor="customername" className="form-name" >Name:</label>
          <input type="text" name="customername" id="quote" className="form-input" />
          <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
        <div>
          <label htmlFor="clientphonenumber" className="form-name" >Client Phone Number:</label>
          <input type="text" name="clientphonenumber" id="clientphonenumber" className="form-input" />
        </div>
        </div>
        <div>
          <label htmlFor="email" className="form-name" >Email:</label>
          <input type="email" name="email" id="email" className="form-input"  />
          <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
          
        </div>
        <div>
          <label htmlFor="location" className="form-name" >Location</label>
          <input type="text" name="location" id="location" className="form-input" />
          <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
        </div>

        <div>
          <label htmlFor="description" className="form-name" >Description</label>
          <textarea placeholder="Tell us a little something about your job" name="description" cols="20" rows="4" id="description" />
        </div>

        <label htmlFor="description" className="form-name">Date:</label>
          <DatePicker
          className="form-input"
            showTimeSelect
            minDate={new Date()}
            name="date"
            id="date"
            placeholder={new Date()}
            dateFormat="dd/MM/yyyy hh:mm aa" 
          />
        

        <div>
        <button type="submit" disabled={state.submitting}className="button" >
        Submit
      </button>
        </div>
      </form>
    </section>
  );
}

export default QuoteForm;
