import React from 'react'

class SearchBar extends React.Component{
    
    render(){
        return(
        <form onSubmit = {this.props.onFormSubmit}>
        <div className="input-group" style={{marginTop: '5vh'}}>
          <input type="text" className="form-control bg-white" placeholder="Search this blog"  style={{outline: 'none'}} />
          <div className="input-group-append">
            <button className="btn btn-primary" type="button">
              <i className="fa fa-search"></i>
            </button>
          </div>
        </div>
      </form>
        )
    }
}

export default SearchBar