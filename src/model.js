import image from './assets/Spb.jpg'
import {TextBlock, TitleBlock, ImageBlock, TextColumnsBlock} from './classes/blocks'
import {css} from './utils'

const text = `Frontend-Developers`

export const model = [
  new TitleBlock('Санкт-Петербург', {
    tag: 'h2',
    styles: css({
      background: 'linear-gradient(to top, #0030cce8, #000000e3)',
      color: '#fff',
      padding: '1.5rem',
      'text-align': 'center'
    })
  }),
  new ImageBlock(image, {
    styles: css({
      padding: '2rem 0',
      display: 'flex',
      'justify-content': 'center'
    }),
    alt: 'my image',
    imageStyles: 'width: 500px; height: auto; border-radius: 10px;'
  }),
  new TextColumnsBlock([
    'Санкт-Петербург является крупным туристическим центром Российской Федерации',
    '10% площади Санкт-Петербурга покрыто водой',
    'В Санкт-Петербурге насчитывается примерно 100 островов и 800 мостов'
  ], {
    styles: css({
      padding: '2rem 15px',
      color: '#fff',
      background: 'linear-gradient(to bottom, #0030cce8, #000000e3)',
      'font-weight': 'bold'
    })
  }),
  new TextBlock(text, {
    styles: css({
      background: 'gray',
      'font-weight': 'bold',
      padding: '1rem'
    })
  })
]