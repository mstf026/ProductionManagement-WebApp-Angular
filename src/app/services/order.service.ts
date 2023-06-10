import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Order } from '../models/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  apiUrl = "https://localhost:7094/api/orders/getall"

  constructor(private httpClient:HttpClient) { }

  getOrders():Observable<ListResponseModel<Order>>{
    return this.httpClient.get<ListResponseModel<Order>>(this.apiUrl);
  }
}
