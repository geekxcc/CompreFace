/*
 * Copyright (c) 2020 the original author or authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing
 * permissions and limitations under the License.
 */

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Application } from 'src/app/data/interfaces/application';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {

  constructor(private http: HttpClient) { }

  getAll(organizationId: string): Observable<Application[]> {
    return this.http.get<Application[]>(`${environment.apiUrl}org/${organizationId}/apps`);
  }

  create(organizationId: string, name: string): Observable<Application> {
    name = name.trim();
    return this.http.post<Application>(`${environment.apiUrl}org/${organizationId}/app`, { name });
  }

  put(organizationId: string, appId: string, name: string): Observable<Application> {
    name = name.trim();
    return this.http.put<Application>(`${environment.apiUrl}org/${organizationId}/app/${appId}`, { name });
  }

  delete(organizationId: string, appId: string) {
    return this.http.delete(`${environment.apiUrl}org/${organizationId}/app/${appId}`);
  }
}
