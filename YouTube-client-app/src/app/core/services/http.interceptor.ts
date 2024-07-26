import { HttpInterceptorFn } from '@angular/common/http';

import { environment } from '../../../environments/environment';

export const httpInterceptor: HttpInterceptorFn = (req, next) => {
  const apiUrl = environment.API_URL;
  const accessToken = environment.API_KEY;

  const apiReq = req.clone({
    url: req.url.replace('/api', apiUrl),
    params: req.params.set('key', accessToken),
  });
  return next(apiReq);
};
