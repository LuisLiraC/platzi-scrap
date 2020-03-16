document.querySelector('#scrap').addEventListener('click', () => {
  const account = document.querySelector('input').value.trim()
  if (account) {
    document.querySelector('#help').textContent = 'Scraping...'
    window.location.href = window.location.href + `scrap/${account}`
  } else {
    document.querySelector('#help').textContent = 'Insert a valid profile name'
  }
})

document.querySelector('#copy').addEventListener('click', () => {
  const text = document.querySelector('#endpoint')
  text.removeAttribute('disabled')
  text.select()
  text.setSelectionRange(0, 99999)
  document.execCommand('copy')
  text.setSelectionRange(0, 0)
  text.setAttribute('disabled', 'true')
  document.querySelector('#copy').textContent = 'Copied'
})