import styled from 'styled-components'
import SkillItem from '../../common/skill-item/SkillItem'

import html5 from '../../assets/icons/skills/html5.svg'
import css3 from '../../assets/icons/skills/css3.svg'
import ts from '../../assets/icons/skills/ts.svg'
import react from '../../assets/icons/skills/react.svg'
import redux from '../../assets/icons/skills/redux.svg'
import nodejs from '../../assets/icons/skills/nodejs.svg'
import express from '../../assets/icons/skills/express.svg'
import graphql from '../../assets/icons/skills/graphql.svg'
import mongodb from '../../assets/icons/skills/mongodb.svg'

const SkillsWrapper = styled.div`
  margin-top: 60px;
  padding: 0 10px;
  display: grid;
  grid-template: repeat(2, minmax(270px, auto)) / repeat(4, 270px);
  grid-auto-rows: minmax(270px, auto);
  gap: 13px;
  @media ${props => props.theme.media.desktop} {
    grid-template-columns: repeat(auto-fit, 270px);
    justify-content: space-between;
  }
  @media ${props => props.theme.media.laptop} {
    padding: 0 20px;
  }
  @media ${props => props.theme.media.tablet} {
    padding: 0;
    justify-content: center;
    gap: 20px;
  }
  @media ${props => props.theme.media.phone} {
    margin-top: 20px;
  }
`

const SkillList = () => (
  <SkillsWrapper>
    <SkillItem src={html5}
               alt={'html5'}
               title={'HTML5'}
               descr={`Язык для структурирования и представления данных, позволяет
                      создавать более оптимизированную SEO-структуру продукта.`}
    />
    <SkillItem src={css3}
               alt={'css3'}
               title={'CSS3'}
               descr={`Этот язык стилей позволяет создать абсолютно любой внешний вид приложения.
                      Всё ограничивается лишь фантазией.`}
    />
    <SkillItem src={ts}
               alt={'ts'}
               title={'TypeScript'}
               descr={`Это строго типизированный язык, уменьшающий количество потенциальных ошибок, которые
                      могли бы возникнуть при разработке на JavaScript.`}
    />
    <SkillItem src={react}
               alt={'react'}
               title={'React'}
               descr={`Библиотека, позволяющая создавать приложения. С её помощью возможно создать максимально
                      интерактивный продукт.`}
    />
    <SkillItem src={redux}
               alt={'redux'}
               title={'Redux'}
               descr={`Библиотека, предназначенная для управления состоянием приложения. Она значительно упрощает
                      передачу данных хранилища через контекст.`}
    />
    <SkillItem src={nodejs}
               alt={'nodejs'}
               title={'Node.js'}
               descr={`Программная платформа, превращающая JavaScript из узкоспециализированного языка в язык
                      общего назначения.`}
    />
    <SkillItem src={express}
               alt={'express'}
               title={'Express'}
               descr={`Фреймворк для Node.js, спроектированный для создания приложений и API.`}
    />
    <SkillItem src={graphql}
               alt={'graphql'}
               title={'GraphQL'}
               descr={`Это язык запросов для API-интерфейсов и среда, в которой они выполняются.`}
    />
    <SkillItem src={mongodb}
               alt={'mongodb'}
               title={'MongoDB'}
               descr={`Нереляционная база данных, которая хранит все данные приложения.`}
    />
  </SkillsWrapper>
)

export default SkillList