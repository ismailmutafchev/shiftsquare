import { object, string, number } from 'yup';

export const shiftSchema = object().shape({
    employee: string().required('Please select Employee'),
    position: string().required('Please select Position'),
    date: string().required('Please select Date'),
    // .test('is-greater', 'Date should be greater than today', function (value) {
    //     return value > new Date();
    // }
    // ),
    start: string().required('Please select Start Time'),
    end: string().required('Please select End Time').test('is-greater', 'End Time should be greater than Start Time', function (value) {
        return value > this.parent.start;
    }
    ),
    length: number().required(),
});