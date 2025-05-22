<template>
  <Editor
    :content
    class="mx-auto p-4 w-full max-w-[640px]"
  />
</template>

<script lang="ts" setup>
const content = `
  <h2>Заголовок 2 уровня</h2>

  <h3>Заголовок 3 уровня</h3>

  <p>Обычный текст</p>

  <ul>
    <li>Маркированный список из единственного элемента</li>
  </ul>

  <ol>
    <li>Нумерованный список из единственного элемента</li>
  </ol>

  <ul>
    <li>Маркированный список, состоящий из нескольких элементов</li>
    <li>Вот второй элемент</li>
  </ul>

  <ol>
    <li>Нумерованный список, состоящий из нескольких элементов</li>
    <li>Вот второй элемент</li>
  </ol>

  <hr />

  <blockquote>
    <p>Это цитата</p>
  </blockquote>

  <pre>
    <code></code>
  </pre>
`
</script>
