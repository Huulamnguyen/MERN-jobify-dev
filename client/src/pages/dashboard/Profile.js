import { useState } from 'react'
import { FormRow, Alert } from '../../components';
import { useAppContext } from '../../context/appContext';
import Wrapper from '../../assets/wrappers/DashboardFormPage';

const Profile = () => {

    const { user, showAlert, displayAlert, updateUser, isLoading} = useAppContext();

    const [formData, setFormData] = useState({
        name: user?.name,
        email: user?.email,
        lastName: user?.lastName,
        location: user?.location,
    })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, lastName, location } = formData;
        if(!name || !email || !lastName || !location){
            displayAlert()
            return
        }
        updateUser({ name, email, lastName, location })   
    }

    return (
        <Wrapper>
            <form className="form" onSubmit={handleSubmit}>
                <h3>profile</h3>
                {showAlert && <Alert />}
                <div className='form-center'>
                    <FormRow
                        type='text'
                        name='name'
                        value={formData.name}
                        handleChange={handleChange}
                    />
                    <FormRow
                        type='text'
                        labelText='last name'
                        name='lastName'
                        value={formData.lastName}
                        handleChange={handleChange}
                    />
                    <FormRow
                        type='email'
                        name='email'
                        value={formData.email}
                        handleChange={handleChange}
                    />
                    <FormRow
                        type='text'
                        name='location'
                        value={formData.location}
                        handleChange={handleChange}
                    />
                    <button className='btn btn-block' type='submit' disabled={isLoading}>
                        {isLoading ? 'Please Wait...' : 'save changes'}
                    </button>
                </div>
            </form>
        </Wrapper>
    )
}

export default Profile;