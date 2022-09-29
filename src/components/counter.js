import React from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import { bindActionCreators } from "redux";

//мы бы хотели связать данный компонент с Actions и Store
const Counter = ({ counter, inc, dec, rnd }) => {
  return (
    <div className="jumbotron">
      <h1>{counter}</h1>
      <button onClick={dec} className="btn btn-primary">
        DEC
      </button>
      <button onClick={inc} className="btn btn-primary">
        INC
      </button>
      <button onClick={rnd} className="btn btn-primary">
        RND
      </button>
    </div>
  );
};

//возвращаем объект с теми свойствами,
//которые мы хотим вытащить из нашего State
const mapStateToProps = (state) => {
  return {
    counter: state,
  };
};

//вторая функция передает actions
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch);
};

//связали компонент React Counter с Redux при помощи функции Connect
//в функцию connect как конфигурацию мы передали две функции
//
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
