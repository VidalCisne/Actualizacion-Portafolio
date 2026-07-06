import purgecss from '@fullhuman/postcss-purgecss';

export default {
  plugins: [
    purgecss({
      content: [
        './index.html',
        './src/**/*.js'
      ],
      // Clases que se agregan/dependen de JS en tiempo de ejecución
      // (IntersectionObserver agrega "visible" a los elementos ".reveal")
      safelist: [
        'visible'
      ],
      defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || []
    })
  ]
};
