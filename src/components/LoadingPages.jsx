import React from 'react';
import "../styles/LoadingPages.scss";
import logo from "../assets/Logo_CCC.png";

class LoadingPages extends React.Component {
  state = { number: 0 };

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState(prev => {
        const next = Math.min(prev.number + 1, 100); // ไม่เกิน 100
        if (next === 100) clearInterval(this.interval);
        return { number: next };
      });
    }, 15);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { number } = this.state;

    return (
      <div className="flex-container">
        <div className="box-progress" data-text="" style={{ '--p': `${number}%` }}>
            <img src={logo} alt="CCC Logo" />
            <span className="box-text">{number}%</span>
        </div>
    </div>
    );
  }
}

export default LoadingPages;
