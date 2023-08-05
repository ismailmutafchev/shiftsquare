import { object, string, number, date, InferType } from 'yup';

let shiftSchema = object().shape({
    employee: string().required(),
    position: string().required(),
    shiftDate: date().required(),
    shiftStartTime: string().required(),
    shiftEndTime: string().required(),
});
