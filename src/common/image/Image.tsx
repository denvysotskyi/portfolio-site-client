import styled from 'styled-components'

interface IImageProps {
  src: string
  alt: string
  width: string
  height: string
  right: string
  bottom: string
}
const StyledImage = styled.img<IImageProps>`
  width: ${({width}) => width};
  height: ${({height}) => height};
  margin-bottom: ${({bottom}) => bottom};
  margin-right: ${({right}) => right};
`

const Image = ({ src, alt, width, height, right, bottom }: IImageProps) => (
    <StyledImage src={src}
                 alt={alt}
                 width={width}
                 height={height}
                 right={right}
                 bottom={bottom}
    />
  )

export default Image