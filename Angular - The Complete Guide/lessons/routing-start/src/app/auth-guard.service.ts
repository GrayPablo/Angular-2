import { CanActivate, 
    ActivatedRouteSnapshot,
    Router, 
    RouterStateSnapshot, 
    CanActivateChild} from "@angular/router";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {
    // canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {}

    constructor(private authService: AuthService,
                private router: Router){}
    
    canActivate(
        route: ActivatedRouteSnapshot,
                state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
                    return this.authService.isAuthenticated()
                    .then(
                        (authenticated: boolean) => {
                            if(authenticated){
                                return true;
                            } else {
                                this.router.navigate(['/']);
                            }
                        }
                    )
                }
    
    canActivateChild(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
            return this.canActivate(route, state);
        }
}