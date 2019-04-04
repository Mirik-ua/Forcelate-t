import React, { Component } from 'react';
import './App.css';

export default class App extends Component {
  constructor(props){
    super(props)

    this.state={
      elements: [],
      elem: [],
    }

    this.inp1= React.createRef();
    this.inp2 = React.createRef();
    this.inp3= React.createRef();
    this.inp4 = React.createRef();
    this.inp5= React.createRef();
    this.inp6= React.createRef();
    this.inp7 = React.createRef();
    this.inp8= React.createRef();
    this.inp9 = React.createRef();
    this.inp10= React.createRef();
    this.inp11= React.createRef();
    this.inp12 = React.createRef();
    this.inp13= React.createRef();
    this.inp14 = React.createRef();
    this.inp15= React.createRef();
  }

  handleSubmit = (e) => e.preventDefault();

  handleDelete = () => this.setState ({ elements: [] })

  clearList = () => this.setState({ elem : [] });

  handleClickAdd = async (e) => {
    await this.setState({
      elements: [
        ...this.state.elements,
        this.state.elem
      ]
    })
    console.log(this.state.elements)
  }

  handleClickPlay = async (e) => {
    e.preventDefault();
      await this.setState({
          elem: [
            ...this.state.elem,
            this.inp1.current.value,
            this.inp2.current.value,
            this.inp3.current.value,
            this.inp4.current.value,
            this.inp5.current.value,
            this.inp6.current.value,
            this.inp7.current.value,
            this.inp8.current.value,
            this.inp9.current.value,
            this.inp10.current.value,
            this.inp11.current.value,
            this.inp12.current.value,
            this.inp13.current.value,
            this.inp14.current.value,
            this.inp15.current.value
          ]
      })
    console.log(this.state.elem)
  }


  render() {
    return (
      <div className="mainCont">
        <div className="topBar">
          <button onClick={this.handleClickPlay}>
            <i className="fas fa-play-circle"></i>
          </button>
          <button onClick={this.handleClickAdd} >
            <i className="fas fa-plus plus"></i>
            Add {/*button value*/}
          </button>
          <button onClick={this.handleDelete}>
            <i className="fas fa-plus delete"></i>
              Delete All {/*button value*/}
            </button>
          <button>
            <i className="fas fa-redo-alt alt"></i>
            Repost All{/*button value*/}
          </button>
        </div>
        <div className="modalBar">
          <div className="block">
            <label>Call Controll</label>
          </div>
          <div className="block">
            <label>Read</label>
          </div>
          <div className="block">
            <label>Sound/ Auto Call</label>
          </div>
          <div className="block">
            <label>Truck</label>
          </div>
          <div className="block">
            <label>Origin</label>
          </div>
          <div className="block">
            <label>Destination</label>
          </div>
          <div className="block">
            <label>Pickup</label>
          </div>
          <div className="block">
            <label>DH-O</label>
          </div>
          <div className="block">
            <label>DH-D</label>
          </div>
          <div className="block">
            <label>F/P</label>
          </div>
          <div className="block">
            <label>Length</label>
          </div>
          <div className="block">
            <label>Weight</label>
          </div>
          <div className="block">
            <label>Trip</label>
          </div>
          <div className="block">
            <label>Alarm</label>
          </div>
          <div className="block">
            <label>Actions</label>
          </div>
        </div>
        <form onSubmit={this.handleSubmit} >
          {
            this.state.elements.map ( (item,index) => {
              return(
                <div key={index} className="createForm">
                  <div className="blockInp ">
                    <input ref={this.inp1} />
                  </div>
                  <div className="blockInp">
                    <input ref={this.inp2}/>
                  </div>
                  <div className="blockInp">
                    <input ref={this.inp3} />
                  </div>
                  <div className="blockInp">
                    <input ref={this.inp4}/>
                  </div>
                  <div className="blockInp">
                    <input ref={this.inp5} />
                  </div>
                  <div className="blockInp">
                    <input ref={this.inp6} />
                  </div>
                  <div className="blockInp">
                    <input ref={this.inp7}/>
                  </div>
                  <div className="blockInp">
                    <input ref={this.inp8} />
                  </div>
                  <div className="blockInp">
                    <input ref={this.inp9}/>
                  </div>
                  <div className="blockInp">
                    <input ref={this.inp10} />
                  </div>
                  <div className="blockInp">
                    <input ref={this.inp11} />
                  </div>
                  <div className="blockInp">
                    <input ref={this.inp12}/>
                  </div>
                  <div className="blockInp">
                    <input ref={this.inp13} />
                  </div>
                  <div className="blockInp">
                    <input ref={this.inp14}/>
                  </div>
                  <div className="blockInp">
                    <input ref={this.inp15} />
                  </div>
                </div>
                )
              })
            }
          </form>
          <div className="wrapperMiddleBlock">
            <div className="middleBlock">
              <div>
                <label>Search results : Total : {this.state.elements.length}</label>
              </div>
              <div>
                <label>
                  <i className="fas fa-undo alt"></i>
                    Undo {/*label value*/}
                </label>
              </div>
              <div>
                <label onClick={this.clearList}>
                  <i className="fas fa-trash delete2"></i>
                    Clear{/*label value*/}
                </label>
              </div>
            </div>
          </div>
          <div className="botBar">{/*Bottom bar*/}
            <div className="modalBar">
              <div className="block">
                <label>Call Controll</label>
              </div>
              <div className="block">
                <label>Read</label>
              </div>
              <div className="block">
                <label>Sound/ Auto Call</label>
              </div>
              <div className="block">
                <label>Truck</label>
              </div>
              <div className="block">
                <label>Origin</label>
              </div>
              <div className="block">
                <label>Destination</label>
              </div>
              <div className="block">
                <label>Pickup</label>
              </div>
              <div className="block">
                <label>DH-O</label>
              </div>
              <div className="block">
                <label>DH-D</label>
              </div>
              <div className="block">
                <label>F/P</label>
              </div>
              <div className="block">
                <label>Length</label>
              </div>
              <div className="block">
                <label>Weight</label>
              </div>
              <div className="block">
                <label>Trip</label>
              </div>
              <div className="block">
                <label>Alarm</label>
              </div>
              <div className="block">
                <label>Actions</label>
              </div>
            </div>
          <div className="newBlock">
          <div className="printBottomBlock">
            {
              this.state.elem.map( (item,index) => {
                return(
                  <div key={index} className="printBlock">
                    {item} {/*field value*/}
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
    );
  }
}
