import { Injectable } from '@angular/core';
import { Router , ActivatedRoute } from '@angular/router';
import { HttpClient, HttpParams, HttpHeaders} from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { contentHeaders } from '../../common/headers';
import { User } from '../_models/index';

@Injectable()
export class UserService {
    constructor(private http: HttpClient, private router: Router,  private route: ActivatedRoute,) { }

   
    getAll() {
        return this.http.get<User[]>('http://localhost/api/user.php');
    }

    getById(id: number) {
        return this.http.get('http://localhost/api/api.php' + id);
    }

    create(user: User) {
        return this.http.post('http://localhost/api/api.php', JSON.stringify(user));
    }
     

    update(user: User) {
        return this.http.put('http://localhost/api/api.php' + user.id, user);
    }

    delete(id: number) {
        return this.http.get('http://localhost/api/del.php?id=' + id);
    }
      delete1(id: number) {
        return this.http.delete('http://localhost/api/del.php' + id);
    }
}