import { API } from './types';
export default function apiAction({
  url = '',
  method = 'POST',
  data = null,
  onSuccess = ({index} : {index:any}) => { },
  onFailure = () => { },
  label = '',
  headersOverride = null,
}) {
  return {
    type: API,
    payload: {
      url,
      method,
      data,
      onSuccess,
      onFailure,
      label,
      headersOverride,
    },
  };
}
