import styled from 'styled-components'
import { IImageProps } from './Image.props'

const StyledImage = styled.img<IImageProps>`
  width: ${({width}) => width};
  height: ${({height}) => height};
  margin-bottom: ${({bottom}) => bottom};
  margin-right: ${({right}) => right};
  @media ${props => props.theme.media.phone} {
    right: 10px;
    width: 30px;
    height: 30px;
  }
`

const Image = ({ src, alt, width, height, right, bottom }: IImageProps): JSX.Element => (
    <StyledImage src={src}
                 alt={alt}
                 width={width}
                 height={height}
                 right={right}
                 bottom={bottom}
    />
  )

export default Image