import { inject } from '@angular/core';
import { 
  ActivatedRouteSnapshot, 
  CanActivateFn, 
  Router, 
  RouterStateSnapshot
} from '@angular/router';

import { AuthStatus } from 'src/app/interfaces';

import { AuthService } from '../services/auth.service';



export const isAuthenticatedGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot, 
  state: RouterStateSnapshot
) => {

  const authService = inject( AuthService );
  const router      = inject( Router );

  if ( authService.authStatus() === AuthStatus.authenticated ) {
    return true;
  }

  // if ( authService.authStatus() === AuthStatus.checking ) {
  //   return false;
  // }

  // const url = state.url;
  // localStorage.setItem('url', url);
  router.navigateByUrl('/auth/login');
  return false;

};
