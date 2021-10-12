import styled from 'styled-components'

const StyledImage = styled.img`
  width: ${({width}) => width};
  height: ${({height}) => height};
  margin-bottom: ${({bottom}) => bottom};
  margin-right: ${({right}) => right};
`

const Image = ({ src, alt, width, height, right, bottom }) => (
    <StyledImage src={src}
                 alt={alt}
                 width={width}
                 height={height}
                 right={right}
                 bottom={bottom}
    />
  )

export default Image