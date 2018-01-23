import { Injectable } from '@angular/core';
import { Router , ActivatedRoute } from '@angular/router';
import { HttpClient, HttpParams, HttpHeaders} from '@angular/common/http';
import 'rxjs/add/operator/map'
import { contentHeaders } from '../../common/headers';

@Injectable()
export class AuthenticationService {
    constructor(private http: HttpClient,private router: Router,  private route: ActivatedRoute) { }

    login(username: string, password: string) {
        return this.http.post<any>('http://localhost/api/login.php', JSON.stringify({ username: username, password: password }))
            .map(user => {
                // login successful if there's a jwt token in the response
               
                if (user.status==200) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }

                return user;
            });
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}