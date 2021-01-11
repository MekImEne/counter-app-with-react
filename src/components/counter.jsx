import React, { Component } from "react";

class Counter extends Component {
  // state = {
  //   //value: this.props.counter.value,
  //   //imageUrl: 'https://picsum.photos/200',
  //   //tags : ['tag1', 'tag2', 'tag3'],
  // };

  // constructor(){
  //     super();
  //     //console.log("Constructor", this);
  //     this.handleIncrement = this.handleIncrement.bind(this);
  // };

  formatCount() {
    const count = this.props.counter.value;
    return count === 0 ? "Zero" : count;
  }
  // styles= {
  //     fontSize: 15,
  //     fontWeight: 'bold'
  // }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  // renderTags(){
  //     if (this.state.tags.length===0) return <p>There are no tags !</p>
  //     return  <ul> {this.state.tags.map((tag, index)=>(<li key={index}> {tag} </li>))} </ul>
  // };

  // handleIncrement (){
  //     console.log('Increment clicked', this);
  // };

  // handleIncrement = () => {
  //   //console.log('Increment clicked', this);
  //   this.setState({ value: this.state.value + 1 });
  // };

  render() {
    // console.log("props", this.props);
    return (
      <React.Fragment>
        {/* <img src={this.state.imageUrl} alt="" ></img> */}
        {/* <span style={this.styles} className="badge badge-primary m-2" > {this.formatCount()} </span> */}
        {/* <span style={{fontSize:30}} className="badge badge-primary m-2" > {this.formatCount()} </span> */}
        {/* {this.state.tags.length===0 && "Please create a new tag !"}
               {this.renderTags()} */}
        {this.props.children}
        <span className={this.getBadgeClasses()}> {this.formatCount()} </span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </React.Fragment>
    );
  }
}

export default Counter;
