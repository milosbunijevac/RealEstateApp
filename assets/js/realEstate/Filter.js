import React, { Component} from 'react'


class Filter extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Joe'
    }
  }
  render () {
    return (
      <section id="filter">
        <h4> Filter </h4>
        <select name="neighborhood" className="filters neighborhood" onChange={this.props.change}>
          <option value="Westlake">Westlake</option>
          <option value="Seven Hills">Seven Hills</option>
          <option value="Cleveland">Cleveland</option>
          <option value="North Olmsted">North Olmsted</option>
        </select>
        <select name="housetype" className="filters housetype" onChange={this.props.change}>
          <option value="Home">Home</option>
          <option value="Studio">Studio</option>
          <option value="Apartment">Apartment</option>
          <option value="Room">Room</option>
        </select>
        <select name="bedrooms" className="filters bedrooms" onChange={this.props.change}>
          <option value="1">1BR</option>
          <option value="2">2BR</option>
          <option value="3">3BR</option>
          <option value="4">4BR</option> 
        </select>
        <div className="filters price">
          <span className="title">Price</span>
          <input type="text" name="min_price" className="min-price" onChange={this.props.change} value={this.props.allState.min_price}></input>
          <input type="text" name="max_price" className="max-price" onChange={this.props.change} value={this.props.allState.max_price}></input>
        </div>
        <div className="filters floor-space">
          <span className="title">Floor Space</span>
          <input type="text" name="min_floor_space" className="min-floor-space" onChange={this.props.change} value={this.props.allState.min_floor_space}></input>
          <input type="text" name="max_floor_space" className="max-floor-space" onChange={this.props.change} value={this.props.allState.max_floor_space}></input>
        </div>
        <div className="filters extras">
          <span className="title">
            Extras
          </span>
          <label htmlFor="extras" onChange={this.props.change}>
            <span>Elevators</span> 
            <input name="elevator" type="checkbox" value="elevator"/>
          </label>
          <label htmlFor="extras" onChange={this.props.change}>
            <span>Swimming Pool</span> 
            <input name="swimming_pool" type="checkbox" value="swimming_pool"/>
          </label>
          <label htmlFor="extras" onChange={this.props.change}>
            <span>Finished Basement</span> 
            <input name="finished_basement" type="checkbox" value="finished basement"/>
          </label>
          <label htmlFor="extras" onChange={this.props.change}>
            <span>Gym</span> 
            <input name="gym" type="checkbox" value="gym"/>
          </label>
        </div>
      </section>
    )
  }
}

export default Filter;
