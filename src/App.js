import React from "react";
import { useState } from "react";

const App = () => {

  const [formData, setformData] = useState({ firstName: "", lastName: "", email:"", country:"India", streetAddress:"", city:"", state:"", postalCode:"", comments: false, candidates: false, offers: false, pushNotifications: ""});

  const changeHandler = (e) => {
    const {name, value, checked, type} = e.target
    setformData( (prev) => ({...prev, [name]:type === "checkbox" ? checked : value}))
  }

  function submitHandler(e) {
    e.preventDefault();
    console.log("Finally printing he value of form data")
    console.log(formData);
  }
  return (
    <div className="flex flex-col items-center mt-2">
      <form onSubmit={submitHandler}>
        <label htmlFor="firstName">First Name</label>
        <br />
        <input 
          type="text"
          name="firstName"
          id="firstName"
          placeholder="Love"
          value={formData.firstName}
          onChange={changeHandler}
          className="outline"
        />

        <br />
        <label htmlFor="lastName">Last Name</label>
        <br />
        <input 
          type="text"
          name="lastName"
          id="lastName"
          placeholder="Babbar"
          value={formData.lastName}
          onChange={changeHandler}
          className="outline"
        />

        <br />
        <label htmlFor="email">Email</label>
        <br />
        <input 
          type="email"
          name="email"
          id="email"
          placeholder="love.babbar@example.com"
          value={formData.email}
          onChange={changeHandler}
          className="outline"
        />

        <br />
        <label htmlFor="country">Country</label>
        <br />
        <select
        id="country"
        name="country"
        value={formData.country}
        onChange={changeHandler}
        className="outline"
        >
          <option>India</option>
          <option>United States</option>
          <option>United Kingdom</option>
          <option>Australia</option>
          <option>Canada </option>
        </select>

        <label htmlFor="streetAddress">Street Address</label>
        <br />
        <input 
          type="text"
          name="streetAddress"
          id="streetAddress"
          placeholder="123 Main St"
          value={formData.streetAddress}
          onChange={changeHandler}
          className="outline"
        />

        <label htmlFor="city">City</label>
        <br />
        <input 
          type="text"
          name="city"
          id="city"
          placeholder="New York"
          value={formData.city}
          onChange={changeHandler}
          className="outline"
        />

        <label htmlFor="state">State</label>
        <br />
        <input 
          type="text"
          name="firstName"
          id="firstName"
          placeholder="Love"
          value={formData.firstName}
          onChange={changeHandler}
          className="outline"
        />

        <label htmlFor="postalCode">Postal Code</label>
        <br />
        <input 
          type="text"
          name="postalCode"
          id="postalCode"
          placeholder="10001"
          value={formData.postalCode}
          onChange={changeHandler}
          className="outline"
        />

        <br />

        <fieldset>
          <legend>By Email</legend>
          <div className="flex">
          <input
          id="comments"
          name="comments"
          type="checkbox"
          checked ={formData.comments}
          onChange={changeHandler }
          className="outline"
          />

          <div>
            <label htmlFor="comments">Comments</label>
            <p>Get notified when someones posts a comment on a posting.</p>
          </div>

          </div> 

          <div className="flex">
          <input
          id="candidates"
          name="candidates"
          type="checkbox"
          checked={formData.candidates}
          onChange={changeHandler }
          className="outline"
          />

          <div>
            <label htmlFor="candidates">Candidates</label>
            <p>Get notified when candidates applies for a job.</p>
          </div>

          </div>  

           <div className="flex">
          <input
          id="offers"
          name="offers"
          type="checkbox"
          checked={formData.offers}
          onChange={changeHandler}
          />

          <div>
            <label htmlFor="offers">Offers</label>
            <p>Get notified when candidate accepts or rejects an offer.</p>
          </div>

          </div> 
        </fieldset>

        <br />
        <br />

        <fieldset>
          <legend>Push Notifications</legend>
          <p>These are delivered via SMS to your mobile phone.</p>
          <input
            type="radio"
            name="pushNotifications"
            id="pushEverything"
            value="Everything"
            onChange={changeHandler} 
          />
          <label htmlFor="pushEverything">Everything </label>

          <br />
          <input
            type="radio"
            name="pushNotifications"
            id="pushEmail"
            value="Same as email"
            onChange={changeHandler} 
          />
          <label htmlFor="pushEmail ">Same as email </label>

          <br /> 

          <input
            type="radio"
            name="pushNotifications"
            id="pushNothing"
            value="No push notifications"
            onChange={changeHandler} 
          />
          <label htmlFor="pushNothing">No push notifications </label>
        </fieldset>

        <button className="bg-blue-500 text-white py-2 px-4 rounded">Save </button>
      </form>
    </div>
  );
};

export default App;
