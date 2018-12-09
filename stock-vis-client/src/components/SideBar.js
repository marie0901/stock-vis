import React from 'react';

const SideBar = (props) => {

  let input = null;
  const handleSubmit = (e) => {
   props.addStock(input.value);
   input.value = '';
   e.preventDefault();
 }


  return (
    <div> Enter Stock Code to add to the chart:
      <form
        onSubmit = {
          handleSubmit
        }
        class="col s12 butommed"
      >
        <input
          type="text"
          ref={(textInput) => input = textInput}
          class="input-field col s12"
        />

        <button class="btn waves-effect waves-light" type="submit" name="action">Submit
          <i class="material-icons right">send</i>
        </button>

      </form>
    </div>
  )
}

export default SideBar;
