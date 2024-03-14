- Pagination
  A Pagination component for React that allows easy navigation through pages of data.

  - currentPage: (number) The current active page.
  - totalPages: (number) Total number of pages.
  - onPageChange: (function) Callback function triggered when a page is clicked. Receives the page number as an argument.

- Digital Clock
  A simple Digital Clock component for React that displays the current time.

  - The Digital Clock component doesn't accept any props.

- Countdown Timer
  A Countdown Timer component for React that counts down to a specified time or duration.

  - targetTime: (Date) The target time to count down to.
  - duration: (number) The duration in seconds for the countdown. Specify either targetTime or duration, not both.
  - onComplete: (function) Callback function triggered when the countdown reaches zero.

- Step Progress Bar
  A Step Progress Bar component for React that allows you to visually represent progress through a series of steps.

  - steps: (array) An array of step objects, each containing a label for the step.
  - currentStep: (number) The index of the current step. This will determine which steps are considered completed and which are yet to be completed.

- Random Quote Generator
  A Random Quote Generator component for React that displays a random quote each time it's refreshed or triggered.
  - refresh: (boolean) If set to true, the component will fetch a new random quote. You can toggle this prop to refresh the quote.
- Tooltip
  A Tooltip component for React that provides contextual information when hovering over an element.

  - text: (string) The text to display in the tooltip.
  - position: (string) (Optional) The position of the tooltip relative to the target element. Default is 'top'.
  - delay: (number) (Optional) The delay in milliseconds before the tooltip appears. Default is 0.
  - className: (string) (Optional) Additional CSS class name(s) to apply to the tooltip.

- Currency Converter
  A Currency Converter component for React that allows users to convert between different currencies.
  - amount: (number) The amount of money to convert.
  - fromCurrency: (string) The currency to convert from.
  - toCurrency: (string) The currency to convert to.
  - onAmountChange: (function) Callback function triggered when the amount input changes.
  - onFromCurrencyChange: (function) Callback function triggered when the "from" currency selection changes.
  - onToCurrencyChange: (function) Callback function triggered when the "to" currency selection changes.

# Filter Products

A Filter Products component for React that allows users to filter products based on various criteria.

- filters: (object) An object containing filter criteria such as category, price range, etc.
- onFiltersChange: (function) A callback function triggered when filters are changed. It receives the updated filter object as an argument.

# Tip Calculator

A Tip Calculator component for React that helps users calculate tip amounts based on bill total and selected tip percentage.

- billTotal: (number) The total amount of the bill.
- tipPercentage: (number) The tip percentage to calculate the tip amount

# Music Player Component

A Music Player component for React that allows users to play, pause, skip tracks, adjust volume, and view track progress.

- tracks: (array) An array of track objects containing metadata such as title, artist, duration, and source URL (src) of each track.

# Custom Progress Bar

A Custom Progress Bar component for React that allows users to display progress in a visually appealing and customizable way.

- progress: (number) The current progress value, usually between 0 and 100.

# BMI Calculator Component

A BMI (Body Mass Index) Calculator component for React that helps users calculate their BMI based on weight and height inputs.

- weight: (number) The weight of the person in kilograms.
- height: (number) The height of the person in meters.

# Button Ripple Effect

A Button Ripple Effect component for React that adds a ripple effect animation to buttons upon click.

- The Button Ripple Effect component accepts all the props that a regular HTML button element accepts.

# Drag and Drop

A Drag and Drop component for React that enables users to drag and drop elements within a specified area.

- The Drag and Drop component does not accept any props. However, you can style the draggable elements and the drop area using CSS.

# Form Validation Component

A Form Validation component for React that enables validation of form inputs and displays error messages accordingly.

- onSubmit: (function) A callback function triggered when the form is submitted.

# File Upload Component

A File Upload component for React that allows users to upload files from their local system.

- onChange: (function) A callback function triggered when a file is selected. It receives the selected file(s) as an argument.

# Quiz Component

A Quiz component for React that allows users to take quizzes with multiple-choice questions.

- questions: (array) An array of question objects containing the question, options, and the index of the correct answer.
- onSubmit: (function) A callback function triggered when the quiz is submitted. It receives an array of objects representing the user's answers.

# Nested Comments Component

A Nested Comments component for React that allows users to create and display nested comment threads.

- comments: (array) An array of comment objects representing the initial comments to display.
- onCommentSubmit: (function) A callback function triggered when a new comment is submitted. It receives the new comment object as an argument

# PDF ViewerA

PDF Viewer component for React that allows users to view PDF documents within their application.

Install -> npm i @react-pdf/renderer

- url: (string) The URL or file path of the PDF document to be displayed.
- width: (number) (Optional) The width of the PDF viewer component. Default is 100%.
- height: (number) (Optional) The height of the PDF viewer component. Default is 500px.
