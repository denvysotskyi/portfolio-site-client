import styled from 'styled-components'
import { ISkillItemProps } from './SkillItem.props'

const ItemWrapper = styled.div`
  border: 1px solid #000;
  padding: 30px 30px 25px 30px;
`
const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  min-height: 65px;
`
const Image = styled.img`
`
const SkiilsTitle = styled.h3`
  color: #000;
  font-weight: 700;
  text-align: left;
  font-size: 14px;
  line-height: 21px;
  text-transform: uppercase;
  margin-top: 20px;
`
const SkillsDescr = styled.p`
  width: 211px;
  height: 100%;
  margin-top: 20px;
  margin-bottom: 0;
  color: #000;
  font-weight: 700;
  text-align: left;
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;
`

const SkillItem = ({ src, alt, title, descr }: ISkillItemProps): JSX.Element => (
  <ItemWrapper>
    <ImageWrapper>
      <Image src={src}
             alt={alt}
      />
    </ImageWrapper>
    <SkiilsTitle>
      {title}
    </SkiilsTitle>
    <SkillsDescr>
      {descr}
    </SkillsDescr>
  </ItemWrapper>
  )

export default SkillItem