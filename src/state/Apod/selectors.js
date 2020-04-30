
export function selectApodCopyright(state) {
  return state.apod.item.copyright;
}

export function selectApodExplanation(state) {
  return state.apod.item.explanation;
}

export function selectApodTitle(state) {
  return state.apod.item.title;
}

export function selectApodImageLink(state) {
  return state.apod.item.url;
}
