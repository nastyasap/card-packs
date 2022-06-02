import React, {useEffect, useState} from 'react';
import s from "./Profile.module.css"
import {useSelector} from "react-redux";
import {AppRootStateType, useTypedDispatch} from "../../bll/store";
import {Navigate} from 'react-router-dom';
import {updateInitializingDataTC} from "../../bll/profile-reducer";
import SuperButton from "./common/Button/SuperButton";
import {Input} from "./common/Input/Input";
import {authTC, getUserData} from '../../bll/login-reducer';
import {UserResponseType} from "../../types/responseTypes";

const Profile = () => {
    const user = useSelector<AppRootStateType, UserResponseType>(getUserData);
    const isLoggedIn = useSelector<AppRootStateType, boolean>(state => state.login.isLoggedIn)

    const dispatch = useTypedDispatch()

    const [name, setName] = useState<string>(user.name)

    useEffect(() => {
        dispatch(authTC())
    }, [])


    const onSaveHandler = () => {
        dispatch(updateInitializingDataTC({name}))
    }
    const onCancelHandler = () => {
        setName(user.name)
    }

    const onChangeHandler = (name: string) => {
        setName(name)
    }


    if (!isLoggedIn) {
        return <Navigate to={'/login'}/>
    }
    return (
        <div className={s.profile}>
            <div className={s.wrapper}>
                <h2 className={s.title}>Personal Information</h2>
                <div className={s.imgContainer}>
                    <img alt={'Photo'}
                         src={user.avatar ? user.avatar : 'https://cyberpsy.ru/wp-content/uploads/2017/10/cyberpsy_post_image_80-1024x683.jpg'}/>
                </div>
                <div className={s.inputForm}>
                    <Input placeholder={'Nickname'} onChange={onChangeHandler} value={name}/>
                    <Input placeholder={'Email'} disabled value={user.email}/>
                </div>
                <div className={s.buttons}>
                    <SuperButton onClick={onCancelHandler}>Cancel</SuperButton>
                    <SuperButton onClick={onSaveHandler}>Save</SuperButton>
                </div>
            </div>
        </div>
    );
};

export default Profile;
