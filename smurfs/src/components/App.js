import React, { Component } from "react";
import { connect } from "react-redux";
import { getSmurfs, addSmurf } from "./actions/index";
import SmurfForm from "./SmurfForm";
import SmurfList from "./SmurfList";
const App = (props) => {

  const handleClick = e => {
    e.preventDefault();
    props.getSmurfs()
  }
  return(
    <div>
      <button onClick={handleClick}>Get Smurfs</button>
      <SmurfForm addSmurf={props.addSmurf}/>
      <SmurfList smurfs={props.smurfs}/> 
    </div>
  )
}
const mapStateToProps = state => {
  return {
    smurfs : state.smurfs,
    isLoading : state.isLoading,
    error : state.error
  }
}
export default connect(
  mapStateToProps,
  { getSmurfs, addSmurf })
  (App);