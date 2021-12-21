import styled from 'styled-components'
import SkillItem from '../../common/skill-item/SkillItem'

import csharp from '../../assets/icons/skills/csharp.svg'
import dotnet from '../../assets/icons/skills/dotnet.svg'
import html5 from '../../assets/icons/skills/html5.svg'
import css3 from '../../assets/icons/skills/css3.svg'
import ts from '../../assets/icons/skills/ts.svg'
import angular from '../../assets/icons/skills/angular.svg'
import ngrx from '../../assets/icons/skills/ngrx.svg'
import react from '../../assets/icons/skills/react.svg'
import redux from '../../assets/icons/skills/redux.svg'
import mobx from '../../assets/icons/skills/mobx.svg'
import nodejs from '../../assets/icons/skills/nodejs.svg'
import nestjs from '../../assets/icons/skills/nestjs.svg'
import postgresql from '../../assets/icons/skills/postgresql.svg'
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

const SkillList = (): JSX.Element => (
  <SkillsWrapper>
    <SkillItem src={csharp}
               alt={'c#'}
               title={'C#'}
               descr={`Объектно-ориентированный язык программирования с безопасной системой типизации для платформы 
                      .NET.`}
    />
    <SkillItem src={dotnet}
               alt={'.net'}
               title={'.NET'}
               descr={`.NET - это платформа от Microsoft, которая позволяет создавать программные приложения.`}
    />
    <SkillItem src={html5}
               alt={'html5'}
               title={'HTML5'}
               descr={`Язык для структурирования и представления данных, позволяет
                      создавать более оптимизированную SEO-структуру продукта.`}
    />
    <SkillItem src={css3}
               alt={'css3'}
               title={'CSS3'}
               descr={`Язык стилей позволяет создать абсолютно любой внешний вид приложения.
                      Всё ограничивается лишь фантазией.`}
    />
    <SkillItem src={ts}
               alt={'ts'}
               title={'TypeScript'}
               descr={`Строго типизированный язык, уменьшающий количество потенциальных ошибок, которые
                      могли бы возникнуть при разработке на JavaScript.`}
    />
    <SkillItem src={angular}
               alt={'angular'}
               title={'Angular'}
               descr={`Платформа для разработки мобильных и десктопных веб-приложений, написанная на языке
                      TypeScript.`}
    />
    <SkillItem src={ngrx}
               alt={'ngrx'}
               title={'NgRx'}
               descr={`Библиотека реализует принцип работы Redux для Angular приложений. Она централизует и делает
                максимально понятным управление всеми состояниями приложения.`}
    />
    <SkillItem src={react}
               alt={'react'}
               title={'React'}
               descr={`Библиотека, позволяющая создавать веб-приложения. С её помощью возможно создать максимально
                      интерактивный продукт.`}
    />
    <SkillItem src={redux}
               alt={'redux'}
               title={'Redux'}
               descr={`Библиотека, предназначенная для управления состоянием приложения. Она значительно упрощает
                      передачу данных.`}
    />
    <SkillItem src={mobx}
               alt={'mobx'}
               title={'MobX'}
               descr={`Библиотека, которая делает управление состоянием простым и масштабируемым за счет прозрачного
                      применения функционального реактивного программирования.`}
    />
    <SkillItem src={nodejs}
               alt={'nodejs'}
               title={'Node'}
               descr={`Программная платформа, превращающая JavaScript из узкоспециализированного языка в язык
                      общего назначения.`}
    />
    <SkillItem src={nestjs}
               alt={'nestjs'}
               title={'Nest'}
               descr={`Фреймворк для Node.js на языке TypeScript. Данный фреймворк основан на Express.`}
    />
    <SkillItem src={postgresql}
               alt={'postgresql'}
               title={'PostgreSQL'}
               descr={`Cвободная объектно-реляционная система управления базами данных (СУБД).`}
    />
    <SkillItem src={mongodb}
               alt={'mongodb'}
               title={'MongoDB'}
               descr={`Нереляционная база данных, которая хранит все данные приложения.`}
    />
  </SkillsWrapper>
)

export default SkillList