import { object, string } from 'yup';

export const onboardingSchema = object().shape({
    organization: string().min(3, 'Please enter the name of the organization').required('Please enter the name of the organization'),
    lastName: string().min(3,'Please enter Last Name').required('Please enter Last Name'),
    firstName:string().min(3, 'Please enter First Name').required('Please enter First Name'),
    role: string().required('Please enter Role'),
    // position: string().required('Please enter Position'),
});