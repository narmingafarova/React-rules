import React, { Component } from "react";


// Lifecycle, state

class ClassBasedComponent extends Component {
  state = {
    count: 0, //initial value of count
    flag: false
  };

  handleClick = () => {
    // this.state.count = this.state.count + 1;

    const { count } = this.state;
    //setState method
    this.setState(
      {
        count: count + 1,
      },
      () => {
        console.log(this.state);
      }
    );
  };

  componentDidMount() {
    console.log("component is mounted");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(prevState, this.state);
    if(prevState && prevState.count !== this.state.count && this.state.count === 10) {
      this.setState({
        flag: true
      })
    }
  }

  render() {
    console.log(this.state);
    // return <div>hello jsx class</div>;
    return (
      <div>
        <button onClick={this.handleClick}>Click</button>
        {
          this.state.count === 5 && "count is 5"
        }
        {
          this.state.flag && <p>Flag is true</p>
        }
      </div>
    );
  }
}

export default ClassBasedComponent;





// Handling events and form

class ClassBasedComponent extends Component {
  state = {
    formData: {
      name: "",
      age: 0,
    },
    finalFormData: {},
  };

  handleNameChange = (event) => {
    const { value } = event.target;
    this.setState((prevState) => ({
      formData: {
        ...prevState.formData,
        name: value,
      },
    }));
  };

  handleAgeChange = (event) => {
    const { value } = event.target;
    this.setState((prevState) => ({
      formData: {
        ...prevState.formData,
        age: value,
      },
    }));
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { formData } = this.state;
    this.setState((prevState) => ({
      ...prevState,
      finalFormData: {
        ...prevState.finalFormData,
        ...formData,
      },
      formData: {
        name: "",
        age: 0,
      },
    }));
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            name="name"
            placeholder="name"
            type={"text"}
            value={this.state.formData.name}
            onChange={this.handleNameChange}
          />
          <input
            name="age"
            placeholder="age"
            type={"number"}
            value={this.state.formData.age}
            onChange={this.handleAgeChange}
          />
          <button type="submit" aria-label="submit">
            Submit
          </button>
        </form>
        {this.state.finalFormData &&
          Object.keys(this.state.finalFormData).length > 0 && (
            <p>
              Final data is {this.state.finalFormData.name} and{" "}
              {this.state.finalFormData.age}
            </p>
          )}
      </div>
    );
  }
}

// export default ClassBasedComponent;






//API integration

class ClassBasedComponent extends Component {
  state = {
    data: [],
  };

  componentDidMount() {
    this.getData();
  }

  getData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    if (data && data.length) {
      this.setState({
        data,
      });
    }
  };

  render() {
    console.log(this.state);
    return (
      <div>
        {this.state.data && this.state.data.length > 0
          ? this.state.data.map((dataItem, index) => (
              <p key={`${dataItem.id}${index}`}>{dataItem.title}</p>
            ))
          : null}
      </div>
    );
  }
}

export default ClassBasedComponent;
