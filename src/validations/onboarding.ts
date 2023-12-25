import { object, string } from 'yup';

export const onboardingSchema = object().shape({
    organization: string().min(3, 'Please enter Organization').required('Please enter Organization'),
    lastName: string().min(3,'Please enter Last Name').required('Please enter Last Name'),
    firstName:string().min(3, 'Please enter First Name').required('Please enter First Name'),
    // position: string().required('Please enter Position'),
    // role: string().required('Please enter Role'),
});