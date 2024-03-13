//import logo from "./logo.svg";
import "./App.css";
import PaginationTest from "./components/1-pagination/test";
import DigitalClock from "./components/2-digital-clock";
import CountdownTimerTest from "./components/3-countdown-timer/test";
import StepProgressBarTest from "./components/4-step-progress-bar/test";
import RandomQuoteGenerator from "./components/5-random-quote-generator";
import TooltipTest from "./components/6-tooltip/test";
import CurrencyConverter from "./components/7-currency-converter";
import FilterProducts from "./components/8-filter-products";
import TipCalculator from "./components/9-tip-calculator";

function App() {
  return (
    <div className="App">
      <h1>25 React JS Projects</h1>
      <PaginationTest />
      <DigitalClock />
      <CountdownTimerTest />
      <StepProgressBarTest />
      <RandomQuoteGenerator />
      <TooltipTest />
      <CurrencyConverter />
      <FilterProducts />
      <TipCalculator />
    </div>
  );
}

export default App;
