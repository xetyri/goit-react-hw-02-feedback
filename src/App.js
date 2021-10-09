import { Component } from "react";
import Feedback from "./components/FeedbackOptions";
import Statistic from "./components/Statistics";
import Notification from "./components/Notification";
import Section from "./components/Section";
import Container from "./components/Container";

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
      <Section>
        <Container title="Please Leave FeedBack">
          <Feedback
            options={["good", "neutral", "bad"]}
            LeaveFeedback={this.onLeaveFeedback}
          />
        </Container>
        <Container title={onTotalFeedbackCount ? "Statistics:" : ""}>
          {onTotalFeedbackCount === 0 ? (
            <Notification />
          ) : (
            <Statistic
              good={good}
              neutral={neutral}
              bad={bad}
              onTotalFeedbackCount={onTotalFeedbackCount}
              onPositivePercentageCount={onPositivePercentageCount}
            />
          )}
        </Container>
      </Section>
    );
  }
}

export default App;
