import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { CommonService } from '../core/services/common.service';

export const adminGuard: CanActivateFn = (route, state) => {
  const commonService = inject(CommonService);
  const routerService = inject(Router);

  const role = commonService.getRole();

  if(role !== 'ADMIN'){
    routerService.navigate(['/user'])
    return false;
  }
  return true;
};
