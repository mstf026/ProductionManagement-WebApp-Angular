import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginModel } from '../models/loginModel';
import { SingleResponseModel } from '../models/singleResponseModel';
import { TokenModel } from '../models/tokenModel';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl = 'https://myboschproject2612.azurewebsites.net/api/auth/';
  constructor(private httpClient:HttpClient) { }

  login(loginModel:LoginModel){
    return this.httpClient.post<SingleResponseModel<TokenModel>>(this.apiUrl+"login",loginModel)
  }

  isAuthenticated(){
    if(localStorage.getItem("token")){
      return true;
    }
    else{
      return false;
    }
  }

  deleteToken(){
    if(localStorage.getItem("token")!=null){
      localStorage.clear();
      return true;
    }
    else{
      return false;
    }
  }
}
