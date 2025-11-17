<template>
  <Editor :content class="mx-auto w-full max-w-[640px]" />
</template>

<script lang="ts" setup>
import Editor from '~/components/Editor/Editor.vue'

const content = {
  type: 'doc',
  content: [
    {
      type: 'heading',
      attrs: {
        testid: null,
        level: 2,
      },
      content: [
        {
          type: 'text',
          text: 'Заголовок 2 уровня',
        },
      ],
    },
    {
      type: 'heading',
      attrs: {
        testid: null,
        level: 3,
      },
      content: [
        {
          type: 'text',
          text: 'Заголовок 3 уровня',
        },
      ],
    },
    {
      type: 'paragraph',
      attrs: {
        testid: null,
      },
      content: [
        {
          type: 'text',
          text: 'Обычный текст',
        },
      ],
    },
    {
      type: 'bulletList',
      attrs: {
        testid: null,
      },
      content: [
        {
          type: 'listItem',
          content: [
            {
              type: 'paragraph',
              attrs: {
                testid: null,
              },
              content: [
                {
                  type: 'text',
                  text: 'Маркированный список из единственного элемента',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      type: 'orderedList',
      attrs: {
        testid: null,
        start: 1,
        type: null,
      },
      content: [
        {
          type: 'listItem',
          content: [
            {
              type: 'paragraph',
              attrs: {
                testid: null,
              },
              content: [
                {
                  type: 'text',
                  text: 'Нумерованный список из единственного элемента',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      type: 'bulletList',
      attrs: {
        testid: null,
      },
      content: [
        {
          type: 'listItem',
          content: [
            {
              type: 'paragraph',
              attrs: {
                testid: null,
              },
              content: [
                {
                  type: 'text',
                  text: 'Маркированный список, состоящий из нескольких элементов',
                },
              ],
            },
          ],
        },
        {
          type: 'listItem',
          content: [
            {
              type: 'paragraph',
              attrs: {
                testid: null,
              },
              content: [
                {
                  type: 'text',
                  text: 'Вот второй элемент',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      type: 'orderedList',
      attrs: {
        testid: null,
        start: 1,
        type: null,
      },
      content: [
        {
          type: 'listItem',
          content: [
            {
              type: 'paragraph',
              attrs: {
                testid: null,
              },
              content: [
                {
                  type: 'text',
                  text: 'Нумерованный список, состоящий из нескольких элементов',
                },
              ],
            },
          ],
        },
        {
          type: 'listItem',
          content: [
            {
              type: 'paragraph',
              attrs: {
                testid: null,
              },
              content: [
                {
                  type: 'text',
                  text: 'Вот второй элемент',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      type: 'horizontalRule',
      attrs: {
        testid: null,
      },
    },
    {
      type: 'blockquote',
      attrs: {
        testid: null,
      },
      content: [
        {
          type: 'paragraph',
          attrs: {
            testid: null,
          },
          content: [
            {
              type: 'text',
              text: 'Это цитата',
            },
          ],
        },
      ],
    },
    {
      type: 'codeBlock',
      attrs: {
        testid: null,
        language: null,
      },
      content: [
        {
          type: 'text',
          text: '    Это код',
        },
      ],
    },
  ],
}
</script>
