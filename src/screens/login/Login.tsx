import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import authApi from '~/api/auth.api';
import { productColorApi } from '~/api/product.api';
import FormGroup from '~/components/common/FormGroup';
import { IconUser } from '~/components/icon/Icon';
import Input from '~/components/input/Input';
import TogglePassword from '~/components/toogle/TogglePassword';
import useToggleValue from '~/hooks/useToggleValue';
import jwtDecode from 'jwt-decode';
import { toast } from 'react-toastify';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect } from 'react';

const schema = Yup.object({
    email: Yup.string()
        .required('Please enter your emaill address!')
        .matches(
            // eslint-disable-next-line no-control-regex
            /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,
            { message: 'Please enter valid email address' },
        ),
    password: Yup.string()
        .required('Please enter your password')
        .min(8, 'Password must be 8 characters'),
});

const Login = () => {
    const navigate = useNavigate();
    const loginHandler = async (values: any) => {
        const { email, password } = values;
        authApi.login({ email, password }).then((res: any) => {
            console.log('res: ', res);
            if (res) {
                const accessToken = res.result.access;
                let decode: any = jwtDecode(accessToken);
                if (decode.role === 'ADMIN') {
                    sessionStorage.setItem('accessToken', res.result.access);
                    sessionStorage.setItem('refreshToken', res.result.refresh);
                    sessionStorage.setItem('admin', 'true');
                    toast.success(`Login successfully!`);
                    navigate('/');
                } else {
                    toast.error(`You don't have permission to access!`);
                }
            }
        });
    };

    const { value: showPassword, handleToggleValue: handleTogglePassword } = useToggleValue();
    const {
        handleSubmit,
        control,
        formState: { errors, isValid, isSubmitting },
    } = useForm({
        resolver: yupResolver(schema),
        mode: 'onSubmit',
    });
    useEffect(() => {
        const arrErrors = Object.values(errors);
        if (arrErrors.length > 0) {
            if (arrErrors[0]?.message) {
                const message = arrErrors[0]?.message;
                toast.error(message.toString(), {
                    autoClose: 1000,
                    pauseOnHover: false,
                    draggable: true,
                    delay: 50,
                });
            }
        }
    }, [errors]);
    return (
        <div className='fixed inset-0 flex items-center justify-center'>
            <div className='flex flex-col items-center mx-auto px-14 py-4 bg-white rounded-2xl shadow-lg'>
                <IconUser />
                <Link to={'/admin'}>
                    <h1 className='text-black text-3xl font-bold'>Palmo Clothes</h1>
                </Link>
                <form className='text-center w-full' onSubmit={handleSubmit(loginHandler)}>
                    <div className='flex flex-col'>
                        <FormGroup>
                            <label
                                htmlFor='email'
                                className='text-lg font-semibold text-left cursor-pointer'
                            >
                                Email
                            </label>
                            <Input
                                variant={'outlined'}
                                control={control}
                                name='email'
                                type='text'
                                placeholder='Tên đăng nhập'
                                error={errors.email?.message ?? ''}
                            />
                        </FormGroup>
                        <FormGroup>
                            <label
                                htmlFor='password'
                                className='text-lg font-semibold text-left cursor-pointer'
                            >
                                Password
                            </label>
                            <Input
                                variant={'outlined'}
                                control={control}
                                name='password'
                                id='password'
                                type={showPassword ? 'text' : 'password'}
                                placeholder='Mật khẩu'
                                error={errors.email?.message ?? ''}
                            >
                                <TogglePassword
                                    open={showPassword}
                                    onClick={handleTogglePassword}
                                />
                            </Input>
                        </FormGroup>
                    </div>
                    <button
                        className='mb-4 transition ease-in-out delay-250 hover:-translate-y-1 hover:scale-110 border border-gray-c3 p-2 rounded-xl bg-warning text-white text-lg font-semibold'
                        type='submit'
                    >
                        Đăng nhập
                    </button>
                </form>
                <span className='text-sm font-thin text-center pt-2'>
                    Việc bạn tiếp tục sử dụng trang web này đồng nghĩa bạn đồng ý với{' '}
                    <Link to={'/home'}>
                        <p className='font-bold cursor-pointer mt-2'>
                            Điều khoản sử dụng của chúng tôi.
                        </p>
                    </Link>
                </span>
            </div>
        </div>
    );
};

export default Login;
