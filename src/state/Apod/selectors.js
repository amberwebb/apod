const selectApodCopyright = state => state.apod.item.copyright

const selectApodExplanation = state => state.apod.item.explanation

const selectApodImageLink = state => state.apod.item.url

const selectApodTitle = state => state.apod.item.title

export {
  selectApodCopyright,
  selectApodExplanation,
  selectApodImageLink,
  selectApodTitle
}
