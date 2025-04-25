export default function() {
  function create() {
    const el = document.createElement('div')
    el.id = 'teleports'

    document.body.appendChild(el)
  }

  function remove() {
    document.body.innerHTML = ''
  }

  return { create, remove }
}
