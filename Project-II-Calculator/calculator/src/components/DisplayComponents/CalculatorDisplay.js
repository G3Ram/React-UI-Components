import React from "react";
import "./Display.css";
import NumberButton from "../../components/ButtonComponents/NumberButton";
import ActionButton from "../../components/ButtonComponents/ActionButton";
import DisplayText from "../../components/ButtonComponents/DisplayText";

class CalculatorDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayValue: [],
      isEqualTo: false,
      initialValue: true
    };
  }

  handleClick(displayTextValue) {
    console.log(`Value clicked is ${displayTextValue}`);
    if (displayTextValue !== "=") {
      const dispVal = this.state.displayValue.slice();
      dispVal.push(displayTextValue);
      this.setState({
        displayValue: dispVal,
        isEqualTo: false,
        initialValue: true
      });
    }
    if (displayTextValue === "clear") {
      this.setState({
        displayValue: [],
        isEqualTo: false,
        initialValue: true
      });
    }
    console.log(this.state.displayValue);
  }

  renderDisplay(displayText, classNameValue) {
    return (
      <NumberButton
        text={displayText}
        className={classNameValue}
        onClick={() => {
          this.handleClick(displayText);
        }}
      />
    );
  }

  renderTextDisplay(classNameValue) {
    if (this.state.displayValue.length === 0) {
      return <DisplayText text={0} className={classNameValue} />;
    } else {
      return (
        <DisplayText
          text={this.state.displayValue}
          className={classNameValue}
        />
      );
    }
  }

  render() {
    return (
      <div className="calculatorDisplay">
        <div className="displayRow">
          {this.renderTextDisplay("displayButton")}
        </div>
        <div className="displayRow">
          {this.renderDisplay("clear", "actionButton")}
          {this.renderDisplay("/", "redNumberButton")}
        </div>
        <div className="displayRow">
          {this.renderDisplay("7", "numberButton")}
          {this.renderDisplay("8", "numberButton")}
          {this.renderDisplay("9", "numberButton")}
          {this.renderDisplay("*", "redNumberButton")}
        </div>
        <div className="displayRow">
          {this.renderDisplay("4", "numberButton")}
          {this.renderDisplay("5", "numberButton")}
          {this.renderDisplay("6", "numberButton")}
          {this.renderDisplay("-", "redNumberButton")}
        </div>
        <div className="displayRow">
          {this.renderDisplay("1", "numberButton")}
          {this.renderDisplay("2", "numberButton")}
          {this.renderDisplay("3", "numberButton")}
          {this.renderDisplay("+", "redNumberButton")}
        </div>
        <div className="displayRow">
          {this.renderDisplay("0", "actionButton")}
          {this.renderDisplay("=", "redNumberButton")}
        </div>
      </div>
    );
  }
}

export default CalculatorDisplay;
