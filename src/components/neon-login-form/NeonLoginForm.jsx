import React from 'react';
import './neon-login-form.css';
import { FaUser, FaUserLock, FaLocationCrosshairs } from "react-icons/fa6";
import { useForm } from 'react-hook-form';

const NeonLoginForm = ({servers}) => {

    const {register, formState: {errors}, handleSubmit} = useForm()

    const onSubmit = () => {}

  return (
    <div className='login-form'>
        <form onSubmit={handleSubmit(onSubmit)}>
            <h2>Вход в личный кабинет</h2>
            <div className='form-element'>
                <FaLocationCrosshairs className='login-icon'/>
                <select>
                    {servers.map(el => {
                        return (
                            <option key={el.id} value={el.id}>{el.name}</option>
                        )
                    })}
                </select>
            </div>
            <div className='form-element'>
                <FaUser className='login-icon'/>
                <input 
                    type='text' 
                    placeholder='Никней игрока'
                    {...register('nick', {
                        required: true
                    })}
                />
            </div>
            <div className='form-element'>
                <FaUserLock className='login-icon'/>
                <input 
                    type='password' 
                    placeholder='Пароль'
                    {...register('password', {
                        required: true
                    })}
                />
            </div>
            <button type='submit'>
                Войти
            </button>
        </form>
    </div>
  )
}

export default NeonLoginForm