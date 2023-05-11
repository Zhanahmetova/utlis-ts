import { IPrescorePayload } from '~/types/credit';

export const getPayload = (data):IPrescorePayload => ({
  iin: data.iin,
  phone_number: data.phone,
  product_name: data?.is_prime || data?.car_type === 0 ? 'MCF_B2C' : 'MCF_C2C',
  organization_name: 'MCF',
  credit_amount: Number(data.price).toString(),
  credit_initial_fee: data?.initialFee ? data.initialFee?.split(' ').join('') : data?.initialFee,
  advertisement_url: window.location.href,
  processing_info: {
    car_year: data?.car_details?.year_manufactured,
    car_mark_name: data?.car_mark?.name,
    car_model_name: data?.car_model?.name,
    city_name: data?.address?.city_info?.name,
    credit_monthly_payment: data.isPostponement ? undefined : data.monthlyPayment,
    credit_term: data.isPostponement ? 12 : data.month,
    is_installment: false,
    residual_payment: 0
  }
});
