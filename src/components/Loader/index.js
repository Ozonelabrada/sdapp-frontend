let timeout;

function myFunction() {
  timeout = setTimeout(alertFunc, 3000);
}

function alertFunc() {
    <div class="flex items-center justify-center">
    <div class="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>
}