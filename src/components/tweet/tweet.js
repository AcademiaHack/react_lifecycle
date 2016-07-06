import React from 'react';

export default class Tweet extends React.Component {
  constructor(props, context) {
    console.log(props)
    super(props, context);

    this.state = {
      body: '!'
    };

    //getDefaultProps y getInitialState deprecated para ES6!
  }

  componentWillReceiveProps(nextProps) {
    console.log("Componente va a recibir PROPS!");
    this.setState({
      // set something
    });

    //No ejecuta la primera vez!
    //Pre-calcular la llegada de props, normalmente se almacena data en el STATE!
  }

  componentWillMount() {
    console.log("Componente va a montar!");
    //Cambiar el state no detonara un re-render!
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("Componente esta evaluando si deberia repintar!");
    //No ejecuta la primera vez!
    //Recibe props y state para determinar si se debe repintar!
    //Retorna boolean!
    return true;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log("El componente va a repintar!");
    //No ejecuta la primera vez!
    //Recibe props y state para pre-calcular cosas antes del render!
  }

  changeMe() {
    this.setState({
      body:"CLICKED!!"
    });
    this.props.changeAlert("HOLA!!");
  }

  render() {
    console.log("PINTANDO!!");
    //NO MANEJAR EL DOM AQUI!!
    return (
      <div className="testing">
        <h1 onClick={this.changeMe.bind(this)}>Esto es un tweet!!</h1>
        <p>{this.state.body}</p>
      </div>
    )
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("El componente recien renderizo y la data actualizo");
    //No ejecuta la primera vez!
    //Aqui se podria manejar el DOM
    $('.alert').html("BLAH BLAH!");
  }

  componentDidMount() {
    console.log("Componente ready!");
    //Aqui se podria manejar el DOM
  }

  componentWillUnmount() {
    console.log("Componente fuera del DOM!");
    //Aqui se podria limpiar elementos, timeouts, etc
  }
}

Tweet.propTypes = {
 body: React.PropTypes.string
};
Tweet.defaultProps = {
 body: 'Hola mundo!'
};
