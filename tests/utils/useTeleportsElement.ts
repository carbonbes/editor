export default function() {
  function create() {
    const el = document.createElement('div')
    el.id = 'teleports'

    document.body.appendChild(el)
  }

  function clear() {
    document.body.innerHTML = ''
  }

  return { create, clear }
}
