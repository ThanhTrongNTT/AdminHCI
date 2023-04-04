import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import FormGroup from '~/components/common/FormGroup';
import { IconUser } from '~/components/icon/Icon';
import Input from '~/components/input/Input';
import TogglePassword from '~/components/toogle/TogglePassword';
import useToggleValue from '~/hooks/useToggleValue';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const loginHandler = async (values: any) => {
        const { email, password } = values;
    };

    const { value: showPassword, handleToggleValue: handleTogglePassword } = useToggleValue();
    const {
        handleSubmit,
        control,
        formState: { errors, isValid, isSubmitting },
    } = useForm({
        mode: 'onSubmit',
    });
    return (
        <div className='fixed inset-0 bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 flex items-center justify-center'>
            <div className='flex flex-col items-center mx-auto p-5 bg-white rounded-2xl shadow-lg w-[40%]'>
                <IconUser />
                <Link to={'/admin'}>
                    <h1 className='text-black text-3xl font-bold'>Trip Guide</h1>
                </Link>
                <form className='text-center w-[70%] mx-auto' onSubmit={handleSubmit(loginHandler)}>
                    <div className='flex flex-col'>
                        <FormGroup>
                            <label htmlFor='' className='text-lg font-semibold text-left'>
                                Email
                            </label>
                            <Input
                                variant={'outlined'}
                                control={control}
                                name='email'
                                type='email'
                                placeholder='Tên đăng nhập'
                                error={errors.email?.message ?? ''}
                            />
                        </FormGroup>
                        <FormGroup>
                            <label htmlFor='' className='text-lg font-semibold text-left'>
                                Password
                            </label>
                            <Input
                                variant={'outlined'}
                                control={control}
                                name='password'
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
                {/* <Link to={'/forgot'}>
                    <span className='text-lg font-semibold text-center my-5'>Quên mật khẩu ?</span>
                </Link> */}
                <span className='text-sm font-thin w-[70%] text-center pt-2'>
                    Việc bạn tiếp tục sử dụng trang web này đồng nghĩa bạn đồng ý với{' '}
                    <Link to={'/home'}>
                        <p className='font-bold cursor-pointer'>
                            Điều khoản sử dụng của chúng tôi.
                        </p>
                    </Link>
                </span>
            </div>
        </div>
    );
};

export default Login;
