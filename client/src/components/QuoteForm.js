import { useForm } from '@formspree/react';

function QuoteForm() {
  const [state, handleSubmit] = useForm('{your-form-id}');
  if (state.succeeded) {
    return <div>Thank you for signing up!</div>;
  }

  return (
    <section>
      <h1>Request a quote!</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="customername">Name:</label>
          <input type="text" name="customername" id="quote" />
        </div>
        <div>
          <label htmlFor="author">Author</label>
          <input type="text" name="author" id="author" />
          {/* create the rest of the form for location, description, clientphonenumber, and date */}
        </div>
        <div>
          <label htmlFor="location">Location</label>
          <input type="text" name="location" id="location" />
        </div>

        <div>
          <label htmlFor="description" >Description</label>
          <input type="textarea" placeholder="Tell us a little something about your job" name="description" cols="30" rows="10" id="description" />
        </div>

        <div>
          <label htmlFor="clientphonenumber">Client Phone Number</label>
          <input type="text" name="clientphonenumber" id="clientphonenumber" />
        </div>

        <div>
          <label htmlFor="date">Date</label>
          <input type="text" name="date" id="date" />
        </div>

        <div>
          <button className="btn" type="submit" disabled={state.submitting}>Submit</button>
        </div>
      </form>
    </section>
  );
}

export default QuoteForm;
