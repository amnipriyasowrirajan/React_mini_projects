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
