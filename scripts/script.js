const submitHandler = (function() {
  const _loginForm = document.querySelector('#loginForm')

  const _linkToGitHub = () => {
    window.location.href = 'https://github.com/thiago-porto25'
  }
  const _preventRefresh = event => {
    event.preventDefault()
  }
  _loginForm.addEventListener('submit', _preventRefresh)
  _loginForm.addEventListener('submit', _linkToGitHub)
})()