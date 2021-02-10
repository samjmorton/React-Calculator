import React, { Component } from "react";
import { View } from "react-native";
import CalculatorButton from "./components/CalculatorButton";
import { Header } from "./components/Header";
import buttonConfig from "./buttonConfig.json";
import styles from './App.styles';

class App extends Component {
  state = {
    empty: true,
    output: 0,
    firstValue: null,
    operator: null,
  };

  constructor() {
    super();
    console.log("component constructor", this.state);
  }

  componentDidMount() {
    console.log("component did mount", this.state);
  }

  componentDidUpdate() {
    console.log("component did update", this.state);
  }

  componentWillUnmount() {
    console.log("unmounting component", this.state);
  }

  // Called for any input numbers (0-9)
  setInput = (value) => {
    if (this.state.operator) {
      this.state.firstValue === null
        ? this.setState({ output: value, firstValue: this.state.output })
        : this.setState({ output: this.state.output + value });
    } else {
      this.state.empty
        ? this.setState({ empty: false, output: value })
        : this.setState({ output: this.state.output + value });
    }
  };

  // set for any operator (x,/,+,-)
  setOperator = (operator) => this.setState({ operator });

  // clear button
  clear = () => this.setState({ empty: true, output: 0, operator: null });

  // equals button
  setResult = () => {
    let result;
    switch (this.state.operator) {
      case "x":
        result =
          parseFloat(this.state.firstValue) * parseFloat(this.state.output);
        break;
      case "/":
        result =
          parseFloat(this.state.firstValue) / parseFloat(this.state.output);
        break;
      case "-":
        result =
          parseFloat(this.state.firstValue) - parseFloat(this.state.output);
        break;
      case "+":
        result =
          parseFloat(this.state.firstValue) + parseFloat(this.state.output);
        break;
    }

    this.setState({
      output: result || 0,
      firstValue: null,
      operator: null,
      empty: true,
    });
	};
	
  render() {
    return (
      <View style={styles.container}>
        <Header value={this.state.output} />
        {buttonConfig.map((row) => (
          <View style={styles.buttonRow}>
            {row.buttons.map((button) => (
              <CalculatorButton
                value={button.value}
                onPress={this[button.onPress]}
                backgroundColor={button.backgroundColor}
              />
            ))}
          </View>
        ))}
      </View>
    );
  }
}

export default App;
