import React from 'react'
import { IKImage } from 'imagekitio-react'

const Image = ({src, className, alt, width, height}) => {
  return (
    <IKImage
      urlEndpoint={import.meta.env.VITE_IMAGEKIT_URL_ENDPOINT}
      path={src}
      className={className}
      alt={alt}
      loading='lazy'
      lqip={{ active: true }}
      width={width}
      height={height}
    />
  )
}

export default Image