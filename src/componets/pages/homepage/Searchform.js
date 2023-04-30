import React from 'react'
import "./searchform.css";
function Searchform() {
  return (
    <div className="searchformpage">
      <form>
        <div>
          <input placeholder="Where you are going" />
        </div>
        <div>
          <input type='date' />
        </div>
        <div>
          <input placeholder="Where you are going" />
        </div>
        <div>
         <button>Search</button>
        </div>
      </form>
    </div>
  );
}

export default Searchform
