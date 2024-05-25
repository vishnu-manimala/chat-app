import { CanActivateFn, Router } from '@angular/router';
import { CommonService } from '../core/services/common.service';
import { inject } from '@angular/core';

export const userGuard: CanActivateFn = (route, state) => {
  const commonService = inject(CommonService);
  const routerService = inject(Router);

  const role = commonService.getRole();

  if(role !== 'USER'){
    routerService.navigate(['/admin'])
    return false;
  }
  return true;
};
