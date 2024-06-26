import { HttpInterceptorFn } from '@angular/common/http';

export const httpInterceptor: HttpInterceptorFn = (req, next) => {
  const  accesToken = localStorage.getItem('accessToken');
  console.log(accesToken)
  if(accesToken){
    const cloned = req.clone({
      setHeaders:{
        Authorization: `Bearer ${ accesToken}`,
      },
    });
    return next(cloned);
  }
  return next(req);
};
