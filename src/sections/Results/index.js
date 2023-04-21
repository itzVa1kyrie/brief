import { useState } from "react";
import { createStructuredSelector } from 'reselect';
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { getAnswers } from "../../redux/actionCreator/getAnswers";
import { allAnswersSelector } from "../../redux/selectors/answersSelector";
import TextField from "../../components/TextField";
import { Button } from "../Form/styled";
import { FormStyle, Error, Data, Item, Header, Row, Title, Info } from './styled';

const allAnswers = createStructuredSelector({
  answers: allAnswersSelector,
});

export default function Results() {
  const [invalid, setInvalid] = useState(false);
  const [auth, setAuth] = useState(false);
  const dispatch = useDispatch();
  const { answers } = useSelector(allAnswers);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      login: '',
      password: '',
    },
  });

  const onSubmit = ({ login, password }) => {
    if (login === 'admin' && password === 'admin') {
      dispatch(getAnswers());
      setInvalid(false);
      setAuth(true);
    } else {
      setInvalid(true);
      setAuth(false);
    }
  };

  return Object.keys(answers).length === 0 && !auth ? (
    <FormStyle onSubmit={handleSubmit(onSubmit)}>
      <TextField
        type="text"
        label="Логін"
        register={register('login', {
          required: 'Обов\'язкове поле!',
        })}
        name="login"
        error={errors.login && errors.login.message}
      />
      <TextField
        type="password"
        label="Пароль"
        register={register('password', {
          required: 'Обов\'язкове поле!',
        })}
        name="password"
        error={errors.password && errors.password.message}
      />
      {invalid && <Error>Логін або пароль введені невірно!</Error>}
      <Button name='auth' type='submit'>Увійти</Button>
    </FormStyle>
  ) : <Data>{Object.keys(answers).map((key) => {
    const { data: { additionalInfo, brandInfo, features,
      country, deadline, email, name, budget, result, projectName,
      services, strengths, targetAudience, weaknesses } } = answers[key];

    return <Item key={key}>
      <Header>ID брифу: {key}</Header>
      <Row>
        <Title>Ім'я замовника:</Title>
        <Info>{name}</Info>
      </Row>
      <Row>
        <Title>Електронна пошта замовника:</Title>
        <Info>{email}</Info>
      </Row>
      <Row>
        <Title>Назва проєкту:</Title>
        <Info>{projectName}</Info>
      </Row>
      <Row>
        <Title>Для якої країни проєкт:</Title>
        <Info>{country}</Info>
      </Row>
      <Row>
        <Title>Яка концепція компанії, її спеціалізація:</Title>
        <Info>{services}</Info>
      </Row>
      <Row>
        <Title>Особливості проєкту:</Title>
        <Info>{features}</Info>
      </Row>
      <Row>
        <Title>Цільова аудиторія:</Title>
        <Info>{targetAudience}</Info>
      </Row>
      <Row>
        <Title>Сильні сторони проєкту:</Title>
        <Info>{strengths}</Info>
      </Row>
      <Row>
        <Title>Слабкі сторони проєкту:</Title>
        <Info>{weaknesses}</Info>
      </Row>
      <Row>
        <Title>Бюджет проєкту:</Title>
        <Info>{budget}</Info>
      </Row>
      <Row>
        <Title>Дедлайни:</Title>
        <Info>{deadline}</Info>
      </Row>
      <Row>
        <Title>Бажаний результат:</Title>
        <Info>{result}</Info>
      </Row>
      <Row>
        <Title>Переваги у дизайні проєкту, можливо, макет:</Title>
        <Info>{brandInfo}</Info>
      </Row>
      <Row>
        <Title>Будь-яка додаткова інформація:</Title>
        <Info>{additionalInfo}</Info>
      </Row>
    </Item>;
  })}</Data>;
}