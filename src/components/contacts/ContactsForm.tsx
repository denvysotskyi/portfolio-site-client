import styled from 'styled-components'
import { observer } from 'mobx-react-lite'
import siteChange from '../../store/siteChange'
import Message from '../../common/message/Message'
import { Formik } from 'formik'
import * as Yup from 'yup'
import * as axios from 'axios'

const Form = styled.form`
  margin-top: 30px;
  display: grid;
  grid-template: 45px 190px 45px / repeat(2, 280px);
  row-gap: 30px;
  justify-content: space-between;
  @media ${props => props.theme.media.tablet} {
    grid-template: 45px 190px 45px / repeat(2, 250px);
  }
  @media ${props => props.theme.media.phone} {
    grid-template: 45px 45px 190px minmax(45px, auto) / 300px;
  }
`
const Label = styled.label`
  display: block;
  position: absolute;
  top: -9px;
  left: 12px;
  height: 18px;
  padding: 0 8px;
  background-color: #fff;
  color: #000000;
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;
  margin-bottom: 0;
`
const InputWrapper = styled.div`
  position: relative;
  @media ${props => props.theme.media.phone} {
    width: 300px;
  }
`
const Input = styled.input`
  width: 100%;
  height: 100%;
  padding-left: 20px;
  font-size: 16px;
  outline: none;
`
const TextareaWrapper = styled.div`
  position: relative;
  grid-column: 1 / 3;
  @media ${props => props.theme.media.phone} {
    grid-column: unset;
    width: 300px;
  }
`
const Textarea = styled.textarea`
  width: 100%;
  height: 100%;
  resize: none;
  padding: 20px;
  font-size: 16px;
  outline: none;
`
const ButtonWrapper = styled.div`
  grid-column: 1 / 3;
  display: grid;
  grid-template-columns: repeat(2, auto);
  @media ${props => props.theme.media.phone} {
    grid-column: unset;
    grid-template-columns: 1fr;
    column-gap: unset;
    row-gap: 20px;
}
`
const Button = styled.button`
  width: 219px;
  height: 45px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.15);
  background-color: #ffa501;
  border: none;
  color: #000000;
  font-size: 14px;
  font-weight: 700;
  line-height: 21px;
  margin-top: 2px;
  &:hover {
    box-shadow: 0 10px 25px rgba(148, 174, 213, .8);
    transition: .3s all ease;
  }
  @media ${props => props.theme.media.phone} {
    order: 2;
    max-width: 220px;
    margin: 0 auto;
  }
`
const Error = styled.div`
  color: red;
`
const FormWrapper = styled.div`
`

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Мало символов')
    .max(50, 'Много символов')
    .required('Обязательное поле'),
  email: Yup.string().email('Неверный email').required('Обязательное поле')
})

const ContactsForm = observer ( (): JSX.Element => (
    <FormWrapper>
      <Message />
      <Formik
        initialValues={{
          name: '',
          email: '',
          message: ''
        }}
        validationSchema={SignupSchema}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          siteChange.openIndicator()
          // const url = 'https://portfolio-site-server-1.herokuapp.com/users'
            const url = 'http://localhost:7777/users'
          await axios.post(url, values)
          setSubmitting(true)
          resetForm()
          siteChange.closeIndicator()
          siteChange.openModal()
          setTimeout(() => {
            siteChange.closeModal()
          }, 3500)
        }}
      >
        {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting
          }) => (
          <Form onSubmit={handleSubmit}>
            <InputWrapper>
              <Label htmlFor={'name'}>
                Ф.И.О.
              </Label>
              <Input
                type={'text'}
                name={'name'}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
              />
              {errors.name && touched.name ? (
                <Error>{errors.name}</Error>
              ) : null}
            </InputWrapper>
            <InputWrapper>
              <Label htmlFor={'email'}>
                Email
              </Label>
              <Input
                type={'email'}
                name={'email'}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              {errors.email && touched.email ? (
                <Error>{errors.email}</Error>
              ) : null}
            </InputWrapper>
            <TextareaWrapper>
              <Label htmlFor={'message'}>
                Ваше сообщение
              </Label>
              <Textarea name={'message'}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.message}
              />
            </TextareaWrapper>
            <ButtonWrapper>
              <Button type={'submit'}
                      disabled={isSubmitting}>
                Отправить сообщение
              </Button>
            </ButtonWrapper>
          </Form>
        )}
      </Formik>
    </FormWrapper>
  )
)

export default ContactsForm