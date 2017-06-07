const UNSPLASH_URI = 'https://images.unsplash.com'

export const createUnsplashSource = id =>
  `${ UNSPLASH_URI }/photo-${ id }?dpr=2auto=format&w=1024&h=1024`

export const createUnsplashSourceSet = (id, size) =>
  `${ UNSPLASH_URI }/photo-${ id }?dpr=2&auto=format&w=${ size } ${ size }w`

export const createUnsplashThumbnail = (id, orientation = 'landscape') => {
  const dimensions = orientation === 'square'
    ? 'w=300&h=300'
    : 'w=225&h=150'

  return `${ UNSPLASH_URI }/photo-${ id }?dpr=2&auto=format&crop=faces&fit=crop&${ dimensions }`
}
