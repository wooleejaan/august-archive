const NOT_FOUND_TEXT = [
  'art has no rules.',
  'perfectly imperfect.',
  'everything can change in just one day.',
  'silence is luxurious.',
  'little things mean a lot.',
  'keep it simple.',
  'less, but better.',
  'the beauty of silence.',
  'art is not what you see.',
  'less is the new more.',
]

const paragraphGenerator = () => NOT_FOUND_TEXT[Math.floor(Math.random() * 10)]

export default paragraphGenerator
