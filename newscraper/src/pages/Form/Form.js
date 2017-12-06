import React, { Component } from 'react';
import API from '../../utils/API';

const Form = props => {
  return (
    <div className="container">
      <form>
        <div className="form-group">
          <label className="col-form-label">Article Topic</label>
          <input type="text" className="form-control" onChange={props.onChange} />
        </div>
        <div>
          <div className="form-group">
            <label className="col-form-label">Starting from this year</label>
            <input type="text" className="form-control" onChange={props.onChange} name="from-year" />
          </div>
          <div className="form-group">
            <label className="col-form-label">Up til this year</label>
            <input type="text" className="form-control" onChange={props.onChange} name="until-year" />
          </div>
        </div>
        <div className="form-group">
          <button className="btn btn-info" type="button" name="sub-butt" onClick={props.submit}>
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default Form;
