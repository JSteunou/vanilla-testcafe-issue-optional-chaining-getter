const ghost = undefined

function getValue(key) {
  return ghost?.prop[key] ?? key
}

function toggle() {
  const header = document.querySelector('h1')
  const test = getValue('café')
  if (header) header.textContent = `Hello test${test}`
}

function main() {
  const button = document.getElementById('action')
  button.addEventListener('click', toggle)
}

main()
