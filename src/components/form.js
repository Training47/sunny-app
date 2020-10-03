import React from 'react';

const Form = (props) =>{
    return(
        <form>
            <input type="text" name="city" placeholder="City Name"/>
            <input type="text" name="country" placeholder="Country Name"></input>
            <button>Submit</button>
        </form>
    )
}

export default Form;