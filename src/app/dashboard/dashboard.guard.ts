import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "../auth.service";

@Injectable()
export class DashboardGuard implements CanActivate{
    constructor(
        private auth: AuthService,
        private router: Router
    ) {}

    public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        const canActivate = this.auth.isAuthenticated();
        if (!this.auth.isAuthenticated()) {
            this.router.navigate(['']);
        }
        return canActivate;
    }
}
