import { object, string } from 'yup';

export const onboardingSchema = object().shape({
    firstName: string().required('Please enter First Name'),
    lastName: string().required('Please enter Last Name'),
    organization: string().required('Please enter Organization'),
    position: string().required('Please enter Position'),
    role: string().required('Please enter Role'),
});