import { CanActivateFn, Router } from '@angular/router';
import { CommonService } from '../core/services/common.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  let commonService = inject(CommonService);
  let routerService = inject(Router)

  if(!commonService.isLoggedIn()){
    routerService.navigate(['/auth']);
    return false;
  }
  return true;
};
