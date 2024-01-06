import { date, number, object, string } from 'yup';

export const onboardingSchema = object().shape({
    lastName: string().min(3,'Please enter Last Name').required('Please enter Last Name'),
    firstName:string().min(3, 'Please enter First Name').required('Please enter First Name'),
    role: string().required('Please enter Role'),
    // position: string().required('Please enter Position'),
}); 

export const organizationSchema = object().shape({
    name: string().min(3, 'Please enter the name of the organization').required('Please enter the name of the organization'),
    yearEnd: date().required('Please enter the year end'),
    holidayAllowance: number().required('Please enter the holiday allowance'),
    location: string().required('Please enter the location'),
});