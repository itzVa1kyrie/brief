import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { createStructuredSelector } from 'reselect';
import { codeSelector } from "../../redux/selectors/briefSelector";
import { recoverCode } from "../../redux/actionCreator/postBrief";
import { postBrief } from "../../redux/actionCreator/postBrief";
import TextField from "../../components/TextField";
import {FormStyle, Button, PopUp, Text, Title} from './styled';

const codeResponse = createStructuredSelector({
  code: codeSelector,
});

export default function Form() {
  const dispatch = useDispatch();
  const { code } = useSelector(codeResponse);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      country: '',
      result: '',
      budget: '',
      deadline: '',
      targetAudience: '',
      additionalInfo: '',
      projectName: '',
      services: '',
      features: '',
      strengths: '',
      weaknesses: '',
      brandInfo: ''
    },
  });

  const onSubmit = (data) => {
    dispatch(postBrief(data));
    reset();
  }

  return code !== '' ? (
    <PopUp>
      <Text>{code === '200' ? "Ваші відповіді успішно записані!" : "Щось пішло не так :( Спробуйте ще раз"}</Text>
      <Button onClick={() => dispatch(recoverCode())}>{code === '200' ? "Заповнити ще раз" :
        "Спробувати ще раз"}</Button>
    </PopUp>
  ) : (
    <FormStyle onSubmit={handleSubmit(onSubmit)}>
      <Title>Бриф</Title>
      <TextField
        type="text"
        label="Як Вас звати?"
        register={register('name', {
          required: 'Обов\'язкове поле!',
        })}
        name="name"
        error={errors.name && errors.name.message}
      />
      <TextField
        type="email"
        label="Вкажіть Вашу електронну пошту"
        register={register('email', {
          required: 'Обов\'язкове поле!',
        })}
        name="email"
        error={errors.email && errors.email.message}
      />
      <TextField
        type="text"
        label="Вкажіть назву Вашого проєкта"
        register={register('projectName', {
          required: 'Обов\'язкове поле!',
        })}
        name="projectName"
        error={errors.projectName && errors.projectName.message}
      />
      <TextField
        type="text"
        label="Для якої країни Ваш проєкт?"
        register={register('country', {
          required: 'Обов\'язкове поле!',
        })}
        name="country"
        error={errors.country && errors.country.message}
      />
      <TextField
        type="text"
        label="Яка концепція Вашої компанії, її спеціалізація?"
        register={register('services', {
          required: 'Обов\'язкове поле!',
        })}
        name="services"
        error={errors.services && errors.services.message}
      />
      <TextField
          type="text"
          label="Які особливості Вашого проєкту? Можливо, якщо порівнювати з конкурентами."
          register={register('features', {
              required: 'Обов\'язкове поле!',
          })}
          name="features"
          error={errors.features && errors.features.message}
      />
      <TextField
          type="text"
          label="Цільова аудиторія? Для кого розробляється продукт?"
          register={register('targetAudience', {
              required: 'Обов\'язкове поле!',
          })}
          name="targetAudience"
          error={errors.targetAudience && errors.targetAudience.message}
      />
      <TextField
        type="text"
        label="Опишіть сильні сторони Вашого проєкту?"
        register={register('strengths', {
          required: 'Обов\'язкове поле!',
        })}
        name="strengths"
        error={errors.strengths && errors.strengths.message}
      />
      <TextField
        type="text"
        label="Опишіть слабкі сторони Вашого проєкту?"
        register={register('weaknesses', {
          required: 'Обов\'язкове поле!',
        })}
        name="weaknesses"
        error={errors.weaknesses && errors.weaknesses.message}
      />
      <TextField
          type="number"
          label="Бюджет Вашого проєкту?"
          register={register('budget', {
              required: 'Обов\'язкове поле!',
          })}
          name="budget"
          error={errors.budget && errors.budget.message}
      />
      <TextField
          type="date"
          label="Які дедлайни?"
          register={register('deadline', {
              required: 'Обов\'язкове поле!',
          })}
          name="deadline"
          error={errors.deadline && errors.deadline.message}
      />
      <TextField
        type="text"
        label="Що Ви хочете отримати в результаті?"
        register={register('result', {
          required: 'Обов\'язкове поле!',
        })}
        name="result"
        error={errors.result && errors.result.message}
      />
      <TextField
        type="text"
        label="Можливо, вже є якісь переваги у дизайні проєкту? Чи є макет?"
        register={register('brandInfo', {
          required: 'Обов\'язкове поле!',
        })}
        name="brandInfo"
        error={errors.brandInfo && errors.brandInfo.message}
      />
      <TextField
        type="text"
        label="Будь-яка додаткова інформація, яка не була вищезгадана, але варто згадати?"
        register={register('additionalInfo', {
          required: 'Обов\'язкове поле!',
        })}
        name="additionalInfo"
        error={errors.additionalInfo && errors.additionalInfo.message}
      />
      <Button name='submitForm' type='submit'>Надіслати</Button>
    </FormStyle>
  );
}