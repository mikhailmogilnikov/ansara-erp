import * as Yup from 'yup';

export const ValidateProjectSchema = Yup.object().shape({
  password: Yup.string()
    .required('Введите пароль')
    .min(6, 'Слишком короткий пароль')
    .max(20, 'Слишком короткий пароль'),
  login: Yup.string()
    .required('Введите логин')
    .min(3, 'Слишком короткий логин')
    .max(16, 'Слишком длинный логин'),
  phone: Yup.string()
    .required('Введите номер телефона')
    .matches(/^\+7\s\(\d{3}\)\s\d{3}-\d{2}-\d{2}$/, 'Некорректный номер телефона'),
  name: Yup.string()
    .required('Введите имя')
    .min(3, 'Слишком короткое имя')
    .max(16, 'Слишком длинное имя'),
});
