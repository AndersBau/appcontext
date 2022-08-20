import React from "react";
import "./Form.css";
const Form = () => {
  return (
    <div className="forms">
      <div className="selector">
        <select name="language">
          <option value="English">English</option>
          <option value="Spanish">Spanish</option>
          <option value="German">German</option>
        </select>
      </div>
      <form>
        <div className="inpustContainers">
          <div>
            <input type="email" placeholder="email"></input>
          </div>
          <div>
            <input type="password" placeholder="Password"></input>
          </div>
        </div>
        <input type="checkbox" id="rememberme" name="rememberme" />
        <label for="rememberme"> I have a bike</label>
        <br />
        <button type="submit" className="btn">Sign In</button>
      </form>
    </div>
  );
};

export default Form;
