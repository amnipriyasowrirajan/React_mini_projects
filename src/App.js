//import logo from "./logo.svg";
import "./App.css";
import PaginationTest from "./components/1-pagination/test";
import MusicPlayer from "./components/10-music-player";
import ProgressBar from "./components/11-progress-bar";
import BMICalculator from "./components/12-bmi-calculator";
import ButtonRippleEffect from "./components/13-button-ripple-effect";
import DragAndDropFeature from "./components/14-drag-and-drop";
import FormValidation from "./components/15-simple-form-validation";
import FileUpload from "./components/16-file-upload";
import Quiz from "./components/17-quiz-app";
import NestedComments from "./components/18-nested-comments";
import PdfViewer from "./components/19-pdf-viewer";
import DigitalClock from "./components/2-digital-clock";
import FirebaseTodo from "./components/20-firebase-todo";
import FirebaseAuth from "./components/21-firebase-auth";
import DebounceApiCall from "./components/22-debounce-api-call";
import SortData from "./components/23-sort-data";
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
      <MusicPlayer />
      <ProgressBar />
      <BMICalculator />
      <ButtonRippleEffect />
      <DragAndDropFeature />
      <FormValidation />
      <FileUpload />
      <Quiz />
      <NestedComments />
      <PdfViewer />
      <FirebaseTodo />
      <FirebaseAuth />
      <DebounceApiCall />
      <SortData />
    </div>
  );
}

export default App;
