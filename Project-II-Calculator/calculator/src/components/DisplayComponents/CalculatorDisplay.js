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
      isEqualTo: false
    };
  }

  handleClick(displayTextValue) {
    console.log(`Value clicked is ${displayTextValue}`);
    if (displayTextValue === "clear") {
      this.setState({
        displayValue: []
      });
    } else if (displayTextValue === "=") {
      console.log("yet to be implemented = clicked");
    } else if (
      displayTextValue === "+" ||
      displayTextValue === "-" ||
      displayTextValue === "*" ||
      displayTextValue === "/"
    ) {
      console.log("operator clicked -> implementing");
      const dispVal = this.state.displayValue.slice();
      dispVal.push(displayTextValue);
      dispVal.push("");
      this.setState({
        displayValue: dispVal
      });
    } else {
      console.log(`Value clicked is ${displayTextValue}`);

      const dispVal = this.state.displayValue.slice();
      console.log(`dispVal length is ${dispVal.length}`);
      if (dispVal.length === 0) {
        dispVal.push(parseInt(displayTextValue));
        console.log(`dispVal  is ${dispVal}`);
      } else {
        if (dispVal[dispVal.length - 1] === "") {
          dispVal[dispVal.length - 1] = 0;
        }
        dispVal[dispVal.length - 1] =
          dispVal[dispVal.length - 1] * 10 + parseInt(displayTextValue);
      }
      console.log(`Display value is ${dispVal}`);
      this.setState({
        displayValue: dispVal
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
      console.log(this.state.displayValue);
      return <DisplayText text={0} className={classNameValue} />;
    } else {
      const len = this.state.displayValue.length;
      if (this.state.displayValue[len - 1] === "") {
        return (
          <DisplayText
            text={this.state.displayValue[len - 3]}
            className={classNameValue}
          />
        );
      } else {
        return (
          <DisplayText
            text={this.state.displayValue[len - 1]}
            className={classNameValue}
          />
        );
      }
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
