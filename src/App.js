import { Component } from "react";
import Feedback from "./components/FeedbackOptions";
import Statistic from "./components/Statistics";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = (name) => {
    this.setState((prevState) => {
      if ("good" === name) {
        return { good: prevState.good + 1 };
      } else if ("neutral" === name) {
        return { neutral: prevState.neutral + 1 };
      } else {
        return { bad: prevState.bad + 1 };
      }
    });
  };

  render() {
    const { good } = this.state;
    const { neutral } = this.state;
    const { bad } = this.state;
    const onTotalFeedbackCount = good + neutral + bad;
    const onPositivePercentageCount =
      good > 0 ? Math.round((good / onTotalFeedbackCount) * 100) : 0;

    return (
      <div>
        <Feedback
          options={["good", "neutral", "bad"]}
          LeaveFeedback={this.onLeaveFeedback}
        />

        <Statistic
          good={good}
          neutral={neutral}
          bad={bad}
          onTotalFeedbackCount={onTotalFeedbackCount}
          onPositivePercentageCount={onPositivePercentageCount}
        />
      </div>
    );
  }
}

export default App;
